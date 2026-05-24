export default function TopBarDark() {
  return (
    <div style={{ backgroundColor: '#0c1b33' }} className="text-white text-xs py-1.5 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <i className="ph-fill ph-ambulance text-red-500 text-lg"></i>
        <span>24/7 Ambulance Service : <strong>1066</strong></span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="hover:text-gray-300">Careers</a>
        <a href="#" className="hover:text-gray-300">Research</a>
        <a href="#" className="hover:text-gray-300">Conferences / Events</a>
        <a href="#" className="hover:text-gray-300">Contact Us</a>
        <a href="#" className="hover:text-gray-300">Blogs</a>
        <span className="text-gray-500">|</span>
        <div className="flex items-center gap-1 cursor-pointer">
          <i className="ph ph-map-pin"></i> All Locations <i className="ph ph-caret-down"></i>
        </div>
      </div>
    </div>
  )
}
