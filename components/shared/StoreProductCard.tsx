import Link from 'next/link'
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react'
import { StoreProduct, formatPrice } from '@/components/store/store-data'

export default function StoreProductCard({ product, compact = false }: { product: StoreProduct; compact?: boolean }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <article className={`store-product-card ${compact ? 'store-product-card--compact' : ''}`}>
      <div className="store-product-card__media">
        <span className="store-product-card__badge">-{discount}%</span>
        <button className="store-product-card__wish" aria-label={`Save ${product.name}`}>
          <Heart size={16} />
        </button>
        <img src={product.image} alt={product.name} className="store-product-card__image" />
      </div>

      <div className="store-product-card__content">
        <span className="store-product-card__category">{product.category}</span>
       <h3 className="store-product-card__title">
  <Link href={`/product/${product.slug}`}>
    {product.name}
  </Link>
</h3>

        {/* <p className="store-product-card__copy">{product.shortDescription}</p> */}

        {/* <div className="store-product-card__meta">
          <span className="store-product-card__rating">
            <Star size={14} fill="currentColor" /> {product.rating}
          </span>
          <span>{product.reviews.toLocaleString('en-IN')} reviews</span>
          <span>{product.packSize}</span>
        </div> */}

        <div className="store-product-card__price-row">
          <div>
            <strong>{formatPrice(product.price)}</strong>
            <span>{formatPrice(product.mrp)}</span>
          </div>
          {/* <span className="store-product-card__stock">{product.stockLabel}</span> */}
        </div>

        <div className="store-product-card__actions">
          <button className="store-product-card__button store-product-card__button--ghost">
            <ShoppingCart size={15} /> Add to cart
          </button>
          <Link href={`/product/${product.slug}`} className="store-product-card__button store-product-card__button--solid">
            View details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  )
}
