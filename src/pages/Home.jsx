import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/layout/TopBar'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const slides = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg']

const expertiseItems = [
  { label: 'Medical\nGastroenterology', icon: 'https://cdn-icons-png.flaticon.com/128/3004/3004381.png' },
  { label: 'Surgical\nGastroenterology', icon: 'https://cdn-icons-png.flaticon.com/128/13600/13600490.png' },
  { label: 'Hepatology', icon: 'https://cdn-icons-png.flaticon.com/128/3138/3138865.png' },
  { label: 'Cardiology', icon: 'https://cdn-icons-png.flaticon.com/128/4807/4807490.png' },
  { label: 'Cardiothoracic\nSurgery', icon: 'https://cdn-icons-png.flaticon.com/128/3063/3063259.png' },
  { label: 'Liver Transplant', icon: 'https://cdn-icons-png.flaticon.com/128/10465/10465660.png' },
  { label: 'Medical\nOncology', icon: 'https://cdn-icons-png.flaticon.com/128/2855/2855682.png' },
  { label: 'Surgical\nOncology', icon: 'https://cdn-icons-png.flaticon.com/128/8367/8367856.png' },
  { label: 'Neurology', icon: 'https://cdn-icons-png.flaticon.com/128/2660/2660126.png' },
  { label: 'Radiation\nOncology', icon: 'https://cdn-icons-png.flaticon.com/128/4807/4807469.png' },
  { label: 'Neurosurgery', icon: 'https://cdn-icons-png.flaticon.com/128/8343/8343603.png' },
  { label: 'ENT', icon: 'https://cdn-icons-png.flaticon.com/128/5084/5084478.png' },
  { label: 'Orthopaedics', icon: 'https://cdn-icons-png.flaticon.com/128/3138/3138865.png' },
  { label: 'Pulmonology', icon: 'https://cdn-icons-png.flaticon.com/128/2855/2855682.png' },
  { label: 'Nephrology', icon: 'https://cdn-icons-png.flaticon.com/128/8367/8367856.png' },
  { label: 'Urology', icon: 'https://cdn-icons-png.flaticon.com/128/13600/13600490.png' },
]

