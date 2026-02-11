import Image from "next/image";
import Container from "@/components/layout/Container";

const steps = [
  {
    title: "Discover",
    desc: "Understand your goals, constraints, and timelines.",
    image: "/images/discovery.jpg",
  },
  {
    title: "Plan",
    desc: "Define scope, architecture, and delivery milestones.",
    image: "/images/Plan.webp",
  },
  {
    title: "Build",
    desc: "Implement with quality, security, and performance in mind.",
    image: "/images/Build.webp",
  },
  {
    title: "Support",
    desc: "Optimize, maintain, and scale with ongoing support.",
    image: "/images/Support.webp",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#030a0f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>
      <Container maxWidth="full" className="relative py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1220px]">
          <div className="text-left">
            <h2 className="max-w-6xl text-2xl leading-tight text-slate-500 sm:text-3xl lg:text-[3.25rem] lg:leading-[1.1]">
              <span className="text-white">
                A simple process that delivers results.
              </span>{" "}
              <span className="cursor-default transition duration-300 hover:bg-[linear-gradient(90deg,#c5ff8f_0%,#7dff8f_45%,#37d67a_100%)] hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_18px_rgba(141,255,155,0.55)]">
                Clear steps. Transparent communication.
              </span>{" "}
              <span className="cursor-default transition duration-300 hover:bg-[linear-gradient(90deg,#c5ff8f_0%,#7dff8f_45%,#37d67a_100%)] hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_18px_rgba(141,255,155,0.55)]">
                Measurable outcomes.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:pl-20">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.25)] sm:p-8"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 sm:h-80 lg:h-96">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
