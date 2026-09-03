import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { getProduct, products } from '@/data/products';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="bg-cream-light">
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 lg:pt-36">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Link to="/products" className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-forest-500">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product header */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-[560px] w-full object-cover" />
                </div>
              </Reveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <p className="eyebrow mb-4 text-earth-light">{product.category}</p>
                <h1 className="font-serif text-4xl font-light leading-tight text-charcoal lg:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted">{product.description}</p>

                {/* Features */}
                <div className="mt-8">
                  <p className="eyebrow mb-4 text-charcoal/40">Key Features</p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-charcoal">
                        <Check className="h-4 w-4 text-forest-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material */}
                <div className="mt-8 border-t border-charcoal/10 pt-6">
                  <p className="eyebrow mb-2 text-charcoal/40">Material</p>
                  <p className="text-sm text-charcoal">{product.material}</p>
                </div>

                {/* Variants */}
                <div className="mt-6 border-t border-charcoal/10 pt-6">
                  <p className="eyebrow mb-2 text-charcoal/40">Available Variants</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <span key={v} className="border border-charcoal/15 px-3 py-1.5 text-sm text-charcoal">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mt-6 border-t border-charcoal/10 pt-6">
                  <p className="eyebrow mb-2 text-charcoal/40">Applications</p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((a) => (
                      <span key={a} className="bg-cream px-3 py-1.5 text-sm text-charcoal">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <p className="eyebrow mb-4 text-forest-500">Customization</p>
                <h2 className="font-serif text-3xl font-light text-charcoal">Built to your specification.</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed text-muted">
                  Custom sizes, shapes, and packaging configurations are available through our OEM
                  division. Logo embossing and private-label branding can be applied with tooling
                  setups taking approximately 15–20 days. Free samples are available for qualified
                  importers and procurement managers.
                </p>
                <Link to="/oem" className="group mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-forest-500">
                  Discuss OEM / Private Label
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="mb-12 font-serif text-3xl font-light text-charcoal">Related Products</h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {relatedProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/products/${p.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-charcoal">{p.shortName}</h3>
                    <ArrowRight className="h-3 w-3 text-forest-500 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
