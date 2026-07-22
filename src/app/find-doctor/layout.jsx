import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Top Specialists in Kalaburagi | Find a Doctor',
  description: 'Find expert doctors at NK Hospital offering advanced consultation and personalized treatment across multiple specialties. Book your appointment.',
  path: '/find-doctor',
})

export default function FindDoctorLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Find a Doctor', path: '/find-doctor' },
      ])} />
      {children}
    </>
  )
}
