import { ShieldCheck, FlaskConical, Award, Truck, CreditCard, Headphones } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Authentic Products', color: '#065f46' },
  { icon: FlaskConical, label: 'Lab Tested', color: '#065f46' },
  { icon: Award, label: 'Certified Quality', color: '#d97706' },
  { icon: Truck, label: 'Fast Delivery', color: '#065f46' },
  { icon: CreditCard, label: 'Secure Payments', color: '#065f46' },
  { icon: Headphones, label: 'Expert Support', color: '#d97706' },
]

export default function TrustStrip() {
  return (
    <div className="hidden bg-white border-y border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          {items.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}15` }}
              >
                <Icon size={16} style={{ color }} />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
