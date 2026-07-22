import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Multispeciality Healthcare Services in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
  path: '/specialities',
})

export default function SpecialitiesLayout({ children }) {
  return children
}
