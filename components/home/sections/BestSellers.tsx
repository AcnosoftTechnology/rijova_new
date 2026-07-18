'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react'
import { Star, Heart, ShoppingCart, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    rank: 1,
    name: 'Rijova Gold Whey Protein — Chocolate Fudge',
    weight: '2kg',
    servings: '60 servings',
    price: 3299,
    mrp: 4499,
    rating: 4.9,
    reviews: 5642,
    sold: '12K+ sold',
    img: 'https://img2.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/45312/prd_4531131_o.jpg',
    tags: ['Isolate', 'High Protein', 'Low Carb'],
  },
  {
    id: 2,
    rank: 2,
    name: 'Creatine Monohydrate Pure — Unflavored',
    weight: '300g',
    servings: '60 servings',
    price: 899,
    mrp: 1299,
    rating: 4.8,
    reviews: 3218,
    sold: '8K+ sold',
    img: 'https://img4.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/15127/prd_1512653-MuscleBlaze-Biozyme-Performance-Whey-OP-2.2-lb-Rich-Chocolate_o.jpg',
    tags: ['Strength', 'Power', 'Recovery'],
  },
  {
    id: 3,
    rank: 3,
    name: 'BCAA 2:1:1 Watermelon Burst',
    weight: '450g',
    servings: '30 servings',
    price: 1499,
    mrp: 1999,
    rating: 4.7,
    reviews: 2134,
    sold: '6K+ sold',
    img: 'https://img4.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/32511/prd_3251083-MuscleBlaze-Biozyme-Performance-Whey-PR-OP-2.2-lb-Chocolate-Fudge_o.jpg',
    tags: ['BCAA', 'Intra-workout', 'Hydration'],
  },
  {
    id: 4,
    rank: 4,
    name: 'Pre-Workout Extreme Citrus Blast',
    weight: '300g',
    servings: '30 servings',
    price: 1899,
    mrp: 2599,
    rating: 4.8,
    reviews: 1876,
    sold: '5K+ sold',
    img: 'https://img6.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/41560/prd_4155985-TrueBasics-Clean-Plant-Protein-OP-2.2-lb-Chocolate_o.jpg',
    tags: ['Energy', 'Pump', 'Focus'],
  },
  {
    id: 5,
    rank: 5,
    name: 'Daily Multivitamin Elite — 60 Tabs',
    weight: '60 tablets',
    servings: '60 servings',
    price: 799,
    mrp: 1199,
    rating: 4.6,
    reviews: 4231,
    sold: '15K+ sold',
    img: 'https://img2.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/38890/prd_3888921-MuscleBlaze-Biozyme-Gold-100-Whey-OP-4.4-lb-Double-Rich-Chocolate_o.jpg',
    tags: ['Daily Health', 'Immunity', 'Energy'],
  },
  {
    id: 6,
    rank: 6,
    name: 'Omega-3 Fish Oil 1000mg',
    weight: '90 softgels',
    servings: '90 servings',
    price: 699,
    mrp: 999,
    rating: 4.7,
    reviews: 1932,
    sold: '7K+ sold',
    img: 'https://img10.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/43673/prd_4367299-MB-Fuel-One-Whey-Protein-Powder-2.2-lb-Rich-Chocolate_o.jpg',
    tags: ['Heart Health', 'Joint Support', 'Brain'],
  },
    {
    id: 7,
    rank: 7,
    name: 'BCAA 2:1:1 Watermelon Burst',
    weight: '450g',
    servings: '30 servings',
    price: 1499,
    mrp: 1999,
    rating: 4.7,
    reviews: 2134,
    sold: '6K+ sold',
    img: 'https://img4.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/32511/prd_3251083-MuscleBlaze-Biozyme-Performance-Whey-PR-OP-2.2-lb-Chocolate-Fudge_o.jpg',
    tags: ['BCAA', 'Intra-workout', 'Hydration'],
  },
  {
    id: 8,
    rank: 8,
    name: 'Pre-Workout Extreme Citrus Blast',
    weight: '300g',
    servings: '30 servings',
    price: 1899,
    mrp: 2599,
    rating: 4.8,
    reviews: 1876,
    sold: '5K+ sold',
    img: 'https://img6.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/41560/prd_4155985-TrueBasics-Clean-Plant-Protein-OP-2.2-lb-Chocolate_o.jpg',
    tags: ['Energy', 'Pump', 'Focus'],
  },
  {
    id: 9,
    rank: 9,
    name: 'Daily Multivitamin Elite — 60 Tabs',
    weight: '60 tablets',
    servings: '60 servings',
    price: 799,
    mrp: 1199,
    rating: 4.6,
    reviews: 4231,
    sold: '15K+ sold',
    img: 'https://img2.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/38890/prd_3888921-MuscleBlaze-Biozyme-Gold-100-Whey-OP-4.4-lb-Double-Rich-Chocolate_o.jpg',
    tags: ['Daily Health', 'Immunity', 'Energy'],
  },
  {
    id: 10,
    rank: 10,
    name: 'Omega-3 Fish Oil 1000mg',
    weight: '90 softgels',
    servings: '90 servings',
    price: 699,
    mrp: 999,
    rating: 4.7,
    reviews: 1932,
    sold: '7K+ sold',
    img: 'https://img10.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/43673/prd_4367299-MB-Fuel-One-Whey-Protein-Powder-2.2-lb-Rich-Chocolate_o.jpg',
    tags: ['Heart Health', 'Joint Support', 'Brain'],
  },
]
const perSlide = 6;

