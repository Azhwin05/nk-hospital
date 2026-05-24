import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Specialities from './pages/Specialities'
import FindDoctor from './pages/FindDoctor'
import Book from './pages/Book'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}
