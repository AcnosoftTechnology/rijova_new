import { stats } from '@/lib/store-data';

export function AboutHero() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="glass rounded-[28px] border border-white/60 p-8 shadow-[0_30px_80px_rgba(6,95,70,0.12)] md:p-10 animate-fade-up">
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
          About Rijova
        </span>
        <h1 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
          Built for <span className="gradient-text-gold">stronger routines</span>, cleaner recovery, and better daily performance.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-m">
          Rijova blends modern sports nutrition with a premium wellness-first look. This page follows the same dark emerald, gold accent, rounded card, and airy section style from the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="btn-primary">Explore products</button>
          <button className="btn-outline">Meet our story</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-[28px] bg-gradient-to-br from-emerald-950 to-emerald-700 p-8 text-white shadow-[0_24px_60px_rgba(6,95,70,0.24)] animate-float-slow">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-200">Our promise</p>
          <h3 className="mt-3 text-2xl font-semibold">Science-led formulas, premium ingredients, and athlete-friendly experiences.</h3>
          <p className="mt-4 text-sm leading-7 text-emerald-100">Every inner page keeps strong visual continuity with the homepage through polished gradients, glass cards, and bold section hierarchy.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[24px] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] hover-lift">
              <p className="text-3xl font-semibold text-emerald-800">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
