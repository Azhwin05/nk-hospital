export default function TopBar() {
  return (
    <div className="bg-black/20 border-b border-white/10 text-white text-[11px] py-1.5 px-4 md:px-8 flex justify-between items-center backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <i className="ph-fill ph-ambulance text-red-500 text-lg"></i>
        <span>24/7 Ambulance Service : <strong className="text-white">1066</strong></span>
      </div>
      <div className="hidden md:flex items-center gap-4 text-white/90">
        <a href="#" className="hover:text-white transition-colors">Careers</a>
        <a href="#" className="hover:text-white transition-colors">Conferences / Events</a>
        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        <a href="#" className="hover:text-white transition-colors">Blogs</a>
      </div>
    </div>
  )
}
