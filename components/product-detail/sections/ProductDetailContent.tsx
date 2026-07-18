import { StoreProduct } from '@/components/store/store-data'

export default function ProductDetailContent({ product }: { product: StoreProduct }) {
  return (
    <section className="product-detail-page__content">
      <div className="store-container product-detail-page__content-grid">
        <article className="product-detail-page__info-card">
          <h2>Why shoppers will like this page</h2>
          <p>
            Product detail layout ko clean information hierarchy ke saath banaya gaya hai: image gallery, pricing, tags, benefit bullets, aur quick checkout flow sab ek hi jagah visible hai.
          </p>
          <ul>
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </article>

        <article className="product-detail-page__info-card">
          <h2>Nutrition facts</h2>
          <div className="product-detail-page__nutrition-grid">
            {product.nutritionFacts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="product-detail-page__info-card product-detail-page__info-card--wide">
          <h2>Suggested usage</h2>
          <div className="product-detail-page__usage-grid">
            <div>
              <span>Step 01</span>
              <p>One scoop with cold water or milk according to your training routine.</p>
            </div>
            <div>
              <span>Step 02</span>
              <p>Use pre or post workout depending on the formula type and your goal.</p>
            </div>
            <div>
              <span>Step 03</span>
              <p>Pair with a balanced diet, hydration, and consistent training for better results.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
