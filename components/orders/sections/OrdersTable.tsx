import Link from 'next/link';
import { orders } from '@/lib/store-data';

export function OrdersTable() {
  return (
    <div className="rounded-[30px] border border-slate-200/70 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="px-4 py-2 font-medium">Order</th>
              <th className="px-4 py-2 font-medium">Date</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Total</th>
              <th className="px-4 py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="rounded-[22px] bg-slate-50 text-sm text-slate-700">
                <td className="rounded-l-[20px] px-4 py-4 font-semibold text-slate-900">{order.id}</td>
                <td className="px-4 py-4">{order.date}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{order.status}</span>
                </td>
                <td className="px-4 py-4 font-semibold text-emerald-800">{order.total}</td>
                <td className="rounded-r-[20px] px-4 py-4">
                  <Link href={`/dashboard/orders/${order.id}`} className="btn-outline !px-4 !py-2 text-xs">View detail</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
