#!/bin/bash

# 图片进一步压缩指南
echo "=== Lovart网站图片进一步压缩指南 ==="
echo "当前时间: $(date)"
echo

# 显示当前图片文件状态
echo "当前图片文件大小统计:"
echo "原始图片总大小: $(du -ch images/*.jpg | grep total | cut -f1)"
echo "小版本图片总大小: $(du -ch images/small_*.jpg | grep total | cut -f1)"
echo

echo "=== 图片压缩建议 ==="
echo "1. 推荐工具:"
echo "   - https://tinypng.com/ (推荐，效果最好)"
echo "   - https://imagecompressor.com/"
echo "   - https://compressor.io/"
echo

echo "2. 压缩策略:"
echo "   - 压缩所有原始图片文件 (.jpg)"
echo "   - 压缩小版本图片文件 (small_*.jpg)"
echo "   - 目标压缩率: 60-80%"
echo

echo "3. 需要压缩的文件:"
echo "原始图片文件:"
for img in images/*.jpg; do
    if [[ "$img" != *"small_"* ]]; then
        size=$(du -h "$img" | cut -f1)
        filename=$(basename "$img")
        echo "  - $filename ($size)"
    fi
done

echo
echo "小版本图片文件:"
for img in images/small_*.jpg; do
    if [ -f "$img" ]; then
        size=$(du -h "$img" | cut -f1)
        filename=$(basename "$img")
        echo "  - $filename ($size)"
    fi
done

echo
echo "4. 压缩后命名规则:"
echo "   - 原始图片: opt_原文件名 (例如: opt_01.jpg)"
echo "   - 小版本图片: opt_small_原文件名 (例如: opt_small_01.jpg)"
echo

echo "=== 预期效果 ==="
echo "当前图片总大小: 4.6MB"
echo "目标图片总大小: < 2MB"
echo "预期减少: 50-60%"
echo

echo "=== 操作步骤 ==="
echo "1. 访问 https://tinypng.com/"
echo "2. 批量上传所有图片文件"
echo "3. 下载压缩后的文件"
echo "4. 按照命名规则重命名"
echo "5. 更新HTML引用 (如需要)"
echo

echo "=== WebP格式建议 ==="
echo "如果想要更好的压缩效果:"
echo "1. 使用 https://squoosh.app/ 转换为WebP格式"
echo "2. WebP通常比JPEG小25-35%"
echo "3. 需要更新HTML使用<picture>标签"
echo

echo "=== 注意事项 ==="
echo "• 压缩前备份原文件"
echo "• 检查压缩后的图片质量"
echo "• 确保图片清晰度可接受"
echo "• 透明度图片使用PNG格式"