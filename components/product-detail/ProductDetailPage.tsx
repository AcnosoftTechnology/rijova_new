import { notFound } from 'next/navigation'
import PageShell from '@/components/shared/PageShell'
import ProductDetailHero from '@/components/product-detail/sections/ProductDetailHero'
import ProductDetailContent from '@/components/product-detail/sections/ProductDetailContent'
import ProductDetailRelated from '@/components/product-detail/sections/ProductDetailRelated'
import { getProductBySlug } from '@/components/store/store-data'

export default function ProductDetailPage({ slug }: { slug: string }) {
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <PageShell>
      <div className="product-detail-page">
        <ProductDetailHero product={product} />
        <ProductDetailContent product={product} />
        <ProductDetailRelated product={product} />
      </div>
    </PageShell>
  )
}
