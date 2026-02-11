import Container from "@/components/layout/Container";
import MarketingHero from "@/components/sections/MarketingHero";
import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Technology Delivery",
      desc: "Custom software, AI integrations, and digital platforms shipped with production-grade standards.",
    },
    {
      title: "Growth & Marketing",
      desc: "Data-backed campaigns and SEO systems focused on qualified leads and predictable growth.",
    },
    {
      title: "Business Operations",
      desc: "Consulting and financial support that improve reporting clarity and execution discipline.",
    },
  ];

  const principles = [
    "Business-first scoping before implementation",
    "Transparent communication and milestone tracking",
    "Security, reliability, and maintainability by default",
    "Post-launch support focused on measurable outcomes",
  ];

  return (
    <>
      <MarketingHero
        title={`About ${site.name}`}
        rotatingLines={[
          "Engineering teams that ship with confidence",
          "Marketing systems that drive measurable growth",
          "Operations designed for long-term reliability",
          "Execution aligned with business outcomes",
        ]}
        description="DigiServe Solution provides complete digital and IT solutions for modern businesses. We combine technology delivery, performance marketing, and operational support so you can scale confidently."
        primaryButton={{ href: "/contact", label: "Get in touch" }}
        secondaryButton={{ href: "/services", label: "View Services" }}
      />

      <section className="bg-[#040607] text-white">
        <Container maxWidth="full" className="px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Built to support growth at every stage
              </h2>
              <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
                {site.name} combines software, marketing, consulting, and operations support into one execution partner.
                We help teams move faster without sacrificing quality.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-3xl font-semibold text-white">5+</div>
                  <p className="mt-2 text-sm text-slate-300">Core service lines</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-3xl font-semibold text-white">24h</div>
                  <p className="mt-2 text-sm text-slate-300">Response target</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-3xl font-semibold text-white">End-to-end</div>
                  <p className="mt-2 text-sm text-slate-300">Delivery ownership</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/hero-2.jpg"
                alt="DigiServe team and delivery workflow"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#05090b] text-white">
        <Container maxWidth="full" className="px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1220px]">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we bring to your team
            </h3>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h4 className="text-xl font-semibold text-white">{pillar.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#040607] text-white">
        <Container maxWidth="full" className="px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                How we operate
              </h3>
              <div className="mt-6 grid gap-4">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/services"
                className="rounded-full border border-[#bfe87c] px-6 py-3 text-sm font-semibold !text-[#c8ee86] hover:bg-[#c8ee86]/10"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-[#c7ef83] px-6 py-3 text-sm font-semibold !text-zinc-900 hover:bg-[#b9e972]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
