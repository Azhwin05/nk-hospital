'use client'
import { useState } from 'react'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

const coreValues = [
  { icon: 'ph ph-heart', title: 'Compassion', desc: 'Care delivered with empathy and respect for every patient.', color: 'text-rose-500 bg-rose-50' },
  { icon: 'ph ph-shield-check', title: 'Integrity', desc: 'Ethical, transparent, and accountable in all our practices.', color: 'text-blue-600 bg-blue-50' },
  { icon: 'ph ph-medal', title: 'Clinical Excellence', desc: 'Committed to high-quality, evidence-based medical care.', color: 'text-amber-500 bg-amber-50' },
  { icon: 'ph ph-user-focus', title: 'Patient First', desc: 'Prioritizing patient safety, comfort, and well-being at every step.', color: 'text-teal-600 bg-teal-50' },
  { icon: 'ph ph-lightbulb', title: 'Innovation', desc: 'Leveraging advanced technology to improve care and outcomes.', color: 'text-indigo-500 bg-indigo-50' },
  { icon: 'ph ph-handshake', title: 'Collaboration', desc: 'Coordinated, multidisciplinary approach across specialties.', color: 'text-emerald-600 bg-emerald-50' },
]

const stats = [
  { icon: 'ph ph-bed', value: '200+', label: 'Beds' },
  { icon: 'ph ph-stethoscope', value: '40+', label: 'Specialties' },
  { icon: 'ph ph-ambulance', value: '24/7', label: 'Emergency Care' },
  { icon: 'ph ph-wrench', value: '', label: 'Advanced Surgical Infrastructure' },
  { icon: 'ph ph-users', value: '', label: 'Expert Multidisciplinary Team' },
  { icon: 'ph ph-user-circle', value: '', label: 'Patient-Centric Care' },
]

const board = [
  {
    name: 'Dr. Arif Raza Ahmed',
    role: 'Founder & Chairman',
    initials: 'AR',
    gender: 'male',
    experience: 'Clinical Practice & Healthcare Entrepreneurship',
    expertise: 'Strategic Healthcare Development, Patient-Centered Care, Healthcare Innovation, Clinical Operations',
    bio: 'Dr. Arif leads NK Hospital with a vision to build a modern, ethical, and patient-focused healthcare institution for North Karnataka. His focus lies in integrating advanced healthcare infrastructure, specialist-driven care, operational excellence, and long-term institutional growth while ensuring compassionate and accessible healthcare delivery.',
  },
  {
    name: 'Dr. Amera Neelam',
    role: 'Managing Director',
    initials: 'AN',
    gender: 'female',
    experience: 'Healthcare Management',
    expertise: 'Medical Quality Standards, Multidisciplinary Coordination, Hospital Operations',
    bio: "Dr. Amera contributes to strengthening hospital systems, medical coordination, and quality-driven patient care across departments. Her involvement supports the hospital's commitment toward ethical practice, patient safety, and evidence-based treatment approaches.",
  },
  {
    name: 'Dr. Numan',
    role: 'Executive Director',
    initials: 'NU',
    gender: 'male',
    experience: 'Healthcare Operations & Administration',
    expertise: 'Hospital Strategy, Operational Leadership, Clinical Coordination, Institutional Growth, Hospital Systems, Operational Efficiency, Compliance, Service Delivery',
    bio: "Dr. Numan plays a key leadership role in driving the hospital's operational excellence, strategic expansion, and clinical coordination. His focus lies in strengthening systems, ensuring quality-driven healthcare delivery, infrastructure management and building a patient-centric institution aligned with global healthcare standards.",
  },
]

