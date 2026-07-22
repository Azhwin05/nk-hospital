import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Book an Appointment with Our Experts at NK Hospital, Kalaburagi',
  description: 'Book your appointment online with experienced doctors at NK Hospital, Kalaburagi, for expert consultation and quality healthcare services.',
  path: '/book',
})

export default function BookLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Book Appointment', path: '/book' },
      ])} />
      {children}
    </>
  )
}
