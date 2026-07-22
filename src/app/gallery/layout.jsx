import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'NK Hospital Gallery | Advanced Healthcare in Kalaburagi',
  description: 'Browse the NK Hospital gallery to explore our modern infrastructure, advanced facilities, and patient care.',
  path: '/gallery',
})

export default function GalleryLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
      ])} />
      {children}
    </>
  )
}
