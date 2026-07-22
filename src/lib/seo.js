export const SITE = 'https://nkhospital.com'
export const SITE_NAME = 'NK Hospital Kalaburagi'

// Builds a full Next.js metadata object (title, description, canonical, OG, Twitter)
// for a single page. Used by each route's layout.jsx.
export function pageMeta({ title, description, path = '' }) {
  const url = `${SITE}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'en_IN',
      images: [{ url: `${SITE}/slide1.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE}/slide1.jpg`],
    },
  }
}
