import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const doctors = [
  { name: 'Dr. Arif Raza Ahmed', specialty: 'General Medicine', location: 'NK Hospital, Kalaburagi', exp: '15+', img: '/doctors/Dr arif raza ahmed.JPG', filled: true },
  { name: 'Dr. Numan Ali', specialty: 'Internal Medicine', location: 'NK Hospital, Kalaburagi', exp: '12+', img: '/doctors/Dr numan ali.JPG', filled: true },
  { name: 'Dr. Sohail', specialty: 'Cardiology', location: 'NK Hospital, Kalaburagi', exp: '10+', img: '/doctors/Dr sohail.JPG' },
  { name: 'Dr. Veeresh Godi', specialty: 'Orthopedics', location: 'NK Hospital, Kalaburagi', exp: '14+', img: '/doctors/Dr veeresh godi.JPG' },
  { name: 'Dr. Zeeshan Ali', specialty: 'Neurology', location: 'NK Hospital, Kalaburagi', exp: '11+', img: '/doctors/Dr zeeshan ali.JPG', filled: true },
  { name: 'Dr. Mahalingam', specialty: 'Surgical Gastroenterology', location: 'NK Hospital, Kalaburagi', exp: '18+', img: '/doctors/Dr Mahaligam.JPG' },
]

export default function FindDoctor() {
  return (
    <div className="antialiased text-gray-800 bg-gray-50/50">
      <TopBarDark />
      <Navbar />

      <div className="bg-white pt-12 pb-6 border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold mb-1.5 tracking-tight" style={{ color: '#014c68' }}>Doctors</h1>
            <p className="text-sm text-gray-500">Find the right specialist for your care</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex-1 p-3.5 flex items-center justify-between text-[13px] text-gray-700 cursor-pointer group">
              <div className="flex items-center gap-2"><i className="ph ph-map-pin text-[#0f4c81] text-lg"></i> All Locations</div>
              <div className="flex items-center gap-1.5"><i className="ph ph-caret-down text-gray-400 group-hover:text-[#0f4c81]"></i></div>
            </div>
            <div className="flex-1 p-3.5 flex items-center justify-between text-[13px] text-gray-500 cursor-pointer group">
              <div className="flex items-center gap-2"><i className="ph ph-stethoscope text-gray-400 group-hover:text-[#0f4c81] text-lg transition-colors"></i> Select Speciality</div>
              <i className="ph ph-caret-down text-gray-400 group-hover:text-[#0f4c81]"></i>
            </div>
            <div className="flex-[1.2] p-3.5 flex items-center gap-2 text-[13px] text-gray-500">
              <i className="ph ph-user text-lg"></i>
              <input type="text" placeholder="Search Doctor" className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400" />
            </div>
          </div>
          <div className="text-right mt-3">
            <button className="text-[11px] text-gray-500 hover:text-[#0f4c81] flex items-center gap-1 ml-auto transition-colors">
              <i className="ph ph-x"></i> Clear all filters
            </button>
          </div>
        </div>
      </div>

      <main className="py-10 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map(({ name, specialty, location, exp, img, filled }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
                <div className="flex gap-4 mb-5">
                  <img src={img} className="w-20 h-[5.5rem] object-cover rounded-xl bg-gray-100 shrink-0" alt={name} />
                  <div>
                    <h3 className="font-bold text-sm mb-0.5 leading-tight" style={{ color: '#0f4c81' }}>{name}</h3>
                    <p className="text-[11px] text-blue-600 font-semibold mb-2 tracking-wide">{specialty}</p>
                    <div className="flex flex-col gap-1.5 text-[10px] text-gray-500">
                      <div className="flex items-center gap-1.5"><i className="ph ph-map-pin text-gray-400 text-xs"></i> {location}</div>
                      <div className="flex items-center gap-1.5"><i className="ph ph-clock text-gray-400 text-xs"></i> {exp} years experience</div>
                    </div>
                  </div>
                </div>
                <Link to="/book" className={`w-full py-2.5 rounded-lg text-[11px] font-bold text-center transition-colors ${filled ? 'text-white hover:opacity-90' : 'border border-[#0f4c81] text-[#0f4c81] hover:bg-blue-50'}`}
                  style={filled ? { backgroundColor: '#0f4c81' } : {}}>
                  {filled ? 'Book Appointment' : <><i className="ph ph-calendar-plus mr-1"></i> Request Appointment</>}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
