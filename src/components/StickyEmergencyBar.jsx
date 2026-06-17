'use client'
import { useLanguage } from '@/context/LanguageContext'

export default function StickyEmergencyBar() {
  const { t } = useLanguage()
  return (
    <a
      href="tel:9353957095"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white text-sm font-bold py-3 transition-colors"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
      <i className="ph-fill ph-siren text-base animate-pulse"></i>
      {t('sticky_emergency')}
      <i className="ph ph-arrow-right text-sm"></i>
    </a>
  )
}
