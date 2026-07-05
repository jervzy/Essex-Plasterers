/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecCalculator } from './components/SpecCalculator';
import { CredibilitySection } from './components/CredibilitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './data/servicesData';

export default function App() {
  const [selectedSpec, setSelectedSpec] = useState<{
    propertyType: string;
    serviceType: string;
    scale: string;
    estimatedDays: string;
    systemSpec: string;
  } | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedSpec({
      propertyType: 'Residential / Commercial (To Be Confirmed)',
      serviceType: `[${service.number}] ${service.title}`,
      scale: 'Standard Surface Specification',
      estimatedDays: service.turnaround,
      systemSpec: `${service.materialsUsed.join(' // ')} (${service.bsStandard})`,
    });
  };

  const handleApplySpecFromCalculator = (specData: {
    propertyType: string;
    serviceType: string;
    scale: string;
    estimatedDays: string;
    systemSpec: string;
  }) => {
    setSelectedSpec(specData);
  };

  return (
    <div className="min-h-screen bg-white text-[#2B2B33] selection:bg-[#F5821F] selection:text-white flex flex-col font-sans">
      {/* Top Navigation Bar with Logo */}
      <Navbar />

      {/* Main Content Sections - Restrained Minimalist Brutalist Editorial */}
      <main className="flex-grow">
        {/* Hero Section: Typography-led, large bold headline, zero imagery */}
        <HeroSection />

        {/* Section 01: Numbered Services List */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 02: Interactive Specification Tool & Estimator */}
        <SpecCalculator onApplyToForm={handleApplySpecFromCalculator} />

        {/* Section 03: Heritage, Tolerance & Trust Statement */}
        <CredibilitySection />

        {/* Section 04: Restrained Contact & Inquiry Flow */}
        <ContactSection initialSpec={selectedSpec} />
      </main>

      {/* Restrained Brutalist Footer */}
      <Footer />
    </div>
  );
}

