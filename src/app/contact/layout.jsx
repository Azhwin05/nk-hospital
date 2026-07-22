import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Contact NK Hospital | Book Consultation | Emergency Services',
  description: 'Contact NK Hospital in Kalaburagi to book consultation, access emergency services, ambulance services, or enquire more about our healthcare services.',
  path: '/contact',
})

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
      ])} />
      {children}
    </>
  )
}
