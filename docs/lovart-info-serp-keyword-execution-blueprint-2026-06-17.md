# SERP（搜索结果页）关键词内容执行蓝图

## Counter:

🚨 你的隐含前提有问题：这份文件不应该被当成“新增页面清单”。`lovart.info` 已经有大量相关路由，如果继续按关键词逐个开页，会制造重复意图、薄内容和身份混淆。更合理的执行方式是：P0 页面深度刷新，少量高价值缺口新建，其余关键词合并到已有页或只做 FAQ（常见问题）承接。

🚨 第二个风险：`roblox-inner-page-refresh` 是 Roblox（罗布乐思）站内页工作流，但本项目是 Lovart 工具资讯站。本文保留该 skill 的 SERP（搜索结果页）、证据标签、逐块写作合同和自包含蓝图规则，但信息架构必须改为 Lovart 项目真实结构：Developer（开发者）、Prompts（提示词）、Comparisons（对比）、Pricing/Access（价格与访问）、Tools（工具）、Guides（指南）。

## 目标报告

* report_path: `/Users/tangjei/Documents/建站/Hermes/lovart.info-keyword-research-2026-06-17.md`
* site_url: `https://lovart.info/`
* repo_path: `/Users/tangjei/Documents/建站/工具站/lovart`
* run_date: `2026-06-17`
* queue_source_section: `第六章：综合机会矩阵` 作为页面执行主队列，`第三章：完整候选词库` 作为完整关键词覆盖范围，`第五章：10 词 SERP 详细分析` 作为竞争摘要输入，`第七章：Top 3 关键词定方向` 作为优先级输入。
* keywords_analyzed: `62` 个候选词全部映射，`12` 个机会矩阵词给出页面级执行合同。
* output_file: `/Users/tangjei/Documents/建站/工具站/lovart/docs/lovart-info-serp-keyword-execution-blueprint-2026-06-17.md`
* skill_runtime_path: `/Users/tangjei/.hermes/skills/yangyangyang/roblox-inner-page-refresh/SKILL.md`
* skill_output_override: 用户要求文件放入项目文档目录。本文件写入现有 `docs/` 文档目录，不修改网站代码。

## 声明分类

| 分类 | 本文件中的用法 |
|---|---|
| Verifiable（可验证） | 来自本地仓库、关键词报告、官方 Lovart 页面、可访问搜索摘要或明确 URL 的事实。 |
| Judgment（判断） | 基于 SERP 结构、当前路由、站点定位和内容风险给出的页面动作。 |
| Confidence != Correctness（自信不等于正确） | 关键词报告没有搜索量工具数据，且 Google HTML 被 429 验证拦截，所以优先级不能等同于确定流量。 |

## 执行 AI 自包含写作合同

### 使用边界

* 本文件已经内嵌页面写作规则；执行 AI 不需要读取 skill 或 references 文件。
* `roblox-inner-page-refresh` 是 Hermes skill（Hermes 技能）。写代码 AI 如果找不到该 skill，应直接按本 MD（Markdown 文档）执行。
* 本轮只产出蓝图，不修改网站代码，不发布页面。
* 不得把 SERP 排名、竞品正文、Reddit（社区讨论）或 YouTube（视频平台）视频当成事实验证。
* 站点身份必须写清：`lovart.info is an independent guide site`，中文含义是 `lovart.info 是独立指南站，不是 Lovart 官方网站`。

### 每个页面必须包含的页面级字段

| 字段 | 必填要求 |
|---|---|
| primary_keyword（主关键词） | 取自执行队列或完整关键词映射表。 |
| secondary_keywords（二级关键词） | 取自同一词簇，不跨意图硬塞。 |
| route（路由） | 明确新建、刷新、合并或不创建的目标路径。 |
| canonical_url（规范 URL） | 使用 `https://lovart.info/{route}`。 |
| title（标题标签） | 包含主关键词，尽量 50 到 60 个英文字符。 |
| meta_description（元描述） | 包含主关键词，尽量 140 到 160 个英文字符。 |
| H1（一级标题） | 每页只能 1 个 H1。 |
| target_word_count（目标字数） | 普通页 700 到 1000 英文词，开发者核验页可 900 到 1200 英文词。 |
| required_H2s（必需二级标题） | 必须逐项写出，不允许只写“完善内容”。 |
| required_H3s（必需三级标题） | 步骤、表格、风险、FAQ 下必须拆细。 |
| evidence_policy（证据规则） | 使用 `verified`、`reported`、`pending`、`disputed`、`estimated`、`unsafe`。 |
| forbidden_claims（禁写声明） | 禁止伪装官方、承诺免费额度、编造 API 端点、提供 APK 或 mod APK 下载。 |
| internal_links（内链） | 给出目标路由和锚文本意图。 |
| youtube_embeds（YouTube 嵌入） | 出现视频需求时必须实际嵌入，不得只列文字链接。 |

### Lovart 项目信息架构裁决规则

| navigation_group（导航分组） | 适用页面 |
|---|---|
| Developer（开发者） | API、API key、API pricing、developer options、AI code。 |
| Prompts（提示词） | prompt guide、prompt library、prompt generator、agent prompt、system prompt 的安全替代页。 |
| Comparisons（对比） | alternative、vs Canva、vs Midjourney、vs Recraft、vs OpenArt、open source alternative。 |
| Pricing/Access（价格与访问） | free、pricing、login、app、APK 安全说明、trial（试用）问题。 |
| Tools（工具） | image generator、logo generator、brand kit、mockup、poster、background remover。 |
| Guides（指南） | tutorial、what is Lovart、how to use、review、wiki 型解释页。 |
| Trust（信任） | about、privacy、terms、official disclaimer（官方身份声明）、support。 |

### 每个页面必须给出的信息架构字段

| 字段 | 必填要求 |
|---|---|
| action（动作） | `new_page`、`refresh_existing`、`merge_into_existing`、`split_page`、`do_not_create`。 |
| navigation_slot（导航位置） | `main_nav`、`dropdown`、`hub_child`、`footer`、`internal_links_only`、`none`。 |
| parent_page（父页） | Hub（枢纽页）写 `none`，子页写明确父路由。 |
| breadcrumb（面包屑） | 例如 `Home > Developer > Lovart API Documentation`。 |
| add_to_main_nav（主导航） | true 或 false。 |
| add_to_footer（页脚） | true 或 false。 |
| add_to_sitemap（站点地图） | true 或 false。 |
| add_to_related_guides（相关推荐） | true 或 false。 |
| nav_change_required（是否需要导航改动） | true 或 false。 |
| do_not_place（禁止放置位置） | 写清不应进入哪些导航或页面。 |

### 证据标签规则

| 标签 | 中文含义 | 使用条件 |
|---|---|---|
| `verified` | 已验证 | 官方 Lovart 页面、本地仓库可见事实、直接实测。 |
| `reported` | 被报道 | 多个非官方来源共同出现，但未实测。 |
| `pending` | 待验证 | 单一来源、弱来源、搜索摘要或需要登录后确认。 |
| `disputed` | 有冲突 | 来源互相矛盾，或页面状态随时间变化。 |
| `estimated` | 估算 | 竞争度、商业价值、搜索量机会、公式推导。 |
| `unsafe` | 不安全 | mod APK、破解版、隐藏 system prompt、非官方 API wrapper（封装器）等。 |

### YouTube iframe（视频嵌入）执行约束

* SERP 出现 YouTube 时，不能只写文字链接。
* 优先复用仓库已有视频组件；没有组件时使用响应式 16:9 `iframe`。
* `https://www.youtube.com/watch?v=VIDEO_ID` 转成 `https://www.youtube-nocookie.com/embed/VIDEO_ID`。
* iframe 必须包含 `title`、`loading="lazy"`、`allowfullscreen` 和 fallback link（备用链接）。
* 视频只能作为视觉辅助，不得把视频内容标记为 `verified`。

## 现有网站表面检查

