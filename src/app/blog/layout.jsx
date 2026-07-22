import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Health Blogs & Medical Articles | NK Hospital Kalaburagi',
  description: 'Explore our health blogs featuring medical insights, wellness tips, preventive care, and the latest healthcare updates.',
  path: '/blog',
})

export default function BlogLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Blogs', path: '/blog' },
      ])} />
      {children}
    </>
  )
}