const testimonials = [
  { quote: 'The care I received at NK Hospital was exceptional. The doctors were compassionate and the facilities are truly world-class.', name: 'Aisha Sharma', role: 'Recovered Patient', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
  { quote: 'From diagnosis to treatment, the entire process was seamless. I am deeply grateful to the oncology team for saving my life.', name: 'Rahul Verma', role: 'Oncology Patient', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
  { quote: 'The neurosurgery team saved my father\'s life. The nurses were incredibly supportive and attentive throughout our entire stay.', name: 'Priya Patel', role: 'Patient Family Member', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
  { quote: 'NK Hospital sets the gold standard for clinical excellence and patient safety in the region. Truly an institution of trust.', name: 'Dr. Vikram Singh', role: 'Visiting Specialist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop' },
  { quote: 'A truly patient-centric hospital. The surgical department is phenomenal and my recovery was incredibly fast.', name: 'Ananya Desai', role: 'Surgical Patient', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop' },
]

const whyChooseUs = [
  { icon: 'ph ph-bed', value: '200+', label: 'Beds', desc: 'Comprehensive inpatient and critical care infrastructure' },
  { icon: 'ph ph-stethoscope', value: '40+', label: 'Specialties', desc: 'Advanced medical and surgical expertise under one roof' },
  { icon: 'ph ph-clock-countdown', value: '24/7', label: 'Emergency Care', desc: 'Round-the-clock emergency and intensive care support' },
  { icon: 'ph ph-wrench', value: '', label: 'Advanced Surgical Infrastructure', desc: 'Modern operation theatres and minimally invasive capabilities' },
  { icon: 'ph ph-microscope', value: '', label: 'Advanced Diagnostic Support', desc: 'Precision-driven diagnostics for timely and accurate clinical decisions' },
  { icon: 'ph ph-link', value: '', label: 'Integrated Healthcare Systems', desc: 'Streamlined clinical coordination and efficient patient care pathways' },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col justify-center overflow-hidden">
      {slides.map((src, i) => (
        <img key={i} src={src} className={`hero-slide${i === current ? ' active' : ''}`} alt="" />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70 z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-6 py-32">
        <div className="inline-block bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6 backdrop-blur-sm">
          Multi Super-Specialty Hospital · Kalaburagi
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white mb-5 leading-tight tracking-tight shiny-text">
          Advanced Multi Super-Specialty<br className="hidden md:block" /> Hospital in Kalaburagi
        </h1>
        <p className="text-base md:text-lg text-white/80 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Bringing Together the Right Expertise &amp; Infrastructure for Better Care
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book" className="bg-white text-[#0f4c81] hover:bg-blue-50 px-8 py-3.5 rounded-full text-sm font-bold shadow-xl transition-colors flex items-center gap-2">
            <i className="ph ph-calendar-plus text-base"></i> Book Appointment
          </Link>
          <a href="tel:08040-123456" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-xl transition-colors flex items-center gap-2">
            <i className="ph-fill ph-siren text-base"></i> Emergency Care
          </a>
          <Link to="/find-doctor" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2 backdrop-blur-sm">
            <i className="ph ph-user-circle text-base"></i> Find a Doctor
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}

function SpecialtiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>
            DEPARTMENTS &amp; SPECIALTIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-base text-gray-500 mb-3 max-w-2xl mx-auto">Expert care across 20+ medical and surgical specialties.</p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            NK Hospital offers specialized medical and surgical care across a wide range of departments, supported by advanced technology, experienced specialists, and multidisciplinary clinical coordination.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {expertiseItems.map(({ label, icon }) => (
            <Link key={label} to="/specialities" className="icon-box border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-3 bg-white hover:border-[#0f4c81] hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0f4c81]/10 transition-colors">
                <img src={icon} className="w-7 h-7 object-contain" alt="" />
              </div>
              <span className="text-[11px] font-semibold text-center leading-tight" style={{ color: '#0f4c81' }}>
                {label.split('\n').map((l, i, arr) => (
                  <span key={i}>{l}{i < arr.length - 1 ? <br /> : ''}</span>
                ))}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/specialities" className="inline-flex items-center gap-2 border-2 border-[#0f4c81] text-[#0f4c81] rounded-full px-8 py-3 text-sm font-bold hover:bg-[#0f4c81] hover:text-white transition-all">
            View All Specialties <i className="ph ph-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          {/* Left: Hospital Photo */}
          <div className="w-full lg:w-[45%] rounded-2xl overflow-hidden shadow-2xl min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="NK Hospital Building"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>
              ABOUT NK HOSPITAL
            </p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-900 mb-2">
              Advanced Healthcare
            </h2>
            <h3 className="text-xl font-semibold text-gray-500 mb-6">Modern Infrastructure. Integrated Care.</h3>

            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-8">
              <p>
                NK Hospital combines advanced medical infrastructure, modern clinical systems, and multidisciplinary expertise to deliver comprehensive healthcare across specialties. From critical care and advanced diagnostics to minimally invasive surgical capabilities and emergency response systems, every aspect of our hospital is designed to support precise, efficient, and patient-centered care.
              </p>
              <p>
                Our integrated approach enables seamless coordination between departments, helping ensure better outcomes, improved safety, and a higher standard of healthcare delivery for patients across North Karnataka.
              </p>
            </div>

            {/* Bottom Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: 'ph ph-wrench', label: 'Advanced Surgical Infrastructure', color: 'bg-blue-50 text-[#0f4c81]' },
                { icon: 'ph ph-users-three', label: 'Expert Multidisciplinary Team', color: 'bg-teal-50 text-teal-600' },
                { icon: 'ph ph-heart', label: 'Patient-Centric Care', color: 'bg-rose-50 text-rose-600' },
              ].map(({ icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
                    <i className={`${icon} text-xl`}></i>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-snug">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4c81] hover:underline">
                Learn More About Us <i className="ph ph-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmergencySection() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[480px]">
        {/* Left: Image with overlay */}
        <div className="w-full lg:w-1/2 relative min-h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Emergency Care"
          />
          <div className="absolute inset-0 bg-[#0f4c81]/80"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 py-16 text-white text-center">
            <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center mb-6">
              <i className="ph-fill ph-siren text-4xl text-red-300"></i>
            </div>
            <div className="text-5xl font-black mb-2">24/7</div>
            <div className="text-lg font-bold uppercase tracking-widest text-blue-200">Always Available</div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 bg-[#0c1b33] flex items-center">
          <div className="px-10 py-16">
            <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
              EMERGENCY &amp; CRITICAL CARE
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              24/7 Emergency &amp; Critical Care Services
            </h2>
            <div className="space-y-4 text-sm text-blue-100/80 leading-relaxed mb-8">
              <p>
                Medical emergencies demand immediate attention, precision, and coordinated care. At NK Hospital, we provide round-the-clock emergency and critical care services supported by experienced clinicians, intensive care facilities, advanced monitoring systems, and rapid response protocols.
              </p>
              <p>
                Our emergency care team is equipped to manage trauma, medical emergencies, surgical emergencies, and critical conditions with speed, efficiency, and patient safety at the forefront.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Trauma Management', 'Medical Emergencies', 'Surgical Emergencies', 'ICU & Critical Care'].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-blue-200">
                  <i className="ph-fill ph-check-circle text-teal-400 text-sm shrink-0"></i>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:08040-123456" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 justify-center">
                <i className="ph ph-phone-call text-base"></i> Emergency Helpline
              </a>
              <a href="#" className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 justify-center">
                Contact Emergency Team <i className="ph ph-arrow-right text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Excellence Across Every Aspect of Care</h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            NK Hospital, recognized as one of the leading multi superspecialty hospitals in Kalaburagi, is built to deliver seamless, accessible, and high-quality healthcare experiences across medical and surgical specialties. With a strong focus on timely intervention, clinical precision, emergency responsiveness, and patient safety, our systems are designed to support efficient diagnosis, coordinated treatment, and continuity of care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map(({ icon, value, label, desc }) => (
            <div key={label} className="group bg-gray-50 hover:bg-[#0f4c81] border border-gray-100 hover:border-[#0f4c81] rounded-2xl p-7 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#0f4c81]/10 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors">
                <i className={`${icon} text-2xl text-[#0f4c81] group-hover:text-white transition-colors`}></i>
              </div>
              {value && (
                <div className="text-4xl font-black text-[#0f4c81] group-hover:text-white mb-1 transition-colors">{value}+</div>
              )}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-white mb-2 transition-colors leading-tight">{label}</h3>
              <p className="text-xs text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-t border-gray-100 overflow-hidden">
      <div className="w-full mx-auto pb-10">
        <div className="px-4 lg:px-16 2xl:px-24 mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0f4c81' }}>PATIENT STORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Our Patients Say</h2>
          <p className="text-sm text-gray-500 italic font-serif max-w-xl mx-auto">
            Real stories of healing, hope, and compassionate care from the people who matter most.
          </p>
        </div>
        <div
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
          className="flex relative overflow-hidden"
        >
          <div className="flex animate-x-slider gap-5 w-max hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="border border-gray-200 flex flex-col bg-white rounded-2xl shrink-0 w-[340px] sm:w-[440px] lg:w-[520px] shadow-sm hover:shadow-md transition-shadow">
                <div className="px-7 py-8">
                  <i className="ph-fill ph-quotes text-3xl mb-4 block" style={{ color: '#0f4c81', opacity: 0.2 }}></i>
                  <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed italic">"{t.quote}"</p>
                </div>
                <div className="border-t border-gray-100 flex gap-4 items-center px-7 py-5 mt-auto bg-gray-50/50 rounded-b-2xl">
                  <img src={t.img} className="w-11 h-11 rounded-full object-cover shadow-sm" alt={t.name} />
                  <div>
                    <h5 className="text-sm font-bold" style={{ color: '#0f4c81' }}>{t.name}</h5>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="antialiased text-gray-800">
      <header className="absolute top-0 left-0 w-full z-50">
        <TopBar />
        <Navbar transparent />
      </header>

      <HeroSlider />
      <SpecialtiesSection />
      <AboutSection />
      <EmergencySection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  )
}
