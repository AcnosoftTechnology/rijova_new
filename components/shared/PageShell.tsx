import Header from '@/components/home/sections/Header'
import Footer from '@/components/home/sections/Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
