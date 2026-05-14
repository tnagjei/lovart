# Lovart 优化计划 5.13

## 0. 最终结论

Lovart 现在最该优化的不是继续盲目加页面，而是先修复三件事：

1. 提升品牌词点击率。
2. 清理重复 URL 与意图分流问题。
3. 把已经有排名的 API（应用程序接口）、Pricing（价格）、Free（免费）、Login（登录）、Refund（退款）页面做成更强的承接页。

Counter（反方）:
当前仓库已经有很多页面、语言版本、canonical（规范链接）、hreflang（多语言标记）、sitemap（站点地图）和 robots（爬虫规则），看起来像是 SEO（搜索引擎优化）基础已经做了很多。但 GSC（Google Search Console，谷歌搜索控制台）数据显示，最大损失不是收录数量，而是低 CTR（Click Through Rate，点击率）。如果继续批量加页面，可能会扩大低质量页面和重复入口，反而稀释站点质量信号。

## 1. 证据来源

### 1.1 数据文件

1. `查询数(2).csv`
2. `网页(2).csv`
3. `国家_地区(3).csv`
4. `设备(2).csv`
5. `图表(2).csv`
6. `搜索结果呈现(2).csv`
7. `过滤器(2).csv`

数据范围：过去 3 个月，搜索类型为网络搜索。

### 1.2 仓库文件

1. `package.json`
   • 当前是静态站构建项目。
   • `build` 脚本为 `node build.js`。
   • CSS（样式表）通过 Tailwind CSS（前端样式工具）构建。

2. `build.js`
   • 使用 EJS（嵌入式 JavaScript 模板）生成静态 HTML。
   • 支持 `en`、`zh`、`fr`、`ja`、`es`、`it` 多语言。
   • 自动生成 canonical（规范链接）。
   • 自动生成 sitemap.xml（站点地图）。
   • 对 `es`、`it` 部分页面设置 `noindex,follow`（不索引但跟随链接）。

3. `src/templates/partials/head.ejs`
   • 集中处理 robots（爬虫指令）、Open Graph（社交分享元标签）、Twitter Card（推特卡片）、预连接资源。
   • SEO（搜索引擎优化）标题和描述通过页面映射读取。
   • 新增页面如果没有写入映射，可能回退到首页 SEO 信息。

4. `src/templates/partials/hreflang.ejs`
   • 生成多语言 alternate（替代语言）链接。
   • 对首页和子页面分别处理语言路径。

5. `src/templates/index.ejs`
   • 首页承担了品牌入口、价格、API（应用程序接口）、开发者入口、帮助页面分发。
   • 首页文案偏泛，品牌词搜索意图没有在首屏形成强确认。

6. `public/robots.txt`
   • 允许主站抓取。
   • 声明 sitemap。
   • 写入 AI crawler（人工智能爬虫）访问规则。
   • 写入 IndexNow（搜索引擎快速提交协议）信息。

## 2. 当前数据判断

### 2.1 全站概况

过去 3 个月：

| 指标 | 数值 |
|---|---:|
| 点击次数 | 1,698 |
| 展示 | 164,845 |
| CTR（点击率） | 1.03% |
| 平均排名 | 7.03 |

判断：

1. 排名不差，平均排名约第 7 位。
2. CTR 很低，尤其是品牌词。
3. 当前核心矛盾是“用户看到你，但不点你”。

## 3. 最大问题：品牌词占位强，但点击率异常低

### 3.1 查询词机会

| 查询 | 点击 | 展示 | CTR（点击率） | 排名 | 按 3% CTR 估算可补点击 |
|---|---:|---:|---:|---:|---:|
| lovart | 263 | 89,000 | 0.30% | 5.28 | 2,407 |
| lovart ai | 56 | 12,407 | 0.45% | 9.32 | 316 |
| lovart 官网 | 89 | 5,280 | 1.69% | 4.67 | 69 |
| lovart.ia | 7 | 2,546 | 0.27% | 6.84 | 69 |
| www.lovart.ia | 0 | 1,311 | 0% | 5.26 | 39 |
| loveart | 2 | 1,332 | 0.15% | 8.14 | 38 |
| lo v a r t | 2 | 1,033 | 0.19% | 4.96 | 29 |
| lovarte | 6 | 1,098 | 0.55% | 6.47 | 27 |
| lovart官网 | 13 | 1,193 | 1.09% | 4.60 | 23 |
| lovart ai free | 7 | 937 | 0.75% | 6.96 | 21 |

