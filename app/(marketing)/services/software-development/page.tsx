import { Container } from '@/components/layout/Container';
import CTA from '@/components/sections/CTA';
import Link from 'next/link';
import SoftwareProjectsShowcase from '@/components/sections/SoftwareProjectsShowcase';
import MarketingHero from '@/components/sections/MarketingHero';

const frameworks = [
  {
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    desc:
      'We use React for scalable, component-driven interfaces that speed up feature delivery and keep UI behavior consistent as products grow.',
  },
  {
    name: 'Vue',
    icon: 'https://cdn.simpleicons.org/vuedotjs/42B883',
    desc:
      'Vue is ideal when teams need clean structure with a gentle learning curve, enabling faster onboarding and lower long-term maintenance cost.',
  },
  {
    name: 'Angular',
    icon: 'https://cdn.simpleicons.org/angular/DD0031',
    desc:
      'Angular works best for complex enterprise frontends where strict architecture, typing, and built-in patterns reduce implementation risk.',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.simpleicons.org/nextdotjs/000000',
    desc:
      'Next.js lets us combine SEO, performance, and modern rendering strategies so customer-facing pages load fast and convert better.',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    desc:
      'Node.js helps us build high-throughput APIs quickly, especially when unified JavaScript across frontend and backend improves delivery speed.',
  },
  {
    name: 'Python',
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    desc:
      'Python is our go-to for automation, data-heavy workflows, and AI-enabled features where development speed and ecosystem breadth are critical.',
  },
  {
    name: 'Java',
    icon: 'https://cdn.simpleicons.org/openjdk/EA2D2E',
    desc:
      'Java is chosen for large-scale core systems that demand strong reliability, robust tooling, and predictable performance under heavy load.',
  },
  {
    name: '.NET',
    icon: 'https://cdn.simpleicons.org/dotnet/512BD4',
    desc:
      '.NET is ideal for Microsoft-centered environments where security controls, maintainability, and enterprise integrations are top priorities.',
  },
  {
    name: 'React Native',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
    desc:
      'React Native helps us deliver Android and iOS apps from one codebase, reducing cost while preserving a strong native-like experience.',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.simpleicons.org/flutter/02569B',
    desc:
      'Flutter is selected when pixel-perfect UI control and high frame-rate performance are essential for polished mobile experiences.',
  },
  {
    name: 'Swift',
    icon: 'https://cdn.simpleicons.org/swift/F05138',
    desc:
      'Swift is used for advanced iOS features and maximum device-level performance when native capability is a core product requirement.',
  },
  {
    name: 'AWS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    desc:
      'AWS gives us mature cloud services and flexible scaling options for production systems that must remain resilient as demand grows.',
  },
  {
    name: 'Azure',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    desc:
      'Azure is a strong fit for organizations with Microsoft ecosystems needing enterprise governance, identity integration, and compliance alignment.',
  },
  {
    name: 'Google Cloud',
    icon: 'https://cdn.simpleicons.org/googlecloud/4285F4',
    desc:
      'Google Cloud is valuable for global deployment, modern data platforms, and analytics-first architectures supporting rapid product decisions.',
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <MarketingHero
        title="Software Development"
        rotatingLines={[
          'Build fast, secure digital products',
          'Launch web and mobile apps with confidence',
          'Scale architecture for growing traffic',
          'Maintain quality with clear delivery cycles',
        ]}
        description="Build scalable, secure, and innovative applications tailored to your business goals and operational needs."
        primaryButton={{ href: '/contact', label: 'Get in touch' }}
        secondaryButton={{ href: '/services', label: 'View Services' }}
        showLogos
      />

      <section className="bg-[#eff0e6] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Where flexibility meets performance
            </h2>
            <p className="mt-4 max-w-4xl text-lg text-zinc-600 sm:text-[2rem] sm:leading-tight">
              No matter your delivery model, you are supported by a reliable
              software engineering approach that drives speed, quality, and growth.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="-mx-4 overflow-hidden sm:mx-0">
                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3J3bmpzZHQ4ZDd0bDh6aTgzeWk3Zzh4aGUxbzk3N2xhcXd3cTFhMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif"
                  alt="Why choose software development visual"
                  className="h-[460px] w-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-semibold">Optionality</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Architect your solution stack as precisely as you need.
                    Choose full-stack delivery, composable systems, or targeted
                    module-by-module implementation.
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-semibold">Composability</h3>
                  <p className="mt-3 text-xl leading-relaxed text-zinc-600">
                    Integrate proven frameworks with custom engineering and
                    third-party services. Designed for interoperability, your
                    software connects exactly how your operations require.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border-2 border-zinc-900 px-8 py-3 text-lg font-semibold !text-zinc-900 transition hover:bg-zinc-900 hover:!text-white"
                >
                  Explore options
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#050906] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(107,255,130,0.12),transparent_48%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(122,255,177,0.08),transparent_46%)]" />
        </div>
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-[1220px]">
            <h2 className="mt-3 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">
              The technology stack built for future-proof software
            </h2>
            <p className="mt-5 max-w-5xl text-2xl leading-relaxed text-white/80">
              We choose each technology based on your product goals, scale
              requirements, and integration needs so your stack stays maintainable,
              secure, and ready for long-term growth.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {frameworks.map((framework) => (
                <article key={framework.name}>
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white">
                    <img
                      src={framework.icon}
                      alt={framework.name}
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                  <h3 className="mt-5 text-4xl font-semibold leading-tight">
                    {framework.name}
                  </h3>
                  <p className="mt-3 text-xl leading-relaxed text-white/70">
                    {framework.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(to_bottom,#eff0e6_0%,#eff0e6_58%,#050906_58%,#050906_100%)] py-16 text-zinc-900 sm:py-20">
        <Container maxWidth="full" className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Software & Technology Development
            </h2>

            <div className="mt-10 grid gap-6 border-t border-zinc-300/70 pt-8 md:grid-cols-3">
              {[
                {
                  title: 'Lightning-fast innovation',
                  desc: 'Deliver new features faster with reusable architectures and accelerated release workflows.',
                },
                {
                  title: 'Enterprise scale',
                  desc: 'Build dependable systems that handle high traffic, complex workflows, and future growth.',
                },
                {
                  title: 'Unparalleled efficiency',
                  desc: 'Streamline collaboration between engineering, product, and operations teams.',
                },
              ].map((point) => (
                <div key={point.title}>
                  <h4 className="text-2xl font-semibold text-zinc-900">{point.title}</h4>
                  <p className="mt-2 text-lg text-zinc-600">{point.desc}</p>
                </div>
              ))}
            </div>

            <SoftwareProjectsShowcase />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
