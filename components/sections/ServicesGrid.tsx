import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { services } from "@/lib/services";

const serviceImages: Record<string, string> = {
  "software-development": "/images/services/software.jpg",
  "digital-marketing-seo": "/images/services/digi.jpg",
  "design-branding": "/images/services/Design&Branding.jpg",
  "business-it-consulting": "/images/services/business&IT.jpg",
  "financial-services": "/images/services/Financial_Services.jpg",
};

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#030a0f] text-white">
      <Container maxWidth="full" className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1220px]">
          <h2 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Services designed to scale your business
          </h2>
          <p className="mt-6 max-w-6xl text-2xl leading-tight text-slate-500 sm:text-3xl lg:text-[3.25rem] lg:leading-[1.1]">
            <span className="text-white">
              Build software, launch campaigns, and strengthen operations.
            </span>{" "}
            <span className="cursor-default transition duration-300 hover:bg-[linear-gradient(90deg,#c5ff8f_0%,#7dff8f_45%,#37d67a_100%)] hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_18px_rgba(141,255,155,0.55)]">
              Deliver better customer experiences. Improve business clarity with dependable financial reporting.
            </span>
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1220px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const image = serviceImages[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block h-full"
              >
                <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_22px_55px_rgba(2,6,23,0.18)]">
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                      priority={false}
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                      Service
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-zinc-900">
                      {service.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 translate-y-full bg-white p-6 text-zinc-900 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                      Service
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold">{service.title}</h3>
                    <ul className="mt-4 grid gap-2 text-sm text-zinc-600">
                      {service.items.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 text-sm font-semibold text-zinc-900 underline underline-offset-4">
                      View service
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
