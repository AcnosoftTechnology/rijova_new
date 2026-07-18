import PageShell from '@/components/shared/PageShell'
import ProductGridHero from '@/components/product-grid/sections/ProductGridHero'
import ProductGridCatalog from '@/components/product-grid/sections/ProductGridCatalog'

export default function ProductGridPage() {
  return (
    <PageShell>
      <div className="product-grid-page">
        <ProductGridHero />
        <ProductGridCatalog />
      </div>
    </PageShell>
  )
}
