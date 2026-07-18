import type { ReactNode } from 'react';
import { StoreShell } from '@/components/shared/StoreShell';
import { DashboardSidebar } from './DashboardSidebar';

export function DashboardShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <StoreShell accent="from-emerald-950 via-emerald-900 to-amber-400">
      <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
        <div className="space-y-6">
          <div className="rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-10">
            <h1 className="text-4xl font-semibold text-slate-900">{title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
          </div>
          {children}
        </div>
      </section>
    </StoreShell>
  );
}
