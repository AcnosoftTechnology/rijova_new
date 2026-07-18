import { MapPin, Phone, Mail, Shield, ArrowRight } from 'lucide-react'

const quickLinks = [
  'About Us', 'Our Story', 'Careers', 'Press', 'Blog', 'Affiliate Program'
]

const categories = [
  'Protein', 'Mass Gainer', 'Creatine', 'BCAA', 'Pre Workout',
  'Multivitamins', 'Fat Burner', 'Omega 3', 'Ayurvedic', 'Wellness'
]

const support = [
  'Track Order', 'Return Policy', 'Shipping Policy', 'Privacy Policy',
  'Terms of Service', 'FAQs', 'Contact Us', 'Certifications'
]

const socials = [
  { label: 'IG', href: '#', title: 'Instagram' },
  { label: 'FB', href: '#', title: 'Facebook' },
  { label: 'YT', href: '#', title: 'YouTube' },
  { label: 'X', href: '#', title: 'Twitter/X' },
  { label: 'IN', href: '#', title: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#022c22] text-white">
     


<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <h2
    className="text-[220px] font-black text-white/[0.02] tracking-[15px] uppercase"
    style={{ fontFamily: "Montserrat" }}
  >
    RIJOVA
  </h2>
</div>
      {/* Main footer */}
      <div className=" relative z-10 max-w-[1200px] mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#065f46] to-[#10b981] flex items-center justify-center">
                <span className="text-white font-black text-lg">R</span>
              </div>
              <div>
                <div className="font-black text-white text-xl leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Rijova
                </div>
                <div className="text-[10px] text-[#fcd34d] font-semibold tracking-[0.15em] uppercase">
                  Biotech
                </div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Science-backed nutrition for peak human performance. Trusted by 50,000+ athletes across India.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              {[
                { icon: MapPin, text: '42 BioTech Park, Andheri East, Mumbai 400069' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Mail, text: 'support@rijovabiotech.com' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-white/60 text-sm">
                  <Icon size={14} className="flex-shrink-0 mt-0.5 text-[#34d399]" />
                  {text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ label, href, title }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={title}
                  title={title}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-0.5 text-white/70 text-[11px] font-black"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 text-sm hover:text-[#34d399] transition-colors flex items-center gap-1 group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all text-[#34d399]" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-white/60 text-sm hover:text-[#34d399] transition-colors flex items-center gap-1 group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all text-[#34d399]" />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Support
            </h4>
            <ul className="space-y-2.5">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-[#34d399] transition-colors flex items-center gap-1 group">
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all text-[#34d399]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Newsletter
            </h4>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Get exclusive deals and expert tips delivered weekly.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#34d399] transition-colors"
              />
              <button className="bg-[#065f46] hover:bg-[#047857] text-white text-sm font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>

            {/* Payment */}
            <div className="mt-6">
              <div className="text-white/40 text-xs mb-3 flex items-center gap-1.5">
                <Shield size={11} /> Secured Payments
              </div>
              <div className="flex flex-wrap gap-2">
                {['VISA', 'MC', 'UPI', 'GPay', 'Paytm', 'COD'].map((p) => (
                  <div key={p} className="bg-white/10 text-white/60 text-[10px] font-bold px-2.5 py-1.5 rounded-lg">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            © 2026 Rijova Biotech Pvt. Ltd. All rights reserved. FSSAI License No. 21725000000001
          </p>
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-white/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
