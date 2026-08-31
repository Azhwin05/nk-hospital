import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import { healthPackageFaqs } from '@/data/healthPackageFaqs'

export const metadata = pageMeta({
  title: 'Preventive Health Check-Up Packages at NK Hospital, Kalaburagi',
  description: 'Explore our preventive health check-up packages at NK Hospital for your routine health screening, diagnosis, and complete wellness for all ages.',
  path: '/health-packages',
})

// Mirrors the visible FAQ block at the foot of the page, so the page stays
// eligible for FAQ rich results and AI Overview answers.
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: healthPackageFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function HealthPackagesLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Health Packages', path: '/health-packages' },
      ])} />
      <JsonLd data={faqLd} />
      {children}
    </>
  )
}
