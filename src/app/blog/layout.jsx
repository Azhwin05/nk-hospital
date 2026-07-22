import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Health Blogs & Medical Articles | NK Hospital Kalaburagi',
  description: 'Explore our health blogs featuring medical insights, wellness tips, preventive care, and the latest healthcare updates.',
  path: '/blog',
})

export default function BlogLayout({ children }) {
  return children
}
