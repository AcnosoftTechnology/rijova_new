export function WishlistHero() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 p-8 text-white shadow-[0_24px_80px_rgba(6,95,70,0.22)] md:p-10">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
            Wishlist
          </span>
          <h1 className="mt-5 text-4xl font-semibold md:text-5xl">Save your favourites and come back when you are ready to order.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-100 md:text-base">This layout mirrors the homepage energy with strong hero contrast, soft gradients, and premium CTA placement.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['Fast compare', 'Easy add to cart', 'Bundle reminders', 'Price drop alerts'].map((text) => (
            <div key={text} className="rounded-[24px] border border-white/15 bg-white/10 p-5 text-sm font-medium backdrop-blur-sm">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
