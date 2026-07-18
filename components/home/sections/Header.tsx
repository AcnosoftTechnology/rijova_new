'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Search, User, Heart, ShoppingCart, Package, Headphones,
  ChevronDown, X, Menu, Zap, Award, TrendingUp, Sparkles,
  ArrowRight, Phone, Mail
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Shop', href: '/product-grid' },
  { label: 'Shop by Category', href: '/category', hasMega: true },
  { label: 'FAQs', href: '#' },
  { label: 'Track Order', href: '/track-order' },
  { label: 'Guide Us', href: '#' },
  { label: 'Certificates', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const megaCategories = [
  { name: 'Protein', icon: '💪', desc: 'Whey, Casein, Plant-based' },
  { name: 'Mass Gainer', icon: '⚡', desc: 'Bulk & size formulas' },
  { name: 'Creatine', icon: '🔥', desc: 'Strength & power' },
  { name: 'BCAA', icon: '🌿', desc: 'Recovery & endurance' },
  { name: 'Pre Workout', icon: '🚀', desc: 'Energy & focus boost' },
  { name: 'Multivitamins', icon: '✨', desc: 'Daily nutrition support' },
  { name: 'Fat Burner', icon: '🎯', desc: 'Lean physique formula' },
  { name: 'Omega 3', icon: '🐟', desc: 'Heart & joint health' },
  { name: 'Ayurvedic', icon: '🌱', desc: 'Ancient wellness blends' },
  { name: 'Immunity', icon: '🛡️', desc: 'Immune system support' },
  { name: 'Wellness', icon: '☯️', desc: 'Holistic health range' },
]

const bestSellersMenu = [
  { name: 'Gold Standard Whey', price: '₹3,299', badge: '🏆 #1' },
  { name: 'Creatine Monohydrate', price: '₹899', badge: '🔥 Hot' },
  { name: 'BCAA Pro Complex', price: '₹1,499', badge: '⭐ Top' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount] = useState(3)
  const [wishCount] = useState(5)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="hidden bg-[#064e3b] text-white text-xs py-2 px-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone size={11} /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail size={11} /> support@rijovabiotech.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Zap size={11} className="text-yellow-400" />
              FREE SHIPPING on orders above ₹999
            </span>
            <span className="hidden sm:block">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Award size={11} className="text-yellow-400" /> Lab Tested & Certified
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#065f46] to-[#10b981] flex items-center justify-center shadow-md">
                <span className="text-white font-black text-lg leading-none">R</span>
              </div>
              <div>
                <div className="font-black text-[#064e3b] text-xl leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Rijova
                </div>
                <div className="text-[10px] text-[#d97706] font-semibold tracking-[0.15em] uppercase">
                  Biotech
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex flex-1 mx-8 max-w-lg">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for protein, vitamins, supplements..."
                  className="w-full pl-5 pr-12 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#065f46] focus:bg-white transition-all"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#065f46] rounded-full flex items-center justify-center hover:bg-[#047857] transition-colors">
                  <Search size={14} className="text-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 lg:gap-2">
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={20} className="text-gray-700" />
              </button>

              <Link href="/checkout" className="hidden sm:flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <Package size={20} className="text-gray-600 group-hover:text-[#065f46] transition-colors" />
                <span className="text-[10px] text-gray-500 mt-0.5 hidden lg:block">Track</span>
              </Link>

              <a href="#" className="hidden sm:flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <Headphones size={20} className="text-gray-600 group-hover:text-[#065f46] transition-colors" />
                <span className="text-[10px] text-gray-500 mt-0.5 hidden lg:block">Support</span>
              </a>

              <Link href="/login" className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <User size={20} className="text-gray-600 group-hover:text-[#065f46] transition-colors" />
                <span className="text-[10px] text-gray-500 mt-0.5 hidden lg:block">Login</span>
              </Link>

              <Link href="/wishlist" className="relative flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <Heart size={20} className="text-gray-600 group-hover:text-rose-500 transition-colors" />
                <span className="text-[10px] text-gray-500 mt-0.5 hidden lg:block">Wishlist</span>
                {wishCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishCount}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <ShoppingCart size={20} className="text-gray-600 group-hover:text-[#065f46] transition-colors" />
                <span className="text-[10px] text-gray-500 mt-0.5 hidden lg:block">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#065f46] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                className="lg:hidden ml-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={22} className="text-gray-700" />
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="lg:hidden px-4 pb-3 animate-fade-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search supplements..."
                  className="w-full pl-5 pr-12 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#065f46]"
                  autoFocus
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#065f46] rounded-full flex items-center justify-center">
                  <Search size={14} className="text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className={`sticky top-0 z-[9999] bg-white border-b border-gray-100 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-emerald-900/10' : ''}`}>
        <div className="relative hidden lg:block border-t border-gray-100 max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-0.5 py-1 ">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative flex-shrink-0"
                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
                    link.hasMega && megaOpen
                      ? 'text-[#065f46] bg-[#065f46]/8'
                      : 'text-gray-700 hover:text-[#065f46] hover:bg-[#065f46]/5'
                  }`}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {link.hasMega && megaOpen && (
                  <div className="absolute left-0 top-full pt-1 z-[9999] mega-menu-enter">
                    <div className="w-[960px] rounded-2xl border border-emerald-50 bg-white shadow-2xl shadow-emerald-900/15 overflow-hidden">
                      <div className="grid grid-cols-4 gap-0">
                        <div className="col-span-2 p-6 border-r border-gray-100">
                          <div className="text-xs font-bold tracking-widest text-[#d97706] uppercase mb-4">
                            All Categories
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {megaCategories.map((cat) => (
                              <Link
                                key={cat.name}
                                href="/category"
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#065f46]/5 transition-all group"
                              >
                                <span className="text-xl">{cat.icon}</span>
                                <div>
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-[#065f46] transition-colors">
                                    {cat.name}
                                  </div>
                                  <div className="text-xs text-gray-500">{cat.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 border-r border-gray-100">
                          <div className="text-xs font-bold tracking-widest text-[#d97706] uppercase mb-4">
                            Best Sellers
                          </div>
                          <div className="space-y-3">
                            {bestSellersMenu.map((item) => (
                              <Link key={item.name} href="/product-grid" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#065f46]/5 transition-all group">
                                <div>
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-[#065f46]">{item.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">{item.price}</div>
                                </div>
                                <span className="text-xs">{item.badge}</span>
                              </Link>
                            ))}
                            <div className="mt-2">
                              <div className="text-xs font-bold tracking-widest text-[#d97706] uppercase mb-3">New Arrivals</div>
                              <Link href="/product-grid" className="flex items-center gap-2 p-3 rounded-xl bg-[#065f46]/5 hover:bg-[#065f46]/10 transition-all">
                                <Sparkles size={14} className="text-[#065f46]" />
                                <span className="text-sm font-semibold text-[#065f46]">View All New</span>
                              </Link>
                              <Link href="/product-grid" className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#065f46]/5 transition-all mt-1">
                                <TrendingUp size={14} className="text-[#d97706]" />
                                <span className="text-sm font-semibold text-gray-700">Trending Now</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-[#064e3b] to-[#065f46]">
                          <div className="text-xs font-bold tracking-widest text-[#fcd34d] uppercase mb-4">
                            Limited Offer
                          </div>
                          <div className="text-2xl font-black text-white leading-tight mb-2">
                            Up to<br />
                            <span className="text-[#fcd34d]">50% OFF</span>
                          </div>
                          <div className="text-sm text-white/80 mb-4">
                            On selected protein & supplements
                          </div>
                          <div className="bg-white/10 rounded-xl p-3 mb-4">
                            <div className="text-xs text-white/70 mb-1">Use code</div>
                            <div className="text-lg font-black text-[#fcd34d] tracking-widest">RIJOVA50</div>
                          </div>
                          <Link href="/product-grid" className="btn-gold w-full justify-center text-sm py-2.5 px-4">
                            Shop Now <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto animate-fade-up">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-[#065f46]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-gray-700 hover:bg-[#065f46]/5 hover:text-[#065f46] font-medium transition-all"
                >
                  {link.label}
                  <ChevronDown size={14} className="text-gray-400 -rotate-90" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
