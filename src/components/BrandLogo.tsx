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
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem matching SU Digital official emblem */}
      <div className={`relative ${iconSize} rounded-full bg-[#0a0f18] p-1.5 flex items-center justify-center border border-[#00ff88]/50 shadow-[0_0_15px_rgba(0,255,136,0.3)] shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_6px_#00ff88]"
        >
          {/* Outer circle */}
          <circle cx="50" cy="50" r="46" stroke="#00ff88" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 3" />
          
          {/* Diagonal Slash Line */}
          <path
            d="M26 68 L74 24"
            stroke="#00ff88"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Letter S Top Loop */}
          <path
            d="M62 26 H42 C34 26 28 32 28 40 C28 48 34 53 44 55 L54 57 C64 59 70 64 70 72 C70 80 64 86 52 86 H32"
            stroke="#00ff88"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter U Loop interlocking */}
          <path
            d="M68 34 V60 C68 70 60 76 48 76 C38 76 35 70 35 62"
            stroke="#00ff88"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          {/* Core Accent Dot */}
          <circle cx="72" cy="24" r="2.5" fill="#fbbf24" />
        </svg>
      </div>

      {/* Brand Text Block - Side-by-Side Flexbox */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-display font-extrabold tracking-tight text-white ${titleSize} whitespace-nowrap`}>
            SU Digital
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded-full bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 shadow-[0_0_8px_rgba(0,255,136,0.15)] whitespace-nowrap">
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
