"use client";

import { useState } from "react";
import { Heart, Eye, ShoppingCart,  Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "Gold Whey Protein Isolate",
    category: "Protein",
    price: 3299,
    mrp: 4499,
    rating: 4.9,
    reviews: 3842,
    badge: "Best Seller",
    badgeColor: "#d97706",
    img: "https://img2.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/45312/prd_4531131_o.jpg",
    flavors: ["Chocolate", "Vanilla", "Strawberry"],
  },
  {
    id: 2,
    name: "Creatine Monohydrate 300g",
    category: "Strength",
    price: 899,
    mrp: 1299,
    rating: 4.8,
    reviews: 2156,
    badge: "New",
    badgeColor: "#065f46",
    img: "https://img4.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/15127/prd_1512653-MuscleBlaze-Biozyme-Performance-Whey-OP-2.2-lb-Rich-Chocolate_o.jpg",
    flavors: ["Unflavored"],
  },
  {
    id: 3,
    name: "BCAA Pro Complex 450g",
    category: "Recovery",
    price: 1499,
    mrp: 1999,
    rating: 4.7,
    reviews: 1893,
    badge: "Hot",
    badgeColor: "#dc2626",
    img: "https://img4.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/32511/prd_3251083-MuscleBlaze-Biozyme-Performance-Whey-PR-OP-2.2-lb-Chocolate-Fudge_o.jpg",
    flavors: ["Watermelon", "Blue Raspberry"],
  },
  {
    id: 4,
    name: "Pre-Workout Extreme 300g",
    category: "Energy",
    price: 1899,
    mrp: 2599,
    rating: 4.8,
    reviews: 1247,
    badge: "Trending",
    badgeColor: "#7c3aed",
    img: "https://img6.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/41560/prd_4155985-TrueBasics-Clean-Plant-Protein-OP-2.2-lb-Chocolate_o.jpg",
    flavors: ["Mango", "Citrus Burst"],
  },
  {
    id: 5,
    name: "Omega-3 Fish Oil 1000mg",
    category: "Vitamins",
    price: 699,
    mrp: 999,
    rating: 4.6,
    reviews: 987,
    badge: "Sale",
    badgeColor: "#065f46",
    img: "https://img2.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/38890/prd_3888921-MuscleBlaze-Biozyme-Gold-100-Whey-OP-4.4-lb-Double-Rich-Chocolate_o.jpg",
    flavors: ["Lemon"],
  },
  {
    id: 6,
    name: "Multivitamin Elite 60 tabs",
    category: "Vitamins",
    price: 799,
    mrp: 1199,
    rating: 4.7,
    reviews: 2341,
    badge: "Best Value",
    badgeColor: "#0891b2",
    img: "https://img10.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/43673/prd_4367299-MB-Fuel-One-Whey-Protein-Powder-2.2-lb-Rich-Chocolate_o.jpg",
    flavors: ["Unflavored"],
  },
  {
    id: 7,
    name: "Mass Gainer XXL 3kg",
    category: "Mass Gainer",
    price: 2499,
    mrp: 3499,
    rating: 4.5,
    reviews: 1654,
    badge: "Bulk Deal",
    badgeColor: "#d97706",
    img: "https://img8.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/15127/prd_1512687-MuscleBlaze-Biozyme-Performance-Whey-OP-4.4-lb-Chocolate-Hazelnut_o.jpg",
    flavors: ["Chocolate", "Vanilla"],
  },
  {
    id: 8,
    name: "Fat Burner Thermogenic",
    category: "Fat Burner",
    price: 1299,
    mrp: 1799,
    rating: 4.4,
    reviews: 892,
    badge: "New",
    badgeColor: "#065f46",
    img: "https://img4.hkrtcdn.com/cdn-cgi/image/width=580,height=380,dpr=1.5/41751/prd_4175043-TrueBasics-Clean-Whey-Protein-Isolate-OP-2.2-lb-Vanilla_o.jpg",
    flavors: ["Capsules"],
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [wished, setWished] = useState(false);
  const [adding, setAdding] = useState(false);


  const handleAdd = () => {
    setAdding(true);
    setTimeout(() => setAdding(false), 1200);
  };

  return (
    <div className="group h-full relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100">
      {/* Badge */}
      <div
        className="absolute top-3 left-3 z-10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
        style={{ background: product.badgeColor }}
      >
        {product.badge}
      </div>

      {/* Discount */}
      {/* <div className="absolute top-3 right-12 z-10 bg-[#fef3c7] text-[#92400e] text-[10px] font-bold px-2 py-1 rounded-full">
        -{discount}%
      </div> */}

      {/* Wishlist */}
      <button
        onClick={() => setWished(!wished)}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110"
      >
        <Heart
          size={15}
          className={wished ? "fill-rose-500 text-rose-500" : "text-gray-400"}
        />
        
      </button>

      {/* Image */}
      <div className="img-zoom relative h-52 bg-gray-50 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain"
        />
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-[#065f46]/0 group-hover:bg-[#065f46]/10 transition-all duration-300 flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 bg-white text-[#065f46] text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#065f46] hover:text-white">
            <Eye size={13} /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-[#065f46] font-semibold uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <h3
          className="font-bold text-gray-900 text-m leading-snug mb-2 line-clamp-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        {/* <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                fill={i < Math.floor(product.rating) ? "#d97706" : "#e5e7eb"}
                stroke="none"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-700">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({product.reviews.toLocaleString()})
          </span>
        </div> */}

        {/* Flavors */}
        {/* <div className="flex flex-wrap gap-1 mb-3">
          {product.flavors.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-[10px] bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div> */}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl  text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{product.mrp.toLocaleString()}
          </span>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            adding
              ? "bg-[#10b981] text-white scale-95"
              : "bg-[#065f46]/8 text-[#065f46] hover:bg-[#065f46] hover:text-white"
          }`}
        >
          <ShoppingCart size={15} />
          {adding ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

const tabs = [
  "All",
  "Protein",
  "Vitamins",
  "Energy",
  "Recovery",
  "Mass Gainer",
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} className="text-[#d97706]" />
              <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">
                Curated For You
              </span>
            </div>
            <h2
              className="text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Featured Products
            </h2>
          </div>
          <a
            href="#"
            className="text-[#065f46] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All Products →
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[#065f46] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {filtered.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
