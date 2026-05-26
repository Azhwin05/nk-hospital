import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function DoctorLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })
    setLoading(false)
    if (error) {
      setError('Invalid email or password. Please try again.')
    } else {
      navigate('/doctor/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-sm">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="NK Hospital" className="h-14 mx-auto mb-4 object-contain"
            style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(190deg)' }} />
          <h1 className="text-xl font-extrabold tracking-tight" style={{ color: '#0c1b33' }}>Doctor Portal</h1>
          <p className="text-xs text-gray-400 mt-1">NK Hospital, Kalaburagi</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-base font-bold text-gray-800 mb-1">Sign in</h2>
          <p className="text-xs text-gray-400 mb-6">Access your appointment dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address</label>
              <input required type="email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                onFocus={e => e.target.style.borderColor = '#0f4c81'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                placeholder="doctor@nkhospital.in" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Password</label>
              <input required type="password" value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                onFocus={e => e.target.style.borderColor = '#0f4c81'}
                onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                placeholder="••••••••" />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-xs rounded-lg px-4 py-2.5 flex items-center gap-2">
                <i className="ph ph-warning-circle text-base shrink-0"></i> {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full text-white py-3 rounded-lg text-sm font-bold hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 transition-opacity"
              style={{ backgroundColor: '#0f4c81' }}>
              {loading
                ? <><i className="ph ph-circle-notch animate-spin"></i> Signing in...</>
                : <><i className="ph ph-sign-in"></i> Sign In</>}
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-6">
          For access, contact the hospital administrator.
        </p>
      </div>
    </div>
  )
}
