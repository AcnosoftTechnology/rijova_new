export function ContactHero() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="glass rounded-[30px] p-8 shadow-[0_24px_70px_rgba(6,95,70,0.1)] md:p-10">
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
          Contact us
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Need help with supplements, orders, or delivery updates?</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">Use this page for support, product guidance, or partnership queries. The layout keeps the same premium spacing and animated cards seen on the homepage.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ['Email support', 'care@rijova.com'],
            ['Call us', '+92 300 1234567'],
            ['Working hours', 'Mon - Sat • 10 AM to 7 PM'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[22px] border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm text-slate-500">{copy}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[30px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-8 text-white md:p-10">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-100">Quick response</p>
        <h2 className="mt-4 text-3xl font-semibold">We reply fast and keep every support step easy to track.</h2>
        <div className="mt-8 grid gap-4">
          {['Track an order', 'Update delivery address', 'Request expert product help'].map((text) => (
            <div key={text} className="rounded-[22px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
