import { Suspense } from 'react'
import FindDoctorContent from './FindDoctorContent'

// FindDoctorContent reads useSearchParams, so it renders on the client only.
// The fallback carries the H1 so the heading is present in the server HTML
// (and on screen) before the client bundle takes over.
function HeadingFallback() {
  return (
    <div className="bg-white pt-12 pb-6 border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
        <h1 className="text-3xl font-bold mb-1.5 tracking-tight" style={{ color: '#1a3a6b' }}>Our Specialist Doctors</h1>
        <p className="text-sm text-gray-500">Find the right specialist for your care</p>
      </div>
    </div>
  )
}

export default function FindDoctor() {
  return (
    <Suspense fallback={<HeadingFallback />}>
      <FindDoctorContent />
    </Suspense>
  )
}
