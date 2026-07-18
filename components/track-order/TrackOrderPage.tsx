import { StoreShell } from '@/components/shared/StoreShell';
import { TrackOrderHero } from './sections/TrackOrderHero';
import { TrackOrderLookup } from './sections/TrackOrderLookup';
import PageShell from '../shared/PageShell';

export function TrackOrderPage() {
  return (
    <PageShell>
      <StoreShell accent="from-emerald-950 via-emerald-900 to-sky-500">
        <TrackOrderHero />
        <TrackOrderLookup />
      </StoreShell>
    </PageShell>
  );
}
