export function ContactFormSection() {
  const fields = ['Full name', 'Email address', 'Phone number', 'Subject'];
  return (
    <section className="section-pad grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-900">Send us a message</h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">Fully responsive two-column form that stacks beautifully on mobile, following your existing checkout/auth page patterns.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((label) => (
            <label key={label} className="space-y-2 text-sm font-medium text-slate-700">
              <span>{label}</span>
              <input className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-emerald-600" placeholder={label} />
            </label>
          ))}
          <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
            <span>Message</span>
            <textarea rows={6} className="w-full rounded-3xl border border-slate-200 px-4 py-4 outline-none transition focus:border-emerald-600" placeholder="Tell us how we can help" />
          </label>
        </div>
        <button className="btn-primary mt-6">Send message</button>
      </div>
      <div className="grid gap-4">
        {[
          ['Support desk', 'Fast product and order support with friendly guidance.'],
          ['Brand office', 'A polished info card block for address, timing, and map embeds.'],
          ['WhatsApp CTA', 'Optional live support banner with brand-consistent green gradient.'],
        ].map(([title, copy]) => (
          <article key={title} className="card-hover rounded-[28px] border border-slate-200/70 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
