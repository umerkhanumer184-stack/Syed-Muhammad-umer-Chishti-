import React from 'react';
import { TabId } from '../Navbar.tsx';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Flame,
  Code2,
  TrendingUp,
  Download
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: TabId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-6 lg:py-10 animate-view-in">
      {/* Hero Section Split Layout */}
      <section className="relative overflow-hidden rounded-3xl glass-panel border border-white/[0.08] p-8 sm:p-10 lg:p-14 shadow-2xl">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Lead Kicker - Clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
              <span className="text-[#00ff88] font-semibold">SU DIGITAL ARCHITECTURE</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>EST. 2022</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400">FLAGSHIP PORTFOLIO</span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              Hello World, I'm <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#00ff88] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                Syed Muhammad Umer Chishti
              </span>
            </h1>

            {/* Professional Title & Bio */}
            <p className="text-base sm:text-lg text-[#00ff88] font-semibold font-display tracking-wide">
              Founder &amp; Lead Architect at SU Digital | Web Developer &amp; UI Specialist
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Architecting ultra-modern, high-velocity single-page applications, mission-critical financial interfaces, and bespoke glassmorphism digital ecosystems. Engineered with athlete-grade discipline, mathematically composed typography, and zero-compromise runtime performance.
            </p>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 rounded-xl bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all duration-200 flex items-center gap-2.5 active:scale-95 cursor-pointer font-mono-code"
              >
                <span>View 8+ Projects</span>
                <ArrowRight className="w-4 h-4 text-[#0a0d14]" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-3 rounded-xl bg-[#141d2f]/90 hover:bg-[#1c2842] border border-white/10 hover:border-[#00ff88]/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>

              <button
                onClick={() => onNavigate('skills')}
                className="px-4 py-3 rounded-xl text-slate-400 hover:text-[#00ff88] text-sm font-mono-code transition-colors flex items-center gap-1.5"
              >
                <span>Custom Stack</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Core Verification Features strip */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0" />
                <span>Zero-Layout-Shift SPAs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0" />
                <span>Financial &amp; Trading UX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#fbbf24] shrink-0" />
                <span>Athlete-Grade Execution</span>
              </div>
            </div>
          </div>

          {/* Right Column: Avatar Container with Glowing Neon Borders */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Neon Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00ff88] via-emerald-600 to-[#fbbf24] rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Glass Frame Container */}
              <div className="relative rounded-2xl p-2 bg-[#0d1320] border-2 border-[#00ff88]/50 shadow-[0_0_30px_rgba(0,255,136,0.25)] overflow-hidden">
                {/* Visual Avatar */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="/src/assets/images/avatar_umer_chishti_1792071197982.jpg"
                    alt="Syed Muhammad Umer Chishti - Founder & Lead Architect at SU Digital"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />

                  {/* Corner cyber accent brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00ff88]" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00ff88]" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#fbbf24]" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#fbbf24]" />

                  {/* Floating Overlay Badge on Avatar */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0a0f1d]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white font-display">Syed Muhammad Umer Chishti</p>
                      <p className="text-[11px] text-[#00ff88] font-mono-code">SU Digital · Founder</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88]">
                      <Terminal className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-2.5 pb-1 px-3 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                  <span className="text-slate-300">STATUS: ACTIVE // DISPATCH READY</span>
                  <span className="text-amber-400 font-semibold">KARACHI / GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section (Full-width row adhering to design layout rules) */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Stat 1: 8+ Flagship Projects */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code text-slate-400 tracking-wider uppercase">
              Delivered Deployments
            </span>
            <div className="p-2 rounded-lg bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight tabular-nums">
              8+
            </span>
            <span className="text-xs font-mono-code text-[#00ff88] font-medium">Flagship Builds</span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            Enterprise Single Page Applications, high-frequency trading dashboards, and bespoke client platforms.
          </p>
        </div>

        {/* Stat 2: 100% Precision Code */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code text-slate-400 tracking-wider uppercase">
              Architectural Quality
            </span>
            <div className="p-2 rounded-lg bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight tabular-nums">
              100%
            </span>
            <span className="text-xs font-mono-code text-[#fbbf24] font-medium">Precision Code</span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            Strict type safety, zero compile warnings, sub-millisecond DOM reactivity, and clean semantic architecture.
          </p>
        </div>

        {/* Stat 3: 4+ Years Experience */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono-code text-slate-400 tracking-wider uppercase">
              Engineering Track Record
            </span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight tabular-nums">
              4+
            </span>
            <span className="text-xs font-mono-code text-emerald-400 font-medium">Years Experience</span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            Leading front-end system design, Python computational automation, and full-spectrum UI engineering.
          </p>
        </div>
      </section>

      {/* Featured Architecture Pillars Preview (Home Page Showcase) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono-code text-[#00ff88] tracking-widest uppercase mb-1">
              SU DIGITAL COMPETENCIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Engineered for High-Frequency Demands
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-mono-code text-slate-300 hover:text-[#00ff88] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>View Full Service Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1 */}
          <div 
            onClick={() => onNavigate('services')}
            className="glass-panel glass-panel-hover rounded-xl p-5 border border-white/[0.06] cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-[#00ff88] transition-colors">
              High-Speed Web Apps
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instantaneous navigation, bundled tree-shaking, and near-zero first paint times for modern web consumers.
            </p>
          </div>

          {/* Pillar 2 */}
          <div 
            onClick={() => onNavigate('services')}
            className="glass-panel glass-panel-hover rounded-xl p-5 border border-white/[0.06] cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-amber-400 transition-colors">
              Financial &amp; Trading Tech
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time telemetry, charting consoles, risk matrices, and ultra-responsive market execution screens.
            </p>
          </div>

          {/* Pillar 3 */}
          <div 
            onClick={() => onNavigate('services')}
            className="glass-panel glass-panel-hover rounded-xl p-5 border border-white/[0.06] cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-emerald-400 transition-colors">
              Glassmorphism UI/UX
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cyber-dark aesthetics with multi-depth frosted glass, neon accents, and tactile responsive ergonomics.
            </p>
          </div>

          {/* Pillar 4 */}
          <div 
            onClick={() => onNavigate('services')}
            className="glass-panel glass-panel-hover rounded-xl p-5 border border-white/[0.06] cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-indigo-400 transition-colors">
              E-Commerce Engines
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conversion-focused digital storefronts, friction-free checkout funnels, and enterprise catalog filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Callout Banner */}
      <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden bg-gradient-to-r from-[#0d1424] via-[#0c1822] to-[#0d1424]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-xs font-mono-code text-[#00ff88]">ATHLETE-GRADE EXECUTION GUARANTEE</div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Ready to elevate your digital presence into an elite tier?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              From concept synthesis to flawless production deployment, SU Digital brings uncompromising architectural standards.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-white transition-all"
            >
              Learn More
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              Contact Founder
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