| 区域 | 当前状态 | 相关性 | 风险 |
|---|---|---|---|
| 构建方式 | `build.js` 读取 `src/templates/*.ejs` 和 `src/locales/*.json` 生成静态页面。 | 后续执行应按模板和 locale（本地化文案）结构改。 | 本轮不改代码。 |
| 主导航 | Header（页眉）已有 Home、Features、Tools、Learn、Free、API、Pricing、Blog。 | Developer、Tools、Prompts、Pricing 已有入口或可复用。 | 不应为每个长尾词新增主导航。 |
| Footer（页脚） | Footer 已含 Free、Pricing、API、AI Code、Prompt Guide、Alternative、AI Agent、Brand Kit、APK、Logo。 | 大多数目标页已有页脚入口或相邻入口。 | 页脚过载，新增页要克制。 |
| Developer 页面 | 已有 `lovart-api`、`lovart-api-key`、`lovart-api-documentation`、`lovart-api-pricing`、`lovart-developer-options`。 | P0 不应新建，而应刷新证据与结构。 | 现有文案已有“无法确认”表达，但需要状态标签和核验表更强。 |
| Prompt 页面 | 已有 `lovart-prompt-guide`，未发现 `lovart-prompt-library`、`lovart-prompt-generator` 模板。 | prompt library 和 generator 是真实缺口。 | 新建前要避免伪造官方 prompt 或 system prompt。 |
| Comparison 页面 | 已有 `lovart-alternative`、`lovart-vs-midjourney`，`lovart-vs-canva` 目前更像 alternative 页中的锚点。 | `lovart-vs-canva` 应拆成独立页或至少 split_page（拆页）规划。 | 只放锚点不足以承接中尾词。 |
| Pricing/Access 页面 | 已有 `lovart-free`、`lovart-pricing`、`lovart-login-guide`、`lovart-apk`。 | 免费、登录、APK 风险词都有承接路径。 | 不能承诺“免费无信用卡”除非当页有官方证据。 |
| Tools 页面 | 已有 `lovart-ai-image-generator`、`lovart-logo`、`lovart-ai-logo-design`、`lovart-brand-kit`。 | 泛工具词只应合并刷新，不应盲目新建。 | 泛词竞争强，短期不应主攻。 |

## SERP 关键词执行队列

| 优先级 | 关键词 | 层级 | 竞争度 | 页面动作 | 目标路由 | 综合推荐 |
|---|---|---|---|---|---|---|
| P0 | lovart api documentation | 长尾词 | 低 | refresh_existing | `/lovart-api-documentation` | 第一优先 |
| P0 | lovart prompt guide | 长尾词 | 低 | refresh_existing | `/lovart-prompt-guide` | 第二优先 |
| P1 | lovart prompt library | 长尾词 | 低到中 | new_page | `/lovart-prompt-library` | 高优先 |
| P1 | lovart prompt generator | 长尾词 | 未单独评分 | new_page | `/lovart-prompt-generator` | 工具承接 |
| P1 | lovart ai alternative free | 长尾词 | 中 | merge_into_existing | `/lovart-alternative#free-alternatives` | 第三优先 |
| P1 | lovart alternative | 中尾词 | 中 | refresh_existing | `/lovart-alternative` | 高优先 |
| P1 | lovart vs canva | 中尾词 | 中 | split_page | `/lovart-vs-canva` | 高优先 |
| P1 | lovart ai free | 长尾词 | 中 | refresh_existing | `/lovart-free` | 高优先但需谨慎 |
| P2 | ai brand kit generator free | 中尾词 | 中 | refresh_existing | `/lovart-brand-kit` | 次优先 |
| P2 | lovart ai image generator | 中尾词 | 中偏高 | refresh_existing | `/lovart-ai-image-generator` | 支撑页 |
| P2 | ai design agent | 核心词 | 高 | refresh_existing | `/lovart-ai-agent` | 长期页 |
| P3 | ai design generator free online | 核心词 | 高 | merge_into_existing | `/lovart-ai-image-generator` | 不建议主攻 |
| P3 | ai logo generator free no sign up | 中尾词 | 高 | merge_into_existing | `/lovart-logo` | 不建议主攻 |

## 逐关键词 SERP 调查与页面执行合同

### 1. lovart api documentation

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | AI Design API | `https://www.lovart.ai/tools/ai-api-access` | Lovart 官方 | API access（API 接入）工具页 | used | `verified` 只限“官方存在 API access 页面”。 |
| 搜索摘要 | Lovart for Developers | `https://lovart.info/lovart-ai-code` | 本站 | Developer hub（开发者枢纽） | used | 内链来源。 |
| 搜索摘要 | Lovart API Guide | `https://lovart.pro/lovart-api` | 第三方 | API 指南 | used | 只能做竞品结构参考，不可采信其 API key 细节。 |
| 搜索摘要 | Claude Code Skills Lovart API | `https://claudemarketplaces.com/skills/lovartai/lovart-skill/lovart-api` | 第三方 | 技能市场页 | used | 标记为 `pending`，不作为官方 API 文档。 |
| 报告说明 | Google HTML SERP 被 429 验证拦截 | 无 | Google | 搜索访问限制 | blocked_google | 不补造前 10 DOM。 |

#### 搜索意图与内容缺口

* 主要意图：用户想知道 Lovart 是否有公开 API documentation（API 文档）、API key（API 密钥）、pricing（定价）和官方入口。
* 当前缺口：多数页面把“API access 页面存在”和“完整公开 API 文档存在”混在一起。
* 本站机会：独立信息站应做 confirmed（已确认）与 not confirmed（未确认）分层。

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-api-documentation` |
| action | refresh_existing |
| navigation_group | Developer（开发者） |
| navigation_slot | dropdown 或 hub_child |
| parent_page | `/lovart-ai-code` |
| breadcrumb | Home > Developer > Lovart API Documentation |
| add_to_main_nav | false |
| add_to_footer | true |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 已有 Developer 路由集群，不需要主导航新增。 |
| do_not_place | 不放 Tools（工具）主导航，不写成官方开发者门户。 |

#### 页面写作约束

* primary_keyword: `lovart api documentation`
* secondary_keywords: `lovart api key`、`lovart ai api key`、`lovart api pricing`、`lovart developer options`
* title: `Lovart API Documentation Guide 2026`
* meta_description: `Looking for Lovart API documentation? See official links, API key status, pricing notes, and what remains unverified.`
* H1: `Lovart API Documentation: Official Links, API Key Status, and Pricing Notes`
* target_word_count: 900 到 1200 英文词
* canonical_url: `https://lovart.info/lovart-api-documentation`
* evidence_policy: 官方 Lovart URL 用 `verified`；具体端点、SDK、速率限制、计费细节默认 `pending` 或 `not verified`。
* forbidden_claims: 不得写“公开 OpenAPI spec 已确认”、不得写具体 endpoint、不得写 dashboard 路径、不得承诺 Pro 或 Enterprise 一定有 API key。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 立刻回答用户 | 说明本站不是官方文档，提供官方入口和核验清单。 | verified/pending | 报告 Top 1、官方 API access 页 | 状态标签条 | `/lovart-ai-code` | 首屏出现“official vs unverified”。 |
| 2 | what | H2 `What Lovart API Documentation Means` | 定义范围 | 区分 API access、API docs、API key、SDK、pricing。 | verified/pending | 官方页面和现有站内页 | 定义表 | `/lovart-api-key` | 读者知道哪些词不是同一件事。 |
| 3 | evidence | H2 `What Is Officially Confirmed` | 建立信任 | 写官方 API access 页面存在、官方 docs 说明 Lovart 是 AI design agent（AI 设计代理）。 | verified | Lovart 官方 docs、API access 页 | 证据表 | `/lovart-api` | 每条有来源 URL。 |
| 4 | risk | H2 `What We Could Not Verify` | 避免虚假确定性 | 端点、OpenAPI、SDK、rate limit（速率限制）、per-call pricing（按次计费）未确认。 | pending | 报告和当前 SERP | 警示框 | `/lovart-api-pricing` | 不出现编造参数。 |
| 5 | how | H2 `How To Check API Access Safely` | 给行动路径 | 访问官方 API 页、登录官方账户、检查 pricing、联系官方支持。 | verified/pending | 官方站和本站 support cluster | Step list（步骤列表） | `/lovart-developer-options` | 步骤不要求用户访问第三方 API wrapper。 |
| 6 | FAQ | H2 `Lovart API Documentation FAQ` | 覆盖长尾 | 至少 5 问：public API、API key、pricing、SDK、本站是否官方。 | pending/verified | 关键词库 47 到 50 | FAQ accordion（折叠问答） | `/lovart-api-key` | 每个答案带证据标签。 |

### 2. lovart prompt guide

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | AI Illustration Guide | `https://www.lovart.ai/blog/ai-illustration-guide` | Lovart 官方 | Prompt 教程 | used | 可验证官方提示词方向。 |
| 搜索摘要 | AI Illustration Prompting Mastery | `https://www.lovart.ai/blog/ai-illustration-prompts` | Lovart 官方 | Prompt 公式页 | used | 可借鉴分类，但不复制模板。 |
| 搜索摘要 | Lovart Prompt Library | `https://lovart.fyi/prompts` | 第三方 | 模板库 | used | 结构参考。 |
| 搜索摘要 | Lovart Prompt Library | `https://lovart.pro/prompts` | 第三方 | 模板库 | used | 结构参考，部分内容可能薄。 |
| 搜索摘要 | Lovart Tutorial Brand Identity | `https://www.youtube.com/watch?v=jOIBTgYjkqE` | YouTube | 视频教程 | youtube_embed | 嵌入为视觉辅助，不验证事实。 |

#### YouTube 嵌入要求

