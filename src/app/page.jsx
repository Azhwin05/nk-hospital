'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { IconRender } from '@/components/SpecialtyIcon'

const slides = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg']

const expertiseItems = [
  { icon: 'svg:stomach' },
  { icon: 'svg:scalpel' },
  { icon: 'ph ph-drop' },
  { icon: 'ph ph-heartbeat' },
  { icon: 'ph ph-heart' },
  { icon: 'ph ph-arrows-clockwise' },
  { icon: 'ph ph-dna' },
  { icon: 'ph ph-bandaids' },
  { icon: 'ph ph-brain' },
  { icon: 'ph ph-radioactive' },
  { icon: 'ph ph-brain' },
  { icon: 'ph ph-ear' },
  { icon: 'ph ph-bone' },
  { icon: 'ph ph-lungs' },
  { icon: 'ph ph-drop' },
  { icon: 'ph ph-funnel' },
]

const testimonials = [
  { quote: 'Good infrastructure with clean premises, modern equipment, and well-maintained facilities. Overall, a comfortable and organized hospital environment.', name: 'Varun More', gender: 'male' },
  { quote: 'Best Hospital in the city with its infrastructure and hygiene. Dr Arif Raza (gastroenterologist) consultant provides safe, precise and patient-friendly surgical care.', name: 'Waseem Akram', gender: 'male' },
  { quote: "Thanks to Dr Arif Raza and the surgical team at NK Hospital, my mother's surgery was a complete success. The pre-op explanation reduced our anxiety, and the post-op care was diligent and efficient. I felt my mother was in safe hands throughout the entire process.", name: 'Sameer Patel', gender: 'male' },
  { quote: 'Had a very good experience at NK Hospital. The doctors are knowledgeable and the staff is very polite and helpful. They treat patients with care and responsibility. I would definitely recommend this hospital to others.', name: 'Ashraf Ali Patel', gender: 'male' },
  { quote: 'I would like to appreciate the excellent service provided by your hospital. The staff were professional, caring, and attentive, ensuring great patient care. Thank you for your dedication and commitment to quality healthcare.', name: 'Syed Abdulla', gender: 'male' },
  { quote: "Best Hospital in Gulbarga! with highly experienced and talented doctors dedicated to provide exceptional patient care! NK multispeciality Hospital is a well equipped facility with modern technology offering advanced medical care.", name: 'Ayesha Nazneen', gender: 'female' },
  { quote: 'Had a very good experience here. Doctors and staff are very supportive and professional. The service and care provided are excellent.', name: 'Saima Taskeen', gender: 'female' },
  { quote: 'The services and treatment are affordable and genuine. Expert doctors with good treatment. I recommend people to avail this facility.', name: 'Faraha Naaz', gender: 'female' },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col justify-center overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`hero-slide${i === current ? ' active' : ''}`}
          alt=""
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : 'low'}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70 z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 py-16 md:py-32">
        <div className="inline-block bg-white/10 border border-white/20 text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-5 backdrop-blur-sm">
          {t('hero_badge')}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white mb-4 leading-tight tracking-tight shiny-text">
          {t('hero_title_1')}<br className="hidden sm:block" /> {t('hero_title_2')}
        </h1>
        <p className="text-sm md:text-base text-white/80 font-medium mb-8 max-w-xl mx-auto leading-relaxed">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <Link href="/book"
            className="bg-white text-[#1a3a6b] hover:bg-blue-50 active:bg-blue-100 px-8 py-3.5 rounded-full text-sm font-bold shadow-xl transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <i className="ph ph-calendar-plus text-base"></i> {t('hero_book')}
          </Link>
          <Link href="/find-doctor"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 active:bg-white/20 px-8 py-3.5 rounded-full text-sm font-bold transition-colors flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto">
            <i className="ph ph-user-circle text-base"></i> {t('hero_find_doctor')}
          </Link>
          <a href="tel:08040123456"
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-xl transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <i className="ph-fill ph-siren text-base"></i> {t('hero_emergency')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}

