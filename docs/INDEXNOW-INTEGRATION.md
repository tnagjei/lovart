# IndexNow 接入与提交流程

## 1) 提交单个 URL
```bash
npm run indexnow:submit -- --urls https://lovart.info/
```

## 2) 提交多个 URL
```bash
npm run indexnow:submit -- --urls https://lovart.info/zh/help,https://lovart.info/ja/about
```

## 3) 通过文件批量提交
`urls.txt` 示例：
```text
https://lovart.info/
https://lovart.info/zh/help
https://lovart.info/zh/lovart-api
```

执行：
```bash
npm run indexnow:submit -- --file urls.txt
```

## 4) 发布后触发建议
每次发布后，收集新增/更新/删除的页面 URL，执行一次：
```bash
npm run indexnow:submit -- --file urls.txt
```

## 5) 验证方式
- Key 文件可访问：`https://lovart.info/<INDEXNOW_KEY>.txt`
- 文件正文仅为 key 本身
- 提交命令返回 `HTTP 200/202` 表示已被接收
