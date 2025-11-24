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

        // 3. Load locales
        const locales = {};
        for (const lang of config.supportedLangs) {
            const localePath = path.join(config.srcDir, 'locales', `${lang}.json`);
            if (await fs.pathExists(localePath)) {
                locales[lang] = await fs.readJson(localePath);
            } else {
                console.warn(`Warning: Locale file for ${lang} not found, using empty object.`);
                locales[lang] = {};
            }
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

                    // Prepare data for template
                    const data = {
                        lang: lang,
                        t: locales[lang], // Translation object
                        isDefault: isDefault,
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
