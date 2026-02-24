# src
- 用途：存放所有源代码和资源文件，构建时由 `build.js` 处理生成 `dist/` 目录。
- 关键入口：`templates/index.ejs` (主模板), `locales/en.json` (主语言包)
- 边界/依赖：依赖 `ejs` 进行模板渲染，`tailwindcss` 处理样式。
> 一旦本目录内容变化，请更新本文件

## Files
- `templates/`：EJS 模板目录，包含各页面和 partials
- `locales/`：多语言 JSON 文件 (en, zh, fr, ja, es, it)
- `styles/`：Tailwind CSS 源文件
- `assets/`：其他静态资源
