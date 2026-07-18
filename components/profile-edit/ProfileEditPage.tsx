import { DashboardShell } from '@/components/dashboard/sections/DashboardShell';
import { ProfileEditForm } from './sections/ProfileEditForm';
import PageShell from '../shared/PageShell';

export function ProfileEditPage() {
  return (

    <PageShell>
    <DashboardShell
      title="Edit profile"
      description="An editable account form with the same rounded cards, clean spacing, and emerald focus states used across the rest of the store."
    >
      <ProfileEditForm />
    </DashboardShell>
    </PageShell>
  );
}