🚨 证据:
`lovart` 这个词 89,000 展示，排名 5.28，但 CTR 只有 0.30%。这不是单纯排名问题，而是搜索结果里的标题、描述、品牌信任、用户意图匹配出了问题。

### 3.2 页面机会

| 页面 | 点击 | 展示 | CTR（点击率） | 排名 | 按 3% CTR 估算可补点击 |
|---|---:|---:|---:|---:|---:|
| https://lovart.info/ | 495 | 127,566 | 0.39% | 5.89 | 3,332 |
| https://lovart.info/lovart-pricing | 33 | 8,325 | 0.40% | 9.97 | 217 |
| https://lovart.info/fr/ | 17 | 3,679 | 0.46% | 5.07 | 93 |
| https://lovart.info/zh/ | 97 | 5,256 | 1.85% | 5.11 | 61 |
| https://lovart.info/help | 15 | 1,934 | 0.78% | 7.65 | 43 |
| https://lovart.info/ja/ | 13 | 1,632 | 0.80% | 7.35 | 36 |
| https://lovart.info/lovarte | 3 | 828 | 0.36% | 6.73 | 22 |
| https://lovart.info/lovart-api | 12 | 1,110 | 1.08% | 6.76 | 21 |
| https://lovart.info/terms-of-service | 1 | 726 | 0.14% | 6.99 | 21 |
| https://lovart.info/lovart-pricing.html | 14 | 672 | 2.08% | 8.90 | 6 |

🚨 证据:
首页是最大流量入口，127,566 展示，495 点击，CTR 只有 0.39%。即使不提高排名，只把首页 CTR 提到 3%，理论上就能多拿约 3,332 次点击。

## 4. 代码层面的关键问题

### 4.1 `.html` 重复 URL 风险

`build.js` 实际输出文件为：

1. 默认语言：`dist/{pageName}.html`
2. 非默认语言：`dist/{lang}/{pageName}.html`

但 canonical（规范链接）生成的是无 `.html` 版本，例如：

1. `/lovart-pricing`
2. `/zh/lovart-pricing`

GSC（谷歌搜索控制台）已经出现：

1. `https://lovart.info/lovart-pricing`
2. `https://lovart.info/lovart-pricing.html`

判断：

如果服务器同时可访问 `.html` 和无后缀页面，Google（谷歌）会看到重复 URL。canonical 可以缓解，但不能替代 301 redirect（永久重定向）。

优先级：P0。

### 4.2 首页标题不够像“官方入口确认页”

当前英文首页 title（标题）是：

`Lovart: AI Design Platform for Creative Professionals`

问题：

1. 没有覆盖 `Lovart official`（Lovart 官方）、`Lovart 官网`、`Lovart AI` 这些高展示意图。
2. 更像泛 AI 设计工具介绍，不像用户正在找的 Lovart 官方入口、登录、价格、API、免费信息。
3. 对中文、日文用户的品牌确认不够强。

建议首页 title 改为：

英文：
`Lovart AI Official Guide, Login, Pricing, API and Free Access`

中文解释：
Lovart AI 官方指南，登录、价格、API 和免费入口。

Meta description（页面描述）建议：

英文：
`Find the right Lovart page fast: official access, login help, pricing, API status, free plan details, refund guide, and safe user support links.`

中文解释：
快速找到 Lovart 对应页面：官方入口、登录帮助、价格、API 状态、免费方案、退款指南和安全支持链接。

### 4.3 首页首屏需要从“营销文案”改成“意图分流”

当前首页 hero（首屏）文案很长，偏宣传式：

1. AI powered design platform（AI 驱动设计平台）
2. creative professionals（创意专业人士）
3. revolutionary design platform（革命性设计平台）

问题：

这类文案对搜索用户的帮助弱。搜索 `lovart` 的用户不是来读品牌广告，而是要确认：

