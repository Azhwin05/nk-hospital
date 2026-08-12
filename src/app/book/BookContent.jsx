'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { supabase } from '@/lib/supabase'
import { optimg } from '@/lib/img'
import { useLanguage } from '@/context/LanguageContext'

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

const isValidPhone = (raw) => {
  const d = String(raw || '').replace(/\D/g, '')
  return d.length >= 10 && d.length <= 13
}

function DoctorSkeleton() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center animate-pulse">
      <div className="w-20 h-20 rounded-full bg-gray-200 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-2.5 bg-gray-100 rounded w-1/2 mb-4"></div>
      <div className="h-8 bg-gray-100 rounded-lg w-full mt-auto"></div>
    </div>
  )
}

export default function BookContent() {
  const [doctors, setDoctors] = useState([])
  const [doctorsLoading, setDoctorsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', date: '', slot: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState(STATUS.idle)
  const [errorMsg, setErrorMsg] = useState('')
  const [smsSent, setSmsSent] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (!supabase) { setDoctorsLoading(false); return }
    supabase.from('doctors').select('*').order('name').then(({ data }) => {
      if (data) setDoctors(data)
      setDoctorsLoading(false)
    })
  }, [])

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase())
  )

  const today = new Date().toISOString().split('T')[0]

  // The /book/book-appointment route drives the popup and the ?doctor query
  // picks which doctor it's for, so the open form has its own shareable URL.
  const bookingActive = pathname === '/book/book-appointment'
  const doctorName = searchParams.get('doctor')
  const selectedDoctor = bookingActive && doctorName
    ? doctors.find(d => d.name === doctorName) || null
    : null

  const post = async (url, payload) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    return { ok: res.ok, data }
  }

  const handleBook = async (e) => {
    e.preventDefault()
    if (!isValidPhone(form.phone)) {
      setErrorMsg(t('book_invalid_phone'))
      return
    }
    setErrorMsg('')
    setSubmitStatus(STATUS.loading)

    const booking = await post('/api/appointments', {
      name: form.name,
      phone: form.phone,
      doctor_id: selectedDoctor.id,
      date: form.date,
      slot: form.slot,
      message: form.message,
    })

    if (!booking.ok) {
      setSubmitStatus(STATUS.idle)
      setErrorMsg(booking.data.error || t('book_error'))
      return
    }

    setSmsSent(!!booking.data.smsSent)
    setSubmitStatus(STATUS.success)
    setTimeout(resetModal, 4000)
  }

  const resetModal = () => {
    router.push('/book', { scroll: false })
    setSubmitStatus(STATUS.idle)
    setForm({ name: '', phone: '', date: '', slot: '', message: '' })
    setErrorMsg('')
    setSmsSent(false)
  }

  const closeModal = () => {
    if (submitStatus === STATUS.loading) return
    resetModal()
  }

  return (
    <div className="antialiased bg-slate-50 text-gray-800 flex flex-col min-h-screen">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a5f, #312e81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{t('book_heading')}</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">{t('book_sub')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>{t('book_heading')}</span>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24 pt-10 pb-6 w-full">
        <div className="max-w-3xl mx-auto relative mb-10">
          <i className="ph ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={t('book_search')}
            className="w-full pl-12 pr-5 py-4 rounded-full border border-gray-200 text-sm outline-none shadow-sm bg-white placeholder:text-gray-400"
            onFocus={e => e.target.style.borderColor = '#1a3a6b'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center" style={{ color: '#1a3a6b' }}>
            <i className="ph ph-user-circle text-sm"></i>
          </div>
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">{t('book_our_docs')}</h2>
        </div>

        {doctorsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {Array.from({ length: 8 }).map((_, i) => <DoctorSkeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-3xl">
              <i className="ph ph-magnifying-glass"></i>
            </div>
            <h3 className="text-base font-bold text-gray-700 mb-1">{t('book_no_docs')}</h3>
            <p className="text-xs text-gray-500">{t('book_no_docs_sub')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map(doc => (
              <Link key={doc.id} href={`/book/book-appointment?doctor=${encodeURIComponent(doc.name)}`} scroll={false}
                className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-[#1a3a6b] cursor-pointer group transition-all active:scale-95">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-gray-100 group-hover:border-[#1a3a6b] transition-colors shrink-0 bg-gray-100">
                  <img src={optimg(doc.photo_url, 200)} className="w-full h-full object-cover object-top" alt={doc.name} loading="lazy" width="80" height="80" />
                </div>
                <h3 className="text-xs font-bold text-gray-800 leading-snug mb-1 group-hover:text-[#1a3a6b]">{doc.name}</h3>
                <p className="text-[11px] font-semibold text-blue-500 mb-3">{doc.specialty}</p>
                <div className="mt-auto w-full py-2 rounded-lg text-[10px] font-bold border border-[#1a3a6b] text-[#1a3a6b] group-hover:bg-[#1a3a6b] group-hover:text-white transition-colors flex items-center justify-center gap-1">
                  <i className="ph ph-calendar-plus"></i> {t('book_btn')}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>

            {submitStatus === STATUS.success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
                  <i className="ph-fill ph-check-circle"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">{t('book_success_title')}</h4>
                <p className="text-sm text-gray-500">{t('book_success_sub')}</p>
                {smsSent && (
                  <p className="text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
                    <i className="ph ph-chat-circle-text"></i> {t('book_success_sms')}
                  </p>
                )}
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
                    <img src={optimg(selectedDoctor.photo_url, 160)} className="w-full h-full object-cover object-top" alt={selectedDoctor.name} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-tight" style={{ color: '#1a3a6b' }}>{selectedDoctor.name}</h3>
                    <p className="text-[11px] text-blue-500 font-semibold">{selectedDoctor.specialty}</p>
                    {selectedDoctor.experience && (
                      <p className="text-[10px] text-gray-400 mt-0.5"><i className="ph ph-clock mr-1"></i>{selectedDoctor.experience} {t('book_experience')}</p>
                    )}
                  </div>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-700 self-start">
                    <i className="ph ph-x text-xl"></i>
                  </button>
                </div>

                <form onSubmit={handleBook} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('book_full_name')}</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors"
                      placeholder={t('book_name_ph')} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('book_phone_label')}</label>
                    <input required type="tel" value={form.phone}
                      onChange={e => { setForm({ ...form, phone: e.target.value }); setErrorMsg('') }}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors"
                      placeholder={t('book_phone_ph')} />
                    <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                      <i className="ph ph-shield-check"></i> {t('book_phone_hint')}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('book_date_label')}</label>
                    <input required type="date" min={today} value={form.date} onChange={e => setForm({ ...form, date: e.target.value, slot: '' })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-2 block">{t('book_slot_label')}</label>
                    <div className="grid grid-cols-4 gap-2">
                      {(selectedDoctor.available_slots || []).map(slot => (
                        <button key={slot} type="button"
                          onClick={() => setForm({ ...form, slot })}
                          className={`py-2 rounded-lg text-[10px] font-bold border transition-colors ${form.slot === slot ? 'text-white border-[#1a3a6b]' : 'border-gray-200 text-gray-600 hover:border-[#1a3a6b] hover:text-[#1a3a6b]'}`}
                          style={form.slot === slot ? { backgroundColor: '#1a3a6b' } : {}}>
                          {slot}
                        </button>
                      ))}
                    </div>
                    {!form.slot && <p className="text-[10px] text-gray-400 mt-1">{t('book_select_slot')}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('book_msg_label')}</label>
                    <textarea rows={2} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors resize-none"
                      placeholder={t('book_symptoms_ph')}></textarea>
                  </div>

                  {errorMsg && <p className="text-xs text-red-500 text-center">{errorMsg}</p>}

                  <button type="submit" disabled={!form.slot || submitStatus === STATUS.loading}
                    className="w-full text-white py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#1a3a6b' }}>
                    {submitStatus === STATUS.loading
                      ? <><i className="ph ph-circle-notch animate-spin"></i> {t('book_booking')}</>
                      : <><i className="ph ph-calendar-plus"></i> {t('book_btn')}</>}
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
