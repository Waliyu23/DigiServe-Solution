import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import MarketingHero from '@/components/sections/MarketingHero';

export default function BlogPage() {
  const posts = [
    {
      id: '1',
      slug: 'future-of-web-development',
      title: 'The Future of Web Development in 2025',
      excerpt: 'Exploring the latest trends and technologies shaping modern web development...',
      date: '2025-02-08',
      author: 'John Doe',
    },
    {
      id: '2',
      slug: 'digital-transformation-guide',
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Everything you need to know about modernizing your business...',
      date: '2025-02-05',
      author: 'Jane Smith',
    },
    {
      id: '3',
      slug: 'seo-best-practices',
      title: '10 SEO Best Practices for 2025',
      excerpt: 'Boost your search rankings with these proven strategies...',
      date: '2025-02-02',
      author: 'Mike Johnson',
    },
  ];

  return (
    <>
      <MarketingHero
        title="Latest Articles"
        rotatingLines={[
          "Insights for software and digital growth",
          "Practical playbooks for product teams",
          "Campaign and operations lessons learned",
          "Execution strategies that scale",
        ]}
        description="Read our latest thinking on software engineering, marketing, operations, and digital execution."
        primaryButton={{ href: "/contact", label: "Talk to Us" }}
        secondaryButton={{ href: "/services", label: "View Services" }}
      />

      <section className="py-16">
        <Container maxWidth="2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">
            Insights &amp; Ideas
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full flex flex-col transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg" />
                  <h3 className="text-xl font-bold mb-2 text-dark flex-grow">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()} • {post.author}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