1. Lovart 是什么？
2. 官网在哪里？
3. 是否免费？
4. 怎么登录？
5. API 是否开放？
6. 价格多少？
7. 是否安全？
8. 是否有中文或日本语入口？

建议首页首屏改为：

H1（一级标题）：
`Lovart AI: Official Access, Pricing, API and Login Guide`

中文解释：
Lovart AI：官方入口、价格、API 和登录指南。

首屏下方直接放 6 个入口卡片：

1. Official Access（官方入口）
2. Login Guide（登录指南）
3. Pricing（价格）
4. API Status（API 状态）
5. Free Plan（免费方案）
6. Refund and Support（退款与支持）

### 4.4 `head.ejs` 的 SEO 映射可维护性风险

`head.ejs` 通过 `switch case` 映射页面 SEO 数据。问题是：

1. 新增页面必须手工加映射。
2. 如果漏加，会回退到默认 `t.seo`。
3. 回退后可能导致多个页面使用首页标题和描述，形成标题重复。

建议：

1. 在 `build.js` 构建时增加 SEO 校验。
2. 如果某页面没有独立 title（标题）和 description（描述），构建直接报 warning（警告）。
3. 对所有模板页面生成一份 `dist/seo-audit.json`，记录：
   • 页面名
   • 语言
   • title
   • description
   • canonical
   • robots
   • 是否 fallback（是否回退）

## 5. 国家和语言优先级

### 5.1 国家表现

| 国家/地区 | 点击 | 展示 | CTR（点击率） | 排名 |
|---|---:|---:|---:|---:|
| 日本 | 325 | 9,216 | 3.53% | 6.00 |
| 中国 | 245 | 37,290 | 0.66% | 5.02 |
| 美国 | 162 | 10,835 | 1.50% | 9.63 |
| 中国香港 | 92 | 9,262 | 0.99% | 5.43 |
| 新加坡 | 80 | 11,194 | 0.71% | 5.37 |
| 印度 | 68 | 4,969 | 1.37% | 7.28 |
| 台湾 | 53 | 2,494 | 2.13% | 5.76 |
| 巴西 | 41 | 4,385 | 0.94% | 9.36 |
| 法国 | 37 | 4,461 | 0.83% | 5.85 |

判断：

1. 日本点击最多且 CTR 高，日语页面值得继续加深。
2. 中国展示最高但 CTR 低，中文标题和摘要需要更像“官网入口和使用指南”。
3. 香港、新加坡展示不低但 CTR 低，英文和中文入口都要明确。
4. 美国排名低于亚洲市场，短期不该重仓美国泛词，先做 API 和 pricing（价格）这类明确需求词。

### 5.2 设备表现

| 设备 | 点击 | 展示 | CTR（点击率） | 排名 |
|---|---:|---:|---:|---:|
| 桌面 | 1,153 | 118,591 | 0.97% | 6.43 |
| 移动设备 | 529 | 44,658 | 1.18% | 5.67 |
| 平板电脑 | 16 | 1,596 | 1.00% | 5.33 |

判断：

移动端排名和 CTR 不差，但桌面展示占大头。首页和 pricing（价格）页的桌面搜索结果标题优化最优先。

## 6. 优化路线图

## 6.1 第 1 阶段：P0 技术修复，1 到 3 天

### 任务 1：修复 `.html` 重复入口

目标：

所有 `.html` 页面 301 redirect（永久重定向）到无后缀 URL。

示例：

1. `/lovart-pricing.html` → `/lovart-pricing`
2. `/zh/lovart-pricing.html` → `/zh/lovart-pricing`
3. `/index.html` → `/`

验收标准：

1. 浏览器访问 `.html` 页面自动跳转。
2. GSC（谷歌搜索控制台）中 `.html` 页面逐步下降。
3. sitemap（站点地图）只保留无后缀 URL。

### 任务 2：保留 canonical，但不要只依赖 canonical

当前 canonical（规范链接）逻辑可保留。新增 redirect（重定向）后，canonical 才能成为辅助信号，而不是唯一去重手段。

### 任务 3：给构建流程增加 SEO 审计

