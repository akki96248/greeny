import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const footerNav = [
  { label: 'Products', path: '/products' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Quality', path: '/quality' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Global Export', path: '/export' },
  { label: 'OEM / Private Label', path: '/oem' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-light">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src="/logo2.webp" alt="Greeny Enterpriz" className="mb-6 h-12 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm leading-relaxed text-cream-light/60">
              Manufacturer and exporter of sustainable sugarcane bagasse tableware and food packaging
              for foodservice, hospitality, and global distribution partners.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-5 text-cream-light/40">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-cream-light/70 transition-colors hover:text-earth-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-5 text-cream-light/40">Contact</p>
            <ul className="space-y-4 text-sm text-cream-light/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-earth-light" />
                <a href="mailto:info@greenyenterpriz.com" className="transition-colors hover:text-cream-light">
                  info@greenyenterpriz.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-earth-light" />
                <span>Natik Sutariya</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-earth-light" />
                <div>
                  <p>Corporate Office:</p>
                  <p className="text-cream-light/50">105, R.K. Industrial Estate, S P Ring Road, Kathwada, Ahmedabad, 382430, Gujarat, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-earth-light" />
                <div>
                  <p>Production Plant:</p>
                  <p className="text-cream-light/50">Timbdi Patiya, Morbi, Gujarat 363642, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-cream-light/40">Get Started</p>
            <Link to="/contact" className="btn-gold w-full justify-center">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream-light/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-cream-light/40">
            &copy; {new Date().getFullYear()} Greeny Enterpriz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-xs text-cream-light/40 transition-colors hover:text-cream-light">
              Privacy
            </Link>
            <Link to="/contact" className="text-xs text-cream-light/40 transition-colors hover:text-cream-light">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
