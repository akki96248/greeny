import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { products } from '@/data/products';

export function HomePage() {
  const featuredProducts = products.slice(0, 5);
  const heroImage = 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=1920';
  const factoryImage = 'https://images.pexels.com/photos/3823552/pexels-photo-3823552.jpeg?auto=compress&cs=tinysrgb&w=1600';
  const materialImage = 'https://images.pexels.com/photos/2680132/pexels-photo-2680132.jpeg?auto=compress&cs=tinysrgb&w=1200';

  return (
    <div className="bg-cream-light">
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bagasse tableware products"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-900/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1600px] flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-28">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 text-cream-light/70 animate-fade-in">
              Greeny Enterpriz — Manufacturer / Exporter / Bagasse Tableware
            </p>
            <h1 className="font-serif text-5xl font-light leading-[1.05] text-cream-light sm:text-6xl lg:text-7xl animate-fade-up">
              Better Materials.
              <br />
              Built for the World.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-light/80 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Greeny Enterpriz manufactures and exports sustainable sugarcane bagasse tableware and
              food packaging for foodservice, hospitality, retail, and global distribution partners.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Link to="/contact" className="btn-primary">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn-secondary border-cream-light/40 text-cream-light hover:bg-cream-light hover:text-forest-900">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-b border-charcoal/8 bg-cream-light">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-4 py-6">
            {['Manufacturing', 'Quality Control', 'Global Export', 'OEM', 'Private Label'].map((item, i) => (
              <div key={item} className="flex items-center gap-4">
                {i > 0 && <div className="hidden h-4 w-px bg-charcoal/15 lg:block" />}
                <span className="text-sm font-semibold uppercase tracking-wider text-charcoal/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATERIAL */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">The Material</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Sugarcane residue becomes a better kind of tableware.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted">
                  Bagasse is the fibrous residue left after sugarcane stalks are crushed for juice
                  extraction. Instead of burning or discarding this agricultural byproduct, we
                  transform it into durable, food-safe tableware through engineered thermoforming —
                  without PFAS chemicals, plastic laminates, or synthetic coatings.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Material flow */}
          <Reveal delay={200}>
            <div className="mt-16 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
              {[
                { label: 'Sugarcane', note: 'Harvested' },
                { label: 'Bagasse', note: 'Residue extracted' },
                { label: 'Pulp', note: 'Fibre processed' },
                { label: 'Forming', note: 'Thermoformed' },
                { label: 'Product', note: 'Finished tableware' },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-serif text-2xl font-light text-forest-500">{step.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">{step.note}</p>
                  </div>
                  {i < 4 && <ArrowRight className="h-5 w-5 text-earth-light lg:mx-2" />}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-16 overflow-hidden">
              <img src={materialImage} alt="Sugarcane field" className="h-[400px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4 text-forest-500">Products</p>
              <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                A catalogue built for
                <br />
                foodservice scale.
              </h2>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-forest-500">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured product — large */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Link to={`/products/${featuredProducts[0].slug}`} className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredProducts[0].image}
                    alt={featuredProducts[0].name}
                    className="h-[480px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-charcoal">{featuredProducts[0].name}</h3>
                    <p className="mt-1 text-sm text-muted">{featuredProducts[0].tagline}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-forest-500 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                </div>
              </Link>
            </Reveal>

            {/* Two medium products */}
            <div className="grid grid-cols-1 gap-8 lg:col-span-5">
              {featuredProducts.slice(1, 3).map((product, i) => (
                <Reveal key={product.slug} delay={i * 100}>
                  <Link to={`/products/${product.slug}`} className="group block">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-xl font-light text-charcoal">{product.name}</h3>
                        <p className="mt-1 text-sm text-muted">{product.tagline}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-forest-500 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Secondary categories */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {featuredProducts.slice(3).map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
                <Link to={`/products/${product.slug}`} className="group block">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[160px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h4 className="text-sm font-medium text-charcoal">{product.shortName}</h4>
                    <ArrowRight className="h-3 w-3 text-forest-500 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GREENY */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-4 text-forest-500">Why Greeny</p>
            <h2 className="mb-16 max-w-2xl font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
              Made for the realities of foodservice.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Liquid Resistance', desc: 'Waterproof up to 100°C with no softening or structural warp.' },
              { title: 'Grease Resistance', desc: 'Withstands hot cooking oils up to 120°C, entirely PFAS-free.' },
              { title: 'Microwave Suitable', desc: 'Thermally stable for reheating. Maintains stiffness under heat.' },
              { title: 'Freezer Suitable', desc: 'Performs from -20°C cold storage through to hot food service.' },
              { title: 'Food-Contact Safe', desc: 'FDA-approved, chemical-free dining suitable for hospitality.' },
              { title: 'Reliable Production', desc: 'Pressed at high density for consistent stiffness and rigidity.' },
              { title: 'Packaging Consistency', desc: 'Dense, moisture-proof cartons engineered for container loading.' },
              { title: 'Export Readiness', desc: 'Quality controls conforming to international B2B regulations.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="bg-cream-light p-8">
                  <h3 className="font-serif text-xl font-medium text-forest-500">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY */}
      <section className="relative overflow-hidden bg-forest-900 py-24 text-cream-light lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-earth-light">The Factory</p>
                <h2 className="font-serif text-4xl font-light leading-tight lg:text-5xl">
                  Built in the factory.
                  <br />
                  Trusted in the field.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-cream-light/70">
                  Our production facility in Morbi, Gujarat converts sugarcane bagasse into
                  heavy-duty tableware through precision thermoforming. Every shift runs under
                  strict quality controls and clean chemical signatures.
                </p>
                <Link to="/manufacturing" className="group mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-earth-light">
                  Explore Manufacturing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="relative overflow-hidden">
                  <img src={factoryImage} alt="Manufacturing facility" className="h-[500px] w-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL EXPORT */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Global Export</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  From Gujarat to global markets.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted">
                  We ship container loads of bagasse tableware from our Morbi plant to importers,
                  distributors, and foodservice companies worldwide. Mixed container loading lets
                  buyers combine plates, bowls, and clamshells in a single shipment.
                </p>
                <Link to="/export" className="group mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-forest-500">
                  Export Capabilities
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <div className="space-y-px bg-charcoal/10">
                  {[
                    { step: '01', label: 'Factory', desc: 'Production and loading at our Morbi plant' },
                    { step: '02', label: 'Warehouse', desc: 'Packed and staged for container loading' },
                    { step: '03', label: 'Port', desc: 'Container dispatch from Gujarat ports' },
                    { step: '04', label: 'International Buyer', desc: 'Delivered to your destination port' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-6 bg-cream-light p-6">
                      <span className="font-serif text-3xl font-light text-earth-light">{item.step}</span>
                      <div>
                        <h3 className="font-medium text-charcoal">{item.label}</h3>
                        <p className="mt-1 text-sm text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* OEM */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">OEM / Private Label</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  Build your own tableware line.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-muted">
                  Our engineering division designs custom moulds, produces prototype samples, and
                  manufactures custom sizes or shapes with your corporate logo embossed on the
                  product. Tooling setups take approximately 15–20 days.
                </p>
                <Link to="/oem" className="btn-primary mt-10">
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={150}>
                <ul className="space-y-px bg-charcoal/10">
                  {[
                    'OEM Manufacturing',
                    'Private Label Branding',
                    'Custom Packaging',
                    'Logo Embossing',
                    'Custom Tooling & Moulds',
                  ].map((item) => (
                    <li key={item} className="flex items-center justify-between bg-cream-light px-6 py-5">
                      <span className="font-medium text-charcoal">{item}</span>
                      <ArrowRight className="h-4 w-4 text-forest-500" />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6 text-forest-500">Sustainability</p>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  An agricultural byproduct, not a petroleum product.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-muted">
                  Our tableware is made from sugarcane bagasse — the fibrous residue left after juice
                  extraction. We do not use PFAS chemicals, plastic laminates, or synthetic coatings.
                  The material returns to soil as compost, closing the loop from agricultural
                  residue to finished product and back to earth.
                </p>
                <Link to="/sustainability" className="group mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-forest-500">
                  Our Approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-forest-900 py-24 text-cream-light lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight lg:text-6xl">
                Your next product line starts here.
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-light/70">
                Tell us what you are sourcing. Our team can help you identify the right product,
                specification, packaging, and supply model.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-gold">
                  Contact Greeny
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
