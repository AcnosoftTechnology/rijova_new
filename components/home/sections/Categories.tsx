'use client';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    name: 'Protein',
    desc: 'Build lean muscle with premium whey isolates, casein, and plant-based blends.',
    icon: '💪',
    color: 'from-[#065f46] to-[#10b981]',
    count: 48,
  },
  {
    name: 'Mass Gainer',
    desc: 'Calorie-dense formulas engineered to fuel rapid size and strength gains.',
    icon: '⚡',
    color: 'from-[#1d4ed8] to-[#3b82f6]',
    count: 22,
  },
  {
    name: 'Creatine',
    desc: 'Clinically-dosed creatine for peak strength output and explosive power.',
    icon: '🔥',
    color: 'from-[#dc2626] to-[#f97316]',
    count: 15,
  },
  {
    name: 'BCAA',
    desc: 'Intra-workout recovery with the essential 2:1:1 branched-chain amino acid ratio.',
    icon: '🌿',
    color: 'from-[#059669] to-[#34d399]',
    count: 18,
  },
  {
    name: 'Pre Workout',
    desc: 'Elite energy, focus, and pump formulas for training sessions that demand more.',
    icon: '🚀',
    color: 'from-[#7c3aed] to-[#a78bfa]',
    count: 24,
  },
  {
    name: 'Multivitamins',
    desc: 'Complete daily nutrition with micronutrients, antioxidants, and essential vitamins.',
    icon: '✨',
    color: 'from-[#d97706] to-[#fcd34d]',
    count: 31,
  },
  {
    name: 'Fat Burner',
    desc: 'Thermogenic compounds to accelerate metabolism and reveal your lean physique.',
    icon: '🎯',
    color: 'from-[#9d174d] to-[#ec4899]',
    count: 19,
  },
  {
    name: 'Omega 3',
    desc: 'High-potency fish oil for cardiovascular, cognitive, and joint health support.',
    icon: '🐟',
    color: 'from-[#0891b2] to-[#22d3ee]',
    count: 12,
  },
  {
    name: 'Ayurvedic',
    desc: 'Time-tested botanical blends — Ashwagandha, Shilajit, Triphala and more.',
    icon: '🌱',
    color: 'from-[#84cc16] to-[#65a30d]',
    count: 26,
  },
  {
    name: 'Immunity',
    desc: 'Targeted immune support with Vitamin C, D3, Zinc, and elderberry extracts.',
    icon: '🛡️',
    color: 'from-[#0f766e] to-[#14b8a6]',
    count: 20,
  },
  {
    name: 'Wellness',
    desc: 'Holistic health solutions for sleep, stress, gut health, and everyday vitality.',
    icon: '☯️',
    color: 'from-[#6b21a8] to-[#9333ea]',
    count: 35,
  },
]

export default function Categories() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LayoutGrid size={16} className="text-[#d97706]" />
            <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">Browse Categories</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Shop by Category
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Discover our comprehensive range of science-backed supplements, curated for every fitness goal.
          </p>
        </div>

        {/* Grid */}
        {/* Categories Slider */}
<Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  loop={true}
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1.2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
  {categories.map((cat) => (
    <SwiperSlide key={cat.name}>
      <a
        href="#"
        className="group relative block h-full overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Top */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
          >
            {cat.icon}
          </div>

          <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-full">
            {cat.count} products
          </span>
        </div>

        {/* Content */}
        <h3
          className="font-black text-gray-900 text-lg mb-2 group-hover:text-[#065f46] transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {cat.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {cat.desc}
        </p>

        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#065f46] group-hover:gap-2.5 transition-all">
          Explore Range <ArrowRight size={14} />
        </div>
      </a>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  )
}
