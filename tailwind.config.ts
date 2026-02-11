import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        heroFade1: {
          "0%, 30%": { opacity: "1" },
          "33%, 100%": { opacity: "0" },
        },
        heroFade2: {
          "0%, 30%": { opacity: "0" },
          "33%, 63%": { opacity: "1" },
          "66%, 100%": { opacity: "0" },
        },
        heroFade3: {
          "0%, 63%": { opacity: "0" },
          "66%, 96%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "hero-1": "heroFade1 18s infinite",
        "hero-2": "heroFade2 18s infinite",
        "hero-3": "heroFade3 18s infinite",
      },
      colors: {
        primary: "#0066cc",
        secondary: "#ff6b35",
        dark: "#1a1a1a",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
