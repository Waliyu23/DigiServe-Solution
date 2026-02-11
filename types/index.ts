export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  date: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  content: string;
  image?: string;
  tags: string[];
  date: Date;
  readingTime: string;
}
