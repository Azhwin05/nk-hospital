import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer style={{ backgroundColor: '#0c1b33' }} className="text-white pt-8 pb-4">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">

        {/* Top bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-6 pb-5 border-b border-white/5">
          <img src="/logo.png" alt="NK Hospital" className="h-16 w-auto object-contain shrink-0"
            style={{ filter: 'brightness(0) invert(1)' }} />
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:08040123456"
              className="bg-white/5 hover:bg-white/10 active:bg-white/15 px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors whitespace-nowrap">
              <i className="ph-fill ph-ambulance text-red-500 text-sm"></i> {t('footer_ambulance')}
            </a>
            <Link to="/book"
              className="px-5 py-2.5 rounded-full text-xs font-bold transition-colors text-center shadow-sm flex items-center justify-center whitespace-nowrap text-[#0c1b33] active:opacity-80"
              style={{ backgroundColor: '#c9a227' }}>
              {t('footer_book')}
            </Link>
          </div>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6 border-b border-white/5 pb-6">
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[11px]">{t('footer_patient_care')}</h4>
            <ul className="space-y-2.5 text-gray-400 text-xs">
              <li><Link to="/find-doctor" className="hover:text-white active:text-white/80 transition-colors">{t('footer_find_doctor')}</Link></li>
              <li><Link to="/specialities" className="hover:text-white active:text-white/80 transition-colors">{t('footer_specialties')}</Link></li>
              <li><Link to="/book" className="hover:text-white active:text-white/80 transition-colors">{t('footer_book')}</Link></li>
              <li><Link to="/health-packages" className="hover:text-white active:text-white/80 transition-colors">{t('footer_health_packages')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[11px]">{t('footer_discover')}</h4>
            <ul className="space-y-2.5 text-gray-400 text-xs">
              <li><Link to="/about" className="hover:text-white active:text-white/80 transition-colors">{t('footer_about')}</Link></li>
              <li><Link to="/gallery" className="hover:text-white active:text-white/80 transition-colors">{t('footer_gallery')}</Link></li>
              <li><Link to="/blog" className="hover:text-white active:text-white/80 transition-colors">{t('footer_blogs')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[11px]">{t('footer_connect')}</h4>
            <ul className="space-y-2.5 text-gray-400 text-xs">
              <li><Link to="/contact" className="hover:text-white active:text-white/80 transition-colors">{t('footer_contact')}</Link></li>
              <li><a href="#" className="hover:text-white active:text-white/80 transition-colors">{t('footer_careers')}</a></li>
              <li><a href="#" className="hover:text-white active:text-white/80 transition-colors">{t('footer_feedback')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-3 text-[11px]">{t('footer_follow')}</h4>
            <div className="flex gap-2 flex-wrap mb-4">
              {[
                { icon: 'ph-facebook-logo',  href: 'https://www.facebook.com/NKHospitalKalburagi',             label: 'Facebook' },
                { icon: 'ph-twitter-logo',   href: 'https://x.com/NKhospital_KAL',                              label: 'Twitter/X' },
                { icon: 'ph-linkedin-logo',  href: 'https://www.linkedin.com/company/nk-hospital-kalaburagi/', label: 'LinkedIn' },
                { icon: 'ph-youtube-logo',   href: 'https://www.youtube.com/@NKhospital_Kalaburagi',            label: 'YouTube' },
                { icon: 'ph-instagram-logo', href: 'https://www.instagram.com/nk_hospital_/',                   label: 'Instagram' },
              ].map(({ icon, href, label }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 active:bg-white/20 transition-colors">
                  <i className={`ph-fill ${icon} text-sm`}></i>
                </a>
              ))}
            </div>
            <div className="space-y-2 text-xs text-gray-400 border-t border-white/5 pt-3">
              <div className="flex items-start gap-1.5">
                <i className="ph-fill ph-map-pin text-[#c9a227] shrink-0 mt-0.5"></i>
                <span className="leading-relaxed">NK Nagar, opposite Shor Gumbad, Jaferabad, Kalaburagi, Karnataka 585103</span>
              </div>
              <a href="mailto:info@nkhospital.in" className="flex items-center gap-1.5 hover:text-white active:text-white/80 transition-colors">
                <i className="ph-fill ph-envelope text-gray-500 shrink-0"></i> info@nkhospital.in
              </a>
              <a href="tel:08040123456" className="flex items-center gap-1.5 hover:text-white active:text-white/80 transition-colors font-semibold">
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
            <div key={label} className="bg-white/5 border border-white/5 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-gray-300">
              <div className={`w-4 h-4 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                <i className={`${icon} text-white text-[8px]`}></i>
              </div>
              {label}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 pt-3 border-t border-white/5 gap-1">
          <p>{t('footer_copyright')}</p>
          <p className="text-gray-600">{t('footer_designed_by')} <a href="https://digitaltrionix.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-semibold hover:text-white transition-colors">Digitaltrionix Pvt Ltd</a></p>
        </div>
      </div>
    </footer>
  )
}