function SpecialtiesSection() {
  const { t } = useLanguage()
  const labels = t('home_expertise_labels') || []

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>
            {t('home_spec_eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home_spec_heading')}</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('home_spec_sub')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {expertiseItems.map(({ icon }, i) => {
            const rawLabel = labels[i] || ''
            return (
              <Link key={i} href="/specialities"
                className="icon-box border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-3 bg-white hover:border-[#1a3a6b] hover:shadow-md active:bg-blue-50 active:border-[#1a3a6b] transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#1a3a6b]/10 transition-colors" style={{ color: '#1a3a6b' }}>
                  <IconRender icon={icon} className="text-2xl" />
                </div>
                <span className="text-[13px] md:text-[11px] font-semibold text-center leading-tight" style={{ color: '#1a3a6b' }}>
                  {rawLabel.split('\n').map((l, j, arr) => (
                    <span key={j}>{l}{j < arr.length - 1 ? <br /> : ''}</span>
                  ))}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/specialities"
            className="inline-flex items-center gap-2 border-2 border-[#1a3a6b] text-[#1a3a6b] rounded-full px-8 py-3 text-sm font-bold hover:bg-[#1a3a6b] hover:text-white active:opacity-80 transition-all">
            {t('home_spec_view_all')} <i className="ph ph-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const { t } = useLanguage()

  const chips = [
    { icon: 'ph ph-wrench', label: t('home_about_chip1'), color: 'bg-blue-50 text-[#1a3a6b]' },
    { icon: 'ph ph-users-three', label: t('home_about_chip2'), color: 'bg-teal-50 text-teal-600' },
    { icon: 'ph ph-heart', label: t('home_about_chip3'), color: 'bg-rose-50 text-rose-600' },
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          <div className="w-full lg:w-[45%] rounded-2xl overflow-hidden shadow-2xl min-h-[220px] md:min-h-[480px] bg-black">
            <video
              src="https://res.cloudinary.com/dmhonzqrm/video/upload/a_-90,f_mp4,q_auto/v1780563841/IMG_8788_nejnfg.mp4"
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline
            />
          </div>

          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>
              {t('home_about_eyebrow')}
            </p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-900 mb-2">
              {t('home_about_heading')}
            </h2>
            <h3 className="text-xl font-semibold text-gray-500 mb-6">{t('home_about_subheading')}</h3>

            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-8">
              <p>{t('home_about_p1')}</p>
              <p>{t('home_about_p2')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chips.map(({ icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm active:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
                    <i className={`${icon} text-xl`}></i>
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-snug">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#1a3a6b] hover:underline active:opacity-70">
                {t('home_about_learn_more')} <i className="ph ph-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmergencySection() {
  const { t } = useLanguage()
  const emergencyItems = [
    t('home_em_trauma'), t('home_em_medical'),
    t('home_em_surgical'), t('home_em_icu'),
  ]

  return (
    <section className="py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[480px]">
        <div className="w-full lg:w-1/2 relative min-h-[260px] md:min-h-[320px]">
          <img
            src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Emergency Care"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#002247]/45"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 md:px-10 md:py-16 text-white text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center mb-5">
              <i className="ph-fill ph-siren text-3xl md:text-4xl text-red-300"></i>
            </div>
            <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
            <div className="text-base md:text-lg font-bold uppercase tracking-widest text-blue-200">{t('home_em_available')}</div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#002247] flex items-center">
          <div className="px-5 py-10 md:px-10 md:py-16 w-full">
            <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
              {t('home_em_eyebrow')}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {t('home_em_heading')}
            </h2>
            <div className="space-y-4 text-sm text-blue-100/80 leading-relaxed mb-8">
              <p>{t('home_em_desc')}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {emergencyItems.map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-blue-200">
                  <i className="ph-fill ph-check-circle text-teal-400 text-sm shrink-0"></i>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:08040123456"
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 justify-center w-full sm:w-auto">
                <i className="ph ph-phone-call text-base"></i> {t('home_em_helpline')}
              </a>
              <Link href="/contact"
                className="border border-white/20 hover:bg-white/10 active:bg-white/20 text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 justify-center w-full sm:w-auto">
                {t('home_em_contact')} <i className="ph ph-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const { t } = useLanguage()

  const items = [
    { icon: 'ph ph-bed',            value: '200+', label: t('home_why_beds_label'), desc: t('home_why_beds_desc') },
    { icon: 'ph ph-stethoscope',    value: '40+',  label: t('home_why_spec_label'), desc: t('home_why_spec_desc') },
    { icon: 'ph ph-clock-countdown',value: '24/7', label: t('home_why_em_label'),   desc: t('home_why_em_desc') },
    { icon: 'ph ph-wrench',         value: '',     label: t('home_why_surg_label'), desc: t('home_why_surg_desc') },
    { icon: 'ph ph-microscope',     value: '',     label: t('home_why_diag_label'), desc: t('home_why_diag_desc') },
    { icon: 'ph ph-link',           value: '',     label: t('home_why_int_label'),  desc: t('home_why_int_desc') },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>
            {t('home_why_eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{t('home_why_heading')}</h2>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {t('home_why_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon, value, label, desc }) => (
            <div key={label}
              className="group bg-gray-50 hover:bg-[#1a3a6b] active:bg-[#1a3a6b] border border-gray-100 hover:border-[#1a3a6b] rounded-2xl p-7 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#1a3a6b]/10 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors">
                <i className={`${icon} text-2xl text-[#1a3a6b] group-hover:text-white transition-colors`}></i>
              </div>
              {value && (
                <div className="text-4xl font-black text-[#1a3a6b] group-hover:text-white mb-1 transition-colors">{value}</div>
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

function TestimonialsCard({ item }) {
  return (
    <div className="border border-gray-200 flex flex-col bg-white rounded-2xl shadow-sm h-full">
      <div className="px-6 py-7 flex-1">
        <i className="ph-fill ph-quotes text-3xl mb-4 block" style={{ color: '#1a3a6b', opacity: 0.2 }}></i>
        <p className="text-[15px] font-medium text-gray-700 leading-relaxed italic">"{item.quote}"</p>
      </div>
      <div className="border-t border-gray-100 flex gap-4 items-center px-6 py-4 bg-gray-50/50 rounded-b-2xl">
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm text-white text-lg"
          style={{ backgroundColor: item.gender === 'female' ? '#e91e8c' : '#1a3a6b' }}>
          <i className={item.gender === 'female' ? 'ph-fill ph-gender-female' : 'ph-fill ph-gender-male'}></i>
        </div>
        <div>
          <h5 className="text-sm font-bold" style={{ color: '#1a3a6b' }}>{item.name}</h5>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, s) => <i key={s} className="ph-fill ph-star text-amber-400 text-xs"></i>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileTestimonialCarousel() {
  const scrollRef = useRef(null)
  const [activeDot, setActiveDot] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    if (maxScroll <= 0) return
    const index = Math.round((scrollLeft / maxScroll) * (testimonials.length - 1))
    setActiveDot(Math.max(0, Math.min(index, testimonials.length - 1)))
  }, [])

  const scrollTo = (index) => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: (maxScroll / (testimonials.length - 1)) * index, behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2 scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}>
        {testimonials.map((item, i) => (
          <div key={i} className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]">
            <TestimonialsCard item={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${i === activeDot
              ? 'w-6 h-2 bg-[#1a3a6b]'
              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-20 bg-slate-50 border-t border-gray-100 overflow-hidden">
      <div className="mb-8 md:mb-12 text-center px-4">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>{t('home_test_eyebrow')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t('home_test_heading')}</h2>
        <p className="text-sm text-gray-500 italic font-serif max-w-xl mx-auto">
          {t('home_test_sub')}
        </p>
      </div>

      <div className="md:hidden">
        <MobileTestimonialCarousel />
      </div>

      <div className="hidden md:block w-full pb-6">
        <div
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
          className="flex relative overflow-hidden">
          <div className="flex animate-x-slider gap-5 w-max hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div key={i} className="shrink-0 w-[380px] lg:w-[480px]">
                <TestimonialsCard item={item} />
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
