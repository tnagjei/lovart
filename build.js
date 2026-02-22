const fs = require('fs-extra');
const ejs = require('ejs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const baseSupportedLangs = ['en', 'zh', 'fr', 'ja'];
const extendedSupportedLangs = [...baseSupportedLangs, 'es', 'it'];
const esItCorePages = [
    'lovart-customer-support',
    'lovart-support-contact',
    'lovart-refund-guide',
    'lovart-account-deletion-guide',
    'lovart-privacy-policy-guide',
    'lovart-terms-of-use-guide',
    'lovart-pricing',
    'lovart-api'
];
const noindexLangs = new Set(['es', 'it']);
const noindexShellPages = new Set(esItCorePages);

const pageLangMap = Object.fromEntries(
    esItCorePages.map((pageName) => [pageName, [...extendedSupportedLangs]])
);

const config = {
    srcDir: path.join(__dirname, 'src'),
    distDir: path.join(__dirname, 'dist'),
    defaultLang: 'en', // English is default
    supportedLangs: extendedSupportedLangs,
    defaultPageLangs: baseSupportedLangs,
    pageLangMap
};

const baseUrl = 'https://lovart.info';

function getLocalizedCanonicalPath(pageName, lang, defaultLang) {
    if (pageName === 'index') {
        return lang === defaultLang ? '/' : `/${lang}/`;
    }

    return lang === defaultLang ? `/${pageName}` : `/${lang}/${pageName}`;
}

function getLocalizedCanonicalUrl(pageName, lang, defaultLang) {
    return `${baseUrl}${getLocalizedCanonicalPath(pageName, lang, defaultLang)}`;
}

function resolvePageSupportedLangs(pageName, cfg) {
    const mappedLangs = cfg.pageLangMap[pageName];
    const fallbackLangs = cfg.defaultPageLangs;
    const requestedLangs = Array.isArray(mappedLangs) && mappedLangs.length
        ? mappedLangs
        : fallbackLangs;

    const normalizedLangs = cfg.supportedLangs.filter((lang) => requestedLangs.includes(lang));
    if (!normalizedLangs.includes(cfg.defaultLang)) {
        return [cfg.defaultLang, ...normalizedLangs.filter((lang) => lang !== cfg.defaultLang)];
    }

    return normalizedLangs;
}

function shouldNoindexPage(pageName, lang) {
    return noindexLangs.has(lang) && noindexShellPages.has(pageName);
}

function buildSitemapXml(pageNames, getPageSupportedLangs, defaultLang, isIndexablePage) {
    const lastmod = new Date().toISOString().split('T')[0];
    const orderedPageNames = ['index', ...pageNames.filter((pageName) => pageName !== 'index').sort()];

    const urlEntries = [];

    for (const pageName of orderedPageNames) {
        const pageSupportedLangs = getPageSupportedLangs(pageName)
            .filter((lang) => isIndexablePage(pageName, lang));
        if (!pageSupportedLangs.length) {
            continue;
        }

        const hreflangLinks = pageSupportedLangs.map((hrefLang) => ({
            hreflang: hrefLang,
            href: getLocalizedCanonicalUrl(pageName, hrefLang, defaultLang)
        }));
        const xDefaultLang = pageSupportedLangs.includes(defaultLang) ? defaultLang : pageSupportedLangs[0];
        const xDefaultHref = getLocalizedCanonicalUrl(pageName, xDefaultLang, defaultLang);

        for (const lang of pageSupportedLangs) {
            const loc = getLocalizedCanonicalUrl(pageName, lang, defaultLang);
            const linkXml = [
                ...hreflangLinks.map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`),
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}"/>`
            ].join('\n');

            urlEntries.push(`  <url>\n    <loc>${loc}</loc>\n${linkXml}\n    <lastmod>${lastmod}</lastmod>\n  </url>`);
        }
    }

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n${urlEntries.join('\n\n')}\n</urlset>\n`;
}

async function build() {
    try {
        // 1. Clean dist directory
        await fs.emptyDir(config.distDir);
        console.log('Cleaned dist directory');

        // 1.5 Build CSS
        console.log('Building CSS...');
        execSync('npm run build:css', { stdio: 'inherit' });
        console.log('CSS built successfully');

        // 2. Copy assets
        if (await fs.pathExists(path.join(config.srcDir, 'assets'))) {
            await fs.copy(path.join(config.srcDir, 'assets'), path.join(config.distDir, 'assets'));
            console.log('Copied assets');
        }

        // 3. Copy public directory to dist root (images, robots.txt, etc.)
        if (await fs.pathExists(path.join(__dirname, 'public'))) {
            await fs.copy(path.join(__dirname, 'public'), config.distDir);
            console.log('Copied public directory to dist');
        }

        // 3. Load locales
        const locales = {};
        const defaultLocalePath = path.join(config.srcDir, 'locales', `${config.defaultLang}.json`);
        let defaultLocale = {};

        if (await fs.pathExists(defaultLocalePath)) {
            defaultLocale = await fs.readJson(defaultLocalePath);
        } else {
            console.error('Error: Default locale file not found.');
            return;
        }

        // Helper function for deep merge
        const deepMerge = (target, source) => {
            for (const key in source) {
                if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                    if (!target[key]) target[key] = {};
                    deepMerge(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
            return target;
        };

        for (const lang of config.supportedLangs) {
            // Start with a deep copy of the default locale
            let localeData = JSON.parse(JSON.stringify(defaultLocale));

            if (lang !== config.defaultLang) {
                const localePath = path.join(config.srcDir, 'locales', `${lang}.json`);
                if (await fs.pathExists(localePath)) {
                    const langData = await fs.readJson(localePath);
                    // Merge language specific data on top of default
                    deepMerge(localeData, langData);
                } else {
                    console.warn(`Warning: Locale file for ${lang} not found, using default (${config.defaultLang}).`);
                }
            }
            locales[lang] = localeData;
        }

        const normalizeImageSrc = (rawSrc) => {
            if (typeof rawSrc !== 'string') {
                return '';
            }

            const source = rawSrc.split(/[?#]/)[0].trim();
            if (!source) {
                return '';
            }

            if (/^https?:\/\//i.test(source)) {
                try {
                    const parsedUrl = new URL(source);
                    return parsedUrl.pathname || source;
                } catch (err) {
                    return source;
                }
            }

            return source;
        };

        const getNestedValue = (obj, dottedPath) => {
            if (!obj || typeof dottedPath !== 'string' || !dottedPath) {
                return '';
            }

            if (Object.prototype.hasOwnProperty.call(obj, dottedPath)) {
                return obj[dottedPath];
            }
            return undefined;
        };

        // 4. Build pages
        const templatesDir = path.join(config.srcDir, 'templates');
        if (!await fs.pathExists(templatesDir)) {
            console.error('Error: Templates directory not found.');
            return;
        }

        const templateFiles = await fs.readdir(templatesDir);
        const pageNames = templateFiles
            .filter((file) => path.extname(file) === '.ejs')
            .map((file) => path.basename(file, '.ejs'));
        const getPageSupportedLangs = (pageName) => resolvePageSupportedLangs(pageName, config);

        for (const file of templateFiles) {
            if (path.extname(file) === '.ejs') {
                const templatePath = path.join(templatesDir, file);
                const template = await fs.readFile(templatePath, 'utf-8');
                const pageName = path.basename(file, '.ejs'); // e.g., 'index'
                const pageSupportedLangs = getPageSupportedLangs(pageName);

                const resolveTargetPageName = (rawPath) => {
                    if (typeof rawPath !== 'string') {
                        return null;
                    }

                    if (/^(https?:)?\/\//i.test(rawPath) || rawPath.startsWith('mailto:') || rawPath.startsWith('tel:')) {
                        return null;
                    }

                    const match = rawPath.match(/^([^?#]*)([?#].*)?$/);
                    if (!match) {
                        return null;
                    }

                    let basePath = match[1];
                    if (!basePath) {
                        return 'index';
                    }

                    if (basePath.startsWith('/')) {
                        basePath = basePath.slice(1);
                    }
                    if (basePath.endsWith('/')) {
                        basePath = basePath.slice(0, -1);
                    }
                    if (!basePath) {
                        return 'index';
                    }

                    const segments = basePath.split('/').filter(Boolean);
                    if (!segments.length) {
                        return 'index';
                    }
                    if (config.supportedLangs.includes(segments[0])) {
                        segments.shift();
                    }
                    if (!segments.length) {
                        return 'index';
                    }

                    const lastSegment = segments[segments.length - 1];
                    const pageSlug = lastSegment.endsWith('.html') ? lastSegment.slice(0, -5) : lastSegment;
                    return pageSlug || 'index';
                };

                for (const lang of pageSupportedLangs) {
                    const isDefault = lang === config.defaultLang;

                    // Determine output path
                    // Default (en) -> dist/index.html
                    // Others (zh) -> dist/zh/index.html
                    let outputPath;
                    if (isDefault) {
                        outputPath = path.join(config.distDir, `${pageName}.html`);
                    } else {
                        outputPath = path.join(config.distDir, lang, `${pageName}.html`);
                    }

                    // Calculate canonical URL (suffixless clean URLs)
                    const canonicalUrl = getLocalizedCanonicalUrl(pageName, lang, config.defaultLang);

                    const normalizeInternalPath = (rawPath) => {
                        if (typeof rawPath !== 'string') {
                            return rawPath;
                        }

                        if (/^(https?:)?\/\//i.test(rawPath) || rawPath.startsWith('mailto:') || rawPath.startsWith('tel:')) {
                            return rawPath;
                        }

                        const match = rawPath.match(/^([^?#]*)([?#].*)?$/);
                        if (!match) {
                            return rawPath;
                        }

                        const basePath = match[1];
                        const suffix = match[2] || '';
                        if (!basePath) {
                            return rawPath;
                        }

                        let normalizedPath = basePath.startsWith('/') ? basePath : `/${basePath}`;

                        if (normalizedPath.endsWith('.html')) {
                            normalizedPath = normalizedPath.slice(0, -5);
                        }

                        if (normalizedPath.endsWith('/index')) {
                            normalizedPath = `${normalizedPath.slice(0, -6)}/`;
                        }

                        if (normalizedPath === '') {
                            normalizedPath = '/';
                        }

                        return `${normalizedPath}${suffix}`;
                    };

                    // Prepare data for template
                    const data = {
                        lang: lang,
                        t: locales[lang], // Translation object
                        isDefault: isDefault,
                        canonicalUrl: canonicalUrl,
                        robotsDirective: shouldNoindexPage(pageName, lang) ? 'noindex,follow' : 'index,follow',
                        pageName: pageName, // For hreflang
                        supportedLangs: pageSupportedLangs.filter(l => !shouldNoindexPage(pageName, l)), // For hreflang
                        pageSupportedLangs: pageSupportedLangs.filter(l => !shouldNoindexPage(pageName, l)),
                        defaultLang: config.defaultLang,
                        // Helper to generate localized links with Plan A suffixless policy
                        link: (rawPath) => {
                            if (typeof rawPath !== 'string') {
                                return rawPath;
                            }

                            if (/^(https?:)?\/\//i.test(rawPath) || rawPath.startsWith('mailto:') || rawPath.startsWith('tel:')) {
                                return rawPath;
                            }

                            const targetPageName = resolveTargetPageName(rawPath);
                            const targetPageLangs = targetPageName
                                ? getPageSupportedLangs(targetPageName)
                                : config.defaultPageLangs;
                            const shouldLocalizePath = !isDefault && targetPageName && targetPageLangs.includes(lang);
                            const localizedPath = shouldLocalizePath
                                ? `/${lang}${rawPath.startsWith('/') ? rawPath : `/${rawPath}`}`
                                : rawPath;

                            return normalizeInternalPath(localizedPath);
                        },
                        imageAlt: (src, options = {}) => {
                            const normalizedSrc = normalizeImageSrc(src);
                            const localeAssets = (locales[lang] && locales[lang].assets) || {};
                            const fallbackAssets = (defaultLocale && defaultLocale.assets) || {};
                            const contextKey = typeof options.contextKey === 'string' ? options.contextKey : '';
                            const fallback = typeof options.fallback === 'string' ? options.fallback : '';

                            const contextAlt = contextKey ? getNestedValue(localeAssets.image_context, contextKey) : '';
                            const imageAltBySrc = normalizedSrc && localeAssets.images ? localeAssets.images[normalizedSrc] : '';
                            const safeFallback = localeAssets.default_alt || fallbackAssets.default_alt || 'Image';

                            const resolvedAlt = contextAlt || imageAltBySrc || fallback || safeFallback;
                            return typeof resolvedAlt === 'string' && resolvedAlt.trim()
                                ? resolvedAlt.trim()
                                : safeFallback;
                        }
                    };

                    // Render HTML
                    const html = ejs.render(template, data, { filename: templatePath });

                    // Write to file
                    await fs.ensureDir(path.dirname(outputPath));
                    await fs.writeFile(outputPath, html);
                    console.log(`Generated: ${outputPath}`);
                }
            }
        }

        // 5. Generate sitemap.xml with full multilingual loc coverage
        const sitemapXml = buildSitemapXml(
            pageNames,
            getPageSupportedLangs,
            config.defaultLang,
            (pageName, lang) => !shouldNoindexPage(pageName, lang)
        );
        await fs.writeFile(path.join(config.distDir, 'sitemap.xml'), sitemapXml);
        console.log('Generated: sitemap.xml');

        console.log('Build completed successfully!');

    } catch (err) {
        console.error('Build failed:', err);
    }
}

build();
