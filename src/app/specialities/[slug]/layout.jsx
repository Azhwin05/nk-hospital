import { pageMeta } from '@/lib/seo'

const SPECIALTY_META = {
  'medical-gastroenterology': {
    title: 'Best Medical Gastroenterology Hospital in Kalaburagi',
    description: 'Get expert medical gastroenterology care at NK Hospital, Kalaburagi for digestive, liver, pancreas, and GI disorders with advanced diagnosis and treatment.',
  },
  'surgical-gastroenterology': {
    title: 'Surgical Gastro Center in Kalaburagi | Surgical Gastro Specialist',
    description: 'NK Hospital offers advanced surgical gastroenterology care in Kalaburagi for GI, liver, pancreas, and colorectal conditions with expert surgeons.',
  },
  'orthopedics': {
    title: 'Best Orthopedic Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert orthopaedic care for fractures, arthritis, joint replacement, spine disorders, and sports injuries in Kalaburagi.',
  },
  'general-medicine': {
    title: 'General Medicine Hospital in Kalaburagi | NK Hospital',
    description: 'Consult experienced physicians at NK Hospital for diabetes, hypertension, infections, fever, and preventive healthcare in Kalaburagi.',
  },
  'pulmonology': {
    title: 'Best Pulmonology Hospital in Kalaburagi | NK Hospital',
    description: 'Expert pulmonology care at NK Hospital, Kalaburagi for asthma, COPD, respiratory infections, and lung disorders with advanced diagnosis and treatment.',
  },
}

const FALLBACK = {
  title: 'Medical Specialities in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  return pageMeta({ ...meta, path: `/specialities/${slug}` })
}

export default function SpecialityLayout({ children }) {
  return children
}
