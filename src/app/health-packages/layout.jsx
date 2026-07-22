import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Preventive Health Check-Up Packages at NK Hospital, Kalaburagi',
  description: 'Explore our preventive health check-up packages at NK Hospital for your routine health screening, diagnosis, and complete wellness for all ages.',
  path: '/health-packages',
})

export default function HealthPackagesLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Health Packages', path: '/health-packages' },
      ])} />
      {children}
    </>
  )
}
