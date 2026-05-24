import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0c1b33' }} className="text-white pt-8 pb-4">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-5">
          <div>
            <h3 className="font-bold text-lg mb-0.5 text-white">NK Hospitals</h3>
            <p className="text-[10px] text-gray-400">A Unit of Asian Institute of Medical Sciences</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:1066" className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-semibold flex items-center gap-2 border border-white/10 transition-colors">
              <i className="ph-fill ph-ambulance text-red-500 text-sm"></i> Ambulance: +91 80 4244 4244
            </a>
            <Link to="/book" className="px-4 py-1.5 rounded-full text-[10px] font-semibold transition-colors text-center shadow-sm flex items-center justify-center" style={{ backgroundColor: '#0f4c81' }}>
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-5 text-[11px] border-t border-b border-white/5 py-5">
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Patient Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/find-doctor" className="hover:text-white transition-colors">Find A Doctor</Link></li>
              <li><Link to="/specialities" className="hover:text-white transition-colors">Our Specialities</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Discover</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs & Articles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academics & Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Patients</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[10px]">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback & Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Tie-ups</a></li>
            </ul>
          </div>
        </div>

        <div style={{ backgroundColor: '#122543' }} className="rounded-lg p-5 mb-5 border border-white/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-white/10 pb-1.5 inline-block text-gray-300">Our Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[10px] text-gray-400">
            <div>
              <div className="font-bold text-gray-200 mb-1.5 flex items-center gap-1.5">
                <i className="ph-fill ph-map-pin" style={{ color: '#0f4c81' }}></i> NK Hospitals - Main Branch
              </div>
              <p className="leading-relaxed pl-4">123, Health Avenue, Medical District,<br />Bangalore, Karnataka 560032</p>
            </div>
            <div>
              <div className="font-bold text-gray-200 mb-1.5 flex items-center gap-1.5">
                <i className="ph-fill ph-map-pin" style={{ color: '#0f4c81' }}></i> NK Hospitals - Clinic
              </div>
              <p className="leading-relaxed pl-4">45, Innovation Park, Electronic City,<br />Bangalore, Karnataka 560100</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-5 border-t border-white/10 gap-4">
            <div className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <i className="ph-fill ph-envelope text-sm text-gray-500"></i> info@nkhospitals.com
            </div>
            <div className="flex gap-1.5">
              {['ph-facebook-logo','ph-twitter-logo','ph-linkedin-logo','ph-youtube-logo','ph-instagram-logo'].map(icon => (
                <a key={icon} href="#" className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0f4c81] transition-colors">
                  <i className={`ph-fill ${icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            { label: 'NABH Certified', bg: 'bg-white', content: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ISO_9001.svg/100px-ISO_9001.svg.png" className="w-2.5 h-2.5 object-contain" alt="" /> },
            { label: 'JCI Certified', bg: 'bg-yellow-500', content: <i className="ph-fill ph-star text-white text-[8px]"></i> },
            { label: 'NABL Certified', bg: 'bg-gray-400', content: <i className="ph-fill ph-star text-white text-[8px]"></i> },
            { label: 'ISO 9001 Certified', bg: 'bg-red-500', content: <i className="ph-fill ph-check-circle text-white text-[8px]"></i> },
          ].map(({ label, bg, content }) => (
            <div key={label} className="bg-white/5 border border-white/5 rounded-full px-3 py-1 flex items-center gap-1.5 text-[9px] font-semibold text-gray-300">
              <div className={`w-4 h-4 rounded-full ${bg} flex items-center justify-center`}>{content}</div>
              {label}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] text-gray-500 pt-3">
          <p>&copy; 2026 NK Hospitals. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
