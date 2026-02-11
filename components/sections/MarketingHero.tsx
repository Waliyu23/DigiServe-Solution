import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

type HeroButton = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type MarketingHeroProps = {
  eyebrow?: string;
  title: string;
  rotatingLines?: string[];
  description: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  showLogos?: boolean;
  logos?: string[];
};

const defaultLogos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
];

export default function MarketingHero({
  eyebrow,
  title,
  rotatingLines = [],
  description,
  primaryButton,
  secondaryButton,
  showLogos = false,
  logos = defaultLogos,
}: MarketingHeroProps) {
  const marqueeItems = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-[#050906] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(33,71,35,0.85),rgba(13,27,15,0.65),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>

      <Container maxWidth="full" className="relative px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#d7efb2]">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              {title}
            </h1>

            {rotatingLines.length > 0 ? (
              <div className="mt-4 h-20 overflow-hidden sm:h-24 lg:h-28">
                <div className="relative h-full text-3xl font-semibold leading-[1.15] tracking-tight text-white/95 sm:text-4xl lg:text-5xl">
                  {rotatingLines.slice(0, 4).map((line, idx) => (
                    <span
                      key={line}
                      className="hero-rotate absolute inset-0 leading-[1.15]"
                      style={{ animationDelay: `${idx * 3}s` }}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">{description}</p>
          </div>

          {primaryButton || secondaryButton ? (
            <div className="mt-2 flex flex-wrap items-center gap-4 lg:mb-2 lg:justify-end">
              {primaryButton ? (
                <Link
                  href={primaryButton.href}
                  className="rounded-full bg-[#c7ef83] px-7 py-3 text-base font-semibold !text-zinc-900 shadow-[0_10px_24px_rgba(0,0,0,0.28)] hover:bg-[#b9e972]"
                >
                  {primaryButton.label}
                </Link>
              ) : null}
              {secondaryButton ? (
                <Link
                  href={secondaryButton.href}
                  className="rounded-full border border-[#bfe87c] bg-transparent px-7 py-3 text-base font-semibold !text-[#c8ee86] hover:bg-[#c8ee86]/10"
                >
                  {secondaryButton.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        {showLogos ? (
          <div className="mx-auto mt-16 max-w-[1220px] overflow-hidden pt-6 sm:mt-20 sm:pt-8">
            <div className="relative">
              <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-10">
                {marqueeItems.map((src, idx) => (
                  <Image
                    key={`${src}-${idx}`}
                    src={src}
                    alt={`Company logo ${idx + 1}`}
                    width={220}
                    height={72}
                    className="h-16 w-auto object-contain opacity-95"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
