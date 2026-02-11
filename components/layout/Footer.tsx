import Container from "@/components/layout/Container";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050607] text-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-semibold">{site.name}</div>
            <p className="mt-2 text-sm text-white/80">{site.tagline}</p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <div className="mt-3 grid gap-2 text-sm text-white">
              <Link href="/about" className="!text-white hover:text-white">
                About
              </Link>
              <Link href="/services" className="!text-white hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="!text-white hover:text-white">
                Contact
              </Link>
            </div>
            <div className="mt-4 text-sm font-semibold text-white">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-white">
              <div>{site.email}</div>
              <div>{site.phone}</div>
              <div>{site.address}</div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-white">Services</div>
            <div className="mt-3 grid gap-6 text-sm text-white md:grid-cols-2">
              {services.map((service) => (
                <div key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="!text-white hover:text-white"
                  >
                    {service.title}
                  </Link>
                  <div className="mt-2 grid gap-1 text-xs text-white/80">
                    {service.items.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 text-xs text-white/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
