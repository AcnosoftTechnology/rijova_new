import Header from '@/components/home/sections/Header'
import Hero from '@/components/home/sections/Hero'
import TrustStrip from '@/components/home/sections/TrustStrip'
import FeaturedProducts from '@/components/home/sections/FeaturedProducts'
import PromoBanners from '@/components/home/sections/PromoBanners'
import BestSellers from '@/components/home/sections/BestSellers'
import Categories from '@/components/home/sections/Categories'
import Blog from '@/components/home/sections/Blog'
import ReferEarn from '@/components/home/sections/ReferEarn'
import Testimonials from '@/components/home/sections/Testimonials'
import TrustSection from '@/components/home/sections/TrustSection'
import SocialGallery from '@/components/home/sections/SocialGallery'
// import Newsletter from '@/components/home/sections/Newsletter'
import Footer from '@/components/home/sections/Footer'
import Creative from '@/components/home/sections/creative-section'
import Banshow from '@/components/home/sections/Banshow'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedProducts />
        <PromoBanners />
        <BestSellers />
        <Categories />
        <Creative />
        <Blog />
        <ReferEarn />
        <Testimonials />
        <Banshow />
        <TrustSection />
        <SocialGallery />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  )
}
