"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { navLinks } from "@/lib/nav";
import { services } from "@/lib/services";
import { ButtonLink } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300 border-b border-white/10"
      style={{ backgroundColor: "rgba(26, 26, 26, 0.95)" }}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" style={{ color: "#ffffff" }} className="font-bold tracking-tight text-xl hover:text-primary transition-colors flex items-center gap-2">
          <span>DigiServe Solution</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.href === "/services" ? (
              <div key={l.href} className="group relative">
                <Link
                  href={l.href}
                  style={{ color: "#ffffff" }}
                  className="text-base font-semibold transition-colors hover:!text-primary"
                >
                  {l.label}
                </Link>

                <div className="invisible absolute left-0 top-full z-50 mt-3 min-w-[300px] translate-y-1 rounded-2xl border border-white/10 bg-[#111412] p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="rounded-xl px-3 py-2 text-sm font-medium !text-white transition hover:bg-white/10 hover:!text-white"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "#ffffff" }}
                className="text-base font-semibold transition-colors hover:!text-primary"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/contact"
            variant="ghost"
            className="hidden sm:inline-flex border-2 border-white hover:bg-white hover:!text-dark font-bold px-6 py-2.5 text-base transition-all !text-white"
          >
            Request a Quote
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="primary"
            className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-2.5 text-base transition-all shadow-lg hover:shadow-xl !text-white"
          >
            Free Consultation
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
