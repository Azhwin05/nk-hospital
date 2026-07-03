import Script from 'next/script'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'NK Hospital Kalaburagi | Multi Super-Specialty Hospital',
  description: 'NK Hospital is Kalaburagi\'s leading multi super-specialty hospital with 200+ beds, 40+ specialties including Gastroenterology, Cardiology, Neurology, Oncology, and 24/7 emergency care. Expert doctors. Advanced infrastructure.',
  keywords: 'NK Hospital Kalaburagi, multi specialty hospital Kalaburagi, best hospital Gulbarga, gastroenterology Kalaburagi, cardiology hospital Karnataka, emergency hospital Kalaburagi',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nk-hospital.vercel.app/' },
  icons: { icon: '/logo.png' },
  verification: { google: 'YkmR_53N72r4sh-7JQOIhsRVmvb_afaTPbTnPnA2oA0' },
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
  email: 'nkhospitalglb@gmail.com',
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PTRG4CZB');` }} />
        {/* End Google Tag Manager */}
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2033952207470291');
fbq('track', 'PageView');` }} />
        {/* End Meta Pixel Code */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Kannada:wght@400;500;600;700;800&family=Noto+Serif+Kannada:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/slide1.jpg" fetchPriority="high" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTRG4CZB" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Meta Pixel (noscript) */}
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=2033952207470291&ev=PageView&noscript=1" alt="" /></noscript>
        <Providers>{children}</Providers>
        <Script src="https://unpkg.com/@phosphor-icons/web@2.1.1" strategy="afterInteractive" />
      </body>
    </html>
  )
}
