import Container from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050906] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(33,71,35,0.9),rgba(13,27,15,0.7),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>
      <Container maxWidth="full" className="relative px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to upgrade your business digitally?
          </h3>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Get a free consultation and a clear roadmap for your next steps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href="/contact"
              className="rounded-full bg-[#3a5f1a] px-7 py-3 text-base font-semibold !text-white shadow-[0_10px_26px_rgba(0,0,0,0.35)] ring-1 ring-[#9adf6a] hover:bg-[#335517] focus-visible:ring-[#bffb7a] focus-visible:ring-offset-[#0a0f0b] mix-blend-normal"
            >
              Free Consultation
            </ButtonLink>
            <ButtonLink
              href="/services"
              className="rounded-full border border-white/80 bg-white/10 px-7 py-3 text-base font-semibold !text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] shadow-[0_10px_26px_rgba(0,0,0,0.25)] hover:border-white hover:bg-white/20 focus-visible:ring-white/70 focus-visible:ring-offset-[#0a0f0b]"
            >
              View Services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
