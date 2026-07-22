import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'About NK Hospital | Trusted Multispecialty Hospital in Kalaburagi',
  description: 'NK Hospital is a trusted multispecialty hospital in Kalaburagi with 200+ beds, 40+ specialties, committed to delivering quality healthcare services.',
  path: '/about',
})

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ])} />
      {children}
    </>
  )
}
