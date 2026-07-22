import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Health Camps & Events Organized by NK Hospital, Kalaburagi',
  description: 'Stay updated about the latest health camps, medical events, awareness programs, and community initiatives organized by NK Hospital, Kalaburagi.',
  path: '/events',
})

export default function EventsLayout({ children }) {
  return children
}
