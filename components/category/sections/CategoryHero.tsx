import Link from 'next/link'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import StoreBreadcrumbs from '@/components/shared/StoreBreadcrumbs'

export default function CategoryHero() {
  return (
    <section className="category-page__hero">
      <div className="store-container">
        <StoreBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Category' }]} />

        <div className="category-page__hero-gridd">
          <div className="category-page__hero-copy">
            <span className="category-page__eyebrow">Shop by category</span>
            <h1>Explore every supplement collection with the same Rijova home-page vibe.</h1>
            <p>
              Clean navigation, highlighted stacks, category cards, and responsive layout so users can move from browsing to buying without friction.
            </p>

            <div className="category-page__hero-actions">
              <Link href="/product-grid" className="category-page__primary-btn">
                Browse product grid <ArrowRight size={16} />
              </Link>
              <Link href="/cart" className="category-page__secondary-btn">
                Open cart
              </Link>
            </div>

            <div className="category-page__hero-points">
              {['Responsive category cards', 'Quick CTA paths', 'Shared header & footer'].map((point) => (
                <div key={point}>
                  <BadgeCheck size={16} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
