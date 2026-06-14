import Script from 'next/script'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'NK Hospital Kalaburagi | Multi Super-Specialty Hospital',
  description: 'NK Hospital is Kalaburagi\'s leading multi super-specialty hospital with 200+ beds, 40+ specialties including Gastroenterology, Cardiology, Neurology, Oncology, and 24/7 emergency care. Expert doctors. Advanced infrastructure.',
  keywords: 'NK Hospital Kalaburagi, multi specialty hospital Kalaburagi, best hospital Gulbarga, gastroenterology Kalaburagi, cardiology hospital Karnataka, emergency hospital Kalaburagi',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nk-hospital.vercel.app/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: 'https://nk-hospital.vercel.app/',
    title: 'NK Hospital Kalaburagi | Multi Super-Specialty Hospital',
    description: 'Kalaburagi\'s trusted multi super-specialty hospital. 200+ beds, 40+ specialties, 24/7 emergency. Advanced infrastructure. Expert specialists.',
    images: [{ url: 'https://nk-hospital.vercel.app/slide1.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    siteName: 'NK Hospital Kalaburagi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NK Hospital Kalaburagi | Multi Super-Specialty Hospital',
    description: 'Kalaburagi\'s trusted multi super-specialty hospital. 200+ beds, 40+ specialties, 24/7 emergency.',
    images: ['https://nk-hospital.vercel.app/slide1.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: 'NK Hospital',
  alternateName: 'NK Multi Super-Specialty Hospital',
  url: 'https://nk-hospital.vercel.app/',
  logo: 'https://nk-hospital.vercel.app/logo.png',
  image: 'https://nk-hospital.vercel.app/slide1.jpg',
  description: 'NK Hospital is a leading multi super-specialty hospital in Kalaburagi, Karnataka, providing advanced healthcare across 40+ specialties including Gastroenterology, Cardiology, Neurology, Oncology, and Orthopedics.',
  telephone: '+918040123456',
  email: 'info@nkhospital.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'NK Nagar, opposite Shor Gumbad, Jaferabad',
    addressLocality: 'Kalaburagi',
    addressRegion: 'Karnataka',
    postalCode: '585103',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 17.329, longitude: 76.819 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '00:00', closes: '23:59', description: 'Emergency services available 24/7' },
  ],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Emergency Care' },
    { '@type': 'MedicalSpecialty', name: 'Gastroenterology' },
    { '@type': 'MedicalSpecialty', name: 'Cardiology' },
    { '@type': 'MedicalSpecialty', name: 'Neurology' },
    { '@type': 'MedicalSpecialty', name: 'Oncology' },
    { '@type': 'MedicalSpecialty', name: 'Orthopedics' },
    { '@type': 'MedicalSpecialty', name: 'Nephrology' },
    { '@type': 'MedicalSpecialty', name: 'Hepatology' },
    { '@type': 'MedicalSpecialty', name: 'Liver Transplant' },
  ],
  numberOfBeds: 200,
  sameAs: [
    'https://www.facebook.com/NKHospitalKalburagi',
    'https://www.instagram.com/nk_hospital_/',
    'https://www.linkedin.com/company/nk-hospital-kalaburagi/',
    'https://www.youtube.com/@NKhospital_Kalaburagi',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Kannada:wght@400;500;600;700;800&family=Noto+Serif+Kannada:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/slide1.jpg" fetchPriority="high" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script src="https://unpkg.com/@phosphor-icons/web@2.1.1" strategy="afterInteractive" />
      </body>
    </html>
  )
}
