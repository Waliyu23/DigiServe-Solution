import { Container } from '@/components/layout/Container';
import CTA from '@/components/sections/CTA';
import MarketingHero from '@/components/sections/MarketingHero';

export default function CaseStudyPage() {
  return (
    <>
      <MarketingHero
        title="AI-Powered Platform Launch"
        rotatingLines={[
          "From fragmented tools to one scalable platform",
          "Automation that unlocks operational efficiency",
          "Cloud-native systems ready for expansion",
          "Measurable outcomes from focused execution",
        ]}
        description="See how we transformed complex workflows into a reliable platform that delivered speed, stability, and growth."
        primaryButton={{ href: '/contact', label: 'Start a Similar Project' }}
        secondaryButton={{ href: '/case-studies', label: 'Back to Case Studies' }}
      />

      <section className="bg-gray-100 py-16">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">AI-Powered Platform Launch</h1>
              <div className="h-96 bg-gradient-to-br from-primary to-secondary rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-lg h-fit">
              <h3 className="font-semibold text-gray-600 mb-2">CLIENT</h3>
              <p className="text-2xl font-bold mb-6">Innovation Labs</p>

              <h3 className="font-semibold text-gray-600 mb-2">INDUSTRY</h3>
              <p className="text-lg font-bold mb-6">Technology</p>

              <h3 className="font-semibold text-gray-600 mb-2">RESULT</h3>
              <p className="text-lg font-bold">300% Efficiency Increase</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container maxWidth="2xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">
                Innovation Labs needed a modern platform to manage their complex AI workflows and data
                processing. Their existing systems were siloed and inefficient, limiting their ability
                to scale and compete in the market.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We designed and built a comprehensive AI platform that unified their workflows, automated
                data processing, and provided real-time analytics. The platform was built using modern
                cloud-native technologies ensuring scalability and reliability.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <p className="text-gray-700">Python, TensorFlow, Kubernetes, AWS, React, PostgreSQL</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Results</h2>
              <ul className="space-y-2">
                {[
                  '300% increase in data processing efficiency',
                  '75% reduction in operational costs',
                  '99.9% platform uptime',
                  'Ability to scale to 10x user base',
                  'New revenue opportunities enabled',
                ].map((result, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
