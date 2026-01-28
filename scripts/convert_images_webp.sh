#!/bin/bash
# 图片转 WebP 脚本 - 使用 cwebp 转换所有 JPG/PNG 图片
# 压缩参数：quality 80

INPUT_DIR="public/images"
OUTPUT_DIR="public/images/optimized"

mkdir -p "$OUTPUT_DIR"

echo "开始转换图片为 WebP..."
echo "================================"

for img in "$INPUT_DIR"/*.{jpg,png}; do
    [ -e "$img" ] || continue
    filename=$(basename "$img")
    name="${filename%.*}"
    extension="${filename##*.}"
    output_file="$OUTPUT_DIR/$name.webp"
    
    # 获取原始文件大小
    original_size=$(ls -lh "$img" | awk '{print $5}')
    
    echo "转换中: $filename ($original_size) -> $name.webp"
    
    # cwebp 转换命令
    # -q 80: 质量 80
    # -m 6: 慢速但压缩率更好
    cwebp -q 80 -m 6 "$img" -o "$output_file" >/dev/null 2>&1
    
    # 获取转换后文件大小
    if [ -f "$output_file" ]; then
        compressed_size=$(ls -lh "$output_file" | awk '{print $5}')
        echo "  ✓ 完成: $compressed_size"
    else
        echo "  ✗ 转换失败"
    fi
done

echo "================================"
echo "转换完成！"
echo ""
echo "转换后文件列表："
ls -lh "$OUTPUT_DIR"/*.webp | awk '{print $9, $5}'
