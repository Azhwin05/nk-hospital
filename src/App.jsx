import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Specialities from './pages/Specialities'
import FindDoctor from './pages/FindDoctor'
import Book from './pages/Book'
import HealthPackages from './pages/HealthPackages'
import SpecialityDetail from './pages/SpecialityDetail'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import DoctorLogin from './pages/doctor/Login'
import DoctorDashboard from './pages/doctor/Dashboard'
import FloatingBookButton from './components/FloatingBookButton'
import StickyEmergencyBar from './components/StickyEmergencyBar'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <StickyEmergencyBar />
      <FloatingBookButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/specialities/:slug" element={<SpecialityDetail />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/book" element={<Book />} />
        <Route path="/health-packages" element={<HealthPackages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  )
}
