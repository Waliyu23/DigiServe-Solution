import Container from "@/components/layout/Container";
import Image from "next/image";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
];

export default function PortfolioLogos() {
  const items = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-[#050906] py-10 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(33,71,35,0.85),rgba(13,27,15,0.65),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>
      <Container maxWidth="full" className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1220px] overflow-hidden">
          <div className="relative">
            <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-10">
              {items.map((src, idx) => (
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
      </Container>
    </section>
  );
}
