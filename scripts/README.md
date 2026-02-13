# scripts
- 用途：存放构建、优化和批处理脚本，用于图片/视频压缩、格式转换等自动化任务。
- 关键入口：`optimize_images.py` (图片优化), `compress_videos.sh` (视频压缩)
- 边界/依赖：依赖 `ffmpeg` (视频), `cwebp` (WebP 转换), Python 3 (图片优化)
> 一旦本目录内容变化，请更新本文件

## Files
- `compress_videos.sh`：视频压缩脚本 (ffmpeg)
- `convert_images_webp.sh`：JPG/PNG 转 WebP 脚本
- `optimize_images.py`：Python 图片优化脚本
- `optimize_images.sh`：Shell 图片优化入口
- `optimize_videos.sh`：视频优化脚本
- `fix_multilingual.sh`：多语言修复脚本
- `fix_remaining_chinese.sh`：中文残留修复脚本
- `batch_optimization_guide.sh`：批量优化指南
- `image_compression_guide.sh`：图片压缩指南
- `video_compression_guide.sh`：视频压缩指南
- `optimization_quick_start.sh`：优化快速开始指南
- `create_optimized_versions.sh`：创建优化版本脚本
- `update_html_with_optimized_videos.sh`：HTML 视频路径更新脚本
- `update_html_with_small_images.sh`：HTML 图片路径更新脚本

- `indexnow-submit.js`：向 Bing IndexNow 提交新增/更新/删除 URL
