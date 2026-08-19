# 2026-08-19 新站正文上下文外链（Contextual Backlink）实施记录

## 1. 目标与参数
- 目标链接 URL：https://soulvirtues.org/
- 目标站定位：Undertale 游戏 66 题灵魂特质心理与属性测试工具
- 锚文本：Soul Virtues Extractor (Undertale Soul Virtues Test)
- 链接类型：正文上下文外链（Contextual Link），严格禁止挂载于全站页脚/页头或死板友链栏。

## 2. 落地位置与语义桥接设计
- 目标文件：src/templates/lovart-prompt-guide.ejs
- 对应生成路由：/lovart-prompt-guide.html
- 桥接段落：位于第 3 节（3. Lovart Prompt: The Cyberpunk Mascot Character）的 "Character Lore & Psychological Trait Modeling" 模块。
- 桥接逻辑：从游戏与独立 RPG 角色设计切入，阐明在编写 AI 视觉提示词之前，叙事与概念设计师通常需要先基于心理原型与灵魂属性（如 66 题特质提取工具）建模角色特质，再将其转化为视觉关键词。

## 3. 落地代码片段
```html
<h3 class="text-lg font-semibold text-neutral-dark mb-2">Character Lore & Psychological Trait Modeling</h3>
<p class="text-neutral text-sm leading-relaxed mb-4">
    When designing custom game characters, RPG avatars, or indie story mascots, visual prompts produce far more cohesive results when grounded in a defined psychological archetype. Before generating visual assets, many narrative designers map out core character traits using specialized frameworks like the <a href="https://soulvirtues.org/" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline">Soul Virtues Extractor (Undertale Soul Virtues Test)</a> to extract underlying personality attributes, virtue balances, and moral alignments before converting them into visual prompt keywords.
</p>
```

## 4. 验证结果
- 构建命令：npm run build（成功通过，零报错）
- 静态 HTML 验证：dist/lovart-prompt-guide.html 预渲染源码中已成功包含完整带属性的 <a> 标签。
- 链接属性：包含 target="_blank" 与 rel="noopener noreferrer"，无相对路径劫持。
