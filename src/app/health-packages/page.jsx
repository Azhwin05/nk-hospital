'use client'
import { useState } from 'react'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { supabase } from '@/lib/supabase'
import { useLanguage } from '@/context/LanguageContext'

const BOOK_STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

// Patient ID like NK-4F9K2A
function generatePatientId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return `NK-${code}`
}

const packages = [
  {
    name: 'Routine Health Checkup',
    icon: 'ph ph-heart-pulse',
    color: 'text-rose-500 bg-rose-50',
    tiers: [
      { label: 'Basic', price: '₹1,800', tests: ['CBC', 'FBS', 'Lipid Profile', 'LFT', 'RFT', 'Urine Routine & Microscopy'] },
      { label: 'Executive', price: '₹4,410', tests: ['CBC', 'FBS', 'Lipid Profile', 'LFT', 'RFT', 'Urine Routine & Microscopy', 'TSH', 'Vitamin D', 'Vitamin B12', 'Electrolytes'] },
      { label: 'Master', price: '₹7,200', tests: ['CBC', 'FBS', 'Lipid Profile', 'LFT', 'RFT', 'Urine Routine & Microscopy', 'TSH', 'Vitamin D', 'Vitamin B12', 'Electrolytes', 'hs-CRP', 'Iron Studies', 'Calcium', 'Phosphorus'] },
    ],
  },
  {
    name: 'Diabetes Profile',
    icon: 'ph ph-drop',
    color: 'text-amber-500 bg-amber-50',
    tiers: [
      { label: 'Basic', price: '₹900', tests: ['FBS', 'PPBS', 'HbA1c', 'Urine Sugar', 'Serum Creatinine'] },
      { label: 'Advanced', price: '₹3,870', tests: ['FBS', 'PPBS', 'HbA1c', 'Urine Sugar', 'Serum Creatinine', 'Fasting Insulin', 'Urine Microalbumin', 'Lipid Profile', 'hs-CRP', 'Vitamin D'] },
    ],
  },
  {
    name: 'Hypertension Profile',
    icon: 'ph ph-activity',
    color: 'text-red-500 bg-red-50',
    tiers: [
      { label: 'Basic', price: '₹1,575', tests: ['CBC', 'FBS', 'Lipid Profile', 'RFT', 'Electrolytes', 'Urine Routine'] },
      { label: 'Advanced', price: '₹3,060', tests: ['CBC', 'FBS', 'Lipid Profile', 'RFT', 'Electrolytes', 'Urine Routine', 'LFT', 'hs-CRP', 'TSH', 'ECG'] },
    ],
  },
  {
    name: 'Infertility Profile',
    icon: 'ph ph-gender-intersex',
    color: 'text-pink-500 bg-pink-50',
    tiers: [
      { label: 'Male', price: '₹4,050', tests: ['Semen Analysis', 'Testosterone', 'LH', 'FSH', 'Prolactin', 'Estradiol', 'TSH'] },
      { label: 'Female', price: '₹5,400', tests: ['LH', 'FSH', 'Prolactin', 'Estradiol', 'Progesterone', 'AMH', 'TSH', 'Fasting Insulin'] },
    ],
  },
  {
    name: 'Cardiac Risk Profile',
    icon: 'ph ph-heartbeat',
    color: 'text-red-600 bg-red-50',
    tiers: [
      { label: 'Basic', price: '₹1,305', tests: ['Lipid Profile', 'FBS', 'HbA1c', 'hs-CRP'] },
      { label: 'Advanced', price: '₹3,645', tests: ['Lipid Profile', 'FBS', 'HbA1c', 'hs-CRP', 'CK-MB', 'Troponin I/T', 'ECG', 'Homocysteine'] },
    ],
  },
  {
    name: 'Thyroid Profile',
    icon: 'ph ph-thermometer',
    color: 'text-blue-500 bg-blue-50',
    tiers: [
      { label: 'Basic', price: '₹450', tests: ['TSH', 'T3', 'T4'] },
      { label: 'Advanced', price: '₹3,510', tests: ['TSH', 'T3', 'T4', 'Free T3', 'Free T4', 'Anti-TPO', 'Anti-Thyroglobulin Antibody'] },
    ],
  },
  {
    name: 'Fitness Profile — FitTrack',
    icon: 'ph ph-person-simple-run',
    color: 'text-emerald-600 bg-emerald-50',
    tiers: [
      { label: 'Basic', price: '₹2,025', tests: ['CBC', 'FBS', 'Lipid Profile', 'LFT', 'RFT', 'Electrolytes'] },
      { label: 'Plus', price: '₹3,240', tests: ['Vitamin D', 'Vitamin B12', 'CK Total', 'Ferritin'] },
      { label: 'Pro', price: '₹1,530', tests: ['Testosterone / Estradiol', 'Cortisol', 'hs-CRP'] },
    ],
  },
  {
    name: 'Geriatric Profile — GoldenCare',
    icon: 'ph ph-users',
    color: 'text-indigo-500 bg-indigo-50',
    tiers: [
      { label: 'Basic', price: '₹5,355', tests: ['CBC', 'FBS', 'HbA1c', 'Lipid Profile', 'LFT', 'RFT', 'TSH', 'Vitamin D', 'Vitamin B12', 'Calcium', 'Phosphorus', 'Electrolytes'] },
      { label: 'Plus', price: '₹1,030', tests: ['PSA', 'ESR', 'Urine Routine', 'Stool Routine'] },
    ],
  },
  {
    name: 'Pre-Surgery / Pre-Operative Profile',
    icon: 'ph ph-knife',
    color: 'text-violet-500 bg-violet-50',
    tiers: [
      { label: 'Standard', price: null, tests: ['CBC', 'Blood Group & Rh', 'FBS', 'Urea', 'Creatinine', 'LFT', 'Urine Routine', 'PT/INR', 'HBsAg', 'HIV I & II', 'VDRL'] },
      { label: 'Extended', price: null, tests: ['ECG', 'Chest X-ray', 'Additional Coagulation Tests', 'Electrolytes'] },
    ],
  },
]

