#!/bin/bash

# 修复多语言问题 - 将中文导航改为英文
echo "开始修复多语言问题..."

# 需要修复的文件列表
files_to_fix=(
    "index.html"
    "about.html"
    "help.html"
    "blog.html"
    "lovart-pricing.html"
    "lovart-design-features.html"
    "lovart-api.html"
    "lovart-free.html"
    "lovart-ai-code.html"
)

# 创建备份
for file in "${files_to_fix[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "$file.backup_lang"
        echo "已备份 $file 为 $file.backup_lang"
    fi
done

echo
echo "开始修复导航栏中文文本..."

# 修复每个文件
for file in "${files_to_fix[@]}"; do
    if [ -f "$file" ]; then
        echo "正在修复 $file..."
        
        # 使用sed进行批量替换
        sed -i 's/首页/Home/g' "$file"
        sed -i 's/功能/Features/g' "$file"
        sed -i 's/定价/Pricing/g' "$file"
        sed -i 's/博客/Blog/g' "$file"
        sed -i 's/帮助/Help/g' "$file"
        sed -i 's/关于/About/g' "$file"
        sed -i 's/开始使用/Get Started/g' "$file"
        
        echo "✓ 已修复 $file"
    fi
done

echo
echo "=== 修复完成 ==="
echo "已修复的文件:"
for file in "${files_to_fix[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    fi
done

echo
echo "=== 修复内容 ==="
echo "• 首页 → Home"
echo "• 功能 → Features"
echo "• 定价 → Pricing"
echo "• 博客 → Blog"
echo "• 帮助 → Help"
echo "• 关于 → About"
echo "• 开始使用 → Get Started"

echo
echo "=== 验证修复 ==="
echo "请检查网站导航栏是否已显示为英文"
echo "如果发现问题，可以使用备份文件恢复:"
echo "  cp 文件名.backup_lang 文件名"

echo
echo "=== 注意事项 ==="
echo "• 此脚本只修复导航栏文本"
echo "• 页面内容可能仍需要手动翻译"
echo "• 建议检查页面标题和meta标签"