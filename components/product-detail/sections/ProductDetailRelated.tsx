import StoreProductCard from '@/components/shared/StoreProductCard'
import StoreSectionHeading from '@/components/shared/StoreSectionHeading'
import { StoreProduct, getRelatedProducts } from '@/components/store/store-data'

export default function ProductDetailRelated({ product }: { product: StoreProduct }) {
  const related = getRelatedProducts(product.categorySlug, product.slug)

  if (!related.length) return null

  return (
    <section className="product-detail-page__related">
      <div className="store-container">
        <StoreSectionHeading
          eyebrow="You may also like"
          title="Related products in the same collection"
          description="Cross-sell section bhi same page family ke according styled hai taake poora flow consistent lage."
        />

        <div className="product-detail-page__related-grid">
          {related.map((item) => (
            <StoreProductCard key={item.slug} product={item} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
