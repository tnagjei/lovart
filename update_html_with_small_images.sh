#!/bin/bash

# HTML文件优化脚本
# 将大图片引用替换为小版本

echo "开始优化HTML文件中的图片引用..."

# 备份原文件
cp index.html index.html.backup

echo "已备份原文件为 index.html.backup"

# 替换策略：
# 1. 首页大图使用小版本
# 2. 功能展示图片使用小版本
# 3. 头像使用小版本
# 4. 保持懒加载和响应式设计

echo "正在替换图片引用..."

# 使用sed进行批量替换
sed -i 's|images/01.jpg|images/small_01.jpg|g' index.html
sed -i 's|images/03.jpg|images/small_03.jpg|g' index.html
sed -i 's|images/04.jpg|images/small_04.jpg|g' index.html
sed -i 's|images/05.jpg|images/small_05.jpg|g' index.html
sed -i 's|images/06.jpg|images/small_06.jpg|g' index.html
sed -i 's|images/07.jpg|images/small_07.jpg|g' index.html
sed -i 's|images/08.jpg|images/small_08.jpg|g' index.html
sed -i 's|images/09.jpg|images/small_09.jpg|g' index.html
sed -i 's|images/10.jpg|images/small_10.jpg|g' index.html
sed -i 's|images/11.jpg|images/small_11.jpg|g' index.html

echo "替换完成！"

# 显示替换统计
echo "=== 替换统计 ==="
echo "已替换的图片文件:"
grep -o 'images/small_[0-9]*\.jpg' index.html | sort | uniq -c | sort -nr

echo
echo "=== 文件大小对比 ==="
echo "替换前图片总大小: $(du -ch images/*.jpg | grep total | cut -f1)"
echo "替换后图片总大小: $(du -ch images/small_*.jpg | grep total | cut -f1)"

echo
echo "=== 下一步建议 ==="
echo "1. 手动压缩以下大文件:"
echo "   - images/01.mp4 (8.7M)"
echo "   - images/03.mp4 (3.0M)"
echo "   - images/07.mp4 (1.3M)"
echo "   - images/02.mp4 (1.1M)"
echo
echo "2. 访问 https://cloudconvert.com/mp4-compressor 压缩视频"
echo "3. 压缩后重命名为 opt_原文件名"
echo
echo "4. 测试网站加载速度"