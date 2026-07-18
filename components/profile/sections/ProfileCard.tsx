export function ProfileCard() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[30px] bg-gradient-to-br from-emerald-950 to-emerald-700 p-8 text-white shadow-[0_24px_70px_rgba(6,95,70,0.2)]">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 text-3xl font-semibold">AK</div>
        <h2 className="mt-5 text-3xl font-semibold">Areeba Khan</h2>
        <p className="mt-2 text-sm text-emerald-100">Member since 2024 • Wellness enthusiast</p>
      </div>
      <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ['Email', 'areeba@example.com'],
            ['Phone', '+92 300 1234567'],
            ['Primary address', 'House 19, Phase 6, DHA, Lahore'],
            ['Preferred goal', 'Lean muscle & recovery'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[22px] bg-slate-50 p-5 md:last:col-span-2">
              <p className="text-sm text-slate-500">{title}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
