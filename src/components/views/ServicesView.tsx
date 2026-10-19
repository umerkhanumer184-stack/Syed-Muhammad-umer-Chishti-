import React, { useState } from 'react';
import { TabId } from '../Navbar.tsx';
import { 
  Zap, 
  TrendingUp, 
  Layers, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  X,
  Cpu,
  Sparkles,
  BarChart3,
  Clock,
  Terminal
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (tab: TabId) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  methodologyBadge?: string;
  features: string[];
  techStack: string[];
  idealFor: string;
  benchmark: string;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'high-speed-web-apps',
      title: 'High-Speed Web Apps',
      tagline: 'Instantaneous client-side reactivity & sub-millisecond execution',
      description: 'Single-Page Applications engineered with React, modern Vite bundlers, and minimal memory footprints. Designed for hyper-responsive user journeys, smooth view switching without browser refreshes, and perfect Lighthouse performance scores.',
      icon: Zap,
      accentColor: 'text-[#00ff88]',
      badgeBg: 'bg-[#00ff88]/10',
      badgeBorder: 'border-[#00ff88]/30',
      features: [
        'Zero-Reload SPA View Routing & Deep Linking',
        'Aggressive Tree-Shaking & Bundle Optimization',
        'State Management with Isolated Component Rerenders',
        'Sub-100ms First Input Delay (FID) and Core Web Vitals 99+',
      ],
      techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
      idealFor: 'SaaS platforms, developer consoles, real-time products, and enterprise portals.',
      benchmark: '< 0.8s First Contentful Paint',
    },
    {
      id: 'financial-trading-tech',
      title: 'Financial & Trading Tech',
      tagline: 'High-throughput algorithmic dashboards & market telemetry',
      description: 'Mission-critical interfaces built for financial markets, crypto exchanges, algorithmic traders, and portfolio managers. Engineered with low-latency tabular updates, dense data grids, order-book visualizations, and zero UI stuttering during high market volatility.',
      icon: TrendingUp,
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-400/10',
      badgeBorder: 'border-amber-400/30',
      features: [
        'High-Frequency Telemetry & Stream Ingestion',
        'Tabular Numeral Formatting & Virtualized Scroll Lists',
        'Real-time P&L, Depth Charts & Risk Metrics',
        'Hardware-Accelerated Canvas & SVG Rendering',
      ],
      techStack: ['TypeScript', 'Python', 'WebSockets', 'Chart Engine', 'Tailwind CSS'],
      idealFor: 'Fintech startups, trading desks, crypto hedge funds, and investment analytics.',
      benchmark: '60 FPS under continuous 50Hz ticker updates',
    },
    {
      id: 'glassmorphism-ui-ux',
      title: 'Glassmorphism UI/UX Design',
      tagline: 'Futuristic cyber aesthetics with mathematical spatial harmony',
      methodologyBadge: 'Double Diamond Design Process (Discover, Define, Develop, Deliver)',
      description: 'Next-generation visual systems combining frosted glassmorphism cards, glowing neon vector accents, and tactile responsive ergonomics. Driven by the Double Diamond Design Process (Discover, Define, Develop, Deliver) to emphasize elite user research and zero-defect architecture.',
      icon: Layers,
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-400/10',
      badgeBorder: 'border-emerald-400/30',
      features: [
        'Double Diamond Design Process (Discover, Define, Develop, Deliver)',
        'Elite User Research, User Journeys & Cognitive Flow Modeling',
        'Multi-Layered Frosted Glass & Backdrop Filter Blur',
        'Cohesive Neon Vector & Gold Shimmer Accents',
        'Micro-Interactions with 120ms Settling Physics',
      ],
      techStack: ['Tailwind CSS v4', 'Figma', 'CSS Keyframes', 'SVG Vectors'],
      idealFor: 'High-end tech brands, luxury digital agencies, Web3 leaders, and luxury portfolios.',
      benchmark: '100% WCAG AA contrast compliance across all glass planes',
    },
    {
      id: 'e-commerce-solutions',
      title: 'E-Commerce Solutions',
      tagline: 'Conversion-engineered digital storefronts with headless speed',
      description: 'Ultra-modern e-commerce architectures combining fluid product discovery, lightning-fast cart operations, and streamlined checkout funnels. Designed to convert high-intent buyers through frictionless interactive product showcases and edge reliability.',
      icon: ShoppingBag,
      accentColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-400/10',
      badgeBorder: 'border-indigo-400/30',
      features: [
        'Instant Filter & Search with Zero Server Roundtrips',
        'Dynamic Shopping Cart with Persisted State',
        'Mobile-First Responsive Touch Ergonomics',
        'Headless API Integrations & Secure Checkout Handlers',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Netlify Edge'],
      idealFor: 'Direct-to-consumer fashion brands, tech hardware makers, and digital product merchants.',
      benchmark: '+35% average conversion lift over legacy monolithic stores',
    },
  ];

  return (
    <div className="space-y-14 py-6 lg:py-10 animate-view-in">
      {/* Services Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
          <span className="text-[#00ff88] font-bold">SU DIGITAL SERVICES</span>
          <span aria-hidden="true">·</span>
          <span>SPECIALIZED ARCHITECTURE</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400">ENTERPRISE DELIVERY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          High-Velocity Engineering Capabilities
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Four specialized technical pillars designed to transform complex business requirements into ultra-responsive, beautiful, and secure software applications.
        </p>
      </div>

      {/* Modern Grid of 4 Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="glass-panel rounded-2xl p-7 sm:p-8 border border-white/[0.08] relative group flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:border-[#10B981]/50 hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3),0_0_20px_rgba(16,185,129,0.2)]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${service.badgeBg} border ${service.badgeBorder} flex items-center justify-center ${service.accentColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono-code text-slate-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {service.benchmark}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                {/* Sleek Methodology Badge */}
                {service.methodologyBadge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/35 text-[11px] font-mono-code text-emerald-300 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.2)] mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#00ff88] shrink-0" />
                    <span>{service.methodologyBadge}</span>
                  </div>
                )}

                <p className={`text-xs font-mono-code ${service.accentColor} mb-4`}>
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Core Features List */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.accentColor}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Tech Tags */}
              <div className="pt-5 border-t border-white/[0.08] space-y-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono-code text-slate-400 mr-1">Stack:</span>
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono-code text-slate-300 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-mono-code text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Examine Technical Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#00ff88]/15 border border-white/10 hover:border-[#00ff88]/40 text-xs font-mono-code text-slate-200 hover:text-[#00ff88] transition-all"
                  >
                    Request Scope
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process Architecture Strip */}
      <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono-code text-[#00ff88] uppercase">SU DIGITAL EXECUTION CYCLE</div>
            <h3 className="text-xl font-bold font-display text-white mt-1">
              From Architectural Blueprint to Edge Deployment
            </h3>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono-code text-slate-400">
            RAPID DELIVERY TIMELINE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#0a0f1d] border border-white/5 space-y-2">
            <span className="text-xs font-mono-code text-[#00ff88] font-bold">PHASE 01</span>
            <h4 className="text-sm font-bold text-white font-display">Schema &amp; Architecture</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              System modeling, state machine diagrams, and zero-defect architectural mapping.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#0a0f1d] border border-white/5 space-y-2">
            <span className="text-xs font-mono-code text-[#00ff88] font-bold">PHASE 02</span>
            <h4 className="text-sm font-bold text-white font-display">UI/UX Glass Prototyping</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Futuristic cyber dark design tokens, interactive micro-states, and typography scales.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#0a0f1d] border border-white/5 space-y-2">
            <span className="text-xs font-mono-code text-amber-400 font-bold">PHASE 03</span>
            <h4 className="text-sm font-bold text-white font-display">Codebase Synthesis</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict TypeScript implementation, performance budgets, and bundle tree-shaking.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#0a0f1d] border border-white/5 space-y-2">
            <span className="text-xs font-mono-code text-emerald-400 font-bold">PHASE 04</span>
            <h4 className="text-sm font-bold text-white font-display">Edge Launch &amp; Audit</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuous deployment via Netlify/GitHub, 100% Lighthouse audit, and client handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Modal for Examining Technical Spec */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-view-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0c1220] border border-[#00ff88]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,136,0.15)] space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code text-[#00ff88] uppercase tracking-wider">
                  ARCHITECTURAL SPECIFICATION
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-mono-code text-amber-400">{selectedService.benchmark}</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-white">
                {selectedService.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                Full Technical Architecture Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#11192b] border border-white/5 flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0f1728] border border-white/10 space-y-2">
              <div className="text-xs font-mono-code text-slate-400 uppercase">Target Domain Fit</div>
              <p className="text-xs text-slate-200">{selectedService.idealFor}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono-code text-slate-300"
              >
                Close Spec
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2 rounded-lg bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
              >
                Consult on this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
