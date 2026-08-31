'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar({ transparent = false }) {
  const pathname = usePathname()
  const isActive = (path) => pathname === path
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const { t, toggle } = useLanguage()

  const navLinks = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_about'), href: '/about' },
    { label: t('nav_specialties'), href: '/specialities' },
    { label: t('nav_doctors'), href: '/find-doctor' },
    { label: t('nav_health_packages'), href: '/health-packages' },
    { label: t('nav_gallery'), href: '/gallery' },
  ]

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  if (transparent) {
    return (
      <>
        <nav ref={navRef} className="bg-transparent py-3 px-4 md:px-8 flex justify-between items-center relative z-50">
          <Link href="/" className="flex items-center relative z-10">
            <img src="/logo.png" alt="NK Hospital" className="h-14 md:h-20 w-auto object-contain" />
          </Link>
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 text-sm font-medium text-white/90 w-max z-0">
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-white transition-colors whitespace-nowrap">{label}</Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3 relative z-10">
            <button onClick={toggle}
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/30 text-white/80 hover:bg-white/10 active:bg-white/20 transition-colors whitespace-nowrap">
              {t('lang_toggle')}
            </button>
            <a href="tel:9901573323" className="flex items-center gap-2 text-white/90 font-semibold text-sm">
              <i className="ph ph-phone text-white/70 text-lg"></i> 9901573323
            </a>
          </div>
          <button
            className="lg:hidden relative z-10 w-11 h-11 flex items-center justify-center text-white text-2xl rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}>
            <i className={menuOpen ? 'ph ph-x' : 'ph ph-list'}></i>
          </button>
          <MobileMenu links={navLinks} open={menuOpen} onClose={() => setMenuOpen(false)} dark={false}
            onToggleLang={toggle} langLabel={t('lang_toggle')} bookLabel={t('nav_book')} />
        </nav>
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setMenuOpen(false)} aria-hidden="true" />
        )}
      </>
    )
  }

  return (
    <>
      <nav ref={navRef} className="bg-white py-2 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <Link href="/">
          <img src="/logo-dark.png" alt="NK Hospital" className="h-14 md:h-20 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 text-[13px] font-semibold text-gray-700">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}
              className={`hover:text-[#1a3a6b] transition-colors whitespace-nowrap ${isActive(href) ? 'text-[#1a3a6b]' : ''}`}>
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggle}
            className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 hover:border-[#1a3a6b] hover:text-[#1a3a6b] active:bg-gray-50 transition-colors whitespace-nowrap">
            {t('lang_toggle')}
          </button>
          <a href="tel:9901573323" className="flex items-center gap-2 font-bold text-sm" style={{ color: '#1a3a6b' }}>
            <i className="ph ph-phone text-lg"></i> 9901573323
          </a>
          <Link href="/book-an-appointment"
            className="text-white px-5 py-2.5 rounded-md text-xs font-bold tracking-wide flex items-center gap-2 transition-colors shadow-sm hover:opacity-90"
            style={{ backgroundColor: '#1a3a6b' }}>
            <i className="ph ph-calendar-plus text-base"></i> {t('nav_book')}
          </Link>
        </div>
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center text-gray-700 text-2xl rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}>
          <i className={menuOpen ? 'ph ph-x' : 'ph ph-list'}></i>
        </button>
        <MobileMenu links={navLinks} open={menuOpen} onClose={() => setMenuOpen(false)} dark={true}
          onToggleLang={toggle} langLabel={t('lang_toggle')} bookLabel={t('nav_book')} />
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          style={{ top: '72px' }} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}

function MobileMenu({ links, open, onClose, dark, onToggleLang, langLabel, bookLabel }) {
  return (
    <div
      className={`
        absolute top-full left-0 right-0 z-50 shadow-xl border-t overflow-hidden
        transition-all duration-300 ease-in-out
        ${dark ? 'bg-white border-gray-100' : 'bg-[#002247] border-white/10'}
        ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}
      aria-hidden={!open}>
      <div className="flex flex-col py-2">
        {links.map(({ label, href }) => (
          <Link key={href} href={href} onClick={onClose}
            className={`px-6 py-3.5 text-sm font-semibold transition-colors active:opacity-70 ${dark
              ? 'text-gray-700 hover:text-[#1a3a6b] hover:bg-gray-50 active:bg-gray-100'
              : 'text-white/80 hover:text-white hover:bg-white/5 active:bg-white/10'}`}>
            {label}
          </Link>
        ))}
        <div className={`px-6 py-4 border-t mt-1 space-y-3 ${dark ? 'border-gray-100' : 'border-white/10'}`}>
          <a href="tel:9901573323"
            className="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-lg active:opacity-80 transition-colors"
            style={{ backgroundColor: '#1a3a6b' }}>
            <i className="ph ph-phone"></i> Consultation: 9901573323
          </a>
          <Link href="/book-an-appointment" onClick={onClose}
            className="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-lg active:opacity-80 transition-opacity"
            style={{ backgroundColor: '#1a3a6b' }}>
            <i className="ph ph-calendar-plus"></i> {bookLabel || 'Book Appointment'}
          </Link>
          <button onClick={() => { onToggleLang(); onClose() }}
            className={`w-full py-2.5 px-4 rounded-lg text-sm font-bold border transition-colors ${dark
              ? 'border-gray-200 text-gray-600 hover:border-[#1a3a6b] hover:text-[#1a3a6b]'
              : 'border-white/20 text-white/80 hover:bg-white/5'}`}>
            {langLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
