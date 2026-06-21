'use client'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

const packages = [
  {
    name: 'Routine Health Checkup',
    icon: 'ph ph-heart-pulse',
    color: 'text-rose-500 bg-rose-50',
    tiers: [
      { label: 'Basic',     price: '₹1,800' },
      { label: 'Executive', price: '₹4,410' },
      { label: 'Master',    price: '₹7,200' },
    ],
  },
  {
    name: 'Diabetes Profile',
    icon: 'ph ph-drop',
    color: 'text-amber-500 bg-amber-50',
    tiers: [
      { label: 'Basic',    price: '₹900'   },
      { label: 'Advanced', price: '₹3,870' },
    ],
  },
  {
    name: 'Hypertension Profile',
    icon: 'ph ph-activity',
    color: 'text-red-500 bg-red-50',
    tiers: [
      { label: 'Basic',    price: '₹1,575' },
      { label: 'Advanced', price: '₹3,060' },
    ],
  },
  {
    name: 'Infertility Profile',
    icon: 'ph ph-gender-intersex',
    color: 'text-pink-500 bg-pink-50',
    tiers: [
      { label: 'Male',   price: '₹4,050' },
      { label: 'Female', price: '₹5,400' },
    ],
  },
  {
    name: 'Cardiac Risk Profile',
    icon: 'ph ph-heartbeat',
    color: 'text-red-600 bg-red-50',
    tiers: [
      { label: 'Basic',    price: '₹1,305' },
      { label: 'Advanced', price: '₹3,645' },
    ],
  },
  {
    name: 'Thyroid Profile',
    icon: 'ph ph-thermometer',
    color: 'text-blue-500 bg-blue-50',
    tiers: [
      { label: 'Basic',    price: '₹450'   },
      { label: 'Advanced', price: '₹3,510' },
    ],
  },
  {
    name: 'Fitness Profile — Fit Track',
    icon: 'ph ph-person-simple-run',
    color: 'text-emerald-600 bg-emerald-50',
    tiers: [
      { label: 'Basic', price: '₹2,025' },
      { label: 'Plus',  price: '₹3,240' },
      { label: 'Pro',   price: '₹1,530' },
    ],
  },
  {
    name: 'Geriatric Profile — Fit Track',
    icon: 'ph ph-users',
    color: 'text-indigo-500 bg-indigo-50',
    tiers: [
      { label: 'Basic', price: '₹5,355' },
      { label: 'Plus',  price: '₹1,030' },
    ],
  },
]

export default function HealthPackages() {
  const { t } = useLanguage()

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{t('hp_heading')}</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">{t('hp_sub')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>{t('hp_breadcrumb')}</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>{t('hp_eyebrow')}</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('hp_choose')}</h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{t('hp_desc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map(({ name, icon, color, tiers }) => (
            <div key={name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${color}`}>
                <i className={icon}></i>
              </div>
              <h3 className="text-sm font-bold mb-4 leading-snug" style={{ color: '#1a3a6b' }}>{name}</h3>

              <div className="flex flex-col gap-2 flex-1">
                {tiers.map(({ label, price }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-50 border border-gray-100">
                    <span className="text-xs font-semibold text-gray-500">{label}</span>
                    <span className="text-sm font-extrabold" style={{ color: '#1a3a6b' }}>{price}</span>
                  </div>
                ))}
              </div>

              <Link href="/book" className="mt-5 w-full text-center text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a3a6b' }}>
                {t('hp_book_now')}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
