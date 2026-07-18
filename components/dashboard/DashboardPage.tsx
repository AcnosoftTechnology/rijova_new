import { DashboardShell } from './sections/DashboardShell';
import { DashboardOverview } from './sections/DashboardOverview';
import PageShell from '../shared/PageShell';

export function DashboardPage() {
  return (

    <PageShell>
    <DashboardShell
      title="Dashboard overview"
      description="A premium account dashboard that follows the homepage styling while giving users fast access to orders, profile, and saved products."
    >
      <DashboardOverview />
    </DashboardShell>
    </PageShell>
  );
}
