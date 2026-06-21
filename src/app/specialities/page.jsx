'use client'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { slugMap } from '@/data/specialitiesData'
import { IconRender } from '@/components/SpecialtyIcon'
import { useLanguage } from '@/context/LanguageContext'

const specialities = [
  { icon: 'ph ph-heartbeat', name: 'Cardiology' },
  { icon: 'svg:stomach', name: 'Medical Gastroenterology' },
  { icon: 'svg:scalpel', name: 'Surgical Gastroenterology' },
  { icon: 'ph ph-dna', name: 'Medical Oncology' },
  { icon: 'ph ph-bandaids', name: 'Surgical Oncology' },
  { icon: 'ph ph-brain', name: 'Neurology' },
  { icon: 'ph ph-knife', name: 'Neurosurgery' },
  { icon: 'ph ph-ear', name: 'ENT' },
  { icon: 'ph ph-bone', name: 'Orthopedics' },
  { icon: 'ph ph-baby', name: 'Pediatrics' },
  { icon: 'ph ph-eye', name: 'Ophthalmology' },
  { icon: 'ph ph-person', name: 'Dermatology' },
  { icon: 'ph ph-funnel', name: 'Urology' },
  { icon: 'ph ph-drop', name: 'Nephrology' },
  { icon: 'svg:lungs', name: 'Pulmonology' },
  { icon: 'ph ph-thermometer', name: 'Endocrinology' },
  { icon: 'ph ph-hand', name: 'Rheumatology' },
  { icon: 'ph ph-users', name: 'Psychiatry' },
  { icon: 'ph ph-gender-female', name: 'Gynecology' },
  { icon: 'ph ph-stethoscope', name: 'General Medicine' },
  { icon: 'ph ph-first-aid-kit', name: 'General Surgery' },
  { icon: 'ph ph-person-arms-spread', name: 'Plastic Surgery' },
  { icon: 'ph ph-activity', name: 'Vascular Surgery' },
  { icon: 'ph ph-siren', name: 'Critical Care Medicine' },
  { icon: 'ph ph-ambulance', name: 'Emergency Medicine' },
]

export default function Specialities() {
  const { t } = useLanguage()
  const specNames = t('spec_names') || {}

  return (
    <div className="antialiased text-gray-800 bg-white">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-12 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #002247, #1a3a6b)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">{t('spec_page_heading')}</h1>
          <div className="text-xs text-blue-200">
            <Link href="/" className="hover:text-white">{t('common_home')}</Link> / <span className="text-white">{t('spec_page_heading')}</span>
          </div>
        </div>
      </div>

      <main className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a3a6b' }}>{t('spec_page_domains')}</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">{t('spec_page_sub')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {specialities.map(({ icon, name }) => {
              const slug = slugMap[name]
              const hasPage = !!slug
              const displayName = specNames[name] || name
              const content = (
                <>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[#1a3a6b] transition-colors shrink-0 ${hasPage ? 'bg-blue-50 group-hover:bg-[#1a3a6b] group-hover:text-white' : 'bg-gray-50'}`}>
                    <IconRender icon={icon} className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-gray-800 leading-snug block">{displayName}</span>
                    {hasPage && <span className="text-[10px] text-[#1a3a6b] font-semibold">{t('spec_page_view_details')}</span>}
                  </div>
                </>
              )
              return hasPage ? (
                <Link key={name} href={`/specialities/${slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:border-[#1a3a6b] hover:shadow-md transition-all group">
                  {content}
                </Link>
              ) : (
                <div key={name} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
