import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'NK Hospital Gallery | Advanced Healthcare in Kalaburagi',
  description: 'Browse the NK Hospital gallery to explore our modern infrastructure, advanced facilities, and patient care.',
  path: '/gallery',
})

export default function GalleryLayout({ children }) {
  return children
}