在 `build.js` 增加：

1. 检查每个页面每种语言是否有 title。
2. 检查 description 是否为空。
3. 检查 title 是否重复。
4. 检查 description 是否重复。
5. 检查 robots 是否误设为 noindex。
6. 输出 `dist/seo-audit.json`。

## 6.2 第 2 阶段：首页 CTR 优化，3 到 7 天

### 任务 1：首页 title 重写

建议：

英文：
`Lovart AI Official Guide, Login, Pricing, API and Free Access`

中文解释：
Lovart AI 官方指南，登录、价格、API 和免费入口。

中文首页：
`Lovart官网入口：登录、价格、API、免费版与退款指南`

日语首页：
`Lovart AI 公式ガイド：ログイン、料金、API、無料プラン`

法语首页：
`Lovart AI Guide Officiel: Connexion, Tarifs, API et Accès Gratuit`

### 任务 2：首页 meta description 重写

中文首页建议：

`快速找到 Lovart 官网入口、登录方法、价格套餐、API 状态、免费版说明、退款与客服支持，避免进入错误或仿冒页面。`

英文首页建议：

`Find the right Lovart page fast: official access, login help, pricing, API status, free plan details, refund guide, and safe user support links.`

### 任务 3：首页首屏重构

首屏结构：

1. H1：Lovart AI 官方入口与使用指南
2. 一句话说明：快速确认登录、价格、API、免费版、退款和支持入口。
3. 6 个高意图按钮：
   • Lovart Official Access（官方入口）
   • Lovart Login（登录）
   • Lovart Pricing（价格）
   • Lovart API（应用程序接口）
   • Is Lovart Free（是否免费）
   • Lovart Refund（退款）

### 任务 4：增加错拼词吸收区

原因：

GSC 中有：

1. `lovart.ia`
2. `www.lovart.ia`
3. `loveart`
4. `lo v a r t`
5. `lovarte`
6. `lavart`
7. `lovaart`
8. `lovart ia`

建议首页或 `lovarte` 页面增加一段：

标题：
`Common Lovart Search Variations`

中文解释：
Lovart 常见搜索变体。

内容：
`Some users search for Lovart as loveart, lovarte, lovart.ia, lovart ia, or lovaart. These terms usually refer to Lovart AI. Use this page to find the correct Lovart access, login, pricing, and API information.`

中文解释：
一些用户会把 Lovart 搜成 loveart、lovarte、lovart.ia、lovart ia 或 lovaart。这些词通常指 Lovart AI。你可以通过本页找到正确的 Lovart 入口、登录、价格和 API 信息。

注意：

不要做垃圾堆词。只在一个模块里自然解释即可。

## 6.3 第 3 阶段：Pricing（价格）页优化，7 到 14 天

### 问题

`/lovart-pricing` 有 8,325 展示，CTR 只有 0.40%，平均排名 9.97。

这说明 pricing（价格）需求存在，但搜索结果吸引力差。

### 建议 title

英文：
`Lovart Pricing: Free Plan, Pro Cost, Credits and API Price`

中文解释：
Lovart 价格：免费版、Pro 费用、积分和 API 价格。

中文：
`Lovart价格说明：免费版、Pro套餐、积分和API费用`

日语：
`Lovart 料金：無料プラン、Pro、クレジット、API価格`

### 页面内容必须补强

增加 5 个区块：

1. Lovart 是否免费？
2. 免费版限制是什么？
3. Pro（专业版）适合谁？
4. API（应用程序接口）是否单独收费？
5. 退款规则和取消订阅方法。

### FAQ（常见问题）建议

1. Is Lovart free?
   中文解释：Lovart 免费吗？

2. How much does Lovart Pro cost?
   中文解释：Lovart Pro 多少钱？

3. Does Lovart API have separate pricing?
   中文解释：Lovart API 是否单独收费？

4. Can I cancel Lovart subscription?
   中文解释：能否取消 Lovart 订阅？

5. Does Lovart offer refunds?
   中文解释：Lovart 是否退款？

## 6.4 第 4 阶段：API（应用程序接口）主题集群，7 到 21 天

### 当前优势

