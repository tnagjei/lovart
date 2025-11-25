const fs = require('fs-extra');
const ejs = require('ejs');
const path = require('path');

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

        // 2. Copy assets
        if (await fs.pathExists(path.join(config.srcDir, 'assets'))) {
            await fs.copy(path.join(config.srcDir, 'assets'), path.join(config.distDir, 'assets'));
            console.log('Copied assets');
        }

        // 3. 复制静态目录到所有语言输出，避免多语言页面引用图片 404（产品/前端视角）
        const staticDirs = ['images'];
        for (const dir of staticDirs) {
            const sourceDir = path.join(__dirname, dir);
            if (!(await fs.pathExists(sourceDir))) continue;

            // 默认语言放在 dist 根目录，其他语言放在各自子目录
            await fs.copy(sourceDir, path.join(config.distDir, dir));
            for (const lang of config.supportedLangs) {
                if (lang === config.defaultLang) continue;
                await fs.copy(sourceDir, path.join(config.distDir, lang, dir));
            }
            console.log(`Copied ${dir} for all locales`);
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

                    // Calculate canonical URL
                    const baseUrl = 'https://lovart.info';
                    const urlPath = isDefault ? `${pageName}.html` : `${lang}/${pageName}.html`;
                    const canonicalUrl = `${baseUrl}/${urlPath}`;

                    // Prepare data for template
                    const data = {
                        lang: lang,
                        t: locales[lang], // Translation object
                        isDefault: isDefault,
                        canonicalUrl: canonicalUrl,
                        // Helper to generate localized links
                        link: (path) => {
                            if (isDefault) return path;
                            // Ensure path starts with /
                            const cleanPath = path.startsWith('/') ? path : '/' + path;
                            return `/${lang}${cleanPath}`;
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
