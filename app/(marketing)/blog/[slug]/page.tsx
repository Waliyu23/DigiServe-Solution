import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import CTA from '@/components/sections/CTA';
import MarketingHero from '@/components/sections/MarketingHero';

export default function BlogPostPage() {
  return (
    <>
      <MarketingHero
        title="The Future of Web Development in 2025"
        rotatingLines={[
          "Architecture decisions shaping the next wave",
          "AI-assisted workflows for faster delivery",
          "Performance-first systems and edge patterns",
          "Practical strategies for modern product teams",
        ]}
        description="Deep dives on technology trends and execution frameworks to help teams build more effectively."
        primaryButton={{ href: '/contact', label: 'Discuss Your Project' }}
        secondaryButton={{ href: '/blog', label: 'Back to Blog' }}
      />

      <article className="py-16 bg-gray-50">
        <Container maxWidth="2xl">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-primary hover:text-primary/80 mb-4 inline-block">
              ← Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Future of Web Development in 2025</h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
              <span>February 8, 2025</span>
              <span>•</span>
              <span>By John Doe</span>
              <span>•</span>
              <span>8 min read</span>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary to-secondary rounded-lg mb-12" />

            <div className="prose prose-lg max-w-none">
              <p>
                Web development is rapidly evolving, and 2025 brings exciting new possibilities and
                challenges. In this article, we'll explore the key trends that will shape the future of
                web development.
              </p>

              <h2>1. AI-Powered Development Tools</h2>
              <p>
                Artificial intelligence is revolutionizing how we build web applications. From code
                generation to bug detection, AI is becoming an integral part of the development workflow.
              </p>

              <h2>2. Edge Computing and Distributed Architecture</h2>
              <p>
                Edge computing is bringing computation closer to data sources, resulting in faster load
                times and better performance. This shift is changing how we architect modern web
                applications.
              </p>

              <h2>3. Web Components and Interoperability</h2>
              <p>
                Web components are becoming more standardized, allowing developers to build reusable,
                encapsulated components that work across different frameworks.
              </p>

              <h2>Conclusion</h2>
              <p>
                The future of web development is exciting and full of possibilities. By staying updated
                on these trends and adapting our practices, we can build better, faster, and more scalable
                web applications.
              </p>
            </div>
          </div>
        </Container>
      </article>

      <section className="py-12 bg-white">
        <Container maxWidth="2xl">
          <div className="max-w-3xl mx-auto border-t pt-12">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Digital Transformation: A Complete Guide', date: '2025-02-05' },
                { title: '10 SEO Best Practices for 2025', date: '2025-02-02' },
              ].map((post, idx) => (
                <Link key={idx} href="/blog" className="p-4 border rounded-lg hover:border-primary transition">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <p className="font-semibold hover:text-primary">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
