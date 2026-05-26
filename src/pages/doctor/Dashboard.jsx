import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

const STATUS_CONFIG = {
  pending:   { label: 'Pending',   bg: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-200' },
  confirmed: { label: 'Confirmed', bg: 'bg-green-50',  text: 'text-green-600',  border: 'border-green-200' },
  completed: { label: 'Completed', bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-200' },
  cancelled: { label: 'Cancelled', bg: 'bg-red-50',    text: 'text-red-500',    border: 'border-red-200' },
}

const TABS = ['all', 'today', 'pending', 'confirmed', 'completed', 'cancelled']

export default function DoctorDashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('all')
  const [updating, setUpdating] = useState(null)
  const [search, setSearch] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const fetchAppointments = useCallback(async () => {
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .order('date', { ascending: true })
      .order('time_slot', { ascending: true })
    if (data) setAppointments(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { navigate('/doctor'); return }
      setUser(user)
      fetchAppointments()
    })
  }, [navigate, fetchAppointments])

  const updateStatus = async (id, status) => {
    setUpdating(id)
    await supabase.from('appointments').update({ status }).eq('id', id)
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a))
    setUpdating(null)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/doctor')
  }

  const filtered = appointments.filter(a => {
    const matchesTab =
      tab === 'all' ? true :
      tab === 'today' ? a.date === today :
      a.status === tab
    const matchesSearch = search
      ? a.patient_name.toLowerCase().includes(search.toLowerCase()) ||
        a.doctor_name.toLowerCase().includes(search.toLowerCase()) ||
        a.phone.includes(search)
      : true
    return matchesTab && matchesSearch
  })

  const counts = {
    all: appointments.length,
    today: appointments.filter(a => a.date === today).length,
    pending: appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    completed: appointments.filter(a => a.status === 'completed').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length,
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top nav */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="NK Hospital" className="h-8 object-contain"
              style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(190deg)' }} />
            <span className="text-xs font-bold text-gray-500 border-l border-gray-200 pl-3">Doctor Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500 hidden sm:block">{user?.email}</span>
            <button onClick={handleSignOut}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-500 transition-colors">
              <i className="ph ph-sign-out text-base"></i> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Today's Appointments", value: counts.today, icon: 'ph ph-calendar-check', color: 'text-blue-600 bg-blue-50' },
            { label: 'Pending',    value: counts.pending,   icon: 'ph ph-clock',         color: 'text-amber-600 bg-amber-50' },
            { label: 'Confirmed',  value: counts.confirmed, icon: 'ph ph-check-circle',  color: 'text-green-600 bg-green-50' },
            { label: 'Total',      value: counts.all,       icon: 'ph ph-list',          color: 'text-gray-600 bg-gray-100' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 shadow-sm">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 ${color}`}>
                <i className={icon}></i>
              </div>
              <div>
                <div className="text-xl font-extrabold text-gray-800">{value}</div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="flex gap-1.5 flex-wrap">
            {TABS.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold capitalize transition-colors ${tab === t ? 'text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-[#0f4c81] hover:text-[#0f4c81]'}`}
                style={tab === t ? { backgroundColor: '#0f4c81' } : {}}>
                {t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}
                <span className="ml-1.5 opacity-70">{counts[t]}</span>
              </button>
            ))}
          </div>
          <div className="relative sm:ml-auto">
            <i className="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search patient or doctor..."
              className="w-full sm:w-60 pl-8 pr-4 py-1.5 border border-gray-200 rounded-full text-xs outline-none bg-white"
              onFocus={e => e.target.style.borderColor = '#0f4c81'}
              onBlur={e => e.target.style.borderColor = '#e5e7eb'} />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-20 text-center text-gray-400">
              <i className="ph ph-circle-notch animate-spin text-3xl block mb-3"></i>
              <span className="text-sm">Loading appointments...</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-gray-400">
              <i className="ph ph-calendar-x text-4xl block mb-3"></i>
              <p className="text-sm font-semibold text-gray-500">No appointments found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50/70">
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-5 py-3">Patient</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-4 py-3">Doctor</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-4 py-3">Date &amp; Time</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-4 py-3">Message</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-4 py-3">Status</th>
                    <th className="text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map(appt => {
                    const sc = STATUS_CONFIG[appt.status]
                    const isToday = appt.date === today
                    return (
                      <tr key={appt.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-3.5">
                          <div className="font-semibold text-gray-800 text-xs">{appt.patient_name}</div>
                          <div className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                            <i className="ph ph-phone text-xs"></i> {appt.phone}
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="text-xs font-semibold text-gray-700">{appt.doctor_name}</div>
                          <div className="text-[10px] text-blue-500 font-medium">{appt.specialty}</div>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-gray-700">
                              {new Date(appt.date + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                            {isToday && <span className="text-[9px] font-bold text-white bg-blue-500 px-1.5 py-0.5 rounded-full">Today</span>}
                          </div>
                          <div className="text-[10px] text-gray-400 mt-0.5"><i className="ph ph-clock text-xs mr-1"></i>{appt.time_slot}</div>
                        </td>
                        <td className="px-4 py-3.5 max-w-[180px]">
                          <p className="text-[11px] text-gray-500 truncate">{appt.message || <span className="text-gray-300 italic">—</span>}</p>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border ${sc.bg} ${sc.text} ${sc.border}`}>
                            {sc.label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-1.5">
                            {appt.status === 'pending' && (
                              <>
                                <ActionBtn onClick={() => updateStatus(appt.id, 'confirmed')} loading={updating === appt.id} color="green" icon="ph-check" label="Confirm" />
                                <ActionBtn onClick={() => updateStatus(appt.id, 'cancelled')} loading={updating === appt.id} color="red" icon="ph-x" label="Cancel" />
                              </>
                            )}
                            {appt.status === 'confirmed' && (
                              <>
                                <ActionBtn onClick={() => updateStatus(appt.id, 'completed')} loading={updating === appt.id} color="blue" icon="ph-check-fat" label="Done" />
                                <ActionBtn onClick={() => updateStatus(appt.id, 'cancelled')} loading={updating === appt.id} color="red" icon="ph-x" label="Cancel" />
                              </>
                            )}
                            {(appt.status === 'completed' || appt.status === 'cancelled') && (
                              <span className="text-[10px] text-gray-300 italic">—</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function ActionBtn({ onClick, loading, color, icon, label }) {
  const colors = {
    green: 'bg-green-50 text-green-600 hover:bg-green-100 border-green-200',
    red:   'bg-red-50 text-red-500 hover:bg-red-100 border-red-200',
    blue:  'bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200',
  }
  return (
    <button onClick={onClick} disabled={loading}
      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-colors disabled:opacity-40 ${colors[color]}`}>
      <i className={`ph ${icon} text-xs`}></i> {label}
    </button>
  )
}
