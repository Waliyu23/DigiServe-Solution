'use client';

import { Container } from '@/components/layout/Container';

export function Logos() {
  const logos = [
    { name: 'Client 1' },
    { name: 'Client 2' },
    { name: 'Client 3' },
    { name: 'Client 4' },
    { name: 'Client 5' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Container maxWidth="2xl">
        <p className="text-center text-gray-600 text-sm font-semibold mb-8 uppercase tracking-wider">
          Trusted by leading companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-32 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-400 font-semibold">{logo.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
