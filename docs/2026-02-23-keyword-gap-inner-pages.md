# Lovart 关键词缺口内页建议（2026-02-23）

## 数据来源
- 关键词文件：`docs/lovart_broad-match_us_2026-02-22.csv`
- 站内页面对照：`src/templates/*.ejs`

## 已覆盖（本轮前后已存在）
- `lovart-invitation-code`
- `lovart-china`
- `lovart-beta`
- `lovart-nano-banana`
- 以及 `lovart-pricing` / `lovart-api` / `lovart-free` / `lovart-logo` / `lovart-brand-kit` / `lovart-prompt-guide` 等

## 仍可做成独立内页的关键词簇

| 优先级 | 建议页面 URL | 可承接关键词 | 月搜索量合计 | 备注 |
|---|---|---|---:|---|
| P0 | `lovart-login-guide` | `lovart login`(210), `lovart ai login`(10) | 220 | 导航+交易意图强，CPC 高 |
| P0 | `lovart-promo-code` | `lovart promo code`(10), `lovart promotion code`(10), `lovart discount code`(20), `lovart coupon code`(10), `lovart ai promo code`(10), `lovart.ai promo code`(10) | 70 | 变现意图最强，适合做“防骗+官方路径” |
| P0 | `what-is-lovart` | `lovart 是什么`(390), `lovart 是 什么`(30), `what is lovart`(20), `what is lovart ai`(10), `is lovart ai safe`(20), `lovart meaning`(10) | 480 | 高解释型需求，适合做定义+安全+FAQ |
| P1 | `lovart-review` | `lovart reviews`(10), `lovart ai review`(10) | 20 | 高商业词，适合放对比与 CTA |
| P1 | `lovart-alternative`（或 `lovart-vs-canva`） | `lovart alternative`(20), `lovart ai alternative`(10), `lovart vs canva`(10) | 40 | 对比意图清晰，建议同页承接 |
| P1 | `lovart-tutorial` | `how to use lovart`(10), `how to use lovart ai`(10), `lovart tutorial`(10), `lovart ai tutorial`(10), `lovart 教程`(10) | 50 | 教程需求稳定，适合步骤式内容 |
| P2 | `lovart-company`（可选） | `lovart funding`(20), `lovart ai funding`(20), `lovart founder`(10), `lovart revenue`(10), `lovart valuation`(10), `lovart ai news`(30) | 100 | 偏品牌背书，可作为补充页 |

## P0 详细执行计划（按导流站 + Adsense 目标）

> 假设：`lovart.info` 定位为第三方导流与信息聚合站；官方功能入口为 `lovart.ai`。  
> 目标：提升自然流量、停留时长与广告可见率，而不是在站内完成登录/生成等功能。

### 1) P0 总体写作与SEO约束（来自 `docs/AGENTS.md`）
- 每页 600–800 词，1 个 H1 + 多个 H2/H3。
- 核心词密度控制在 3%–5%（自然出现，避免堆砌）。
- Title 50–60 字符；Description 140–160 字符；`meta keywords` 置空。
- 必须有 Canonical URL、FAQ 区、更新时间、第三方声明。
- 每页最少 4 条内链，提升二跳与站内停留。

### 2) P0 页面模板（统一）
- 首屏：30 秒结论框（直接回答用户意图）。
- 目录：可点击锚点目录（提升滚动深度）。
- 正文：步骤/对比/案例（至少 3 个模块）。
- FAQ：5–8 条，覆盖主词与变体词。
- 内链：文中 2 条 + 文末“相关阅读”3 条。
- 广告位：首屏下 1 个、正文中段 1–2 个、FAQ 后 1 个。

### 3) P0 三页执行规范

#### P0-1 `lovart-login-guide`
- 目标词：`lovart login`、`lovart ai login`。
- 页面意图：导航 + 故障排查。
- 必写模块：
  - 官方入口与声明（本站非官方登录页）。
  - 5 步排查（账号、验证码、浏览器、网络、地区限制）。
  - 官方支持通道（官网、邮件、Discord）。
  - 常见错误码/症状对照表。
- CTA：`Open Official Login`、`Contact Official Support`。

