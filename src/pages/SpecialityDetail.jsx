import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { specialitiesData } from '../data/specialitiesData'

const TABS = ['Overview', 'Conditions', 'Treatments', 'Doctors', 'FAQs']

export default function SpecialityDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState('Overview')
  const data = specialitiesData[slug]

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500 mb-4">Specialty not found.</p>
        <Link to="/specialities" className="text-[#0f4c81] font-bold hover:underline">← Back to Specialties</Link>
      </div>
    )
  }

  const visibleTabs = TABS.filter(t => {
    if (t === 'FAQs' && (!data.faqs || data.faqs.length === 0)) return false
    return true
  })

  return (
    <div className="antialiased text-gray-800 bg-white min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      {/* Hero */}
      <div className="text-white py-14 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #0c1b33, #0f4c81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-xs text-blue-300 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/specialities" className="hover:text-white transition-colors">Specialties</Link>
            <span>/</span>
            <span className="text-white">{data.name}</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl shrink-0">
              <i className={data.icon}></i>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{data.name}</h1>
              <p className="text-sm text-blue-200/90">{data.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-[49px] z-40">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex overflow-x-auto">
          {visibleTabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`py-4 px-5 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${tab === t ? 'border-[#0f4c81] text-[#0f4c81]' : 'border-transparent text-gray-500 hover:text-[#0f4c81]'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1">

        {/* Overview */}
        {tab === 'Overview' && (
          <section className="py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold mb-6" style={{ color: '#0c1b33' }}>Overview</h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-10">
                {data.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {data.subspecialties && (
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#0c1b33' }}>Subspecialties Include</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.subspecialties.map(({ title, desc }) => (
                      <div key={title} className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                        <h4 className="text-sm font-bold mb-1" style={{ color: '#0f4c81' }}>{title}</h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Conditions */}
        {tab === 'Conditions' && (
          <section className="py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold mb-8" style={{ color: '#0c1b33' }}>Conditions We Treat</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.conditions.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                    <i className="ph-bold ph-check-circle text-[#0f4c81] text-lg mt-0.5 shrink-0"></i>
                    <span className="text-sm text-gray-700 leading-snug">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Treatments */}
        {tab === 'Treatments' && (
          <section className="py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-4xl space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold mb-5" style={{ color: '#0c1b33' }}>Treatments &amp; Procedures</h2>
                <p className="text-[15px] text-gray-600 leading-relaxed">{data.treatments}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#0c1b33' }}>Our Approach to Care</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{data.approach}</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#0f4c81' }}>When Should a Patient Consult?</h3>
                <p className="text-[14px] text-gray-700 leading-relaxed">{data.whenToConsult}</p>
              </div>
            </div>
          </section>
        )}

        {/* Doctors */}
        {tab === 'Doctors' && (
          <section className="py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <h2 className="text-2xl font-extrabold mb-10" style={{ color: '#0c1b33' }}>Doctors &amp; Specialists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.doctors.map(({ name, qualification, experience, img, expertise, note }) => (
                <div key={name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="h-56 bg-gray-100 overflow-hidden">
                    <img src={img} className="w-full h-full object-cover object-top" alt={name} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold mb-0.5" style={{ color: '#0f4c81' }}>{name}</h3>
                    <p className="text-[11px] text-gray-400 font-semibold mb-1">{qualification}</p>
                    <p className="text-[11px] text-gray-500 mb-4"><i className="ph ph-clock mr-1"></i>{experience} experience</p>
                    <div className="mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Area of Expertise</p>
                      <ul className="space-y-1.5">
                        {expertise.map((e, i) => (
                          <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
                            <i className="ph-bold ph-caret-right text-[#0f4c81] text-xs mt-0.5 shrink-0"></i>{e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {note && (
                      <p className="text-[11px] text-gray-400 italic border-t border-gray-100 pt-3 leading-relaxed">{note}</p>
                    )}
                    <Link to="/book" className="mt-4 flex items-center justify-center gap-2 text-white text-xs font-bold py-2.5 px-4 rounded-lg w-full hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#0f4c81' }}>
                      <i className="ph ph-calendar-plus"></i> Book Appointment
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {tab === 'FAQs' && data.faqs && data.faqs.length > 0 && (
          <section className="py-14 max-w-[1920px] mx-auto px-4 lg:px-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold mb-10" style={{ color: '#0c1b33' }}>Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faqs.map(({ q, a }, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h4 className="text-sm font-bold mb-2" style={{ color: '#0f4c81' }}>Q{i + 1}. {q}</h4>
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
