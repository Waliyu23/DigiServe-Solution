import Container from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1115] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-100 animate-hero-1 [animation-name:heroFade1,heroZoom] [animation-duration:18s,18s] [animation-iteration-count:infinite,infinite] [animation-timing-function:linear,linear]" />
        <div className="absolute inset-0 bg-[url('/images/hero-2.jpg')] bg-cover bg-center opacity-0 animate-hero-2 [animation-name:heroFade2,heroZoom] [animation-duration:18s,18s] [animation-iteration-count:infinite,infinite] [animation-timing-function:linear,linear]" />
        <div className="absolute inset-0 bg-[url('/images/hero-3.jpg')] bg-cover bg-center opacity-0 animate-hero-3 [animation-name:heroFade3,heroZoom] [animation-duration:18s,18s] [animation-iteration-count:infinite,infinite] [animation-timing-function:linear,linear]" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Container
        maxWidth="full"
        className="relative flex min-h-[78vh] items-end pb-6 sm:pb-10 px-1 sm:px-2"
      >
        <div className="max-w-3xl pb-0">
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white drop-shadow sm:text-5xl md:text-6xl">
            Complete Digital & IT Solutions for Modern Businesses
          </h1>

          <div className="mt-4 h-20 overflow-hidden">
            <div className="relative h-full text-4xl font-semibold tracking-tight text-white/95 drop-shadow sm:text-5xl md:text-6xl">
              <span className="hero-rotate absolute inset-0 leading-[1.1]">
                Fast response support
              </span>
              <span className="hero-rotate hero-rotate-delay-1 absolute inset-0 leading-[1.1]">
                Business-first strategy
              </span>
              <span className="hero-rotate hero-rotate-delay-2 absolute inset-0 leading-[1.1]">
                Secure scalable builds
              </span>
              <span className="hero-rotate hero-rotate-delay-3 absolute inset-0 leading-[1.1]">
                Clear reporting
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="/contact"
              className="rounded-full bg-zinc-900/90 px-8 py-4 text-lg font-semibold !text-white shadow-lg shadow-black/30 ring-1 ring-white/20 hover:bg-zinc-900 !hover:text-white"
            >
              Free Consultation
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg text-white hover:bg-white/20"
            >
              Explore Services
            </ButtonLink>
          </div>

          
        </div>
      </Container>
    </section>
  );
}
