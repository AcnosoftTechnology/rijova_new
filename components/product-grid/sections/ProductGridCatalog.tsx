import StoreProductCard from '@/components/shared/StoreProductCard'
import { storeProducts } from '@/components/store/store-data'

const filters = [
  { title: 'Category', values: ['Whey Protein', 'Creatine', 'Performance', 'Wellness'] },
  { title: 'Goal', values: ['Lean muscle', 'Strength', 'Endurance', 'Daily wellness'] },
  { title: 'Price', values: ['Under ₹999', '₹1000-₹1999', '₹2000-₹3499'] },
]

export default function ProductGridCatalog() {
  return (
    <section className="product-grid-page__catalog">
      <div className="store-container product-grid-page__layout">
        <aside className="product-grid-page__sidebar">
          <div className="product-grid-page__promo-card">
            <span>Weekend offer</span>
            <h3>Extra 15% off on performance stack</h3>
            <p>Use code GRID15 during checkout to keep the offer strip visible on all screen sizes.</p>
          </div>

          {filters.map((filter) => (
            <div key={filter.title} className="product-grid-page__filter-group">
              <h4>{filter.title}</h4>
              <div>
                {filter.values.map((value) => (
                  <label key={value} className="product-grid-page__filter-item">
                    <input type="checkbox" />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className="product-grid-page__content">
          <div className="product-grid-page__toolbar">
            <p>Showing {storeProducts.length} results</p>
            <div className="product-grid-page__toolbar-actions">
              <button>Most popular</button>
              <button>Newest</button>
              <button>Price low to high</button>
            </div>
          </div>

          <div className="product-grid-page__cards">
            {storeProducts.map((product) => (
              <StoreProductCard key={product.slug} product={product} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
