'use client'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { blogPosts } from '@/data/blogData'

export default function Blog() {
  const { t } = useLanguage()

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{t('footer_blogs')}</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">{t('blog_sub')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>{t('footer_blogs')}</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(({ slug, title, category, date, img, excerpt }) => (
            <Link key={slug} href={`/blog/${slug}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden flex flex-col group">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={title} loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{category}</span>
                  <span className="text-[10px] text-gray-400">{date}</span>
                </div>
                <h2 className="text-sm font-bold leading-snug mb-2" style={{ color: '#1a3a6b' }}>{title}</h2>
                <p className="text-[12px] text-gray-500 leading-relaxed flex-1">{excerpt}</p>
                <span className="mt-4 text-[11px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#1a3a6b' }}>
                  {t('blog_read_more')} <i className="ph ph-arrow-right text-xs"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
