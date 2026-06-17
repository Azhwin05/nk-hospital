'use client'
import { useState } from 'react'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

const doctors = [
  { name: 'Dr. Arif Raza Ahmed',  specialty: 'Surgical Gastroenterology', exp: '14+', img: '/doctors/Dr arif raza ahmed.JPG',  initials: 'AR', gender: 'male',   filled: true },
  { name: 'Dr. Zeeshan Ali',      specialty: 'Medical Gastroenterology',  exp: '13+', img: '/doctors/Dr zeeshan ali.JPG',      initials: 'ZA', gender: 'male',   filled: true },
  { name: 'Dr. Vivek Patil',      specialty: 'Specialist',                exp: '',    img: null,                               initials: 'VP', gender: 'male',   filled: false },
  { name: 'Dr. Taif',             specialty: 'Specialist',                exp: '',    img: null,                               initials: 'TF', gender: 'male',   filled: false },
  { name: 'Dr. Veeresh Godi',     specialty: 'General Physician',         exp: '3+',  img: '/doctors/Dr veeresh godi.JPG',     initials: 'VG', gender: 'male',   filled: false },
  { name: 'Dr. Mahalingam',       specialty: 'Orthopedics',               exp: '5+',  img: '/doctors/Dr Mahaligam.JPG',        initials: 'MH', gender: 'male',   filled: false },
  { name: 'Dr. Shrutika',         specialty: 'Specialist',                exp: '',    img: null,                               initials: 'SH', gender: 'female', filled: false },
  { name: 'Dr. Haider & Critical Care Team', specialty: 'Critical Care',  exp: '',    img: null,                               initials: 'CC', gender: 'team',   filled: true  },
  { name: 'Dr. Uday & ED Team',   specialty: 'Emergency Medicine',        exp: '',    img: null,                               initials: 'ED', gender: 'team',   filled: true  },
  { name: 'Dr. Iftekhar',         specialty: 'Specialist',                exp: '',    img: null,                               initials: 'IF', gender: 'male',   filled: false },
  { name: 'Shamir',               specialty: 'Radiology',                 exp: '',    img: null,                               initials: 'SH', gender: 'male',   filled: false },
  { name: 'Sohail',               specialty: 'Radiology',                 exp: '',    img: '/doctors/Dr sohail.JPG',           initials: 'SO', gender: 'male',   filled: false },
  { name: 'Laxminarayan',         specialty: 'Radiology',                 exp: '',    img: null,                               initials: 'LN', gender: 'male',   filled: false },
  { name: 'Lokesh',               specialty: 'Radiology',                 exp: '',    img: null,                               initials: 'LK', gender: 'male',   filled: false },
  { name: 'Dr. Nikhil',           specialty: 'Pathology',                 exp: '',    img: null,                               initials: 'NK', gender: 'male',   filled: false },
]

function Avatar({ img, initials, gender, name }) {
  if (img) {
    return (
      <div className="w-20 h-[5.5rem] rounded-xl bg-gray-100 shrink-0 overflow-hidden">
        <img src={img} className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500" alt={name} loading="lazy" />
      </div>
    )
  }
  const bg = gender === 'female' ? '#e91e8c' : '#1a3a6b'
  return (
    <div className="w-20 h-[5.5rem] rounded-xl shrink-0 flex flex-col items-center justify-center gap-1"
      style={{ backgroundColor: bg + '15', border: `1.5px solid ${bg}30` }}>
      <span className="text-xl font-extrabold" style={{ color: bg }}>{initials}</span>
      <i className={`text-lg ${gender === 'female' ? 'ph-fill ph-gender-female' : gender === 'team' ? 'ph-fill ph-users' : 'ph-fill ph-gender-male'}`}
        style={{ color: bg, opacity: 0.4 }}></i>
    </div>
  )
}

export default function FindDoctor() {
  const [search, setSearch] = useState('')
  const { t } = useLanguage()
  const specNames = t('spec_names') || {}

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="antialiased text-gray-800 bg-gray-50/50">
      <TopBarDark />
      <Navbar />

      <div className="bg-white pt-12 pb-6 border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold mb-1.5 tracking-tight" style={{ color: '#1a3a6b' }}>{t('finddr_heading')}</h1>
            <p className="text-sm text-gray-500">{t('finddr_sub')}</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex-1 p-3.5 flex items-center justify-between text-[13px] text-gray-500 cursor-pointer group">
              <div className="flex items-center gap-2"><i className="ph ph-stethoscope text-gray-400 group-hover:text-[#1a3a6b] text-lg transition-colors"></i> {t('finddr_select')}</div>
              <i className="ph ph-caret-down text-gray-400 group-hover:text-[#1a3a6b]"></i>
            </div>
            <div className="flex-[1.5] p-3.5 flex items-center gap-2 text-[13px] text-gray-500">
              <i className="ph ph-user text-lg"></i>
              <input
                type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder={t('finddr_search')}
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="py-10 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(({ name, specialty, exp, img, initials, gender, filled, members }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
                <div className="flex gap-4 mb-5">
                  <Avatar img={img} initials={initials} gender={gender} name={name} />
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm mb-0.5 leading-tight" style={{ color: '#1a3a6b' }}>{name}</h3>
                    <p className="text-xs text-blue-600 font-semibold mb-1.5 tracking-wide">
                      {specNames[specialty] || specialty}
                    </p>
                    {exp && (
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-1">
                        <i className="ph ph-clock text-gray-400 text-xs"></i> {exp} {t('book_experience')}
                      </div>
                    )}
                    {members && <p className="text-[10px] text-gray-400 leading-snug">{members}</p>}
                  </div>
                </div>
                <Link href="/book"
                  className={`w-full py-2.5 rounded-lg text-[11px] font-bold text-center transition-colors ${filled ? 'text-white hover:opacity-90' : 'border border-[#1a3a6b] text-[#1a3a6b] hover:bg-blue-50'}`}
                  style={filled ? { backgroundColor: '#1a3a6b' } : {}}>
                  {filled ? t('finddr_book') : <><i className="ph ph-calendar-plus mr-1"></i> {t('finddr_request')}</>}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
