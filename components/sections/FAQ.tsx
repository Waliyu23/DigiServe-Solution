'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'What services do you offer?',
      answer:
        'We offer comprehensive digital solutions including software development, digital marketing & SEO, design & branding, business IT consulting, and financial services.',
    },
    {
      id: '2',
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on scope and complexity. We provide detailed estimates during the discovery phase.',
    },
    {
      id: '3',
      question: 'Do you provide support after project completion?',
      answer:
        'Yes! We offer ongoing maintenance and support packages to ensure your solutions continue to perform optimally.',
    },
    {
      id: '4',
      question: 'What is your pricing structure?',
      answer:
        'We offer flexible pricing based on project scope. Contact us for a custom quote tailored to your needs.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container maxWidth="xl">
        <SectionTitle subtitle="Questions?" centered>
          Frequently Asked Questions
        </SectionTitle>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left font-semibold text-dark hover:bg-gray-50 transition flex justify-between items-center"
              >
                {faq.question}
                <span
                  className={`transition-transform ${expandedId === faq.id ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>
              {expandedId === faq.id && (
                <div className="px-6 py-4 border-t text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
