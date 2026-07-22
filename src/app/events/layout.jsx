import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Health Camps & Events Organized by NK Hospital, Kalaburagi',
  description: 'Stay updated about the latest health camps, medical events, awareness programs, and community initiatives organized by NK Hospital, Kalaburagi.',
  path: '/events',
})

export default function EventsLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
      ])} />
      {children}
    </>
  )
}
