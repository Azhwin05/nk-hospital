import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function FloatingBookButton() {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  if (pathname === '/book') return null

  return (
    <Link to="/book"
      className="fixed right-4 sm:right-6 z-50 flex items-center gap-2 text-white text-xs font-bold px-3 sm:px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      style={{
        backgroundColor: '#1a3a6b',
        bottom: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))',
      }}
      aria-label="Book Appointment">
      <i className="ph ph-calendar-plus text-base"></i>
      <span className="hidden sm:inline">{t('nav_book')}</span>
    </Link>
  )
}
