'use client'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { specialitiesData } from '@/data/specialitiesData'
import { IconRender } from '@/components/SpecialtyIcon'
import { useLanguage } from '@/context/LanguageContext'

const TABS = [
  { key: 'Overview',   seg: 'overview',   labelKey: 'sd_tab_overview' },
  { key: 'Conditions', seg: 'conditions', labelKey: 'sd_tab_conditions' },
  { key: 'Treatments', seg: 'treatments', labelKey: 'sd_tab_treatments' },
  { key: 'Doctors',    seg: 'doctors',    labelKey: 'sd_tab_doctors' },
  { key: 'FAQs',       seg: 'faqs',       labelKey: 'sd_tab_faqs' },
]

export default function SpecialityDetail() {
  const { slug, section } = useParams()
  const data = specialitiesData[slug]
  const { t } = useLanguage()

  // The active tab is driven by the URL segment (…/[slug]/overview, /conditions …)
  // so each tab is a real, shareable page rather than in-page state.
  const seg = Array.isArray(section) ? section[0] : section
  const matched = TABS.find(tb => tb.seg === seg)
  const tab = matched ? matched.key : 'Overview'

  useEffect(() => {
    const base = 'NK Hospital Kalaburagi | Multi Super-Specialty Hospital'
    if (data) document.title = `${data.name} | NK Hospital Kalaburagi`
    return () => { document.title = base }
  }, [data])

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500 mb-4">{t('sd_not_found')}</p>
        <Link href="/specialities" className="text-[#1a3a6b] font-bold hover:underline">{t('sd_back')}</Link>
      </div>
    )
  }

  const visibleTabs = TABS.filter(tabObj => {
    if (tabObj.key === 'FAQs' && (!data.faqs || data.faqs.length === 0)) return false
    return true
  })

  return (
    <div className="antialiased text-gray-800 bg-white min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-8 md:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">{t('common_home')}</Link>
            <span>/</span>
            <Link href="/specialities" className="hover:text-white transition-colors">{t('nav_specialties')}</Link>
            <span>/</span>
            <span className="text-white">{data.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl md:text-3xl shrink-0">
              <IconRender icon={data.icon} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{data.name}</h1>
              <p className="text-sm text-blue-200/90">{data.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-[72px] md:top-[96px] z-40">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex overflow-x-auto">
          {visibleTabs.map(tabObj => (
            <Link key={tabObj.key} href={`/specialities/${slug}/${tabObj.seg}`}
              className={`py-3 px-3 md:py-4 md:px-5 text-xs md:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${tab === tabObj.key ? 'border-[#1a3a6b] text-[#1a3a6b]' : 'border-transparent text-gray-500 hover:text-[#1a3a6b]'}`}>
              {t(tabObj.labelKey)}
            </Link>
          ))}
        </div>
      </div>

      <main className="flex-1">

        {tab === 'Overview' && (
          <section className="py-8 md:py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#1a3a6b' }}>{t('sd_overview_h')}</h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-10">
                {data.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {data.subspecialties && (
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#1a3a6b' }}>{t('sd_subspecialties_h')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.subspecialties.map(({ title, desc }) => (
                      <div key={title} className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                        <h4 className="text-sm font-bold mb-1" style={{ color: '#1a3a6b' }}>{title}</h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {tab === 'Conditions' && (
          <section className="py-8 md:py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold mb-8" style={{ color: '#1a3a6b' }}>{t('sd_conditions_h')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.conditions.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                    <i className="ph-bold ph-check-circle text-[#1a3a6b] text-lg mt-0.5 shrink-0"></i>
                    <span className="text-sm text-gray-700 leading-snug">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === 'Treatments' && (
          <section className="py-8 md:py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-4xl space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold mb-5" style={{ color: '#1a3a6b' }}>{t('sd_treatments_h')}</h2>
                <p className="text-[15px] text-gray-600 leading-relaxed">{data.treatments}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 md:p-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1a3a6b' }}>{t('sd_approach_h')}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{data.approach}</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-5 md:p-8 border border-blue-100">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1a3a6b' }}>{t('sd_when_h')}</h3>
                <p className="text-[14px] text-gray-700 leading-relaxed">{data.whenToConsult}</p>
              </div>
            </div>
          </section>
        )}

        {tab === 'Doctors' && (
          <section className="py-8 md:py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <h2 className="text-2xl font-extrabold mb-10" style={{ color: '#1a3a6b' }}>{t('sd_doctors_h')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.doctors.map(({ name, qualification, experience, img, expertise, note }) => (
                <div key={name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-56 bg-gray-100 overflow-hidden flex items-center justify-center">
                    {img
                      ? <img src={img} className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500" alt={name} loading="lazy" />
                      : <div className="flex flex-col items-center justify-center gap-2">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-white" style={{ backgroundColor: '#1a3a6b' }}>
                            {name.split(' ').filter(w => w.match(/^[A-Z]/)).slice(0, 2).map(w => w[0]).join('')}
                          </div>
                          <i className="ph-fill ph-gender-male text-2xl" style={{ color: '#1a3a6b', opacity: 0.3 }}></i>
                        </div>
                    }
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold mb-0.5" style={{ color: '#1a3a6b' }}>{name}</h3>
                    <p className="text-xs md:text-[11px] text-gray-400 font-semibold mb-1">{qualification}</p>
                    <p className="text-xs md:text-[11px] text-gray-500 mb-4">
                      <i className="ph ph-clock mr-1"></i>{experience} {t('sd_experience')}
                    </p>
                    <div className="mb-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">{t('sd_expertise_h')}</p>
                      <ul className="space-y-1.5">
                        {expertise.map((e, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] md:text-[12px] text-gray-600">
                            <i className="ph-bold ph-caret-right text-[#1a3a6b] text-xs mt-0.5 shrink-0"></i>{e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {note && (
                      <p className="text-xs md:text-[11px] text-gray-400 italic border-t border-gray-100 pt-3 leading-relaxed">{note}</p>
                    )}
                    <Link href="/book" className="mt-4 flex items-center justify-center gap-2 text-white text-xs font-bold py-2.5 px-4 rounded-lg w-full hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#1a3a6b' }}>
                      <i className="ph ph-calendar-plus"></i> {t('sd_book')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'FAQs' && data.faqs && data.faqs.length > 0 && (
          <section className="py-8 md:py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold mb-10" style={{ color: '#1a3a6b' }}>{t('sd_faqs_h')}</h2>
              <div className="space-y-4">
                {data.faqs.map(({ q, a }, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#1a3a6b' }}>Q{i + 1}. {q}</h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  )
}
