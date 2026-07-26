import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Contact NK Hospital | Book Consultation | Emergency Services',
  description: 'Contact NK Hospital in Kalaburagi to book consultation, access emergency services, ambulance services, or enquire more about our healthcare services.',
  path: '/contact',
})

const medicalClinicLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'NK Hospital',
  image: 'https://www.nkhospital.com/logo-dark.png',
  '@id': 'https://www.nkhospital.com/',
  url: 'https://www.nkhospital.com/',
  telephone: '9901573323',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'NK Nagar, opposite Shor Gumbad,  Zaferabad,',
    addressLocality: 'Kalaburagi',
    addressRegion: 'Karnataka',
    postalCode: '585103',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.3487858,
    longitude: 76.8097717,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/NKHospitalKalburagi',
    'https://x.com/NKhospital_KAL',
    'https://www.instagram.com/nk_hospital_/',
    'https://www.youtube.com/@NKhospital_Kalaburagi',
    'https://www.linkedin.com/company/nk-hospital-kalaburagi/',
  ],
}

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
      ])} />
      <JsonLd data={medicalClinicLd} />
      {children}
    </>
  )
}
