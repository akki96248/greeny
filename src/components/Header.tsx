import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Products', path: '/products' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Quality', path: '/quality' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Export', path: '/export' },
  { label: 'OEM', path: '/oem' },
  { label: 'About', path: '/about' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream-light/95 backdrop-blur-md border-b border-charcoal/8'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-12">
          <Link to="/" className="flex items-center gap-3" aria-label="Greeny Enterpriz home">
            <img src="/logo2.webp" alt="Greeny Enterpriz" className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-forest-500'
                    : 'text-charcoal/70 hover:text-forest-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            className="flex items-center justify-center p-2 text-charcoal lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-forest-900 transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <img src="/logo2.webp" alt="Greeny Enterpriz" className="h-11 w-auto brightness-0 invert" />
          <button
            className="flex items-center justify-center p-2 text-cream-light"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="border-b border-cream-light/10 py-4 text-2xl font-medium text-cream-light transition-colors hover:text-earth-light"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold mt-8 w-full justify-center">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <p className="text-sm text-cream-light/50">
            Manufacturer & Exporter
            <br />
            Bagasse Tableware — Morbi, Gujarat, India
          </p>
        </div>
      </div>
    </>
  );
}
