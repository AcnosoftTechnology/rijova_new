import { StoreShell } from '@/components/shared/StoreShell';
import { BlogHero } from './sections/BlogHero';
import { BlogGrid } from './sections/BlogGrid';
import PageShell from '../shared/PageShell';

export function BlogPage() {
  return (
     <PageShell>

        <StoreShell accent="from-emerald-950 via-emerald-900 to-violet-500">
      <BlogHero />
      <BlogGrid />
    </StoreShell>
     </PageShell>
  
  );
}
