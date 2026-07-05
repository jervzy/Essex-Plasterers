import React from 'react';
import { CREDIBILITY_LOGS } from '../data/servicesData';
import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react';

export const CredibilitySection: React.FC = () => {
  return (
    <section id="credibility" className="py-20 sm:py-28 lg:py-36 bg-white border-t border-b border-[#2B2B33]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFB] border border-[#2B2B33] font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B33] mb-4">
            <span className="text-[#F5821F]">03.</span>
            <span>HERITAGE &amp; CREDIBILITY</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2B33] tracking-[-0.03em] uppercase leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THE ESSEX STANDARD OF <br />
            <span className="underline decoration-[#F5821F] decoration-2 underline-offset-8">UNCOMPROMISING FINISH.</span>
          </h2>

          <div className="mt-8 pt-8 border-t border-[#2B2B33] max-w-3xl">
            <p className="font-sans text-lg sm:text-xl font-medium text-[#2B2B33] opacity-90 leading-relaxed">
              In an industry frequently degraded by rushed labor and uneven surface tolerances, Essex Plasterers operates under a singular mandate: <strong className="font-bold text-[#2B2B33] underline decoration-[#F5821F] decoration-2 underline-offset-4">preparation is as vital as the polish.</strong> For over two continuous decades, we have partnered with Essex’s most discerning homeowners, heritage conservation boards, and commercial site managers to engineer surfaces that endure for generations.
            </p>
          </div>
        </div>

        {/* 4-Column Typographic Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#2B2B33] border-2 border-[#2B2B33]">
          
          {/* Stat 1 */}
          <div className="p-6 sm:p-8 border-b sm:border-r border-[#3A3A45] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#F5821F] uppercase tracking-widest">
                [CONTINUOUS TRADE]
              </span>
              <Shield className="w-4 h-4 text-[#A0A0AD]" />
            </div>
            <div className="mt-6 font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              25+ <span className="text-xl sm:text-2xl text-[#F5821F]">YRS</span>
            </div>
            <p className="mt-3 font-sans text-xs sm:text-sm text-[#D0D0DC] leading-relaxed">
              Serving residential &amp; commercial clients across Essex without interruption since 1998.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 sm:p-8 border-b lg:border-r border-[#3A3A45] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#F5821F] uppercase tracking-widest">
                [TOLERANCE DATUM]
              </span>
              <Award className="w-4 h-4 text-[#A0A0AD]" />
            </div>
            <div className="mt-6 font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              &lt; 1.5 <span className="text-xl sm:text-2xl text-[#F5821F]">MM</span>
            </div>
            <p className="mt-3 font-sans text-xs sm:text-sm text-[#D0D0DC] leading-relaxed">
              Maximum surface deviation checked over a 3-meter laser straight edge for mirror skims.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-[#3A3A45] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#F5821F] uppercase tracking-widest">
                [COMPLETED WORKS]
              </span>
              <CheckCircle className="w-4 h-4 text-[#A0A0AD]" />
            </div>
            <div className="mt-6 font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              1,400+
            </div>
            <p className="mt-3 font-sans text-xs sm:text-sm text-[#D0D0DC] leading-relaxed">
              Residential refits, heritage restorations, and commercial dry lining contracts delivered to BS 5262.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#F5821F] uppercase tracking-widest">
                [FULL INDEMNITY]
              </span>
              <FileCheck className="w-4 h-4 text-[#A0A0AD]" />
            </div>
            <div className="mt-6 font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              £10M
            </div>
            <p className="mt-3 font-sans text-xs sm:text-sm text-[#D0D0DC] leading-relaxed">
              Comprehensive Public Liability &amp; Employer Indemnity Insurance covering high-value listed estates.
            </p>
          </div>

        </div>

        {/* Architectural Field Logs / Testimonial Quotes (100% Typography Driven, Zero Imagery) */}
        <div className="mt-20 sm:mt-24">
          <div className="flex items-center justify-between mb-8 pb-3 brutalist-border-b border-[#2B2B33]">
            <h3 className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2B2B33]">
              VERIFIED ARCHITECTURAL SITE LOGS &amp; CLIENT TESTIMONIALS //
            </h3>
            <span className="font-mono text-xs font-bold text-[#F5821F] hidden sm:inline">
              [BS EN 13279 AUDITED]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CREDIBILITY_LOGS.map((log) => (
              <article 
                key={log.logId}
                className="bg-[#FAFAFB] brutalist-border p-6 sm:p-8 flex flex-col justify-between hover:bg-white transition-all duration-150 group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#6B6B78] pb-3 brutalist-border-b border-[#E8E8EE]">
                    <span className="font-bold text-[#2B2B33]">{log.logId}</span>
                    <span className="text-[#F5821F] font-bold">{log.date}</span>
                  </div>

                  <div className="mt-4 font-mono text-xs font-extrabold uppercase tracking-wider text-[#2B2B33]">
                    {log.location}
                  </div>
                  <div className="font-sans text-xs text-[#6B6B78] mt-0.5">
                    {log.projectScope}
                  </div>

                  <blockquote className="mt-6 font-sans text-sm sm:text-base text-[#2B2B33] leading-relaxed italic">
                    &ldquo;{log.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-8 pt-4 brutalist-border-t border-[#E8E8EE] flex items-center justify-between font-mono text-xs text-[#2B2B33]">
                  <span className="font-bold uppercase">{log.clientType}</span>
                  <span className="text-[#F5821F] font-bold">★ 5.0</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* British Standard Compliance Assurance Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white brutalist-border flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#2B2B33]">
              BRITISH STANDARD COMPLIANCE GUARANTEE
            </div>
            <p className="font-sans text-sm text-[#6B6B78] max-w-3xl">
              All materials supplied and installed by Essex Plasterers strictly conform to BS EN 13279-1 (Gypsum Plasters), BS EN 998-1 (Rendering Mortars), and BS 5262 (Code of practice for external renderings).
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs font-extrabold px-4 py-2.5 bg-[#FAFAFB] brutalist-border text-[#2B2B33]">
            [ZERO-SNAG MANDATE]
          </div>
        </div>

      </div>
    </section>
  );
};
