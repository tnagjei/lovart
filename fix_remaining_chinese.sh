#!/bin/bash

# 修复剩余的中文文本
echo "开始修复剩余的中文文本..."

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

# 修复每个文件
for file in "${files_to_fix[@]}"; do
    if [ -f "$file" ]; then
        echo "正在修复 $file..."
        
        # 修复剩余的中文文本
        sed -i 's/About我们/About Us/g' "$file"
        sed -i 's/用户协议/Terms of Service/g' "$file"
        sed -i 's/隐私政策/Privacy Policy/g' "$file"
        sed -i 's/公司/Company/g' "$file"
        sed -i 's/产品/Products/g' "$file"
        sed -i 's/联系/Contact/g' "$file"
        
        echo "✓ 已修复 $file"
    fi
done

echo
echo "=== 额外修复完成 ==="
echo "已修复的文本:"
echo "• About我们 → About Us"
echo "• 用户协议 → Terms of Service"
echo "• 隐私政策 → Privacy Policy"
echo "• 公司 → Company"
echo "• 产品 → Products"
echo "• 联系 → Contact"

echo
echo "=== 注意事项 ==="
echo "• 此脚本修复了页脚和其他区域的中文文本"
echo "• 页面主要内容可能仍需要手动翻译"
echo "• 建议全面检查网站内容"