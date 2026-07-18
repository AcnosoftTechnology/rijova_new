import { StoreShell } from '@/components/shared/StoreShell';
import { ForgotPasswordPanel } from './sections/ForgotPasswordPanel';
import PageShell from '../shared/PageShell';

export function ForgotPasswordPage() {
  return (
    <PageShell>
      <StoreShell accent="from-emerald-950 via-emerald-800 to-amber-400">
        <ForgotPasswordPanel />
      </StoreShell>
    </PageShell>
  );
}
