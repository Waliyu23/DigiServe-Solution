import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Process />
      <Portfolio showAll={false} />
      <Contact />
      <CTA />
    </>
  );
}
