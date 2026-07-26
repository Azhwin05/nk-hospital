const BASE = 'https://www.nkhospital.com'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/', '/doctor', '/doctor/'],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
