import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const highlights = [
  {
    title: "Rapid delivery, proven results",
    desc: "Launch faster with a focused roadmap, agile sprints, and clear milestones.",
    link: "See how we deliver",
  },
  {
    title: "Built to scale",
    desc: "Reliable systems for growth, traffic spikes, and multi‑channel operations.",
    link: "Explore scalable systems",
  },
  {
    title: "Operational efficiency",
    desc: "Automation and smart workflows that reduce cost and improve output.",
    link: "Discover efficiency wins",
  },
];

const projects = [
  {
    title: "Educational Website",
    desc:
      "Engaging course discovery, modern UI, and clear conversion paths for learners.",
    image: "/projects/project_1-educationalWebsite.jpg",
  },
  {
    title: "NGO Website",
    desc:
      "Mission‑driven storytelling with donation flows and impact reporting.",
    image: "/projects/project_2-NGOWebsite.jpg",
  },
  {
    title: "E‑commerce Website",
    desc:
      "Product discovery, optimized checkout, and mobile-first shopping experiences.",
    image: "/projects/project_3-ecommerceWebsite.jpg",
  },
  {
    title: "Food Delivery App",
    desc:
      "Menu browsing, real-time order tracking, and streamlined checkout flows.",
    image: "/projects/project_4-foodApp.jpg",
  },
  {
    title: "AI Chatbot",
    desc:
      "Conversational support with automation, context-aware replies, and analytics.",
    image: "/projects/project_5-aiChatBot.jpg",
  },
  {
    title: "Online Store App",
    desc:
      "Scalable storefront app with inventory sync and promotional tools.",
    image: "/projects/project_6-OnlineStoreApp.jpg",
  },
  {
    title: "Brochure Design",
    desc:
      "High‑impact collateral that communicates value clearly and quickly.",
    image: "/projects/project_7-brochure.jpg",
  },
];

type PortfolioProps = {
  showAll?: boolean;
};

export default function Portfolio({ showAll = false }: PortfolioProps) {
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="border-t border-white/10 bg-[#050906] text-white">
      <Container maxWidth="full" className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1220px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Digital growth at the core
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              We help businesses in Kuala Lumpur and beyond design, build, and
              market digital experiences that drive measurable growth.
            </p>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                <div className="mt-3 text-sm font-semibold text-emerald-200 underline underline-offset-4">
                  {item.link}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <a
                key={project.title}
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
              >
                <div className="relative h-48 w-full bg-emerald-100/60 sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-zinc-900">{project.title}</h4>
                  <p className="mt-3 text-sm text-zinc-600">{project.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {!showAll && (
            <div className="mt-10 flex justify-center">
              <Link
                href="/portfolio"
                className="rounded-full border border-[#9adf6a] bg-black/20 px-7 py-3 text-base font-semibold !text-white shadow-[0_10px_26px_rgba(0,0,0,0.35)] ring-1 ring-[#9adf6a]/50 hover:bg-[#9adf6a]/10 focus-visible:ring-[#bffb7a] focus-visible:ring-offset-[#0a0f0b] mix-blend-normal"
              >
                View more projects
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
