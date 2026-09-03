import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function SustainabilityPage() {
  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Sustainability</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              An agricultural residue,
              <br />
              not a petroleum product.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Our tableware is made from sugarcane bagasse — the fibrous residue left after juice
              extraction. We do not use PFAS chemicals, plastic laminates, or synthetic coatings.
              The material returns to soil as compost.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The material */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">The Material</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  What bagasse is, and why it matters.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted">
                  Bagasse is the fibrous plant cellulose remaining after sugarcane stalks are crushed
                  for juice extraction. Historically burned or discarded, this agricultural byproduct
                  is now engineered into durable, food-safe tableware — creating value from what was
                  once waste.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  By using bagasse, we reduce reliance on petroleum-based plastics and paper-based
                  disposables that require tree harvesting. The material is renewable, abundant, and
                  returns to soil as compost at end of life.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Product Lifecycle</p>
            <h2 className="mb-16 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              From field to table to soil.
            </h2>
          </Reveal>

          <div className="space-y-px bg-charcoal/10">
            {[
              { stage: '01 — Agricultural Residue', desc: 'Sugarcane is harvested and crushed for juice. The remaining bagasse fibre is collected rather than burned or discarded.' },
              { stage: '02 — Material Processing', desc: 'Bagasse fibre is cleaned, processed into pulp, and calibrated for density and consistency.' },
              { stage: '03 — Manufacturing', desc: 'Pulp is thermoformed into tableware at high pressure and temperature. No PFAS, no plastic laminates, no synthetic coatings.' },
              { stage: '04 — Product Use', desc: 'Finished tableware serves in foodservice, hospitality, catering, and delivery — stable from -20°C to 140°C.' },
              { stage: '05 — End of Life', desc: 'Used products return to soil as compost. The material biodegrades naturally without leaving synthetic residue.' },
            ].map((item, i) => (
              <Reveal key={item.stage} delay={i * 80}>
                <div className="grid grid-cols-1 gap-4 bg-cream-light px-6 py-8 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-12">
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-xl font-medium text-forest-500">{item.stage}</h3>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-base leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible manufacturing */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Responsible Manufacturing</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Clean chemistry,
                  <br />
                  documented standards.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <ul className="space-y-6">
                  {[
                    'No PFAS (per- and polyfluoroalkyl substances) used in any product',
                    'No plastic laminates or synthetic coatings applied',
                    'ISO 14001:2015 environmental management certification',
                    'ISO 9001:2015 quality management certification',
                    'FDA-approved food-contact safe formulation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4 border-b border-charcoal/10 pb-6 text-charcoal">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-earth-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-20 text-cream-light">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="font-serif text-3xl font-light">Want to discuss sustainability specifications for your supply chain?</h2>
            <Link to="/contact" className="btn-gold">
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
