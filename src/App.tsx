/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { WhyUs } from './components/WhyUs.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Process } from './components/Process.tsx';
import { About } from './components/About.tsx';
import { FAQ } from './components/FAQ.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { AmbientBackground } from './components/AmbientBackground.tsx';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteTier, setSelectedQuoteTier] = useState<string>('Business Website');

  const handleOpenQuoteWithTier = (tier: string) => {
    setSelectedQuoteTier(tier);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedQuoteTier(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f1f5f9] flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Premium Layered Ambient Background Motion */}
      <AmbientBackground />

      {/* Desktop Interactive Custom Cursor */}
      <CustomCursor />

      {/* 1. Navbar */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Why YN Interactive */}
        <WhyUs />

        {/* 5. Portfolio / Our Work */}
        <Portfolio />

        {/* 6. Pricing */}
        <Pricing onSelectTier={handleOpenQuoteWithTier} />

        {/* 7. Development Process */}
        <Process />

        {/* 8. About YN Interactive */}
        <About />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Final CTA */}
        <FinalCTA onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 11. Contact Section */}
        <Contact initialService={selectedQuoteTier} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Free Quote Estimator & WhatsApp Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultTier={selectedQuoteTier}
      />
    </div>
  );
}
