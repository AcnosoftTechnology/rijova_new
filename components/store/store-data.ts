export type StoreCategory = {
  title: string
  slug: string
  description: string
  accent: string
  badge: string
  image: string
  focus: string[]
}

export type StoreProduct = {
  id: number
  slug: string
  name: string
  category: string
  categorySlug: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  price: number
  mrp: number
  rating: number
  reviews: number
  stockLabel: string
  packSize: string
  tags: string[]
  benefits: string[]
  nutritionFacts: { label: string; value: string }[]
}

export const storeCategories: StoreCategory[] = [
  {
    title: 'Whey Protein',
    slug: 'whey-protein',
    description: 'Fast-absorbing protein blends for muscle recovery, lean mass support, and clean daily macros.',
    accent: '28g protein',
    badge: 'Top Seller',
    image: '/images/protein.png',
    focus: ['Muscle recovery', 'Lean gains', 'Daily protein goals'],
  },
  {
    title: 'Creatine',
    slug: 'creatine',
    description: 'Micronized creatine options built for strength, power output, and better gym performance.',
    accent: '5g per scoop',
    badge: 'Strength Boost',
    image: '/images/mug.png',
    focus: ['Explosive lifts', 'Power', 'Performance support'],
  },
  {
    title: 'Wellness',
    slug: 'wellness',
    description: 'Daily wellness stack with multivitamins, immunity support, and lifestyle supplements.',
    accent: 'Daily essentials',
    badge: 'Everyday Care',
    image: '/images/certificate.jpg',
    focus: ['Immunity', 'Energy balance', 'Daily support'],
  },
  {
    title: 'Performance',
    slug: 'performance',
    description: 'Pre-workout, amino acids, and advanced formulas for focus, pumps, and endurance.',
    accent: 'Workout ready',
    badge: 'Gym Fuel',
    image: '/images/d.jpg',
    focus: ['Focus', 'Pumps', 'Workout intensity'],
  },
]

