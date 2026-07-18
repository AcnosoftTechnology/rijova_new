const fields = ['Full name', 'Email address', 'Phone number', 'Primary fitness goal'];

export function ProfileEditForm() {
  return (
    <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((label) => (
          <label key={label} className="space-y-2 text-sm font-medium text-slate-700">
            <span>{label}</span>
            <input className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-emerald-600" defaultValue={label === 'Full name' ? 'Areeba Khan' : ''} placeholder={label} />
          </label>
        ))}
        <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
          <span>Address</span>
          <textarea rows={5} className="w-full rounded-3xl border border-slate-200 px-4 py-4 outline-none transition focus:border-emerald-600" defaultValue="House 19, Phase 6, DHA, Lahore" />
        </label>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <button className="btn-primary">Save changes</button>
        <button className="btn-outline">Cancel</button>
      </div>
    </div>
  );
}
