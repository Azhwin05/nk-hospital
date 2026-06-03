import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const images = [
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop', caption: 'Main Building' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop', caption: 'Operation Theatre' },
  { src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800&auto=format&fit=crop', caption: 'ICU & Critical Care' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop', caption: 'Diagnostic Lab' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=800&auto=format&fit=crop', caption: 'Patient Rooms' },
  { src: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop', caption: 'Pharmacy' },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop', caption: 'Radiology Centre' },
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop', caption: 'Emergency Department' },
  { src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop', caption: 'Consultation Room' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a5f, #0f4c81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Gallery</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">A glimpse into our world-class facilities</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link to="/" className="flex items-center gap-1.5 hover:text-[#0f4c81] text-gray-400"><i className="ph ph-house text-sm"></i> Home</Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#0f4c81' }}>Gallery</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map(({ src, caption }, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer aspect-video bg-gray-100"
              onClick={() => setLightbox(i)}>
              <img src={src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={caption} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <span className="text-white text-xs font-bold px-4 py-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{caption}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"><i className="ph ph-x"></i></button>
          <button className="absolute left-4 text-white text-3xl hover:text-gray-300" onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + images.length) % images.length) }}><i className="ph ph-caret-left"></i></button>
          <img src={images[lightbox].src} className="max-h-[85vh] max-w-full rounded-xl shadow-2xl" alt={images[lightbox].caption} onClick={e => e.stopPropagation()} />
          <button className="absolute right-4 text-white text-3xl hover:text-gray-300" onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % images.length) }}><i className="ph ph-caret-right"></i></button>
          <p className="absolute bottom-6 text-white text-sm font-semibold">{images[lightbox].caption}</p>
        </div>
      )}

      <Footer />
    </div>
  )
}
