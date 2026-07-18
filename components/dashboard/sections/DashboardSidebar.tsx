import Link from 'next/link';

const links = [
  { href: '/dashboard/profile', label: 'Profile' },
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/orders', label: 'Orders' },  
  { href: '/dashboard/profile/edit', label: 'Edit profile' },
];

export function DashboardSidebar() {
  return (
    <aside className="rounded-[30px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 p-6 text-white shadow-[0_24px_70px_rgba(6,95,70,0.2)]">
      <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
        <p className="text-sm text-emerald-100">Welcome back</p>
        <h2 className="mt-2 text-2xl font-semibold">Areeba Khan</h2>
        <p className="mt-2 text-sm text-emerald-100">Manage orders, saved items, and profile details.</p>
      </div>
      <nav className="mt-6 grid gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/10">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
