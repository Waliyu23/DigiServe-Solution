import Container from "@/components/layout/Container";

const updates = [
  {
    tag: "Industry Recognition",
    title: "Recognized among top digital delivery teams in 2026",
    desc:
      "Our work was highlighted for execution quality, speed, and measurable business outcomes across client projects.",
    cta: "Read the report",
  },
  {
    tag: "Analyst Recognition",
    title: "DigiServe shortlisted in regional innovation evaluation",
    desc:
      "Independent analysts noted our ability to combine strategy, design, and engineering into faster launch cycles.",
    cta: "View highlights",
  },
  {
    tag: "Partnerships",
    title: "New delivery partnerships expand our implementation reach",
    desc:
      "We now collaborate with more ecosystem partners to accelerate integrations and reduce time-to-market.",
    cta: "Read announcement",
  },
];

export default function PortfolioBlog() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#101712] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(137,255,166,0.12),transparent_45%)]" />
      </div>
      <Container maxWidth="full" className="relative px-4 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1220px] gap-8 md:grid-cols-3 md:gap-0">
          {updates.map((item, idx) => (
            <article
              key={item.title}
              className={`px-0 md:px-10 ${idx !== 0 ? "md:border-l md:border-white/20" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#e8f7c6]">
                {item.tag}
              </p>
              <h3 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-white/70">
                {item.desc}
              </p>
              <a
                href="/portfolio"
                className="mt-7 inline-block text-[1.75rem] font-semibold !text-white underline underline-offset-4"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#edf8d0] !text-black"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Pause"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#edf8d0] !text-black"
          >
            II
          </button>
          <button
            type="button"
            aria-label="Next"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#edf8d0] !text-black"
          >
            →
          </button>
        </div>
      </Container>
    </section>
  );
}
