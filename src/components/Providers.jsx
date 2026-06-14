'use client'
import { LanguageProvider } from '@/context/LanguageContext'
import StickyEmergencyBar from '@/components/StickyEmergencyBar'
import FloatingBookButton from '@/components/FloatingBookButton'
import ScrollToTop from '@/components/ScrollToTop'

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <StickyEmergencyBar />
      <FloatingBookButton />
      {children}
    </LanguageProvider>
  )
}
