import { Package, Search, CheckCircle2, Truck, MapPin } from 'lucide-react';

const steps = [
  { title: 'Order Placed', done: true },
  { title: 'Packed', done: true },
  { title: 'Shipped', done: true },
  { title: 'Out for Delivery', done: false },
];

export function TrackOrderLookup() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 p-8 text-white shadow-[0_24px_60px_rgba(16,185,129,0.22)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <Package size={28} />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-100">Quick Tracking</p>
                  <h2 className="text-3xl font-bold">Track your order</h2>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-6 text-emerald-50/90">
                Apna Order ID aur email ya phone number daalo, aur order ka current
                progress instantly dekh lo.
              </p>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-3 lg:max-w-2xl">
              <input
                placeholder="Order ID"
                className="h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400"
              />
              <input
                placeholder="Email / Phone"
                className="h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 font-semibold text-white transition hover:bg-slate-800">
                <Search size={18} />
                Track Order
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Current Status</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                Your order is on the way
              </h3>
              <p className="mt-2 text-sm text-slate-500">Order ID: #RJB1002458</p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 sm:self-auto">
              <Truck size={16} />
              Expected in 1-2 days
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      step.done ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {step.done ? <CheckCircle2 size={20} /> : index + 1}
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-900">{step.title}</p>

                {index !== steps.length - 1 && (
                  <div className="absolute left-[calc(100%-12px)] top-10 hidden h-1 w-6 rounded-full bg-slate-200 md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-700">Latest Update</p>
                <h4 className="mt-1 text-lg font-semibold text-slate-900">
                  Package reached your nearest delivery hub
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Ab bas final delivery process chal raha hai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
