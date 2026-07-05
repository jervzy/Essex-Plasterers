import React from 'react';
import { ArrowUpRight, ArrowDown, CheckCircle2, Shield, Award, MapPin } from 'lucide-react';
import { ESSEX_COVERAGE_AREAS } from '../data/servicesData';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onEstimateClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onEstimateClick,
}) => {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 bg-white overflow-hidden">
      {/* Top Architectural Metadata Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 py-2 px-3 sm:px-4 bg-[#FAFAFB] border border-[#2B2B33] font-sans text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2B2B33]">
          <span className="flex items-center gap-1.5 text-[#F5821F] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#F5821F] animate-pulse"></span>
            <span>LOCAL CRAFTSMANSHIP</span>
          </span>
          <span className="text-[#A0A0AD]">/</span>
          <span>EST. 1998 // ESSEX, UNITED KINGDOM</span>
          <span className="text-[#A0A0AD] hidden md:inline">/</span>
          <span className="hidden md:inline">PREMIUM RESIDENTIAL &amp; COMMERCIAL PLASTERING</span>
        </div>
      </div>

      {/* Main Monumental Typography Hero Headline */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl">
          <h1 
            className="text-[#2B2B33] font-black text-5xl sm:text-7xl lg:text-[100px] xl:text-[110px] tracking-tighter leading-[0.9] uppercase selection:bg-[#F5821F] selection:text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            FLAWLESS SURFACES. <br />
            UNCOMPROMISING <br />
            <span className="relative inline-block">
              CRAFTSMANSHIP.
              {/* Solid orange accent block underline on "CRAFTSMANSHIP." matching Professional Polish */}
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-32 sm:w-48 h-3 sm:h-4 bg-[#F5821F] -z-10"></span>
            </span> <br />
            ACROSS ESSEX.
          </h1>

          {/* Editorial Subtext & Restrained Contrast */}
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-[#2B2B33] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#2B2B33] opacity-90 max-w-2xl">
                We deliver mirror-smooth internal skimming, durable exterior rendering, and heritage lime plastering for residential homes and commercial projects across Essex. Clean, reliable trade craftsmanship built to last. <strong className="font-bold text-[#2B2B33] underline decoration-[#F5821F] decoration-2 underline-offset-4">No shortcuts, no mess, finished to perfection.</strong>
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onEstimateClick) onEstimateClick();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-professional-dark px-8 sm:px-10 py-4 sm:py-5 inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>REQUEST A FREE QUOTE</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onExploreClick) onExploreClick();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-[#2B2B33] text-xs font-bold uppercase tracking-[0.2em] border-2 border-[#2B2B33] hover:bg-[#2B2B33] hover:text-white transition-all duration-150 inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5821F]" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Architectural Guarantees */}
            <div className="lg:col-span-5 bg-[#FAFAFB] border border-[#2B2B33] p-6 sm:p-8 space-y-5">
              <div className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#2B2B33] opacity-70 pb-3 border-b border-[#E8E8EE] flex items-center justify-between">
                <span>WHY CHOOSE US</span>
                <span className="text-[#F5821F] font-bold">[EST. 1998]</span>
              </div>

              <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#2B2B33] font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5821F] shrink-0 mt-0.5" />
                  <span><strong>Mirror-Smooth Finish:</strong> Expert internal skimming ready for direct painting or high-end decoration.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#F5821F] shrink-0 mt-0.5" />
                  <span><strong>Clean &amp; Reliable:</strong> We protect your home, keep dust down, and finish on agreed schedules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#F5821F] shrink-0 mt-0.5" />
                  <span><strong>Fully Guaranteed:</strong> 10-year guarantee on exterior renders and £10M public liability insurance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Live Monospace Coverage Bulletin / Ticker */}
      <div className="mt-16 sm:mt-24 border-y border-[#2B2B33] bg-[#FAFAFB] py-3.5 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B33] shrink-0">
            <MapPin className="w-4 h-4 text-[#F5821F]" />
            <span>AREAS COVERED ACROSS ESSEX:</span>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar font-sans text-xs font-bold text-[#2B2B33] tracking-widest whitespace-nowrap">
            {ESSEX_COVERAGE_AREAS.slice(0, 10).map((area, index) => (
              <React.Fragment key={area}>
                <span className="hover:text-[#F5821F] transition-colors">{area}</span>
                {index < 9 && <span className="text-[#D0D0DC]">•</span>}
              </React.Fragment>
            ))}
            <span className="text-[#F5821F] font-bold">+ ALL SURROUNDING DISTRICTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