#### P0-2 `lovart-promo-code`
- 目标词：`lovart promo code`、`promotion/coupon/discount code` 词簇。
- 页面意图：商业查询 + 防骗。
- 必写模块：
  - 结论框：是否存在公开可用优惠码。
  - “真假优惠来源”对比表（官方活动/垃圾券站）。
  - 可执行省钱路径（年付、活动期、站内定价页）。
  - 安全提示（钓鱼页与账号泄露风险）。
- CTA：`Check Lovart Pricing`、`See Current Official Offers`。

#### P0-3 `what-is-lovart`
- 目标词：`lovart 是什么`、`what is lovart ai`、`is lovart ai safe`。
- 页面意图：解释型搜索 + 信任建立。
- 必写模块：
  - 一句话定义（是什么/适合谁/不适合谁）。
  - 核心能力与典型场景（logo、brand kit、prompt workflow）。
  - 安全与可信信息（第三方说明 + 官方链接）。
  - 与传统设计工具差异（简版对比表）。
- CTA：`Try Lovart Free`、`Read Pricing`、`Learn API`。

### 4) 发布顺序与节奏（3天）
1. Day 1：完成三页 SEO 字段、H 结构、FAQ 问题池、内链规划。
2. Day 2：完成正文与广告位布局，统一第三方声明与更新时间。
3. Day 3：构建发布并提交收录，检查索引与广告展示是否正常。

### 5) 验证与回滚
- 构建验证：`node build.js` 无报错，目标页面成功输出到 `dist/`。
- 页面验证：Title/Description 长度、Canonical、FAQ schema、广告位均存在。
- 7 天观察指标：自然点击、平均停留时长、每次访问页数、广告可见率。
- 回滚策略：若跳出率显著上升，先回滚首屏文案与广告密度，再调整内链与模块顺序。

## P1 详细执行计划（按导流站 + Adsense 目标）

### 1) P1 页面策略选择（先定形态）
- 方案 A（推荐）：3 页承接
  - `lovart-review`
  - `lovart-alternative`（同页覆盖 `lovart vs canva`）
  - `lovart-tutorial`
- 方案 B（不推荐）：拆成 4 页（多一个 `lovart-vs-canva`）
- 推荐 A 的原因：当前词量不大，先集中权重、避免同意图分散和关键词内耗。

### 2) P1 统一写作与 SEO 约束
- 每页 600–900 词，1 个 H1 + 多个 H2/H3，段落可扫读。
- Title 50–60 字符，Description 140–160 字符，`meta keywords` 置空。
- 保留 Canonical、FAQ、更新时间、第三方说明（非官网）。
- 每页至少 5 条内链（2 条同簇 + 3 条跨簇）。
- 广告位统一：首屏下 1 个、正文中段 2 个、文末 1 个。

### 3) 页面级执行规范

#### P1-1 `lovart-review`
- 目标词：`lovart reviews`、`lovart ai review`。
- 页面意图：商业决策前评估。
- 页面骨架：
  - H1：`Lovart Review 2026: Pros, Cons, and Who It’s For`
  - H2：30 秒结论（适合谁/不适合谁）
  - H2：核心能力评分表（速度、质量、上手难度、价格感知）
  - H2：真实使用场景（Logo/Brand Kit/Prompt）
  - H2：常见问题与风险提醒
  - H2：替代方案入口（导向 `lovart-alternative`）
- CTA：`Try Official Lovart`、`Read Pricing`。

#### P1-2 `lovart-alternative`（内含 `vs canva`）
- 目标词：`lovart alternative`、`lovart ai alternative`、`lovart vs canva`。
- 页面意图：对比型搜索。
- 页面骨架：
  - H1：`Best Lovart Alternatives in 2026 (Including Lovart vs Canva)`
  - H2：结论框（不同人群推荐路径）
  - H2：Lovart vs Canva 对比表（定位、强项、学习成本、价格）
  - H2：其他可选工具（2–3 个，简评）
  - H2：如何选择（按设计目标与预算）
  - H2：FAQ（覆盖 alternative/vs 词变体）
- CTA：`Compare Pricing`、`See Lovart Features`。

