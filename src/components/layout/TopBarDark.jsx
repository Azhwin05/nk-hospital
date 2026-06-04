import { Link } from 'react-router-dom'

export default function TopBarDark() {
  return (
    <div style={{ backgroundColor: '#0c1b33' }} className="text-white text-xs py-1.5 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <i className="ph-fill ph-ambulance text-red-500 text-lg"></i>
        <span>24/7 Ambulance Service : <strong>08040-123456</strong></span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="hover:text-gray-300">Careers</a>
        <a href="#" className="hover:text-gray-300">Conferences / Events</a>
        <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        <Link to="/blog" className="hover:text-gray-300">Blogs</Link>
      </div>
    </div>
  )
}
