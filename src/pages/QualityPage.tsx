import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function QualityPage() {
  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Quality</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              Quality is built
              <br />
              into every shift.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Our quality management system governs every stage of production — from raw material
              intake to finished product dispatch. We maintain ISO 9001:2015 standards and clean
              chemical signatures across all production lines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quality pillars */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-px bg-charcoal/10 lg:grid-cols-2">
            {[
              {
                title: 'Quality Management',
                desc: 'Our production operates under ISO 9001:2015 quality management standards. Every process is documented, monitored, and reviewed for continuous improvement.',
              },
              {
                title: 'Production Controls',
                desc: 'Pulp density, forming pressure, drying temperature, and cycle times are calibrated and monitored across every production run for consistent output.',
              },
              {
                title: 'Inspection Process',
                desc: 'Products are inspected for dimensional accuracy, surface integrity, and structural soundness. Non-conforming units are removed before packing.',
              },
              {
                title: 'Food-Contact Safety',
                desc: 'Our tableware is FDA-approved and validated for hot meal contact up to 120°C in oil and 100°C in water with zero seepage. No PFAS chemicals are used.',
              },
              {
                title: 'Packaging Control',
                desc: 'Finished products are packed in moisture-proof cartons engineered for container density. Packaging configurations are verified against buyer specifications.',
              },
              {
                title: 'Chemical Integrity',
                desc: 'We maintain clean chemical signatures by omitting fluorinated grease-binders, plastic laminates, and synthetic coatings from the entire process.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="bg-cream-light p-10 lg:p-12">
                  <h2 className="font-serif text-2xl font-medium text-forest-500">{item.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Certifications & Compliance</p>
            <h2 className="mb-12 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              Internationally recognised standards.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management System certification governing production standards and process control.' },
              { name: 'ISO 14001:2015', desc: 'Environmental Management System certification governing responsible manufacturing practices.' },
              { name: 'FDA Approved', desc: 'Food-contact safe validation for hot meal contact. Chemical-free dining suitable for hospitality.' },
            ].map((cert, i) => (
              <Reveal key={cert.name} delay={i * 100}>
                <div className="border-l-2 border-earth-light pl-6">
                  <h3 className="font-serif text-2xl font-light text-charcoal">{cert.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{cert.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-10 text-sm text-muted">
              PFAS-free compliance across all product lines. No fluorinated chemicals, plastic laminates, or synthetic coatings used.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Technical Specifications</p>
            <h2 className="mb-12 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              Performance you can verify.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-px bg-charcoal/10">
              {[
                { spec: 'Water Resistance', value: 'Waterproof up to 100°C — no softening or structural warp' },
                { spec: 'Oil Resistance', value: 'Withstands hot cooking oils up to 120°C — PFAS-free' },
                { spec: 'Thermal Range', value: 'Stable from -20°C freezer storage to 140°C reheat settings' },
                { spec: 'Forming Pressure', value: 'Pressed at high density for maximum stiffness and rigidity' },
                { spec: 'Chemical Composition', value: 'No PFAS, no plastic laminates, no synthetic coatings' },
                { spec: 'Biodegradability', value: 'Compostable — returns to soil as natural compost' },
              ].map((item) => (
                <div key={item.spec} className="flex flex-col gap-2 bg-cream-light px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-12">
                  <span className="font-medium text-charcoal">{item.spec}</span>
                  <span className="flex items-center gap-3 text-sm text-muted">
                    <Check className="h-4 w-4 text-forest-500" />
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-20 text-cream-light">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="font-serif text-3xl font-light">Need quality documentation for your procurement process?</h2>
            <Link to="/contact" className="btn-gold">
              Request Documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
