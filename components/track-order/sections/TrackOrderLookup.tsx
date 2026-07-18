const steps = ['Order placed', 'Packed', 'In transit', 'Out for delivery'];

export function TrackOrderLookup() {
  return (
    <section className="section-pad grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <h2 className="text-2xl font-semibold text-slate-900">Find your order</h2>
        <div className="mt-6 space-y-4">
          {['Order ID', 'Email address or phone'].map((label) => (
            <label key={label} className="block space-y-2 text-sm font-medium text-slate-700">
              <span>{label}</span>
              <input className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-emerald-600" placeholder={label} />
            </label>
          ))}
        </div>
        <button className="btn-primary mt-6">Track now</button>
      </div>
      <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <p className="text-sm text-slate-500">Latest update</p>
            <h3 className="text-2xl font-semibold text-slate-900">Package reached local hub</h3>
          </div>
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">ETA 1-2 days</span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="relative rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold text-white">{index + 1}</div>
              <p className="text-sm font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
