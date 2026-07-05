import React, { useState, useEffect } from 'react';
import { EssexLogo } from './EssexLogo';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'SERVICES', href: '#services', num: '01' },
    { label: 'PROJECT ESTIMATOR', href: '#calculator', num: '02' },
    { label: 'REVIEWS & GUARANTEE', href: '#credibility', num: '03' },
    { label: 'FREE QUOTE', href: '#contact', num: '04' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? 'border-b border-[#2B2B33]' : 'border-b border-[#2B2B33]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo Section */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group block py-2 focus:outline-none focus:ring-2 focus:ring-[#F5821F]"
            aria-label="Essex Plasterers Homepage"
          >
            <EssexLogo className="h-11 sm:h-14 md:h-16" />
          </a>

          {/* Desktop Navigation - Professional Polish Typography */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group flex items-baseline gap-1.5 py-2 font-sans text-xs font-bold tracking-widest uppercase text-[#2B2B33] hover:text-[#F5821F] transition-colors duration-150"
              >
                <span className="text-[#F5821F] font-bold opacity-80 group-hover:opacity-100">{item.num}.</span>
                <span className="font-bold tracking-widest uppercase underline-offset-4 group-hover:underline decoration-[#F5821F] decoration-2">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Direct CTA Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:01245892400"
              className="flex items-center gap-2 px-5 py-3 font-sans text-xs font-bold tracking-widest uppercase text-[#2B2B33] bg-white border-2 border-[#2B2B33] hover:bg-[#2B2B33] hover:text-white transition-all duration-150 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5821F]" />
              <span>01245 892 400</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-white bg-[#2B2B33] border-2 border-[#2B2B33] hover:bg-transparent hover:text-[#2B2B33] transition-all duration-150 cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#2B2B33] border-2 border-[#2B2B33] bg-white focus:outline-none focus:ring-2 focus:ring-[#F5821F]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#2B2B33] px-6 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="font-sans text-[10px] font-bold uppercase text-[#2B2B33] opacity-50 tracking-widest pb-2 border-b border-[#2B2B33]">
            NAVIGATION INDEX // ESSEX PLASTERERS
          </div>
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-baseline justify-between py-3 font-sans text-sm font-bold tracking-widest text-[#2B2B33] hover:text-[#F5821F] border-b border-[#E8E8EE]"
              >
                <span>{item.label}</span>
                <span className="text-[#F5821F] text-xs font-bold">{item.num}.</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:01245892400"
              className="flex items-center justify-center gap-2 w-full py-3 font-sans text-xs font-bold tracking-widest uppercase text-[#2B2B33] bg-white border-2 border-[#2B2B33]"
            >
              <Phone className="w-4 h-4 text-[#F5821F]" />
              <span>CALL 01245 892 400</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 font-sans text-xs font-bold tracking-widest uppercase text-white bg-[#2B2B33] border-2 border-[#2B2B33]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
