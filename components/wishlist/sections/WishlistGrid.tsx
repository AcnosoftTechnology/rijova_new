import { wishlistItems } from '@/lib/store-data';

export function WishlistGrid() {
  return (
    <section className="section-pad">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {wishlistItems.map((item) => (
          <article key={item.name} className="card-hover overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-6">
              <div className="flex h-40 w-28 animate-float items-center justify-center rounded-[28px] bg-gradient-to-b from-slate-800 to-slate-950 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-2xl">
                Product
              </div>
            </div>
            <div className="space-y-4 p-6">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{item.badge}</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-500">Premium nutrition • responsive card layout</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-emerald-800">{item.price}</p>
                <button className="btn-primary !px-5 !py-3 text-sm">Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
