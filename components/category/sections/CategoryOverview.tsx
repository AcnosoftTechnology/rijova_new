import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { storeCategories } from '@/components/store/store-data'
import StoreSectionHeading from '@/components/shared/StoreSectionHeading'

export default function CategoryOverview() {
  return (
    <section className="category-page__section">
      <div className="store-container">
        <StoreSectionHeading
          eyebrow="Collections"
          title="Category cards with unique sections"
          description="Each card carries its own hook, focus list, and CTA so the layout feels designed — not copied blindly."
        />

        <div className="category-page__grid">
          {storeCategories.map((category) => (
            <article key={category.slug} className="category-page__card">
              <div className="category-page__card-media">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="category-page__card-copy">
                <span className="category-page__card-badge">{category.badge}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                {/* <ul>
                  {category.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul> */}
                <div className="category-page__card-footer">
                  <strong>{category.accent}</strong>
                  <Link href="/product-grid">
                    Shop now <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
