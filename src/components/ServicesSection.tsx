import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/servicesData';
import { ArrowUpRight, Plus, Minus, Check, Layers, ShieldCheck, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>('skimming');

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? '' : id);
  };

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-white border-t border-b border-[#2B2B33]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFB] border border-[#2B2B33] font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B33] mb-4">
            <span className="text-[#F5821F]">01.</span>
            <span>CORE ARCHITECTURAL SERVICES</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2B33] tracking-[-0.03em] uppercase leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            PRECISION SURFACES. <br />
            <span className="underline decoration-[#F5821F] decoration-2 underline-offset-8">NUMBERED FOR ACCURACY.</span>
          </h2>
          
          <p className="mt-6 font-sans text-base sm:text-lg text-[#3A3A45] max-w-2xl leading-relaxed">
            We reject generic "icon cards" and ambiguous trade promises. Below is our numbered catalogue of architectural plastering and rendering disciplines, each executed to strict British Standards (BS EN 13279 / BS 5262).
          </p>
        </div>

        {/* Numbered Typography List - Brutalist & Editorial */}
        <div className="brutalist-border-t">
          {SERVICES_LIST.map((service, index) => {
            const isOpen = activeId === service.id;
            return (
              <div 
                key={service.id}
                className={`brutalist-border-b transition-colors duration-150 ${
                  isOpen ? 'bg-[#FAFAFB]' : 'bg-white hover:bg-[#FCFCFD]'
                }`}
              >
                {/* Main Row Header */}
                <button
                  type="button"
                  onClick={() => handleToggle(service.id)}
                  className="w-full text-left py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none focus:bg-[#FAFAFB] group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 lg:gap-10">
                    {/* Big Number Accent */}
                    <span 
                      className={`font-mono text-xl sm:text-2xl font-extrabold transition-colors duration-150 ${
                        isOpen ? 'text-[#F5821F]' : 'text-[#6B6B78] group-hover:text-[#2B2B33]'
                      }`}
                    >
                      [{service.number}]
                    </span>

                    {/* Service Title & Subtitle */}
                    <div>
                      <h3 
                        className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2B2B33] tracking-tight uppercase group-hover:text-[#F5821F] transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm sm:text-base text-[#6B6B78] font-normal">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: BS Badge + Toggle Action */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 shrink-0">
                    <span className="hidden xl:inline-block font-mono text-xs font-semibold px-3 py-1 bg-white brutalist-border text-[#2B2B33]">
                      {service.bsStandard}
                    </span>

                    <div className={`flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase px-4 py-2 brutalist-border transition-all ${
                      isOpen 
                        ? 'bg-[#2B2B33] text-white' 
                        : 'bg-white text-[#2B2B33] group-hover:bg-[#F5821F] group-hover:text-white group-hover:border-[#F5821F]'
                    }`}>
                      <span>{isOpen ? 'CLOSE SPEC' : 'VIEW SPEC'}</span>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </button>

                {/* Expandable Technical Specification Pane (100% Typography Driven) */}
                {isOpen && (
                  <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-2 animate-in fade-in duration-200">
                    <div className="pt-6 brutalist-border-t border-[#E8E8EE] grid grid-cols-1 lg:grid-cols-12 gap-8">
                      
                      {/* Left: Detailed Description & Tolerance Guarantee */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <div className="font-mono text-[11px] uppercase tracking-widest text-[#F5821F] font-bold mb-2">
                            // TECHNICAL DESCRIPTION
                          </div>
                          <p className="font-sans text-base sm:text-lg text-[#2B2B33] leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          <div className="p-4 bg-white brutalist-border">
                            <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B78] uppercase mb-1">
                              <ShieldCheck className="w-4 h-4 text-[#F5821F]" />
                              <span>SURFACE TOLERANCE</span>
                            </div>
                            <div className="font-mono text-sm font-extrabold text-[#2B2B33]">
                              {service.tolerance}
                            </div>
                          </div>

                          <div className="p-4 bg-white brutalist-border">
                            <div className="flex items-center gap-2 font-mono text-xs text-[#6B6B78] uppercase mb-1">
                              <Clock className="w-4 h-4 text-[#F5821F]" />
                              <span>TYPICAL TURNAROUND</span>
                            </div>
                            <div className="font-mono text-sm font-extrabold text-[#2B2B33]">
                              {service.turnaround}
                            </div>
                          </div>
                        </div>

                        {/* Action: Select this service for instant quote */}
                        <div className="pt-2">
                          <a
                            href="#contact"
                            onClick={(e) => {
                              e.preventDefault();
                              if (onSelectService) onSelectService(service);
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-professional-accent px-6 py-3 inline-flex items-center gap-2 cursor-pointer"
                          >
                            <span>SELECT [{service.number}] FOR ESTIMATE INQUIRY</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Right: Ideal Applications & Materials Used */}
                      <div className="lg:col-span-5 bg-white brutalist-border p-6 space-y-6">
                        <div>
                          <div className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#2B2B33] pb-2 brutalist-border-b border-[#E8E8EE] flex items-center justify-between">
                            <span>IDEAL APPLICATIONS</span>
                            <span className="text-[#F5821F] font-mono">[ESSEX]</span>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {service.idealFor.map((app) => (
                              <li key={app} className="flex items-center gap-2.5 font-sans text-sm font-medium text-[#2B2B33]">
                                <Check className="w-4 h-4 text-[#F5821F] shrink-0" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#2B2B33] pb-2 brutalist-border-b border-[#E8E8EE] flex items-center justify-between">
                            <span>CERTIFIED MATERIALS USED</span>
                            <Layers className="w-3.5 h-3.5 text-[#6B6B78]" />
                          </div>
                          <ul className="mt-3 space-y-2">
                            {service.materialsUsed.map((mat) => (
                              <li key={mat} className="font-mono text-xs text-[#3A3A45] bg-[#FAFAFB] px-3 py-1.5 brutalist-border border-[#E8E8EE]">
                                • {mat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#FAFAFB] border border-[#2B2B33] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#F5821F]">
              NEED A BESPOKE ARCHITECTURAL FINISH?
            </div>
            <div className="font-sans text-sm sm:text-base text-[#2B2B33] font-medium mt-1">
              We regularly collaborate with structural engineers, interior designers, and heritage boards across Essex on bespoke specifications.
            </div>
          </div>

          <a
            href="#contact"
            className="btn-professional-dark px-8 py-4 shrink-0 cursor-pointer"
          >
            DISCUSS BESPOKE SPEC [↗]
          </a>
        </div>

      </div>
    </section>
  );
};
