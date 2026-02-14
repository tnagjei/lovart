import json
import os

locales = ['en', 'zh', 'fr', 'ja']
base_path = '/Users/tangjei/Documents/建站/工具站/lovart/src/locales'

cta_data = {
    'en': {
        'hero_cta': 'Explore Features',
        'cta_section': {
            'title': 'Ready to Unlock Your Creative Potential?',
            'desc': 'Join 800k+ creators and start designing with the world\'s first Design Agent.',
            'button': 'Get Started for Free'
        }
    },
    'zh': {
        'hero_cta': '探索功能',
        'cta_section': {
            'title': '准备好释放你的创意潜能了吗？',
            'desc': '加入 80万+ 创作者行列，开始使用全球首款设计智能体（Design Agent）进行设计。',
            'button': '免费开始使用'
        }
    },
    'fr': {
        'hero_cta': 'Explorer les fonctionnalités',
        'cta_section': {
            'title': 'Prêt à libérer votre potentiel créatif ?',
            'desc': 'Rejoignez plus de 800 000 créateurs et commencez à concevoir avec le premier Agent de Design au monde.',
            'button': 'Commencer gratuitement'
        }
    },
    'ja': {
        'hero_cta': '機能を探索する',
        'cta_section': {
            'title': 'あなたの創造的な可能性を解き放つ準備はできていますか？',
            'desc': '80万人以上のクリエイターに加わり、世界初のデザインエージェントでデザインを開始しましょう。',
            'button': '無料で始める'
        }
    }
}

for lang in locales:
    file_path = f"{base_path}/{lang}.json"
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if 'about_page' not in data:
        continue
        
    # Add Hero CTA
    data['about_page']['hero']['cta_features'] = cta_data[lang]['hero_cta']
    
    # Add CTA Section
    data['about_page']['cta_conversion'] = cta_data[lang]['cta_section']
    
    # Also ensure About is in nav if not already (it is usually there in t.nav.about)
    if 'nav' not in data:
        data['nav'] = {}
    if 'about' not in data['nav']:
        if lang == 'en': data['nav']['about'] = 'About Us'
        elif lang == 'zh': data['nav']['about'] = '关于我们'
        elif lang == 'fr': data['nav']['about'] = 'À propos'
        elif lang == 'ja': data['nav']['about'] = '私たちについて'

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

print("Locale update for internal linking complete.")
