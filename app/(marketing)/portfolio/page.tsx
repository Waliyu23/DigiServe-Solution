import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioBlog from "@/components/sections/PortfolioBlog";
import PortfolioPlan from "@/components/sections/PortfolioPlan";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioBlog />
      <PortfolioPlan />
      <div id="projects">
        <Portfolio showAll />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <CTA />
    </>
  );
}
