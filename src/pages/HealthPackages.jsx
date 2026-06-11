import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const packages = [
  { name: 'Basic Health Checkup', price: '₹999', tests: '30+ Tests', icon: 'ph ph-heart', color: 'text-rose-500 bg-rose-50', desc: 'Complete blood count, blood sugar, lipid profile, liver function, kidney function and more.' },
  { name: 'Comprehensive Wellness', price: '₹2,499', tests: '60+ Tests', icon: 'ph ph-shield-check', color: 'text-blue-600 bg-blue-50', desc: 'Full body checkup with ECG, chest X-ray, ultrasound abdomen, thyroid, and vitamin panel.' },
  { name: 'Cardiac Care Package', price: '₹3,999', tests: '40+ Tests', icon: 'ph ph-heartbeat', color: 'text-red-500 bg-red-50', desc: 'Specialised cardiac screening — ECG, Echo, TMT, lipid profile, and cardiology consultation.' },
  { name: 'Diabetes Management', price: '₹1,499', tests: '25+ Tests', icon: 'ph ph-drop', color: 'text-amber-500 bg-amber-50', desc: 'HbA1c, fasting & PP blood sugar, kidney function, urine microalbumin and dietitian consultation.' },
  { name: 'Women\'s Health Package', price: '₹3,499', tests: '50+ Tests', icon: 'ph ph-gender-female', color: 'text-pink-500 bg-pink-50', desc: 'Pap smear, mammography, bone density, hormonal panel, thyroid, and gynaecology consultation.' },
  { name: 'Senior Citizen Package', price: '₹4,999', tests: '70+ Tests', icon: 'ph ph-users', color: 'text-emerald-600 bg-emerald-50', desc: 'Comprehensive geriatric assessment with bone health, cardiac, renal, vision, and hearing tests.' },
]

export default function HealthPackages() {
  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Health Packages</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">Affordable preventive health checkups tailored for every need</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link to="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400"><i className="ph ph-house text-sm"></i> Home</Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>Health Packages</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>Preventive Care</p>
          <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: '#1a3a6b' }}>Choose Your Health Package</h2>
          <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">Early detection saves lives. Our health packages are designed to give you a complete picture of your health at affordable prices.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map(({ name, price, tests, icon, color, desc }) => (
            <div key={name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-6 flex flex-col">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${color}`}>
                <i className={icon}></i>
              </div>
              <h3 className="text-base font-bold mb-1" style={{ color: '#1a3a6b' }}>{name}</h3>
              <p className="text-[11px] font-semibold text-blue-500 mb-3">{tests}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">{desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-xl font-extrabold" style={{ color: '#1a3a6b' }}>{price}</span>
                <Link to="/book" className="text-white text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a3a6b' }}>Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
