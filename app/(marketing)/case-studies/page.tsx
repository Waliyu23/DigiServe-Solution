import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import MarketingHero from '@/components/sections/MarketingHero';

export default function CaseStudiesPage() {
  const studies = [
    {
      id: '1',
      slug: 'ai-startup-success',
      title: 'AI-Powered Platform Launch',
      client: 'Innovation Labs',
      description: 'Developed a machine learning platform that increased efficiency by 300%',
    },
    {
      id: '2',
      slug: 'retail-transformation',
      title: 'E-Commerce Transformation',
      client: 'Fashion Retailer',
      description: 'Built new platform resulting in 250% increase in online sales',
    },
    {
      id: '3',
      slug: 'enterprise-erp',
      title: 'Enterprise ERP Implementation',
      client: 'Global Corporation',
      description: 'Successful implementation saving $2M annually in operational costs',
    },
  ];

  return (
    <>
      <MarketingHero
        title="Case Studies"
        rotatingLines={[
          "Real outcomes from real delivery teams",
          "Systems launched with measurable impact",
          "Projects built for scale and reliability",
          "Execution that drives business results",
        ]}
        description="See how we help teams launch digital products, improve performance, and unlock operational gains."
        primaryButton={{ href: "/contact", label: "Start a Project" }}
        secondaryButton={{ href: "/portfolio", label: "View Portfolio" }}
      />

      <section className="py-16">
        <Container maxWidth="2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">
            Success Stories
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {studies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.slug}`}>
                <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 h-48 bg-gradient-to-br from-primary to-secondary rounded-lg" />
                  <h3 className="text-xl font-bold mb-2 text-dark">{study.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{study.client}</p>
                  <p className="text-gray-600 text-sm">{study.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
