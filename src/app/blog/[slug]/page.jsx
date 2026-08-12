import Link from 'next/link'
import { notFound } from 'next/navigation'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/JsonLd'
import { pageMeta, articleLd } from '@/lib/seo'
import { blogPosts, getPost } from '@/data/blogData'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return pageMeta({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

// Blog text is either a plain string or a list of segments, where a segment
// with an `href` becomes an inline link: ['plain ', { text: 'anchor', href: '/x' }]
function RichText({ value }) {
  if (!Array.isArray(value)) return value
  return value.map((part, i) =>
    typeof part === 'string'
      ? part
      : <Link key={i} href={part.href} className="font-semibold underline underline-offset-2 hover:opacity-80" style={{ color: '#1a3a6b' }}>{part.text}</Link>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-xl md:text-2xl font-extrabold mt-10 mb-4" style={{ color: '#1a3a6b' }}>{block.text}</h2>
    case 'h3':
      return <h3 className="text-base md:text-lg font-bold mt-6 mb-2" style={{ color: '#1a3a6b' }}>{block.text}</h3>
    case 'ul':
      return (
        <ul className="space-y-2.5 my-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 leading-relaxed">
              <i className="ph-bold ph-check-circle text-lg mt-0.5 shrink-0" style={{ color: '#1a3a6b' }}></i>
              <span><RichText value={item} /></span>
            </li>
          ))}
        </ul>
      )
    case 'steps':
      return (
        <ol className="space-y-4 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5" style={{ backgroundColor: '#1a3a6b' }}>{i + 1}</span>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-800">{item.title}</span> — <RichText value={item.text} />
              </p>
            </li>
          ))}
        </ol>
      )
    default:
      return <p className="text-[15px] text-gray-600 leading-relaxed my-4"><RichText value={block.text} /></p>
  }
}

export default async function BlogArticle({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="antialiased bg-white text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <JsonLd data={articleLd({
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        path: `/blog/${post.slug}`,
        image: post.img,
        datePublished: post.isoDate,
      })} />

      {/* Hero */}
      <div className="text-white py-12 md:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-blue-300 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blogs</Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-blue-100">{post.category}</span>
            <span className="text-[11px] text-blue-200">{post.date}</span>
            <span className="text-[11px] text-blue-200">· {post.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">{post.title}</h1>
        </div>
      </div>

      <main className="flex-1 w-full">
        <article className="max-w-3xl mx-auto px-4 lg:px-8 py-10 md:py-14">
          <div className="rounded-2xl overflow-hidden shadow-md mb-8 h-56 md:h-80 bg-gray-100">
            <img src={post.img} className="w-full h-full object-cover" alt={post.title} />
          </div>

          {post.content.map((block, i) => <Block key={i} block={block} />)}

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base font-bold" style={{ color: '#1a3a6b' }}>Need expert medical advice?</h3>
              <p className="text-[13px] text-gray-500 mt-0.5">Consult our specialists at NK Hospital, Kalaburagi.</p>
            </div>
            <Link href="/book"
              className="text-white text-sm font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
              style={{ backgroundColor: '#1a3a6b' }}>
              <i className="ph ph-calendar-plus"></i> Book Appointment
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="text-sm font-bold flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: '#1a3a6b' }}>
              <i className="ph ph-arrow-left"></i> Back to all blogs
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
