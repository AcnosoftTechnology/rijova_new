"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = ["/images/e.jpg", "/images/f.jpg", "/images/d.jpg"];
const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "4.8★", label: "Average Rating" },
  { value: "98%", label: "Recommend Us" },
  { value: "15K+", label: "Reviews" },
];

export default function Hero() {
  return (
    <>
      {" "}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                <img
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className=" hidden max-w-[1200px] mx-auto px-4  py-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <div
              className="text-3xl font-black text-[#065f46] mb-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {value}
            </div>
            <div className="text-sm text-gray-500">{label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// 'use client'

// import { useState, useEffect } from 'react'
// import { ArrowRight, Star, ShieldCheck, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react'

// const slides = [
//   {
//     badge: 'Premium Sports Nutrition',
//     headline: 'Fuel Your',
//     highlight: 'Peak Performance',
//     sub: 'Gold-standard whey protein with superior amino acid profile for maximum muscle synthesis and recovery.',
//     cta: 'Shop Protein',
//     ctaSecondary: 'View Offers',
//     discount: '30% OFF',
//     code: 'RIJOVA30',
//     img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&h=800&fit=crop&auto=format',
//     productImg: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=280&h=280&fit=crop&auto=format',
//     bg: 'from-[#022c22] via-[#064e3b] to-[#065f46]',
//     floatCards: [
//       { label: '4.9★ Rating', sub: '12K+ Reviews', color: 'bg-white', accent: '#065f46' },
//       { label: 'Lab Certified', sub: 'FSSAI Approved', color: 'bg-[#d97706]', accent: 'white' },
//     ],
//   },
//   {
//     badge: 'New Arrivals 2026',
//     headline: 'Unlock Your',
//     highlight: 'True Potential',
//     sub: 'Advanced pre-workout formula engineered for explosive energy, laser focus, and unmatched endurance.',
//     cta: 'Shop Pre-Workout',
//     ctaSecondary: 'Explore Range',
//     discount: '25% OFF',
//     code: 'POWER25',
//     img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=800&fit=crop&auto=format',
//     productImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=280&fit=crop&auto=format',
//     bg: 'from-[#1a0a00] via-[#7c2d12] to-[#92400e]',
//     floatCards: [
//       { label: '5000+ Sold', sub: 'This Month', color: 'bg-white', accent: '#92400e' },
//       { label: 'Zero Sugar', sub: 'Clean Formula', color: 'bg-[#065f46]', accent: 'white' },
//     ],
//   },
// ]

// const trustBadges = [
//   { icon: ShieldCheck, label: '100% Authentic' },
//   { icon: Award, label: 'Lab Certified' },
//   { icon: Zap, label: 'Fast Delivery' },
// ]

// export default function Hero() {
//   const [current, setCurrent] = useState(0)
//   const [animating, setAnimating] = useState(false)

//   const goTo = (idx: number) => {
//     if (animating) return
//     setAnimating(true)
//     setTimeout(() => {
//       setCurrent(idx)
//       setAnimating(false)
//     }, 300)
//   }

//   useEffect(() => {
//     const t = setInterval(() => goTo((current + 1) % slides.length), 6000)
//     return () => clearInterval(t)
//   }, [current])

//   const slide = slides[current]

//   return (
//     <section className="relative overflow-hidden min-h-[88vh] flex items-center">
//       {/* Background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`}
//       />

//       {/* Decorative circles */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 animate-spin-slow" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

//       {/* Grid pattern overlay */}
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//         }}
//       />

//       <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8 w-full py-16 lg:py-0">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//           {/* Left content */}
//           <div
//             className={`transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <Zap size={14} className="text-[#fcd34d]" />
//               {slide.badge}
//             </div>

//             {/* Headline */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4">
//               {slide.headline}
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#fcd34d]">
//                 {slide.highlight}
//               </span>
//             </h1>

//             <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
//               {slide.sub}
//             </p>

//             {/* Discount badge */}
//             <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3.5 mb-8">
//               <div>
//                 <div className="text-2xl font-black text-[#fcd34d]">{slide.discount}</div>
//                 <div className="text-white/70 text-xs">Limited time offer</div>
//               </div>
//               <div className="w-px h-10 bg-white/20" />
//               <div>
//                 <div className="text-white/60 text-xs mb-0.5">Use code</div>
//                 <div className="text-white font-black tracking-widest text-base">{slide.code}</div>
//               </div>
//             </div>

//             {/* CTAs */}
//             <div className="flex flex-wrap gap-3 mb-10">
//               <button className="btn-gold text-base px-7 py-3.5">
//                 {slide.cta} <ArrowRight size={16} />
//               </button>
//               <button className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all text-base">
//                 {slide.ctaSecondary}
//               </button>
//             </div>

//             {/* Trust badges */}
//             <div className="flex flex-wrap gap-4">
//               {trustBadges.map(({ icon: Icon, label }) => (
//                 <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
//                   <Icon size={16} className="text-[#34d399]" />
//                   {label}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right — image + floating cards */}
//           <div className="relative flex items-center justify-center">
//             {/* Main athlete image */}
//             <div
//               className={`relative z-10 transition-all duration-500 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
//             >
//               <div className="relative w-72 h-80 md:w-96 md:h-[440px] mx-auto">
//                 <div className="absolute inset-0 rounded-3xl overflow-hidden">
//                   <img
//                     src={slide.img}
//                     alt="Fitness athlete"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                 </div>

//                 {/* Product card floating */}
//                 <div className="absolute -right-8 -bottom-6 animate-float glass rounded-2xl p-3 shadow-xl w-36">
//                   <div className="w-full h-20 rounded-xl overflow-hidden mb-2">
//                     <img src={slide.productImg} alt="Product" className="w-full h-full object-cover" />
//                   </div>
//                   <div className="text-xs font-bold text-gray-800">Whey Protein</div>
//                   <div className="flex items-center gap-1 mt-1">
//                     <Star size={10} fill="#d97706" stroke="none" />
//                     <Star size={10} fill="#d97706" stroke="none" />
//                     <Star size={10} fill="#d97706" stroke="none" />
//                     <Star size={10} fill="#d97706" stroke="none" />
//                     <Star size={10} fill="#d97706" stroke="none" />
//                     <span className="text-[10px] text-gray-500 ml-0.5">4.9</span>
//                   </div>
//                   <div className="text-sm font-black text-[#065f46] mt-1">₹2,299</div>
//                   <button className="mt-1.5 w-full py-1 rounded-lg bg-[#065f46] text-white text-[10px] font-bold">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Float info cards */}
//             {slide.floatCards.map((card, i) => (
//               <div
//                 key={card.label}
//                 className={`absolute z-20 ${i === 0 ? '-left-4 top-12 animate-float-slow' : 'left-0 bottom-8 animate-float'}`}
//                 style={{ animationDelay: i === 0 ? '0s' : '2s' }}
//               >
//                 <div className={`${card.color} rounded-xl px-4 py-3 shadow-xl`}>
//                   <div
//                     className="font-black text-sm"
//                     style={{ color: card.accent }}
//                   >
//                     {card.label}
//                   </div>
//                   <div className="text-xs opacity-70" style={{ color: card.accent }}>{card.sub}</div>
//                 </div>
//               </div>
//             ))}

//             {/* Ratings pill */}
//             <div className="absolute -top-4 right-8 animate-float-slow glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg" style={{ animationDelay: '1s' }}>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={12} fill="#d97706" stroke="none" />
//                 ))}
//               </div>
//               <span className="text-xs font-bold text-gray-800">50,000+ Happy Customers</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slide controls */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
//         <button
//           onClick={() => goTo((current - 1 + slides.length) % slides.length)}
//           className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
//         >
//           <ChevronLeft size={16} className="text-white" />
//         </button>
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goTo(i)}
//             className={`transition-all duration-300 rounded-full ${
//               i === current ? 'w-8 h-2.5 bg-[#fcd34d]' : 'w-2.5 h-2.5 bg-white/40'
//             }`}
//           />
//         ))}
//         <button
//           onClick={() => goTo((current + 1) % slides.length)}
//           className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
//         >
//           <ChevronRight size={16} className="text-white" />
//         </button>
//       </div>
//     </section>
//   )
// }
