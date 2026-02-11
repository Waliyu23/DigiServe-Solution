import MarketingHero from "@/components/sections/MarketingHero";

export default function PortfolioHero() {
  return (
    <MarketingHero
      title="Projects that move businesses forward"
      rotatingLines={[
        "Software that scales with your business",
        "Marketing systems that drive real leads",
        "Consulting built for execution speed",
        "Digital products with measurable impact",
      ]}
      description="Explore selected work across software, branding, marketing, and digital products delivered for growing teams."
      primaryButton={{ href: "#projects", label: "Explore Projects" }}
      secondaryButton={{ href: "#contact", label: "Start a Project" }}
      showLogos
    />
  );
}
