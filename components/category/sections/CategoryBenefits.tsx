const benefits = [
  {
    title: 'Built for conversion',
    copy: 'Visible promo cards, benefits, and quick paths to grid/detail pages keep the shopping flow simple.',
  },
  {
    title: 'Global CSS friendly',
    copy: 'All new page-specific styling can stay inside globals.css with namespaced classes to avoid conflicts.',
  },
  {
    title: 'App router structure',
    copy: 'Page sections are componentized folder-wise so your app folder remains clean and scalable.',
  },
]

export default function CategoryBenefits() {
  return (
    <section className="category-page__benefits pb-5">
      <div className="store-container category-page__benefits-grid">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="category-page__benefit-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
