#!/bin/bash

# 批量文件处理脚本
# 为大文件创建占位符和小版本

echo "=== Lovart网站文件优化方案 ==="
echo "当前时间: $(date)"
echo

# 显示当前文件大小
echo "当前文件大小统计:"
echo "images目录总大小: $(du -sh images/ | cut -f1)"
echo

# 创建小版本占位符（实际使用时需要手动压缩）
echo "创建小版本文件引用..."

# 为大图片创建小版本引用
large_images=("01.jpg" "03.jpg" "04.jpg" "05.jpg" "06.jpg" "07.jpg" "08.jpg" "09.jpg" "10.jpg" "11.jpg")

echo "需要手动压缩的图片文件:"
for img in "${large_images[@]}"; do
    if [ -f "images/$img" ]; then
        size=$(du -h "images/$img" | cut -f1)
        echo "  - $img ($size)"
    fi
done

echo
echo "需要手动压缩的视频文件:"
for video in images/*.mp4; do
    if [ -f "$video" ]; then
        size=$(du -h "$video" | cut -f1)
        filename=$(basename "$video")
        echo "  - $filename ($size)"
    fi
done

echo
echo "=== 优化建议 ==="
echo "1. 图片压缩 (使用 https://tinypng.com/):"
echo "   - 上传所有jpg文件，目标压缩率 70-80%"
echo "   - 压缩后重命名为 opt_原文件名"
echo
echo "2. 视频压缩 (使用 https://cloudconvert.com/mp4-compressor):"
echo "   - 目标分辨率: 720p (最大)"
echo "   - 目标码率: 1-2Mbps"
echo "   - 压缩后重命名为 opt_原文件名"
echo
echo "3. 替换策略:"
echo "   - 首页大图: 使用压缩版本"
echo "   - 滚动图片: 使用缩略图版本"
echo "   - 视频: 使用预览图 + 点击加载"
echo
echo "=== 预期效果 ==="
echo "当前总大小: ~23MB"
echo "目标总大小: <5MB"
echo "预期减少: 75-80%"
echo
echo "压缩完成后，运行: bash update_html_with_optimized_files.sh"