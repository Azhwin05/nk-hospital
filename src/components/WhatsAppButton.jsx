'use client'
import { usePathname } from 'next/navigation'

export default function WhatsAppButton() {
  const pathname = usePathname()
  if (pathname === '/book-an-appointment') return null
  return (
    <a
      href="https://wa.me/919901573323"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 sm:right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
      style={{ backgroundColor: '#25D366', bottom: 'calc(7rem + env(safe-area-inset-bottom, 0px))' }}>
      <i className="ph-fill ph-whatsapp-logo text-white text-2xl"></i>
    </a>
  )
}
