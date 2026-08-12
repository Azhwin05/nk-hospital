import { Suspense } from 'react'
import BookContent from './BookContent'

export default function Book() {
  return (
    <Suspense fallback={null}>
      <BookContent />
    </Suspense>
  )
}
