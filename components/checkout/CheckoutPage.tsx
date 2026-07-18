import PageShell from '@/components/shared/PageShell'
import CheckoutBody from '@/components/checkout/sections/CheckoutBody'

export default function CheckoutPage() {
  return (
    <PageShell>
      <div className="checkout-page">
        <CheckoutBody />
      </div>
    </PageShell>
  )
}
