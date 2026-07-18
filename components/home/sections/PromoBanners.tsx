'use client'

import { ArrowRight,  Truck, Gift, Zap } from 'lucide-react'



const banners = [
  {
    tag: 'Flash Sale',
    title: 'Buy 2 Get 1',
    highlight: 'FREE',
    desc: 'On all protein supplements. Mix & match from our bestsellers.',
    cta: 'Shop the Deal',
    bg: 'from-[#064e3b] to-[#065f46]',
    accent: '#fcd34d',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop&auto=format',
    icon: Gift,
    countdown: true,
  },
  {
    tag: 'Free Shipping',
    title: 'Orders Above',
    highlight: '₹999',
    desc: 'PAN India delivery with real-time tracking & express options.',
    cta: 'Start Shopping',
    bg: 'from-[#1e3a5f] to-[#1d4ed8]',
    accent: '#93c5fd',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
    icon: Truck,
    countdown: false,
  },
  {
    tag: 'Combo Offer',
    title: 'Stack & Save',
    highlight: '40% OFF',
    desc: 'Protein + Creatine + BCAA combo packs. The ultimate stack.',
    cta: 'Build Your Stack',
    bg: 'from-[#4a1942] to-[#7c3aed]',
    accent: '#f0abfc',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&auto=format',
    icon: Zap,
    countdown: false,
  },
]

export default function PromoBanners() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={16} className="text-[#d97706]" />
          <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">Deals & Offers</span>
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Promotional Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {banners.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${b.bg} group cursor-pointer`}
              >
                {/* Background image */}
                <div className="absolute inset-0 opacity-15">
                  <img src={b.img} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${b.accent}25` }}>
                      <Icon size={16} style={{ color: b.accent }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: b.accent }}>
                      {b.tag}
                    </span>
                  </div>

                  <div className="text-2xl font-black text-white leading-tight mb-1">
                    {b.title}
                  </div>
                  <div className="text-4xl font-black mb-3" style={{ color: b.accent }}>
                    {b.highlight}
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {b.desc}
                  </p>

      

                  <button className="flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3" style={{ color: b.accent }}>
                    {b.cta} <ArrowRight size={15} />
                  </button>
                </div>

                {/* Decorative circle */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: b.accent }}
                />
              </div>
            )
          })}
        </div>

        {/* Wide seasonal banner */}
        <div className="mt-5 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fcd34d] p-6 md:p-8">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=200&fit=crop&auto=format"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-900 mb-1">
                🎉 Seasonal Special
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-amber-900">
                Monsoon Wellness Sale — Up to <span className="text-white">60% OFF</span>
              </h3>
              <p className="text-amber-900/70 text-sm mt-1">
                Stock up on immunity boosters, vitamins & wellness supplements this season.
              </p>
            </div>
            <button className="flex-shrink-0 bg-amber-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-amber-950 transition-all hover:-translate-y-1 flex items-center gap-2 shadow-lg">
              Shop Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
