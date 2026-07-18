const cards = [
  ['Active orders', '03'],
  ['Wishlist items', '12'],
  ['Reward points', '4,850'],
  ['Saved addresses', '02'],
];

export function DashboardOverview() {
  return (
    <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
      {cards.map(([title, value]) => (
        <div key={title} className="card-hover rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-emerald-800">{value}</p>
        </div>
      ))}
    </div>
  );
}
