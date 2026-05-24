import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const specialities = [
  { name: 'Bariatric & Metabolic Surgery', icon: 'ph ph-scales', color: 'text-red-500 bg-red-50' },
  { name: 'Biochemistry', icon: 'ph ph-flask', color: 'text-blue-500 bg-blue-50' },
  { name: 'Blood Bank - Transfusion', icon: 'ph ph-drop', color: 'text-rose-500 bg-rose-50' },
  { name: 'Cardiology', icon: 'ph ph-heartbeat', color: 'text-red-600 bg-red-50' },
  { name: 'Cardiothoracic Surgery', icon: 'ph ph-activity', color: 'text-orange-500 bg-orange-50' },
  { name: 'Critical Care', icon: 'ph ph-first-aid-kit', color: 'text-teal-500 bg-teal-50' },
  { name: 'Dental', icon: 'ph ph-tooth', color: 'text-sky-500 bg-sky-50' },
  { name: 'Dermatology', icon: 'ph ph-sparkle', color: 'text-indigo-500 bg-indigo-50' },
  { name: 'Dietetics', icon: 'ph ph-leaf', color: 'text-green-500 bg-green-50' },
  { name: 'Emergency Medicine', icon: 'ph ph-ambulance', color: 'text-red-500 bg-red-50' },
  { name: 'Endocrinology', icon: 'ph ph-thermometer', color: 'text-amber-500 bg-amber-50' },
  { name: 'Endoscopic Anesthesiology', icon: 'ph ph-syringe', color: 'text-indigo-600 bg-indigo-50' },
  { name: 'ENT', icon: 'ph ph-ear', color: 'text-purple-500 bg-purple-50' },
  { name: 'Geriatric Medicine', icon: 'ph ph-users', color: 'text-emerald-500 bg-emerald-50' },
  { name: 'Medical Gastroenterology', icon: 'ph ph-pulse', color: 'text-pink-500 bg-pink-50' },
  { name: 'Surgical Gastroenterology', icon: 'ph ph-scissors', color: 'text-orange-600 bg-orange-50' },
  { name: 'Hepatology', icon: 'ph ph-pill', color: 'text-yellow-600 bg-yellow-50' },
  { name: 'Liver Transplant', icon: 'ph ph-git-merge', color: 'text-cyan-500 bg-cyan-50' },
  { name: 'Medical Oncology', icon: 'ph ph-first-aid-kit', color: 'text-violet-500 bg-violet-50' },
  { name: 'Surgical Oncology', icon: 'ph ph-scissors', color: 'text-fuchsia-500 bg-fuchsia-50' },
  { name: 'Neurology', icon: 'ph ph-brain', color: 'text-indigo-500 bg-indigo-50' },
  { name: 'Radiation Oncology', icon: 'ph ph-radioactive', color: 'text-emerald-600 bg-emerald-50' },
  { name: 'Neurosurgery', icon: 'ph ph-brain', color: 'text-blue-600 bg-blue-50' },
  { name: 'Orthopedics', icon: 'ph ph-bone', color: 'text-orange-500 bg-orange-50' },
  { name: 'Pediatrics', icon: 'ph ph-smiley', color: 'text-sky-500 bg-sky-50' },
  { name: 'Ophthalmology', icon: 'ph ph-eye', color: 'text-teal-600 bg-teal-50' },
  { name: 'Urology', icon: 'ph ph-drop', color: 'text-blue-500 bg-blue-50' },
  { name: 'Nephrology', icon: 'ph ph-funnel', color: 'text-slate-600 bg-slate-50' },
  { name: 'Pulmonology', icon: 'ph ph-waves', color: 'text-indigo-400 bg-indigo-50' },
  { name: 'Rheumatology', icon: 'ph ph-hand', color: 'text-red-400 bg-red-50' },
]

export default function Book() {
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const filtered = specialities.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setModal(null); setSubmitted(false); setForm({ name: '', phone: '', date: '', message: '' }) }, 2000)
  }

  return (
    <div className="antialiased bg-slate-50 text-gray-800 flex flex-col min-h-screen">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a5f, #312e81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Book Appointment</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">Book appointments with our expert doctors across 40+ specialities</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 flex items-center text-xs font-semibold text-gray-500">
          <Link to="/" className="flex items-center gap-1.5 hover:text-[#0f4c81] text-gray-400">
            <i className="ph ph-house text-sm"></i> Home
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#0f4c81' }}>Book Appointment</span>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 pt-10 pb-6 w-full">
        <div className="max-w-3xl mx-auto relative mb-8">
          <i className="ph ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by specialities"
            className="w-full pl-12 pr-5 py-4 rounded-full border border-gray-200 text-sm outline-none transition-all shadow-sm bg-white placeholder:text-gray-400 text-gray-800"
            style={{ '--tw-ring-color': '#0f4c81' }}
            onFocus={e => e.target.style.borderColor = '#0f4c81'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
        </div>

        <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center" style={{ color: '#0f4c81' }}>
            <i className="ph ph-activity text-sm"></i>
          </div>
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Search by Specialities</h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-3xl">
              <i className="ph ph-magnifying-glass"></i>
            </div>
            <h3 className="text-base font-bold text-gray-700 mb-1">No specialities found</h3>
            <p className="text-xs text-gray-500">Try searching for other terms like 'Cardio', 'Onco', 'Gastro'</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {filtered.map(({ name, icon, color }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#0f4c81] cursor-pointer group transition-all"
                onClick={() => setModal(name)}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors group-hover:bg-[#0f4c81] group-hover:text-white ${color}`}>
                  <i className={`${icon} text-2xl`}></i>
                </div>
                <span className="text-xs font-semibold text-gray-700 tracking-tight leading-snug group-hover:text-[#0f4c81]">{name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-lg font-bold" style={{ color: '#0f4c81' }}>Book Appointment</h3>
                <p className="text-xs text-gray-500 mt-0.5">{modal}</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-700 transition-colors">
                <i className="ph ph-x text-xl"></i>
              </button>
            </div>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
                  <i className="ph-fill ph-check-circle"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">Appointment Requested!</h4>
                <p className="text-sm text-gray-500">We'll confirm your booking shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label>
                  <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Phone Number *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Preferred Date</label>
                  <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Message (Optional)</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors resize-none" placeholder="Describe your symptoms..."></textarea>
                </div>
                <button type="submit" className="w-full text-white py-3 rounded-lg text-sm font-bold transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#0f4c81' }}>
                  Confirm Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
