import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { products, productCategories } from '@/data/products';

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const filterOptions = ['All', ...productCategories];
  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.name === activeCategory);

  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Products</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-7xl">
              Designed for foodservice.
              <br />
              Built for scale.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              A comprehensive catalogue of sugarcane bagasse tableware and paper cutlery for
              hospitality, catering, delivery, and distribution. PFAS-free, leak-resistant, and
              food-contact safe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter bar */}
      <section className="border-y border-charcoal/8 bg-cream-light">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 py-5">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-forest-500 text-cream-light'
                    : 'text-charcoal/60 hover:text-forest-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
                <Link to={`/products/${product.slug}`} className="group block">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-earth-light">{product.category}</p>
                      <h3 className="mt-1 font-serif text-2xl font-light text-charcoal">{product.name}</h3>
                      <p className="mt-1 text-sm text-muted">{product.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-6 w-6 shrink-0 text-forest-500 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-serif text-3xl font-light text-charcoal">Need a complete catalogue with specifications?</h2>
              <p className="mt-2 text-muted">Request product information, sizing, and packaging details.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Request Product Information
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
