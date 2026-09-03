import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { productCategories } from '@/data/products';

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [oemInterest, setOemInterest] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name') as string,
      company_name: formData.get('company_name') as string,
      business_email: formData.get('business_email') as string,
      phone: formData.get('phone') as string,
      country: formData.get('country') as string,
      product_category: formData.get('product_category') as string,
      estimated_quantity: formData.get('estimated_quantity') as string,
      packaging_requirement: formData.get('packaging_requirement') as string,
      oem_private_label: oemInterest,
      message: formData.get('message') as string,
    };

    const { error: insertError } = await supabase.from('quote_requests').insert(data);

    if (insertError) {
      setError('Something went wrong. Please try again or contact us directly.');
      setSubmitting(false);
    } else {
      setSubmitted(true);
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream-light pt-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center bg-forest-500">
            <Check className="h-8 w-8 text-cream-light" />
          </div>
          <h1 className="font-serif text-4xl font-light text-charcoal">Thank you for your inquiry.</h1>
          <p className="mt-6 text-lg text-muted">
            Our trade team will review your request and respond within one business day. For urgent
            matters, please contact us directly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary mt-10"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-light">
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6 text-forest-500">Contact / Request Quote</p>
            <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-6xl">
              Request a Quote
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Tell us what you are sourcing. Our team can help you identify the right product,
              specification, packaging, and supply model.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="full_name" className="input-label">Full Name *</label>
                      <input id="full_name" name="full_name" type="text" required className="input-field" />
                    </div>
                    <div>
                      <label htmlFor="company_name" className="input-label">Company Name *</label>
                      <input id="company_name" name="company_name" type="text" required className="input-field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="business_email" className="input-label">Business Email *</label>
                      <input id="business_email" name="business_email" type="email" required className="input-field" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="input-label">Phone</label>
                      <input id="phone" name="phone" type="tel" className="input-field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="country" className="input-label">Country *</label>
                      <input id="country" name="country" type="text" required className="input-field" />
                    </div>
                    <div>
                      <label htmlFor="product_category" className="input-label">Product Category *</label>
                      <select id="product_category" name="product_category" required className="input-field cursor-pointer">
                        <option value="">Select a category</option>
                        {productCategories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="estimated_quantity" className="input-label">Estimated Quantity</label>
                      <input id="estimated_quantity" name="estimated_quantity" type="text" placeholder="e.g. 1 container, 100,000 units" className="input-field" />
                    </div>
                    <div>
                      <label htmlFor="packaging_requirement" className="input-label">Packaging Requirement</label>
                      <input id="packaging_requirement" name="packaging_requirement" type="text" placeholder="e.g. Custom cartons, private label" className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="input-label">OEM / Private Label</label>
                    <button
                      type="button"
                      onClick={() => setOemInterest(!oemInterest)}
                      className={`flex items-center gap-3 py-3 text-sm transition-colors ${
                        oemInterest ? 'text-forest-500' : 'text-muted'
                      }`}
                    >
                      <span className={`flex h-5 w-5 items-center justify-center border ${
                        oemInterest ? 'border-forest-500 bg-forest-500' : 'border-charcoal/20'
                      }`}>
                        {oemInterest && <Check className="h-3 w-3 text-cream-light" />}
                      </span>
                      I am interested in OEM or private label manufacturing
                    </button>
                  </div>

                  <div>
                    <label htmlFor="message" className="input-label">Message</label>
                    <textarea id="message" name="message" rows={4} className="input-field resize-none" placeholder="Tell us about your sourcing requirements..." />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-50">
                    {submitting ? 'Submitting...' : 'Submit Request'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={100}>
                <div className="space-y-10">
                  <div>
                    <p className="eyebrow mb-4 text-charcoal/40">Corporate Office</p>
                    <p className="text-sm leading-relaxed text-muted">
                      105, R.K. Industrial Estate, S P Ring Road, Kathwada, Near Sharnam Estate, Ahmedabad, 382430, Gujarat, India
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-4 text-charcoal/40">Production Plant</p>
                    <p className="text-sm leading-relaxed text-muted">
                      Timbdi Patiya, Morbi, Gujarat 363642, India
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-4 text-charcoal/40">Contact</p>
                    <p className="text-sm text-muted">
                      Natik Sutariya
                      <br />
                      Mon–Sat, 9am–7pm
                    </p>
                  </div>
                  <div className="border-t border-charcoal/10 pt-8">
                    <p className="eyebrow mb-4 text-charcoal/40">Export Information</p>
                    <p className="text-sm leading-relaxed text-muted">
                      Standard export MOQ is one 20ft Full Container Load (FCL). Mixed container
                      loading available. Free samples for qualified buyers.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
