// input: CLI args (--urls/--file/--added/--updated/--deleted) and optional env INDEXNOW_KEY.
// output: Sends IndexNow payload and prints HTTP status/body for CI or manual verification.
// pos: scripts/indexnow-submit.js（更新规则：文件变更需同步本注释与所属目录 README）

const fs = require('fs');
const path = require('path');
const https = require('https');

function parseArgs(argv) {
    const args = {
        host: 'lovart.info',
        endpoint: 'https://www.bing.com/indexnow',
        key: process.env.INDEXNOW_KEY || '',
        keyLocation: '',
        urls: [],
        file: '',
        dryRun: false
    };

    for (let index = 0; index < argv.length; index += 1) {
        const token = argv[index];
        const next = argv[index + 1];

        if (token === '--host' && next) {
            args.host = next.trim();
            index += 1;
            continue;
        }
        if (token === '--endpoint' && next) {
            args.endpoint = next.trim();
            index += 1;
            continue;
        }
        if (token === '--key' && next) {
            args.key = next.trim();
            index += 1;
            continue;
        }
        if (token === '--key-location' && next) {
            args.keyLocation = next.trim();
            index += 1;
            continue;
        }
        if (token === '--file' && next) {
            args.file = next.trim();
            index += 1;
            continue;
        }
        if ((token === '--urls' || token === '--added' || token === '--updated' || token === '--deleted') && next) {
            const list = next
                .split(',')
                .map((item) => item.trim())
                .filter(Boolean);
            args.urls.push(...list);
            index += 1;
            continue;
        }
        if (token === '--dry-run') {
            args.dryRun = true;
        }
    }

    return args;
}

function readDefaultKey() {
    const keyPath = path.join(process.cwd(), 'public', 'indexnow.txt');
    if (!fs.existsSync(keyPath)) {
        return '';
    }

    return fs.readFileSync(keyPath, 'utf-8').trim();
}

function readUrlsFromFile(filePath) {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
        throw new Error(`URL file not found: ${filePath}`);
    }

    return fs
        .readFileSync(fullPath, 'utf-8')
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'));
}

function normalizeUrlList(host, urls) {
    const uniqueUrls = [];
    const seen = new Set();

    for (const item of urls) {
        let normalized;

        if (/^https?:\/\//i.test(item)) {
            normalized = item;
        } else {
            const cleanPath = item.startsWith('/') ? item : `/${item}`;
            normalized = `https://${host}${cleanPath}`;
        }

        try {
            const parsed = new URL(normalized);
            if (parsed.hostname !== host) {
                throw new Error(`URL host mismatch: ${normalized}`);
            }
            const finalUrl = `${parsed.origin}${parsed.pathname}${parsed.search}`;
            if (!seen.has(finalUrl)) {
                seen.add(finalUrl);
                uniqueUrls.push(finalUrl);
            }
        } catch (error) {
            throw new Error(`Invalid URL: ${normalized}`);
        }
    }

    return uniqueUrls;
}

function postIndexNow(endpoint, payload) {
    const endpointUrl = new URL(endpoint);
    const requestBody = JSON.stringify(payload);

    return new Promise((resolve, reject) => {
        const request = https.request(
            {
                protocol: endpointUrl.protocol,
                hostname: endpointUrl.hostname,
                path: endpointUrl.pathname,
                port: endpointUrl.port || 443,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Content-Length': Buffer.byteLength(requestBody)
                }
            },
            (response) => {
                let body = '';
                response.on('data', (chunk) => {
                    body += chunk;
                });
                response.on('end', () => {
                    resolve({ statusCode: response.statusCode || 0, body });
                });
            }
        );

        request.on('error', (error) => reject(error));
        request.write(requestBody);
        request.end();
    });
}

async function main() {
    const args = parseArgs(process.argv.slice(2));

    if (!args.key) {
        args.key = readDefaultKey();
    }
    if (!args.key) {
        throw new Error('Missing key. Pass --key or set INDEXNOW_KEY, or put key in public/indexnow.txt');
    }

    if (args.file) {
        args.urls.push(...readUrlsFromFile(args.file));
    }

    const urlList = normalizeUrlList(args.host, args.urls);
    if (!urlList.length) {
        throw new Error('No URLs to submit. Use --urls or --file');
    }

    const keyLocation = args.keyLocation || `https://${args.host}/${args.key}.txt`;
    const payload = {
        host: args.host,
        key: args.key,
        keyLocation,
        urlList
    };

    console.log('[IndexNow] Endpoint:', args.endpoint);
    console.log('[IndexNow] URLs:', urlList.length);
    console.log('[IndexNow] Key location:', keyLocation);

    if (args.dryRun) {
        console.log('[IndexNow] Dry run payload:');
        console.log(JSON.stringify(payload, null, 2));
        return;
    }

    const result = await postIndexNow(args.endpoint, payload);
    console.log(`[IndexNow] HTTP ${result.statusCode}`);
    if (result.body) {
        console.log(result.body);
    }

    if (result.statusCode < 200 || result.statusCode >= 300) {
        process.exitCode = 1;
    }
}

main().catch((error) => {
    console.error('[IndexNow] Error:', error.message);
    process.exit(1);
});
