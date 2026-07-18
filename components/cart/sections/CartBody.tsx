import Link from 'next/link'
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react'
import StoreBreadcrumbs from '@/components/shared/StoreBreadcrumbs'
import { formatPrice, miniCart, storeProducts } from '@/components/store/store-data'

const cartProducts = miniCart
  .map((item) => {
    const product = storeProducts.find((product) => product.slug === item.slug)
    if (!product) return null
    return { ...product, quantity: item.quantity }
  })
  .filter(Boolean)

const subtotal = cartProducts.reduce((sum, item) => sum + item!.price * item!.quantity, 0)

export default function CartBody() {
  return (
    <section className="cart-page__body">
      <div className="store-container">
        <StoreBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />

        <div className="cart-page__layout">
          <div className="cart-page__items">
            <div className="cart-page__header">
              <div>
                <span className="cart-page__eyebrow">Your cart</span>
                <h1>Ready for checkout</h1>
              </div>
              <p>{cartProducts.length} products added</p>
            </div>

            {cartProducts.map((item) => (
              <article key={item!.slug} className="cart-page__item-card">
                <img src={item!.image} alt={item!.name} />
                <div className="cart-page__item-copy">
                  <span>{item!.category}</span>
                  <h3>{item!.name}</h3>
                  <p>{item!.shortDescription}</p>
                  <strong>{formatPrice(item!.price)}</strong>
                </div>
                <div className="cart-page__item-actions">
                  <div className="cart-page__qty-box">
                    <button><Minus size={14} /></button>
                    <span>{item!.quantity}</span>
                    <button><Plus size={14} /></button>
                  </div>
                  <button className="cart-page__remove-btn"><Trash2 size={15} /> Remove</button>
                </div>
              </article>
            ))}
          </div>


             
              
            
          <aside className="cart-page__summary">
            <h2>Order summary</h2>
            <div className="cart-page__summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="cart-page__summary-row"><span>Shipping</span><strong>Free</strong></div>
            <div className="cart-page__summary-row"><span>Coupon</span><strong>-{formatPrice(200)}</strong></div>
            <div className="cart-page__summary-total"><span>Total</span><strong>{formatPrice(subtotal - 200)}</strong></div>
            <Link href="/checkout" className="cart-page__checkout-btn">Go to checkout <ArrowRight size={16} /></Link>
            <Link href="/product-grid" className="cart-page__continue-link">Continue shopping</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
