#!/bin/bash

# 更新HTML文件以使用优化后的视频
echo "开始更新HTML文件中的视频引用..."

# 备份原文件
cp index.html index.html.backup_videos

echo "已备份原文件为 index.html.backup_videos"

# 检查优化后的视频文件是否存在
optimized_videos=("opt_01.mp4" "opt_03.mp4" "opt_07.mp4" "opt_02.mp4")

echo "检查优化后的视频文件..."
for video in "${optimized_videos[@]}"; do
    if [ -f "images/$video" ]; then
        echo "  ✓ $video 存在"
        # 替换视频引用
        original="${video#opt_}"
        sed -i "s|images/$original|images/$video|g" index.html
        echo "  → 已替换 $original 为 $video"
    else
        echo "  ✗ $video 不存在，跳过"
    fi
done

echo
echo "=== 替换统计 ==="
echo "当前视频引用:"
grep -o 'images/.*\.mp4' index.html | sort | uniq -c | sort -nr

echo
echo "=== 文件大小对比 ==="
echo "原始视频总大小: $(du -ch images/*.mp4 | grep total | cut -f1)"
echo "优化视频总大小: $(du -ch images/opt_*.mp4 | grep total | cut -f1)"

echo
echo "=== 下一步建议 ==="
echo "1. 如果还有视频未压缩，请继续压缩"
echo "2. 测试网站功能，确保视频正常播放"
echo "3. 检查页面加载速度是否改善"
echo "4. 考虑进一步压缩图片文件"

echo
echo "=== 最终优化目标 ==="
echo "• 图片: 4.6MB → 2.3MB (50%进一步压缩)"
echo "• 视频: 18MB → 3.6MB (80%压缩)"
echo "• 总计: 32.2MB → 11.5MB (64%减少)"