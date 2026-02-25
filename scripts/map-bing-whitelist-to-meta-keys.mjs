import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const DEFAULT_WHITELIST_PATH = path.join(projectRoot, 'docs/bing_meta_33_urls.txt');
const DEFAULT_ISSUES_PATH = path.join(projectRoot, 'docs/meta_length_issues_report.csv');
const DEFAULT_OUTPUT_PATH = path.join(projectRoot, 'docs/bing_meta_33_whitelist_mapping.csv');
const DEFAULT_LOCALES_DIR = path.join(projectRoot, 'src/locales');

const SUPPORTED_LOCALES = new Set(['en', 'zh', 'fr', 'ja', 'es', 'it']);
const FEATURED_BLOG_SLUG = 'how-ai-is-reshaping-modern-design-workflows';
const LATEST_BLOG_SLUGS = [
    'master-lovart-ai-design-in-5-minutes',
    'ui-ux-design-trends-2024',
    'how-designers-boost-efficiency-with-lovart',
    'ai-assisted-product-design-best-practices',
    'break-creative-block-with-ai-inspiration',
    'lovart-january-update-new-features'
];

const PAGE_META_KEY_MAP = new Map([
    ['index', 'seo.description'],
    ['blog', 'blog_page.seo.description'],
    ['about', 'about_page.seo.description'],
    ['help', 'help_page.seo.description'],
    ['lovart-pricing', 'pricing_page.seo.description'],
    ['lovart-design-features', 'features_page.seo.description'],
    ['lovart-api', 'lovart_api_page.seo.description'],
    ['lovart-free', 'lovart_free_page.seo.description'],
    ['lovart-review', 'lovart_review_page.seo.description'],
    ['lovart-alternative', 'lovart_alternative_page.seo.description'],
    ['lovart-tutorial', 'lovart_tutorial_page.seo.description'],
    ['what-is-lovart', 'what_is_lovart_page.seo.description'],
    ['lovart-ai-code', 'lovart_ai_code_page.seo.description'],
    ['lovart-login-guide', 'lovart_login_page.seo.description'],
    ['lovart-promo-code', 'lovart_promo_page.seo.description'],
    ['lovart-company', 'lovart_company_page.seo.description'],
    ['lovart-ai-agent', 'lovart_ai_agent_page.seo.description'],
    ['lovarte', 'lovarte_page.seo.description'],
    ['lovart-code', 'lovart_code_page.seo.description'],
    ['privacy-policy', 'privacy_page.seo.description'],
    ['terms-of-service', 'terms_page.seo.description'],
    ['lovart-customer-support', 'support_cluster.pages.customer_support.seo.description'],
    ['lovart-support-contact', 'support_cluster.pages.support_contact.seo.description'],
    ['lovart-refund-guide', 'support_cluster.pages.refund_guide.seo.description'],
    ['lovart-account-deletion-guide', 'support_cluster.pages.account_deletion_guide.seo.description'],
    ['lovart-privacy-policy-guide', 'support_cluster.pages.privacy_policy_guide.seo.description'],
    ['lovart-terms-of-use-guide', 'support_cluster.pages.terms_of_use_guide.seo.description'],
    ['lovart-prompt-guide', 'seo.prompt_guide.description'],
    ['lovart-logo', 'seo.lovart_logo.description'],
    ['lovart-brand-kit', 'seo.lovart_brand_kit.description'],
    ['lovart-apk', 'seo.lovart_apk.description'],
    ['lovart-nano-banana', 'seo.lovart_nano_banana.description'],
    ['lovart-invitation-code', 'seo.lovart_invitation_code.description'],
    ['lovart-china', 'seo.lovart_china.description'],
    ['lovart-beta', 'seo.lovart_beta.description']
]);

function resolvePath(inputPath, fallbackPath) {
    if (!inputPath) {
        return fallbackPath;
    }
    if (path.isAbsolute(inputPath)) {
        return inputPath;
    }
    return path.join(projectRoot, inputPath);
}

function parseCsvLine(line) {
    const cells = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"' && inQuotes && nextChar === '"') {
            current += '"';
            i += 1;
            continue;
        }

        if (char === '"') {
            inQuotes = !inQuotes;
            continue;
        }

        if (char === ',' && !inQuotes) {
            cells.push(current);
            current = '';
            continue;
        }

        current += char;
    }

    cells.push(current);
    return cells;
}

function flattenObject(obj, parent = '', out = new Map()) {
    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            const nextPath = parent ? `${parent}.${index}` : String(index);
            flattenObject(item, nextPath, out);
        });
        return out;
    }

    if (obj && typeof obj === 'object') {
        for (const [key, value] of Object.entries(obj)) {
            const nextPath = parent ? `${parent}.${key}` : key;
            flattenObject(value, nextPath, out);
        }
        return out;
    }

    out.set(parent, obj);
    return out;
}

