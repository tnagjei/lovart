#!/bin/bash

# 视频压缩指南脚本
# 为用户提供详细的视频压缩步骤

echo "=== Lovart网站视频压缩指南 ==="
echo "当前时间: $(date)"
echo

# 显示当前视频文件状态
echo "当前视频文件大小统计:"
echo "视频文件总大小: $(du -ch images/*.mp4 | grep total | cut -f1)"
echo

# 分析各个视频文件
echo "=== 视频文件分析 ==="
echo "需要优先压缩的大文件:"
for video in images/*.mp4; do
    if [ -f "$video" ]; then
        size=$(du -h "$video" | cut -f1)
        filename=$(basename "$video")
        echo "  - $filename ($size)"
    fi
done | sort -k2 -hr

echo
echo "=== 压缩建议 ==="
echo "1. 在线压缩工具推荐:"
echo "   - https://cloudconvert.com/mp4-compressor (推荐)"
echo "   - https://www.freeconvert.com/video-compressor"
echo "   - https://online-video-cutter.com/cn/compress-video"
echo

echo "2. 压缩参数建议:"
echo "   - 分辨率: 720p (1280x720) 足够"
echo "   - 码率: 1-2 Mbps"
echo "   - 帧率: 30 fps"
echo "   - 格式: MP4 (H.264)"
echo

echo "3. 优先级排序:"
echo "   高优先级: 01.mp4 (8.7M), 03.mp4 (3.0M)"
echo "   中优先级: 07.mp4 (1.3M), 02.mp4 (1.1M)"
echo "   低优先级: 其他小文件"
echo

echo "4. 压缩后命名规则:"
echo "   - 压缩后的文件重命名为: opt_原文件名"
echo "   - 例如: opt_01.mp4, opt_03.mp4"
echo

echo "=== 预期效果 ==="
echo "当前视频总大小: 18MB"
echo "目标视频总大小: < 5MB"
echo "预期减少: 70-80%"
echo

echo "=== 操作步骤 ==="
echo "1. 访问 https://cloudconvert.com/mp4-compressor"
echo "2. 上传 01.mp4 (8.7M)"
echo "3. 设置压缩参数: 720p, 1.5 Mbps"
echo "4. 下载并重命名为 opt_01.mp4"
echo "5. 重复步骤处理其他视频"
echo "6. 压缩完成后运行: bash update_html_with_optimized_videos.sh"
echo

echo "=== 注意事项 ==="
echo "• 压缩前备份原文件"
echo "• 测试压缩后的视频质量"
echo "• 确保音频同步"
echo "• 检查文件完整性"