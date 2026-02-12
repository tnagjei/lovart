# Lovart 全站内链网状化优化方案 (修订版 v2)

> **状态**：待执行  
> **目标**：通过在全站各内页新增“语义化交叉内链”板块，解决目前页面“孤岛化”问题，提升全站权重的流动效率，降低跳出率，并加快搜索引擎对深层页面的抓取频率。

---

## 1. 现状原则

目前 API 页面已通过新增的 `related` 板块建立了向其他页面的指向。而 Pricing, Free, Features, AI Code 页面之间仍然缺乏互相指向的链接。

我们的优化原则依然是：**在不破坏用户体验的前提下，建立合理的流量漏斗和权重闭环。**
核心约束：**零删除、零替换、纯增量**。不改动页面现有正文和元数据。

---

## 2. 优化方案：四页交叉链接策略

我们将统一采用 **“页尾相关资源模块” (Related Resources Section)** 的方式来实现，避开风险较高的正文内嵌链接。

### 2.1 `lovart-api.html` (已完成)
- **状态**：已在上一轮内容优化中完成。
- **现状**：已包含指向 Pricing, Free, Design Features, AI Code 的内链。本次不作改动。

### 2.2 `lovart-pricing.html` (核心转化页)
- **新增模块**：在现有页尾之上，新增 `related` 板块。
- **链接指向**：
  - `lovart-design-features.html` (功能详情)
  - `lovart-free.html` (免费试用)
  - `lovart-api.html` (API 文档)
- **SEO 意图**：增加转化深度，防止用户在对比价格后流失。

### 2.3 `lovart-free.html` (用户培育页)
- **新增模块**：在现有页尾之上，新增 `related` 板块。
- **链接指向**：
  - `lovart-pricing.html` (订阅套餐)
  - `lovart-design-features.html` (查看功能)
  - `lovart-api.html` (开发者接口)
- **SEO 意图**：引导用户从免费版向付费版和 API 场景流出。

### 2.4 `lovart-ai-code.html` & `lovart-design-features.html` (功能详情页)
- **新增模块**：新增 `related` 板块。
- **链接指向**：
  - `lovart-api.html` (API 集成)
  - `lovart-pricing.html` (查看价格)
  - `lovart-free.html` (立即开始)
- **SEO 意图**：将功能展示的流量导入 API 场景或订阅转化。

---

## 3. 技术实现方式

### 3.1 统一的“相关资源”组件 (Relevant Resources Component)
参考 API 页面的成熟样式，为每个页面配置差异化的相关链接：
- 设置独立的语言包 key (e.g., `t.lovart_pricing_page.related`)。
- 确保每个链接模块包含：标题、描述文字、精准锚文本。

### 3.2 技术选型：纯增量 Section
- **不使用原文内嵌链接**：避开对正文 JSON 文案的 HTML 注入，保持 locale 纯净且无风险。
- **模板位置**：统一放在现有模板的最后一个业务 `<section>` 之后，`<footer>` 之前。

---

## 4. 保排名与安全规范

- **使用 `link()` Helper**：所有链接必须通过 `build.js` 提供的 `link()` 函数生成，确保语言前缀正确。
- **精准锚文本**：使用“Lovart AI Pricing”、“API Documentation”、“Free Trial”等含有核心词的短语作为链接文字。
- **关键词提及**：每个板块的描述中适当出现一次目标核心词，但不堆砌。

---

## 5. 预期结果

1. **搜索引擎抓取环路**：爬虫能通过任意一个内页发现并抓取全站所有页面，彻底消除孤岛。
2. **权重平衡**：API 页面带来的权重将更顺畅地流动到 Pricing 等高转化页面。
3. **零风险上线**：由于是纯增量板块，不触碰任何历史 SEO 核心元素。
