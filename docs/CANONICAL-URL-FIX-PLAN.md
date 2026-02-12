# 首页 URL 规范化与 Sitemap 优化方案 (保守型)

> **目标**：解决首页 `index.html` 与根目录 `/` 的 Canonical 冲突及 Sitemap 重复问题，同时保留内页 `.html` 后缀以确保 Google 排名绝对稳定。

---

## 1. 核心原则
- **安全性第一**：不改变已有内页的 `.html` 结构，防止收录大规模重新索引导致的评分波动。
- **消除冲突**：将所有指向首页的路径统一为标准的根目录 `/`。
- **纯净增量**：仅修正元数据 (Metadata) 与站点地图，不触碰业务逻辑。

---

## 2. 拟执行变更

### 2.1 编译系统更新

#### [MODIFY] [build.js](file:///Users/tangjei/Documents/建站/工具站/lovart/build.js)
- **改进 `canonicalUrl` 生成逻辑**：
  - 如果页面是 `index`：
    - 英文版：指向 `https://lovart.info/`
    - 其他语种 (如 zh)：指向 `https://lovart.info/zh/`
  - 其他内页：保持 `pageName.html` 形式。

### 2.2 模板元数据更新

#### [MODIFY] [hreflang.ejs](file:///Users/tangjei/Documents/建站/工具站/lovart/src/templates/partials/hreflang.ejs)
- 同步更新多语言标签逻辑，确保 `index` 页面在所有语种下都指向根目录形式，而非 `index.html`。

### 2.3 站点地图清理

#### [MODIFY] [sitemap.xml](file:///Users/tangjei/Documents/建站/工具站/lovart/public/sitemap.xml)
- **移除重复项**：删除所有显式包含 `index.html` 的 `<url>` 节点。
- **规范化地址**：确保各语种首页的 `<loc>` 链接均以 `/` 结尾。

---

## 3. 验证计划

### 自动化验证
- 执行 `npm run build`。
- 使用 `grep` 检查 `dist/index.html` 中的 `canonical` 是否为 `https://lovart.info/`。
- 使用 `grep` 检查 `dist/zh/index.html` 中的 `canonical` 是否为 `https://lovart.info/zh/`。
- 确认 `dist/lovart-free.html` 依然保留后缀。

### 预期效果
- 谷歌搜索控制台 (GSC) 中的“重复页面”报警将消失。
- 首页权重 100% 集中到根域名。
- 内页收录状态保持原样，无波动风险。
