import { Clock, ArrowRight, BookOpen } from 'lucide-react'

const posts = [
  {
    id: 1,
    category: 'Nutrition',
    date: 'June 28, 2026',
    readTime: '5 min read',
    title: 'The Science Behind Whey Protein Absorption: Isolate vs Concentrate',
    excerpt: 'Understand the biochemical differences that determine which protein form is right for your specific training goals and body composition targets.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=380&fit=crop&auto=format',
    categoryColor: '#065f46',
  },
  {
    id: 2,
    category: 'Training',
    date: 'July 2, 2026',
    readTime: '7 min read',
    title: 'Creatine Loading vs Maintenance: Which Protocol Delivers Results?',
    excerpt: 'A deep dive into creatine supplementation protocols, saturation timelines, and what elite athletes are doing differently in 2026.',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=380&fit=crop&auto=format',
    categoryColor: '#d97706',
  },
  {
    id: 3,
    category: 'Wellness',
    date: 'July 5, 2026',
    readTime: '4 min read',
    title: 'Ashwagandha & Cortisol: The Adaptogen Revolution in Sports Nutrition',
    excerpt: 'How traditional Ayurvedic herbs are being validated by modern science to reduce stress hormones and improve recovery between intense sessions.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=380&fit=crop&auto=format',
    categoryColor: '#7c3aed',
  },
]

export default function Blog() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={16} className="text-[#d97706]" />
              <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">Knowledge Hub</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Expert Insights
            </h2>
          </div>
          <a href="#" className="text-[#065f46] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View All Articles →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={post.id} className={`group cursor-pointer ${i === 0 ? 'md:col-span-1' : ''}`}>
              {/* Image */}
              <div className="img-zoom relative overflow-hidden rounded-2xl mb-4 h-52 bg-gray-100">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div
                  className="absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1.5 rounded-full"
                  style={{ background: post.categoryColor }}
                >
                  {post.category}
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#065f46] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {post.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#065f46] group-hover:gap-2.5 transition-all">
                Read More <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