function PackageCard({ name, icon, color, tiers, bookLabel, onBook }) {
  const [active, setActive] = useState(0)
  const tier = tiers[active]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
      {/* Header */}
      <div className="p-5 pb-0">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-3 ${color}`}>
          <i className={icon}></i>
        </div>
        <h3 className="text-sm font-bold leading-snug mb-4" style={{ color: '#1a3a6b' }}>{name}</h3>

        {/* Tier tabs */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {tiers.map(({ label }, i) => (
            <button key={label} onClick={() => setActive(i)}
              className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors ${active === i ? 'text-white' : 'bg-slate-100 text-gray-500 hover:bg-slate-200'}`}
              style={active === i ? { backgroundColor: '#1a3a6b' } : {}}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="px-5 pb-3 border-b border-gray-100">
        {tier.price
          ? <span className="text-2xl font-extrabold" style={{ color: '#1a3a6b' }}>{tier.price}</span>
          : <span className="text-sm font-semibold text-gray-400">Contact for pricing</span>
        }
      </div>

      {/* Test list */}
      <div className="px-5 py-4 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{tier.tests.length} Tests Included</p>
        <ul className="space-y-1.5">
          {tier.tests.map((test, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[9px] font-bold" style={{ color: '#1a3a6b' }}>{i + 1}</span>
              {test}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-5 pt-3">
        <button onClick={() => onBook({ packageName: name, tierLabel: tier.label, price: tier.price })}
          className="w-full text-center text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
          style={{ backgroundColor: '#1a3a6b' }}>
          <i className="ph ph-calendar-plus"></i> {bookLabel}
        </button>
      </div>
    </div>
  )
}

function PackageBookingModal({ booking, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' })
  const [status, setStatus] = useState(BOOK_STATUS.idle)
  const [patientId, setPatientId] = useState('')
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(BOOK_STATUS.loading)
    const newId = generatePatientId()
    const { error } = await supabase.from('package_bookings').insert({
      patient_id: newId,
      patient_name: form.name,
      phone: form.phone,
      package_name: booking.packageName,
      tier_label: booking.tierLabel,
      price: booking.price || null,
      preferred_date: form.date || null,
      message: form.message || null,
    })
    if (error) {
      setStatus(BOOK_STATUS.error)
      setTimeout(() => setStatus(BOOK_STATUS.idle), 3000)
    } else {
      setPatientId(newId)
      setStatus(BOOK_STATUS.success)
    }
  }

  const close = () => { if (status !== BOOK_STATUS.loading) onClose() }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={close}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {status === BOOK_STATUS.success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
              <i className="ph-fill ph-check-circle"></i>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-1">Booking Confirmed!</h4>
            <p className="text-sm text-gray-500 mb-5">Please save your Patient ID and show it at the hospital.</p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl py-4 mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Your Patient ID</p>
              <p className="text-2xl font-extrabold tracking-wide" style={{ color: '#1a3a6b' }}>{patientId}</p>
            </div>
            <button onClick={onClose} className="w-full text-white py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a3a6b' }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-base font-bold leading-tight" style={{ color: '#1a3a6b' }}>{booking.packageName}</h3>
                <p className="text-[11px] text-blue-500 font-semibold mt-0.5">
                  {booking.tierLabel}{booking.price ? ` — ${booking.price}` : ''}
                </p>
              </div>
              <button onClick={close} className="text-gray-400 hover:text-gray-700"><i className="ph ph-x text-xl"></i></button>
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
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Message (optional)</label>
                <textarea rows={2} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors resize-none"
                  placeholder="Any notes for the hospital"></textarea>
              </div>

              {status === BOOK_STATUS.error && (
                <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>
              )}

              <button type="submit" disabled={status === BOOK_STATUS.loading}
                className="w-full text-white py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ backgroundColor: '#1a3a6b' }}>
                {status === BOOK_STATUS.loading
                  ? <><i className="ph ph-circle-notch animate-spin"></i> Booking...</>
                  : <><i className="ph ph-calendar-check"></i> Confirm Booking</>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function HealthPackages() {
  const { t } = useLanguage()
  const [booking, setBooking] = useState(null)

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{t('hp_heading')}</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">{t('hp_sub')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>{t('hp_breadcrumb')}</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>{t('hp_eyebrow')}</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{t('hp_choose')}</h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{t('hp_desc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} bookLabel={t('hp_book_now')} onBook={setBooking} />
          ))}
        </div>
      </main>

      {booking && <PackageBookingModal booking={booking} onClose={() => setBooking(null)} />}

      <Footer />
    </div>
  )
}
