import StoreBreadcrumbs from '@/components/shared/StoreBreadcrumbs'

export default function ProductGridHero() {
  return (
    <section className="product-grid-page__hero">
      <div className="store-container">
        <StoreBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop' }
          ]}
        />

        <div className="product-grid-page__hero-wrap">
          <div>
            <span className="product-grid-page__eyebrow">
              Premium Fitness Store
            </span>

            <h1>
              Shop Premium Gym Supplements, Equipment & Fitness Essentials
            </h1>

            <p>
              Discover high-quality protein powders, pre-workouts, creatine,
              vitamins, gym accessories, and fitness equipment designed to
              support your strength, endurance, and overall wellness. Find
              everything you need to achieve your fitness goals in one place.
            </p>
          </div>

          <div className="product-grid-page__hero-stats">
            <div>
              <strong>500+</strong>
              <span>Premium Products</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Trusted Brands</span>
            </div>

            <div>
              <strong>Fast Delivery</strong>
              <span>Across India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}