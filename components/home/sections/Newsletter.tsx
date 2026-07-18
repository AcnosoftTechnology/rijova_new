'use client'

import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle, Zap } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857]" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 50%, #d97706 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#fcd34d] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
            <Zap size={12} /> Stay in the loop
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Exclusive Deals, Expert Tips &<br />New Product Alerts
          </h2>
          <p className="text-white/70 mb-8">
            Join 25,000+ subscribers and get 10% off your first order, plus early access to flash sales.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 bg-white/15 border border-white/25 text-white px-8 py-4 rounded-2xl text-lg font-semibold">
              <CheckCircle size={22} className="text-[#34d399]" />
              You're in! Check your inbox for your 10% off code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white/15 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn-gold px-7 py-4 text-base justify-center whitespace-nowrap"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
