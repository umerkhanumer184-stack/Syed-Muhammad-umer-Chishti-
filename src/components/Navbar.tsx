import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export type TabId = 'home' | 'about' | 'services' | 'skills' | 'projects' | 'contact';

interface NavbarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0a0d14]/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <button
          onClick={() => handleTabClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] rounded-lg group"
          aria-label="SU Digital Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Zone 2: Primary Single-Line Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0e1422]/70 border border-white/[0.06] shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`relative px-4 py-2 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 rounded-lg whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88] ${
                  isActive
                    ? 'text-white bg-[#162136] border border-[#00ff88]/30 shadow-[0_0_12px_rgba(0,255,136,0.15)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleTabClick('contact')}
            className="group relative px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase font-mono-code text-[#0a0d14] bg-[#00ff88] hover:bg-[#10b981] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,136,0.25)] hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0a0d14] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#111827] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c101a]/95 backdrop-blur-2xl px-4 py-5 animate-view-in space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#152033] text-[#00ff88] border border-[#00ff88]/30 font-semibold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <button
            onClick={() => handleTabClick('contact')}
            className="w-full py-3 rounded-lg text-center font-mono-code text-xs font-bold uppercase tracking-wider text-[#0a0d14] bg-[#00ff88] hover:bg-[#10b981] shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#0a0d14]" />
            <span>Get In Touch</span>
          </button>
        </div>
      )}
    </header>
  );
};
