#!/bin/bash

# 图片优化脚本
# 需要安装: sudo apt-get install jpegoptim optipng

echo "开始优化图片文件..."

# 优化JPEG图片
for img in images/*.jpg; do
    if [ -f "$img" ]; then
        echo "优化 $img"
        # 压缩JPEG，质量85%
        jpegoptim --max=85 --strip-all "$img"
        
        # 创建缩略图版本
        filename=$(basename "$img")
        name="${filename%.*}"
        convert "$img" -resize 800x600 -quality 85 "images/${name}_thumb.jpg"
    fi
done

# 优化PNG图片
for img in images/*.png; do
    if [ -f "$img" ]; then
        echo "优化 $img"
        # 优化PNG
        optipng -o7 -quiet "$img"
    fi
done

echo "图片优化完成！"
echo "优化后文件大小："
ls -la images/*.jpg images/*.png