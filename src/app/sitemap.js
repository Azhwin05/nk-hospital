import { blogPosts } from '@/data/blogData'

const BASE = 'https://nkhospital.com'

// Specialty detail pages (keys of specialitiesData)
const specialtySlugs = [
  'general-medicine',
  'orthopedics',
  'surgical-gastroenterology',
  'medical-gastroenterology',
  'pulmonology',
]

export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { path: '',                 changeFrequency: 'weekly',  priority: 1.0 },
    { path: '/about',           changeFrequency: 'monthly', priority: 0.8 },
    { path: '/find-doctor',     changeFrequency: 'weekly',  priority: 0.9 },
    { path: '/specialities',    changeFrequency: 'monthly', priority: 0.9 },
    { path: '/health-packages', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/book',            changeFrequency: 'monthly', priority: 0.9 },
    { path: '/gallery',         changeFrequency: 'monthly', priority: 0.6 },
    { path: '/events',          changeFrequency: 'weekly',  priority: 0.6 },
    { path: '/blog',            changeFrequency: 'weekly',  priority: 0.7 },
    { path: '/careers',         changeFrequency: 'monthly', priority: 0.5 },
    { path: '/contact',         changeFrequency: 'monthly', priority: 0.7 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const specialtyPages = specialtySlugs.map((slug) => ({
    url: `${BASE}/specialities/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...specialtyPages, ...blogPages]
}
