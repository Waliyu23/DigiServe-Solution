import { Container } from '@/components/layout/Container';
import MarketingHero from '@/components/sections/MarketingHero';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';
import Link from 'next/link';

const financeCapabilities = [
  {
    title: 'Financial Planning',
    desc: 'Build practical financial plans aligned with your growth stage and operating priorities.',
    badge: 'PLAN',
  },
  {
    title: 'Bookkeeping Systems',
    desc: 'Maintain clean, consistent records that support reporting accuracy and decision-making.',
    badge: 'BOOK',
  },
  {
    title: 'Tax & Compliance',
    desc: 'Stay prepared for filing and regulatory requirements with structured, proactive support.',
    badge: 'TAX',
  },
  {
    title: 'Payroll Operations',
    desc: 'Set up dependable payroll workflows that reduce errors and protect employee trust.',
    badge: 'PAY',
  },
  {
    title: 'Reporting & Analysis',
    desc: 'Turn financial data into clear monthly insights for management and stakeholder planning.',
    badge: 'RPT',
  },
  {
    title: 'Advisory Support',
    desc: 'Get ongoing guidance for risk management, expansion planning, and cash flow control.',
    badge: 'ADV',
  },
];

const outcomes = [
  {
    title: 'Clear financial visibility',
    desc: 'Gain confidence with accurate statements and structured reporting cycles.',
    image: '/images/services/Financial_Services.jpg',
  },
  {
    title: 'Improved cash flow control',
    desc: 'Track inflows and outflows better to support stable operations and smarter planning.',
    image: '/projects/project_1-educationalWebsite.jpg',
  },
  {
    title: 'Stronger compliance readiness',
    desc: 'Reduce risk by keeping financial processes, filings, and documentation audit-ready.',
    image: '/projects/project_2-NGOWebsite.jpg',
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Financial Excellence"
        title="Financial Services"
        rotatingLines={[
          'Improve financial clarity and control',
          'Strengthen compliance and reporting quality',
          'Plan growth with dependable forecasting',
          'Reduce risk with proactive advisory support',
        ]}
        description="Comprehensive financial solutions for growing businesses."
        primaryButton={{ href: '/contact', label: 'Get in touch' }}
        secondaryButton={{ href: '/portfolio', label: 'View Projects' }}
        showLogos
      />

      <section className="bg-[#eff0e6] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Financial operations that support confident business decisions
            </h2>
            <p className="mt-4 max-w-4xl text-lg text-zinc-600 sm:text-[2rem] sm:leading-tight">
              We help teams establish dependable accounting, reporting, and
              advisory workflows so leadership can move with clarity.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="-mx-4 overflow-hidden sm:mx-0">
                <Image
                  src="/images/services/Financial_Services.jpg"
                  alt="Financial services support"
                  width={1400}
                  height={900}
                  className="h-[460px] w-full object-cover"
                  quality={100}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-semibold">Reliable reporting discipline</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Keep leadership informed with structured monthly reporting
                    and financial views tailored to strategic decision-making.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold">Proactive financial guidance</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Strengthen planning, compliance, and risk controls with
                    advisory support that adapts to your business stage.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border-2 border-zinc-900 px-8 py-3 text-lg font-semibold !text-zinc-900 transition hover:bg-zinc-900 hover:!text-white"
                >
                  Talk to a finance specialist
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
              Financial coverage across planning, compliance, and control
            </h2>
            <p className="mt-5 max-w-5xl text-2xl leading-relaxed text-white/80">
              We combine accounting discipline and advisory insight so your
              business can scale without losing financial clarity.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {financeCapabilities.map((item) => (
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
              Financial outcomes we focus on
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
