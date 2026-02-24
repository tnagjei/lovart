# public
- 用途：存放静态资源和 SEO 配置文件，构建时直接复制到 `dist/` 目录。
- 关键入口：`robots.txt`, `sitemap.xml`, `llms.txt`, `_redirects`
- 边界/依赖：无运行时依赖，内容由构建脚本直接复制。
> 一旦本目录内容变化，请更新本文件

## Files
- `robots.txt`：搜索引擎爬虫规则
- `sitemap.xml`：站点地图（发布前建议与 `dist/sitemap.xml` 同步）
- `_redirects`：URL 规范化重定向规则（协议/主机/路径）
- `llms.txt`：AI 爬虫内容指引
- `llms-full.txt`：AI 爬虫完整内容
- `ads.txt`：广告授权声明
- `indexnow.txt`：IndexNow 当前生效 key（纯文本）
- `<INDEXNOW_KEY>.txt`：IndexNow 官方验证 key 文件（纯文本）
- `images/`：网站图片资源目录