| 标题 | 原始 URL | 嵌入 URL | 必须嵌入位置 | 证据限制 |
|---|---|---|---|---|
| Lovart Tutorial Brand Identity Design with Prompt-to-Brand | `https://www.youtube.com/watch?v=jOIBTgYjkqE` | `https://www.youtube-nocookie.com/embed/jOIBTgYjkqE` | `How to turn one prompt into a brand kit` 区块后 | 只作为操作演示，不作为功能或价格证明。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-prompt-guide` |
| action | refresh_existing |
| navigation_group | Prompts（提示词） |
| navigation_slot | dropdown |
| parent_page | none |
| breadcrumb | Home > Prompts > Lovart Prompt Guide |
| add_to_main_nav | false |
| add_to_footer | true |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | Footer 已有 Prompt Guide，Learn dropdown 可承接。 |
| do_not_place | 不放 Pricing，不写成官方 hidden prompt 泄露页。 |

#### 页面写作约束

* primary_keyword: `lovart prompt guide`
* secondary_keywords: `lovart prompt library`、`lovart prompt generator`、`lovart agent prompt`、`prompt lovart ai`
* title: `Lovart Prompt Guide: Copy-Ready AI Design Prompts`
* meta_description: `Use this Lovart prompt guide for logos, brand kits, social posts, product mockups, and videos with copy-ready examples.`
* H1: `Lovart Prompt Guide for Logos, Brand Kits, Social Posts, and Product Mockups`
* target_word_count: 1000 到 1400 英文词
* forbidden_claims: 不得写 `Lovart system prompt` 已泄露，不得声称模板来自官方内部，不得承诺每个 prompt 一定生成商业可用结果。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 明确页面价值 | 说明这是独立提示词指南，按设计场景给可复制模板。 | verified/pending | 官方 prompt 文章和报告 Top 2 | Copy CTA（复制按钮） | `/lovart-prompt-library` | 首屏有 5 个场景入口。 |
| 2 | what | H2 `What Makes a Good Lovart Prompt` | 解释提示词结构 | Subject（主体）、style（风格）、format（格式）、brand constraints（品牌约束）、negative constraints（负面约束）。 | verified/reported | 官方 prompt 教程 | 结构表 | `/lovart-ai-agent` | 结构能直接复用。 |
| 3 | templates | H2 `Copy-Ready Lovart Prompts by Use Case` | 提供核心内容 | 至少 30 个模板，分 logo、brand kit、social post、product mockup、video ad。 | pending | 报告要求和竞品结构 | 可复制卡片 | `/lovart-brand-kit`、`/lovart-logo` | 每组至少 6 个模板。 |
| 4 | how | H2 `How To Adapt Each Prompt` | 防止模板空泛 | 每个模板解释变量、适合人群、失败时怎么改。 | reported | 官方教程结构 | Checklist（检查清单） | `/lovart-tutorial` | 不是只堆 prompt。 |
| 5 | youtube_embed | H2 `Video Walkthrough` | 满足视频需求 | 嵌入 YouTube，下面写“视频不是事实验证”。 | youtube_embed | YouTube 结果 | 16:9 iframe | 无 | 页面实际有 iframe 任务。 |
| 6 | FAQ | H2 `Lovart Prompt FAQ` | 覆盖追问 | prompt library、prompt generator、agent prompt、system prompt 安全替代。 | pending/unsafe | 关键词 32 到 38 | FAQ accordion | `/lovart-prompt-generator` | FAQ 明确拒绝 system prompt 泄露。 |

### 3. lovart prompt library

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | Lovart Prompt Library 50+ Ready-to-Use | `https://lovart.fyi/prompts` | 第三方 | Prompt library（提示词库） | used | 模块参考。 |
| 搜索摘要 | Lovart Prompt Library Ready-to-Use | `https://lovart.pro/prompts` | 第三方 | Prompt library（提示词库） | used | 模块参考。 |
| 搜索摘要 | AI Illustration Prompting Mastery | `https://www.lovart.ai/blog/ai-illustration-prompts` | Lovart 官方 | Prompt formulas（提示词公式） | used | 验证官方鼓励结构化提示词。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-prompt-library` |
| action | new_page |
| navigation_group | Prompts（提示词） |
| navigation_slot | hub_child |
| parent_page | `/lovart-prompt-guide` |
| breadcrumb | Home > Prompts > Lovart Prompt Guide > Lovart Prompt Library |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 是 prompt guide 的子页，不适合主导航。 |
| do_not_place | 不放 Developer，不放 Pricing。 |

#### 页面写作约束

* primary_keyword: `lovart prompt library`
* secondary_keywords: `lovart prompt guide`、`lovart prompt generator`、`lovart agent prompt`
* title: `Lovart Prompt Library: 50 Copy-Ready Design Prompts`
* H1: `Lovart Prompt Library for Logos, Brand Kits, Ads, and Product Visuals`
* target_word_count: 900 到 1200 英文词
* required_modules: filterable category table（分类筛选表）、copy-ready cards（可复制卡片）、prompt anatomy（提示词结构）、failure fixes（失败修正）。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 承接模板库意图 | 告诉用户可复制，不声称官方模板。 | pending | SERP prompt library | 分类 tabs（标签页） | `/lovart-prompt-guide` | 首屏有类别导航。 |
| 2 | table | H2 `Prompt Categories` | 降低查找成本 | Logo、Brand Kit、Social Post、Product Mockup、Video Ad、Poster。 | reported | 报告 Top 2 | 表格 | `/lovart-logo`、`/lovart-brand-kit` | 至少 6 类。 |
| 3 | cards | H2 `Copy-Ready Prompts` | 提供核心资源 | 50 个模板，字段含 prompt、best for、variables、avoid。 | pending | 自建模板 | 卡片加复制按钮 | `/lovart-prompt-generator` | 每张卡有变量说明。 |
| 4 | trust | H2 `How These Prompts Were Built` | 防止伪官方 | 说明来自公开设计 prompt 模式和本站编辑整理。 | pending | 官方 prompt 指南 | disclosure callout | `/about` | 明确非官方。 |
| 5 | FAQ | H2 `Prompt Library FAQ` | 覆盖长尾 | 是否免费、是否官方、能否商用、如何改变量、是否含 system prompt。 | pending/unsafe | 关键词 33 到 38 | FAQ | `/lovart-prompt-guide` | system prompt 回答为安全替代。 |

### 4. lovart prompt generator

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 报告联想 | lovart prompt generator | Google Suggest | 搜索联想 | 工具词 | used | 说明有工具型需求。 |
| 搜索摘要 | Lovart Prompt Library | `https://lovart.fyi/prompts` | 第三方 | 模板库 | used | 竞品没有真正 generator 时是缺口。 |
| 搜索摘要 | 官方 prompt 教程 | `https://www.lovart.ai/blog/ai-illustration-guide` | Lovart 官方 | 教程 | used | 公式输入来源。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-prompt-generator` |
| action | new_page |
| navigation_group | Prompts（提示词） |
| navigation_slot | hub_child |
| parent_page | `/lovart-prompt-guide` |
| breadcrumb | Home > Prompts > Lovart Prompt Guide > Lovart Prompt Generator |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 第一版可做轻工具页，承接工具型长尾。 |
| do_not_place | 不放 Developer，不承诺能调用 Lovart API。 |

#### 页面写作约束

* primary_keyword: `lovart prompt generator`
* secondary_keywords: `lovart prompt guide`、`lovart prompt library`、`lovart agent prompt`
* title: `Lovart Prompt Generator for AI Design Briefs`
* H1: `Lovart Prompt Generator for Logos, Brand Kits, and Campaign Assets`
* target_word_count: 700 到 1000 英文词
* required_modules: scenario selector（场景选择）、brand fields（品牌字段）、prompt output（提示词输出）、edit checklist（编辑清单）。
* forbidden_claims: 不得写成真正连接 Lovart 后台的生成器，除非后续代码实现真实集成。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 工具承诺清晰 | 写“build a prompt from your inputs”，不写“generate in Lovart directly”。 | pending | 关键词联想 | 表单预览 | `/lovart-prompt-library` | 不误导成官方工具。 |
| 2 | tool | H2 `Build Your Prompt` | 核心工具 | 输入字段：output type、brand name、audience、style、colors、format、avoid。 | estimated | Prompt guide 结构 | form/table | `/lovart-logo` | 字段完整。 |
| 3 | how | H2 `How To Use the Generated Prompt` | 给操作步骤 | 复制 prompt，粘贴到 Lovart，查看结果，按失败清单改。 | pending | 官方 prompt 文章 | Step list | `/lovart-tutorial` | 有失败恢复。 |
| 4 | trust | H2 `What This Tool Does Not Do` | 降低风险 | 不登录、不调用 API、不保证结果、不保存用户素材。 | verified/pending | 本站身份 | Warning box | `/lovart-api-documentation` | 禁写声明完整。 |
| 5 | FAQ | H2 `Prompt Generator FAQ` | 覆盖追问 | 是否免费、是否官方、是否调用 API、能否用于 logo、能否商用。 | pending | 关键词 34 | FAQ | `/lovart-free` | 至少 5 问。 |

### 5. lovart ai alternative free

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | A Free Alternative to Lovart | `https://www.cuty.ai/tool/lovart` | Cuty AI | 替代品落地页 | used | 竞品结构参考。 |
| 搜索摘要 | 1min.AI vs Lovart | `https://1min.ai/lovart-alternative` | 1min.AI | 竞品比较页 | used | 参考比较角度。 |
| 搜索摘要 | Top 10 Lovart AI Alternatives | `https://www.g2.com/products/lovart-ai/competitors/alternatives` | G2 | 软件目录 | used | `reported` 列表信号。 |
| 搜索摘要 | Best Lovart Alternative 2026 | `https://www.adlegends.ai/lovart-alternative` | Ad Legends | 竞品落地页 | used | 结构参考。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-alternative#free-alternatives` |
| action | merge_into_existing |
| navigation_group | Comparisons（对比） |
| navigation_slot | internal_links_only |
| parent_page | `/lovart-alternative` |
| breadcrumb | Home > Comparisons > Lovart Alternatives > Free Alternatives |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | false |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 免费替代品是 alternative 页子意图，不值得独立开薄页。 |
| do_not_place | 不放 Tools 主导航，不把竞品页面写成官方推荐。 |

