import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { ManufacturingPage } from '@/pages/ManufacturingPage';
import { QualityPage } from '@/pages/QualityPage';
import { SustainabilityPage } from '@/pages/SustainabilityPage';
import { ExportPage } from '@/pages/ExportPage';
import { OemPage } from '@/pages/OemPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-cream-light">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/oem" element={<OemPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
