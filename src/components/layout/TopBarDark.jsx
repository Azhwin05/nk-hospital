'use client'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function TopBarDark() {
  const { t } = useLanguage()
  return (
    <div style={{ backgroundColor: '#002247' }} className="text-white text-xs py-1.5 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <i className="ph-fill ph-ambulance text-red-500 text-lg"></i>
        <span>{t('topbar_ambulance')} : <a href="tel:08040123456" className="font-bold text-white hover:text-white/80 transition-colors">08040-123456</a></span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="hover:text-gray-300">{t('topbar_careers')}</a>
        <a href="#" className="hover:text-gray-300">{t('topbar_events')}</a>
        <Link href="/contact" className="hover:text-gray-300">{t('topbar_contact')}</Link>
        <Link href="/blog" className="hover:text-gray-300">{t('topbar_blogs')}</Link>
      </div>
    </div>
  )
}
