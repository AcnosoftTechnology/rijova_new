export function TrackOrderHero() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="glass rounded-[30px] p-8 shadow-[0_24px_70px_rgba(6,95,70,0.1)] md:p-10">
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">Track order</span>
        <h1 className="mt-5 text-4xl font-semibold md:text-5xl">Check delivery status in a clean and confidence-building flow.</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">Perfect for users who just want fast visibility into dispatch, shipment, and ETA with minimal friction.</p>
      </div>
      <div className="rounded-[30px] bg-gradient-to-br from-emerald-950 to-emerald-700 p-8 text-white md:p-10 animate-pulse-glow">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-100">Quick access</p>
        <h2 className="mt-4 text-3xl font-semibold">Order ID + email or phone = instant tracking lookup.</h2>
      </div>
    </section>
  );
}
