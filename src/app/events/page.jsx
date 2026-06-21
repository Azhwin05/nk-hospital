'use client'
import Link from 'next/link'
import { useState } from 'react'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

const events = [
  {
    img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/ee85070e-38d5-4ed1-8d30-8e809f8cc5f2_nwgtzb.jpg',
    title: 'NK Hospital Conference',
    date: '2026',
    tag: 'Conference',
  },
]

export default function Events() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Conferences &amp; Events</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">Stay updated with NK Hospital's latest medical conferences, health camps, and community events.</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>Conferences &amp; Events</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        {events.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-3xl">
              <i className="ph ph-calendar-blank"></i>
            </div>
            <h3 className="text-base font-bold text-gray-700 mb-1">No events yet</h3>
            <p className="text-xs text-gray-400">Check back soon for upcoming conferences and events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(({ img, title, date, tag }, i) => (
              <div key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                onClick={() => setLightbox(i)}>
                <div className="relative overflow-hidden aspect-video">
                  <img src={img} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={title} />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: '#1a3a6b' }}>
                      {tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <i className="ph ph-magnifying-glass-plus text-[#1a3a6b]"></i>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold mb-1 leading-snug" style={{ color: '#1a3a6b' }}>{title}</h3>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1">
                    <i className="ph ph-calendar-blank"></i> {date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10">
            <i className="ph ph-x"></i>
          </button>
          {events.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
                onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + events.length) % events.length) }}>
                <i className="ph ph-caret-left"></i>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
                onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % events.length) }}>
                <i className="ph ph-caret-right"></i>
              </button>
            </>
          )}
          <img src={events[lightbox].img}
            className="max-h-[88vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            alt={events[lightbox].title}
            onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-5 text-white/80 text-xs font-semibold">{events[lightbox].title}</p>
        </div>
      )}

      <Footer />
    </div>
  )
}
