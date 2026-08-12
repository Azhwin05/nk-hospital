import { Suspense } from 'react'
import BookContent from '../BookContent'

// Same page as /book — the extra segment just tells BookContent to open the
// appointment form for the doctor named in ?doctor=.
export default function BookAppointment() {
  return (
    <Suspense fallback={null}>
      <BookContent />
    </Suspense>
  )
}
