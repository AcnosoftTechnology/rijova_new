const values = [
  ['Transparency', 'Clear highlights for ingredients, routines, and order information across all pages.'],
  ['Consistency', 'Same button language, spacing rhythm, and card styling from discovery to checkout.'],
  ['Responsiveness', 'All grids collapse gracefully on tablet and mobile, following the homepage behavior.'],
  ['Motion', 'Float, fade-up, and lift interactions give the interface a premium modern feel.'],
];

export function AboutValues() {
  return (
    <section className="section-pad">
      <div className="rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-8 text-white md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
              Core values
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Premium design, clear customer flow, and strong post-purchase experience.</h2>
          </div>
          <button className="btn-gold">Join the community</button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {values.map(([title, copy]) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-50/90">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
