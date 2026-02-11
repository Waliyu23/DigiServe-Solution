import Image from "next/image";
import Container from "@/components/layout/Container";

const plans = [
  {
    title: "Software Development",
    desc:
      "Custom web platforms, mobile apps, and scalable systems built for performance, security, and growth.",
    cta: "Explore software services",
    image: "/images/porfolio_software.jpg",
  },
  {
    title: "Digital Marketing & SEO",
    desc:
      "Data-driven campaigns, SEO optimization, and content strategies that generate qualified leads and revenue.",
    cta: "Explore marketing services",
    image: "/images/porfolio_DigitalMarketing.jpg",
  },
  {
    title: "Business & IT Consulting",
    desc:
      "Strategic planning, process improvement, and technology consulting to streamline operations and scale confidently.",
    cta: "Explore consulting services",
    image: "/images/portfolio_ITConsulting.jpg",
  },
];

export default function PortfolioPlan() {
  return (
    <section className="relative z-10 -mt-6 bg-[#050906] pb-14 pt-0 text-zinc-900 sm:-mt-8">
      <Container maxWidth="full" className="px-0">
        <div className="w-full overflow-hidden rounded-t-[2.5rem] bg-[#f2f1ec]">
          <div className="mx-auto max-w-[1220px] min-h-[700px] p-4 sm:p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
            What We Build
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            End-to-end digital services for business growth
          </h2>
          <p className="mt-3 max-w-3xl text-base text-zinc-600">
            From software engineering to growth marketing and consulting, DigiServe
            helps you launch faster, improve efficiency, and scale with clarity.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {plans.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
              >
                <div className="relative h-52 w-full bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={100}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[2rem] font-semibold leading-none">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {item.desc}
                  </p>
                  <a
                    href="/contact"
                    className="mt-5 inline-block text-sm font-semibold text-zinc-900 underline underline-offset-4"
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
