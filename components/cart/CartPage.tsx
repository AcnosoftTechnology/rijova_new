import PageShell from '@/components/shared/PageShell'
import CartBody from '@/components/cart/sections/CartBody'
import CartUpsell from '@/components/cart/sections/CartUpsell'

export default function CartPage() {
  return (
    <PageShell>
      <div className="cart-page">
        <CartBody />
        <CartUpsell />
      </div>
    </PageShell>
  )
}
