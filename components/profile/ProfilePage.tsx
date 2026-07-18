import { DashboardShell } from '@/components/dashboard/sections/DashboardShell';
import { ProfileCard } from './sections/ProfileCard';
import PageShell from '../shared/PageShell';

export function ProfilePage() {
  return (
     <PageShell>
    <DashboardShell
      title="Profile"
      description="A customer profile page that keeps account details clean, readable, and brand-consistent across desktop and mobile."
    >
      <ProfileCard />
    </DashboardShell>
    </PageShell>
  );
}
