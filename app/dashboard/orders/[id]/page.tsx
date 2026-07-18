import { notFound } from 'next/navigation';
import { OrderDetailPage } from '@/components/order-detail/OrderDetailPage';
import { orders } from '@/lib/store-data';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = orders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  return <OrderDetailPage order={order} />;
}
