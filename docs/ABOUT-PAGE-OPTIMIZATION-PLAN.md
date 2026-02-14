# About Page Optimization Plan (关于页面优化计划)

为了让“关于”页面与 Lovart.ai 官方品牌身份保持高度一致，提升专业度、可信度并优化 SEO。我们将整合官方关于创始人、核心技术和使命的真实数据。

## 官方品牌调研洞察 (Official Brand Insights)
- **创始人与 CEO**: Melvin Chen
- **AI 首席研究员**: Haofan Wang (CMU 背景)
- **总部**: 旧金山 (San Francisco)
- **核心理念**: "Design Agent" (设计代理) —— 不仅仅是一个工具，而是创意合作伙伴。
- **核心技术**: MCoT (Mind Chain of Thought) 推理引擎。
- **市场规模**: 全球 70+ 国家，80 万+ 用户。

## 优化提案 (Proposed Changes)

### 1. 品牌故事与使命对齐 (Brand Story & Mission)
- **Hero 区域**: 更新数据为 “800,000+ 创作者” 和 “70+ 国家”。将 Lovart 重新定义为 “全球首个 AI 设计代理 (World's First Design Agent)”。
- **使命**: 强调赋能人类创意，实现专业级设计工作流的自动化。
- **发展历程**: 细化时间轴，加入 MCoT 引擎开发等核心技术里程碑。

### 2. 团队与技术背书 (Team & Technology)
- **团队**: 修正创始人简介。突出 Haofan Wang 的卡内基梅隆大学 (CMU) 背景，提升技术信任感。
- **技术栈**: 增加或通过文案整合 **MCoT 推理引擎** 和 **多智能体编排 (Multi-Agent Orchestration)** 的概念。

### 3. 多语言与 SEO (Localization & SEO)
- **关键词**: 集成 "Design Agent", "MCoT AI", "AI Design Workflow", "Melvin Chen Lovart"。
- **一致性**: 确保 EN, ZH, FR, JA 各语种对 “Design Agent” 的翻译准确且一致。

### 4. 执行步骤 (Implementation Steps)

#### [修改] [en.json](file:///Users/tangjei/Documents/建站/工具站/lovart/src/locales/en.json)
- 更新 `hero`, `mission`, `story`, `team` 部分的文案。
- 更新 `seo` 标签。

#### [修改] [zh.json](file:///Users/tangjei/Documents/建站/工具站/lovart/src/locales/zh.json)
- 同步中文翻译。

#### [修改] [about.ejs](file:///Users/tangjei/Documents/建站/工具站/lovart/src/templates/about.ejs)
- 优化布局以承载 “科技感” 或 “AI Agent” 的视觉元素。

## 验证计划 (Verification Plan)
- [ ] 验证全语种数据一致性。
- [ ] 运行 `npm run build` 确保页面正常渲染。
- [ ] 在桌面端和移动端手动检查关于页面的视觉效果。