#### 页面写作约束

* primary_keyword: `lovart ai alternative free`
* secondary_keywords: `lovart alternative reddit`、`lovart open source alternative`、`alternative lovart ai`
* section_title: `Free Lovart AI Alternatives: What You Actually Give Up`
* forbidden_claims: 不得声称某个工具“完全等同 Lovart”，不得伪造 Reddit 共识，不得写未验证 open source alternative 为官方替代。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | compare | H2 `Free Lovart AI Alternatives` | 匹配免费替代意图 | 按用例列：image generation、brand kit、logo、video ads、API。 | reported | Cuty、G2、1min.AI | 对比表 | `/lovart-free` | 每个工具有限制列。 |
| 2 | risk | H3 `What Free Usually Means` | 防止误导 | 写 credits、watermark、account、export limit、commercial rights 五类限制。 | reported/pending | SERP 模式 | Checklist | `/lovart-pricing` | 不写“永久免费”。 |
| 3 | reddit | H3 `How To Read Reddit Discussions` | 覆盖 UGC 意图 | 只写验证方法：看日期、截图、利益关系、是否可复现。 | pending | 关键词 20 和 23 | Method box | `/lovart-review` | 不伪造社区结论。 |
| 4 | FAQ | H2 `Free Alternative FAQ` | 覆盖长尾 | free、reddit、open source、Canva、Cuty、G2 alternatives。 | pending | 关键词 20 到 24 | FAQ | `/lovart-vs-canva` | 至少 5 问。 |

### 6. lovart alternative

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | 6 Best Lovart Alternatives | `https://www.seaart.ai/blog/lovart-alternative` | SeaArt AI | 列表页 | used | 竞品结构参考。 |
| 搜索摘要 | A Free Alternative to Lovart | `https://www.cuty.ai/tool/lovart` | Cuty AI | 替代品页 | used | 竞品定位参考。 |
| 搜索摘要 | 1min.AI vs Lovart | `https://1min.ai/lovart-alternative` | 1min.AI | 对比页 | used | 参考差异化维度。 |
| 搜索摘要 | G2 Lovart Alternatives | `https://www.g2.com/products/lovart-ai/competitors/alternatives` | G2 | 目录页 | used | 工具列表信号。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-alternative` |
| action | refresh_existing |
| navigation_group | Comparisons（对比） |
| navigation_slot | footer 或 dropdown |
| parent_page | none |
| breadcrumb | Home > Comparisons > Lovart Alternatives |
| add_to_main_nav | false |
| add_to_footer | true |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | Footer 已有替代品入口，主导航不必加重。 |
| do_not_place | 不放 Pricing，不写成 affiliate（联盟营销）堆榜。 |

#### 页面写作约束

* primary_keyword: `lovart alternative`
* secondary_keywords: `lovart ai alternative free`、`lovart alternative reddit`、`lovart open source alternative`、`lovart vs canva`、`lovart vs midjourney`
* title: `Best Lovart Alternatives by Workflow in 2026`
* H1: `Best Lovart Alternatives for AI Design, Brand Kits, and Campaign Assets`
* target_word_count: 1200 到 1600 英文词
* required_modules: decision tree（选择树）、comparison table（对比表）、free alternatives section（免费替代章节）、Reddit validation FAQ（社区验证 FAQ）、open source warning（开源风险说明）。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 明确独立比较 | 承认没有单一最佳，按 workflow（工作流）选。 | Judgment | 报告 Top 3 | Decision cards | `/lovart-review` | 不写“Lovart 总是最好”。 |
| 2 | table | H2 `Lovart Alternatives by Use Case` | 核心比较 | 列 Canva、Adobe Firefly、Recraft、Midjourney、Cuty、SeaArt、Looka 等。 | reported | SERP 竞品 | 对比表 | `/lovart-vs-canva`、`/lovart-vs-midjourney` | 至少 7 个工具。 |
| 3 | free | H2 `Free Lovart Alternatives` | 承接免费长尾 | 写免费限制，不承诺永久免费。 | pending | Cuty、G2、SeaArt | Limit table | `/lovart-free` | 每项有 tradeoff（取舍）。 |
| 4 | open_source | H2 `Open Source Lovart Alternatives` | 降低错误风险 | 写当前未确认同等开源替代；可讨论 Stable Diffusion 类本地方案。 | disputed/pending | 报告关键词 24 | Warning box | `/lovart-api-documentation` | 不伪造项目。 |
| 5 | FAQ | H2 `Lovart Alternatives FAQ` | 覆盖问题 | free、Reddit、Canva、Midjourney、open source、commercial rights。 | pending | 完整关键词库 | FAQ | `/lovart-pricing` | FAQ 覆盖 6 问以上。 |

### 7. lovart vs canva

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | Lovart vs Canva Complete Comparison | `https://lovart.fyi/compare/lovart-vs-canva` | 第三方 | 比较页 | used | 结构参考。 |
| 搜索摘要 | Canva Magic Design | `https://www.canva.com/magic-design/` | Canva 官方 | 工具页 | used | Canva 能力验证入口。 |
| 搜索摘要 | LinkedIn Lovart vs Canva | `https://www.linkedin.com/posts/simone-ferretti_sure-canva-is-convenient-and-user-friendly-activity-7451576885538484224-H2yE` | LinkedIn | 个人观点 | used | 只能 `pending`。 |
| 搜索摘要 | YouTube short | `https://www.youtube.com/shorts/MGat0jAwBDU` | YouTube | 短视频 | youtube_embed | 可作为视觉辅助，不验证。 |

#### YouTube 嵌入要求