export const storeProducts: StoreProduct[] = [
  {
    id: 1,
    slug: 'gold-whey-protein-isolate',
    name: 'Gold Whey Protein Isolate',
    category: 'Whey Protein',
    categorySlug: 'whey-protein',
    shortDescription: 'Premium isolate blend for recovery and lean muscle support.',
    description: 'Gold Whey Protein Isolate delivers fast-digesting protein with a clean ingredient profile for post-workout recovery, lean muscle support, and everyday performance nutrition.',
    image: '/images/protein.png',
    gallery: ['/images/protein.png', '/images/e.jpg', '/images/f.jpg'],
    price: 3299,
    mrp: 4499,
    rating: 4.9,
    reviews: 3842,
    stockLabel: 'In stock · Ships in 24 hrs',
    packSize: '2 lb',
    tags: ['Best Seller', 'High Protein', 'Fast Recovery'],
    benefits: ['28g protein per serving', 'Supports muscle repair', 'Low sugar formula', 'Easy mixing texture'],
    nutritionFacts: [
      { label: 'Protein', value: '28g' },
      { label: 'BCAA', value: '6.2g' },
      { label: 'Calories', value: '132 kcal' },
      { label: 'Serving', value: '33g scoop' },
    ],
  },
  {
    id: 2,
    slug: 'creatine-monohydrate-300g',
    name: 'Creatine Monohydrate 300g',
    category: 'Creatine',
    categorySlug: 'creatine',
    shortDescription: 'Micronized creatine for strength, output, and recovery.',
    description: 'A micronized creatine formula designed to improve power output, explosive performance, and muscular endurance with daily use.',
    image: '/images/mug.png',
    gallery: ['/images/mug.png', '/images/d.jpg', '/images/e.jpg'],
    price: 899,
    mrp: 1299,
    rating: 4.8,
    reviews: 2156,
    stockLabel: 'In stock · Fast delivery available',
    packSize: '300g',
    tags: ['Strength', 'Micronized', 'Gym Essential'],
    benefits: ['5g creatine per scoop', 'Supports explosive lifts', 'Improves training output', 'Unflavoured daily stack'],
    nutritionFacts: [
      { label: 'Creatine', value: '5g' },
      { label: 'Sugar', value: '0g' },
      { label: 'Servings', value: '60' },
      { label: 'Blend', value: 'Micronized' },
    ],
  },
  {
    id: 3,
    slug: 'bcaa-pro-complex-450g',
    name: 'BCAA Pro Complex 450g',
    category: 'Performance',
    categorySlug: 'performance',
    shortDescription: 'Hydration and recovery support for hard training days.',
    description: 'BCAA Pro Complex helps support hydration, muscle recovery, and performance endurance during extended training sessions.',
    image: '/images/protein.png',
    gallery: ['/images/a.webp', '/images/b.webp', '/images/c.webp'],
    price: 1499,
    mrp: 1999,
    rating: 4.7,
    reviews: 1893,
    stockLabel: 'Only 12 left in stock',
    packSize: '450g',
    tags: ['Recovery', 'Hydration', 'Intra Workout'],
    benefits: ['Recovery amino matrix', 'Hydration support', 'Refreshing flavors', 'Intra-workout performance'],
    nutritionFacts: [
      { label: 'BCAA', value: '7g' },
      { label: 'Electrolytes', value: '420mg' },
      { label: 'Calories', value: '28 kcal' },
      { label: 'Servings', value: '30' },
    ],
  },
  {
    id: 4,
    slug: 'pre-workout-extreme-300g',
    name: 'Pre-Workout Extreme 300g',
    category: 'Performance',
    categorySlug: 'performance',
    shortDescription: 'Focus, pumps, and high-energy sessions in one scoop.',
    description: 'Pre-Workout Extreme combines caffeine, pump-support ingredients, and focus boosters for powerful sessions and consistent drive.',
    image: '/images/protein.png',
    gallery: ['/images/b.webp', '/images/d.jpg', '/images/f.jpg'],
    price: 1899,
    mrp: 2599,
    rating: 4.8,
    reviews: 1247,
    stockLabel: 'In stock · Same day dispatch',
    packSize: '300g',
    tags: ['Pre Workout', 'Energy', 'Focus'],
    benefits: ['High stim support', 'Pump formula', 'Sharper focus', 'Great pre-lift ritual'],
    nutritionFacts: [
      { label: 'Caffeine', value: '200mg' },
      { label: 'Beta Alanine', value: '3.2g' },
      { label: 'Citrulline', value: '4g' },
      { label: 'Servings', value: '25' },
    ],
  },
  {
    id: 5,
    slug: 'omega-3-fish-oil-1000mg',
    name: 'Omega-3 Fish Oil 1000mg',
    category: 'Wellness',
    categorySlug: 'wellness',
    shortDescription: 'Daily wellness softgels for heart and joint support.',
    description: 'Omega-3 Fish Oil delivers a convenient daily wellness routine with heart, brain, and joint support in easy softgel form.',
    image: '/images/protein.png',
    gallery: ['/images/c.webp', '/images/certificate.jpg', '/images/e.jpg'],
    price: 699,
    mrp: 999,
    rating: 4.6,
    reviews: 987,
    stockLabel: 'In stock · Best value pack',
    packSize: '60 softgels',
    tags: ['Wellness', 'Omega 3', 'Daily Support'],
    benefits: ['EPA DHA support', 'Daily wellness stack', 'Easy softgel format', 'Great for routine nutrition'],
    nutritionFacts: [
      { label: 'Fish Oil', value: '1000mg' },
      { label: 'EPA + DHA', value: '300mg' },
      { label: 'Softgels', value: '60' },
      { label: 'Serving', value: '1 softgel' },
    ],
  },
  {
    id: 6,
    slug: 'multivitamin-elite-60-tabs',
    name: 'Multivitamin Elite 60 Tabs',
    category: 'Wellness',
    categorySlug: 'wellness',
    shortDescription: 'Everyday micronutrient support for busy routines.',
    description: 'Multivitamin Elite is designed to help cover everyday nutritional gaps with an easy-to-follow, once-daily wellness formula.',
    image: '/images/protein.png',
    gallery: ['/images/certificate.jpg', '/images/a.webp', '/images/b.webp'],
    price: 799,
    mrp: 1199,
    rating: 4.7,
    reviews: 2341,
    stockLabel: 'In stock · Subscribe & save available',
    packSize: '60 tablets',
    tags: ['Multivitamin', 'Daily Care', 'Immunity'],
    benefits: ['Daily micronutrients', 'Supports active lifestyle', 'Easy daily dosage', 'Balanced formula'],
    nutritionFacts: [
      { label: 'Vitamins', value: '24+' },
      { label: 'Minerals', value: '9' },
      { label: 'Tablets', value: '60' },
      { label: 'Usage', value: '1 daily' },
    ],
  },
]

export const miniCart = [
  { slug: 'gold-whey-protein-isolate', quantity: 1 },
  { slug: 'creatine-monohydrate-300g', quantity: 2 },
]

export const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`

export function getProductBySlug(slug: string) {
  return storeProducts.find((product) => product.slug === slug)
}

export function getRelatedProducts(categorySlug: string, currentSlug: string) {
  return storeProducts.filter((product) => product.categorySlug === categorySlug && product.slug !== currentSlug).slice(0, 3)
}
