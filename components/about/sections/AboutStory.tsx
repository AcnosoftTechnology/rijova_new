import { SectionTitle } from '@/components/shared/SectionTitle';

const pillars = [
  {
    title: 'Performance first',
    copy: 'Every collection is positioned around strength, recovery, endurance, and daily wellness journeys.',
  },
  {
    title: 'Premium but approachable',
    copy: 'Rounded cards, generous spacing, and friendly copy keep the brand polished without feeling intimidating.',
  },
  {
    title: 'Retail-ready experiences',
    copy: 'The layouts are designed to scale from homepage storytelling to account dashboards and content-rich pages.',
  },
];

export function AboutStory() {
  return (
    <section className="section-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionTitle
        eyebrow="Our story"
        title="A design system that balances trust, motion, and conversion"
        copy="This section uses the same clean typography, soft shadows, and emerald-gold palette so your inner pages feel like one cohesive premium store experience."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <article key={pillar.title} className="card-hover rounded-[26px] border border-slate-200/70 bg-white p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-lg font-semibold text-white">
              0{index + 1}
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
