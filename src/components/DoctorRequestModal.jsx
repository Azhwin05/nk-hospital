'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

// Shared "request an appointment" popup used by the doctors listing
// (/find-doctor) and by the Doctors tab of every specialty page. Both open it
// from a real URL so the form is shareable and the back button closes it.

const SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM']

const REQ_STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

export function DoctorAvatar({ img, initials, gender, name }) {
  if (img) {
    return (
      <div className="w-[4.6rem] h-[5.9rem] shrink-0 bg-white p-0.75 rounded-sm shadow-sm border border-gray-200">
        <div className="w-full h-full rounded-xs overflow-hidden bg-gray-100">
          <img src={img} className="w-full h-full object-cover object-top" alt={name} loading="lazy" />
        </div>
      </div>
    )
  }
  const bg = gender === 'female' ? '#e91e8c' : '#1a3a6b'
  return (
    <div className="w-[4.6rem] h-[5.9rem] shrink-0 bg-white p-0.75 rounded-sm shadow-sm border border-gray-200">
      <div className="w-full h-full rounded-xs flex flex-col items-center justify-center gap-1"
        style={{ backgroundColor: bg + '15', border: `1.5px solid ${bg}30` }}>
        <span className="text-lg font-extrabold" style={{ color: bg }}>{initials}</span>
        <i className={`text-base ${gender === 'female' ? 'ph-fill ph-gender-female' : 'ph-fill ph-gender-male'}`}
          style={{ color: bg, opacity: 0.4 }}></i>
      </div>
    </div>
  )
}

// Initials for doctors whose data doesn't carry them (specialty pages).
export const initialsOf = (name) =>
  name.split(' ').filter(w => w.match(/^[A-Z]/)).slice(0, 2).map(w => w[0]).join('')

export default function DoctorRequestModal({ doctor, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', slot: '', message: '' })
  const [status, setStatus] = useState(REQ_STATUS.idle)
  const [errorMsg, setErrorMsg] = useState('')
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setStatus(REQ_STATUS.loading)

    if (!supabase) {
      setStatus(REQ_STATUS.error)
      setErrorMsg('Booking is temporarily unavailable. Please call us at 9901573323.')
      return
    }

    const { error } = await supabase.from('doctor_appointment_requests').insert({
      patient_name: form.name,
      phone: form.phone,
      doctor_name: doctor.name,
      specialty: doctor.specialty,
      preferred_date: form.date || null,
      time_slot: form.slot || null,
      message: form.message || null,
    })

    if (error) {
      setStatus(REQ_STATUS.error)
      setErrorMsg('Something went wrong. Please try again or call 9901573323.')
      return
    }
    setStatus(REQ_STATUS.success)
  }

  const close = () => { if (status !== REQ_STATUS.loading) onClose() }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={close}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {status === REQ_STATUS.success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
              <i className="ph-fill ph-check-circle"></i>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-1">Appointment Requested!</h4>
            <p className="text-sm text-gray-500 mb-5">Our team will call you shortly to confirm your appointment with {doctor.name}.</p>
            <button onClick={onClose} className="w-full text-white py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a3a6b' }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start gap-4 mb-5 pb-4 border-b border-gray-100">
              <DoctorAvatar img={doctor.img} initials={doctor.initials} gender={doctor.gender} name={doctor.name} />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold leading-tight" style={{ color: '#1a3a6b' }}>{doctor.name}</h3>
                <p className="text-[11px] text-blue-500 font-semibold">{doctor.specialty}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{doctor.qual}</p>
              </div>
              <button onClick={close} className="text-gray-400 hover:text-gray-700 self-start"><i className="ph ph-x text-xl"></i></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name</label>
                <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors"
                  placeholder="Patient's full name" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Phone Number</label>
                <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors"
                  placeholder="10-digit mobile number" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Preferred Date</label>
                <input required type="date" min={today} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-2 block">Preferred Time Slot</label>
                <div className="grid grid-cols-4 gap-2">
                  {SLOTS.map(slot => (
                    <button key={slot} type="button" onClick={() => setForm({ ...form, slot })}
                      className={`py-2 rounded-lg text-[10px] font-bold border transition-colors ${form.slot === slot ? 'text-white border-[#1a3a6b]' : 'border-gray-200 text-gray-600 hover:border-[#1a3a6b] hover:text-[#1a3a6b]'}`}
                      style={form.slot === slot ? { backgroundColor: '#1a3a6b' } : {}}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Message (optional)</label>
                <textarea rows={2} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors resize-none"
                  placeholder="Describe your symptoms or reason for visit"></textarea>
              </div>

              {errorMsg && <p className="text-xs text-red-500 text-center">{errorMsg}</p>}

              <button type="submit" disabled={status === REQ_STATUS.loading}
                className="w-full text-white py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#1a3a6b' }}>
                {status === REQ_STATUS.loading
                  ? <><i className="ph ph-circle-notch animate-spin"></i> Requesting...</>
                  : <><i className="ph ph-calendar-check"></i> Request Appointment</>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
