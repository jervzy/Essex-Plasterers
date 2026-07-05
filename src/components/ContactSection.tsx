import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';
import { ESSEX_COVERAGE_AREAS } from '../data/servicesData';

interface ContactSectionProps {
  initialSpec?: {
    propertyType: string;
    serviceType: string;
    scale: string;
    estimatedDays: string;
    systemSpec: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSpec }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('CHELMSFORD');
  const [service, setService] = useState('[01] Internal Skimming & Plastering');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptRef, setReceiptRef] = useState('');

  // Auto-fill when initialSpec changes from SpecCalculator or Services list
  useEffect(() => {
    if (initialSpec) {
      setService(initialSpec.serviceType);
      const autoNote = `[PRE-LOADED SPECIFICATION FROM CALCULATOR]\n• Property: ${initialSpec.propertyType}\n• Scale: ${initialSpec.scale}\n• Recommended System: ${initialSpec.systemSpec}\n• Estimated Duration: ${initialSpec.estimatedDays}\n\nPlease provide a written estimate for this specification.`;
      setDetails(autoNote);
    }
  }, [initialSpec]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate brutalist reference number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `EP-2026-${randomNum}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setReceiptRef(ref);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDetails('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-white border-t border-b border-[#2B2B33]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFB] border border-[#2B2B33] font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B33] mb-4">
            <span className="text-[#F5821F]">04.</span>
            <span>CONTACT &amp; ESTIMATES</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2B33] tracking-[-0.03em] uppercase leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            INITIATE A WRITTEN <br />
            <span className="underline decoration-[#F5821F] decoration-2 underline-offset-8">FIXED-PRICE ESTIMATE.</span>
          </h2>
          
          <p className="mt-6 font-sans text-base sm:text-lg text-[#3A3A45] max-w-2xl leading-relaxed">
            We do not issue vague verbal estimates. Fill out the specification form below or contact our Chelmsford dispatch office directly. All site visits and written estimates across Essex are complimentary and valid for 30 days.
          </p>
        </div>

        {/* 2-Column Restrained Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Communication Channels & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAFAFB] brutalist-border p-6 sm:p-8 space-y-6">
              <div className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#2B2B33] pb-3 brutalist-border-b border-[#E8E8EE] flex items-center justify-between">
                <span>DIRECT TRADE CHANNELS</span>
                <span className="text-[#F5821F] font-mono">[ESSEX HQ]</span>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white brutalist-border text-[#2B2B33] shrink-0">
                  <Phone className="w-5 h-5 text-[#F5821F]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#6B6B78] tracking-wider">
                    TELEPHONE ESTIMATES &amp; SITE DISPATCH
                  </div>
                  <a 
                    href="tel:01245892400" 
                    className="block font-mono text-lg sm:text-xl font-extrabold text-[#2B2B33] hover:text-[#F5821F] transition-colors mt-0.5"
                  >
                    01245 892 400
                  </a>
                  <div className="font-sans text-xs text-[#6B6B78] mt-1">
                    Direct Mobile / Senior Surveyor: <strong>07700 900 842</strong>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 brutalist-border-t border-[#E8E8EE]">
                <div className="p-3 bg-white brutalist-border text-[#2B2B33] shrink-0">
                  <Mail className="w-5 h-5 text-[#F5821F]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#6B6B78] tracking-wider">
                    ELECTRONIC SPECIFICATIONS &amp; PLANS
                  </div>
                  <a 
                    href="mailto:estimates@essexplasterers.co.uk" 
                    className="block font-mono text-sm sm:text-base font-extrabold text-[#2B2B33] hover:text-[#F5821F] transition-colors mt-0.5 break-all"
                  >
                    estimates@essexplasterers.co.uk
                  </a>
                  <div className="font-sans text-xs text-[#6B6B78] mt-1">
                    PDF architectural drawings &amp; BOQ accepted.
                  </div>
                </div>
              </div>

              {/* Yard / Address */}
              <div className="flex items-start gap-4 pt-4 brutalist-border-t border-[#E8E8EE]">
                <div className="p-3 bg-white brutalist-border text-[#2B2B33] shrink-0">
                  <MapPin className="w-5 h-5 text-[#F5821F]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#6B6B78] tracking-wider">
                    ESSEX TRADE YARD &amp; OFFICE
                  </div>
                  <div className="font-sans text-sm font-semibold text-[#2B2B33] mt-0.5">
                    Unit 4, Chelmsford Trade Park
                  </div>
                  <div className="font-sans text-xs text-[#6B6B78] mt-0.5">
                    Chelmsford, Essex, CM2 5LN (By Appointment)
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 brutalist-border-t border-[#E8E8EE]">
                <div className="p-3 bg-white brutalist-border text-[#2B2B33] shrink-0">
                  <Clock className="w-5 h-5 text-[#F5821F]" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase text-[#6B6B78] tracking-wider">
                    OPERATIONAL HOURS
                  </div>
                  <div className="font-mono text-xs font-bold text-[#2B2B33] mt-0.5">
                    MON – FRI: 07:00 – 17:30
                  </div>
                  <div className="font-mono text-xs text-[#6B6B78] mt-0.5">
                    SAT: 08:00 – 13:00 // SUN: EMERGENCY SITE CALLOUTS ONLY
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Essex Coverage Index */}
            <div className="bg-[#2B2B33] text-white p-6 sm:p-8 brutalist-border brutalist-shadow">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#F5821F] pb-3 border-b border-[#3A3A45] flex items-center justify-between">
                <span>ACTIVE ESSEX SERVICE DISTRICTS</span>
                <span>[100% COVERAGE]</span>
              </div>
              <p className="mt-4 font-sans text-xs text-[#D0D0DC] leading-relaxed">
                We maintain active teams across all primary Essex boroughs and surrounding countryside:
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {ESSEX_COVERAGE_AREAS.map((area) => (
                  <span 
                    key={area} 
                    className="font-mono text-[10px] uppercase font-semibold px-2 py-1 bg-[#3A3A45] text-white border border-[#4A4A58]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Typography Inquiry Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[#2B2B33] p-6 sm:p-10 lg:p-12">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 brutalist-border-b border-[#E8E8EE]">
                  <h3 className="font-mono text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#2B2B33]">
                    PROJECT SPECIFICATION &amp; SURVEY REQUEST //
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#F5821F]">
                    [CONFIDENTIAL]
                  </span>
                </div>

                {/* Name & Phone in Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                      FULL NAME / COMPANY *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Harrison (Harrison Builds)"
                      className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-sans text-sm text-[#2B2B33] placeholder:text-[#A0A0AD] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                      DIRECT TELEPHONE NUMBER *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07700 900 123"
                      className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-mono text-sm text-[#2B2B33] placeholder:text-[#A0A0AD] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email & Location in Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. david@harrisonbuilds.co.uk"
                      className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-sans text-sm text-[#2B2B33] placeholder:text-[#A0A0AD] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                      ESSEX LOCATION / DISTRICT *
                    </label>
                    <select
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-mono text-sm font-semibold text-[#2B2B33] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all cursor-pointer"
                    >
                      {ESSEX_COVERAGE_AREAS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                      <option value="OTHER_ESSEX">OTHER ESSEX LOCATION</option>
                    </select>
                  </div>
                </div>

                {/* Service Discipline Selector */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33]">
                    PRIMARY DISCIPLINE REQUIRED *
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-mono text-sm font-semibold text-[#2B2B33] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="[01] Internal Skimming & Plastering">[01] Internal Skimming &amp; Plastering</option>
                    <option value="[02] External Rendering & Monocouche">[02] External Rendering &amp; Monocouche</option>
                    <option value="[03] Heritage Lath & Plaster Restoration">[03] Heritage Lath &amp; Plaster Restoration</option>
                    <option value="[04] Commercial Dry Lining & Partitions">[04] Commercial Dry Lining &amp; Partitions</option>
                    <option value="[05] Architectural Floor Screeding">[05] Architectural Floor Screeding</option>
                    <option value="[06] Venetian Polished Plaster & Microcement">[06] Venetian Polished Plaster &amp; Microcement</option>
                  </select>
                </div>

                {/* Scope Details / Notes */}
                <div className="space-y-2">
                  <label htmlFor="details" className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2B2B33] flex items-center justify-between">
                    <span>APPROXIMATE AREA, TIMELINE OR ARCHITECTURAL NOTES</span>
                    <span className="font-normal text-[11px] text-[#6B6B78]">[OPTIONAL]</span>
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g. 4-bedroom Victorian home in Brentwood. Full re-skim of ground floor ceiling and staircase hall (~120m²). Ready for site survey next week."
                    className="w-full px-4 py-3.5 bg-[#FAFAFB] brutalist-border font-sans text-sm text-[#2B2B33] placeholder:text-[#A0A0AD] focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:bg-white transition-all"
                  ></textarea>
                </div>

                {/* Guarantee Note */}
                <div className="flex items-start gap-2.5 p-4 bg-[#FAFAFB] brutalist-border border-[#E8E8EE]">
                  <ShieldCheck className="w-4 h-4 text-[#F5821F] shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-[#6B6B78] leading-relaxed">
                    By submitting this request, your details are sent directly to our senior estimator team in Chelmsford. Your data is never shared with third parties.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-professional-accent w-full py-4 px-6 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>DISPATCHING SPECIFICATION TO ESSEX HQ...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT SPECIFICATION FOR 48-HOUR ESTIMATE</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* High-Contrast Typographic Confirmation Receipt State */
              <div className="py-8 sm:py-12 space-y-8 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-6 bg-[#FAFAFB] brutalist-border border-[#2B2B33] space-y-6">
                  <div className="flex items-center justify-between pb-4 brutalist-border-b border-[#2B2B33]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-[#F5821F]" />
                      <span className="font-mono text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#2B2B33]">
                        SPECIFICATION RECEIVED //
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold px-3 py-1 bg-[#2B2B33] text-white">
                      {receiptRef}
                    </span>
                  </div>

                  <div className="space-y-3 font-sans text-sm sm:text-base text-[#2B2B33] leading-relaxed">
                    <p>
                      Thank you, <strong className="font-extrabold underline decoration-[#F5821F] decoration-2">{name}</strong>. Your project specification for <strong className="font-bold">{service}</strong> in <strong className="font-bold">{location}</strong> has been logged in our Essex estimator dispatch system.
                    </p>
                    <p>
                      Our senior surveyor has been notified and will review your scope requirements. You will receive a direct telephone call or confirmation email at <strong className="font-mono text-xs bg-white px-2 py-1 brutalist-border border-[#E8E8EE]">{email || phone}</strong> within 24 business hours.
                    </p>
                  </div>

                  <div className="p-4 bg-white brutalist-border font-mono text-xs text-[#6B6B78] space-y-1">
                    <div className="flex justify-between">
                      <span>DISPATCH STATUS:</span>
                      <strong className="text-[#F5821F]">ASSIGNED TO SENIOR SURVEYOR</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>ESTIMATED SURVEY TURNAROUND:</span>
                      <strong>WITHIN 24–48 HOURS</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>COMPLIANCE DATUM:</span>
                      <strong>BS EN 13279 / BS 5262</strong>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3.5 px-6 font-mono text-xs font-bold tracking-widest uppercase text-[#2B2B33] bg-white brutalist-border hover:bg-[#FAFAFB] transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4 text-[#F5821F]" />
                  <span>SUBMIT ANOTHER PROJECT SPECIFICATION</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
