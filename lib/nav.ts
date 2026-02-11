export type NavLink = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
