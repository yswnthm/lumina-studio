import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

import { CTASection } from './components/CTASection';
import { ServicesPreview } from './components/ServicesPreview';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Portfolio />
    <ServicesPreview />
    <Process />
    <About />
    <FAQ />
    <Testimonials />
    <CTASection />
  </>
);

const PortfolioPage = () => (
  <div className="pt-20">
    <Portfolio />
    <CTASection />
  </div>
);

const AboutPage = () => (
  <div className="pt-20">
    <About />
    <Testimonials />
  </div>
);

const ServicesPage = () => (
  <div className="pt-20">
    <Services />
    <CTASection />
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <Contact />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-stone-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;