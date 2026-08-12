'use client'
import { useState } from 'react'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

const CLOUD = 'dmhonzqrm'
const thumb = (id) => `https://res.cloudinary.com/${CLOUD}/image/upload/w_800,f_webp,q_80/${id}.jpg`
const full  = (id) => `https://res.cloudinary.com/${CLOUD}/image/upload/w_1400,f_webp,q_85/${id}.jpg`

const images = [
  // Latest uploads (2026-08-06)
  { id: '09_bkwb0e',  caption: 'NK Hospital' },
  { id: '010_nyygfx', caption: 'NK Hospital' },
  { id: '011_ulrhf8', caption: 'NK Hospital' },
  { id: '012_tnf1fo', caption: 'NK Hospital' },
  { id: 'IMG_1086.JPG_vrgmrr', caption: 'NK Hospital' },
  { id: '2_uegntc',  caption: 'NK Hospital' },
  { id: '3_c9k2ur',  caption: 'NK Hospital' },
  { id: 'IMG_0970.JPG_xavp8x', caption: 'NK Hospital' },
  { id: '5_ifqb9f',  caption: 'NK Hospital' },
  { id: '6_ptwssg',  caption: 'NK Hospital' },
  { id: '7_ohhgzt',  caption: 'NK Hospital' },
  { id: '8_lipodh',  caption: 'NK Hospital' },
  { id: '9_yd4pdd',  caption: 'NK Hospital' },
  { id: '10_f5hrbs', caption: 'NK Hospital' },
  { id: '11_n4ry5t', caption: 'NK Hospital' },
  { id: '12_bu4vad', caption: 'NK Hospital' },
  { id: 'IMG_0976.JPG_rmnq4y', caption: 'NK Hospital' },
  { id: '01_un9ozg', caption: 'NK Hospital' },
  { id: '02_lxpqeu', caption: 'NK Hospital' },
  { id: '03_yv4ljz', caption: 'NK Hospital' },
  { id: '04_eneesx', caption: 'NK Hospital' },
  { id: '05_lzoghs', caption: 'NK Hospital' },
  { id: '06_v6wp8z', caption: 'NK Hospital' },
  { id: '07_meh9dn', caption: 'NK Hospital' },
  { id: '08_kquaqx', caption: 'NK Hospital' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const { t } = useLanguage()

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{t('gallery_heading')}</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">{t('gallery_sub')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>{t('gallery_heading')}</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(({ id, caption }, i) => (
            <div key={id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer aspect-video bg-gray-100"
              onClick={() => setLightbox(i)}>
              <img
                src={thumb(id)}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={caption}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <span className="text-white text-xs font-bold px-4 py-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <i className="ph ph-magnifying-glass-plus mr-1"></i> View
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10">
            <i className="ph ph-x"></i>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + images.length) % images.length) }}>
            <i className="ph ph-caret-left"></i>
          </button>
          <img
            src={full(images[lightbox].id)}
            className="max-h-[88vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            alt={images[lightbox].caption}
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % images.length) }}>
            <i className="ph ph-caret-right"></i>
          </button>
          <p className="absolute bottom-5 text-white/70 text-xs font-semibold">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}

      <Footer />
    </div>
  )
}
