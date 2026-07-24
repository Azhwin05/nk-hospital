'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { supabase } from '@/lib/supabase'
import { useLanguage } from '@/context/LanguageContext'

const DOCTORS = [
  // ── Consultants ──────────────────────────────────────────────────────────
  { dept: 'Consultants', name: 'Dr. Arif Raza Ahmed',        qual: 'MBBS, MS, MCh (GI Surgery)',                    specialty: 'Surgical Gastroenterology',    exp: '14+', img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/dr_arif_ahmedjpg_o0mbyn.jpg', initials: 'AR', gender: 'male',   filled: true  },
  { dept: 'Consultants', name: 'Dr. Zeeshan Ali',             qual: 'MBBS, MD, DM (Gastroenterology)',               specialty: 'Medical Gastroenterology',     exp: '13+', img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/Dr_zeeshan_ali_vhcdft.jpg',     initials: 'ZA', gender: 'male',   filled: true  },
  { dept: 'Consultants', name: 'Dr. Veeresh Godi',            qual: 'MBBS, MD (Internal Medicine)',                  specialty: 'General Medicine',             exp: '3+',  img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/Dr_veeresh_godi_awqtsd.jpg',    initials: 'VG', gender: 'male',   filled: true  },
  { dept: 'Consultants', name: 'Dr. Mahalingam',              qual: 'MBBS, MS Ortho, FMISS',                        specialty: 'Orthopedics & Spine Surgery',  exp: '5+',  img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/Dr_Mahaligam_jppgtd.jpg',       initials: 'MA', gender: 'male',   filled: true  },
  { dept: 'Consultants', name: 'Dr. Syed Zafar ul Islam',     qual: 'MBBS, MS Ortho, FIASM',                        specialty: 'Orthopedics',                  exp: '',    img: null,                              initials: 'SZ', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Minhaj Harsuri',          qual: 'MBBS, MCh (Neurosurgery)',                      specialty: 'Neurosurgery',                 exp: '',    img: null,                              initials: 'MH', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Sharan Gouda Patil',      qual: 'MBBS, MD (Neurology)',                          specialty: 'Neurology',                    exp: '',    img: null,                              initials: 'SG', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Shoiab Hakeem',           qual: 'MBBS, MS (ENT & Head Neck Surgery)',            specialty: 'ENT',                          exp: '',    img: null,                              initials: 'SH', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Mohammed Taif Bendigeri', qual: 'MBBS, MS, MCh (Urology)',                       specialty: 'Urology',                      exp: '',    img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/v1784901589/3_gzbqkz.jpg', initials: 'TB', gender: 'male',   filled: true  },
  { dept: 'Consultants', name: 'Dr. Vivek Patil',             qual: 'MBBS, MD, DM (Nephrology)',                     specialty: 'Nephrology',                   exp: '',    img: null,                              initials: 'VP', gender: 'male',   filled: true  },
  { dept: 'Consultants', name: 'Dr. Mohammed Sameer Kumdale', qual: 'MBBS, MD (Pulmonary Medicine)',                  specialty: 'Pulmonology & Chest',          exp: '',    img: null,                              initials: 'SK', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Shrutika',                qual: 'MBBS, MS (Obstetrics & Gynaecology)',           specialty: 'Gynecology',                   exp: '',    img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/v1784901591/2_ywveqh.jpg', initials: 'SR', gender: 'female', filled: true  },
  { dept: 'Consultants', name: 'Dr. Akshay Chincholli',       qual: 'MBBS (Cardiology)',                             specialty: 'Cardiology',                   exp: '',    img: null,                              initials: 'AC', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Sandeep KS',              qual: 'MBBS, MS (Medical Oncology)',                   specialty: 'Medical Oncology',             exp: '',    img: null,                              initials: 'SD', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Gururaj Deshpande',       qual: 'MBBS, DNB (Surgical Oncology)',                 specialty: 'Surgical Oncology',            exp: '',    img: null,                              initials: 'GD', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Manjunath HS',            qual: 'MBBS, MD (Medical Oncology)',                   specialty: 'Medical Oncology',             exp: '',    img: null,                              initials: 'MJ', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Rahul Ladda',             qual: 'MBBS, MD, Fellowship (Rheumatology)',           specialty: 'Rheumatology',                 exp: '',    img: null,                              initials: 'RL', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Sagar Saurabh',           qual: 'MBBS, MD, DM (Endocrinology)',                  specialty: 'Endocrinology',                exp: '',    img: null,                              initials: 'SS', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Kartik Mainale',          qual: 'MBBS, MS (General Surgery)',                    specialty: 'General Surgery',              exp: '',    img: null,                              initials: 'KM', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Anil Kumar Malhari',          qual: 'MCh (Plastic & Reconstructive Surgery)',         specialty: 'Plastic Surgery',              exp: '',    img: null,                              initials: 'AM', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Anand Kumar',             qual: 'MBBS, DO (Haematology)',                        specialty: 'Haematology',                  exp: '',    img: null,                              initials: 'AK', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Vishal Hudgi',                qual: 'MBBS, DNB (Vascular & Endovascular Surgery)',   specialty: 'Vascular Surgery',             exp: '',    img: null,                              initials: 'VH', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Krishna',                 qual: 'MBBS, DO (Pediatric Surgery)',                  specialty: 'Pediatric Surgery',            exp: '',    img: null,                              initials: 'KR', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Anand Mangalgi',          qual: 'Oral & Maxillofacial Surgery',                  specialty: 'Oral & Maxillofacial Surgery', exp: '',    img: null,                              initials: 'AN', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Munawwar Hussian',        qual: 'MD (Psychiatry)',                               specialty: 'Psychiatry',                   exp: '',    img: null,                              initials: 'MU', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Javeria',                 qual: 'MBBS, MD (Microbiology)',                       specialty: 'Microbiology',                 exp: '',    img: null,                              initials: 'JA', gender: 'female', filled: true  },
  { dept: 'Consultants', name: 'Dr. Usman',                   qual: 'MBBS, MD (Ophthalmology)',                      specialty: 'Ophthalmology',                exp: '',    img: null,                              initials: 'US', gender: 'male',   filled: false },
  { dept: 'Consultants', name: 'Dr. Mazhar Muzzamil',         qual: 'Physiotherapist',                               specialty: 'Physiotherapy',                exp: '',    img: null,                              initials: 'MM', gender: 'male',   filled: false },

  // ── Emergency Department ─────────────────────────────────────────────────
  { dept: 'Emergency Department', name: 'Dr. Udaykumar Khasage',  qual: 'MBBS, MD, DNB (Emergency Medicine)', specialty: 'Emergency Medicine', exp: '', img: null, initials: 'UK', gender: 'male', filled: false },
  { dept: 'Emergency Department', name: 'Dr. Mahadev Deggi',       qual: 'MBBS, DNB',                          specialty: 'Emergency Medicine', exp: '', img: null, initials: 'MD', gender: 'male', filled: false },
  { dept: 'Emergency Department', name: 'Dr. Azharuddin Harsoori', qual: 'MBBS, DEM, MRCEM',                   specialty: 'Emergency Medicine', exp: '', img: null, initials: 'AH', gender: 'male', filled: false },
  { dept: 'Emergency Department', name: 'Dr. Rizwan',               qual: 'MBBS, DEM',                          specialty: 'Emergency Medicine', exp: '', img: null, initials: 'RZ', gender: 'male', filled: false },
  { dept: 'Emergency Department', name: 'Dr. Ahmed',                qual: 'MBBS, DEM',                          specialty: 'Emergency Medicine', exp: '', img: null, initials: 'AE', gender: 'male', filled: false },
  { dept: 'Emergency Department', name: 'Dr. Naveen',               qual: 'MBBS, DEM',                          specialty: 'Emergency Medicine', exp: '', img: null, initials: 'NV', gender: 'male', filled: false },

  // ── MICU & Critical Care ─────────────────────────────────────────────────
  { dept: 'MICU & Critical Care', name: 'Dr. Rehman Hyder', qual: 'MBBS, DA, DNB (Anaesthesia & Critical Care)', specialty: 'Critical Care Medicine', exp: '', img: 'https://res.cloudinary.com/dmhonzqrm/image/upload/v1784901590/1_gprgii.jpg', initials: 'RH', gender: 'male', filled: true  },
  { dept: 'MICU & Critical Care', name: 'Dr. Amarnath',     qual: 'MBBS, MD, DM (Critical Care Medicine)',       specialty: 'Critical Care Medicine', exp: '', img: null,                           initials: 'AM', gender: 'male', filled: false },
]

const DEPT_ORDER = ['Consultants', 'Emergency Department', 'MICU & Critical Care']

const SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM']

const REQ_STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

function Avatar({ img, initials, gender, name }) {
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

function DoctorCard({ name, qual, specialty, exp, img, initials, gender, filled, t }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
      <div className="flex gap-4 mb-5">
        <Avatar img={img} initials={initials} gender={gender} name={name} />
        <div className="min-w-0">
          <h3 className="font-bold text-sm mb-0.5 leading-tight" style={{ color: '#1a3a6b' }}>{name}</h3>
          <p className="text-[10px] text-gray-400 font-medium mb-1 leading-snug">{qual}</p>
          <p className="text-xs text-blue-600 font-semibold tracking-wide">{specialty}</p>
          {exp && (
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-1">
              <i className="ph ph-clock text-gray-400 text-xs"></i> {exp} {t('book_experience')}
            </div>
          )}
        </div>
      </div>
      {/* Opens the booking popup in place (URL → /find-doctor/book-appointment) instead of redirecting to /book */}
      <Link href={`/find-doctor/book-appointment?doctor=${encodeURIComponent(name)}`} scroll={false}
        className={`w-full py-2.5 rounded-lg text-[11px] font-bold text-center transition-colors ${filled ? 'text-white hover:opacity-90' : 'border border-[#1a3a6b] text-[#1a3a6b] hover:bg-blue-50'}`}
        style={filled ? { backgroundColor: '#1a3a6b' } : {}}>
        {filled ? t('finddr_book') : <><i className="ph ph-calendar-plus mr-1"></i>{t('finddr_request')}</>}
      </Link>
    </div>
  )
}

function BookingModal({ doctor, onClose }) {
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
              <Avatar img={doctor.img} initials={doctor.initials} gender={doctor.gender} name={doctor.name} />
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

export default function FindDoctorContent() {
  const [search, setSearch] = useState('')
  const { t } = useLanguage()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    if (!s) return null
    return DOCTORS.filter(d =>
      d.name.toLowerCase().includes(s) ||
      d.specialty.toLowerCase().includes(s) ||
      d.qual.toLowerCase().includes(s) ||
      d.dept.toLowerCase().includes(s)
    )
  }, [search])

  const groups = useMemo(() => {
    const map = {}
    for (const dept of DEPT_ORDER) map[dept] = []
    for (const d of DOCTORS) map[d.dept].push(d)
    return map
  }, [])

  // The /find-doctor/book-appointment route drives the popup; the ?doctor query
  // picks which doctor it's for. Closing returns to /find-doctor without a reload.
  const bookingActive = pathname === '/find-doctor/book-appointment'
  const doctorName = searchParams.get('doctor')
  const selectedDoctor = bookingActive && doctorName
    ? DOCTORS.find(d => d.name === doctorName)
    : null
  const closeBooking = () => router.push('/find-doctor', { scroll: false })

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
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl flex items-center gap-2 px-4 py-3.5">
            <i className="ph ph-magnifying-glass text-gray-400 text-lg"></i>
            <input
              type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder={t('finddr_search')}
              className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 text-[13px]"
            />
            {search && (
              <button onClick={() => setSearch('')} className="text-gray-400 hover:text-gray-600 shrink-0">
                <i className="ph ph-x text-sm"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      <main className="py-10 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          {filtered ? (
            <>
              <p className="text-sm text-gray-500 mb-6">{filtered.length} doctor{filtered.length !== 1 ? 's' : ''} found for &ldquo;{search}&rdquo;</p>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <i className="ph ph-magnifying-glass text-4xl text-gray-300 mb-3 block"></i>
                  <p className="text-gray-400 text-sm">No doctors found. Try a different name or specialty.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map(d => <DoctorCard key={d.name} {...d} t={t} />)}
                </div>
              )}
            </>
          ) : (
            <div className="space-y-14">
              {DEPT_ORDER.map(dept => (
                <div key={dept}>
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#1a3a6b' }}></div>
                    <h2 className="text-lg font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>{dept}</h2>
                    <span className="text-xs text-gray-400 font-medium">{groups[dept].length} doctors</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {groups[dept].map(d => <DoctorCard key={d.name} {...d} t={t} />)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {selectedDoctor && <BookingModal doctor={selectedDoctor} onClose={closeBooking} />}

      <Footer />
    </div>
  )
}
