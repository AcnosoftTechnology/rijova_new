import StoreProductCard from '@/components/shared/StoreProductCard'
import StoreSectionHeading from '@/components/shared/StoreSectionHeading'
import { storeProducts } from '@/components/store/store-data'

export default function CartUpsell() {
  return (
    <section className="cart-page__upsell">
      <div className="store-container">
        <StoreSectionHeading
          eyebrow="Complete the stack"
          title="Recommended add-ons before checkout"
          description="Cart page par niche recommendation section rakha gaya hai taake average order value naturally improve ho."
        />
        <div className="cart-page__upsell-grid">
          {storeProducts.slice(2, 5).map((product) => (
            <StoreProductCard key={product.slug} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
