'use client';

import { Heart, MessageCircle, Camera } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const photos = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&auto=format',
    likes: 2847,
    comments: 134,
    user: '@arjun_lifts',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&auto=format',
    likes: 1923,
    comments: 89,
    user: '@priya.fit',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&auto=format',
    likes: 3451,
    comments: 201,
    user: '@karan_runs',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop&auto=format',
    likes: 1567,
    comments: 67,
    user: '@sneha_crossfit',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format',
    likes: 2134,
    comments: 112,
    user: '@rahul_bulk',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&auto=format',
    likes: 987,
    comments: 54,
    user: '@ananya.wellness',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop&auto=format',
    likes: 1789,
    comments: 78,
    user: '@fit_india_2026',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    likes: 3214,
    comments: 167,
    user: '@rijova_official',
  },
]

export default function SocialGallery() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Camera size={16} className="text-[#d97706]" />
            <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">Community</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            #RijovaFitFamily
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-4">
            Join 50,000+ athletes sharing their transformation stories. Tag us and get featured.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f59e0b] via-[#ec4899] to-[#8b5cf6] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Camera size={15} /> Follow @rijovabiotech
          </a>
        </div>

        {/* Grid */}
       <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  spaceBetween={15}
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
  {photos.map((photo) => (
    <SwiperSlide key={photo.id}>
      <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-gray-200">
        <img
          src={photo.img}
          alt={photo.user}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#064e3b]/0 group-hover:bg-[#064e3b]/75 transition-all duration-300 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1.5 text-white text-sm font-bold">
              <Heart size={16} fill="white" />
              {(photo.likes / 1000).toFixed(1)}k
            </div>

            <div className="flex items-center gap-1.5 text-white text-sm font-bold">
              <MessageCircle size={16} fill="white" />
              {photo.comments}
            </div>
          </div>

          <div className="text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {photo.user}
          </div>
        </div>

        {/* Camera Icon */}
        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Camera size={13} className="text-white" />
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