#### P1-3 `lovart-tutorial`
- 目标词：`how to use lovart`、`lovart tutorial`、`lovart ai tutorial`、`lovart 教程`。
- 页面意图：教学与留存。
- 页面骨架：
  - H1：`How to Use Lovart AI: Beginner Tutorial`
  - H2：5 分钟快速上手（账号入口与界面识别）
  - H2：3 个实操任务（做 Logo、做 Brand Kit、写 Prompt）
  - H2：常见报错与解决（提升停留与回访）
  - H2：进阶学习路径（导向 prompt/logo/brand-kit 现有页）
  - H2：FAQ（中英混合问法覆盖）
- CTA：`Start with Prompt Guide`、`Open Logo Maker Guide`。

### 4) P1 执行节奏（4 天）
1. Day 1：完成三页关键词映射、H 结构、FAQ 问题池、标题描述草案。
2. Day 2：完成 `lovart-tutorial`（优先拿教程词流量和停留时长）。
3. Day 3：完成 `lovart-alternative`（同页覆盖 `vs canva`）。
4. Day 4：完成 `lovart-review`，统一内链与广告位，构建发布。

### 5) 验证与回滚
- 构建验证：`node build.js` 成功，三页已输出到 `dist/`。
- 页面验证：TDH 长度、Canonical、FAQ schema、广告位数量、更新时间均符合规范。
- 14 天观察指标：自然点击、平均停留时长、页面 RPM、每次访问页数。
- 回滚策略：若广告收入上升但跳出率显著恶化，先降广告密度（正文中段从 2 降到 1），再优化首屏结论与目录结构。

## P2 详细执行计划（按导流站 + Adsense 目标）

### 1) P2 页面策略选择（品牌信息词如何承接）
- 方案 A（推荐）：单页聚合 `lovart-company`
  - 同页覆盖：`lovart funding`、`lovart ai funding`、`lovart founder`、`lovart revenue`、`lovart valuation`、`lovart ai news`。
- 方案 B（可选）：拆成 `lovart-company` + `lovart-news`
- 推荐 A 的原因：P2 词量不大（总量约 100），单页更利于集中权重与维护更新。

### 2) P2 统一写作与 SEO 约束
- 每页 700–1000 词，1 个 H1 + 多个 H2/H3。
- Title 50–60 字符，Description 140–160 字符，`meta keywords` 置空。
- 必须有 Canonical、FAQ、更新时间、第三方信息声明。
- 信息状态必须标记：`confirmed` / `unverified`，避免误导。
- 广告位：首屏下 1 个、正文中段 1 个、时间线后 1 个、文末 1 个。

### 3) 页面级执行规范

#### P2-1 `lovart-company`
- 页面意图：品牌背景查询 + 信任评估。
- 推荐 H1：`Lovart Company Profile: Funding, Founder, Revenue & Latest Updates`
- 页面骨架：
  - H2：30 秒结论（这页提供什么，不提供什么）
  - H2：Company Snapshot（定位、产品类型、目标用户）
  - H2：Funding & Investors（有来源才写；无来源则标注未验证）
  - H2：Founder & Team（公开信息与来源链接）
  - H2：Revenue / Valuation（仅写可验证信息与时间戳）
  - H2：News Timeline（按日期倒序，做更新日志）
  - H2：FAQ（覆盖 funding/founder/revenue/valuation/news 词簇）
- 内链要求（至少 6 条）：
  - 指向 `about`、`lovart-review`、`lovart-alternative`、`lovart-pricing`、`lovart-api`、`blog`。
- CTA：
  - `Read Product Review`
  - `Compare Alternatives`
  - `Visit Official Lovart`

### 4) 风险与内容边界
- 不捏造融资、估值、营收数字；无可靠来源时明确写“暂未验证”。
- 明确第三方身份：`lovart.info` 不是 `lovart.ai` 官方站点。
- 对时间敏感信息添加“最后更新时间”与“来源时间”。
- 禁止绝对化陈述（如“已确认”“官方宣布”）除非有可追溯来源。

### 5) P2 执行节奏（2 天）
1. Day 1：搭建页面结构、FAQ、时间线模块和状态标签（confirmed/unverified）。
2. Day 2：补全内容、内链、广告位，完成构建与发布。

