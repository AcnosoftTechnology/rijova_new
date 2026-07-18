import type { Order } from '@/lib/store-data';

export function OrderSummary({ order }: { order: Order }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <p className="text-sm text-slate-500">Order number</p>
            <h2 className="mt-1 text-3xl font-semibold text-slate-900">{order.id}</h2>
          </div>
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">{order.status}</span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ['Placed on', order.date],
            ['Estimated update', order.eta],
            ['Tracking ID', order.tracking],
            ['Payment', order.payment],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[22px] bg-slate-50 p-5">
              <p className="text-sm text-slate-500">{title}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {order.items.map((item) => (
            <div key={item.name} className="flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-slate-100 p-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.flavor} • Qty {item.qty}</p>
              </div>
              <p className="text-lg font-semibold text-emerald-800">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-5">
        <div className="rounded-[30px] bg-gradient-to-br from-emerald-950 to-emerald-700 p-8 text-white shadow-[0_24px_70px_rgba(6,95,70,0.2)]">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-100">Shipping address</p>
          <p className="mt-4 text-lg leading-8">{order.address}</p>
        </div>
        <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <p className="text-sm text-slate-500">Order total</p>
          <p className="mt-3 text-4xl font-semibold text-emerald-800">{order.total}</p>
          <button className="btn-primary mt-6">Download invoice</button>
        </div>
      </div>
    </div>
  );
}