const milestones = [
  { year: '2015', icon: 'ph ph-plant', title: 'Foundation', desc: 'NK Hospital was established in Kalaburagi with a clear vision: to bring advanced multi-specialty healthcare closer to the people of North Karnataka.' },
  { year: '2017', icon: 'ph ph-buildings', title: 'Capacity Expansion', desc: 'The hospital expanded to 200+ beds and added new critical care units, surgical theatres, and a fully equipped emergency department.' },
  { year: '2019', icon: 'ph ph-microscope', title: 'Diagnostic Centre Launch', desc: 'A state-of-the-art diagnostic centre was opened, offering advanced imaging (MRI, CT, PET), pathology, and molecular diagnostics under one roof.' },
  { year: '2021', icon: 'ph ph-certificate', title: 'NABH Accreditation', desc: 'NK Hospital achieved NABH accreditation, reinforcing its commitment to maintaining national standards of patient care, safety, and quality management systems.' },
  { year: '2023', icon: 'ph ph-globe-hemisphere-east', title: 'Specialty Expansion', desc: 'New centres of excellence were launched for Oncology, Neurosciences, Cardiology, and Organ Transplant — bringing tertiary care to the region.' },
]

function Overview() {
  return (
    <div>
      <div className="relative overflow-hidden text-white py-10 md:py-16" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #162a4a 50%, #1a3054 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5 tracking-tight">
            Bringing Together the Right Expertise and Infrastructure for Better Care
          </h1>
          <p className="text-sm md:text-base text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
            NK Hospital is a leading multi super-specialty hospital in Kalaburagi, bringing together skilled medical expertise and advanced infrastructure to deliver precise, timely, and dependable healthcare. Committed to clinical excellence and patient safety, we provide comprehensive, patient-centric care across specialties through an integrated and coordinated approach.
          </p>
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
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover" alt="NK Hospital" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>Who We Are</p>
              <h2 className="text-3xl font-extrabold mb-5 tracking-tight leading-snug" style={{ color: '#1a3a6b' }}>Excellence in Advanced Healthcare</h2>
              <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed mb-8">
                <p>Our hospital was founded with a clear purpose: to bring high-quality, patient-centered healthcare to North Karnataka while bridging the gap between skilled medical professionals and advanced infrastructure.</p>
                <p>The vision has always been to create a collaborative environment where doctors are empowered with the right tools, systems, and support to deliver their best clinical outcomes. By combining experienced specialists with modern facilities, we aim to ensure that patients receive care that is both clinically sound and compassionate.</p>
                <p>We offer a wide range of specialties, including Gastroenterology, General Medicine, Critical Care, Nephrology, Orthopedics, and Emergency Services, allowing us to address diverse healthcare needs under one roof. Our approach emphasizes timely diagnosis, efficient treatment pathways, and continuity of care.</p>
                <p>Committed to accessibility and dependability, we strive to make quality healthcare available to people across the region without delays or uncertainty. Our goal is not just to treat illness, but to build a trusted healthcare institution that communities can rely on — consistently, transparently, and with excellence.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/specialities" className="flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a3a6b' }}>
                  <i className="ph ph-stethoscope"></i> Our Specialties
                </Link>
                <Link href="/find-doctor" className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors">
                  <i className="ph ph-user-circle"></i> Find a Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>Our Foundation</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white text-xl" style={{ backgroundColor: '#1a3a6b' }}>
                <i className="ph-fill ph-eye"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a3a6b' }}>Our Vision</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">What we aspire to be</p>
              <p className="text-sm text-gray-600 leading-relaxed">To become a trusted healthcare institution through clinical excellence, innovation, advanced technology, compassionate care, and leadership in accessible, patient-centered healthcare delivery.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white text-xl" style={{ backgroundColor: '#1a3a6b' }}>
                <i className="ph-fill ph-rocket-launch"></i>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a3a6b' }}>Our Mission</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">How we achieve it</p>
              <p className="text-sm text-gray-600 leading-relaxed">To provide safe, high-quality healthcare through skilled professionals, ethical practices, modern technology, patient-focused systems, and continuous commitment to excellence, accessibility, and community well-being.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>What We Stand For</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>Values That Drive Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {coreValues.map(({ icon, title, desc, color }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg ${color} group-hover:bg-[#1a3a6b] group-hover:text-white transition-colors`}>
                  <i className={icon}></i>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: '#1a3a6b' }}>{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="text-center mb-10 px-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>Our Growth</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>Our Journey</h2>
          <p className="mt-3 text-xs text-gray-400 md:hidden flex items-center justify-center gap-1">
            <i className="ph ph-hand-swipe-right text-sm"></i> Swipe to explore our timeline
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-16 z-10 md:hidden"
            style={{ background: 'linear-gradient(to right, transparent, white)' }} />
          <div className="overflow-x-auto scrollbar-hide">
          <div className="relative flex px-16 min-w-max mx-auto justify-center">
            <div className="absolute top-[38px] left-24 right-24 h-px bg-blue-100"></div>
            {milestones.map(({ year, icon, title, desc }) => (
              <div key={year} className="w-[240px] flex flex-col items-center text-center shrink-0 group px-4">
                <div className="relative z-10 w-[52px] h-[52px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-lg mb-1.5 group-hover:border-[#1a3a6b] transition-all shadow-sm" style={{ color: '#93b4d4' }}>
                  <i className={icon}></i>
                </div>
                <div className="w-2 h-2 rounded-full mb-5 z-10" style={{ backgroundColor: '#1a3a6b' }}></div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all text-left w-full">
                  <span className="text-[10px] font-bold block mb-1.5" style={{ color: '#1a3a6b' }}>{year}</span>
                  <h3 className="text-sm font-bold mb-2" style={{ color: '#1a3a6b' }}>{title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
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
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">Experience Quality Healthcare You Can Trust</h2>
          <p className="text-sm text-blue-100/90 max-w-xl mx-auto mb-8 leading-relaxed">Get access to expert medical care and advanced treatment facilities at NK Hospital. Schedule a consultation with our specialists today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book" className="bg-white text-[#1a3a6b] font-bold px-8 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow">
              <i className="ph ph-calendar-plus"></i> Book Appointment
            </Link>
            <a href="tel:9353957095" className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <i className="ph ph-phone"></i> Call Now: 9353957095
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function Chairman() {
  return (
    <div className="py-12 md:py-20" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #162a4a 100%)' }}>
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="w-full lg:w-[28%] shrink-0">
            <div className="rounded-2xl overflow-hidden h-[200px] md:h-[400px] shadow-xl mb-5 flex flex-col items-center justify-center gap-4" style={{ backgroundColor: '#122543' }}>
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg" style={{ backgroundColor: '#1a3a6b' }}>
                AR
              </div>
              <i className="ph-fill ph-user-circle text-white/10 text-8xl"></i>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">Dr. Arif Raza Ahmed</h3>
              <p className="text-sm text-blue-200 font-medium">Founder &amp; Chairman</p>
              <p className="text-[11px] text-blue-300 uppercase tracking-wider mt-1 font-bold">NK Hospital, Kalaburagi</p>
            </div>
          </div>
          <div className="w-full lg:w-[72%] text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-3">Leadership</p>
            <h2 className="text-3xl font-extrabold mb-8 tracking-tight">A Message from the Chairman</h2>
            <div className="space-y-5 text-[14px] text-blue-100/90 leading-relaxed">
              <p>NK Hospital was established with a vision to create a healthcare institution that combines medical excellence, ethical practice, and compassionate patient care under one roof.</p>
              <p>We established this hospital with a purpose to bridge the gap between advanced healthcare facilities and the growing needs of the people of North Karnataka.</p>
              <p>We believe that exceptional healthcare is achieved when experienced doctors, skilled nursing teams, modern technology, and evidence-based systems work together seamlessly. From emergency and critical care services to specialized medical and surgical departments, every element of NK Hospital has been designed to deliver safe, reliable, and patient-focused care with the highest standards of quality and accountability.</p>
              <p>We strongly believe that timely access to the right treatment can transform lives. Our focus is not only on treating illness, but also on creating a healthcare environment where patients and families feel supported, respected, and confident in the care they receive.</p>
              <p>Healthcare today is evolving rapidly, and institutions must continuously adapt through innovation, research-oriented thinking, digital integration, and strong clinical systems. At NK Hospital, we are committed to building an ecosystem where patient safety, timely treatment, affordability, and clinical excellence remain at the center of every decision.</p>
              <p>Our journey has only begun. In the years ahead, NK Hospital aims to emerge as a leading healthcare destination in the region by expanding specialized services, strengthening medical expertise, and adopting advanced technologies that improve outcomes and patient experience. Our commitment remains unwavering — to serve society with compassion, integrity, excellence, and a constant pursuit of better healthcare for every patient who walks through our doors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Board() {
  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>Leadership</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>Our Leadership Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {board.map(({ name, role, initials, gender, experience, expertise, bio }) => (
            <div key={name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="h-48 flex items-center justify-center" style={{ backgroundColor: gender === 'female' ? '#fce7f3' : '#eaf1fb' }}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md"
                    style={{ backgroundColor: gender === 'female' ? '#e91e8c' : '#1a3a6b' }}>
                    {initials}
                  </div>
                  <i className={`text-4xl ${gender === 'female' ? 'ph-fill ph-gender-female' : 'ph-fill ph-gender-male'}`}
                    style={{ color: gender === 'female' ? '#e91e8c' : '#1a3a6b', opacity: 0.2 }}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold mb-0.5" style={{ color: '#1a3a6b' }}>{name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{role}</p>
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] text-gray-500"><span className="font-semibold text-gray-600">Experience:</span> {experience}</div>
                  <div className="text-[11px] text-gray-500"><span className="font-semibold text-gray-600">Expertise:</span> {expertise}</div>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed border-t border-gray-100 pt-4">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Accreditations() {
  return (
    <div>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>Quality &amp; Safety</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>Accreditations &amp; Certifications</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed text-center mb-10">
              NK Hospital is committed to delivering healthcare services that meet the highest standards of quality, patient safety, clinical excellence, and operational efficiency. Our systems and processes are being developed in alignment with nationally and internationally recognized healthcare standards to ensure safe, ethical, and evidence-based patient care.
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-center text-gray-400 mb-8">Working toward implementation and compliance with the following:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'NABH', icon: 'ph ph-certificate', color: 'bg-blue-600', desc: 'National Accreditation Board for Hospitals & Healthcare Providers — Focused on patient safety, quality care standards, infection control, clinical protocols, and continuous quality improvement.' },
                { label: 'NABL', icon: 'ph ph-flask', color: 'bg-gray-500', desc: 'National Accreditation Board for Testing and Calibration Laboratories — Ensuring accuracy, reliability, and quality assurance in laboratory diagnostics and reporting systems.' },
                { label: 'ISO Standards', icon: 'ph ph-seal-check', color: 'bg-red-500', desc: 'Supporting standardized operational systems, process efficiency, documentation practices, and continuous organizational improvement.' },
              ].map(({ label, icon, color, desc }) => (
                <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-6 text-center">
                  <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                    <i className={icon}></i>
                  </div>
                  <h3 className="text-lg font-extrabold mb-3" style={{ color: '#1a3a6b' }}>{label}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 text-sm text-gray-600 leading-relaxed">
              At NK Hospital, quality is not limited to certifications alone — it is embedded into every aspect of patient care, hospital operations, infection prevention practices, emergency preparedness, and clinical governance. We continuously work toward strengthening systems, adopting best healthcare practices, and maintaining strict quality benchmarks to provide dependable, safe, and patient-centered healthcare services for the community.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function About() {
  const [activeTab, setActiveTab] = useState('overview')
  const { t } = useLanguage()

  const TABS = [
    { key: 'overview',       labelKey: 'about_tab_overview' },
    { key: 'chairman',       labelKey: 'about_tab_chairman' },
    { key: 'board',          labelKey: 'about_tab_board' },
    { key: 'accreditations', labelKey: 'about_tab_certifications' },
  ]

  return (
    <div className="antialiased text-gray-800 bg-white">
      <TopBarDark />
      <Navbar />

      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-[72px] md:top-[96px] z-40">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex gap-1 overflow-x-auto md:justify-center">
          {TABS.map(({ key, labelKey }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className={`py-3 px-3 md:py-4 md:px-5 text-xs md:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${activeTab === key ? 'border-[#1a3a6b] text-[#1a3a6b]' : 'border-transparent text-gray-500 hover:text-[#1a3a6b]'}`}>
              {t(labelKey)}
            </button>
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
