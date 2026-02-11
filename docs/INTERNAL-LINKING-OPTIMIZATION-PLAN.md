# Lovart 全站内链网状化优化方案

> **状态**：待执行  
> **目标**：解决目前各内页“孤岛化”问题，通过在关键转化点和页尾建立“语义化交叉内链”，提升全站权重的流动效率，降低跳出率，并加快搜索引擎对深层页面的抓取频率。

---

## 1. 现状原则

目前的内页（API, Pricing, Free, Features, AI Code）之间几乎没有互相指向的链接，用户进入一个内页后往往只能通过顶部导航离开。这不利于 SEO 权重（Link Juice）的传递。

我们的优化原则是：**在不破坏用户体验的前提下，建立合理的流量漏斗和权重闭环。**

---

## 2. 优化方案：五大核心页面的交叉链接策略

我们将通过 **“正文上下文链接”** 和 **“页尾相关资源模块”** 两种方式来实现。

### 2.1 `lovart-api.html` (流量入口页)
- **新增内链**：
  - 在“访问模型”描述中：指向 `lovart-ai-code.html`（了解技术细节）。
  - 在“获取 Key”描述中：指向 `lovart-pricing.html`（查看订阅套餐）。
  - 在页尾：增加指向 `lovart-free.html` 的“开始免费体验”卡片。
- **SEO 意图**：将 API 页的高权重分流给变现价值更高的 Pricing 和 Free 页。

### 2.2 `lovart-pricing.html` (核心转化页)
- **新增内链**：
  - 在功能对比表末尾：指向 `lovart-design-features.html`（查看完整功能清单）。
  - 在 FAQ 中：指向 `lovart-api.html`（关于 API 接入的疑问）。
  - 在页尾或侧边：指向 `lovart-free.html`（还在犹豫？先试试免费版）。

### 2.3 `lovart-free.html` (用户培育页)
- **新增内链**：
  - 在 Comparison Table 下方：指向 `lovart-pricing.html`（升级以解锁更多额度）。
  - 在“如何使用”步骤中：指向 `lovart-design-features.html`（探索高级设计工具）。
- **SEO 意图**：建立从免费到付费的自然转化路径。

### 2.4 `lovart-ai-code.html` & `lovart-design-features.html` (功能介绍页)
- **新增内链**：
  - 在技术解析部分：指向 `lovart-api.html`（为开发者提供的集成支持）。
  - 在 CTA 区域：除了 Pricing，增加指向 `lovart-free.html` 的链接。

---

## 3. 技术实现方式

### 3.1 统一的“相关资源”组件 (Relevant Resources Component)
在页面的底部（Footer 之上），统一添加一个三栏或四栏的横向网格：
- **API Guide** | **Pricing Plans** | **Free Trial** | **Design Features**

### 3.2 语义化文本锚点 (Semantic Inline Links)
在 locale JSON 文件中，将原本平铺的文字改为带有 HTML 链接的占位符或直接插入链接：
- **示例**：`"pricing_desc": "Choose from our [flexible plans](<%= link('pricing.html') %>) to get more credits."`

---

## 4. 保排名与安全规范

- **使用 `link()` Helper**：所有链接必须通过 `build.js` 提供的 `link()` 函数生成，确保在 `/zh/`, `/fr/` 等目录下依然指向对应语言的页面。
- **精准锚文本**：使用“Lovart AI Pricing”、“API Access”、“Free Design Tool”等含有核心词的短语作为链接文字，增强语义关联。
- **No-Follow 策略（可选）**：对于非核心、纯功能性的链接，保持默认；对于核心 SEO 页面，确保不带 nofollow，让权重顺畅流动。

---

## 5. 预期结果

1. **搜索引擎抓取**：爬虫能通过任意一个内页发现并抓取全站所有页面。
2. **权重传递**：API 页面的高流量产生的权重将有效带动其他页面的排名。
3. **用户体验**：降低用户返回首页寻找相关入口的成本。
