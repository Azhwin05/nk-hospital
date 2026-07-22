import { pageMeta, breadcrumbLd, medicalPageLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

const SPECIALTY_META = {
  'medical-gastroenterology': {
    label: 'Medical Gastroenterology',
    specialty: 'Gastroenterologic',
    title: 'Best Medical Gastroenterology Hospital in Kalaburagi',
    description: 'Get expert medical gastroenterology care at NK Hospital, Kalaburagi for digestive, liver, pancreas, and GI disorders with advanced diagnosis and treatment.',
  },
  'surgical-gastroenterology': {
    label: 'Surgical Gastroenterology',
    specialty: 'Gastroenterologic',
    title: 'Surgical Gastro Center in Kalaburagi | Surgical Gastro Specialist',
    description: 'NK Hospital offers advanced surgical gastroenterology care in Kalaburagi for GI, liver, pancreas, and colorectal conditions with expert surgeons.',
  },
  'orthopedics': {
    label: 'Orthopedics',
    specialty: 'Musculoskeletal',
    title: 'Best Orthopedic Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert orthopaedic care for fractures, arthritis, joint replacement, spine disorders, and sports injuries in Kalaburagi.',
  },
  'general-medicine': {
    label: 'General Medicine',
    specialty: 'PrimaryCare',
    title: 'General Medicine Hospital in Kalaburagi | NK Hospital',
    description: 'Consult experienced physicians at NK Hospital for diabetes, hypertension, infections, fever, and preventive healthcare in Kalaburagi.',
  },
  'pulmonology': {
    label: 'Pulmonology',
    specialty: 'Pulmonary',
    title: 'Best Pulmonology Hospital in Kalaburagi | NK Hospital',
    description: 'Expert pulmonology care at NK Hospital, Kalaburagi for asthma, COPD, respiratory infections, and lung disorders with advanced diagnosis and treatment.',
  },
}

const FALLBACK = {
  label: 'Specialities',
  specialty: null,
  title: 'Medical Specialities in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  return pageMeta({
    title: meta.title,
    description: meta.description,
    path: `/specialities/${slug}`,
  })
}

export default async function SpecialityLayout({ children, params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  const path = `/specialities/${slug}`

  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Specialities', path: '/specialities' },
        { name: meta.label, path },
      ])} />
      <JsonLd data={medicalPageLd({
        name: meta.title,
        description: meta.description,
        path,
        specialty: meta.specialty,
      })} />
      {children}
    </>
  )
}
