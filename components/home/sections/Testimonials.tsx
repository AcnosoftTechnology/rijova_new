'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, Quote,  CheckCircle } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Competitive Powerlifter',
    location: 'Mumbai',
    rating: 5,
    review: "Rijova's Gold Whey has been a game-changer for my recovery. The amino acid profile is exceptional, and I've been hitting PRs consistently since switching 4 months ago. The chocolate flavor actually tastes like dessert — no chalky aftertaste.",
    product: 'Gold Whey Protein Isolate',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    verified: true,
    gained: '+8kg muscle in 6 months',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Fitness Coach & Nutritionist',
    location: 'Delhi',
    rating: 5,
    review: "As a certified nutritionist, I'm extremely selective about what I recommend. Rijova's lab reports are impeccable — every batch tested, every claim verified. My clients love the results. The multivitamins are now a staple recommendation.",
    product: 'Daily Multivitamin Elite',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    verified: true,
    gained: 'Recommends to 200+ clients',
  },
  {
    id: 3,
    name: 'Karan Singh',
    role: 'Marathon Runner',
    location: 'Bangalore',
    rating: 5,
    review: "BCAA Pro Complex saved my legs during my 100k training block. Zero cramping, faster recovery between sessions. I take it religiously now. The watermelon flavor is genuinely refreshing during long runs. Delivery was also lightning fast.",
    product: 'BCAA Pro Complex',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
    verified: true,
    gained: 'Sub-4hr marathon achieved',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'CrossFit Athlete',
    location: 'Pune',
    rating: 5,
    review: "Switched from three other brands before landing on Rijova and I'm not looking back. The Pre-Workout is dialed in perfectly — energy without the crash, focus without the jitters. And the customer support team is incredibly responsive.",
    product: 'Pre-Workout Extreme',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
    verified: true,
    gained: 'Cut 8% body fat',
  },
  {
    id: 5,
    name: 'Rahul Verma',
    role: 'Bodybuilder — Amateur',
    location: 'Chennai',
    rating: 5,
    review: "The Mass Gainer is the real deal. High calorie, clean ingredients, no bloating. Combined with the creatine, I put on 6kg in 3 months while keeping body fat in check. The protein-to-carb ratio is exactly what a hard gainer needs.",
    product: 'Mass Gainer XXL',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
    verified: true,
    gained: '+6kg quality mass',
  },
  {
    id: 6,
    name: 'Ananya Roy',
    role: 'Yoga Instructor & Wellness Coach',
    location: 'Kolkata',
    rating: 5,
    review: "Love the Ayurvedic range! The Ashwagandha supplement has genuinely reduced my stress levels and improved my sleep quality. I appreciate that Rijova bridges ancient wisdom with modern quality standards. Highly recommended for holistic wellness.",
    product: 'Ashwagandha Elite',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format',
    verified: true,
    gained: 'Better sleep & recovery',
  },
]


export default function Testimonials() {


  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #fafafa 100%)' }}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star size={16} fill="#d97706" stroke="none" />
            <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">Real Results</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            What Our Athletes Say
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Verified reviews from real customers who transformed their fitness journeys with Rijova Biotech.
          </p>
        </div>

        {/* Navigation */}
       {/* <div className="flex items-center gap-2">
  <button className="review-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#065f46] hover:text-[#065f46] transition-all">
    <ChevronLeft size={18} />
  </button>

  <button className="review-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#065f46] hover:text-[#065f46] transition-all">
    <ChevronRight size={18} />
  </button>
</div> */}

        {/* Cards */}
 <Swiper
  modules={[Navigation, Pagination]}
  navigation={{
    prevEl: ".review-prev",
    nextEl: ".review-next",
  }}
  pagination={{
    clickable: true,
  }}
     autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {reviews.map((r) => (
    <SwiperSlide key={r.id}>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full">

        <Quote size={32} className="text-[#065f46]/15 mb-3" />

        <div className="flex mb-3">
          {[...Array(r.rating)].map((_, i) => (
            <Star key={i} size={14} fill="#d97706" stroke="none" />
          ))}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
          "{r.review}"
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img
              src={r.img}
              alt={r.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-gray-900 text-sm">
                {r.name}
              </span>

              {r.verified && (
                <CheckCircle
                  size={13}
                  className="text-[#065f46]"
                />
              )}
            </div>

            <div className="text-xs text-gray-400">
              {r.role} · {r.location}
            </div>
          </div>
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>


      </div>
    </section>
  )
}
