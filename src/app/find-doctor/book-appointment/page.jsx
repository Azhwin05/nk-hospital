import { Suspense } from 'react'
import FindDoctorContent from '../FindDoctorContent'

export default function BookAppointment() {
  return (
    <Suspense fallback={null}>
      <FindDoctorContent />
    </Suspense>
  )
}
