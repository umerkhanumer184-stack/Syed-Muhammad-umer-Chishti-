import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { TabId } from './Navbar.tsx';
import { 
  ArrowUp, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const platforms = [
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com',
      badge: 'PRO SELLER',
      color: 'hover:border-emerald-500 hover:text-emerald-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      badge: 'CODE REPO',
      color: 'hover:border-slate-300 hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      badge: 'NETWORK',
      color: 'hover:border-blue-400 hover:text-blue-400',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      badge: 'AGENCY FEED',
      color: 'hover:border-pink-500 hover:text-pink-400',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/923141114626?text=Hello%20Syed%20Muhammad%20Umer%2C%20I%20reached%20out%20through%20SU%20Digital%20Portfolio.',
      badge: '+92 314 1114626',
      color: 'hover:border-[#10B981] hover:text-[#10B981]',
    },
  ];

  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#070a10] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Brand & Owner Info */}
          <div className="space-y-3">
            <BrandLogo size="md" />
            <p className="text-xs text-slate-300 max-w-md pt-1 leading-relaxed">
              Founded &amp; Directed by <strong className="text-white">Syed Muhammad Umer Chishti</strong>. High-velocity Single Page Applications, mission-critical financial tech, and athlete-grade execution discipline.
            </p>
          </div>

          {/* Platform & Social Badges */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider">
              Verified Platform Presences
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg bg-[#0d1422] border border-white/10 text-xs font-mono-code text-slate-300 transition-all flex items-center gap-1.5 ${platform.color} group`}
                >
                  <span>{platform.name}</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-white/5 text-slate-400 group-hover:text-inherit">
                    {platform.badge}
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono-code cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Nav Links */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#00ff88] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="text-slate-400 text-[11px]">
            Direct: <a href="mailto:syedumer.digital@gmail.com" className="text-[#00ff88] hover:underline">syedumer.digital@gmail.com</a>
          </div>
        </div>

        {/* Bottom Copyright Bar with Exact Text Requested */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-mono-code">
          <div>
            © 2026 SU Digital by Syed Muhammad Umer Chishti. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Karachi, Pakistan</span>
            <span aria-hidden="true">·</span>
            <span>Global Edge Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
