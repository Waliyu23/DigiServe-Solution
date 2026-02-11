import { Container } from '@/components/layout/Container';
import MarketingHero from '@/components/sections/MarketingHero';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';
import Link from 'next/link';

const marketingCapabilities = [
  {
    title: 'SEO Strategy',
    desc: 'Technical audits, on-page optimization, and content architecture built for long-term ranking growth.',
    badge: 'SEO',
  },
  {
    title: 'Paid Search & Social',
    desc: 'Google, Meta, TikTok, and YouTube campaigns optimized around CPA, ROAS, and revenue targets.',
    badge: 'ADS',
  },
  {
    title: 'Content Systems',
    desc: 'Editorial planning and conversion-focused content that aligns with search intent and buyer journeys.',
    badge: 'CNT',
  },
  {
    title: 'Conversion Optimization',
    desc: 'Landing page and funnel improvements that increase lead quality and improve close rates.',
    badge: 'CRO',
  },
  {
    title: 'Email Automation',
    desc: 'Lifecycle campaigns and segmented journeys that improve retention and repeat purchases.',
    badge: 'CRM',
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Clear dashboard reporting tied to business outcomes so your team can make confident decisions.',
    badge: 'BI',
  },
];

const outcomes = [
  {
    title: 'Higher search visibility',
    desc: 'Improve rankings for high-intent keywords and capture qualified traffic consistently.',
    image: '/images/porfolio_DigitalMarketing.jpg',
  },
  {
    title: 'Faster lead generation',
    desc: 'Build campaign funnels that attract better prospects and convert them with less friction.',
    image: '/projects/project_3-ecommerceWebsite.jpg',
  },
  {
    title: 'Stronger marketing ROI',
    desc: 'Track performance end-to-end and reallocate budget to channels that deliver measurable growth.',
    image: '/projects/project_7-brochure.jpg',
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Grow Your Online Presence"
        title="Digital Marketing & SEO"
        rotatingLines={[
          'Increase visibility with data-driven strategy',
          'Improve conversion with targeted campaigns',
          'Scale growth through continuous optimization',
          'Turn analytics into clearer decisions',
        ]}
        description="Data-driven strategies to increase visibility, engagement, and conversions."
        primaryButton={{ href: '/contact', label: 'Get in touch' }}
        secondaryButton={{ href: '/portfolio', label: 'View Projects' }}
        showLogos
      />

      <section className="bg-[#eff0e6] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Marketing systems built for visibility and conversion
            </h2>
            <p className="mt-4 max-w-4xl text-lg text-zinc-600 sm:text-[2rem] sm:leading-tight">
              We combine SEO, paid media, content, and funnel optimization to
              create repeatable growth engines for your business.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="-mx-4 overflow-hidden sm:mx-0">
                <Image
                  src="/images/porfolio_DigitalMarketing.jpg"
                  alt="Digital marketing strategy"
                  width={1400}
                  height={900}
                  className="h-[460px] w-full object-cover"
                  quality={100}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-semibold">Search growth that compounds</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Build SEO foundations that improve discoverability, authority,
                    and qualified traffic over time without relying only on paid spend.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold">Campaigns designed to convert</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Run data-informed campaigns across channels with clear landing
                    flows and conversion tracking tied directly to business goals.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border-2 border-zinc-900 px-8 py-3 text-lg font-semibold !text-zinc-900 transition hover:bg-zinc-900 hover:!text-white"
                >
                  Plan your growth roadmap
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#050906] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(107,255,130,0.12),transparent_48%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(122,255,177,0.08),transparent_46%)]" />
        </div>
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Channel coverage for full-funnel execution
            </h2>
            <p className="mt-5 max-w-5xl text-2xl leading-relaxed text-white/80">
              From first click to qualified lead and retained customer, our team
              aligns each channel to one performance strategy.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {marketingCapabilities.map((item) => (
                <article key={item.title}>
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-sm font-bold tracking-[0.08em] text-zinc-900">
                    {item.badge}
                  </div>
                  <h3 className="mt-5 text-4xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-xl leading-relaxed text-white/70">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#eff0e6] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Performance outcomes we focus on
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {outcomes.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
                >
                  <div className="relative h-52 w-full bg-zinc-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={100}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-3xl font-semibold text-zinc-900">{card.title}</h3>
                    <p className="mt-3 text-lg text-zinc-600">{card.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
