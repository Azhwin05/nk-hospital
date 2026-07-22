export const SITE = 'https://nkhospital.com'
export const SITE_NAME = 'NK Hospital Kalaburagi'

// BreadcrumbList structured data — lets Google show a breadcrumb trail
// under the search result instead of a bare URL.
export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }
}

// MedicalWebPage — marks a specialty page as medical content and ties it
// back to the hospital, which Google treats as a trust signal for YMYL pages.
export function medicalPageLd({ name, description, path, specialty }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url: `${SITE}${path}`,
    inLanguage: 'en-IN',
    ...(specialty ? { about: { '@type': 'MedicalSpecialty', name: specialty } } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE,
    },
    publisher: {
      '@type': 'Hospital',
      name: 'NK Hospital',
      url: SITE,
      logo: `${SITE}/logo.png`,
    },
  }
}

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
