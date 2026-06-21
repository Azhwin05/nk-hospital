'use client'
import { useState } from 'react'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

const openings = [
  { title: 'Staff Nurse (ICU / General Ward)', dept: 'Nursing', type: 'Full-Time', exp: '1–5 years' },
  { title: 'Resident Medical Officer', dept: 'Emergency Medicine', type: 'Full-Time', exp: '1–3 years' },
  { title: 'Lab Technician', dept: 'Pathology & Diagnostics', type: 'Full-Time', exp: '1–3 years' },
  { title: 'Radiology Technician', dept: 'Radiology', type: 'Full-Time', exp: '2–5 years' },
  { title: 'Pharmacist', dept: 'Pharmacy', type: 'Full-Time', exp: '1–3 years' },
  { title: 'Medical Receptionist', dept: 'Administration', type: 'Full-Time', exp: '0–2 years' },
]

const DEPT_OPTIONS = [
  'Medical / Clinical', 'Nursing', 'Surgical', 'Radiology',
  'Pathology & Lab', 'Pharmacy', 'Emergency & Critical Care',
  'Administration', 'Housekeeping / Support', 'Other',
]

const EMPTY = { name: '', phone: '', email: '', dept: '', position: '', experience: '', message: '' }

export default function Careers() {
  const { t } = useLanguage()
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
    setTimeout(() => { setSent(false); setForm(EMPTY) }, 4000)
  }

  const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#1a3a6b]'

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      {/* Hero */}
      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <i className="ph ph-briefcase"></i> Join Our Team
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Careers at NK Hospital</h1>
          <p className="text-sm text-blue-200/90">Be part of a team committed to delivering exceptional, compassionate healthcare across North Karnataka.</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> Home
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>Careers</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-14 w-full flex-1">

        {/* Why Join Us */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>Why NK Hospital</p>
          <h2 className="text-2xl font-extrabold mb-8" style={{ color: '#1a3a6b' }}>A Great Place to Grow Your Career</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: 'ph ph-graduation-cap', title: 'Learning & Growth', desc: 'Continuous training, CME programs, and skill development opportunities.' },
              { icon: 'ph ph-users', title: 'Expert Team', desc: 'Work alongside experienced specialists in a collaborative environment.' },
              { icon: 'ph ph-hospital', title: 'Modern Facility', desc: 'State-of-the-art equipment and infrastructure across all departments.' },
              { icon: 'ph ph-heart', title: 'Meaningful Work', desc: 'Make a real difference in patient lives every single day.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg" style={{ backgroundColor: '#eaf1fb', color: '#1a3a6b' }}>
                  <i className={icon}></i>
                </div>
                <h4 className="text-sm font-bold mb-1" style={{ color: '#1a3a6b' }}>{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold mb-6" style={{ color: '#1a3a6b' }}>Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {openings.map(({ title, dept, type, exp }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-sm font-bold leading-snug" style={{ color: '#1a3a6b' }}>{title}</h4>
                  <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 rounded-full whitespace-nowrap">{type}</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-gray-500">
                  <div className="flex items-center gap-1.5"><i className="ph ph-buildings text-xs"></i> {dept}</div>
                  <div className="flex items-center gap-1.5"><i className="ph ph-clock text-xs"></i> Experience: {exp}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">Don't see a matching role? Apply below — we review all applications and will reach out when a suitable opening arises.</p>
        </div>

        {/* Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-lg font-extrabold mb-2" style={{ color: '#1a3a6b' }}>Apply Now</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Fill in the form and our HR team will contact you within 3–5 business days.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#eaf1fb', color: '#1a3a6b' }}>
                  <i className="ph ph-envelope text-base"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">HR Email</p>
                  <a href="mailto:hr@nkhospital.com" className="text-xs font-semibold hover:underline" style={{ color: '#1a3a6b' }}>hr@nkhospital.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#eaf1fb', color: '#1a3a6b' }}>
                  <i className="ph ph-phone text-base"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">HR Contact</p>
                  <a href="tel:9901573323" className="text-xs font-semibold hover:underline" style={{ color: '#1a3a6b' }}>9901573323</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                  <i className="ph-fill ph-whatsapp-logo text-base"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/919901573323" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-green-600 hover:underline">Chat with HR</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
                  <i className="ph-fill ph-check-circle"></i>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Application Received!</h3>
                <p className="text-sm text-gray-500">Our HR team will review your application and get back to you within 3–5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => set('name', e.target.value)}
                      className={inputCls} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Phone Number *</label>
                    <input required type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                      className={inputCls} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => set('email', e.target.value)}
                    className={inputCls} placeholder="you@email.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Department / Area *</label>
                    <select required value={form.dept} onChange={e => set('dept', e.target.value)} className={inputCls}>
                      <option value="">Select department</option>
                      {DEPT_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Position Applied For *</label>
                    <input required type="text" value={form.position} onChange={e => set('position', e.target.value)}
                      className={inputCls} placeholder="e.g. Staff Nurse, Resident MO" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Years of Experience</label>
                  <input type="text" value={form.experience} onChange={e => set('experience', e.target.value)}
                    className={inputCls} placeholder="e.g. 3 years, Fresher" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Cover Letter / Message</label>
                  <textarea rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about yourself, your qualifications, and why you'd like to join NK Hospital..."></textarea>
                </div>
                <p className="text-[11px] text-gray-400">You may also email your CV directly to <a href="mailto:hr@nkhospital.com" className="font-semibold underline">hr@nkhospital.com</a></p>
                <button type="submit" disabled={loading}
                  className="text-white px-8 py-3 rounded-lg text-sm font-bold hover:opacity-90 disabled:opacity-50 flex items-center gap-2 transition-opacity"
                  style={{ backgroundColor: '#1a3a6b' }}>
                  {loading
                    ? <><i className="ph ph-circle-notch animate-spin"></i> Submitting...</>
                    : <><i className="ph ph-paper-plane-tilt"></i> Submit Application</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
