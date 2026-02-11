import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { services } from "@/lib/services";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import MarketingHero from "@/components/sections/MarketingHero";

export const metadata = {
  title: "Services",
};

const serviceImages: Record<string, string> = {
  "software-development": "/images/services/software.jpg",
  "digital-marketing-seo": "/images/services/digi.jpg",
  "design-branding": "/images/services/Design&Branding.jpg",
  "business-it-consulting": "/images/services/business&IT.jpg",
  "financial-services": "/images/services/Financial_Services.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <MarketingHero
        title="Services designed to scale your business"
        rotatingLines={[
          "Build software with confidence",
          "Launch growth-focused campaigns",
          "Optimize operations with clarity",
          "Scale with ongoing support",
        ]}
        description="From product engineering to marketing and consulting, DigiServe delivers practical systems that improve performance and outcomes."
        primaryButton={{ href: "#service-cards", label: "Explore Services" }}
        secondaryButton={{ href: "/contact", label: "Talk to Us" }}
        showLogos
      />

      <section
        id="service-cards"
        className="relative overflow-hidden border-t border-white/10 bg-[#050906] text-white"
      >
        <Container maxWidth="full" className="px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1220px] text-center">
            <h2 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Explore our core service areas
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1220px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_22px_55px_rgba(2,6,23,0.18)]">
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
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
            ))}
          </div>
        </Container>
      </section>

      <Contact />
      <CTA />
    </>
  );
}
