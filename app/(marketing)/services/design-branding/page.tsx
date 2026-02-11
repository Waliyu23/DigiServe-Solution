import { Container } from '@/components/layout/Container';
import MarketingHero from '@/components/sections/MarketingHero';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';
import Link from 'next/link';

const designCapabilities = [
  {
    title: 'Brand Strategy',
    desc: 'Positioning, messaging, and visual direction aligned to your audience and business goals.',
    badge: 'BRD',
  },
  {
    title: 'Identity Systems',
    desc: 'Logos, typography, and color systems built for consistency across every touchpoint.',
    badge: 'ID',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered digital experiences that improve clarity, engagement, and conversion.',
    badge: 'UX',
  },
  {
    title: 'Design Guidelines',
    desc: 'Scalable brand and interface standards your teams can apply confidently.',
    badge: 'SYS',
  },
  {
    title: 'Marketing Collateral',
    desc: 'Campaign assets and presentation materials designed for credibility and impact.',
    badge: 'MKT',
  },
  {
    title: 'Prototype & Handoff',
    desc: 'Interactive prototypes and implementation-ready files for smooth development execution.',
    badge: 'DEV',
  },
];

const outcomes = [
  {
    title: 'Stronger brand recognition',
    desc: 'Create a visual identity customers can quickly recognize and trust.',
    image: '/images/services/Design&Branding.jpg',
  },
  {
    title: 'Better product usability',
    desc: 'Design clear interactions that reduce friction and improve user outcomes.',
    image: '/projects/project_6-OnlineStoreApp.jpg',
  },
  {
    title: 'Faster design-to-launch cycles',
    desc: 'Use shared systems and standards to accelerate delivery across teams.',
    image: '/projects/project_7-brochure.jpg',
  },
];

export default function DesignBrandingPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Visual Excellence"
        title="Design & Branding"
        rotatingLines={[
          'Build a brand customers remember',
          'Create interfaces that drive action',
          'Align visuals with business positioning',
          'Turn identity into market advantage',
        ]}
        description="Create memorable brands that resonate with your target audience."
        primaryButton={{ href: '/contact', label: 'Get in touch' }}
        secondaryButton={{ href: '/portfolio', label: 'View Projects' }}
        showLogos
      />

      <section className="bg-[#eff0e6] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Design systems that strengthen how your brand performs
            </h2>
            <p className="mt-4 max-w-4xl text-lg text-zinc-600 sm:text-[2rem] sm:leading-tight">
              From brand identity to digital interfaces, we design cohesive
              experiences that improve recognition, trust, and conversion.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="-mx-4 overflow-hidden sm:mx-0">
                <Image
                  src="/images/services/Design&Branding.jpg"
                  alt="Design and branding service"
                  width={1400}
                  height={900}
                  className="h-[460px] w-full object-cover"
                  quality={100}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-semibold">Consistent brand expression</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Align every visual output with one clear identity so your
                    audience experiences the same brand standard everywhere.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold">Design that drives action</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Build experiences that are not only visually strong, but also
                    conversion-focused, accessible, and easy to navigate.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border-2 border-zinc-900 px-8 py-3 text-lg font-semibold !text-zinc-900 transition hover:bg-zinc-900 hover:!text-white"
                >
                  Start your design roadmap
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
              Design coverage across brand and product touchpoints
            </h2>
            <p className="mt-5 max-w-5xl text-2xl leading-relaxed text-white/80">
              We combine strategy, visual systems, and UI execution so your
              brand remains clear and your digital experiences stay consistent.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {designCapabilities.map((item) => (
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
              Design outcomes we optimize for
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
