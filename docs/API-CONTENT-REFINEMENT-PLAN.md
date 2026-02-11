# Lovart API 页面保守优化执行方案 (修订版 v3)

> **状态**：待执行  
> **核心原则**：**零删除、零替换、纯增量**。保留现有 TDH 和所有区块。新增内容方向为**"平台补充说明"**，不编造 API 使用教程。

---

## 0. 安全红线核查表

| 禁止操作 | 本方案是否触碰 |
|---------|-------------|
| 修改 URL | ❌ 不改 |
| 更改 Title / Meta Description | ❌ 不改 |
| 改变 H1 标题 | ❌ 不改 |
| 删除/大幅改写现有正文段落 | ❌ 不删不改 |
| 合并/删除页面 | ❌ 不合并不删 |

---

## 1. 现有页面结构（完全保留）

| 序号 | 板块 | 内容 |
|-----|------|------|
| A | **Hero Section** | H1 标题 + 描述 + 4 个 Badge |
| B | **Authentication Section** | H2 + API Key 说明 + 代码块 + 安全提示 |
| C | **Endpoints Section (Tabs)** | 4 个 Tab，各含 2 个端点卡片 |
| D | **Support Section** | H2 + 3 个支持卡片 |

## 4. 关键词密度与字数统计 (SEO 数据对齐)

为了达成您要求的 **3% 左右** 的关键词密度，我们设定以下目标数据：

- **总字数预算**：约 **900 字** (原有 200 + 新增 700)
- **目标关键词**：`lovart api`
- **目标提及次数**：**27 次** (900 * 3% = 27)

### 提及次数分配表 (锚定策略)：

| 模块 | 预计字数 | `lovart api` 次数 | 备注 |
|-----|---------|-------------------|-----|
| Hero Section | 50 | 2 | H1 + 描述 |
| **NEW: What is...** | 150 | 4 | 标题 + 介绍内容 |
| Auth Section | 80 | 2 | H2 + 描述文字 |
| Endpoints Section | 100 | 2 | H2 + Tab 文字 |
| **NEW: Capabilities** | 120 | 4 | 介绍Lovart AI平台能力时植入 |
| **NEW: Why Lovart?** | 120 | 3 | 优势对比说明中植入 |
| **NEW: FAQ** | 250 | 8 | 每组问答至少出现 1-2 次 |
| Support Section | 70 | 1 | 底部引导 |
| Related Resources | 60 | 1 | 链接锚文本 |
| **合计** | **900** | **27** | **平均密度：3.0%** |

---

## 5. 技术执行步骤

### 5.1 语言包更新 (en.json)
- 在 `lovart_api_page` 对象下新增 5 个子对象：
  - `what`、`capabilities`、`why`、`faq`、`related`
- **关键词植入技巧**：在 FAQ 和 What is 板块中，尽量使用完整短语 "The Lovart API" 或 "Regarding Lovart API"，确保搜索引擎精准识别。

### 5.2 模板插入 (lovart-api.ejs)
- 在现有 `<section>` 之间插入新的 `<section>`。
- 每个新板块独立，不嵌套到现有板块中。

---

## 6. SEO 安全核查清单 (保排名核心)

- [ ] **URL 保持不变**：绝对不改动 `lovart-api.html`。
- [ ] **元数据保留**：保留现有的 `<title>` 和 `<meta description>`。
- [ ] **H1 标题保留**：保持 "Lovart API Documentation" 作为页面的主标题。
- [ ] **关键词密度确认**：发布后实际统计 `lovart api` 密度，确保在 2.8% - 3.2% 区间。
- [ ] **内链启用**：确认使用了 `link()` 多语言插件。