const groupedProducts: (typeof products)[] = [];

for (let i = 0; i < products.length; i += perSlide) {
  groupedProducts.push(products.slice(i, i + perSlide));
}
function BestSellerCard({ product }: { product: typeof products[0] }) {
  const [wished, setWished] = useState(false)
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div className="group flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#065f46]/20 hover:shadow-lg transition-all duration-300 h-full">
      {/* Rank */}
      <div className="flex-shrink-0 w-6 text-center">
        <div className="text-sm font-black text-gray-300">
          #{product.rank}
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-full sm:w-40 h-52 sm:h-30 rounded-xl overflow-hidden bg-gray-50 img-zoom">
        <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base sm:text-sm leading-snug mb-3 line-clamp-2">
          {product.name}
        </h3>

        <div className="hidden flex items-center gap-1.5 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < Math.floor(product.rating) ? '#d97706' : '#e5e7eb'} stroke="none" />
            ))}
          </div>
          <span className="text-xs text-gray-500">{product.rating} ({product.reviews.toLocaleString()})</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.map((t) => (
            <span key={t} className="text-[10px] bg-[#065f46]/8 text-[#065f46] px-2 py-0.5 rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-baseline gap-1.5">
            <span className="font-black text-gray-900">₹{product.price.toLocaleString()}</span>
            <span className="text-xs text-gray-400 line-through">₹{product.mrp.toLocaleString()}</span>
            <span className="text-xs font-bold text-[#065f46]">-{discount}%</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setWished(!wished)}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Heart size={13} className={wished ? 'fill-rose-500 text-rose-500' : 'text-gray-400'} />
            </button>
            <button className="flex items-center gap-1.5 bg-[#065f46] text-white text-[13px]  px-3 py-1.5 rounded-lg hover:bg-[#047857] transition-colors">
              <ShoppingCart size={11} /> Add
            </button>
          </div>
        </div>

        <div className="hidden text-[10px] text-gray-400 mt-1 flex items-center gap-1">
          <TrendingUp size={10} className="text-[#10b981]" /> {product.sold} this month
        </div>
      </div>
    </div>
  )
}

export default function BestSellers() {


  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-[#d97706]" />
              <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">Top Rated</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Best Sellers
            </h2>
          </div>

          <div className="flex items-center gap-2">
   <button className="best-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#065f46] hover:text-[#065f46] transition-all">
    <ChevronLeft size={18}/>
</button>

<button className="best-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#065f46] hover:text-[#065f46] transition-all">
    <ChevronRight size={18}/>
</button>
          </div>
        </div>

        {/* Desktop grid */}
<Swiper
  modules={[Navigation, Pagination]}
  slidesPerView={1}
  navigation={{
    prevEl: ".best-prev",
    nextEl: ".best-next",
  }}
  pagination={{
    clickable: true,
  }}
    breakpoints={{
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  }}
>
  {groupedProducts.map((group, index) => (
    <SwiperSlide key={index}>
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {group.map((product) => (
          <BestSellerCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="lg:hidden">
  <Swiper
    slidesPerView={1}
    spaceBetween={16}
    pagination={{ clickable: true }}
       autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
        <BestSellerCard product={product} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      </div>
    </section>
  )
}
