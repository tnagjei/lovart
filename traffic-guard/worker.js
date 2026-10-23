const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type',
};

const BOT_UA = /bot|crawler|spider|slurp|headless|phantom|selenium|lighthouse|pagespeed|pingdom|uptime|curl|wget|python|java|go-http|libwww|scrapy|bytespider|semrush|ahrefs|dataforseo|mj12|dotbot|petalbot|yandexbot|baiduspider|bingpreview|facebookexternalhit|meta-externalagent/i;
const CRAWLER_UA = /googlebot|bingbot|duckduckbot|yandexbot|baiduspider|applebot|petalbot|gptbot|claudebot|perplexitybot|oai-searchbot/i;

const origins = (origin) => {
  try { return new Set([new URL(origin).hostname.toLowerCase()]); } catch { return new Set(); }
};

function headers(extra = {}) {
  return { ...CORS, 'cache-control': 'no-store', ...extra };
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: headers({ 'content-type': 'application/json; charset=utf-8' }),
  });
}

function day(ts) {
  return new Date(ts).toISOString().slice(0, 10);
}

function cleanText(value, max = 512) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max) : '';
}

function isAllowedOrigin(origin) {
  try {
    const host = new URL(origin).hostname.toLowerCase();
    return host === 'lovart.info' || host.endsWith('.lovart.info') ||
      host === 'lovart-2ix.pages.dev' || host.endsWith('.lovart-2ix.pages.dev');
  } catch {
    return false;
  }
}

function cleanInt(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.min(99999, Math.trunc(n))) : fallback;
}

function cleanTimestamp(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 946684800000 ? Math.trunc(n) : Date.now();
}

function scoreEvent(ev, request, country, asn) {
  let score = 0;
  let flags = cleanInt(ev.f);
  const ua = cleanText(ev.ua, 400);
  const isBot = BOT_UA.test(ua) || flags !== 0;
  const isCrawler = CRAWLER_UA.test(ua);
  if (isCrawler) return { score: 0, flags, verdict: 'crawler' };
  if (isBot) return { score: 100, flags, verdict: 'bot' };
  if (ev.wd === 1) { score += 80; flags |= 1; }
  if (cleanInt(ev.screen?.[0]) === 0 && cleanInt(ev.screen?.[1]) === 0) score += 25;
  if (cleanInt(ev.st) > 0 && cleanInt(ev.st) < 1500) score += 20;
  if (cleanInt(ev.i) === 0 && cleanInt(ev.st) > 0) score += 10;
  if (asn === 13335 || asn === 209242) score += 0; // Cloudflare requests are expected here.
  if (country && ['CN', 'US'].includes(country) && /bot/i.test(ua)) score += 10;
  if (request.headers.get('accept-language') === null) score += 8;
  if (request.headers.get('sec-ch-ua') === null && /chrome/i.test(ua)) score += 8;
  score = Math.min(100, score);
  return {
    score,
    flags,
    verdict: score >= 70 ? 'bot' : score >= 30 ? 'suspect' : 'clean',
  };
}

async function ingest(request, env) {
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  if (!isAllowedOrigin(origin)) return new Response(null, { status: 204, headers: headers() });

  let payload;
  try { payload = await request.json(); } catch { return json({ error: 'bad json' }, 400); }
  const events = Array.isArray(payload) ? payload.slice(0, 20) : [payload];
  if (!events.length) return json({ ok: true });

  const cf = request.cf || {};
  const country = cleanText(cf.country, 8);
  const asn = cleanInt(cf.asn);
  const statements = [];
  for (const ev of events) {
    if (!ev || typeof ev !== 'object') continue;
    const ts = cleanTimestamp(ev.ts);
    const scored = scoreEvent(ev, request, country, asn);
    statements.push(env.DB.prepare(
      `INSERT INTO events (ts, day, kind, visitor, session, path, referrer, country, region, city, asn, ua, device, browser, os, screen, lang, timezone, flags, score, verdict, scorev, ms)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      ts, day(ts), cleanText(ev.e, 32) || 'pageview',
      cleanText(ev.vid, 80), cleanText(ev.sid, 80),
      cleanText(ev.path, 512) || '/', cleanText(ev.r, 512),
      country, cleanText(cf.region, 80), cleanText(cf.city, 80), asn,
      cleanText(ev.ua, 400), cleanText(ev.device, 32), cleanText(ev.browser, 40),
      cleanText(ev.os, 40), cleanText(ev.screen, 32), cleanText(ev.lang, 40),
      cleanText(ev.tz, 80), scored.flags, scored.score, scored.verdict,
      cleanInt(ev.scorev, 1), Math.max(0, Math.min(86_400_000, Number(ev.ms) || 0))
    ));
  }
  if (statements.length) await env.DB.batch(statements);
  return json({ ok: true });
}

async function stats(request, env) {
  const url = new URL(request.url);
  const days = Math.max(1, Math.min(90, cleanInt(url.searchParams.get('days'), 7)));
  const since = Date.now() - days * 86400000;
  const result = await env.DB.prepare(
    `SELECT day, verdict, count(*) AS n
     FROM events WHERE ts >= ? GROUP BY day, verdict ORDER BY day`
  ).bind(since).all();
  const totals = await env.DB.prepare(
    `SELECT verdict, count(*) AS n FROM events WHERE ts >= ? GROUP BY verdict`
  ).bind(since).all();
  return json({ days, rows: result.results || [], totals: totals.results || [] });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: headers() });
    const url = new URL(request.url);
    if (url.pathname === '/in' && request.method === 'POST') {
      try { return await ingest(request, env); } catch (err) {
        console.error('ingest failed', err);
        return json({ error: 'ingest failed' }, 500);
      }
    }
    if (url.pathname === '/stats' && request.method === 'GET') {
      const token = new URL(request.url).searchParams.get('token') || '';
      if (!env.STATS_TOKEN || token !== env.STATS_TOKEN) return json({ error: 'unauthorized' }, 401);
      return stats(request, env);
    }
    if (url.pathname === '/health') return json({ ok: true });
    return json({ error: 'not found' }, 404);
  },
};

