import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function ExportPage() {
  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Global Export</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              From Gujarat to
              <br />
              global markets.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              We ship container loads of bagasse tableware from our Morbi plant to importers,
              distributors, and foodservice companies worldwide. Our export operations cover
              packaging, documentation, logistics, and port coordination.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Export process */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">The Export Process</p>
            <h2 className="mb-16 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              A structured supply journey.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Order & Production', desc: 'Contract orders are scheduled and produced at our Morbi facility. Production and loading take approximately 15–25 days.' },
              { num: '02', title: 'Packaging', desc: 'Products packed in dense, moisture-proof cartons engineered to maximize container density. Mixed container loading available.' },
              { num: '03', title: 'Documentation', desc: 'Export documentation, customs clearance, and shipping coordination handled by our trade team.' },
              { num: '04', title: 'Container Dispatch', desc: 'Containers loaded and dispatched from Gujarat ports to your destination. Transit times vary by destination port.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="bg-cream-light p-8 lg:p-10">
                  <span className="font-serif text-4xl font-light text-earth-light">{step.num}</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-charcoal">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics details */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Logistics</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Built for international supply.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={100}>
                <div className="space-y-px bg-charcoal/10">
                  {[
                    { label: 'Minimum Order', value: 'One 20ft Full Container Load (FCL)' },
                    { label: 'Mixed Loading', value: 'Combine plates, bowls, and clamshells in one shipment' },
                    { label: 'Production Lead Time', value: '15–25 days for contract orders' },
                    { label: 'Packaging', value: 'Moisture-proof cartons optimized for container density' },
                    { label: 'Documentation', value: 'Full export documentation and customs coordination' },
                    { label: 'Samples', value: 'Free sample parcels for qualified buyers (courier cost covered by importer)' },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-2 bg-cream-light px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm font-medium text-charcoal">{item.label}</span>
                      <span className="text-sm text-muted">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Container & port */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="border-l-2 border-earth-light pl-8">
                <h3 className="font-serif text-3xl font-light text-charcoal">Container Loading</h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Our carton configurations are engineered to maximize ocean container density,
                  reducing per-unit shipping costs. Mixed container loading lets buyers combine
                  multiple product categories — plates, bowls, clamshells, and cutlery — in a
                  single shipment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-l-2 border-earth-light pl-8">
                <h3 className="font-serif text-3xl font-light text-charcoal">Port Handling</h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Containers are dispatched from Gujarat ports with full documentation support. Our
                  trade team coordinates customs clearance, shipping lines, and tracking so buyers
                  receive production updates from order confirmation to dispatch.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-20 text-cream-light">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="font-serif text-3xl font-light">Ready to discuss your export requirements?</h2>
            <Link to="/contact" className="btn-gold">
              Request Export Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
