#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
图片优化脚本
使用Python内置库进行基本优化
"""

import os
import sys
from PIL import Image, ImageOps

def optimize_images():
    """优化所有图片文件"""
    images_dir = "images"
    
    if not os.path.exists(images_dir):
        print(f"目录 {images_dir} 不存在")
        return
    
    print("开始优化图片文件...")
    
    # 支持的图片格式
    supported_formats = ('.jpg', '.jpeg', '.png')
    
    total_original_size = 0
    total_optimized_size = 0
    
    for filename in os.listdir(images_dir):
        if filename.lower().endswith(supported_formats):
            filepath = os.path.join(images_dir, filename)
            
            try:
                # 获取原始文件大小
                original_size = os.path.getsize(filepath)
                total_original_size += original_size
                
                # 打开图片
                with Image.open(filepath) as img:
                    # 转换为RGB模式（如果是RGBA）
                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')
                    
                    # 创建优化版本
                    optimized_filename = f"opt_{filename}"
                    optimized_path = os.path.join(images_dir, optimized_filename)
                    
                    # 保存优化版本
                    if filename.lower().endswith(('.jpg', '.jpeg')):
                        # JPEG优化：质量85%，渐进式加载
                        img.save(optimized_path, 'JPEG', quality=85, optimize=True, progressive=True)
                    else:
                        # PNG优化
                        img.save(optimized_path, 'PNG', optimize=True)
                    
                    # 获取优化后文件大小
                    optimized_size = os.path.getsize(optimized_path)
                    total_optimized_size += optimized_size
                    
                    # 计算压缩率
                    compression_ratio = (1 - optimized_size / original_size) * 100
                    
                    print(f"优化 {filename}: {original_size/1024/1024:.2f}MB -> {optimized_size/1024/1024:.2f}MB (节省 {compression_ratio:.1f}%)")
                    
                    # 创建缩略图
                    if original_size > 500000:  # 大于500KB的图片创建缩略图
                        thumb_filename = f"thumb_{filename}"
                        thumb_path = os.path.join(images_dir, thumb_filename)
                        
                        # 创建缩略图（最大宽度800px）
                        img.thumbnail((800, 600), Image.Resampling.LANCZOS)
                        img.save(thumb_path, 'JPEG' if filename.lower().endswith(('.jpg', '.jpeg')) else 'PNG', 
                                quality=80, optimize=True)
                        
                        thumb_size = os.path.getsize(thumb_path)
                        print(f"  缩略图 {thumb_filename}: {thumb_size/1024/1024:.2f}MB")
                
            except Exception as e:
                print(f"处理 {filename} 时出错: {e}")
    
    print(f"\n优化完成！")
    print(f"原始总大小: {total_original_size/1024/1024:.2f}MB")
    print(f"优化后总大小: {total_optimized_size/1024/1024:.2f}MB")
    print(f"总共节省: {(1 - total_optimized_size/total_original_size)*100:.1f}%")

if __name__ == "__main__":
    optimize_images()