'use client'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function TopBar() {
  const { t } = useLanguage()
  return (
    <div className="bg-black/20 border-b border-white/10 text-white text-[11px] py-1.5 px-4 md:px-8 flex justify-between items-center backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <i className="ph-fill ph-phone text-white/70 text-lg"></i>
        <span>Consultation : <a href="tel:9901573323" className="font-bold text-white hover:text-white/80 transition-colors">9901573323</a></span>
      </div>
      <div className="hidden md:flex items-center gap-4 text-white/90">
        <a href="/careers" className="hover:text-white transition-colors">{t('topbar_careers')}</a>
        <a href="#" className="hover:text-white transition-colors">{t('topbar_events')}</a>
        <Link href="/contact" className="hover:text-white transition-colors">{t('topbar_contact')}</Link>
        <Link href="/blog" className="hover:text-white transition-colors">{t('topbar_blogs')}</Link>
      </div>
    </div>
  )
}