function deepMerge(target, source) {
    for (const [key, value] of Object.entries(source || {})) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
                target[key] = {};
            }
            deepMerge(target[key], value);
        } else {
            target[key] = value;
        }
    }
    return target;
}

function loadMergedLocaleValueMap(localesDir) {
    const defaultLocalePath = path.join(localesDir, 'en.json');
    const defaultLocale = JSON.parse(fs.readFileSync(defaultLocalePath, 'utf8'));
    const localeValueMap = new Map();

    for (const locale of SUPPORTED_LOCALES) {
        const merged = JSON.parse(JSON.stringify(defaultLocale));
        if (locale !== 'en') {
            const localePath = path.join(localesDir, `${locale}.json`);
            if (fs.existsSync(localePath)) {
                const localeData = JSON.parse(fs.readFileSync(localePath, 'utf8'));
                deepMerge(merged, localeData);
            }
        }
        localeValueMap.set(locale, flattenObject(merged));
    }

    return localeValueMap;
}

function escapeCsvCell(value) {
    const raw = value == null ? '' : String(value);
    const escaped = raw.replace(/"/g, '""');
    return `"${escaped}"`;
}

function normalizeInputUrl(rawUrl) {
    const compact = String(rawUrl || '').trim().replace(/\s+/g, '');
    if (!compact) {
        return null;
    }

    const hasScheme = /^https?:\/\//i.test(compact);
    const candidate = hasScheme ? compact : `https://lovart.info/${compact.replace(/^\/+/, '')}`;

    let parsed;
    try {
        parsed = new URL(candidate);
    } catch (err) {
        return { rawUrl, error: 'invalid_url' };
    }

    const host = parsed.hostname.toLowerCase();
    if (!host.endsWith('lovart.info')) {
        return { rawUrl, error: `unsupported_host:${host}` };
    }

    let pathname = decodeURI(parsed.pathname || '/');
    pathname = pathname.replace(/\/index\.html$/i, '/').replace(/\.html$/i, '');
    pathname = pathname.replace(/\/{2,}/g, '/');
    if (pathname !== '/' && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
    }

    const segments = pathname.split('/').filter(Boolean);
    let locale = 'en';

    if (segments.length && SUPPORTED_LOCALES.has(segments[0])) {
        locale = segments.shift();
    }

    const slug = segments.length ? segments.join('/') : 'index';
    const normalizedPath = locale === 'en'
        ? (slug === 'index' ? '/' : `/${slug}`)
        : (slug === 'index' ? `/${locale}/` : `/${locale}/${slug}`);

    return {
        rawUrl,
        normalizedUrl: `https://lovart.info${normalizedPath}`,
        locale,
        slug
    };
}

function resolveMetaKeyBySlug(slug) {
    if (slug.startsWith('blog-')) {
        const articleSlug = slug.slice('blog-'.length);
        if (articleSlug === FEATURED_BLOG_SLUG) {
            return 'blog_page.featured.desc';
        }
        const latestIndex = LATEST_BLOG_SLUGS.indexOf(articleSlug);
        if (latestIndex !== -1) {
            return `blog_page.latest.posts.${latestIndex}.desc`;
        }
        return null;
    }

    return PAGE_META_KEY_MAP.get(slug) || null;
}

function loadIssuesMap(issuesPath) {
    const content = fs.readFileSync(issuesPath, 'utf8');
    const lines = content.split(/\r?\n/).filter(Boolean);
    const issueMap = new Map();
    const keyToLocalesMap = new Map();

    for (const line of lines.slice(1)) {
        const [locale, key, length, text] = parseCsvLine(line);
        if (!locale || !key || !length) {
            continue;
        }
        const parsedLength = Number(length);
        const issueRecord = {
            locale,
            key,
            length: Number.isFinite(parsedLength) ? parsedLength : null,
            text: text || ''
        };
        issueMap.set(`${locale}::${key}`, issueRecord);

        if (!keyToLocalesMap.has(key)) {
            keyToLocalesMap.set(key, []);
        }
        keyToLocalesMap.get(key).push(issueRecord);
    }

    return { issueMap, keyToLocalesMap };
}

function loadWhitelistUrls(whitelistPath) {
    const content = fs.readFileSync(whitelistPath, 'utf8');
    const lines = content.split(/\r?\n/);
    const urls = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) {
            continue;
        }
        const firstCell = parseCsvLine(trimmed)[0];
        const candidate = String(firstCell || '').trim().replace(/^\uFEFF/, '');
        const lower = candidate.toLowerCase();
        if (lower === 'url' || lower === '"url"') {
            continue;
        }
        if (candidate) {
            urls.push(candidate);
        }
    }

    return urls;
}

