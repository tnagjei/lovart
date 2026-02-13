const fs = require('fs-extra');
const ejs = require('ejs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
    srcDir: path.join(__dirname, 'src'),
    distDir: path.join(__dirname, 'dist'),
    defaultLang: 'en', // English is default
    supportedLangs: ['en', 'zh', 'fr', 'ja']
};

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
        // We now use absolute paths (e.g., /images/foo.jpg) so no need to copy to language subdirs
        if (await fs.pathExists(path.join(__dirname, 'public'))) {
            await fs.copy(path.join(__dirname, 'public'), config.distDir);
            console.log('Copied public directory to dist');
        }

        // 3. Load locales
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

        // 4. Build pages
        const templatesDir = path.join(config.srcDir, 'templates');
        if (!await fs.pathExists(templatesDir)) {
            console.error('Error: Templates directory not found.');
            return;
        }

        const templateFiles = await fs.readdir(templatesDir);

        for (const file of templateFiles) {
            if (path.extname(file) === '.ejs') {
                const templatePath = path.join(templatesDir, file);
                const template = await fs.readFile(templatePath, 'utf-8');
                const pageName = path.basename(file, '.ejs'); // e.g., 'index'

                for (const lang of config.supportedLangs) {
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

                    // Calculate canonical URL (Option A: No .html extension for clean URLs)
                    const baseUrl = 'https://lovart.info';
                    let urlPath;
                    if (pageName === 'index') {
                        urlPath = isDefault ? '' : `${lang}/`;
                    } else {
                        // Strip .html for all other pages as well
                        urlPath = isDefault ? `${pageName}` : `${lang}/${pageName}`;
                    }
                    const canonicalUrl = `${baseUrl}/${urlPath}`;

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
                        pageName: pageName, // For hreflang
                        supportedLangs: config.supportedLangs, // For hreflang
                        // Helper to generate localized links with Plan A suffixless policy
                        link: (rawPath) => {
                            if (typeof rawPath !== 'string') {
                                return rawPath;
                            }

                            if (/^(https?:)?\/\//i.test(rawPath) || rawPath.startsWith('mailto:') || rawPath.startsWith('tel:')) {
                                return rawPath;
                            }

                            const localizedPath = isDefault
                                ? rawPath
                                : `/${lang}${rawPath.startsWith('/') ? rawPath : `/${rawPath}`}`;

                            return normalizeInternalPath(localizedPath);
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

        console.log('Build completed successfully!');

    } catch (err) {
        console.error('Build failed:', err);
    }
}

build();
