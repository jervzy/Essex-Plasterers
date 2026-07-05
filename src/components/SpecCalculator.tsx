import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, Sliders, FileText } from 'lucide-react';

interface SpecCalculatorProps {
  onApplyToForm?: (specData: {
    propertyType: string;
    serviceType: string;
    scale: string;
    estimatedDays: string;
    systemSpec: string;
  }) => void;
}

export const SpecCalculator: React.FC<SpecCalculatorProps> = ({ onApplyToForm }) => {
  const [propertyType, setPropertyType] = useState('Victorian / Period Residence');
  const [serviceType, setServiceType] = useState('[01] Internal Skimming & Plastering');
  const [scale, setScale] = useState('Standard Residence (~100–180m²)');

  // Dynamic calculation logic for typography display
  const getSpecificationDetails = () => {
    let systemSpec = 'British Gypsum Thistle Multi-Finish over high-key bonding coat with alkali-resistant scrim.';
    let bsStandard = 'BS EN 13279-1 Class B1/2 / Laser Tolerance < 1.5mm';
    let estimatedDays = '3–5 Working Days';
    let guidanceNote = 'Includes floor protection, corner bead laser-setting, two-coat trowel polish, and complete site clean-up.';

    if (serviceType.includes('[02]')) {
      systemSpec = 'Weber.pral M Through-Color Monocouche Render or K-Rend Silicone TC 15 with full reinforcement mesh.';
      bsStandard = 'BS EN 998-1 Weatherproof Facade / Zero Cracking Guarantee';
      estimatedDays = scale.includes('Single Room') ? '2–3 Working Days' : scale.includes('Standard') ? '6–8 Working Days' : '10–14 Working Days';
      guidanceNote = 'Includes scaffolding liaison, washdown preparation, bead installation, and machine spray application.';
    } else if (serviceType.includes('[03]')) {
      systemSpec = '3-Month Slaked Lime Putty, Natural Horsehair Fiber, and hand-riven Oak / Chestnut Laths.';
      bsStandard = 'Historic England & BS 7913 Conservation Compliant';
      estimatedDays = scale.includes('Single Room') ? '4–6 Working Days' : '12–18 Working Days';
      guidanceNote = 'Breathable historic restoration preserving architectural undulations and original cornice profiles.';
    } else if (serviceType.includes('[04]')) {
      systemSpec = 'British Gypsum Gypframe Metal Stud Grid with 15mm SoundBloc & FireWall Plasterboard assemblies.';
      bsStandard = 'BS 8212 / 60–120 Minute Fire Resistance Rating';
      estimatedDays = scale.includes('Standard') ? '4–6 Working Days' : '8–15 Working Days';
      guidanceNote = 'Precision laser alignment, acoustic mineral wool cavity insulation, and taped/jointed or skimmed finishes.';
    } else if (serviceType.includes('[05]')) {
      systemSpec = 'Gypsol Anhydrite Flow Screed or Fiber-Reinforced Sand & Cement leveling datum.';
      bsStandard = 'BS 8204-1 SR1 Floor Tolerance (< 3mm over 2m edge)';
      estimatedDays = '1–3 Working Days (Plus controlled curing period)';
      guidanceNote = 'Full underfloor heating pipe encapsulation eliminating air pockets for optimal thermal efficiency.';
    } else if (serviceType.includes('[06]')) {
      systemSpec = 'Authentic Italian Slaked Lime Marmorino / Bi-Component Waterproof Microcement with protective wax.';
      bsStandard = 'Artisanal Architectural Spec / 100% Waterproof (Wet rooms)';
      estimatedDays = '4–7 Working Days (Multi-layer curing)';
      guidanceNote = 'Hand-troweled bespoke surface texture with high-spec hydrophobic protective sealants.';
    }

    if (scale.includes('Single Room')) {
      if (!serviceType.includes('[02]') && !serviceType.includes('[03]') && !serviceType.includes('[06]')) {
        estimatedDays = '1–2 Working Days';
      }
    } else if (scale.includes('Large Residence') || scale.includes('Commercial')) {
      estimatedDays = '10–20+ Working Days (Dedicated multi-craftsman crew)';
    }

    return { systemSpec, bsStandard, estimatedDays, guidanceNote };
  };

  const details = getSpecificationDetails();

  const handleTransferToForm = () => {
    if (onApplyToForm) {
      onApplyToForm({
        propertyType,
        serviceType,
        scale,
        estimatedDays: details.estimatedDays,
        systemSpec: details.systemSpec,
      });
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#FAFAFB] border-t border-b border-[#2B2B33]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#2B2B33] font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B33] mb-4">
            <span className="text-[#F5821F]">02.</span>
            <span>INTERACTIVE SPECIFICATION TOOL</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2B33] tracking-tight uppercase leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            INSTANT PROJECT <br />
            <span className="underline decoration-[#F5821F] decoration-2 underline-offset-8">SPECIFICATION GENERATOR.</span>
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-[#3A3A45] max-w-2xl">
            Select your property profile in Essex and required discipline below. Generate instant typographic technical specifications, BS compliance tolerances, and realistic timeline estimates without waiting for a callback.
          </p>
        </div>

        {/* Professional 2-Column Calculator Grid */}
        <div className="bg-white border-2 border-[#2B2B33] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Interactive Selector Controls */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-8 brutalist-border-b lg:brutalist-border-b-0 lg:border-r border-[#2B2B33]">
            <div className="flex items-center gap-2 font-mono text-xs font-extrabold uppercase tracking-widest text-[#F5821F] pb-3 brutalist-border-b border-[#E8E8EE]">
              <Sliders className="w-4 h-4" />
              <span>STEP 01: SELECT PROJECT PARAMETERS</span>
            </div>

            {/* Parameter 1: Property Type */}
            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                1. PROPERTY CLASSIFICATION [ESSEX]
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-mono text-sm font-semibold text-[#2B2B33] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all cursor-pointer"
              >
                <option value="Victorian / Period Residence">Victorian / Period Georgian Residence (Essex Heritage)</option>
                <option value="Modern Extension / Loft Conversion">Modern Home Extension / Loft Conversion</option>
                <option value="Full New-Build Residential Development">Full New-Build Residential Development</option>
                <option value="Commercial Fit-Out / Office Space">Commercial Office / Retail Fit-Out</option>
                <option value="Grade I or II Listed Building">Grade I or II Listed Historic Structure</option>
              </select>
            </div>

            {/* Parameter 2: Service Required */}
            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                2. PLASTERING / RENDERING DISCIPLINE
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-mono text-sm font-semibold text-[#2B2B33] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all cursor-pointer"
              >
                <option value="[01] Internal Skimming & Plastering">[01] Internal Two-Coat Skimming & Plastering</option>
                <option value="[02] External Rendering & Monocouche">[02] External Monocouche & Weatherproof Silicone Render</option>
                <option value="[03] Heritage Lath & Plaster Restoration">[03] Heritage Lime Plaster & Lath Conservation</option>
                <option value="[04] Commercial Dry Lining & Partitions">[04] Commercial Dry Lining, MF Ceilings & Acoustics</option>
                <option value="[05] Architectural Floor Screeding">[05] Liquid Flow & Anhydrite Floor Screeding</option>
                <option value="[06] Venetian Polished Plaster & Microcement">[06] Venetian Marble Plaster & Seamless Microcement</option>
              </select>
            </div>

            {/* Parameter 3: Scale / Area */}
            <div className="space-y-2">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                3. APPROXIMATE SURFACE AREA SCALE
              </label>
              <select
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-mono text-sm font-semibold text-[#2B2B33] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all cursor-pointer"
              >
                <option value="Single Room / Feature Area (~20–35m²)">Single Room / Feature Area (~20–35m²)</option>
                <option value="Standard Residence (~100–180m²)">Standard 3–4 Bed Residence (~100–180m²)</option>
                <option value="Large Residence / Country Manor (~250–400m²+)">Large Residence / Country Manor (~250–400m²+)</option>
                <option value="Commercial / Multi-Unit Contract (~500m²+)">Commercial / Multi-Unit Contract (~500m²+)</option>
              </select>
            </div>

            <div className="pt-2">
              <div className="p-4 bg-[#FAFAFB] brutalist-border border-[#E8E8EE] font-mono text-xs text-[#6B6B78] leading-relaxed">
                <strong>ESTIMATOR NOTE:</strong> All Essex Plasterers quotations are strictly fixed-price following an on-site laser survey. We never add unexpected extras or hidden material markups.
              </div>
            </div>
          </div>

          {/* Right Column: Generated Typographic Specification Output */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 bg-[#2B2B33] text-white flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-[#F5821F] pb-3 border-b border-[#3A3A45]">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>STEP 02: ARCHITECTURAL SPEC SHEET</span>
                </span>
                <span>[LIVE CALCULATOR]</span>
              </div>

              {/* Typographic Output Card */}
              <div className="space-y-5">
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#A0A0AD] tracking-wider">
                    RECOMMENDED SYSTEM &amp; MATERIALS
                  </div>
                  <div className="mt-1 font-sans text-lg sm:text-xl font-bold text-white leading-snug">
                    {details.systemSpec}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#3A3A45] border border-[#4A4A58]">
                    <div className="font-mono text-[10px] uppercase text-[#F5821F] tracking-wider">
                      BRITISH STANDARD COMPLIANCE
                    </div>
                    <div className="mt-1 font-mono text-xs font-bold text-white">
                      {details.bsStandard}
                    </div>
                  </div>

                  <div className="p-4 bg-[#3A3A45] border border-[#4A4A58]">
                    <div className="font-mono text-[10px] uppercase text-[#F5821F] tracking-wider">
                      ESTIMATED ON-SITE DURATION
                    </div>
                    <div className="mt-1 font-mono text-xs font-bold text-white">
                      {details.estimatedDays}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#1F1F25] border border-[#3A3A45]">
                  <div className="font-mono text-[10px] uppercase text-[#A0A0AD] tracking-wider flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F5821F]" />
                    <span>INCLUDED SITE GUARANTEES</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#D0D0DC] leading-relaxed">
                    {details.guidanceNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button: Transfer spec to contact form */}
            <div className="pt-8 mt-8 border-t border-[#3A3A45]">
              <button
                type="button"
                onClick={handleTransferToForm}
                className="btn-professional-accent w-full py-4 px-6 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>TRANSFER SPEC TO INQUIRY FORM</span>
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
