import React from 'react';
import { EssexLogo } from './EssexLogo';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { ESSEX_COVERAGE_AREAS } from '../data/servicesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#2B2B33] pt-16 sm:pt-20 border-t border-[#2B2B33] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-12">
        
        {/* Top Grid: Logo, Architectural Statement, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b border-[#2B2B33]">
          
          {/* Col 1: Logo & Philosophy (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block bg-white py-2">
              <EssexLogo className="h-9 sm:h-10" />
            </div>

            <p className="font-sans text-sm text-[#2B2B33] opacity-80 leading-relaxed max-w-sm font-medium">
              Premier residential and commercial plastering contractors across Essex, UK. Engineering mirror-smooth internal skims, durable external monocouche renders, and heritage lime restorations to strict British Standards since 1998.
            </p>

            <div className="flex items-center gap-2 font-sans text-xs text-[#2B2B33] font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4 text-[#F5821F]" />
              <span>BS EN 13279-1 / BS 5262 COMPLIANT CONTRACTOR</span>
            </div>
          </div>

          {/* Col 2: Navigation Index (Spans 3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#2B2B33] opacity-50 pb-2 border-b border-[#2B2B33]">
              NAVIGATION INDEX
            </div>
            <ul className="space-y-2.5 font-sans text-xs font-bold tracking-wider uppercase">
              <li>
                <a href="#services" className="text-[#2B2B33] hover:text-[#F5821F] transition-colors flex items-center justify-between">
                  <span>01. SERVICES CATALOGUE</span>
                  <span className="text-[#F5821F]">→</span>
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#2B2B33] hover:text-[#F5821F] transition-colors flex items-center justify-between">
                  <span>02. SPEC CALCULATOR</span>
                  <span className="text-[#F5821F]">→</span>
                </a>
              </li>
              <li>
                <a href="#credibility" className="text-[#2B2B33] hover:text-[#F5821F] transition-colors flex items-center justify-between">
                  <span>03. CREDIBILITY &amp; STATS</span>
                  <span className="text-[#F5821F]">→</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#2B2B33] hover:text-[#F5821F] transition-colors flex items-center justify-between">
                  <span>04. WRITTEN ESTIMATES</span>
                  <span className="text-[#F5821F]">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Primary Service Districts (Spans 4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#2B2B33] opacity-50 pb-2 border-b border-[#2B2B33]">
              PRIMARY ESSEX BOROUGHS
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ESSEX_COVERAGE_AREAS.slice(0, 12).map((area) => (
                <span 
                  key={area} 
                  className="font-sans text-[10px] font-bold px-2.5 py-1 bg-[#FAFAFB] text-[#2B2B33] border border-[#2B2B33]"
                >
                  {area}
                </span>
              ))}
              <span className="font-sans text-[10px] font-bold px-2.5 py-1 bg-[#2B2B33] text-white">
                + ALL ESSEX POSTCODES
              </span>
            </div>
            <div className="pt-2 font-sans text-xs text-[#2B2B33] opacity-70 font-medium">
              HQ: Unit 4, Chelmsford Trade Park, CM2 5LN
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans text-xs text-[#2B2B33] opacity-70 font-medium">
          <div>
            &copy; {new Date().getFullYear()} ESSEX PLASTERERS LTD. ALL RIGHTS RESERVED // REG IN ENGLAND &amp; WALES #04928112
          </div>

          <div className="flex items-center gap-6">
            <span className="font-bold">BS EN 13279-1</span>
            <span>•</span>
            <span className="font-bold">BS 5262</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-[#2B2B33] text-white hover:bg-[#F5821F] transition-colors font-bold text-[10px] uppercase tracking-widest cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Signature Professional Polish Bottom Accent Bar */}
      <div className="w-full h-1.5 bg-[#F5821F]"></div>
    </footer>
  );
};