`lovart api` 表现非常好：

1. 点击 348
2. 展示 1,360
3. CTR 25.59%
4. 排名 2.52

这类词不需要大改标题，重点是扩大相邻词覆盖。

### 当前相关查询

1. `lovart api`
2. `lovart api key`
3. `loveart api`
4. `lovart ai api`
5. `lovart.ai api`
6. `lovart ai pricing`

### 建议页面结构

保留并强化以下页面：

1. `/lovart-api`
2. `/lovart-api-key`
3. `/lovart-api-documentation`
4. `/lovart-api-pricing`
5. `/lovart-developer-options`
6. `/lovart-ai-code`

### 内链策略

`/lovart-api` 作为 API hub（应用程序接口总入口）：

1. 链接到 API Key（密钥）页。
2. 链接到 API Documentation（文档）页。
3. 链接到 API Pricing（价格）页。
4. 链接到 Developer Options（开发者选项）页。
5. 链接到 AI Code（人工智能代码）页。

### 内容原则

🚨 不要声称“有官方公开 API”，除非可验证。

推荐表达：

英文：
`Public Lovart API access may depend on official availability. This guide separates confirmed access points from unverified third-party claims.`

中文解释：
Lovart 公共 API 是否可用取决于官方开放情况。本指南区分已确认入口和未经验证的第三方说法。

## 6.5 第 5 阶段：中文和日语页面优先，14 到 30 天

### 中文优先页面

1. `/zh/`
2. `/zh/lovart-pricing`
3. `/zh/lovart-api`
4. `/zh/lovart-refund-guide`
5. `/zh/help`
6. `/zh/lovart-login-guide`

中文标题策略：

1. 必须包含“官网”。
2. 必须包含“入口”。
3. 对价格页必须包含“价格”。
4. 对退款页必须包含“退款”。
5. 对 API 页必须包含“API”。

示例：

`Lovart官网入口：登录、价格、API与免费版说明`

### 日语优先页面

1. `/ja/`
2. `/ja/lovart-api`
3. `/ja/lovart-pricing`
4. `/ja/lovart-ai-code`
5. `/ja/lovart-login-guide`

日语标题策略：

1. 使用 `公式`。
2. 使用 `ログイン`。
3. 使用 `料金`。
4. 使用 `API`。
5. 使用 `無料プラン`。

示例：

`Lovart AI 公式ガイド：ログイン、料金、API、無料プラン`

## 7. 不建议做的事

### 7.1 不建议继续大量生成低质工具页

原因：

当前已有很多页面，流量核心仍集中在首页、API、AI Code（人工智能代码）、pricing（价格）、support（支持）类页面。继续加大量低需求页面，会让维护成本上升。

### 7.2 不建议把 es（西班牙语）和 it（意大利语）全部放开索引

`build.js` 里已经对 es、it 做了 `noindex,follow` 控制，并且只把部分验证过翻译质量的页面放开。这是对的。

如果翻译不真实，贸然 index（索引）可能造成低质量多语言页面。

### 7.3 不建议在首页堆关键词

错拼词可以吸收，但必须自然解释，不要做关键词墙。

错误做法：

`lovart, loveart, lovarte, lovart.ia, lovart ia, lovaart, lavart...`

正确做法：

用一段“常见搜索变体说明”解释这些词通常指向 Lovart AI。

## 8. 文件级执行清单

### 8.1 修改 `src/locales/en.json`

修改位置：

1. `seo.title`
2. `seo.description`
3. `hero.title`
4. `hero.subtitle`
5. 首页高意图区块文案
6. pricing_page.seo
7. lovart_api_page.seo
8. lovart_free_page.seo
9. lovart_login_page.seo

### 8.2 修改 `src/locales/zh.json`

重点：

1. 首页 title 包含“官网入口”。
2. pricing（价格）页 title 包含“价格、免费版、Pro、API费用”。
3. API（应用程序接口）页 title 包含“API、Key、文档、接入状态”。
4. refund（退款）页保持强意图标题。

### 8.3 修改 `src/locales/ja.json`

重点：

