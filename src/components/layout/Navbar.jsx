import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Specialties', to: '/specialities' },
  { label: 'Doctors', to: '/find-doctor' },
  { label: 'Health Package', to: '/health-packages' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Navbar({ transparent = false }) {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const [menuOpen, setMenuOpen] = useState(false)

  if (transparent) {
    return (
      <nav className="bg-transparent py-3 px-4 md:px-8 flex justify-between items-center relative">
        <Link to="/" className="flex items-center relative z-10">
          <img src="/logo.png" alt="NK Hospital" className="h-20 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 text-sm font-medium text-white/90 w-max z-0">
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to} className="hover:text-white transition-colors whitespace-nowrap">{label}</Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <a href="tel:08040-123456" className="flex items-center gap-2 text-white/90 font-semibold text-sm">
            <i className="ph ph-phone text-red-400 text-lg"></i> 08040-123456
          </a>
        </div>
        <button className="lg:hidden relative z-10 text-white text-2xl" onClick={() => setMenuOpen(o => !o)}>
          <i className={menuOpen ? 'ph ph-x' : 'ph ph-list'}></i>
        </button>
        {menuOpen && <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} dark={false} />}
      </nav>
    )
  }

  return (
    <nav className="bg-white py-2 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-100 relative">
      <Link to="/">
        <img src="/logo.png" alt="NK Hospital" className="h-20 w-auto object-contain"
          style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(190deg)' }} />
      </Link>
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 text-[13px] font-semibold text-gray-700">
        {navLinks.map(({ label, to }) => (
          <Link key={to} to={to}
            className={`hover:text-[#0c1b33] transition-colors whitespace-nowrap ${isActive(to) ? 'text-[#0c1b33]' : ''}`}>
            {label}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <a href="tel:08040-123456" className="flex items-center gap-2 text-red-500 font-bold text-sm">
          <i className="ph ph-phone text-lg"></i> 08040-123456
        </a>
        <Link to="/book" className="text-white px-5 py-2.5 rounded-md text-xs font-bold tracking-wide flex items-center gap-2 transition-colors shadow-sm"
          style={{ backgroundColor: '#0c1b33' }}>
          <i className="ph ph-calendar-plus text-base"></i> Book Appointment
        </Link>
      </div>
      <button className="lg:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(o => !o)}>
        <i className={menuOpen ? 'ph ph-x' : 'ph ph-list'}></i>
      </button>
      {menuOpen && <MobileMenu links={navLinks} onClose={() => setMenuOpen(false)} dark={true} />}
    </nav>
  )
}

function MobileMenu({ links, onClose, dark }) {
  return (
    <div className={`absolute top-full left-0 right-0 z-50 shadow-lg border-t ${dark ? 'bg-white border-gray-100' : 'bg-[#0c1b33] border-white/10'}`}>
      <div className="flex flex-col py-2">
        {links.map(({ label, to }) => (
          <Link key={to} to={to} onClick={onClose}
            className={`px-6 py-3 text-sm font-semibold transition-colors ${dark ? 'text-gray-700 hover:text-[#0c1b33] hover:bg-gray-50' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>
            {label}
          </Link>
        ))}
        <div className="px-6 py-3 border-t border-gray-100 mt-1">
          <Link to="/book" onClick={onClose}
            className="flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 px-4 rounded-lg"
            style={{ backgroundColor: '#0c1b33' }}>
            <i className="ph ph-calendar-plus"></i> Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
