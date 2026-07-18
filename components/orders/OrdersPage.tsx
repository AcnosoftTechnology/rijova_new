import { DashboardShell } from '@/components/dashboard/sections/DashboardShell';
import { OrdersTable } from './sections/OrdersTable';
import PageShell from '../shared/PageShell';

export function OrdersPage() {
  return (
    <PageShell>
      <DashboardShell
        title="Your orders"
        description="Users can review recent purchases, delivery status, totals, and jump into a single order detail page from here."
      >
        <OrdersTable />
      </DashboardShell>
    </PageShell>
  );
}
