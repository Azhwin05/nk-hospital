'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

function Overview() {
  const { t } = useLanguage()

  const stats = [
    { icon: 'ph ph-bed',          value: '200+', label: t('about_stat_beds') },
    { icon: 'ph ph-stethoscope',  value: '40+',  label: t('about_stat_spec') },
    { icon: 'ph ph-ambulance',    value: '24/7', label: t('about_stat_em') },
    { icon: 'ph ph-wrench',       value: '',     label: t('about_stat_surg') },
    { icon: 'ph ph-users',        value: '',     label: t('about_stat_team') },
    { icon: 'ph ph-user-circle',  value: '',     label: t('about_stat_patient') },
  ]

  const coreValues = [
    { icon: 'ph ph-heart',       color: 'text-rose-500 bg-rose-50',     titleKey: 'about_val_1_title', descKey: 'about_val_1_desc' },
    { icon: 'ph ph-shield-check',color: 'text-blue-600 bg-blue-50',     titleKey: 'about_val_2_title', descKey: 'about_val_2_desc' },
    { icon: 'ph ph-medal',       color: 'text-amber-500 bg-amber-50',   titleKey: 'about_val_3_title', descKey: 'about_val_3_desc' },
    { icon: 'ph ph-user-focus',  color: 'text-teal-600 bg-teal-50',     titleKey: 'about_val_4_title', descKey: 'about_val_4_desc' },
    { icon: 'ph ph-lightbulb',   color: 'text-indigo-500 bg-indigo-50', titleKey: 'about_val_5_title', descKey: 'about_val_5_desc' },
    { icon: 'ph ph-handshake',   color: 'text-emerald-600 bg-emerald-50',titleKey: 'about_val_6_title', descKey: 'about_val_6_desc' },
  ]

  const milestones = [
    { year: '2015', icon: 'ph ph-plant',                titleKey: 'about_m1_title', descKey: 'about_m1_desc' },
    { year: '2017', icon: 'ph ph-buildings',             titleKey: 'about_m2_title', descKey: 'about_m2_desc' },
    { year: '2019', icon: 'ph ph-microscope',            titleKey: 'about_m3_title', descKey: 'about_m3_desc' },
    { year: '2021', icon: 'ph ph-certificate',           titleKey: 'about_m4_title', descKey: 'about_m4_desc' },
    { year: '2023', icon: 'ph ph-globe-hemisphere-east', titleKey: 'about_m5_title', descKey: 'about_m5_desc' },
  ]

  return (
    <div>
      <div className="relative overflow-hidden text-white py-10 md:py-16" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #162a4a 50%, #1a3054 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5 tracking-tight">{t('about_hero_heading')}</h1>
          <p className="text-sm md:text-base text-blue-100/90 leading-relaxed max-w-3xl mx-auto">{t('about_hero_sub')}</p>
        </div>
      </div>

      <div className="bg-white/20">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="py-5 px-3 flex flex-col items-center justify-center text-white text-center" style={{ backgroundColor: '#1a3a6b' }}>
                <i className={`${icon} text-xl text-blue-200 mb-1`}></i>
                {value && <div className="text-xl font-extrabold leading-tight">{value}</div>}
                <div className="text-[11px] md:text-[9px] font-semibold text-blue-200 uppercase tracking-wide leading-tight mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[220px] md:h-[420px]">
                <video
                  src="https://res.cloudinary.com/dmhonzqrm/video/upload/compressed_nk_hospital_final_ewtjkd.mp4"
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('about_who_eyebrow')}</p>
              <h2 className="text-3xl font-extrabold mb-5 tracking-tight leading-snug" style={{ color: '#1a3a6b' }}>{t('about_who_heading')}</h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed mb-8">
                <p>{t('about_who_p1')}</p>
                <p>{t('about_who_p2')}</p>
                <p>{t('about_who_p3')}</p>
                <p>{t('about_who_p4')}</p>
              </div>
              <div className="flex gap-3">
                <Link href="/specialities" className="flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a3a6b' }}>
                  <i className="ph ph-stethoscope"></i> {t('about_our_spec_btn')}
                </Link>
                <Link href="/find-doctor" className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors">
                  <i className="ph ph-user-circle"></i> {t('about_find_doc_btn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('about_vision_eyebrow')}</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('about_vision_heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white text-xl" style={{ backgroundColor: '#1a3a6b' }}>
                <i className="ph-fill ph-eye"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a3a6b' }}>{t('about_vision_label')}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{t('about_vision_aspire')}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{t('about_vision_text')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white text-xl" style={{ backgroundColor: '#1a3a6b' }}>
                <i className="ph-fill ph-rocket-launch"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a3a6b' }}>{t('about_mission_label')}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{t('about_mission_achieve')}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{t('about_mission_text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('about_values_eyebrow')}</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('about_values_heading')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {coreValues.map(({ icon, color, titleKey, descKey }) => (
              <div key={titleKey} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg ${color} group-hover:bg-[#1a3a6b] group-hover:text-white transition-colors`}>
                  <i className={icon}></i>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: '#1a3a6b' }}>{t(titleKey)}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="text-center mb-10 px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('about_journey_eyebrow')}</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('about_journey_heading')}</h2>
          <p className="mt-3 text-xs text-gray-400 md:hidden flex items-center justify-center gap-1">
            <i className="ph ph-hand-swipe-right text-sm"></i> {t('about_journey_swipe')}
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-16 z-10 md:hidden"
            style={{ background: 'linear-gradient(to right, transparent, white)' }} />
          <div className="overflow-x-auto scrollbar-hide">
            <div className="relative flex px-16 min-w-max mx-auto justify-center">
              <div className="absolute top-[38px] left-24 right-24 h-px bg-blue-100"></div>
              {milestones.map(({ year, icon, titleKey, descKey }) => (
                <div key={year} className="w-[240px] flex flex-col items-center text-center shrink-0 group px-4">
                  <div className="relative z-10 w-[52px] h-[52px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-lg mb-1.5 group-hover:border-[#1a3a6b] transition-all shadow-sm" style={{ color: '#93b4d4' }}>
                    <i className={icon}></i>
                  </div>
                  <div className="w-2 h-2 rounded-full mb-5 z-10" style={{ backgroundColor: '#1a3a6b' }}></div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all text-left w-full">
                    <span className="text-[10px] font-bold block mb-1.5" style={{ color: '#1a3a6b' }}>{year}</span>
                    <h3 className="text-sm font-bold mb-2" style={{ color: '#1a3a6b' }}>{t(titleKey)}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 text-white relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #162a4a)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 text-center relative z-10">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">{t('about_cta_heading')}</h2>
          <p className="text-sm text-blue-100/90 max-w-xl mx-auto mb-8 leading-relaxed">{t('about_cta_sub')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="bg-white text-[#1a3a6b] font-bold px-8 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow">
              <i className="ph ph-calendar-plus"></i> {t('about_cta_book')}
            </Link>
            <a href="tel:9901573323" className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <i className="ph ph-phone"></i> {t('about_cta_call')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function Chairman() {
  const { t } = useLanguage()
  return (
    <div className="py-12 md:py-20" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #162a4a 100%)' }}>
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="w-full lg:w-[28%] shrink-0">
            <div className="rounded-2xl overflow-hidden h-[200px] md:h-[400px] shadow-xl mb-5">
              <img
                src="https://res.cloudinary.com/dmhonzqrm/image/upload/IMG-20260613-WA0039.jpg_o0mbyn.jpg"
                className="w-full h-full object-cover object-top"
                alt="Dr. Arif Raza Ahmed"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">{t('about_ch_name')}</h3>
              <p className="text-sm text-blue-200 font-medium">{t('about_ch_role')}</p>
              <p className="text-[11px] text-blue-300 uppercase tracking-wider mt-1 font-bold">{t('about_ch_hospital')}</p>
            </div>
          </div>
          <div className="w-full lg:w-[72%] text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-3">{t('about_ch_eyebrow')}</p>
            <h2 className="text-3xl font-extrabold mb-8 tracking-tight">{t('about_ch_heading')}</h2>
            <div className="space-y-5 text-[14px] text-blue-100/90 leading-relaxed">
              <p>{t('about_ch_p1')}</p>
              <p>{t('about_ch_p2')}</p>
              <p>{t('about_ch_p3')}</p>
              <p>{t('about_ch_p4')}</p>
              <p>{t('about_ch_p5')}</p>
              <p>{t('about_ch_p6')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Board() {
  const { t } = useLanguage()

  const board = [
    {
      name: 'Dr. Arif Raza Ahmed',
      roleKey: 'about_board_arif_role',
      initials: 'AR',
      gender: 'male',
      expKey: 'about_board_arif_exp',
      expertiseKey: 'about_board_arif_expertise',
      bioKey: 'about_board_arif_bio',
    },
    {
      name: 'Dr. Amera Neelam',
      roleKey: 'about_board_neelam_role',
      initials: 'AN',
      gender: 'female',
      expKey: 'about_board_neelam_exp',
      expertiseKey: 'about_board_neelam_expertise',
      bioKey: 'about_board_neelam_bio',
    },
    {
      name: 'Dr. Numan',
      roleKey: 'about_board_numan_role',
      initials: 'NU',
      gender: 'male',
      expKey: 'about_board_numan_exp',
      expertiseKey: 'about_board_numan_expertise',
      bioKey: 'about_board_numan_bio',
    },
  ]

  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('about_board_eyebrow')}</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('about_board_heading')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {board.map(({ name, roleKey, expKey, expertiseKey, bioKey }) => (
            <div key={name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="p-6">
                <h3 className="text-base font-bold mb-0.5" style={{ color: '#1a3a6b' }}>{name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{t(roleKey)}</p>
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] text-gray-500"><span className="font-semibold text-gray-600">{t('about_board_exp_label')}</span> {t(expKey)}</div>
                  <div className="text-[11px] text-gray-500"><span className="font-semibold text-gray-600">{t('about_board_expertise_label')}</span> {t(expertiseKey)}</div>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed border-t border-gray-100 pt-4">{t(bioKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Accreditations() {
  const { t } = useLanguage()

  const items = [
    { label: 'NABH',         icon: 'ph ph-certificate', color: 'bg-blue-600', descKey: 'about_acc_nabh_desc' },
    { label: 'NABL',         icon: 'ph ph-flask',       color: 'bg-gray-500', descKey: 'about_acc_nabl_desc' },
    { label: 'ISO Standards',icon: 'ph ph-seal-check',  color: 'bg-red-500',  descKey: 'about_acc_iso_desc'  },
  ]

  return (
    <div>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('about_acc_eyebrow')}</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('about_acc_heading')}</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed text-center mb-10">{t('about_acc_desc')}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-center text-gray-400 mb-8">{t('about_acc_working')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {items.map(({ label, icon, color, descKey }) => (
                <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-6 text-center">
                  <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                    <i className={icon}></i>
                  </div>
                  <h3 className="text-lg font-extrabold mb-3" style={{ color: '#1a3a6b' }}>{label}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{t(descKey)}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 text-sm text-gray-600 leading-relaxed">
              {t('about_acc_footer')}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const TABS = [
  { key: 'overview',       seg: '',               labelKey: 'about_tab_overview' },
  { key: 'chairman',       seg: 'chairman',       labelKey: 'about_tab_chairman' },
  { key: 'board',          seg: 'board',          labelKey: 'about_tab_board' },
  { key: 'accreditations', seg: 'accreditations', labelKey: 'about_tab_certifications' },
]

export default function About() {
  const { tab } = useParams()
  const { t } = useLanguage()

  // Each tab is now a real page (/about, /about/chairman …). Navigating between
  // them is a route change, so the browser lands at the top of the new section
  // instead of keeping the previous scroll position.
  const seg = Array.isArray(tab) ? tab[0] : tab
  const matched = TABS.find(tb => tb.seg === (seg || ''))
  const activeTab = matched ? matched.key : 'overview'

  return (
    <div className="antialiased text-gray-800 bg-white">
      <TopBarDark />
      <Navbar />

      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-[72px] md:top-[96px] z-40">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex gap-1 overflow-x-auto md:justify-center">
          {TABS.map(({ key, seg, labelKey }) => (
            <Link key={key} href={seg ? `/about/${seg}` : '/about'}
              className={`py-3 px-3 md:py-4 md:px-5 text-xs md:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${activeTab === key ? 'border-[#1a3a6b] text-[#1a3a6b]' : 'border-transparent text-gray-500 hover:text-[#1a3a6b]'}`}>
              {t(labelKey)}
            </Link>
          ))}
        </div>
      </div>

      <main className="bg-white">
        {activeTab === 'overview'       && <Overview />}
        {activeTab === 'chairman'       && <Chairman />}
        {activeTab === 'board'          && <Board />}
        {activeTab === 'accreditations' && <Accreditations />}
      </main>

      <Footer />
    </div>
  )
}