### 6) 验证与回滚
- 构建验证：`node build.js` 成功，`lovart-company` 已输出到 `dist/`。
- 结构验证：Title/Description 长度、Canonical、FAQ schema、更新时间都存在。
- 内容验证：每条“融资/创始人/营收/估值”信息有来源或被标注未验证。
- 回滚策略：若因信息争议引发跳出率上升或投诉，先回滚争议模块，仅保留中性简介 + 官方链接。

## 不建议单独建页（建议并入现有页）
- 纯导航/品牌词：`lovart`、`lovart ai`、`lovart.ia`、`lovart.ai`
- 变体词或噪音词：`lovarte`、`lovartal`、`lovarts`、`lovart_ai`
- 明显无关词（药品、人名、其他实体）建议忽略

## 执行总计划（V2，替换原“建议发布顺序”）

> 目标：把 P0/P1/P2 新内页稳定接入现有 UI（Header / 中部资源区 / Footer），形成可持续内链结构并提升 Adsense 收益指标。

### Phase 0：信息架构冻结（半天）
1. 冻结 URL 策略：全部使用二级页面（不做三级目录）。
2. 冻结页面归属：
   - 商业决策：`lovart-review`、`lovart-alternative`、`lovart-promo-code`
   - 教程认知：`what-is-lovart`、`lovart-tutorial`
   - 入口支持：`lovart-login-guide`
   - 公司信息：`lovart-company`
3. 冻结导航策略：
   - Header 不新增入口（保持主导航简洁）
   - 新内页主入口放“中部资源区 + Footer”

### Phase 1：全站入口层改造（1 天）
1. 修改 `src/templates/index.ejs` 或可复用资源区模板：
   - 在“Explore More / Resources”区加入 P0/P1/P2 关键页入口卡片。
   - 每张卡片给 1 行意图文案（例如：review / alternative / tutorial）。
2. 修改 `src/templates/partials/footer.ejs`：
   - 在 `Products` 或新增 `Guides` 分组加入：
     - `lovart-review`
     - `lovart-alternative`
     - `lovart-tutorial`
     - `what-is-lovart`
   - 在 `Support` 分组加入：
     - `lovart-login-guide`
     - `lovart-promo-code`
   - 在 `Company` 分组加入：
     - `lovart-company`
3. 多语言文案同步：
   - 更新 `src/locales/en.json`、`src/locales/zh.json`（至少先做 en/zh）。
   - 其他语种暂用英文回退时，明确后续补译任务。

### Phase 2：页面模板层改造（2 天）
1. 为以下页面增加“可见 breadcrumb UI”（不是只有 schema）：
   - `src/templates/lovart-review.ejs`
   - `src/templates/lovart-alternative.ejs`
   - `src/templates/lovart-tutorial.ejs`
   - `src/templates/lovart-company.ejs`（创建时一并接入）
   - 实现方式：在 `<main>` 顶部增加 `<%- include('partials/breadcrumb', { breadcrumbItems }) %>`
2. 为以上页面新增“相关阅读（Related）卡片区”：
   - 每页至少 4 条链接（2 条同簇 + 2 条跨簇）。
   - 卡片数据来自 locale JSON（避免 EJS 中硬编码文案）。
3. 保持 CTA 逻辑：
   - 外链到 `lovart.ai`（`rel="noopener nofollow"`）
   - 内链优先到 `pricing`、`free`、`api`、`design-features`。

### Phase 3：关键词簇内链矩阵落地（1 天）
1. 在各页正文中补 2 条上下文内链（非卡片链接）。
2. 统一矩阵执行（最小集）：
   - `what-is-lovart` -> `lovart-tutorial` / `lovart-review` / `lovart-pricing` / `lovart-api`
   - `lovart-login-guide` -> `lovart-customer-support` / `lovart-support-contact` / `what-is-lovart`
   - `lovart-promo-code` -> `lovart-pricing` / `lovart-invitation-code` / `lovart-review`
   - `lovart-review` -> `lovart-alternative` / `lovart-pricing` / `what-is-lovart`
   - `lovart-alternative` -> `lovart-review` / `lovart-design-features` / `lovart-pricing`
   - `lovart-tutorial` -> `lovart-prompt-guide` / `lovart-logo` / `lovart-brand-kit` / `what-is-lovart`
   - `lovart-company` -> `about` / `blog` / `lovart-review` / `lovart-alternative`

