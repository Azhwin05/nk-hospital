import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { supabase } from '../lib/supabase'

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

export default function Book() {
  const [doctors, setDoctors] = useState([])
  const [search, setSearch] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', date: '', slot: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState(STATUS.idle)

  useEffect(() => {
    supabase.from('doctors').select('*').order('name').then(({ data }) => {
      if (data) setDoctors(data)
    })
  }, [])

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase())
  )

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(STATUS.loading)
    const { error } = await supabase.from('appointments').insert({
      patient_name: form.name,
      phone: form.phone,
      doctor_id: selectedDoctor.id,
      doctor_name: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date: form.date,
      time_slot: form.slot,
      message: form.message || null,
    })
    if (error) {
      setSubmitStatus(STATUS.error)
      setTimeout(() => setSubmitStatus(STATUS.idle), 3000)
    } else {
      setSubmitStatus(STATUS.success)
      setTimeout(() => {
        setSelectedDoctor(null)
        setSubmitStatus(STATUS.idle)
        setForm({ name: '', phone: '', date: '', slot: '', message: '' })
      }, 2500)
    }
  }

  const closeModal = () => {
    if (submitStatus === STATUS.loading) return
    setSelectedDoctor(null)
    setSubmitStatus(STATUS.idle)
    setForm({ name: '', phone: '', date: '', slot: '', message: '' })
  }

  return (
    <div className="antialiased bg-slate-50 text-gray-800 flex flex-col min-h-screen">
      <TopBarDark />
      <Navbar />

      {/* Hero */}
      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a5f, #312e81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Book Appointment</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">Choose your doctor and book a slot in seconds</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 flex items-center text-xs font-semibold text-gray-500">
          <Link to="/" className="flex items-center gap-1.5 hover:text-[#0f4c81] text-gray-400">
            <i className="ph ph-house text-sm"></i> Home
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#0f4c81' }}>Book Appointment</span>
        </div>
      </div>

      {/* Search + Grid */}
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 pt-10 pb-6 w-full">
        <div className="max-w-3xl mx-auto relative mb-10">
          <i className="ph ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by doctor name or speciality"
            className="w-full pl-12 pr-5 py-4 rounded-full border border-gray-200 text-sm outline-none shadow-sm bg-white placeholder:text-gray-400"
            onFocus={e => e.target.style.borderColor = '#0f4c81'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center" style={{ color: '#0f4c81' }}>
            <i className="ph ph-user-circle text-sm"></i>
          </div>
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Our Doctors</h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-3xl">
              <i className="ph ph-magnifying-glass"></i>
            </div>
            <h3 className="text-base font-bold text-gray-700 mb-1">No doctors found</h3>
            <p className="text-xs text-gray-500">Try searching by name or speciality</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map(doc => (
              <div key={doc.id} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-[#0f4c81] cursor-pointer group transition-all"
                onClick={() => setSelectedDoctor(doc)}>
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-gray-100 group-hover:border-[#0f4c81] transition-colors shrink-0 bg-gray-100">
                  <img src={doc.photo_url} className="w-full h-full object-cover object-top" alt={doc.name} />
                </div>
                <h3 className="text-xs font-bold text-gray-800 leading-snug mb-1 group-hover:text-[#0f4c81]">{doc.name}</h3>
                <p className="text-[10px] font-semibold text-blue-500 mb-3">{doc.specialty}</p>
                <div className="mt-auto w-full py-2 rounded-lg text-[10px] font-bold border border-[#0f4c81] text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white transition-colors flex items-center justify-center gap-1">
                  <i className="ph ph-calendar-plus"></i> Book Appointment
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>

            {submitStatus === STATUS.success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
                  <i className="ph-fill ph-check-circle"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">Appointment Requested!</h4>
                <p className="text-sm text-gray-500">We'll confirm your booking with {selectedDoctor.name} shortly.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
                    <img src={selectedDoctor.photo_url} className="w-full h-full object-cover object-top" alt={selectedDoctor.name} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-tight" style={{ color: '#0f4c81' }}>{selectedDoctor.name}</h3>
                    <p className="text-[11px] text-blue-500 font-semibold">{selectedDoctor.specialty}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5"><i className="ph ph-clock mr-1"></i>{selectedDoctor.experience} yrs experience</p>
                  </div>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-700 self-start">
                    <i className="ph ph-x text-xl"></i>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Phone Number *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors"
                      placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Preferred Date *</label>
                    <input required type="date" min={today} value={form.date} onChange={e => setForm({ ...form, date: e.target.value, slot: '' })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-2 block">Time Slot *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {(selectedDoctor.available_slots || []).map(slot => (
                        <button key={slot} type="button"
                          onClick={() => setForm({ ...form, slot })}
                          className={`py-2 rounded-lg text-[10px] font-bold border transition-colors ${form.slot === slot ? 'text-white border-[#0f4c81]' : 'border-gray-200 text-gray-600 hover:border-[#0f4c81] hover:text-[#0f4c81]'}`}
                          style={form.slot === slot ? { backgroundColor: '#0f4c81' } : {}}>
                          {slot}
                        </button>
                      ))}
                    </div>
                    {!form.slot && <p className="text-[10px] text-gray-400 mt-1">Please select a time slot</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Reason / Message (Optional)</label>
                    <textarea rows={2} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0f4c81] transition-colors resize-none"
                      placeholder="Describe your symptoms..."></textarea>
                  </div>

                  {submitStatus === STATUS.error && (
                    <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>
                  )}

                  <button type="submit" disabled={!form.slot || submitStatus === STATUS.loading}
                    className="w-full text-white py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#0f4c81' }}>
                    {submitStatus === STATUS.loading
                      ? <><i className="ph ph-circle-notch animate-spin"></i> Booking...</>
                      : <><i className="ph ph-calendar-check"></i> Confirm Appointment</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
