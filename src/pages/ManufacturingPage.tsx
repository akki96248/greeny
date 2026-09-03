import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  { num: '01', title: 'Material Preparation', desc: 'Sugarcane bagasse fibre is collected, sorted, and prepared for pulp processing. The raw agricultural residue is cleaned to remove impurities before entering production.' },
  { num: '02', title: 'Pulp Processing', desc: 'Bagasse fibre is processed into a consistent pulp slurry, calibrated for density and moisture content to ensure uniform forming characteristics across every production run.' },
  { num: '03', title: 'Forming', desc: 'Pulp is pressed into moulds at high pressure and temperature. Precision thermoforming creates the rigid, leak-resistant structure that defines our tableware.' },
  { num: '04', title: 'Drying', desc: 'Formed products pass through controlled drying to remove residual moisture. This step locks in structural integrity and prepares products for finishing.' },
  { num: '05', title: 'Quality Inspection', desc: 'Every product is inspected for dimensional accuracy, surface quality, and structural soundness. Non-conforming units are removed before packing.' },
  { num: '06', title: 'Packing', desc: 'Products are stacked, counted, and packed into moisture-proof cartons engineered for container density. Packaging configurations are tailored to buyer requirements.' },
  { num: '07', title: 'Storage', desc: 'Packed cartons are staged in warehouse facilities, organized by product type and order, ready for container loading and dispatch.' },
  { num: '08', title: 'Dispatch', desc: 'Containers are loaded and dispatched from our Morbi facility to ports for international shipping. Documentation and logistics are coordinated with the buyer.' },
];

export function ManufacturingPage() {
  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Manufacturing</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              From agricultural residue
              <br />
              to finished tableware.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Our production facility in Morbi, Gujarat operates advanced thermoforming lines that
              convert sugarcane bagasse into durable, food-safe tableware. Every stage is controlled
              for consistency, quality, and clean chemical composition.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="space-y-px bg-charcoal/10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 50}>
                <div className="grid grid-cols-1 gap-6 bg-cream-light px-6 py-10 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-12">
                  <div className="lg:col-span-2">
                    <span className="font-serif text-5xl font-light text-earth-light">{step.num}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="font-serif text-2xl font-light text-charcoal">{step.title}</h2>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-base leading-relaxed text-muted">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility section */}
      <section className="bg-forest-900 py-24 text-cream-light lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-earth-light">The Facility</p>
                <h2 className="font-serif text-4xl font-light leading-tight lg:text-5xl">
                  Production engineered for scale and consistency.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-cream-light/70">
                  Our Morbi plant runs thermoforming production lines with strict quality controls
                  across every shift. We maintain clean chemical signatures by omitting PFAS
                  chemicals and plastic laminates from the entire process.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <div className="space-y-px bg-cream-light/10">
                  {[
                    { label: 'Location', value: 'Morbi, Gujarat, India' },
                    { label: 'Process', value: 'Precision thermoforming' },
                    { label: 'Material', value: 'Sugarcane bagasse pulp' },
                    { label: 'Chemical Standard', value: 'PFAS-free, no plastic laminates' },
                    { label: 'Quality Standard', value: 'ISO 9001:2015' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-forest-900 px-6 py-5">
                      <span className="text-sm uppercase tracking-wider text-cream-light/50">{item.label}</span>
                      <span className="text-sm font-medium text-cream-light">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="font-serif text-3xl font-light text-charcoal">Want to discuss production capabilities?</h2>
            <Link to="/contact" className="btn-primary">
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