### Phase 4：SEO 与广告位验收（半天）
1. SEO 验收：
   - Title 50–60 字符
   - Description 140–160 字符
   - `meta keywords` 为空
   - Canonical 存在
   - FAQ schema 存在
2. 广告位验收：
   - 首屏下 1 个
   - 正文中段 1–2 个
   - 文末 1 个
3. 结构验收：
   - 每页内链 >= 5
   - 每页至少回链 1 个 Hub（`index/about/blog/pricing`）

### Phase 5：发布与观察（14 天）
1. 构建发布：`node build.js`。
2. 提交收录：sitemap / IndexNow。
3. 指标观察（D+3 / D+7 / D+14）：
   - 自然点击
   - 平均停留时长
   - 每次访问页数
   - 页面 RPM
4. 调整策略：
   - 若 RPM 上升但跳出率恶化：先减正文广告位，再优化首屏结论和相关阅读质量。
   - 若曝光有但点击低：先改标题和描述。
   - 若点击有但停留低：加强教程步骤、FAQ、对比表。

## 最终补充：P0-P2 内链架构与 URL 层级计划

### 1) 关键词归类（按簇，不按单词）
- 品牌认知簇：`what-is-lovart`、`lovart-login-guide`
  - 关键词：`lovart 是什么`、`what is lovart`、`lovart login`
- 商业决策簇：`lovart-promo-code`、`lovart-review`、`lovart-alternative`
  - 关键词：`promo/coupon/discount`、`review`、`alternative`、`vs canva`
- 使用教程簇：`lovart-tutorial`（并联现有 `lovart-prompt-guide`、`lovart-logo`、`lovart-brand-kit`）
  - 关键词：`how to use lovart`、`lovart tutorial`、`lovart 教程`
- 公司信息簇：`lovart-company`
  - 关键词：`funding`、`founder`、`revenue`、`valuation`、`news`

### 2) 内链拓扑（Hub + Cluster）
- 主 Hub（全站高权重入口）：
  - `index`
  - `about`
  - `blog`
  - `lovart-pricing`
- 每个新页必须满足：
  - 文中至少 2 条同簇链接
  - 文中至少 2 条跨簇链接
  - 文末相关阅读至少 3 条
- 推荐互链矩阵（最小集）：
  - `what-is-lovart` -> `lovart-tutorial` / `lovart-review` / `lovart-pricing` / `lovart-api`
  - `lovart-login-guide` -> `lovart-customer-support` / `lovart-support-contact` / `what-is-lovart`
  - `lovart-promo-code` -> `lovart-pricing` / `lovart-invitation-code` / `lovart-review`
  - `lovart-review` -> `lovart-alternative` / `lovart-pricing` / `what-is-lovart`
  - `lovart-alternative` -> `lovart-review` / `lovart-design-features` / `lovart-pricing`
  - `lovart-tutorial` -> `lovart-prompt-guide` / `lovart-logo` / `lovart-brand-kit` / `what-is-lovart`
  - `lovart-company` -> `about` / `blog` / `lovart-review` / `lovart-alternative`

### 3) URL 层级策略（二级优先）
- 当前阶段推荐：全部使用二级 URL（根路径页面）
  - 示例：`/lovart-review`、`/lovart-alternative`、`/lovart-tutorial`、`/lovart-company`
- 原因：
  - 页面总量不大，二级页更集中权重
  - 开发与维护成本低，上线快
  - 避免过早引入目录复杂度
- 信息层级通过 Breadcrumb 表达，而非强依赖三级目录：
  - `Home > Guides > Lovart Tutorial`
  - `Home > Compare > Lovart Alternatives`

### 4) 何时升级到三级 URL（触发条件）
- 同一簇页面数 >= 20
- 某一子主题持续 30 天贡献该簇 > 60% 点击
- 需要独立栏目页承接（例如 `/guides/`、`/compare/`、`/company/`）
- 满足任意 2 条后，再规划从二级迁移到三级，并做 301 与 canonical 迁移。

### 5) 落地执行清单（按文件）
1. `src/templates/*.ejs`
   - 在正文与文末增加“相关阅读”卡片区。
   - 新增/统一 breadcrumb 路径文本，表达逻辑层级。
