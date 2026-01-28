#!/bin/bash
# 视频压缩脚本 - 使用 ffmpeg 压缩所有视频至 720p
# 压缩参数：CRF 28（质量/体积平衡），preset slow（更好压缩率）

INPUT_DIR="public/images"
OUTPUT_DIR="public/images/compressed"

mkdir -p "$OUTPUT_DIR"

echo "开始压缩视频..."
echo "================================"

for video in "$INPUT_DIR"/*.mp4; do
    filename=$(basename "$video")
    output_file="$OUTPUT_DIR/$filename"
    
    # 获取原始文件大小
    original_size=$(ls -lh "$video" | awk '{print $5}')
    
    echo "压缩中: $filename (原始大小: $original_size)"
    
    # ffmpeg 压缩命令
    # -vf scale=-2:min(720\,ih): 仅当原始高度大于720时缩小，否则保持原样（并确保宽度为偶数）
    # -c:v libx264: 使用 H.264 编码
    # -crf 28: 压缩质量（18-28，越高体积越小）
    # -preset slow: 压缩速度（slow = 更好的压缩率）
    # -an: 移除音频（网页视频通常静音）
    # -movflags +faststart: 优化网页播放（元数据前置）
    ffmpeg -i "$video" \
           -vf "scale=-2:min(720\,ih)" \
           -c:v libx264 \
           -crf 28 \
           -preset slow \
           -an \
           -movflags +faststart \
           -y \
           "$output_file" 2>/dev/null
    
    # 获取压缩后文件大小
    if [ -f "$output_file" ]; then
        # 针对 macOS 使用 stat -f%z 获取字节大小
        orig_bytes=$(stat -f%z "$video")
        comp_bytes=$(stat -f%z "$output_file")
        
        if [ "$comp_bytes" -ge "$orig_bytes" ]; then
            echo "  ⚠ 警告: 压缩后体积未减小（或变大），还原为原始文件"
            cp "$video" "$output_file"
            compressed_size=$(ls -lh "$output_file" | awk '{print $5}')
            echo "  ✓ 已回退: $compressed_size"
        else
            compressed_size=$(ls -lh "$output_file" | awk '{print $5}')
            echo "  ✓ 完成: $compressed_size"
        fi
    else
        echo "  ✗ 压缩失败"
    fi
done

echo "================================"
echo "压缩完成！"
echo ""
echo "压缩前后对比："
echo "原始文件："
ls -lh "$INPUT_DIR"/*.mp4 | awk '{print $9, $5}'
echo ""
echo "压缩后文件："
ls -lh "$OUTPUT_DIR"/*.mp4 | awk '{print $9, $5}'
