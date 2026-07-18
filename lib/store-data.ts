export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
  content: string[];
};

export type OrderItem = {
  name: string;
  qty: number;
  flavor: string;
  price: string;
};

export type Order = {
  id: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Shipped';
  total: string;
  eta: string;
  tracking: string;
  payment: string;
  address: string;
  items: OrderItem[];
};

export const stats = [
  { label: 'happy athletes', value: '50k+' },
  { label: 'science backed blends', value: '120+' },
  { label: 'countries shipped', value: '18' },
  { label: 'repeat customers', value: '82%' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-time-to-take-whey-protein',
    title: 'Best time to take whey protein for strength and recovery',
    excerpt: 'A practical breakdown of pre-workout, post-workout, and daily protein timing for faster recovery.',
    category: 'Nutrition',
    author: 'Rijova Team',
    date: '14 Jul 2026',
    readTime: '6 min read',
    image: '/images/blog/whey-timing.jpg',
    featured: true,
    tags: ['Protein', 'Recovery', 'Strength'],
    content: [
      'Protein timing matters most when it helps you stay consistent with your overall daily intake. For most people, the easiest and most effective timing window is right after training or between meals.',
      'If your workout is long or intense, a quick-digesting whey shake can support recovery by delivering amino acids rapidly. Pairing it with carbs may help replenish glycogen for athletes training frequently.',
      'Morning lifters often benefit from whey after the session, while evening lifters can use whey as part of dinner or a late recovery snack. The real goal is hitting your daily target with high-quality protein.'
    ]
  },
  {
    slug: 'mass-gainer-vs-whey-which-one-to-choose',
    title: 'Mass gainer vs whey: which one should you choose',
    excerpt: 'Use this simple guide to decide whether you need lean protein support or a calorie-dense muscle-building formula.',
    category: 'Buying Guide',
    author: 'Coach Mehak',
    date: '08 Jul 2026',
    readTime: '5 min read',
    image: '/images/blog/gainer-vs-whey.jpg',
    tags: ['Mass Gainer', 'Whey', 'Muscle Gain'],
    content: [
      'Whey protein is ideal when you want a cleaner macro profile with higher protein and fewer calories. It is usually the first choice for recovery and lean muscle support.',
      'Mass gainers are useful for hard gainers or athletes who struggle to eat enough calories through food alone. They combine carbs, protein, and sometimes extra fats for a more calorie-dense shake.',
      'Choose based on your eating pattern, body goals, and recovery needs instead of trends. The best supplement is the one that actually supports your full nutrition plan.'
    ]
  },
  {
    slug: 'creatine-water-retention-myth',
    title: 'Creatine water retention myth explained simply',
    excerpt: 'Understand what kind of water retention creatine can cause and why it is usually not a bad thing.',
    category: 'Education',
    author: 'Rijova Lab',
    date: '01 Jul 2026',
    readTime: '4 min read',
    image: '/images/blog/creatine-myth.jpg',
    tags: ['Creatine', 'Performance', 'FAQ'],
    content: [
      'Creatine can increase water inside muscle cells, which is different from the bloated look many people worry about. This intracellular water may even support training quality.',
      'Most users do not experience dramatic visible puffiness when using standard daily doses. The bigger variables are sodium intake, hydration, and overall diet.',
      'A steady 3 to 5 gram daily routine is often the simplest way to use creatine consistently.'
    ]
  },
];

export const orders: Order[] = [
  {
    id: 'RJV-10248',
    date: '11 Jul 2026',
    status: 'Shipped',
    total: '₹4,780',
    eta: 'Arriving by 19 Jul',
    tracking: 'TRK93847562',
    payment: 'UPI • Paid',
    address: 'House 19, Phase 6, DHA, Lahore',
    items: [
      { name: 'ISO Whey Protein', qty: 1, flavor: 'Chocolate', price: '₹3,299' },
      { name: 'Creatine Monohydrate', qty: 1, flavor: 'Unflavored', price: '₹1,481' },
    ]
  },
  {
    id: 'RJV-10211',
    date: '03 Jul 2026',
    status: 'Delivered',
    total: '₹2,199',
    eta: 'Delivered on 07 Jul',
    tracking: 'TRK82119540',
    payment: 'Card • Paid',
    address: 'House 19, Phase 6, DHA, Lahore',
    items: [
      { name: 'BCAA Recovery Matrix', qty: 1, flavor: 'Blueberry', price: '₹2,199' },
    ]
  },
  {
    id: 'RJV-10172',
    date: '21 Jun 2026',
    status: 'Processing',
    total: '₹6,250',
    eta: 'Dispatch in 24 hours',
    tracking: 'Generating after dispatch',
    payment: 'COD • Pending',
    address: 'House 19, Phase 6, DHA, Lahore',
    items: [
      { name: 'Mass Gainer Pro', qty: 1, flavor: 'Vanilla', price: '₹4,499' },
      { name: 'Shaker Bottle', qty: 1, flavor: 'Matte Black', price: '₹1,751' },
    ]
  },
];

export const wishlistItems = [
  {
    name: 'Hydro Whey Isolate',
    price: '₹3,999',
    badge: 'Best Seller',
    image: '/images/protein.png',
  },
  {
    name: 'Pre Workout Ignite',
    price: '₹1,899',
    badge: 'New Launch',
    image: '/images/protein.png',
  },
  {
    name: 'Daily Wellness Stack',
    price: '₹5,499',
    badge: 'Bundle Save 18%',
    image: '/images/protein.png',
  },
  {
    name: 'Plant Protein Blend',
    price: '₹2,799',
    badge: 'Vegan',
    image: '/images/protein.png',
  },
];
