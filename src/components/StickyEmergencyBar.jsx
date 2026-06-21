'use client'
import { useLanguage } from '@/context/LanguageContext'

export default function StickyEmergencyBar() {
  const { t } = useLanguage()
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <a href="tel:9353957095"
        className="flex-1 flex items-center justify-center gap-1.5 bg-red-600 active:bg-red-700 text-white text-xs font-bold py-3 transition-colors border-r border-red-700">
        <i className="ph-fill ph-siren text-sm animate-pulse"></i> 9353957095
      </a>
      <a href="tel:9187966774"
        className="flex-1 flex items-center justify-center gap-1.5 bg-red-600 active:bg-red-700 text-white text-xs font-bold py-3 transition-colors">
        <i className="ph-fill ph-ambulance text-sm"></i> 9187966774
      </a>
    </div>
  )
}
