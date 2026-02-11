"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Scalable web experiences",
    desc: "Build conversion-focused web products with robust performance and reliable delivery.",
    image: "/projects/project_3-ecommerceWebsite.jpg",
  },
  {
    title: "Fast and immersive platforms",
    desc: "Deploy high-impact applications that support operational speed and product flexibility.",
    image: "/projects/project_6-OnlineStoreApp.jpg",
  },
  {
    title: "Developer-ready foundations",
    desc: "Use maintainable architecture, clear standards, and modular systems for long-term growth.",
    image: "/projects/project_5-aiChatBot.jpg",
  },
  {
    title: "Mobile-first product delivery",
    desc: "Ship mobile-friendly product experiences with smooth performance across key customer journeys.",
    image: "/projects/project_4-foodApp.jpg",
  },
  {
    title: "Story-led digital platforms",
    desc: "Create informative, conversion-ready websites with clear information architecture and messaging.",
    image: "/projects/project_1-educationalWebsite.jpg",
  },
  {
    title: "Integrated growth systems",
    desc: "Connect product, marketing, and analytics workflows to support better decisions and faster iteration.",
    image: "/projects/project_2-NGOWebsite.jpg",
  },
];

export default function SoftwareProjectsShowcase() {
  const [start, setStart] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStart((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  const visible = [
    cards[start],
    cards[(start + 1) % cards.length],
    cards[(start + 2) % cards.length],
  ];

  return (
    <div className="mt-10">
      <div className="grid gap-6 md:grid-cols-3">
        {visible.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-opacity duration-500"
          >
            <button
              type="button"
              onClick={() => setActiveImage(card.image)}
              className="relative block h-48 w-full bg-zinc-100"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={100}
              />
            </button>
            <div className="p-6">
              <h4 className="text-3xl font-semibold text-zinc-900">{card.title}</h4>
              <p className="mt-3 text-lg text-zinc-600">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`h-2.5 w-2.5 rounded-full ${start === idx ? "bg-zinc-900" : "bg-zinc-400"}`}
          />
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-white px-3 py-1 text-sm font-semibold text-zinc-900"
            >
              Close
            </button>
            <Image
              src={activeImage}
              alt="Project preview"
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
