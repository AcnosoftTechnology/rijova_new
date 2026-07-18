type Props = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export default function StoreSectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={`store-section-heading store-section-heading--${align}`}>
      <span className="store-section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
