import { Suspense } from 'react'
import BookContent from './BookContent'

// BookContent reads useSearchParams, so it renders on the client only. The
// fallback carries the H1 so the heading is present in the server HTML.
function HeadingFallback() {
  return (
    <div className="text-white py-14 text-center" style={{ background: 'linear-gradient(to right, #1e3a5f, #312e81)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Book Appointment</h1>
        <p className="text-xs md:text-sm text-blue-200/90 font-medium">Choose your doctor and book a slot in seconds</p>
      </div>
    </div>
  )
}

export default function Book() {
  return (
    <Suspense fallback={<HeadingFallback />}>
      <BookContent />
    </Suspense>
  )
}
