import Link from 'next/link';
import { BlogPost } from '@/lib/store-data';

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <section className="section-pad grid gap-6 lg:grid-cols-[1fr_320px]">
      <article className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-10">
        <div className="prose max-w-none prose-p:text-slate-600 prose-p:leading-8 prose-headings:text-slate-900">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
      <aside className="space-y-4">
        <div className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <h3 className="text-xl font-semibold text-slate-900">Tags</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">{tag}</span>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] bg-gradient-to-br from-amber-400 to-amber-500 p-6 text-slate-900 shadow-[0_18px_40px_rgba(245,158,11,0.22)]">
          <h3 className="text-xl font-semibold">Need more guidance?</h3>
          <p className="mt-3 text-sm leading-7 text-slate-800/80">Use this sidebar for related posts, newsletter signup, or recommended product blocks.</p>
          <Link href="/contact" className="btn-primary mt-5 !inline-flex">Talk to support</Link>
        </div>
      </aside>
    </section>
  );
}
