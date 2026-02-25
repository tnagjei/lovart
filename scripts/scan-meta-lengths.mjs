import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/locales');
const LOCALES = ['en', 'zh', 'ja', 'fr', 'es', 'it'];

// Character thresholds based on our refined plan
const THRESHOLDS = {
    zh: 50,
    ja: 50,
    en: 100,
    fr: 100,
    es: 100,
    it: 100
};

// Recursively flatten a nested JSON object into dot-notation keys
function flattenObj(obj, parent = '', res = {}) {
    for (let key in obj) {
        let propName = parent ? parent + '.' + key : key;
        if (typeof obj[key] == 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObj(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
}

function scanLocales() {
    const results = [];

    LOCALES.forEach(locale => {
        const filePath = path.join(LOCALES_DIR, `${locale}.json`);
        if (!fs.existsSync(filePath)) {
            console.warn(`Locale file not found, skipping: ${filePath}`);
            return;
        }

        let content;
        try {
            content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (err) {
            console.error(`Error parsing JSON in ${filePath}`, err);
            return;
        }

        const flatContent = flattenObj(content);
        const threshold = THRESHOLDS[locale];

        for (const [key, value] of Object.entries(flatContent)) {
            const lowerKey = key.toLowerCase();
            // Match if key contains 'desc' or 'description'
            if (typeof value === 'string' && (lowerKey.includes('description') || lowerKey.includes('desc'))) {
                // Exclude specific non-meta keys if necessary, but we'll collect all for now
                if (value.length < threshold) {
                    results.push({
                        locale,
                        key,
                        length: value.length,
                        text: value
                    });
                }
            }
        }
    });

    return results;
}

console.log('Starting scan for short meta descriptions...');
const issues = scanLocales();

if (issues.length > 0) {
    const reportPath = path.join(__dirname, '../docs/meta_length_issues_report.csv');
    let csvContent = 'Locale,Key,Length,Current Text\n';

    // Sort by locale, then length
    issues.sort((a, b) => a.locale.localeCompare(b.locale) || a.length - b.length);

    issues.forEach(issue => {
        // Escape double quotes and remove newlines for CSV format
        const escapedText = issue.text.replace(/"/g, '""').replace(/\n/g, ' ');
        csvContent += `${issue.locale},${issue.key},${issue.length},"${escapedText}"\n`;
    });

    fs.writeFileSync(reportPath, csvContent, 'utf8');
    console.log(`Scan complete! Found ${issues.length} issues that do not meet length thresholds.`);
    console.log(`Detailed report generated at: docs/meta_length_issues_report.csv`);

    // Optional summary
    const counts = issues.reduce((acc, iss) => {
        acc[iss.locale] = (acc[iss.locale] || 0) + 1;
        return acc;
    }, {});
    console.log('\nSummary distribution:', counts);
} else {
    console.log('Scan complete. Great job! No short descriptions found.');
}
