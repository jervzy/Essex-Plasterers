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
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Graphic Mark: Orange Swoosh & Angled Plastering Trowel */}
      <svg
        viewBox="0 0 160 140"
        className="h-full w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Orange Swoosh - Dynamic curved plastering swipe with 3 top trailing tails */}
        <path
          d="M125 32C95 32 58 48 35 78C22 96 22 118 35 130C52 145 88 132 108 112C118 102 125 88 128 78L108 85C104 95 95 108 82 118C65 130 38 135 28 120C18 105 22 78 40 58C62 34 92 20 128 20C136 20 145 21 152 23C138 21 125 24 112 30C128 26 142 26 156 29C145 28 132 30 122 36C134 32 148 32 160 36C148 34 135 34 125 38V32Z"
          fill={orange}
        />
        <path
          d="M158 35C140 31 120 34 102 44C80 57 58 78 46 102C38 116 38 130 46 136C56 142 75 138 90 128C108 116 122 96 130 80L112 88C106 100 95 114 80 122C66 130 52 132 46 125C40 118 42 104 52 90C66 70 88 50 112 40C128 34 144 32 158 35Z"
          fill={orange}
        />

        {/* Trowel Handle - Rounded dark charcoal grip */}
        <path
          d="M45 138L32 125C29 122 29 116 32 113L50 95C53 92 59 92 62 95L75 108C78 111 78 117 75 120L57 138C54 141 48 141 45 138Z"
          fill={charcoal}
        />

        {/* Trowel Shank / Connector */}
        <path
          d="M62 95L82 75C85 72 90 72 93 75L98 80C101 83 101 88 98 91L78 111L62 95Z"
          fill="#4A4A58"
        />

        {/* Trowel Blade - Angled steel blade pointing up and right into swoosh */}
        <path
          d="M72 102L118 56C122 52 128 52 132 56L152 76C156 80 156 86 152 90L106 136C102 140 96 140 92 136L72 116C68 112 68 106 72 102Z"
          fill={charcoal}
        />
        <path
          d="M85 92L120 57L145 82L110 117L85 92Z"
          fill={charcoal}
        />
      </svg>

      {/* Typographic Lockup - Architectural Geometric Sans */}
      <div className="flex flex-col justify-center leading-none tracking-tight">
        <span 
          className="font-extrabold text-[1.45rem] tracking-[-0.03em] uppercase transition-colors duration-200"
          style={{ 
            fontFamily: 'var(--font-display)', 
            color: charcoal,
            lineHeight: '0.9' 
          }}
        >
          ESSEX
        </span>
        <span 
          className="font-bold text-[0.82rem] tracking-[0.22em] uppercase mt-1"
          style={{ 
            fontFamily: 'var(--font-display)', 
            color: orange,
            lineHeight: '1' 
          }}
        >
          PLASTERERS
        </span>
      </div>
    </div>
  );
};