| 标题 | 原始 URL | 嵌入 URL | 必须嵌入位置 | 证据限制 |
|---|---|---|---|---|
| Lovart AI Designing tool is better than Canva | `https://www.youtube.com/shorts/MGat0jAwBDU` | `https://www.youtube-nocookie.com/embed/MGat0jAwBDU` | `Video examples and opinions` 区块 | 只说明有视频讨论，不证明 Lovart 更好。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-vs-canva` |
| action | split_page |
| navigation_group | Comparisons（对比） |
| navigation_slot | hub_child |
| parent_page | `/lovart-alternative` |
| breadcrumb | Home > Comparisons > Lovart Alternatives > Lovart vs Canva |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 目前 alternative 页中有锚点，但中尾词值得独立承接。 |
| do_not_place | 不放主导航，不写成攻击 Canva 的软文。 |

#### 页面写作约束

* primary_keyword: `lovart vs canva`
* secondary_keywords: `lovart ai vs canva`、`lovart alternative`、`ai design agent vs design tool`
* title: `Lovart vs Canva: Which AI Design Workflow Fits You?`
* H1: `Lovart vs Canva: AI Design Agent or Template-Based Design Tool?`
* target_word_count: 1000 到 1400 英文词
* required_H2s: `Quick verdict`、`Workflow differences`、`Brand kit and campaign assets`、`Templates and editing control`、`Pricing and free access`、`Which one should you choose?`、`FAQ`
* forbidden_claims: 不得声称 Canva 不能 AI 生成，不得声称 Lovart 输出永远更好，不得编造价格。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 定位对比 | 写清 Lovart 是 AI design agent（AI 设计代理），Canva 是 template/design platform（模板与设计平台）。 | verified/reported | Lovart docs、Canva Magic Design | Verdict box | `/lovart-alternative` | 首屏不是单边吹捧。 |
| 2 | compare | H2 `Workflow Differences` | 核心差异 | 从 brief to assets（从需求到资产）、模板编辑、品牌一致性、导出、团队协作。 | verified/reported | 官方页和 SERP | 对比表 | `/lovart-ai-agent` | 至少 6 个维度。 |
| 3 | scenarios | H2 `Choose Lovart If... Choose Canva If...` | 帮用户决策 | 按 logo、brand kit、social media、presentation、manual editing 分类。 | Judgment | 报告机会总结 | 双栏 cards | `/lovart-brand-kit` | 每个场景有明确建议。 |
| 4 | youtube_embed | H2 `Video Opinions Are Not Proof` | 使用视频但控风险 | 嵌入 short，说明它是观点视频。 | youtube_embed | YouTube | iframe | 无 | 不把视频当证据。 |
| 5 | FAQ | H2 `Lovart vs Canva FAQ` | 覆盖追问 | free、brand kit、commercial use、templates、team use。 | pending | 关键词 25 到 26 | FAQ | `/lovart-free` | 至少 5 问。 |

### 8. lovart ai free

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | Lovart 官方首页 | `https://www.lovart.ai/` | Lovart 官方 | 官方入口 | used | 可验证官方入口存在。 |
| 搜索摘要 | Lovart 官方 prompt 文章 | `https://www.lovart.ai/blog/ai-illustration-prompts` | Lovart 官方 | Blog | used | 搜索摘要显示 free claim，必须标注复查日期。 |
| 搜索摘要 | This FREE AI Tool Designed a Full Brand | `https://www.youtube.com/watch?v=JgD_qHI-4fY` | YouTube | 教程视频 | youtube_embed | 视觉辅助。 |
| 搜索摘要 | Dreamina Lovart AI article | `https://dreamina.capcut.com/resource/what-is-lovart-ai` | CapCut/Dreamina | 竞品解释页 | used | 可能过时，标记 `disputed`。 |

#### YouTube 嵌入要求

| 标题 | 原始 URL | 嵌入 URL | 必须嵌入位置 | 证据限制 |
|---|---|---|---|---|
| This FREE AI Tool Designed a Full Brand in Minutes | `https://www.youtube.com/watch?v=JgD_qHI-4fY` | `https://www.youtube-nocookie.com/embed/JgD_qHI-4fY` | `Free trial walkthrough videos` 区块 | 视频标题不能作为免费额度证明。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-free` |
| action | refresh_existing |
| navigation_group | Pricing/Access（价格与访问） |
| navigation_slot | main_nav |
| parent_page | none |
| breadcrumb | Home > Pricing and Access > Lovart Free |
| add_to_main_nav | true |
| add_to_footer | true |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | Header 已有 Free 入口，继续作为高意图入口。 |
| do_not_place | 不放 Prompts，不写成优惠券页。 |

#### 页面写作约束

* primary_keyword: `lovart ai free`
* secondary_keywords: `is lovart ai free`、`lovart ai is free or paid`、`how to use lovart ai for free`
* title: `Lovart AI Free Trial Guide: What Is Confirmed`
* H1: `Lovart AI Free: Trial Access, Limits, and What To Verify`
* target_word_count: 900 到 1200 英文词
* forbidden_claims: 不得承诺永久免费、无信用卡、固定免费额度、无需账号，除非页面执行时从官方当日验证。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 回答免费意图 | 写“check current official page”，说明免费状态可能变化。 | verified/pending | 官方页 | Last verified（最后验证）标签 | `/lovart-pricing` | 首屏不承诺免费额度。 |
| 2 | what | H2 `Is Lovart AI Free?` | 直接回答 | 分 confirmed、needs login、not confirmed。 | verified/pending | 官方页面和报告 | 状态表 | `/lovart-login-guide` | 有状态标签。 |
| 3 | how | H2 `How To Try Lovart Safely` | 行动路径 | 官方入口、注册、检查额度、不要下载 mod APK。 | verified/unsafe | 官方入口、APK 风险词 | Step list | `/lovart-apk` | 写明安全边界。 |
| 4 | youtube_embed | H2 `Free Trial Walkthrough Videos` | 满足视频需求 | 嵌入视频，标注非证据。 | youtube_embed | YouTube | iframe | 无 | 视频不在主答案前。 |
| 5 | FAQ | H2 `Lovart AI Free FAQ` | 覆盖问题词 | is free、free or paid、credit card、login、APK、API free tier。 | pending | 关键词 11、41、45、46 | FAQ | `/lovart-api-pricing` | 至少 6 问。 |

### 9. ai brand kit generator free

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | ImagineArt Brand Kit Generator | `https://www.imagine.art/apps/brandkit-generator` | ImagineArt | 工具页 | used | 竞品模块参考。 |
| 搜索摘要 | Looka Brand Kit | `https://looka.com/` | Looka | 品牌套件平台 | used | 竞品能力参考。 |
| 搜索摘要 | Ad Legends AI Brand Kit Generator | `https://www.adlegends.ai/ai-brand-kit-generator` | Ad Legends | 工具页 | used | 竞品结构参考。 |
| 搜索摘要 | Tom's Guide Lovart brand kit article | `https://www.tomsguide.com/ai/with-one-prompt-i-built-an-entire-brand-kit-in-an-hour-using-lovart` | Tom's Guide | 第三方评测 | used | `reported`，不可当官方。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-brand-kit` |
| action | refresh_existing |
| navigation_group | Tools（工具） |
| navigation_slot | dropdown |
| parent_page | none |
| breadcrumb | Home > Tools > Lovart Brand Kit |
| add_to_main_nav | false |
| add_to_footer | true |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 已有 Tools dropdown 和 Footer 入口。 |
| do_not_place | 不放 Pricing 主导航，不写成免费工具页。 |

#### 页面写作约束

* primary_keyword: `ai brand kit generator free`
* secondary_keywords: `ai brand kit generator`、`ai brand kit generator from logo`、`best ai brand kit generator`
* title: `AI Brand Kit Generator Free Guide for Lovart`
* H1: `AI Brand Kit Generator Free: How Lovart Fits Brand Kit Workflows`
* target_word_count: 900 到 1200 英文词
* required_modules: brand kit component checklist、from-logo workflow、free limits comparison、examples section。
* forbidden_claims: 不得承诺免费导出完整品牌包，不得承诺商业授权。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 承接泛工具词 | 写 Lovart 适合从 brief（需求说明）到 brand assets（品牌资产）。 | verified/reported | 官方 docs、Tom's Guide | Feature cards | `/lovart-ai-agent` | 首屏包含免费核验提示。 |
| 2 | what | H2 `What a Brand Kit Generator Should Create` | 定义范围 | logo、colors、fonts、social assets、product mockups、video ads、export files。 | verified/reported | 官方 docs | Checklist | `/lovart-logo` | 不只讲 logo。 |
| 3 | how | H2 `How To Build a Brand Kit From One Prompt` | 给操作路径 | 输入品牌、受众、风格、颜色、格式，生成后迭代。 | reported | 官方 prompt 文章 | Steps | `/lovart-prompt-guide` | 有示例 prompt。 |
| 4 | compare | H2 `Free Brand Kit Tools Compared` | 满足商业调查 | Lovart、Looka、ImagineArt、Adobe Express、Ad Legends，列 free limits。 | reported/pending | SERP | 对比表 | `/lovart-alternative` | 每项有限制列。 |
| 5 | FAQ | H2 `AI Brand Kit Generator FAQ` | 覆盖长尾 | free、from logo、best tools、commercial use、exports。 | pending | 关键词 58 到 61 | FAQ | `/lovart-pricing` | 至少 5 问。 |

### 10. lovart ai image generator

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | Lovart 官方首页 | `https://www.lovart.ai/` | Lovart 官方 | AI design agent 官方页 | used | 证明官方能力方向。 |
| 搜索摘要 | Adobe Firefly AI Graphic Design Generator | `https://www.adobe.com/products/firefly/features/ai-graphic-design-generator.html` | Adobe | 高权重工具页 | used | 泛类目竞争参考。 |
| 搜索摘要 | Canva AI Logo and Magic Design pages | `https://www.canva.com/magic-design/` | Canva | 高权重工具页 | used | 竞争参考。 |
| 搜索摘要 | Leonardo AI Graphic Design | `https://leonardo.ai/ai-graphic-design` | Leonardo | 工具页 | used | 竞争参考。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-ai-image-generator` |
| action | refresh_existing |
| navigation_group | Tools（工具） |
| navigation_slot | dropdown |
| parent_page | none |
| breadcrumb | Home > Tools > Lovart AI Image Generator |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 工具页已有，作为支撑页即可。 |
| do_not_place | 不放 P0，不把资源从 API 和 Prompt 页挪走。 |

#### 页面写作约束

* primary_keyword: `lovart ai image generator`
* secondary_keywords: `ai design generator free online`、`ai logo generator with prompt`、`ai brand kit generator`
* title: `Lovart AI Image Generator: Design Assets From Prompts`
* H1: `Lovart AI Image Generator for Brand Assets, Product Visuals, and Campaigns`
* target_word_count: 800 到 1100 英文词
* forbidden_claims: 不得声称免费无限生成，不得把 Lovart 写成只做图片的传统 image generator（图片生成器）。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 差异化定位 | 写“image generation is one part of Lovart design workflow”。 | verified | 官方 docs | Hero + use cases | `/lovart-ai-agent` | 不把页面写成泛图像站。 |
| 2 | what | H2 `What You Can Create` | 列能力 | product shots、social posts、brand assets、video ad inputs。 | verified/pending | 官方 docs | Cards | `/lovart-brand-kit` | 至少 6 个 use cases。 |
| 3 | prompt | H2 `Prompts That Work Better` | 内链 prompt 页 | 给 5 个短 prompt 模板。 | pending | prompt guide | Prompt cards | `/lovart-prompt-guide` | 不是空泛教程。 |
| 4 | compare | H2 `AI Image Generator vs AI Design Agent` | 承接类目差异 | 解释单图生成和多资产工作流差异。 | verified/reported | 官方 docs、类目 SERP | 对比表 | `/lovart-ai-agent` | 有明确差异表。 |
| 5 | FAQ | H2 `Lovart AI Image Generator FAQ` | 覆盖追问 | free、commercial use、logo、brand kit、image to image、exports。 | pending | 关键词 18、54、55 | FAQ | `/lovart-free` | 至少 5 问。 |

### 11. ai design agent

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 官方页面 | How Lovart Works | `https://www.lovart.ai/docs/getting-started/how-lovart-works` | Lovart 官方 | 定义页 | used | 可验证 Lovart 的官方定位。 |
| 搜索摘要 | What Is an AI Design Agent | `https://img.ly/blog/what-is-a-design-agent/` | IMG.LY | 定义文章 | used | 类目定义参考。 |
| 搜索摘要 | Design AI Agents | `https://www.taskade.com/agents/design` | Taskade | Agent 目录 | used | 类目竞争参考。 |
| 搜索摘要 | Testing the World's First AI Design Agent | `https://www.youtube.com/watch?v=714vC3pmGew` | YouTube | 视频评测 | youtube_embed | 视觉辅助。 |
| 搜索摘要 | Lovart AI Review | `https://www.youtube.com/watch?v=5xA1tuUP6Sk` | YouTube | 视频评测 | youtube_embed | 视觉辅助。 |

