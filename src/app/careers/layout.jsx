import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Careers at NK Hospital, Kalaburagi | Join Our Team',
  description: 'Explore career opportunities at NK Hospital, Kalaburagi. Join our team of healthcare professionals and build a rewarding career in patient care.',
  path: '/careers',
})

export default function CareersLayout({ children }) {
  return children
}