1. 首页 title 包含 `公式`、`ログイン`、`料金`、`API`。
2. pricing（价格）页 title 包含 `料金`、`無料プラン`、`Pro`。
3. API（应用程序接口）页 title 包含 `API`、`API Key`、`ドキュメント`。

### 8.4 修改 `src/templates/index.ejs`

增加：

1. 官方入口确认模块。
2. 常见搜索变体模块。
3. API、价格、登录、退款、免费版的卡片式分流。
4. 缩短首屏营销文案。

### 8.5 修改 `build.js`

增加：

1. SEO 审计输出。
2. title 重复检查。
3. description 重复检查。
4. noindex 页面列表输出。
5. 构建结束打印高风险页面。

### 8.6 修改部署配置

如果使用 Cloudflare Pages（Cloudflare 静态站托管）：

新增 `_redirects` 文件：

```text
/*.html /:splat 301
/index.html / 301
/:lang/*.html /:lang/:splat 301
```

如果部署平台不是 Cloudflare Pages，需要按平台规则实现同等 301 redirect（永久重定向）。

## 9. 30 天验收指标

### 9.1 首页

目标：

1. 首页 CTR 从 0.39% 提升到 1.0% 以上。
2. `lovart` CTR 从 0.30% 提升到 1.0% 以上。
3. `lovart 官网` CTR 从 1.69% 提升到 3.0% 以上。

### 9.2 Pricing（价格）页

目标：

1. `/lovart-pricing` CTR 从 0.40% 提升到 1.5% 以上。
2. `lovart ai pricing` 进入前 5。
3. `lovart pricing` 长尾词点击增加。

### 9.3 API（应用程序接口）集群

目标：

1. `lovart api` 维持前 3。
2. `lovart api key` 维持前 3。
3. `lovart api pricing`、`lovart api documentation` 新增稳定展示和点击。

### 9.4 重复 URL

目标：

1. `.html` URL 在 GSC 中展示下降。
2. 无后缀 URL 成为主要排名页面。
3. sitemap（站点地图）与 canonical（规范链接）完全一致。

## 10. 声明分类

### Verifiable（可验证）

1. GSC 过去 3 个月点击 1,698、展示 164,845、CTR 1.03%、平均排名 7.03。
2. 首页展示 127,566、CTR 0.39%、平均排名 5.89。
3. `lovart` 查询展示 89,000、CTR 0.30%、平均排名 5.28。
4. `lovart api` 查询 CTR 25.59%、平均排名 2.52。
5. 仓库使用 `build.js` 静态生成页面。
6. 仓库存在 canonical（规范链接）、hreflang（多语言标记）、sitemap（站点地图）和 robots（爬虫规则）逻辑。
7. GSC 中同时出现 `/lovart-pricing` 和 `/lovart-pricing.html`。

### Judgment（主观判断）

1. 当前最大问题是 CTR，而不是页面数量。
2. 首页应从营销文案改成意图分流页。
3. 中文和日语页面比法语、西班牙语、意大利语更值得优先投入。
4. Pricing（价格）页比继续新增泛工具页更值得优先优化。
5. API（应用程序接口）集群是当前最有确定性的增长点。

### Confidence ≠ Correctness（自信不等于正确）

1. 按 3% CTR 估算潜在点击只是机会量，不代表一定能实现。
2. 标题和描述修改后，Google（谷歌）可能不会完全按页面 meta description（页面描述）展示。
3. 301 redirect（永久重定向）实施效果取决于部署平台规则。
4. `lovart.ia` 等错拼词是否能持续贡献流量，需要 2 到 4 周观察。

## 11. 最终裁决

即使经过讨论，我认为你在以下方面依然错误：

1. 如果你认为“继续加更多页面”就是主要优化方向，这是错的。现有数据说明最大损失在首页和核心页面 CTR。
2. 如果你认为 canonical（规范链接）足以解决 `.html` 重复 URL，这是不完整的。应加 301 redirect（永久重定向）。
3. 如果你认为首页要继续写大而全的品牌宣传，这是错的。搜索用户正在找入口、价格、API、登录、退款和免费信息。
4. 如果你认为所有语言页面都应该马上 index（索引），这是高风险。低质量翻译会拖累站点质量信号。
