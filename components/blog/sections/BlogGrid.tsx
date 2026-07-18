import Link from 'next/link';
import { blogPosts } from '@/lib/store-data';

export function BlogGrid() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="section-pad space-y-8">
      <Link href={`/blog/${featured.slug}`} className="group grid gap-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-8 text-white shadow-[0_24px_70px_rgba(6,95,70,0.2)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">Featured story</span>
          <h2 className="text-3xl font-semibold transition group-hover:translate-x-1">{featured.title}</h2>
          <p className="text-sm leading-7 text-emerald-100">{featured.excerpt}</p>
          <div className="flex flex-wrap gap-3 text-sm text-emerald-50">
            <span>{featured.author}</span>
            <span>•</span>
            <span>{featured.date}</span>
            <span>•</span>
            <span>{featured.readTime}</span>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {featured.tags.map((tag) => (
              <div key={tag} className="rounded-[20px] border border-white/10 bg-white/10 px-4 py-3 text-sm">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{post.category}</span>
            <h3 className="mt-5 text-2xl font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
