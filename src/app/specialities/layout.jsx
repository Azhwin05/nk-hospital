import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Multispeciality Healthcare Services in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
  path: '/specialities',
})

export default function SpecialitiesLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Specialities', path: '/specialities' },
      ])} />
      {children}
    </>
  )
}
