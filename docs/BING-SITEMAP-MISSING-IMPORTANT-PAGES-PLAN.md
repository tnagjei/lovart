# Bing 高优先级问题修复计划：站点地图中缺少重要页面

> 创建日期：2026-02-13  
> 来源：Bing Webmaster Tools Recommendation（高严重性）  
> 问题标题：网站地图中缺少重要页面

---

## 1. 问题概述

Bing 后台显示该问题为高严重性，当前示例 URL 共 6 条，核心表现是：
- Bing 已发现这些页面可访问并可抓取；
- 但 Bing 认为它们未被 sitemap 充分覆盖。

截图中的示例 URL：
- `https://lovart.info/zh/help`
- `https://lovart.info/zh/lovart-api`
- `https://lovart.info/ja/about`
- `https://lovart.info/fr/lovart-free`
- `https://lovart.info/ja/lovart-free`
- `https://lovart.info/zh/blog`

---

## 2. 现状核验结论（基于当前仓库与线上）

## 2.1 线上 URL 状态
上述 6 个 URL 当前都返回 `200`，且 canonical 指向无后缀 URL（如 `/zh/help`）。

## 2.2 站点地图现状
`public/sitemap.xml` 已采用无后缀 URL，但存在两类覆盖问题：

1. 大部分多语言页面只作为 `xhtml:link hreflang` 出现，未作为独立 `<loc>` 出现。  
2. 部分页（如 `lovart-api`、`lovart-free`、`lovart-ai-code`）缺少完整多语言 hreflang 集群。

这与 Bing 的“缺少重要页面”告警高度一致。

---

## 3. 红线约束（SEO 稳定优先）

本计划仅处理“索引与发现信号”，不触碰内容层：

1. 不修改 TDH 文案（title/description/keywords 文本不变）
2. 不修改 H1/H2/H3 与正文内容
3. 不修改页面布局与业务模块
4. 仅调整 sitemap/hreflang/提交与验证流程

---

## 4. 修复策略（不写代码版）

## 4.1 Sitemap 覆盖策略升级（核心）
目标：让 Bing 能在 sitemap 中直接找到所有重要页面，而不是只通过 hreflang 侧链发现。

执行要求：
1. 每个可索引语言页面都作为独立 `<url><loc>` 出现（不只放英文主页面）。
2. 每个 `<url>` 都带完整 hreflang 集群（`en/zh/fr/ja/x-default`）。
3. sitemap 内不出现会跳转的 URL（只放最终 `200` 规范 URL）。
4. `lastmod` 随发布更新，保证 Bing 看到“新鲜度”信号。

建议覆盖范围：
- 11 个模板页面 × 4 语言版本 = 44 个规范 URL（含首页多语言）。

## 4.2 专项补齐（针对当前告警）
先优先补齐 Bing 已点名的 6 个 URL，确保它们在 sitemap 中均为独立 `<loc>`。  
随后一次性补齐剩余语言页面，避免同类告警重复出现。

## 4.3 提交与加速发现
1. 在 Bing Webmaster 重新提交 sitemap。  
2. 使用 IndexNow 提交本次新增/补齐的 URL 批次。  
3. 对重点页面在 Bing URL Inspection 发起请求抓取（抽样即可）。

## 4.4 观测窗口
按 Bing 抓取节奏，通常需要 3-14 天观察收敛。  
建议连续观察 2-4 周，看该 Recommendation 是否从高优先级下降或关闭。

---

## 5. 验证与验收标准

## 5.1 发布前验证
1. sitemap 中可以直接检索到 6 个问题 URL 的 `<loc>`。
2. 每个问题 URL 的 `<loc>` 对应页面返回 `200`（非跳转）。
3. 每个问题 URL 对应的 hreflang 集群完整。

## 5.2 发布后验证
1. Bing Recommendation 中“缺失重要页面”数量下降。  
2. 抽样 URL 在 Bing URL 检查中由“已发现未覆盖”转向“已在 sitemap 中发现”。  
3. 无新增“冲突 canonical/hreflang”类问题。

---

## 6. 风险与控制

1. 风险：只修 6 条而未全量补齐，后续会出现新一批同类 URL。  
控制：一次性全量覆盖全部语言页。

2. 风险：sitemap 放入跳转 URL，导致 Bing 继续降权处理。  
控制：仅保留最终 `200` 的规范 URL。

3. 风险：修复过程中误动内容层影响排名。  
控制：发布前做 diff 审核，只允许 sitemap/提交配置类变更。

---

## 7. 执行顺序建议

1. 先完成 sitemap 覆盖模型（全量语言 `<loc>` + 完整 hreflang）
2. 再提交 Bing sitemap + IndexNow 批量通知
3. 最后做 2-4 周监控与复盘

该顺序对现有排名最稳，不需要改动 TDH/H1/正文即可执行。
