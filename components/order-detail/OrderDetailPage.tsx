import { DashboardShell } from '@/components/dashboard/sections/DashboardShell';
import type { Order } from '@/lib/store-data';
import { OrderSummary } from './sections/OrderSummary';
import PageShell from '../shared/PageShell';

export function OrderDetailPage({ order }: { order: Order }) {
  return (
    <PageShell>
      <DashboardShell
        title="Order detail"
        description="A detailed order page with status, line items, shipping information, and a strong post-purchase trust experience."
      >
        <OrderSummary order={order} />
      </DashboardShell>
    </PageShell>
  );
}
