# Footer 底部导航结构优化方案

> **状态**：待执行  
> **目标**：补全 `lovart-api.html` 和 `lovart-free.html` 在 Footer 中的入口，建立稳定的底部内链集群，增强全站页面的权重传导和搜索引擎爬行深度。

---

## 1. 现状原则

目前的 Footer 产品导航仅包含：Features, Pricing, Blog, Help。
Footer 是页面权重的“保底”区域。将核心入口补全到 Footer，可以确保不论用户从网站哪个角落进入（如长尾博客页），都能在底部看到前往 API 和 免费试用 的快捷入口。

---

## 2. 优化方案：底部导航入口补全

### 2.1 产品列 (Products Column) 更新
我们将把以下两个高价值页面加入到 Footer 的“Products”列中。
- **新增项**：
  1. **Free Plan** (→ `lovart-free.html`)
  2. **API Access** (→ `lovart-api.html`)

### 2.2 视觉布局保持一致
- 继续保持现有的垂直列表风格，确保新加入的链接在视觉上与原有项（Features, Pricing 等）完全融合。

---

## 3. 技术执行计划

### 3.1 语言包复用 (Locales)
- 直接复用在 Header 优化中新增的 `nav.free_plan` 和 `nav.api` 词条。不需要额外增加词条。

### 3.2 模板修改 (footer.ejs)
- **文件路径**：`src/templates/partials/footer.ejs`
- **操作**：
  - 在 `lovart-pricing.html` 链接之后，插入 `lovart-free.html` 链接。
  - 在 `blog.html` 链接之后，插入 `lovart-api.html` 链接。
  - **关键点**：使用 `<%= link('filename.html') %>` 助手函数，确保多语言目录路径正确。

---

## 4. SEO 价值评估

1. **内链池闭环**：结合之前制定的 Header 优化方案，全站所有页面都将通过顶部和底部导航形成密集的内链网。
2. **长尾页面权重提升**：Footer 入口的存在，能让原本权重较低的深层页面通过这种方式获得稳定的全站权重流向。
3. **增加抓取频率**：搜索引擎爬虫在抓取网页时通常会扫描 Footer 区域。补全这些入口能让爬虫更频繁地访问 API 和 免费版 页面。
