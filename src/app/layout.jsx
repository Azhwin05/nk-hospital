import Script from 'next/script'
import './globals.css'
import Providers from '@/components/Providers'

const HOME_TITLE = 'Best Multi Super Specialty Hospital in Kalaburagi | NK Hospital'
const HOME_DESC = 'NK Hospital is a leading multispecialty hospital in Kalaburagi offering advanced healthcare facilities across multiple specialties.'

export const metadata = {
  metadataBase: new URL('https://www.nkhospital.com'),
  title: HOME_TITLE,
  description: HOME_DESC,
  keywords: 'NK Hospital Kalaburagi, multi specialty hospital Kalaburagi, best hospital Gulbarga, gastroenterology Kalaburagi, cardiology hospital Karnataka, emergency hospital Kalaburagi',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.nkhospital.com/' },
  // Google fetches /favicon.ico first and needs a square icon that is a
  // multiple of 48px; the old /logo.png was 2000x2001 and white-on-transparent,
  // so it was skipped in search results and shown as the generic globe.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  verification: { google: 'YkmR_53N72r4sh-7JQOIhsRVmvb_afaTPbTnPnA2oA0' },
  openGraph: {
    type: 'website',
    url: 'https://www.nkhospital.com/',
    title: HOME_TITLE,
    description: HOME_DESC,
    images: [{ url: 'https://www.nkhospital.com/slide1.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    siteName: 'NK Hospital Kalaburagi',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESC,
    images: ['https://www.nkhospital.com/slide1.jpg'],
  },
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
