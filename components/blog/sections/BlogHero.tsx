export function BlogHero() {
  return (
    <section className="rounded-[32px] border border-slate-200/70 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">Blog</span>
          <h1 className="mt-5 text-4xl font-semibold md:text-5xl">Content-rich blog layouts with the same premium Rijova visual language.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">This page is designed for article discovery, category filters, featured stories, and responsive editorial cards.</p>
        </div>
        <div className="rounded-[28px] bg-gradient-to-br from-emerald-950 to-emerald-700 p-8 text-white">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-100">Featured topics</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {['Protein', 'Recovery', 'Workout tips', 'Buying guides', 'Daily wellness'].map((topic) => (
              <span key={topic} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">{topic}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
