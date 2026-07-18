import { BlogPost } from '@/lib/store-data';

export function BlogDetailHero({ post }: { post: BlogPost }) {
  return (
    <section className="rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-8 text-white md:p-10">
      <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">{post.category}</span>
      <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{post.title}</h1>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-emerald-100">
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
    </section>
  );
}
