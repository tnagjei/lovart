(function () {
  var script = document.currentScript;
  if (!script) return;
  var endpoint = (script.getAttribute('data-api') || '').replace(/\/+$/, '');
  if (!endpoint) return;
  var adsResume = Date.parse(script.getAttribute('data-ads-resume') || '');
  var excluded = (script.getAttribute('data-exclude') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  if (excluded.some(function (p) { return location.pathname.indexOf(p) === 0; })) return;

  function read(name) {
    var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function write(name, value, days) {
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = name + '=' + encodeURIComponent(value) + '; Path=/; Max-Age=' + days * 86400 + '; SameSite=Lax' + secure;
  }
  function id() {
    if (crypto.randomUUID) return crypto.randomUUID();
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  var visitor = read('_lt_v') || id();
  write('_lt_v', visitor, 30);
  var session = read('_lt_s');
  if (!session) { session = id(); write('_lt_s', session, 1); }

  var started = Date.now();
  var interacted = 0;
  var sent = false;
  var ua = navigator.userAgent || '';
  ['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(function (type) {
    addEventListener(type, function () { interacted = 1; }, { once: true, passive: true });
  });

  function payload(kind) {
    var screenSize = (screen && screen.width ? screen.width : 0) + 'x' + (screen && screen.height ? screen.height : 0);
    return {
      e: kind,
      vid: visitor,
      sid: session,
      path: location.pathname + location.search,
      r: document.referrer || '',
      ua: ua,
      device: /Mobi|Android|iPhone|iPad/i.test(ua) ? 'mobile' : 'desktop',
      browser: /Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : 'other',
      os: /Android/i.test(ua) ? 'Android' : /iPhone|iPad/i.test(ua) ? 'iOS' : /Mac OS X/i.test(ua) ? 'macOS' : /Windows/i.test(ua) ? 'Windows' : 'other',
      screen: screenSize,
      lang: navigator.language || '',
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      wd: navigator.webdriver ? 1 : 0,
      i: interacted,
      ms: Date.now() - started,
      ts: Date.now()
    };
  }

  function send(kind) {
    if (sent) return;
    sent = true;
    var body = JSON.stringify(payload(kind));
    if (kind === 'page_leave' && navigator.sendBeacon) navigator.sendBeacon(endpoint + '/in', body);
    else fetch(endpoint + '/in', { method: 'POST', headers: { 'content-type': 'text/plain' }, body: body, keepalive: true }).catch(function () {});
  }

  function enableAdsIfDue() {
    if (!Number.isFinite(adsResume) || Date.now() < adsResume || window.adsbygoogle) return;
    fetch(endpoint + '/v', {
      method: 'POST',
      headers: { 'content-type': 'text/plain' },
      body: JSON.stringify(payload('verdict'))
    }).then(function (response) { return response.json(); }).then(function (result) {
      if (!result.ok) return;
      var client = 'ca-pub-3083296102953963';
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({ google_ad_client: client, enable_page_level_ads: false });
      document.querySelectorAll('.ad-slot-container').forEach(function (slot) {
        slot.hidden = false;
        slot.removeAttribute('hidden');
        var ins = slot.querySelector('ins.adsbygoogle');
        if (ins) {
          ins.hidden = false;
          ins.removeAttribute('hidden');
          window.adsbygoogle.push({});
        }
      });
      var script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(client);
      document.head.appendChild(script);
    }).catch(function () {});
  }

  if (Number.isFinite(adsResume) && Date.now() >= adsResume) enableAdsIfDue();

  send('pageview');
  addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      sent = false;
      var body = JSON.stringify(payload('page_leave'));
      if (navigator.sendBeacon) navigator.sendBeacon(endpoint + '/in', body);
    }
  });
  addEventListener('pagehide', function () {
    if (sent) {
      sent = false;
      var body = JSON.stringify(payload('page_leave'));
      if (navigator.sendBeacon) navigator.sendBeacon(endpoint + '/in', body);
    }
  });
})();

