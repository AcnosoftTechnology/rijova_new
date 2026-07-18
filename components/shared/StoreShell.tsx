import type { ReactNode } from 'react';

export function StoreShell({ children, accent = 'from-emerald-950 via-emerald-900 to-emerald-700' }: { children: ReactNode; accent?: string }) {
  return (
    <div className="bg-[#fafafa] text-slate-900">
      <div className={`absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-br ${accent} opacity-[0.06] blur-3xl`} />
      <div className="store-container mx-auto w-[min(100%-32px,1200px)] py-10 md:py-14">{children}</div>
    </div>
  );
}
