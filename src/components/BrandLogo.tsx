import React from 'react';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Logo with exact local path "./Logo.jpg" and glowing border */}
      <div className={`relative ${iconSize} rounded-full overflow-hidden bg-[#0a0f18] p-0.5 flex items-center justify-center border-2 border-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.35)] shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <img
          src="./Logo.jpg"
          alt="SU Digital Logo"
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // Graceful fallback to SVG if image not yet in target directory
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement?.classList.add('fallback-svg-active');
          }}
        />
        {/* Hidden fallback SVG emblem in case ./Logo.jpg is loading */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1 drop-shadow-[0_0_6px_#00ff88] hidden [&.fallback-svg-active_&]:block"
        >
          <circle cx="50" cy="50" r="46" stroke="#00ff88" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 3" />
          <path d="M26 68 L74 24" stroke="#00ff88" strokeWidth="5" strokeLinecap="round" />
          <path d="M62 26 H42 C34 26 28 32 28 40 C28 48 34 53 44 55 L54 57 C64 59 70 64 70 72 C70 80 64 86 52 86 H32" stroke="#00ff88" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M68 34 V60 C68 70 60 76 48 76 C38 76 35 70 35 62" stroke="#00ff88" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.9" />
          <circle cx="72" cy="24" r="2.5" fill="#fbbf24" />
        </svg>
      </div>

      {/* Brand Text Block - Side-by-Side Flexbox */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-display font-extrabold tracking-tight text-white ${titleSize} whitespace-nowrap`}>
            SU Digital
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 shadow-[0_0_8px_rgba(16,185,129,0.2)] whitespace-nowrap">
            Syed Muhammad Umer Chishti
          </span>
        </div>
        {showSubtitle && (
          <span className="sm:hidden text-[10px] text-slate-400 font-mono-code truncate max-w-[170px]">
            Syed Muhammad Umer Chishti
          </span>
        )}
      </div>
    </div>
  );
};
