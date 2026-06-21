'use client'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function TopBarDark() {
  const { t } = useLanguage()
  return (
    <div style={{ backgroundColor: '#002247' }} className="text-white text-xs py-1.5 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <i className="ph-fill ph-ambulance text-red-500 text-lg"></i>
        <span>{t('topbar_ambulance')} : <a href="tel:9353957095" className="font-bold text-white hover:text-white/80 transition-colors">9353957095</a></span>
        <span className="hidden sm:inline text-white/40 mx-1">|</span>
        <span className="hidden sm:inline">Consultation : <a href="tel:9901573323" className="font-bold text-white hover:text-white/80 transition-colors">9901573323</a></span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="/careers" className="hover:text-gray-300">{t('topbar_careers')}</a>
        <a href="#" className="hover:text-gray-300">{t('topbar_events')}</a>
        <Link href="/contact" className="hover:text-gray-300">{t('topbar_contact')}</Link>
        <Link href="/blog" className="hover:text-gray-300">{t('topbar_blogs')}</Link>
      </div>
    </div>
  )
}
