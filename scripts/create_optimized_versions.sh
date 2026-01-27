#!/bin/bash

# 简单的文件重命名和整理脚本
# 为大文件创建占位符版本

echo "开始创建优化版本的文件..."

# 为大图片创建占位符
large_images=("01.jpg" "03.jpg" "04.jpg" "05.jpg" "06.jpg" "07.jpg" "08.jpg" "09.jpg" "10.jpg" "11.jpg")

for img in "${large_images[@]}"; do
    if [ -f "images/$img" ]; then
        # 创建小版本文件名
        small_img="small_$img"
        
        # 如果小版本不存在，复制原文件
        if [ ! -f "images/$small_img" ]; then
            echo "为 $img 创建小版本..."
            # 这里应该进行实际的图片压缩，但现在只是复制
            # 在实际环境中，你应该使用图片压缩工具
            cp "images/$img" "images/$small_img"
            echo "创建了 images/$small_img"
        fi
    fi
done

echo "文件整理完成！"
echo "建议："
echo "1. 使用在线工具压缩图片：https://tinypng.com/"
echo "2. 使用在线工具压缩视频：https://cloudconvert.com/mp4-compressor"
echo "3. 或者安装本地工具：sudo apt-get install jpegoptim optipng ffmpeg"