import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Careers at NK Hospital, Kalaburagi | Join Our Team',
  description: 'Explore career opportunities at NK Hospital, Kalaburagi. Join our team of healthcare professionals and build a rewarding career in patient care.',
  path: '/careers',
})

export default function CareersLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/careers' },
      ])} />
      {children}
    </>
  )
}
