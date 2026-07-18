import PageShell from '@/components/shared/PageShell'
import CategoryHero from '@/components/category/sections/CategoryHero'
import CategoryOverview from '@/components/category/sections/CategoryOverview'
import CategoryBenefits from '@/components/category/sections/CategoryBenefits'

export default function CategoryPage() {
  return (
    <PageShell>
      <div className="category-page">
        <CategoryHero />
        <CategoryOverview />
        <CategoryBenefits />
      </div>
    </PageShell>
  )
}
