# Bing「Meta Descriptions Too Short」修复计划（33 URLs）

> 创建日期：2026-02-25  
> 问题来源：Bing Webmaster Tools Recommendations  
> 问题级别：中等（非致命，但影响摘要展示质量与点击率）

---

## 1. 问题定义

Bing 报告提示：
- `Meta descriptions on many of your pages are too short`
- 受影响页面数：`33`

当前风险：
1. 搜索结果摘要信息不足，CTR 受影响。  
2. 部分页面可能因描述模板化/过短，导致 Bing 低质量推荐提示持续存在。  
3. 历史 URL 形态（如 www、.html 变体）可能放大了问题统计。

---

## 2. 目标与验收标准

## 2.1 目标
1. 将 Bing 报告中的“过短描述”问题明显下降。  
2. 关键流量页（首页、博客、帮助、价格、支持、核心内页）描述全部达到可读且可点击标准。  
3. 多语言页面避免英文直译和重复描述，直接在底层的 i18n JSON（如 `zh.json`, `fr.json`）中进行本地化改写。

## 2.2 验收标准（DoD）
1. 自动化校验通过：通过 Node.js 脚本全面扫描所有语种（包含 `es`, `it` 等）的 `src/locales/*.json`，需同时匹配 `description` 和 `desc`（博客使用）字段。
   - 英文/法文 `< 100` 字符的异常数量降至 **0**。
   - 中文/日文 `< 50` 字符的异常数量降至 **0**（CJK 字符表意密度高，无需硬凑 100 字符）。
2. 每页 description 与意图对应，不出现批量重复。
3. 代码构建正确：修改 JSON 后，经 `npm run build` 生成的对应 HTML 源码中 `<meta name="description">` 已被正确写入新文本。
4. Bing 14天后相同告警数量显著下降。

---

## 3. 范围（只做什么）

执行范围：
1. 本地化 JSON 文件（涵盖所有 `src/locales/{en,zh,ja,fr,es,it}.json`）中相关 `description` 与 `desc` 字段的具体字数扩写与意图优化。
2. 编写与运行 Node.js 自动化扫描脚本，提取不达标的 JSON Key。
3. 验证 sitemap 提交与抓取反馈。

不在本次范围：
1. 页面结构大改。  
2. H1/H2 体系重构。  
3. Sitemap 生成器深度优化（另开独立任务，防跑题）。
4. 商业逻辑调整。

---

## 4. 分组策略（按价值修复）

将重点页面分组处理：

**P0（优先级最高，先处理）**
1. `/`
2. `/blog`
3. `/help`
4. `/about`
5. `/lovart-pricing`
6. `/lovart-support-contact`
7. `/lovart-ai-code`

**P1（第二批）**
1. 核心功能页（`lovart-design-features`, `lovart-api`, `lovart-free`）  
2. 核心转化页（`lovart-review`, `lovart-alternative`, `lovart-tutorial`, `what-is-lovart`）

**P2（第三批）**
1. 政策与条款页  
2. 历史长尾页（按需）

---

## 5. 执行步骤

## Phase A：自动化基线盘点与扫描（当天）
1. 编写 Node.js 脚本 `scripts/scan-meta-lengths.mjs`。
2. 读取所有语种文件（`src/locales/{en,zh,ja,fr,es,it}.json`），同时兼容扫描 `description` 和 `desc` 这两类短语 key，防止漏扫博客页面。
3. **结合白名单过滤**：优先按 Bing 的 33 条报错 URL 白名单修复，避免扫描后误伤非告警页面的描述，控制改动面更稳。
4. 根据不同语言的字数阈值（中日<50，英法<100）检出不及格的 Key 和当前长度。
5. 产出具体的待修改映射表（URL -> JSON Key -> 当前文字）。

## Phase B：文案规范统一与 JSON 改写（1-2 天）
针对扫描出的不达标 Key，在各自 `*.json` 中修改：
1. **前 50-80 字符**：放最核心的主意图和利益点（防 Bing 截断隐藏）。
2. **后半段**：明确收益点或辅助说明（补充以达到长度要求）。
3. **结尾**：轻量 CTA（如“查看指南”“立即免费体验”）。
4. 中/日语言保持 60-90 汉字/假名（完整通顺），英/法语 120-160 字符。

## Phase C：P0/P1 构建与代码抽检（当天）
1. 本地执行 `npm run build`。
2. 检查生成的静态产物（基于 EJS 构建的 HTML）中，特定多语言页的 `<meta name="description">` 内容是否更新，确认未被覆盖。

## Phase D：提交与复抓（发布后）
1. 在 Bing 重点 URL 提交抓取（先推 P0）。
2. 重新提交现有的 `https://lovart.info/sitemap.xml` 触发整体更新。

## Phase E：监控回访（2 周）
1. D+3：检查 Bing 报告是否开始回落。  
2. D+7：复核仍报错 URL，定位问题（通常是变体 URL 干扰）。

---

## 6. 风险与控制

1. **截断风险**：为了凑字长导致重要卖点放到了 120 字符之后。
   - 控制措施：在 Phase B 严格要求核心信息必须前置，后侧放增量解释。
2. **构建覆盖风险**：误改编译输出产物导致下次修改丢失。
   - 控制措施：从源头的 `src/locales/*.json` 入手修改。
3. **回滚控制**：如果上线后部分页面 CTR 反而暴跌。
   - 控制措施：替代依赖人工记录 csv 旧值的做法，严格使用 Git Feature 分支；出问题直接 `git revert <commit hash>`，撤回代码级变更。

---

## 7. 交付清单（给执行同学/AI）

1. 一份 Node.js 扫描脚本 (`scripts/scan-meta-lengths.mjs`) 及扫描的异常 JSON Key 列表。
2. **33 报错 URL 白名单进度追踪表**（可单建 CSV 或 Markdown 附件），修一单销一单。
3. 每个 locale `json` 文件对应修改的 Commit 记录。
4. 构建测试成功（`npm run build`）并抽检部分静态页面描述覆盖无误的反馈。