2. `src/locales/*.json`
   - 为每页补齐内链文案锚文本（避免英文锚文本硬编码）。
   - 统一“第三方说明 + 更新时间”文案键。
3. `build.js`
   - 保持现有二级 URL 生成方式。
   - 新页面发布后验证 sitemap 是否包含目标 URL。
4. 验证
   - 抽样检查每个新页内链数 >= 5。
   - 抽样检查页面有回链到至少 1 个 Hub 页。

## P3 增量计划（CSV 未覆盖词）

> 数据来源：`docs/lovart_broad-match_us_2026-02-22.csv`  
> 目标：在不与已上线 P0/P1/P2 页面内耗的前提下，新增 3 个可放量页承接剩余词量。

### 1) P3 候选词簇与优先级

| 优先级 | 建议页面 URL | 可承接关键词 | 月搜索量合计 | 备注 |
|---|---|---|---:|---|
| P3-High | `lovarte` | `lovarte`(1000), `lovartal`(30), `lovart_ai`(20), `lovarts`(20) | 1070 | 高量拼写变体，适合做“纠错导航 + 内链分流” |
| P3-High | `lovart-code` | `lovart code`(260) | 260 | “code”意图混合，适合做邀请码/优惠码/AI code 拆解页 |
| P3-Mid | `lovart-ai-agent` | `agent lovart`(10), `lovart agent`(10), `lovart ai agent`(10), `lovart ai design agent`(10) | 40 | 解释型需求，补“design agent”认知词 |
| P3-Low（并入执行） | `lovarte`（不单独建 `lovart-home`） | `lovart ai home`(10), `lovart.ai/home`(10), `https:// www.lovart .ai/home`(10) | 30 | 导航意图强，统一并入 `lovarte` 页内承接 |

### 2) 页面策略（避免关键词内耗）
- `lovarte`：定位“拼写纠错页”
  - 首屏直接说明：你可能在找 `lovart.ai`。
  - 主体做“常见拼写错误映射表 + 正确入口”。
  - 同页并入 home 导航词：`lovart ai home` / `lovart.ai/home` / `https:// www.lovart .ai/home`。
  - 强内链到：`what-is-lovart`、`lovart-login-guide`、`lovart-pricing`、`lovart-free`。
- `lovart-code`：定位“意图拆解页”
  - 明确区分三类 code：`invitation code` / `promo code` / `ai code`。
  - 对应内链：`lovart-invitation-code`、`lovart-promo-code`、`lovart-ai-code`、`lovart-pricing`。
- `lovart-ai-agent`：定位“解释页”
  - 回答“agent 与普通 image generator 差异”。
  - 内链到：`what-is-lovart`、`lovart-tutorial`、`lovart-prompt-guide`、`lovart-design-features`。

### 3) P3 统一执行约束（沿用 P0-P2）
- 每页 600–900 词，1 个 H1 + 多个 H2/H3。
- Title 50–60 字符，Description 140–160 字符，`meta keywords` 置空。
- 必须有 Canonical、FAQ schema、可见 Breadcrumb、第三方声明。
- 广告位：首屏下 1 个、正文中段 2 个、文末 1 个（总计 4 个）。
- 每页内链 >= 6（同簇 2 + 跨簇 3 + Hub 1）。

### 4) P3 执行节奏（5 天）
1. Day 1：完成词簇映射、页面骨架、TDH 草案、FAQ 问题池。
2. Day 2：产出 `lovarte`（含 home 导航词模块）、`lovart-code` 模板与 locale 文案（en/zh）。
3. Day 3：产出 `lovart-ai-agent` 并接入内链矩阵。
4. Day 4：接入首页资源区与 Footer 入口，补 breadcrumb 与 related。
5. Day 5：执行 `node build.js`、提交 IndexNow、完成验收清单。

### 5) P3 验收清单
- 构建成功：`node build.js` 无报错，3 页输出到 `dist/`。
- SEO 通过：Title/Description 长度、Canonical、FAQ schema、`meta keywords` 均符合规范。
- 广告位通过：每页 4 个广告位。
- 结构通过：每页内链 >= 5，且至少回链 1 个 Hub（`index/about/blog/pricing`）。
