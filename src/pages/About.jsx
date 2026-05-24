import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const stats = [
  { icon: 'ph ph-bed', value: '200+', label: 'Beds' },
  { icon: 'ph ph-stethoscope', value: '40+', label: 'Specialties' },
  { icon: 'ph ph-ambulance', value: '24/7', label: 'Emergency Care' },
  { icon: 'ph ph-users', value: '100+', label: 'Expert Doctors' },
]

const coreValues = [
  { icon: 'ph ph-heart', title: 'Compassion', desc: 'We treat every patient with empathy, dignity, and genuine care — because healing goes beyond medicine.', color: 'text-rose-500 bg-rose-50' },
  { icon: 'ph ph-shield-check', title: 'Integrity', desc: 'We uphold transparency, honesty, and ethical standards in every decision and every interaction.', color: 'text-blue-600 bg-blue-50' },
  { icon: 'ph ph-medal', title: 'Clinical Excellence', desc: 'We maintain the highest standards of medical expertise and quality outcomes across all specialties.', color: 'text-amber-500 bg-amber-50' },
  { icon: 'ph ph-user-focus', title: 'Patient First', desc: "Every protocol, every policy, and every procedure is built around the patient's safety and well-being.", color: 'text-teal-600 bg-teal-50' },
  { icon: 'ph ph-lightbulb', title: 'Innovation', desc: 'We constantly adopt advanced technologies and evidence-based practices to deliver better care.', color: 'text-indigo-500 bg-indigo-50' },
  { icon: 'ph ph-handshake', title: 'Collaboration', desc: 'Our multidisciplinary teams work together seamlessly to ensure integrated, comprehensive care.', color: 'text-emerald-600 bg-emerald-50' },
]

const leadership = [
  {
    name: 'Dr. Arif Raza Ahmed',
    role: 'Founder & Chairman',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
    bio: 'A visionary healthcare leader with decades of experience, Dr. Arif Raza Ahmed founded NK Hospital with a commitment to delivering world-class healthcare to the people of Kalaburagi and beyond.',
  },
  {
    name: 'Dr. Amera Neelam',
    role: 'Managing Director',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    bio: 'Dr. Amera Neelam leads day-to-day hospital operations with a patient-first philosophy, ensuring quality, safety, and excellence are embedded at every level of care delivery.',
  },
  {
    name: 'Dr. Numan',
    role: 'Executive Director',
    img: 'https://images.unsplash.com/photo-1594824436951-7f1262d082d3?q=80&w=400&auto=format&fit=crop',
    bio: 'Dr. Numan oversees clinical programs and strategic growth, bringing deep expertise in hospital management and a strong focus on building NK Hospital into a regional centre of excellence.',
  },
]

const milestones = [
  { year: '2015', icon: 'ph ph-plant', title: 'Foundation', desc: 'NK Hospital was established in Kalaburagi with a clear vision: to bring advanced multi-specialty healthcare closer to the people of North Karnataka.' },
  { year: '2017', icon: 'ph ph-buildings', title: 'Capacity Expansion', desc: 'The hospital expanded to 200+ beds and added new critical care units, surgical theatres, and a fully equipped emergency department.' },
  { year: '2019', icon: 'ph ph-microscope', title: 'Diagnostic Centre Launch', desc: 'A state-of-the-art diagnostic centre was opened, offering advanced imaging (MRI, CT, PET), pathology, and molecular diagnostics under one roof.' },
  { year: '2021', icon: 'ph ph-certificate', title: 'NABH Accreditation', desc: 'NK Hospital achieved NABH accreditation, reinforcing its commitment to maintaining national standards of patient care, safety, and quality management systems.' },
  { year: '2023', icon: 'ph ph-globe-hemisphere-east', title: 'Specialty Expansion', desc: 'New centres of excellence were launched for Oncology, Neurosciences, Cardiology, and Organ Transplant — bringing tertiary care to the region.' },
  { year: 'Today', icon: 'ph ph-stethoscope', title: 'Growing Every Day', desc: 'NK Hospital continues to grow as the most trusted healthcare institution in Kalaburagi, serving lakhs of patients annually with compassion and clinical excellence.' },
]

const accreditations = [
  { label: 'NABH', desc: 'National Accreditation Board for Hospitals & Healthcare Providers', icon: 'ph ph-certificate' },
  { label: 'NABL', desc: 'National Accreditation Board for Testing and Calibration Laboratories', icon: 'ph ph-flask' },
  { label: 'ISO', desc: 'ISO 9001:2015 — Quality Management System Certified', icon: 'ph ph-seal-check' },
]

