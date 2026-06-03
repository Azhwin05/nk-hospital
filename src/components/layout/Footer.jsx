import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0c1b33' }} className="text-white pt-8 pb-4">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-5">
          <div>
            <h3 className="font-bold text-lg mb-0.5 text-white">NK Hospital</h3>
            <p className="text-[10px] text-gray-400">NK Nagar, Kalaburagi, Karnataka</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:08040-123456" className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-semibold flex items-center gap-2 border border-white/10 transition-colors">
              <i className="ph-fill ph-ambulance text-red-500 text-sm"></i> Ambulance: 08040-123456
            </a>
            <Link to="/book" className="px-4 py-1.5 rounded-full text-[10px] font-semibold transition-colors text-center shadow-sm flex items-center justify-center" style={{ backgroundColor: '#0f4c81' }}>
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-5 text-[11px] border-t border-b border-white/5 py-5">
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Patient Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/find-doctor" className="hover:text-white transition-colors">Find A Doctor</Link></li>
              <li><Link to="/specialities" className="hover:text-white transition-colors">Our Specialties</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/health-packages" className="hover:text-white transition-colors">Health Packages</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Discover</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blogs & Articles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback & Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Follow Us</h4>
            <div className="flex gap-2 flex-wrap">
              {[
                { icon: 'ph-facebook-logo',  href: 'https://www.facebook.com/NKHospitalKalburagi' },
                { icon: 'ph-twitter-logo',   href: 'https://x.com/NKhospital_KAL' },
                { icon: 'ph-linkedin-logo',  href: 'https://www.linkedin.com/company/nk-hospital-kalaburagi/' },
                { icon: 'ph-youtube-logo',   href: 'https://www.youtube.com/@NKhospital_Kalaburagi' },
                { icon: 'ph-instagram-logo', href: 'https://www.instagram.com/nk_hospital_/' },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0f4c81] transition-colors">
                  <i className={`ph-fill ${icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#122543' }} className="rounded-lg p-5 mb-5 border border-white/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-white/10 pb-1.5 inline-block text-gray-300">Our Location</h4>
          <div className="text-[11px] text-gray-400">
            <div className="font-bold text-gray-200 mb-1.5 flex items-center gap-1.5">
              <i className="ph-fill ph-map-pin" style={{ color: '#0f4c81' }}></i> NK Hospital, Kalaburagi
            </div>
            <p className="leading-relaxed pl-5">NK Nagar, opposite Shor Gumbad, Jaferabad,<br />Kalaburagi, Karnataka 585103</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-5 pt-4 border-t border-white/10 gap-3">
            <div className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <i className="ph-fill ph-envelope text-sm text-gray-500"></i> info@nkhospital.in
            </div>
            <div className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <i className="ph-fill ph-phone text-sm text-gray-500"></i> 08040-123456
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            { label: 'NABH Certified', bg: 'bg-blue-600', icon: 'ph-fill ph-certificate' },
            { label: 'NABL Certified', bg: 'bg-gray-500', icon: 'ph-fill ph-flask' },
            { label: 'ISO 9001 Certified', bg: 'bg-red-500', icon: 'ph-fill ph-seal-check' },
          ].map(({ label, bg, icon }) => (
            <div key={label} className="bg-white/5 border border-white/5 rounded-full px-3 py-1 flex items-center gap-1.5 text-[9px] font-semibold text-gray-300">
              <div className={`w-4 h-4 rounded-full ${bg} flex items-center justify-center`}>
                <i className={`${icon} text-white text-[8px]`}></i>
              </div>
              {label}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] text-gray-500 pt-3 border-t border-white/5 gap-1">
          <p>&copy; 2026 NK Hospital, Kalaburagi. All Rights Reserved.</p>
          <p className="text-gray-600">Designed and developed by <a href="https://digitaltrionix.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-semibold hover:text-white transition-colors">Digitaltrionix Pvt Ltd</a></p>
        </div>
      </div>
    </footer>
  )
}