#### YouTube 嵌入要求

| 标题 | 原始 URL | 嵌入 URL | 必须嵌入位置 | 证据限制 |
|---|---|---|---|---|
| Testing the World's First AI Design Agent | `https://www.youtube.com/watch?v=714vC3pmGew` | `https://www.youtube-nocookie.com/embed/714vC3pmGew` | `Video walkthroughs` 区块 | 视频不证明官方功能状态。 |
| Lovart AI Review | `https://www.youtube.com/watch?v=5xA1tuUP6Sk` | `https://www.youtube-nocookie.com/embed/5xA1tuUP6Sk` | `Video walkthroughs` 区块 | 视频为观点和演示。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-ai-agent` |
| action | refresh_existing |
| navigation_group | Guides（指南） |
| navigation_slot | footer 或 Learn dropdown |
| parent_page | none |
| breadcrumb | Home > Guides > Lovart AI Agent |
| add_to_main_nav | false |
| add_to_footer | true |
| add_to_sitemap | true |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 核心类目词竞争高，应做长期定义页，不抢主导航。 |
| do_not_place | 不放 Developer，不写成 API 页面。 |

#### 页面写作约束

* primary_keyword: `ai design agent`
* secondary_keywords: `ai design agent free`、`ai design agent lovart`、`what is an AI design agent`、`AI design agent vs image generator`
* title: `What Is an AI Design Agent? Lovart Workflow Guide`
* H1: `What Is an AI Design Agent? How Lovart Differs From Image Generators`
* target_word_count: 1100 到 1500 英文词
* forbidden_claims: 不得声称 Lovart 是唯一 AI design agent，不得过度承诺替代专业设计师。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero | H1 | 抢定义意图 | 定义 AI design agent（AI 设计代理）和 image generator（图片生成器）的区别。 | verified/reported | 官方 docs、IMG.LY | Definition box | `/lovart-ai-image-generator` | 首屏有一句清晰定义。 |
| 2 | what | H2 `What an AI Design Agent Does` | 展开定义 | brief、model routing、asset generation、editing、export。 | verified | Lovart docs | Workflow diagram | `/lovart-design-features` | 每步有解释。 |
| 3 | compare | H2 `AI Design Agent vs Image Generator` | 支撑长尾 | 单图输出 vs 多资产工作流、编辑控制、品牌一致性。 | Judgment/verified | 官方 docs | 对比表 | `/lovart-ai-image-generator` | 表格不少于 5 行。 |
| 4 | youtube_embed | H2 `Video Walkthroughs` | 满足视频需求 | 嵌入 2 个视频，并标注证据限制。 | youtube_embed | YouTube | iframe grid | 无 | 两个 iframe 任务清楚。 |
| 5 | FAQ | H2 `AI Design Agent FAQ` | 覆盖泛类目 | free、Lovart、GitHub、design system、image generator 区别。 | pending | 关键词 51 到 53 | FAQ | `/lovart-free` | 至少 5 问。 |

### 12. ai design generator free online

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | Figma AI Design Generator | `https://www.figma.com/solutions/ai-design-generator/` | Figma | 高权重工具页 | used | 竞争强度证据。 |
| 搜索摘要 | Canva Magic Design | `https://www.canva.com/magic-design/` | Canva | 高权重工具页 | used | 竞争强度证据。 |
| 搜索摘要 | Adobe Firefly AI Graphic Design Generator | `https://www.adobe.com/products/firefly/features/ai-graphic-design-generator.html` | Adobe | 高权重工具页 | used | 竞争强度证据。 |
| 搜索摘要 | Manus AI Design Generator | `https://manus.im/tools/ai-design` | Manus | Agent 工具页 | used | 类目结构参考。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-ai-image-generator#ai-design-generator-free-online` |
| action | merge_into_existing |
| navigation_group | Tools（工具） |
| navigation_slot | internal_links_only |
| parent_page | `/lovart-ai-image-generator` |
| breadcrumb | Home > Tools > Lovart AI Image Generator > AI Design Generator Free Online |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | false |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 泛词竞争过高，不应短期独立主攻。 |
| do_not_place | 不单独开 `/ai-design-generator-free-online`，不争 Canva、Adobe、Figma 正面大词。 |

#### 页面写作约束

* primary_keyword: `ai design generator free online`
* secondary_keywords: `ai design generator free`、`lovart ai image generator`、`ai design agent`
* section_title: `AI Design Generator Free Online: Where Lovart Fits`
* target_word_count: 400 到 600 英文词作为现有页章节
* forbidden_claims: 不得写 Lovart 是最好的免费在线 AI design generator，不得承诺无需登录或无限免费。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | section | H2 `AI Design Generator Free Online` | 合并承接泛词 | 说明泛工具市场由 Canva、Figma、Adobe 等高权重页占据，Lovart 应强调 agent workflow（代理式工作流）。 | reported/Judgment | SERP | Short comparison | `/lovart-ai-agent` | 章节不超过页面主意图。 |
| 2 | compare | H3 `Free Tool vs Design Agent` | 差异化 | free online tool 更适合快速试图，Lovart 更适合多资产品牌工作流。 | Judgment | 官方 docs | 对比表 | `/lovart-free` | 不夸大免费。 |
| 3 | FAQ | H3 `Free Online AI Design FAQ` | 覆盖追问 | 是否免费、是否需要账号、是否适合 logo、是否能导出。 | pending | 关键词 54 到 55 | FAQ mini | `/lovart-pricing` | 至少 4 问。 |

### 13. ai logo generator free no sign up

#### 第一页来源

| 排名信号 | 标题或页面 | URL | 发布方 | 页面类型 | 访问状态 | 页面处理 |
|---|---|---|---|---|---|---|
| 搜索摘要 | Template.net AI Logo Generator | `https://www.template.net/ai-logo-generator` | Template.net | 工具页 | used | 竞争强度和 no signup 结构参考。 |
| 搜索摘要 | Gradually AI Logo Generator | `https://www.gradually.ai/en/ai-logo-generator/` | Gradually AI | 工具页 | used | 结构参考。 |
| 搜索摘要 | Logopony | `https://www.logopony.com/` | Logopony | 工具页 | used | 竞争参考。 |
| 搜索摘要 | Canva AI Logo Generator | `https://www.canva.com/ai-logo-generator/` | Canva | 高权重工具页 | used | 竞争参考。 |

