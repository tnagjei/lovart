#!/bin/bash

# 视频优化脚本
# 需要安装: sudo apt-get install ffmpeg

echo "开始优化视频文件..."

# 优化视频文件
for video in images/*.mp4; do
    if [ -f "$video" ]; then
        echo "优化 $video"
        
        filename=$(basename "$video")
        name="${filename%.*}"
        
        # 创建低分辨率版本用于移动设备
        ffmpeg -i "$video" \
               -vf "scale=640:360" \
               -c:v libx264 \
               -crf 28 \
               -preset fast \
               -c:a aac \
               -b:a 128k \
               "images/${name}_mobile.mp4"
        
        # 创建中等分辨率版本
        ffmpeg -i "$video" \
               -vf "scale=1280:720" \
               -c:v libx264 \
               -crf 23 \
               -preset fast \
               -c:a aac \
               -b:a 128k \
               "images/${name}_hd.mp4"
        
        echo "完成优化 $video"
    fi
done

echo "视频优化完成！"
echo "优化后文件大小："
ls -la images/*.mp4