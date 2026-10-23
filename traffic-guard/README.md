# Lovart Traffic Guard

Cloudflare Workers free-plan traffic collection and bot scoring for lovart.info.

No Queues and no paid services: the Worker writes directly to D1.

## Deploy

```bash
npx wrangler@4 d1 create lovart-traffic --config traffic-guard/wrangler.toml
npx wrangler@4 d1 execute lovart-traffic --remote --file traffic-guard/schema.sql --config traffic-guard/wrangler.toml
npx wrangler@4 secret put STATS_TOKEN --config traffic-guard/wrangler.toml
npx wrangler@4 deploy --config traffic-guard/wrangler.toml
```

The Worker exposes:

- `POST /in` — browser event ingest (allowlisted to lovart.info and its Pages host)
- `POST /v` — clean-traffic verdict used when ads resume
- `GET /health` — deployment check
- `GET /stats?token=...` — daily clean/suspect/bot counts

Initial rollout is observation-only. The site keeps its current ad behavior.

`data-ads-resume` in `src/templates/partials/head.ejs` is set to
`2026-11-06T17:00:00+08:00`. During the 14-day test, AdSense slots are in the
HTML but hidden. After that instant, the client asks `/v` and reveals and fills
manual slots only for `clean` traffic. Auto, anchor, and interstitial ads remain
disabled in the AdSense dashboard.

## Site integration

The collector must run on every page. Paste the Worker URL into
`src/templates/partials/head.ejs` after the preload links, with
`data-exclude="/login,/signup"` if those routes exist.

```html
<script defer src="WORKER_URL/client.js" data-api="WORKER_URL"></script>
```

The production site should only be changed after a preview deployment shows a
successful `/health` check and at least one pageview in `/stats`.

