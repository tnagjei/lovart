# Robots Tag 优化计划（Bing 导流优先）

## 1. 目标与边界

### 1.1 目标
1. 提高 `lovart.info` 在 Bing 的有效收录比例与可排名页面占比。  
2. 把抓取预算集中到“客服/政策/API/Pricing/核心入口”页面。  
3. 降低重复 URL、薄内容 URL、技术 URL 对索引质量的干扰。  

### 1.2 边界
1. 本站定位是第三方信息导航，不承诺处理官方工单。  
2. 不做“所有 URL 都索引”，而是做“有价值 URL 索引”。  
3. 优先 Bing 信号，不破坏 Google 的基础兼容。  

---

## 2. 当前问题判断（执行前共识）

1. `robots.txt` 已有基础规则，但主要是路径放行/阻断，缺少“页面级索引策略”。  
2. 模板层几乎没有统一的 `meta robots` 策略，导致“应索引/不应索引”不够可控。  
3. 站内存在多语言与 URL 变体，需要用 canonical + sitemap + robots 协同收敛。  

---

## 3. 策略总览（先定规则，再落地）

### 3.1 三层策略
1. `index,follow`：核心承接页（要拿排名的页面）。  
2. `noindex,follow`：薄内容页/过渡页（传权重但不抢索引）。  
3. `Disallow`：后台与技术目录（减少无效抓取）。  

### 3.2 核心原则
1. 不对同一 URL 同时使用 `Disallow` 和 `noindex`。  
2. `sitemap.xml` 只放 canonical 且可索引的 URL。  
3. 站内内链统一指向 clean URL（无 `.html`、无参数版本）。  

---

## 4. URL 类型与 Robots 策略矩阵

| URL 类型 | 示例 | Robots 策略 | 备注 |
|---|---|---|---|
| 核心流量页 | `/lovart-customer-support` | `index,follow` | 客服词主承接 |
| 联系方式页 | `/lovart-support-contact` | `index,follow` | 承接邮箱/Discord |
| 售后/退款页 | `/lovart-refund-guide` | `index,follow` | 承接退款长尾 |
| 删号/隐私/条款页 | `/lovart-account-deletion-guide` 等 | `index,follow` | 合规词承接 |
| API/Pricing 主页 | `/lovart-api` `/lovart-pricing` | `index,follow` | 已有流量，保持可索引 |
| 低质量语言壳页 | 内容未完善的语言页 | `noindex,follow` | 内容补齐后再切回 index |
| 参数化重复 URL | `?utm_...` 等 | 不单独索引（靠 canonical 收敛） | 避免重复收录 |
| 技术目录 | `/admin/` `/private/` | `Disallow` | 与当前 robots 一致 |

---

## 5. 分阶段执行

## 阶段 A：策略盘点与页面分级（Day 1）
目标：给每个 URL 明确索引级别，形成执行清单。  

任务：
1. 输出“URL 分级表”：`index` / `noindex` / `disallow` 三列。  
2. 标注每个页面是否属于“流量承接主页面”。  
3. 确认多语言页面中哪些先 `noindex`（防薄内容）。  

交付物：
1. `docs/plans/2026-02-15-keyword-url-map.md` 追加 `robots_action` 字段。  

验收：
1. 每个 URL 有且仅有一个 robots 动作。  

## 阶段 B：模板层 Robots Tag 统一（Day 2）
目标：让页面级索引可控，而不是靠手工散改。  

任务：
1. 在公共 head 模板支持可配置 `meta robots`。  
2. 默认值设为 `index,follow`。  
3. 对阶段 A 标记为 `noindex` 的页面做覆盖。  

验收：
1. 核心页面输出 `index,follow`。  
2. 薄内容页面输出 `noindex,follow`。  

## 阶段 C：robots.txt 与 sitemap 协同（Day 3）
目标：把“允许抓取”与“允许索引”对齐。  

任务：
1. `robots.txt` 只保留技术目录阻断，不阻断核心承接页。  
2. `sitemap.xml` 仅保留 canonical 且 index 的 URL。  
3. 校验 `.html -> clean URL` 重定向后，sitemap 不再出现旧形态。  

验收：
1. 不存在“sitemap 里有 URL 但页面 noindex/disallow”的冲突。  

## 阶段 D：上线后校验（Day 4）
目标：确认信号已正确输出给搜索引擎。  

任务：
1. 抽检核心页面源码中的 canonical/hreflang/meta robots。  
2. 抽检 `robots.txt` 与 sitemap 可访问。  
3. 提交 IndexNow（新增或更新的核心 URL）。  

验收：
1. 关键页面信号一致：`canonical + robots + sitemap` 一致。  

## 阶段 E：两周复盘与开关调整（Week 2）
目标：基于数据动态切换 `noindex -> index`。  

任务：
1. 每周看 Bing 查询词与页面点击变化。  
2. 对内容已补齐且有需求词的页面，解除 `noindex`。  
3. 对持续无曝光且内容薄弱页面，维持 `noindex,follow`。  

验收：
1. 可索引页质量提高，低质量收录下降。  

---

## 6. 给写代码 AI 的执行方式（建议分步骤，不要一次性）

### Step 1（只做盘点，不改代码）
目标：产出 URL 分级清单。  
产出：`index/noindex/disallow` 表格 + 冲突清单。  

### Step 2（只做模板改造）
目标：公共模板支持 `meta robots` 配置。  
产出：变更文件、关键 diff、构建结果。  

### Step 3（只做 robots+sitemap 收敛）
目标：修正规则冲突并收敛索引入口。  
产出：更新后的 `robots.txt`、`sitemap.xml` 校验结果。  

### Step 4（只做验证与提交）
目标：跑验收命令并给结果。  
产出：源码抽检结果、IndexNow 提交记录。  

---

## 7. 验收命令（交付时必须附结果）

```bash
npm run build
rg -n "meta name=\"robots\"" dist -g "*.html"
rg -n "noindex|index,follow|noindex,follow" dist -g "*.html"
rg -n "Sitemap:|Disallow:|Allow:" public/robots.txt
rg -n "lovart-customer-support|lovart-support-contact|lovart-refund-guide|lovart-account-deletion-guide|lovart-privacy-policy-guide|lovart-terms-of-use-guide" dist/sitemap.xml
```

---

## 8. 完成定义（DoD）

1. 核心承接页全部 `index,follow`。  
2. 薄内容页有明确 `noindex,follow` 策略。  
3. `robots.txt` 不误伤核心页抓取。  
4. `sitemap.xml` 仅保留可索引 canonical URL。  
5. Bing 侧可观察到新策略上线后的抓取/索引改善。  
