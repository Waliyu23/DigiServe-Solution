import Container from "@/components/layout/Container";
import MarketingHero from "@/components/sections/MarketingHero";
import { services } from "@/lib/services";
import { ButtonLink } from "@/components/ui/Button";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Service" };
  return { title: s.title, description: s.summary };
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServiceDetailPageContent params={params} />;
}

async function ServiceDetailPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return notFound();

  return (
    <>
      <MarketingHero
        title={s.title}
        rotatingLines={[
          "Execution aligned with your business goals",
          "Delivery quality built into every milestone",
          "Scalable systems for sustained growth",
          "Clear collaboration from planning to launch",
        ]}
        description={s.summary}
        primaryButton={{ href: "/contact", label: "Request a Proposal" }}
        secondaryButton={{ href: "/services", label: "Back to Services" }}
        showLogos
      />

      <Container className="py-14">
        <div className="max-w-3xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">
              What we deliver
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
              {s.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a Proposal</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Back to Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
