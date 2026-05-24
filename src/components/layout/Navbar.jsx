import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ transparent = false }) {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  if (transparent) {
    return (
      <nav className="bg-transparent py-3 px-4 md:px-8 flex justify-between items-center relative">
        <Link to="/" className="flex items-center relative z-10">
          <img src="/logo.png" alt="NK Hospital" className="h-14 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 text-sm font-medium text-white/90 w-max z-0">
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link to="/specialities" className="hover:text-white transition-colors">Specialities</Link>
          <Link to="/find-doctor" className="hover:text-white transition-colors">Find A Doctor</Link>
          <a href="#" className="hover:text-white transition-colors">Health Packages</a>
          <a href="#" className="hover:text-white transition-colors">International Patients</a>
        </div>
        <div className="hidden md:flex items-center gap-4 relative z-10">
          <a href="tel:08040-123456" className="flex items-center gap-2 text-white/90 font-semibold text-sm">
            <i className="ph ph-phone text-red-400 text-lg"></i> 08040-123456
          </a>
          <Link to="/book" className="bg-white text-[#0f4c81] hover:bg-blue-50 px-5 py-2 rounded-md text-xs font-bold tracking-wide flex items-center gap-2 transition-colors shadow">
            <i className="ph ph-calendar-plus text-base"></i> Book Appointment
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white py-2 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-100 relative">
      <Link to="/">
        <img src="/logo.png" alt="NK Hospital" className="h-14 w-auto object-contain" style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(190deg)' }} />
      </Link>
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-semibold text-gray-700">
        <Link to="/about" className={`hover:text-[#0f4c81] transition-colors ${isActive('/about') ? 'text-[#0f4c81]' : ''}`}>About Us</Link>
        <Link to="/specialities" className={`hover:text-[#0f4c81] transition-colors ${isActive('/specialities') ? 'text-[#0f4c81]' : ''}`}>Specialities</Link>
        <Link to="/find-doctor" className={`hover:text-[#0f4c81] transition-colors ${isActive('/find-doctor') ? 'text-[#0f4c81]' : ''}`}>Find A Doctor</Link>
        <a href="#" className="hover:text-[#0f4c81] transition-colors">Health Packages</a>
        <a href="#" className="hover:text-[#0f4c81] transition-colors">International Patients</a>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:08040-123456" className="flex items-center gap-2 text-red-500 font-bold text-sm">
          <i className="ph ph-phone text-lg"></i> 08040-123456
        </a>
        <Link to="/book" className="text-white px-5 py-2.5 rounded-md text-xs font-bold tracking-wide flex items-center gap-2 transition-colors shadow-sm" style={{ backgroundColor: '#0f4c81' }}>
          <i className="ph ph-calendar-plus text-base"></i> Book Appointment
        </Link>
      </div>
    </nav>
  )
}
