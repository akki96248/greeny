import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function OemPage() {
  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">OEM / Private Label</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              Your specification.
              <br />
              Our manufacturing.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Our engineering division designs custom moulds, produces prototype samples, and
              manufactures custom sizes or shapes with your corporate branding. Tooling setups
              take approximately 15–20 days from approval.
            </p>
            <Link to="/contact" className="btn-primary mt-10">
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Capabilities</p>
            <h2 className="mb-16 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              What we can build for you.
            </h2>
          </Reveal>

          <div className="space-y-px bg-charcoal/10">
            {[
              {
                title: 'OEM Manufacturing',
                desc: 'Custom production runs to your exact specifications — sizes, shapes, and material configurations tailored to your market.',
              },
              {
                title: 'Private Label Branding',
                desc: 'Apply your brand identity to our existing product range. Packaging, labelling, and carton printing configured for your distribution channel.',
              },
              {
                title: 'Custom Packaging',
                desc: 'Buyer-specific carton configurations, count per carton, and outer carton printing. Packaging engineered for your retail or distribution format.',
              },
              {
                title: 'Logo Embossing',
                desc: 'Your corporate logo embossed directly onto the product surface. CAD mould design and prototype samples produced before production runs.',
              },
              {
                title: 'Custom Tooling & Moulds',
                desc: 'Our engineering division designs and manufactures custom moulds for unique shapes and sizes. Tooling setups take approximately 15–20 days.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-4 bg-cream-light px-6 py-8 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-12">
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-2xl font-light text-forest-500">{item.title}</h3>
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

      {/* Process */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">The Process</p>
            <h2 className="mb-16 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              From concept to container.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your product requirements, target market, and branding needs with our team.' },
              { step: '02', title: 'CAD Design', desc: 'Our engineering division designs custom moulds and produces prototype samples for approval.' },
              { step: '03', title: 'Tooling', desc: 'Custom tooling is manufactured. Setup takes approximately 15–20 days from design approval.' },
              { step: '04', title: 'Production', desc: 'Full production runs with quality control, custom packaging, and container loading for export.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div>
                  <span className="font-serif text-4xl font-light text-earth-light">{item.step}</span>
                  <h3 className="mt-3 font-serif text-xl font-medium text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Samples */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Samples</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Free samples for qualified buyers.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted">
                  We ship free sample parcels — including plates, compartment trays, and clamshells —
                  globally to qualified importers, wholesalers, and procurement managers. Importers
                  cover DHL/FedEx courier shipping charges.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Sample parcels include representative products from your category of interest',
                    'Custom OEM samples produced after mould design approval',
                    'Quality audit support for procurement teams evaluating supply partners',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-charcoal">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-forest-500" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 py-24 text-cream-light lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-tight lg:text-5xl">
              Build your tableware line with Greeny.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cream-light/70">
              Tell us your product vision, target market, and volume requirements. Our team will
              help you define the right specification, mould, and supply model.
            </p>
            <Link to="/contact" className="btn-gold mt-10">
              Discuss OEM / Private Label
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
