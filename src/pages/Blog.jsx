import { Link } from 'react-router-dom'
import TopBarDark from '../components/layout/TopBarDark'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const posts = [
  { title: 'Understanding Diabetes: Prevention and Lifestyle Changes', category: 'Endocrinology', date: 'May 20, 2026', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop', excerpt: 'Diabetes affects millions globally. Learn how simple lifestyle changes can help prevent and manage Type 2 diabetes effectively.' },
  { title: 'Heart Health: Warning Signs You Should Never Ignore', category: 'Cardiology', date: 'May 15, 2026', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop', excerpt: 'Chest pain, breathlessness, and fatigue could be more than just stress. Know when to seek immediate cardiac care.' },
  { title: 'Why Regular Health Checkups Matter at Every Age', category: 'Preventive Care', date: 'May 10, 2026', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop', excerpt: 'Annual health checkups can detect silent conditions early — before they become serious. Here\'s what to include at different life stages.' },
  { title: 'Managing Back Pain: When to See a Doctor', category: 'Orthopedics', date: 'Apr 28, 2026', img: 'https://images.unsplash.com/photo-1544991875-5dc1b05f1571?q=80&w=600&auto=format&fit=crop', excerpt: 'Back pain is one of the most common health complaints. Understand the causes and when it needs medical attention.' },
  { title: 'Children\'s Health: Vaccination Schedule Parents Must Know', category: 'Pediatrics', date: 'Apr 20, 2026', img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop', excerpt: 'Following the right vaccination schedule protects your child against life-threatening diseases. A complete guide for parents.' },
  { title: 'Nutrition and Cancer Prevention: What the Research Says', category: 'Oncology', date: 'Apr 12, 2026', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', excerpt: 'Diet plays a significant role in cancer risk. Evidence-based nutritional strategies that can lower your risk.' },
]

export default function Blog() {
  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e3a5f, #0f4c81)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Blogs & Articles</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">Health insights and expert advice from our medical team</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link to="/" className="flex items-center gap-1.5 hover:text-[#0f4c81] text-gray-400"><i className="ph ph-house text-sm"></i> Home</Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#0f4c81' }}>Blog</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-12 w-full flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ title, category, date, img, excerpt }) => (
            <article key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={title} />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">{category}</span>
                  <span className="text-[10px] text-gray-400">{date}</span>
                </div>
                <h3 className="text-sm font-bold leading-snug mb-2" style={{ color: '#0c1b33' }}>{title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed flex-1">{excerpt}</p>
                <button className="mt-4 text-[11px] font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: '#0f4c81' }}>
                  Read More <i className="ph ph-arrow-right text-xs"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
