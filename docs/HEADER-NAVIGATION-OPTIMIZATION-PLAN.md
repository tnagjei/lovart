# Header 导航结构优化方案

> **状态**：待执行  
> **目标**：将 `lovart-api.html`（第一流量页）和 `lovart-free.html`（高转化潜力页）整合进全局 Header 导航，以提升其内链权重和用户触达率。

---

## 1. 现状原则

目前的 Header 导航包含：Home, Features, Pricing, Blog, Help, About。
由于 API 页面目前贡献了全站超过 50% 的流量，而免费版页面是核心的用户获取点，将它们隐藏在层级较深的页面内不利于 SEO，也不利于用户发现核心价值。

---

## 2. 优化方案：全局导航升级

### 2.1 桌面端导航顺序重组
我们将按照“业务优先级”重新排列导航项。
- **推荐顺序**：
  1. **Home**
  2. **Features** (现有)
  3. **Free Plan** (新增) —— 吸引免费流量
  4. **Pricing** (现有)
  5. **API** (新增) —— 稳定技术开发者流量
  6. **Blog** (现有)
  7. **Get Started** (按钮)

### 2.2 移动端菜单同步
- 在移动端手风琴菜单中同步增加这两个入口，确保移动端用户也能快速触达流量页。

---

## 3. 技术执行计划

### 3.1 语言包更新 (Locales)
在所有语言包 (`en.json`, `zh.json`, `fr.json`, `ja.json`) 的 `nav` 字段中新增：
- `"free_plan": "Free Plan"` (及对应翻译)
- `"api": "API"`

### 3.2 模板修改 (header.ejs)
- **文件路径**：`src/templates/partials/header.ejs`
- **操作**：
  - 在 `lovart-design-features.html` (Features) 之后插入 `lovart-free.html`。
  - 在 `lovart-pricing.html` (Pricing) 之后插入 `lovart-api.html`。
  - **关键点**：使用 `<%= link('filename.html') %>` 助手函数，确保多语言目录路径正确。

---

## 4. SEO 价值评估

1. **内链权重分发**：Header 是全站内链权重最高的区域。将 API 和 Free 放入 Header，能显著提升这两个 URL 的权威度，有助于稳定并提升其在 Google/Bing 的排名。
2. **爬虫抓取深度**：确保搜索引擎爬虫在进入首页后的第一层级就能发现这两个关键页面。
3. **低跳出率**：用户进入首页后能直接看到“免费版”入口，能有效引导非直接转化的用户留下，提升整体站点活跃度。
