import { ShieldCheck, FlaskConical, Award, Star, Package } from 'lucide-react'
import Image from "next/image";

const pillars = [
  {
    icon: Award,
    title: "GMP Certified",
    desc: "Manufactured in GMP certified facilities ensuring world-class quality standards.",
    color: "#d97706",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine",
    desc: "Only authentic supplements sourced directly from trusted manufacturers.",
    color: "#065f46",
  },
  {
    icon: Star,
    title: "Trusted by Customers",
    desc: "Thousands of satisfied customers trust Rijova for premium nutrition.",
    color: "#d97706",
  },
  {
    icon: FlaskConical,
    title: "Lab Tested",
    desc: "Every batch undergoes rigorous testing for purity, safety and effectiveness.",
    color: "#065f46",
  },
];

const certLogos = [
  {
    name: "FSSAI",
    detail: "Food Safety Standard",
    image: "/images/certificate.jpg",
  },
  {
    name: "GMP",
    detail: "Good Manufacturing Practice",
    image: "/images/certificate.jpg",
  },
  {
    name: "NABL",
    detail: "Accredited Testing Labs",
    image: "/images/certificate.jpg",
  },
  {
    name: "ISO 22000",
    detail: "Food Safety Management",
    image: "/images/certificate.jpg",
  },
  {
    name: "Informed Sport",
    detail: "Third-party Tested",
    image: "/images/certificate.jpg",
  },
];

export default function TrustSection() {
  return (


    <section className="section-pad bg-white">

    <div className="max-w-[1200px] mx-auto px-4 lg:px-8">



        
        {/* Header */}
        <div className="text-center mb-14">
  <div className="flex items-center justify-center gap-2 mb-3">
    <Star size={16} fill="#d97706" stroke="none" />
    <span className="text-sm font-semibold text-[#d97706] uppercase tracking-widest">
      Why Choose Us
    </span>
  </div>

  <h2
    className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
    Why Choose <span className="text-[#d97706]">Rijova?</span>
  </h2>

  <p className="text-gray-500 max-w-3xl mx-auto">
    Premium nutrition backed by science, certified manufacturing, and thousands
    of happy customers across India.
  </p>
</div>

        {/* Pillars grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-12 gap-8">
  {pillars.slice(0,4).map(({ icon: Icon, title, desc, color }) => (
    <div
      key={title}
      className="relative bg-[#fef3e4] rounded-[28px] px-7 pt-14 pb-7 text-center hover:-translate-y-2 transition duration-300"
    >
      {/* Floating Icon */}
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center"
        style={{ background: color }}
      >
        <Icon size={28} className="text-white" />
      </div>

      <h3
        className="font-black text-2xl text-gray-900 mb-3 mt-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-7">
        {desc}
      </p>
    </div>
  ))}
</div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-[#064e3b] to-[#065f46] rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Package size={16} className="text-[#fcd34d]" />
            <span className="text-[#fcd34d] text-xs font-bold uppercase tracking-widest">Certifications & Compliance</span>
          </div>
          <h3 className="text-white text-2xl font-black mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Verified By Industry Leaders
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
  {certLogos.map((cert) => (
    <div
      key={cert.name}
      className="bg-white/10 border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/15 transition-all duration-300 text-center min-w-[170px]"
    >
      <div className="flex justify-center mb-3">
        <Image
          src={cert.image}
          alt={cert.name}
          width={60}
          height={60}
          className="object-contain h-[160px] w-auto"
        />
      </div>

      <div className="text-white font-bold text-lg">
        {cert.name}
      </div>

      <div className="text-white/70 text-xs mt-1">
        {cert.detail}
      </div>
    </div>
  ))}
</div>  
        </div>
      </div>
    </section>
  )
}
