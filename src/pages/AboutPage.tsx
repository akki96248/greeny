import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function AboutPage() {
  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">About</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              A manufacturer building
              <br />
              from agricultural residue.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Company story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Who We Are</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Greeny Enterpriz.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted">
                  Greeny Enterpriz is a specialized manufacturer and B2B exporter of premium
                  sugarcane bagasse tableware. We operate advanced production lines in Morbi,
                  Gujarat, India, converting sugarcane bagasse — the raw plant cellulose left after
                  juice extraction — into heavy-duty tableware for foodservice, hospitality, and
                  global distribution.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  Our operations bridge agricultural byproduct collection with precision
                  thermoforming. By omitting fluorinated chemicals and plastic laminates, our
                  catalogue returns fully to earth as natural soil compost, establishing a
                  circular lifecycle from field to table and back.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Our Philosophy</p>
            <h2 className="mb-16 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              What guides our manufacturing.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-charcoal/10 lg:grid-cols-3">
            {[
              {
                title: 'Manufacturing Philosophy',
                desc: 'We press at high density for maximum stiffness and rigidity. Every production run is calibrated for consistency — pulp density, forming pressure, and drying cycles are monitored and documented.',
              },
              {
                title: 'Quality Philosophy',
                desc: 'We maintain ISO 9001:2015 quality standards and clean chemical signatures across every shift. No PFAS, no plastic laminates, no synthetic coatings. FDA-approved for food-contact safety.',
              },
              {
                title: 'Material Philosophy',
                desc: 'We work with sugarcane bagasse because it is renewable, abundant, and agricultural — not petroleum-based. We create value from what was once waste, and the material returns to soil as compost.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="bg-cream-light p-10 lg:p-12">
                  <h3 className="font-serif text-2xl font-medium text-forest-500">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Global Ambition</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Built for international supply.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted">
                  We serve importers, distributors, foodservice companies, restaurant groups, hotels,
                  catering companies, supermarkets, and private-label buyers. Our export operations
                  are structured for container-scale supply — from production scheduling through
                  packaging, documentation, and port dispatch.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  We envision a supply chain where agricultural residue replaces petroleum-based
                  disposables at scale — not as a niche alternative, but as the default standard for
                  foodservice tableware worldwide.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-forest-900 py-20 text-cream-light lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-earth-light">Locations</p>
            <h2 className="mb-16 font-serif text-4xl font-light lg:text-5xl">Where we operate.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="border-l border-cream-light/20 pl-8">
                <p className="eyebrow mb-4 text-cream-light/40">Corporate Office</p>
                <p className="text-lg leading-relaxed text-cream-light/70">
                  105, R.K. Industrial Estate, S P Ring Road, Kathwada, Near Sharnam Estate, Ahmedabad,
                  382430, Gujarat, India
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-l border-cream-light/20 pl-8">
                <p className="eyebrow mb-4 text-cream-light/40">Production Plant</p>
                <p className="text-lg leading-relaxed text-cream-light/70">
                  Timbdi Patiya, Morbi, Gujarat 363642, India
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="font-serif text-3xl font-light text-charcoal">Want to learn more about working with us?</h2>
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
