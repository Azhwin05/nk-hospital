import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0c1b33' }} className="text-white pt-8 pb-4">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">

        {/* Top bar: Logo | Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-6 pb-5 border-b border-white/5">
          <img src="/logo.png" alt="NK Hospital" className="h-16 w-auto object-contain shrink-0"
            style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:08040-123456" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-[10px] font-semibold flex items-center gap-2 border border-white/10 transition-colors whitespace-nowrap">
              <i className="ph-fill ph-ambulance text-red-500 text-sm"></i> Ambulance: 08040-123456
            </a>
            <Link to="/book" className="px-5 py-2 rounded-full text-[10px] font-bold transition-colors text-center shadow-sm flex items-center justify-center whitespace-nowrap" style={{ backgroundColor: '#0c1b33' }}>
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6 text-[11px] border-b border-white/5 pb-6">
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
            <div className="flex gap-2 flex-wrap mb-4">
              {[
                { icon: 'ph-facebook-logo',  href: 'https://www.facebook.com/NKHospitalKalburagi' },
                { icon: 'ph-twitter-logo',   href: 'https://x.com/NKhospital_KAL' },
                { icon: 'ph-linkedin-logo',  href: 'https://www.linkedin.com/company/nk-hospital-kalaburagi/' },
                { icon: 'ph-youtube-logo',   href: 'https://www.youtube.com/@NKhospital_Kalaburagi' },
                { icon: 'ph-instagram-logo', href: 'https://www.instagram.com/nk_hospital_/' },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0c1b33] transition-colors">
                  <i className={`ph-fill ${icon} text-xs`}></i>
                </a>
              ))}
            </div>
            {/* Address + contact under Follow Us */}
            <div className="space-y-2 text-[10px] text-gray-400 border-t border-white/5 pt-3">
              <div className="flex items-start gap-1.5">
                <i className="ph-fill ph-map-pin text-[#c9a227] shrink-0 mt-0.5"></i>
                <span className="leading-relaxed">NK Nagar, opposite Shor Gumbad, Jaferabad, Kalaburagi, Karnataka 585103</span>
              </div>
              <a href="mailto:info@nkhospital.in" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <i className="ph-fill ph-envelope text-gray-500 shrink-0"></i> info@nkhospital.in
              </a>
              <a href="tel:08040-123456" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <i className="ph-fill ph-phone text-gray-500 shrink-0"></i> 08040-123456
              </a>
            </div>
          </div>
        </div>

        {/* Accreditations */}
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

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] text-gray-500 pt-3 border-t border-white/5 gap-1 pr-0 sm:pr-44">
          <p>&copy; 2026 NK Hospital, Kalaburagi. All Rights Reserved.</p>
          <p className="text-gray-600">Designed and developed by <a href="https://digitaltrionix.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-semibold hover:text-white transition-colors">Digitaltrionix Pvt Ltd</a></p>
        </div>
      </div>
    </footer>
  )
}
