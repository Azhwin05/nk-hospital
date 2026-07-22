import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Top Specialists in Kalaburagi | Find a Doctor',
  description: 'Find expert doctors at NK Hospital offering advanced consultation and personalized treatment across multiple specialties. Book your appointment.',
  path: '/find-doctor',
})

export default function FindDoctorLayout({ children }) {
  return children
}
