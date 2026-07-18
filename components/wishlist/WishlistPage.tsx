import { StoreShell } from '@/components/shared/StoreShell';
import { WishlistHero } from './sections/WishlistHero';
import { WishlistGrid } from './sections/WishlistGrid';
import PageShell from '../shared/PageShell';

export function WishlistPage() {
  return (
    <PageShell>
      <StoreShell accent="from-emerald-900 via-emerald-700 to-amber-400">
        <WishlistHero />
        <WishlistGrid />
      </StoreShell>
    </PageShell>
  );
}
