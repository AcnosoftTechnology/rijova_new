import Link from 'next/link'
import { Heart, ShieldCheck, ShoppingCart, Truck } from 'lucide-react'
import StoreBreadcrumbs from '@/components/shared/StoreBreadcrumbs'
import { StoreProduct, formatPrice } from '@/components/store/store-data'

export default function ProductDetailHero({ product }: { product: StoreProduct }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <section className="product-detail-page__hero">
      <div className="store-container">
        <StoreBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Product Grid', href: '/product-grid' },
            { label: product.name },
          ]}
        />

        <div className="product-detail-page__hero-grid">
          <div className="product-detail-page__gallery">
            <div className="product-detail-page__gallery-main">
              <img src={product.gallery[0]} alt={product.name} />
            </div>
            <div className="product-detail-page__gallery-strip">
              {product.gallery.map((image) => (
                <div key={image} className="product-detail-page__thumb">
                  <img src={image} alt={product.name} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-detail-page__summary">
            <span className="product-detail-page__label">{product.category}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="product-detail-page__rating-row">
              <span>{product.rating} ★</span>
              <span>{product.reviews.toLocaleString('en-IN')} verified reviews</span>
              <span>{product.stockLabel}</span>
            </div>

            <div className="product-detail-page__price-row">
              <strong>{formatPrice(product.price)}</strong>
              <span>{formatPrice(product.mrp)}</span>
              <em>Save {discount}%</em>
            </div>

            <div className="product-detail-page__chips">
              {product.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="product-detail-page__cta-row">
              <button className="product-detail-page__solid-btn">
                <ShoppingCart size={16} /> Add to cart
              </button>
              <button className="product-detail-page__ghost-btn">
                <Heart size={16} /> Wishlist
              </button>
              <Link href="/checkout" className="product-detail-page__link-btn">
                Buy now
              </Link>
            </div>

            <div className="product-detail-page__assurance-grid">
              <div>
                <Truck size={18} />
                <span>Fast delivery</span>
              </div>
              <div>
                <ShieldCheck size={18} />
                <span>Authenticity assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
