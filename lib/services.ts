export type Service = {
  title: string;
  slug: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: "Software & Technology Development",
    slug: "software-development",
    summary:
      "Custom software, web/mobile apps, SaaS solutions, and AI automation built to scale.",
    items: [
      "Custom software development",
      "Web and mobile app development",
      "Software as a Service (SaaS) solutions",
      "AI agent and chatbot integration",
    ],
  },
  {
    title: "Digital Marketing & SEO",
    slug: "digital-marketing-seo",
    summary:
      "Performance marketing and SEO systems designed to generate leads and revenue.",
    items: [
      "Digital marketing (Facebook, Google, TikTok, Email Marketing, YouTube ads)",
      "Expert SEO services",
    ],
  },
  {
    title: "Design & Branding",
    slug: "design-branding",
    summary:
      "Professional branding and high-converting web design that communicates trust.",
    items: ["Branding and graphic design", "Web design technology"],
  },
  {
    title: "Business & IT Consulting",
    slug: "business-it-consulting",
    summary:
      "Strategy, systems integration, and data management that improve operations.",
    items: [
      "Business consultancy and analysis",
      "IT consulting and systems integration",
      "Data management solutions",
    ],
  },
  {
    title: "Financial Services",
    slug: "financial-services",
    summary:
      "Accounting and reporting support to keep your business compliant and clear.",
    items: [
      "Accounting and bookkeeping",
      "Financial statement preparation and analysis",
    ],
  },
];
