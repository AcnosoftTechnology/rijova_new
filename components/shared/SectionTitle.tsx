export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-slate-600 md:text-lg">{copy}</p>
      </div>
    </div>
  );
}
