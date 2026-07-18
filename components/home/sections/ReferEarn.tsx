"use client";
import Image from "next/image";
import { Gift, Users, Wallet } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Invite Friends",
    desc: "Share your unique referral link with friends & family.",
  },
  {
    icon: Gift,
    title: "They Shop",
    desc: "They get ₹200 off on their first order of ₹999+.",
  },
  {
    icon: Wallet,
    title: "You Earn",
    desc: "Earn ₹300 in Rijova Wallet credits per successful referral.",
  },
];

export default function ReferEarn() {
  return (
    <section className="section-pad  refer-earn-section overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#065f46]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="animated-grid"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#10b981]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#d97706]/10 blur-3xl" />

      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#fcd34d] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
              <Gift size={13} /> Refer & Earn Program
            </div>

            <h2
              className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Share the Gains,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#fcd34d]">
                Earn Real Rewards
              </span>
            </h2>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Invite friends to Rijova Biotech and earn wallet credits for every
              successful referral. Your friends get discounts, you get rewards —
              everyone wins.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#34d399]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">
                      {i + 1}. {title}
                    </div>
                    <div className="text-white/60 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center ">
              <div className="refer-rings">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
            <Image
              src="/images/refer-man.png"
              alt="Refer & Earn"
              width={600}
              height={600}
              priority
              className="w-full max-w-[385px] h-auto object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
