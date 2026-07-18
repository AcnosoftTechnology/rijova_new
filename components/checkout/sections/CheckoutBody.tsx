import StoreBreadcrumbs from '@/components/shared/StoreBreadcrumbs'
import { formatPrice, miniCart, storeProducts } from '@/components/store/store-data'

const orderItems = miniCart
  .map((item) => {
    const product = storeProducts.find((product) => product.slug === item.slug)
    if (!product) return null
    return { ...product, quantity: item.quantity }
  })
  .filter(Boolean)

const subtotal = orderItems.reduce((sum, item) => sum + item!.price * item!.quantity, 0)

export default function CheckoutBody() {
  return (
    <section className="checkout-page__body">
      <div className="store-container">
        <StoreBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />
        <div className="checkout-page__layout">
          <div className="checkout-page__form-card">
            <span className="checkout-page__eyebrow">Secure checkout</span>
            <h1>Delivery + payment form</h1>
            <div className="checkout-page__form-grid">
              <label><span>First name</span><input type="text" placeholder="Areeba" /></label>
              <label><span>Last name</span><input type="text" placeholder="Khan" /></label>
              <label className="checkout-page__field--full"><span>Email address</span><input type="email" placeholder="you@example.com" /></label>
              <label className="checkout-page__field--full"><span>Street address</span><input type="text" placeholder="House no, street, area" /></label>
              <label><span>City</span><input type="text" placeholder="Karachi" /></label>
              <label><span>Postal code</span><input type="text" placeholder="75000" /></label>
              <label className="checkout-page__field--full"><span>Notes</span><textarea placeholder="Delivery instructions..." rows={4} /></label>
            </div>

            <div className="checkout-page__payment-box">
              <h2>Payment method</h2>
              <div>
                <label className="checkout-page__radio"><input type="radio" name="payment" defaultChecked /> COD</label>
                <label className="checkout-page__radio"><input type="radio" name="payment" /> Debit / Credit Card</label>
                <label className="checkout-page__radio"><input type="radio" name="payment" /> UPI / Wallet</label>
              </div>
            </div>
          </div>

          <aside className="checkout-page__summary-card">
            <h2>Order summary</h2>
            <div className="checkout-page__order-list">
              {orderItems.map((item) => (
                <div key={item!.slug} className="checkout-page__order-item">
                  <img src={item!.image} alt={item!.name} />
                  <div>
                    <strong>{item!.name}</strong>
                    <span>Qty {item!.quantity}</span>
                  </div>
                  <b>{formatPrice(item!.price * item!.quantity)}</b>
                </div>
              ))}
            </div>
            <div className="checkout-page__summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="checkout-page__summary-row"><span>Shipping</span><strong>Free</strong></div>
            <div className="checkout-page__summary-total"><span>Payable now</span><strong>{formatPrice(subtotal)}</strong></div>
            <button className="checkout-page__place-btn">Place order</button>
          </aside>
        </div>
      </div>
    </section>
  )
}
