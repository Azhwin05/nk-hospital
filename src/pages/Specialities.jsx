import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const specialities = [
  { icon: 'ph ph-heartbeat', name: 'Cardiology' },
  { icon: 'ph ph-activity', name: 'Cardiothoracic Surgery' },
  { icon: 'ph ph-stomach', name: 'Medical Gastroenterology' },
  { icon: 'ph ph-knife', name: 'Surgical Gastroenterology' },
  { icon: 'ph ph-pill', name: 'Hepatology' },
  { icon: 'ph ph-bed', name: 'Liver Transplant' },
  { icon: 'ph ph-bandaids', name: 'Medical Oncology' },
  { icon: 'ph ph-scissors', name: 'Surgical Oncology' },
  { icon: 'ph ph-brain', name: 'Neurology' },
  { icon: 'ph ph-radioactive', name: 'Radiation Oncology' },
  { icon: 'ph ph-head', name: 'Neurosurgery' },
  { icon: 'ph ph-ear', name: 'ENT' },
  { icon: 'ph ph-bone', name: 'Orthopedics' },
  { icon: 'ph ph-baby', name: 'Pediatrics' },
  { icon: 'ph ph-eye', name: 'Ophthalmology' },
  { icon: 'ph ph-drop', name: 'Dermatology' },
  { icon: 'ph ph-toilet-paper', name: 'Urology' },
  { icon: 'ph ph-flask', name: 'Nephrology' },
  { icon: 'ph ph-wind', name: 'Pulmonology' },
  { icon: 'ph ph-thermometer', name: 'Endocrinology' },
  { icon: 'ph ph-hand', name: 'Rheumatology' },
  { icon: 'ph ph-users', name: 'Psychiatry' },
  { icon: 'ph ph-gender-female', name: 'Obstetrics & Gynecology' },
  { icon: 'ph ph-first-aid-kit', name: 'General Surgery' },
  { icon: 'ph ph-mask-happy', name: 'Plastic Surgery' },
  { icon: 'ph ph-drop', name: 'Vascular Surgery' },
  { icon: 'ph ph-siren', name: 'Critical Care Medicine' },
  { icon: 'ph ph-ambulance', name: 'Emergency Medicine' },
]

export default function Specialities() {
  return (
    <div className="antialiased text-gray-800 bg-white">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-12 text-center relative overflow-hidden" style={{ backgroundColor: '#0f4c81' }}>
        <h1 className="text-3xl font-bold mb-2">Our Specialities</h1>
        <div className="text-xs text-blue-200">Home / <span className="text-white">Specialities</span></div>
      </div>

      <main className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0f4c81' }}>30+ Health Domains</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">NK Hospitals provides comprehensive, world-class care across a vast spectrum of medical and surgical disciplines. Explore our specialized departments below.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {specialities.map(({ icon, name }) => (
              <a key={name} href="#" className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-[#0f4c81] hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[#0f4c81] group-hover:bg-[#0f4c81] group-hover:text-white transition-colors">
                  <i className={`${icon} text-xl`}></i>
                </div>
                <span className="text-sm font-semibold text-gray-800">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
