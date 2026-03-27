const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const test = require('node:test');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const expectedRelatedLinksByPage = {
    'lovart-brand-kit': ['lovart-logo', 'lovart-design-features', 'what-is-lovart'],
    'lovart-apk': ['lovart-free', 'lovart-pricing', 'lovart-china'],
    'lovart-logo': ['lovart-brand-kit', 'lovart-design-features', 'lovart-free'],
    'lovart-beta': ['lovart-free', 'lovart-pricing', 'what-is-lovart'],
    'lovart-china': ['lovart-apk', 'lovart-free', 'lovart-pricing'],
    'lovart-nano-banana': ['lovart-design-features', 'lovart-ai-code', 'lovart-free'],
    'lovart-invitation-code': ['lovart-free', 'lovart-pricing', 'lovart-promo-code'],
    'lovart-privacy-policy-guide': ['lovart-terms-of-use-guide', 'lovart-customer-support', 'lovart-refund-guide'],
    'lovart-terms-of-use-guide': ['lovart-privacy-policy-guide', 'lovart-customer-support', 'lovart-account-deletion-guide'],
    'lovart-account-deletion-guide': ['lovart-customer-support', 'lovart-support-contact', 'lovart-privacy-policy-guide'],
    'lovart-refund-guide': ['lovart-customer-support', 'lovart-support-contact', 'lovart-pricing']
};

function buildSite() {
    execFileSync(process.execPath, ['build.js'], {
        cwd: projectRoot,
        stdio: 'pipe'
    });
}

function readBuiltPage(pageName) {
    return fs.readFileSync(path.join(distDir, `${pageName}.html`), 'utf8');
}

function extractRelatedSection(html, pageName) {
    const match = html.match(/<section[^>]*id="related-resources"[^>]*>[\s\S]*?<\/section>/i);
    assert.ok(match, `Expected ${pageName} to render a #related-resources section`);
    return match[0];
}

function extractSectionLinks(sectionHtml) {
    return [...sectionHtml.matchAll(/href="\/([^"#?]+)"/g)].map((match) => match[1].replace(/\/$/, ''));
}

test.before(() => {
    buildSite();
});

for (const [pageName, expectedLinks] of Object.entries(expectedRelatedLinksByPage)) {
    test(`renders exact Phase C related links for ${pageName}`, () => {
        const html = readBuiltPage(pageName);
        const relatedSection = extractRelatedSection(html, pageName);
        const actualLinks = extractSectionLinks(relatedSection);

        assert.deepEqual(
            actualLinks,
            expectedLinks,
            `Expected ${pageName} to render ${expectedLinks.join(', ')} inside #related-resources`
        );
    });
}