function buildRows(whitelistUrls, issueMap, keyToLocalesMap, localeValueMap) {
    const rows = [];
    const seen = new Set();

    for (const rawUrl of whitelistUrls) {
        const normalized = normalizeInputUrl(rawUrl);
        if (!normalized) {
            continue;
        }

        if (normalized.error) {
            rows.push({
                rawUrl,
                normalizedUrl: '',
                locale: '',
                slug: '',
                key: '',
                inIssues: 'N',
                length: '',
                text: '',
                notes: normalized.error
            });
            continue;
        }

        if (seen.has(normalized.normalizedUrl)) {
            continue;
        }
        seen.add(normalized.normalizedUrl);

        const key = resolveMetaKeyBySlug(normalized.slug);
        if (!key) {
            rows.push({
                rawUrl,
                normalizedUrl: normalized.normalizedUrl,
                locale: normalized.locale,
                slug: normalized.slug,
                key: '',
                inIssues: 'N',
                length: '',
                text: '',
                notes: 'meta_key_not_mapped'
            });
            continue;
        }

        const directIssue = issueMap.get(`${normalized.locale}::${key}`);
        const localeValues = localeValueMap.get(normalized.locale);
        const currentText = localeValues && localeValues.has(key)
            ? localeValues.get(key)
            : '';
        const currentLength = typeof currentText === 'string' ? currentText.length : '';
        const sameKeyOtherLocales = keyToLocalesMap.get(key) || [];
        const otherLocalesText = sameKeyOtherLocales
            .filter((item) => item.locale !== normalized.locale)
            .map((item) => `${item.locale}:${item.length}`)
            .join('|');

        rows.push({
            rawUrl,
            normalizedUrl: normalized.normalizedUrl,
            locale: normalized.locale,
            slug: normalized.slug,
            key,
            inIssues: directIssue ? 'Y' : 'N',
            issueLength: directIssue ? directIssue.length : '',
            currentLength,
            currentText: typeof currentText === 'string' ? currentText : '',
            notes: directIssue
                ? ''
                : (otherLocalesText ? `key_has_issues_in_other_locales:${otherLocalesText}` : 'key_not_in_issues_report')
        });
    }

    return rows;
}

function writeMappingCsv(outputPath, rows) {
    const header = [
        'Input URL',
        'Normalized URL',
        'Locale',
        'Slug',
        'Meta Key',
        'In 272 Issues',
        'Issue Length (From Report)',
        'Current Length (From Locale)',
        'Current Text',
        'Notes'
    ];

    const lines = [header.map(escapeCsvCell).join(',')];
    for (const row of rows) {
        lines.push([
            row.rawUrl,
            row.normalizedUrl,
            row.locale,
            row.slug,
            row.key,
            row.inIssues,
            row.issueLength,
            row.currentLength,
            row.currentText,
            row.notes
        ].map(escapeCsvCell).join(','));
    }

    fs.writeFileSync(outputPath, `${lines.join('\n')}\n`, 'utf8');
}

function main() {
    const whitelistPath = resolvePath(process.argv[2], DEFAULT_WHITELIST_PATH);
    const issuesPath = resolvePath(process.argv[3], DEFAULT_ISSUES_PATH);
    const outputPath = resolvePath(process.argv[4], DEFAULT_OUTPUT_PATH);

    if (!fs.existsSync(whitelistPath)) {
        console.error(`Whitelist file not found: ${whitelistPath}`);
        process.exit(1);
    }
    if (!fs.existsSync(issuesPath)) {
        console.error(`Issues report not found: ${issuesPath}`);
        process.exit(1);
    }

    const whitelistUrls = loadWhitelistUrls(whitelistPath);
    const { issueMap, keyToLocalesMap } = loadIssuesMap(issuesPath);
    const localeValueMap = loadMergedLocaleValueMap(DEFAULT_LOCALES_DIR);
    const rows = buildRows(whitelistUrls, issueMap, keyToLocalesMap, localeValueMap);
    writeMappingCsv(outputPath, rows);

    const resolvedCount = rows.filter((row) => row.key).length;
    const matchedCount = rows.filter((row) => row.inIssues === 'Y').length;
    const unresolvedCount = rows.filter((row) => {
        if (!row.key) {
            return true;
        }
        if (!row.notes) {
            return false;
        }
        return row.notes.startsWith('invalid_url')
            || row.notes.startsWith('unsupported_host')
            || row.notes === 'meta_key_not_mapped';
    }).length;

    console.log(`Whitelist URLs: ${rows.length}`);
    console.log(`Mapped meta keys: ${resolvedCount}`);
    console.log(`Directly matched in issues report: ${matchedCount}`);
    console.log(`Rows requiring review: ${unresolvedCount}`);
    console.log(`Output: ${path.relative(projectRoot, outputPath)}`);
}

main();