export default function About() {
  return (
    <div className="antialiased text-gray-800 bg-white">
      <TopBarDark />
      <Navbar />

      {/* Hero */}
      <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c1b33 0%, #0f4c81 60%, #1a6fba 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 py-20 relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">About NK Hospital</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6 tracking-tight">
            Bringing Together the Right Expertise and Infrastructure for Better Care
          </h1>
          <p className="text-sm md:text-base text-blue-100/90 max-w-2xl leading-relaxed mb-8 font-medium">
            NK Hospital, Kalaburagi is a modern, advanced multi-super-specialty hospital committed to delivering exceptional healthcare to the people of North Karnataka and beyond. We combine expert clinical teams, cutting-edge technology, and compassionate care to ensure every patient receives treatment of the highest standard.
          </p>
          <div className="flex items-center gap-2 text-xs text-blue-200/70 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-gray-100" style={{ backgroundColor: '#0f4c81' }}>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="py-6 px-4 flex flex-col items-center justify-center text-white text-center">
                <i className={`${icon} text-2xl text-blue-200 mb-2`}></i>
                <div className="text-2xl font-extrabold">{value}</div>
                <div className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-xl h-[440px]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover object-center"
                  alt="NK Hospital Building"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>Who We Are</p>
              <h2 className="text-3xl font-extrabold mb-5 tracking-tight leading-snug" style={{ color: '#0c1b33' }}>
                Excellence in Advanced Healthcare
              </h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed font-medium mb-8">
                <p>
                  NK Hospital is a comprehensive multi-super-specialty hospital located in the heart of Kalaburagi, Karnataka. Founded with the mission to eliminate the need for patients from North Karnataka to travel far for quality medical care, we have grown into a trusted institution serving lakhs of patients every year.
                </p>
                <p>
                  Our hospital brings together over 100 specialist doctors, cutting-edge surgical infrastructure, advanced diagnostics, and a fully equipped emergency and critical care division — all under one roof. We believe quality healthcare should be accessible, compassionate, and built on clinical excellence.
                </p>
                <p>
                  From routine consultations to complex organ transplants, our teams work collaboratively to deliver the best possible outcomes for every patient who walks through our doors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/specialities" className="flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#0f4c81' }}>
                  <i className="ph ph-stethoscope text-base"></i> Our Specialities
                </Link>
                <Link to="/find-doctor" className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:border-[#0f4c81] hover:text-[#0f4c81] transition-colors">
                  <i className="ph ph-user-circle text-base"></i> Find a Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>Our Foundation</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#0c1b33' }}>Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white text-xl" style={{ backgroundColor: '#0f4c81' }}>
                <i className="ph-fill ph-eye"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-tight" style={{ color: '#0c1b33' }}>Our Vision</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">What we aspire to be</p>
              <p className="text-base font-serif italic leading-relaxed mb-6" style={{ color: '#0f4c81' }}>
                "To be the most trusted and advanced healthcare institution in North Karnataka — delivering world-class medical care with compassion, integrity, and excellence."
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {['Accessible, high-quality healthcare for every patient.', 'Continuous adoption of the latest clinical technologies.', 'Patient-first philosophy in every aspect of care.'].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <i className="ph-bold ph-caret-right text-[#0f4c81] text-xs mt-1 shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white text-xl" style={{ backgroundColor: '#0f4c81' }}>
                <i className="ph-fill ph-rocket-launch"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-tight" style={{ color: '#0c1b33' }}>Our Mission</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">How we achieve it</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                To provide comprehensive, multi-specialty healthcare to the people of Kalaburagi and the surrounding region — by building expert teams, investing in advanced infrastructure, and ensuring every patient receives the care and dignity they deserve.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  'Delivering exceptional patient-centric care across 40+ specialties.',
                  'Advancing healthcare through cutting-edge diagnostic and surgical technology.',
                  'Promoting preventive health and community wellness programmes.',
                  'Building a collaborative, multidisciplinary clinical culture.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <i className="ph-bold ph-check text-green-500 text-sm mt-0.5 shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>What We Stand For</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#0c1b33' }}>Values That Drive Us</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-3 leading-relaxed">Our core values are the foundation of every clinical decision, every patient interaction, and every team effort at NK Hospital.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map(({ icon, title, desc, color }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl ${color} group-hover:bg-[#0f4c81] group-hover:text-white transition-colors`}>
                  <i className={icon}></i>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#0c1b33' }}>{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0c1b33 0%, #0f4c81 100%)' }}>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="flex flex-col lg:flex-row gap-14 items-start">
            <div className="w-full lg:w-[30%] shrink-0">
              <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-full object-cover object-top"
                  alt="Chairman Dr. Arif Raza Ahmed"
                />
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">Dr. Arif Raza Ahmed</h3>
                <p className="text-sm text-blue-200 font-medium">Founder &amp; Chairman</p>
                <p className="text-[11px] text-blue-300 uppercase tracking-wider mt-1 font-bold">NK Hospital, Kalaburagi</p>
              </div>
            </div>
            <div className="w-full lg:w-[70%] text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-4">Leadership</p>
              <h2 className="text-3xl font-extrabold mb-8 tracking-tight">A Message from the Chairman</h2>
              <div className="space-y-5 text-[15px] text-blue-100/90 leading-relaxed font-medium">
                <p>
                  When we established NK Hospital, our singular vision was clear — to ensure that no patient from Kalaburagi or North Karnataka had to travel hundreds of kilometres just to access quality medical care. That vision remains the heart of everything we do.
                </p>
                <p>
                  Over the years, we have built a hospital that brings together expert specialists, modern surgical infrastructure, and advanced diagnostics — creating an integrated healthcare ecosystem that serves our community with the same standard of care available in any major metropolitan city.
                </p>
                <p>
                  We are proud of what our teams have achieved: from establishing centres of excellence in cardiology, oncology, and neurosciences, to earning national accreditation for our quality and safety systems. But what makes me most proud is the trust our patients place in us every single day.
                </p>
                <p>
                  Our commitment has never wavered — compassionate, patient-first care, delivered with clinical excellence and the deepest respect for every person who walks through our doors. We will continue to grow, to invest, and to innovate — because our community deserves nothing less.
                </p>
                <p className="italic text-white font-semibold">
                  "Healthcare is not just a service. It is a responsibility — and we take it seriously."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>Our People</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#0c1b33' }}>Leadership Team</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-3">Our leadership brings together visionary management and clinical expertise to drive NK Hospital's mission forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map(({ name, role, img, bio }) => (
              <div key={name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={img} className="w-full h-full object-cover object-top" alt={name} />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold mb-0.5" style={{ color: '#0f4c81' }}>{name}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">{role}</p>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>Our Growth</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#0c1b33' }}>Our Journey</h2>
          </div>
          <div className="relative overflow-x-auto pb-4">
            <div className="absolute top-[52px] left-16 right-16 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block"></div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 min-w-max md:px-0">
              {milestones.map(({ year, icon, title, desc }) => (
                <div key={year} className="w-full md:w-[260px] flex flex-col items-center text-center shrink-0 group px-4">
                  <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#0f4c81] bg-white text-[#0f4c81] flex items-center justify-center text-xl shadow-md group-hover:bg-[#0f4c81] group-hover:text-white transition-all duration-300 mb-1">
                    <i className={icon}></i>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0f4c81] border-2 border-white shadow mb-4"></div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm group-hover:shadow-md hover:border-[#0f4c81]/20 transition-all text-left w-full">
                    <span className="text-[10px] font-bold text-blue-400 block mb-1">{year}</span>
                    <h3 className="text-sm font-bold mb-2 tracking-tight" style={{ color: '#0c1b33' }}>{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>Quality &amp; Safety</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#0c1b33' }}>Accreditations &amp; Certifications</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-3">Our accreditations reflect our unwavering commitment to patient safety, clinical quality, and international standards of care.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
            {accreditations.map(({ label, desc, icon }) => (
              <div key={label} className="flex-1 bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0f4c81]/30 transition-all">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style={{ backgroundColor: '#eaf1fb', color: '#0f4c81' }}>
                  <i className={icon}></i>
                </div>
                <h3 className="text-xl font-extrabold mb-2" style={{ color: '#0f4c81' }}>{label}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(to right, #0c1b33, #0f4c81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight max-w-2xl mx-auto leading-tight">
            Experience Quality Healthcare You Can Trust
          </h2>
          <p className="text-sm text-blue-100/90 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you need a specialist consultation, an emergency intervention, or a routine health check — NK Hospital is here for you, every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book"
              className="bg-white text-[#0f4c81] font-bold px-8 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow">
              <i className="ph ph-calendar-plus text-base"></i> Book Appointment
            </Link>
            <a href="tel:08040-123456"
              className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <i className="ph ph-phone text-base"></i> Call Now: 08040-123456
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
