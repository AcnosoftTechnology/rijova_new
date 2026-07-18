import Link from 'next/link'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export default function StoreBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="store-breadcrumbs">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={`${item.label}-${index}`} className="store-breadcrumbs__item">
            {item.href && !isLast ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {!isLast && <span className="store-breadcrumbs__divider">/</span>}
          </span>
        )
      })}
    </div>
  )
}
