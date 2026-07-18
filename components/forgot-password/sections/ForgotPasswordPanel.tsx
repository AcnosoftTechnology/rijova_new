export function ForgotPasswordPanel() {
  return (
    <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-8 text-white shadow-[0_24px_70px_rgba(6,95,70,0.22)] md:p-10">
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">Account recovery</span>
        <h1 className="mt-5 text-4xl font-semibold md:text-5xl">Forgot your password?</h1>
        <p className="mt-4 text-sm leading-8 text-emerald-100 md:text-base">This page follows the auth layout feel from your current project while keeping stronger premium visuals consistent with the homepage.</p>
      </div>
      <div className="rounded-[32px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-10">
        <h2 className="text-2xl font-semibold text-slate-900">Reset link</h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">Enter your email address and we will send you a secure password reset link.</p>
        <label className="mt-6 block space-y-2 text-sm font-medium text-slate-700">
          <span>Email address</span>
          <input className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-emerald-600" placeholder="you@example.com" />
        </label>
        <button className="btn-primary mt-6 w-full justify-center">Send reset link</button>
      </div>
    </section>
  );
}
