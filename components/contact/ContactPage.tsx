import { StoreShell } from '@/components/shared/StoreShell';
import { ContactHero } from './sections/ContactHero';
import { ContactFormSection } from './sections/ContactFormSection';
import PageShell from '../shared/PageShell';

export function ContactPage() {
  return (
    <PageShell>
      <StoreShell accent="from-emerald-950 via-emerald-800 to-amber-400">
        <ContactHero />
        <ContactFormSection />
      </StoreShell>
    </PageShell>
  );
}