#### 本站执行决策

| 字段 | 裁决 |
|---|---|
| route | `/lovart-logo#ai-logo-generator-free-no-sign-up` |
| action | merge_into_existing |
| navigation_group | Tools（工具） |
| navigation_slot | internal_links_only |
| parent_page | `/lovart-logo` |
| breadcrumb | Home > Tools > Lovart Logo > AI Logo Generator Free No Sign Up |
| add_to_main_nav | false |
| add_to_footer | false |
| add_to_sitemap | false |
| add_to_related_guides | true |
| nav_change_required | false |
| reason | 泛 logo 工具词竞争高，作为 Logo 页章节承接更稳。 |
| do_not_place | 不单独开泛 logo 工具页，不写“no sign up”除非执行时实测确认。 |

#### 页面写作约束

* primary_keyword: `ai logo generator free no sign up`
* secondary_keywords: `ai logo generator with prompt`、`how to make logo with ai free`、`lovart logo`
* section_title: `AI Logo Generator Free No Sign Up: What To Verify First`
* target_word_count: 500 到 700 英文词作为现有页章节
* forbidden_claims: 不得承诺 Lovart logo 可无注册、永久免费、可商标注册或无限导出。

#### 页面内容颗粒度执行包

| 顺序 | 区块类型 | 标题级别与标题 | 写作目的 | 必须写什么 | 证据标签 | 来源输入 | UI/组件建议 | 内链 | 验收标准 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | section | H2 `AI Logo Generator Free No Sign Up` | 承接泛词 | 说明用户真正关心：是否注册、是否可下载、是否可商用、是否有水印。 | pending | SERP 工具页 | Checklist | `/lovart-free` | 四个核验问题完整。 |
| 2 | prompt | H3 `Logo Prompts That Work Better` | 连接 Lovart 价值 | 给 5 个 logo prompt 模板，含 no text、style、color、industry。 | pending | prompt guide | Prompt cards | `/lovart-prompt-guide` | 每个模板可复制。 |
| 3 | trust | H3 `Commercial Use and Trademark Caution` | 防止法律误导 | 写 AI logo 商用和商标需看官方条款与法律意见。 | pending | 通用风险 | Warning box | `/terms-of-service` | 不提供法律承诺。 |

## 完整关键词覆盖表

| # | 关键词 | 页面动作 | 目标路由或处理 | 证据等级 | 执行说明 |
|---|---|---|---|---|---|
| 1 | lovart | merge_into_existing | `/what-is-lovart` | verified | 不抢官方首页词，用解释页承接。 |
| 2 | lovart ai | merge_into_existing | `/what-is-lovart`、`/lovart-ai-agent` | verified | 作为品牌解释与 AI agent 入口。 |
| 3 | lovart login | refresh_existing | `/lovart-login-guide` | verified/pending | 只给官方登录核验路径。 |
| 4 | lovart api | refresh_existing | `/lovart-api` | verified/pending | Developer hub 入口。 |
| 5 | lovart pricing | refresh_existing | `/lovart-pricing` | verified/pending | 价格必须加 last verified。 |
| 6 | lovart skills | merge_into_existing | `/lovart-ai-agent` | verified | 官方 docs 提到 Skills（技能）概念，可做章节。 |
| 7 | lovart app | merge_into_existing | `/lovart-tutorial` | pending | 解释 web app（网页应用）优先，不引导下载。 |
| 8 | lovart logo | refresh_existing | `/lovart-logo` | pending | 连接 prompt 与 brand kit。 |
| 9 | lovart discord | do_not_create | 无，放入 FAQ 观察 | pending | 无官方证据前不做社区入口页。 |
| 10 | lovart wiki | merge_into_existing | `/what-is-lovart` | pending | 做解释型入口，不开薄 wiki。 |
| 11 | lovart ai free | refresh_existing | `/lovart-free` | pending | 高风险免费词，必须分 confirmed 和 not confirmed。 |
| 12 | lovart ai login | merge_into_existing | `/lovart-login-guide` | verified/pending | 与 login 页合并。 |
| 13 | lovart ai pricing | merge_into_existing | `/lovart-pricing` | verified/pending | 与 pricing 页合并。 |
| 14 | lovart ai app | merge_into_existing | `/lovart-tutorial` | pending | 说明官方 web 入口，避免 APK 诱导。 |
| 15 | lovart ai apk | refresh_existing | `/lovart-apk` | unsafe/pending | 只做安全警示与官方入口。 |
| 16 | lovart ai mod apk | do_not_create | `/lovart-apk#mod-apk-warning` | unsafe | 不提供下载，只做风险说明。 |
| 17 | lovart ai review | refresh_existing | `/lovart-review` | reported | 加方法论和证据表。 |
| 18 | lovart ai image generator | refresh_existing | `/lovart-ai-image-generator` | verified/pending | 作为 Tools 支撑页。 |
| 19 | lovart alternative | refresh_existing | `/lovart-alternative` | reported | 比较页核心入口。 |
| 20 | lovart alternative reddit | merge_into_existing | `/lovart-alternative#reddit` | pending | 不伪造 Reddit 共识。 |
| 21 | alternative lovart ai | merge_into_existing | `/lovart-alternative` | reported | 同义词。 |
| 22 | lovart ai alternative free | merge_into_existing | `/lovart-alternative#free-alternatives` | pending | Top 3 子章节。 |
| 23 | lovart ai alternative reddit | merge_into_existing | `/lovart-alternative#reddit` | pending | FAQ 承接。 |
| 24 | lovart open source alternative | merge_into_existing | `/lovart-alternative#open-source` | disputed | 不确认同等开源替代。 |
| 25 | lovart vs canva | split_page | `/lovart-vs-canva` | reported | 从 alternative 页拆独立页。 |
| 26 | lovart ai vs canva | merge_into_existing | `/lovart-vs-canva` | reported | 同义词。 |
| 27 | lovart vs midjourney | refresh_existing | `/lovart-vs-midjourney` | reported | 已有页面，P2 刷新。 |
| 28 | lovart vs recraft | backlog_new_page | `/lovart-vs-recraft` | pending | 等 vs-canva 和 alternative 稳定后再做。 |
| 29 | lovart vs openart | backlog_new_page | `/lovart-vs-openart` | pending | 先放 alternative 对比表。 |
| 30 | lovart vs freepik | backlog_new_page | `/lovart-vs-freepik` | pending | 先放 alternative 对比表。 |
| 31 | lovart vs higgsfield | backlog_new_page | `/lovart-vs-higgsfield` | pending | 先放 alternative 对比表。 |
| 32 | lovart prompt | merge_into_existing | `/lovart-prompt-guide` | pending | Prompt hub。 |
| 33 | lovart prompt library | new_page | `/lovart-prompt-library` | pending | P1 新建。 |
| 34 | lovart prompt generator | new_page | `/lovart-prompt-generator` | pending | P1 轻工具。 |
| 35 | lovart prompt guide | refresh_existing | `/lovart-prompt-guide` | verified/pending | Top 2。 |
| 36 | lovart prompt github | merge_into_existing | `/lovart-prompt-guide#github-resources` | pending | 只列公开资源核验方法。 |
| 37 | lovart agent prompt | merge_into_existing | `/lovart-prompt-guide#agent-prompts` | pending | 解释 agent brief，而非内部 prompt。 |
| 38 | lovart system prompt | do_not_create | `/lovart-prompt-guide#not-system-prompts` | unsafe | 不做泄露型内容。 |
| 39 | how to use lovart | refresh_existing | `/lovart-tutorial` | verified/pending | 教程主入口。 |
| 40 | how to use lovart ai | merge_into_existing | `/lovart-tutorial` | verified/pending | 同义词。 |
| 41 | how to use lovart ai for free | merge_into_existing | `/lovart-free#how-to-try` | pending | 免费试用步骤。 |
| 42 | what is lovart ai | refresh_existing | `/what-is-lovart` | verified | 定义页。 |
| 43 | what is lovart ai used for | merge_into_existing | `/what-is-lovart#use-cases` | verified | 用途章节。 |
| 44 | what does lovart ai do | merge_into_existing | `/what-is-lovart#what-it-does` | verified | FAQ 承接。 |
| 45 | is lovart ai free | merge_into_existing | `/lovart-free` | pending | FAQ。 |
| 46 | lovart ai is free or paid | merge_into_existing | `/lovart-free#free-vs-paid` | pending | Free 与 Pricing 联动。 |
| 47 | lovart api key | refresh_existing | `/lovart-api-key` | pending | Developer 子页。 |
| 48 | lovart api documentation | refresh_existing | `/lovart-api-documentation` | verified/pending | Top 1。 |
| 49 | lovart ai api key | merge_into_existing | `/lovart-api-key` | pending | 同义词。 |
| 50 | lovart api pricing | refresh_existing | `/lovart-api-pricing` | pending | Developer 子页。 |
| 51 | ai design agent | refresh_existing | `/lovart-ai-agent` | verified/reported | 长期定义页。 |
| 52 | ai design agent free | merge_into_existing | `/lovart-ai-agent#free-options` | pending | 不单独开页。 |
| 53 | ai design agent lovart | merge_into_existing | `/lovart-ai-agent` | verified | 品牌类目词。 |
| 54 | ai design generator free | merge_into_existing | `/lovart-ai-image-generator` | pending | 泛词，合并。 |
| 55 | ai design generator free online | merge_into_existing | `/lovart-ai-image-generator#ai-design-generator-free-online` | pending | 不主攻。 |
| 56 | ai logo generator free no sign up | merge_into_existing | `/lovart-logo#ai-logo-generator-free-no-sign-up` | pending | 不承诺 no sign up。 |
| 57 | ai logo generator with prompt | merge_into_existing | `/lovart-logo#logo-prompts` | pending | prompt 模板承接。 |
| 58 | ai brand kit generator | refresh_existing | `/lovart-brand-kit` | reported | Tools 页。 |
| 59 | ai brand kit generator free | refresh_existing | `/lovart-brand-kit#free-brand-kit-generator` | pending | P2。 |
| 60 | ai brand kit generator from logo | merge_into_existing | `/lovart-brand-kit#from-logo` | pending | 从 logo 到 brand kit 章节。 |
| 61 | best ai brand kit generator | merge_into_existing | `/lovart-brand-kit#best-ai-brand-kit-generators` | reported | 比较表。 |
| 62 | how to make logo with ai free | merge_into_existing | `/lovart-logo#make-logo-with-ai-free` | pending | 教程章节。 |

