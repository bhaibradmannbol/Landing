import { useLanguage } from '@/context/language-context'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="text-xl font-bold text-white">HausPet</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t('footerDesc')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">{t('product')}</h4>
            <div className="flex flex-col gap-2">
              <a href="#features" className="text-white/60 hover:text-white text-sm transition-colors">{t('features')}</a>
              <a href="#how-it-works" className="text-white/60 hover:text-white text-sm transition-colors">{t('howItWorks')}</a>
              <a href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors">{t('pricing')}</a>
              <a href="#faq" className="text-white/60 hover:text-white text-sm transition-colors">{t('faq')}</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">{t('company')}</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">{t('about')}</a>
              <a href="#blog" className="text-white/60 hover:text-white text-sm transition-colors">{t('blog')}</a>
              <a href="#careers" className="text-white/60 hover:text-white text-sm transition-colors">{t('careers')}</a>
              <a href="#press" className="text-white/60 hover:text-white text-sm transition-colors">{t('press')}</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">{t('legal')}</h4>
            <div className="flex flex-col gap-2">
              <a href="#privacy" className="text-white/60 hover:text-white text-sm transition-colors">{t('privacyPolicy')}</a>
              <a href="#terms" className="text-white/60 hover:text-white text-sm transition-colors">{t('termsOfService')}</a>
              <a href="#hipaa" className="text-white/60 hover:text-white text-sm transition-colors">{t('hipaaCompliance')}</a>
              <a href="mailto:hello@hauspet.app" className="text-white/60 hover:text-white text-sm transition-colors">{t('contact')}</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-white/60 text-sm">
              {t('allRightsReserved')}
            </p>
            <div className="flex gap-6">
              <a href="https://twitter.com/hauspet" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Twitter</a>
              <a href="https://linkedin.com/company/hauspet" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="https://instagram.com/hauspet" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="mailto:hello@hauspet.app" className="text-white/60 hover:text-white transition-colors text-sm">{t('emailUs')}</a>
            </div>
          </div>
          <p className="text-center text-sm text-white/60">
            {t('footerTagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
