import { StoreShell } from '@/components/shared/StoreShell';
import { AboutHero } from './sections/AboutHero';
import { AboutStory } from './sections/AboutStory';
import { AboutValues } from './sections/AboutValues';
import PageShell from '../shared/PageShell';

export function AboutPage() {
  return (
     <PageShell>
    <StoreShell accent="from-emerald-950 via-emerald-900 to-amber-500">
      <div className="space-y-2">
        <AboutHero />
        <AboutStory />
        <AboutValues />
      </div>
    </StoreShell>
     </PageShell>
  );
}
