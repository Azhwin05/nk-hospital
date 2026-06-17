'use client'
import { LanguageProvider } from '@/context/LanguageContext'
import StickyEmergencyBar from '@/components/StickyEmergencyBar'
import FloatingBookButton from '@/components/FloatingBookButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <StickyEmergencyBar />
      <WhatsAppButton />
      <FloatingBookButton />
      {children}
    </LanguageProvider>
  )
}