## 导航与信息架构计划

| 导航分组 | 页面 | navigation_slot | parent_page | breadcrumb | 是否新增导航 | 原因 |
|---|---|---|---|---|---|---|
| Developer（开发者） | `/lovart-api-documentation` | hub_child | `/lovart-ai-code` | Home > Developer > Lovart API Documentation | 否 | 已有 API 和 AI Code 入口。 |
| Prompts（提示词） | `/lovart-prompt-guide` | dropdown 或 footer | none | Home > Prompts > Lovart Prompt Guide | 否 | 已有 footer 入口，Learn 可承接。 |
| Prompts（提示词） | `/lovart-prompt-library` | hub_child | `/lovart-prompt-guide` | Home > Prompts > Lovart Prompt Guide > Lovart Prompt Library | 否 | 子页，不进主导航。 |
| Prompts（提示词） | `/lovart-prompt-generator` | hub_child | `/lovart-prompt-guide` | Home > Prompts > Lovart Prompt Guide > Lovart Prompt Generator | 否 | 轻工具，先靠内链。 |
| Comparisons（对比） | `/lovart-alternative` | footer | none | Home > Comparisons > Lovart Alternatives | 否 | 已有 footer。 |
| Comparisons（对比） | `/lovart-vs-canva` | hub_child | `/lovart-alternative` | Home > Comparisons > Lovart Alternatives > Lovart vs Canva | 否 | 从 alternative 拆页，但不进主导航。 |
| Pricing/Access（价格与访问） | `/lovart-free` | main_nav | none | Home > Pricing and Access > Lovart Free | 否 | Header 已有 Free。 |
| Tools（工具） | `/lovart-brand-kit` | dropdown | none | Home > Tools > Lovart Brand Kit | 否 | 已有 Tools 与 footer。 |
| Tools（工具） | `/lovart-ai-image-generator` | dropdown | none | Home > Tools > Lovart AI Image Generator | 否 | 已有工具页。 |
| Guides（指南） | `/lovart-ai-agent` | footer 或 Learn dropdown | none | Home > Guides > Lovart AI Agent | 否 | 作为长期定义页。 |
| Tools（工具） | `/lovart-logo` | dropdown 或 footer | none | Home > Tools > Lovart Logo | 否 | 泛 logo 长尾合并到现有页。 |

## 页面执行队列

| 优先级 | 关键词 | 动作 | 路由 | 工作摘要 | 发布前必须证据 |
|---|---|---|---|---|---|
| P0 | lovart api documentation | refresh_existing | `/lovart-api-documentation` | 加状态标签、官方入口、未确认清单、API key/pricing 内链。 | 官方 API access 页、官方 docs、当前 pricing 核验。 |
| P0 | lovart prompt guide | refresh_existing | `/lovart-prompt-guide` | 增加 30 个模板、prompt anatomy、视频嵌入、system prompt 安全 FAQ。 | 官方 prompt 文章、YouTube 只作视觉辅助。 |
| P1 | lovart prompt library | new_page | `/lovart-prompt-library` | 建 50 个可复制模板库，挂在 prompt guide 下。 | 确认不存在重复模板页。 |
| P1 | lovart prompt generator | new_page | `/lovart-prompt-generator` | 轻工具页，字段组合 prompt，不调用 API。 | 明确非官方、非 API 集成。 |
| P1 | lovart alternative | refresh_existing | `/lovart-alternative` | 改成按 workflow 选择，加入 free、Reddit、open source 风险。 | 竞品列表来源和更新时间。 |
| P1 | lovart vs canva | split_page | `/lovart-vs-canva` | 从 alternative 锚点拆独立页，按场景比较。 | Canva 官方页、Lovart 官方 docs。 |
| P1 | lovart ai free | refresh_existing | `/lovart-free` | 加 free status 表、登录核验、官方入口、APK 风险。 | 官方当前页面截图或人工核验记录。 |
| P2 | ai brand kit generator free | refresh_existing | `/lovart-brand-kit` | 增加 free limits、from-logo、best tools 对比。 | 竞品页面和官方 Lovart 能力。 |
| P2 | lovart ai image generator | refresh_existing | `/lovart-ai-image-generator` | 强调 design agent workflow，不硬抢泛图像词。 | 官方 docs。 |
| P2 | ai design agent | refresh_existing | `/lovart-ai-agent` | 做定义页：AI design agent vs image generator。 | 官方 docs、类目定义来源。 |
| P3 | ai design generator free online | merge_into_existing | `/lovart-ai-image-generator` | 只做章节。 | 无需新建页。 |
| P3 | ai logo generator free no sign up | merge_into_existing | `/lovart-logo` | 只做章节，先核验 no sign up。 | 执行时实测或写 pending。 |

## 验证计划

| 检查项 | 方法 | 发布前是否必须 |
|---|---|---|
| 关键词覆盖 | 对照本文件 62 行完整关键词覆盖表，确认每个词有 action 和 route。 | 是 |
| 重复意图 | 检查新增路由是否与已有 `src/templates/*.ejs` 冲突。 | 是 |
| 官方身份声明 | 每个 API、pricing、free、APK、alternative 页面首屏或页尾必须有独立站声明。 | 是 |
| 证据标签 | API、free、pricing、APK、system prompt 所有事实必须带 `verified/pending/unsafe`。 | 是 |
| YouTube 嵌入 | 出现 YouTube 的页面必须有 `youtube-nocookie.com/embed/...` 任务和 fallback link。 | 是 |
| Sitemap（站点地图） | 新建 `/lovart-prompt-library`、`/lovart-prompt-generator`、`/lovart-vs-canva` 时加入 sitemap 生成链。 | 是，等代码执行时 |
| 内链 | 每个 P0/P1 页面至少 4 个内链：父页、同簇页、转化页、信任页。 | 是 |
| 禁写声明 | 不出现 fake API endpoint、mod APK download、hidden system prompt、guaranteed free。 | 是 |
| 构建验证 | 后续代码执行时跑 `npm run build`。 | 是，等代码执行时 |

## 最终裁决

* Verifiable（可验证）: 仓库已有大量相关页面，尤其是 Developer、Prompt、Alternative、Free、Brand Kit、Logo、AI Agent 路由；官方 Lovart docs 将 Lovart 定位为 AI design agent（AI 设计代理）；官方站存在 API access 相关页面；报告明确 Google HTML 被 429 拦截。
* Judgment（判断）: 当前最优策略不是批量新增，而是 P0 深刷、P1 少量补缺口、P2 合并承接、P3 放弃正面硬抢泛词。
* Confidence != Correctness（自信不等于正确）: 没有 GSC（Google Search Console，谷歌搜索控制台）最新 query 数据和真实搜索量，不能把“低竞争”直接等同于“会带来流量”。
* 即使经过分析，我认为你在以下方面依然错误：[1] 如果你期待这份关键词报告直接变成 62 个新页面，会把站点做薄；[2] 如果继续把 `lovart.info` 写得像官方产品站，会损害信任；[3] 如果用 `ai design generator free online` 这类泛词当短期主攻，会被 Canva、Adobe、Figma 等高权重页面压制；[4] 如果 API、free、APK、system prompt 不做证据分层，SEO 流量反而会变成信任负债。

