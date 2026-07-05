import React from 'react';

interface EssexLogoProps {
  className?: string;
  variant?: 'default' | 'monochrome' | 'nav' | 'footer';
  scale?: number;
}

export const EssexLogo: React.FC<EssexLogoProps> = ({
  className = "h-10",
  variant = 'default',
}) => {
  const charcoal = variant === 'monochrome' ? '#2B2B33' : '#2B2B33';
  const orange = variant === 'monochrome' ? '#2B2B33' : '#F5821F';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="https://res.cloudinary.com/rputz8l5/image/upload/v1783257974/logo_caoa6x.png"
        alt="Essex Plasterers Ltd Logo"
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );
};
