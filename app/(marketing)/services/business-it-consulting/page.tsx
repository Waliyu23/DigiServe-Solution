import { Container } from '@/components/layout/Container';
import MarketingHero from '@/components/sections/MarketingHero';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';
import Link from 'next/link';

const consultingCapabilities = [
  {
    title: 'Technology Roadmapping',
    desc: 'Prioritize initiatives, budget effectively, and align execution with business objectives.',
    badge: 'PLAN',
  },
  {
    title: 'Infrastructure Assessment',
    desc: 'Evaluate current architecture, identify risks, and define practical modernization steps.',
    badge: 'ARCH',
  },
  {
    title: 'Cloud & Systems Integration',
    desc: 'Connect platforms and workflows to improve data flow, reliability, and operational speed.',
    badge: 'INT',
  },
  {
    title: 'Security & Governance',
    desc: 'Establish standards that protect critical systems while enabling safe scale.',
    badge: 'SEC',
  },
  {
    title: 'Process Optimization',
    desc: 'Reduce bottlenecks across teams through clearer workflows and operating models.',
    badge: 'OPS',
  },
  {
    title: 'Change Enablement',
    desc: 'Support rollout and adoption so strategy turns into measurable execution outcomes.',
    badge: 'ADPT',
  },
];

const outcomes = [
  {
    title: 'Stronger technology alignment',
    desc: 'Ensure IT investments support the business priorities that matter most.',
    image: '/images/services/business&IT.jpg',
  },
  {
    title: 'Lower operational friction',
    desc: 'Integrate systems and workflows to improve speed, visibility, and collaboration.',
    image: '/projects/project_5-aiChatBot.jpg',
  },
  {
    title: 'More predictable delivery',
    desc: 'Use clear roadmaps and governance to reduce risk across critical initiatives.',
    image: '/projects/project_2-NGOWebsite.jpg',
  },
];

export default function ITConsultingPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Strategic IT Solutions"
        title="Business IT Consulting"
        rotatingLines={[
          'Align technology with business priorities',
          'Modernize systems with lower delivery risk',
          'Improve governance, security, and control',
          'Build roadmaps that teams can execute',
        ]}
        description="Transform your business with strategic IT solutions and expert guidance."
        primaryButton={{ href: '/contact', label: 'Get in touch' }}
        secondaryButton={{ href: '/portfolio', label: 'View Projects' }}
        showLogos
      />

      <section className="bg-[#eff0e6] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Consulting built to connect strategy and execution
            </h2>
            <p className="mt-4 max-w-4xl text-lg text-zinc-600 sm:text-[2rem] sm:leading-tight">
              We help teams make better IT decisions, modernize systems, and
              execute transformation roadmaps with less delivery risk.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="-mx-4 overflow-hidden sm:mx-0">
                <Image
                  src="/images/services/business&IT.jpg"
                  alt="Business IT consulting service"
                  width={1400}
                  height={900}
                  className="h-[460px] w-full object-cover"
                  quality={100}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-semibold">Clear prioritization</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Focus resources on initiatives that drive measurable value,
                    while sequencing delivery for technical and operational reality.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold">Execution confidence</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Turn strategy into practical implementation plans with
                    governance, stakeholder alignment, and clear accountability.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border-2 border-zinc-900 px-8 py-3 text-lg font-semibold !text-zinc-900 transition hover:bg-zinc-900 hover:!text-white"
                >
                  Book a consulting session
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
              Consulting coverage across systems, teams, and operations
            </h2>
            <p className="mt-5 max-w-5xl text-2xl leading-relaxed text-white/80">
              We support strategic planning through implementation so your
              organization can execute change with control and speed.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {consultingCapabilities.map((item) => (
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
              Consulting outcomes we deliver
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
