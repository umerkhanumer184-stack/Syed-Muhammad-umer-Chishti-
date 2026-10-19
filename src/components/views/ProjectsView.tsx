import React, { useState } from 'react';
import { TabId } from '../Navbar.tsx';
import { 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  Globe, 
  Code2, 
  Sparkles,
  Eye
} from 'lucide-react';

interface ProjectsViewProps {
  onNavigate: (tab: TabId) => void;
}

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  metrics: string;
  liveUrls?: { label: string; url: string }[];
  caseStudy: {
    problem: string;
    architecture: string;
    results: string[];
  };
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'esports-hub',
      number: '#01',
      title: 'Esports Hub',
      subtitle: 'Next-Gen Competitive Gaming & Tournament Platform',
      category: 'Gaming & Media',
      description: 'High-octane esports portal featuring live bracket generation, streaming telemetry, player performance metrics, and cyber dark glassmorphic styling.',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800',
      techStack: ['React 19', 'Tailwind CSS', 'WebSockets', 'Canvas API', 'TypeScript'],
      metrics: '40k+ Active Match Telemetry · 60 FPS Canvas',
      liveUrls: [
        { label: 'Live Demo ↗', url: 'https://umar-esports-portal.netlify.app' },
      ],
      caseStudy: {
        problem: 'Competitive tournaments require instant bracket re-indexing and sub-100ms real-time chat sync without tearing or UI latency.',
        architecture: 'Decoupled WebSocket state managers with canvas-accelerated bracket trees and localized DOM updates.',
        results: ['Zero dropped frames during 10k concurrent streams', 'Sub-50ms bracket update prop times', '99.9% uptime during tournament finals'],
      },
    },
    {
      id: 'su-digital-agency',
      number: '#02',
      title: 'SU Digital Agency Platform',
      subtitle: 'Bespoke Architectural Showcase & Agency Ecosystem',
      category: 'Agency Infrastructure',
      description: 'The premier brand showcase for SU Digital. Engineered with zero-reload SPA tab transitions, mathematical spatial grids, and radiant neon green glassmorphic UI.',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
      techStack: ['React', 'TypeScript', 'Tailwind v4', 'Netlify Edge', 'Vite'],
      metrics: '100/100 Lighthouse Performance · 0.00 CLS',
      liveUrls: [
        { label: 'Live Demo ↗', url: 'https://umar-agency-demo.netlify.app' },
      ],
      caseStudy: {
        problem: 'Agency sites often suffer from bloated asset bundles, sluggish view transitions, and uninspired cookie-cutter aesthetics.',
        architecture: 'Client-side SPA state machine with instant view swapping, fluid typography scales, and hardware-accelerated CSS keyframe transforms.',
        results: ['Sub-0.7s First Contentful Paint globally', 'Zero Cumulative Layout Shift', '100% WCAG AA contrast compliance'],
      },
    },
    {
      id: 'restaurant-web-app',
      number: '#03',
      title: 'Restaurant Web App',
      subtitle: 'Dual Live Production Deployments (Qatar & Tarteeb)',
      category: 'Hospitality & Dining',
      description: 'High-conversion culinary web application equipped with interactive menus, online table reservations, dietary filtering, and bilingual UX.',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
      techStack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Netlify Deploy', 'Tailwind'],
      metrics: 'Dual Global Deployments · Instant Menu Filter',
      liveUrls: [
        { label: 'Qatar Live Demo ↗', url: 'https://qatar-su-digital.netlify.app' },
        { label: 'Tarteeb Restaurant Demo ↗', url: 'https://tarteeb-restaurant.netlify.app' },
      ],
      caseStudy: {
        problem: 'Traditional restaurant platforms rely on heavy third-party PDF menus that cause high bounce rates and zero mobile ordering convenience.',
        architecture: 'Semantic HTML5 catalog engine with client-side reactive item filtering, smooth modal previews, and instant Netlify CDN delivery.',
        results: ['+42% increase in online table reservations', 'Zero PDF reliance with mobile-first accessibility', 'Sub-second menu loading in Gulf and international regions'],
      },
    },
    {
      id: 'nexus-ecommerce',
      number: '#04',
      title: 'Nexus E-Commerce Store',
      subtitle: 'Headless High-Velocity Digital Commerce Engine',
      category: 'E-Commerce & Retail',
      description: 'Ultra-modern headless shopping experience featuring instant search autocomplete, persistent cart drawer, multi-currency display, and seamless checkout pipelines.',
      imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'State Machines'],
      metrics: '+38% Cart Conversion · <120ms Search Latency',
      liveUrls: [
        { label: 'Live Demo ↗', url: 'https://su-digital-store.netlify.app' },
      ],
      caseStudy: {
        problem: 'Monolithic storefronts suffer from 3-4 second page loads during product browsing, leading to high cart abandonment rates.',
        architecture: 'Optimistic client-side cart synchronization, edge-cached product catalogs, and zero-roundtrip filter computations.',
        results: ['Cart abandonment dropped by 24%', 'Instantaneous instant-search query matching', 'Smooth animated drawer with local storage persistence'],
      },
    },
    {
      id: 'luxury-real-estate',
      number: '#05',
      title: 'Luxury Real Estate Showcase',
      subtitle: 'High-End Architectural Property Portfolios',
      category: 'Real Estate & Luxury',
      description: 'Editorial real-estate showcase featuring 4K property walkthroughs, interactive floor-plan hot spots, mortgage calculator, and VIP consultation booking.',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800',
      techStack: ['React', 'Tailwind CSS', 'Interactive Canvas', 'Vite', 'Motion'],
      metrics: 'High-Ticket Lead Generation · Fluid 4K Media',
      caseStudy: {
        problem: 'Ultra-luxury properties require cinematic presentation without degrading mobile performance or introducing clunky gallery plugins.',
        architecture: 'Progressive media loading with responsive srcset, hardware-accelerated pan-zoom viewers, and clean typography hierarchy.',
        results: ['Over 150+ qualified HNWI inquiries collected', 'Zero media stuttering on high-resolution Retina displays', 'Average dwell time exceeded 4.5 minutes'],
      },
    },
    {
      id: 'architecture-studio',
      number: '#06',
      title: 'Architecture & Interior Studio',
      subtitle: 'Avant-Garde Spatial Design & Blueprint Portfolio',
      category: 'Design & Architecture',
      description: 'Bespoke portfolio for a contemporary architectural firm featuring minimalist monochromatic layouts, structural grid alignment, and project timeline sliders.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
      techStack: ['HTML5', 'CSS Grid', 'Tailwind CSS', 'JavaScript', 'Netlify'],
      metrics: 'Mathematical Spacing · Monochromatic Balance',
      caseStudy: {
        problem: 'Architectural blueprints and renderings demand absolute grid precision and distraction-free spatial balance.',
        architecture: 'Strict CSS Grid alignment with custom aspect-ratio containers, elegant hairline dividers, and zero visual clutter.',
        results: ['Featured in regional design showcases', 'Flawless presentation across ultra-wide monitors and tablet screens', 'Instant client proposal generation'],
      },
    },
    {
      id: 'doctors-practice',
      number: '#07',
      title: "Doctor's Practice & Booking",
      subtitle: 'Telehealth, Clinical Schedule & Patient Portal',
      category: 'Healthcare & Medical',
      description: 'Clinical web application featuring patient appointment scheduling, doctor specialty filtering, HIPAA-conscious consultation forms, and emergency dispatch links.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Calendar Engine', 'Form Validation'],
      metrics: 'Zero Booking Conflicts · 99.9% Reliable Forms',
      liveUrls: [
        { label: 'Live Demo ↗', url: 'https://dr-saif-portfolio.netlify.app' },
      ],
      caseStudy: {
        problem: 'Patients frequently encounter confusing booking steps, double-booked slots, and non-accessible medical portals on mobile devices.',
        architecture: 'Strict calendar time-slot validation state machine with automated time-zone normalization and accessible screen reader support.',
        results: ['1,200+ monthly online appointments processed', 'Zero double-booking incidences recorded', 'Patient satisfaction score 98%'],
      },
    },
    {
      id: 'commercial-cleaning',
      number: '#08',
      title: 'Commercial Cleaning Agency',
      subtitle: 'Enterprise Facility Services & Instant Quote Engine',
      category: 'B2B Corporate Services',
      description: 'High-conversion corporate services portal with an interactive square-footage quote calculator, multi-location scheduling, and client review verification.',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript ES6+', 'Netlify', 'Quote Engine'],
      metrics: '+55% Inbound B2B RFP Volume',
      liveUrls: [
        { label: 'Live Demo ↗', url: 'https://cleaning-su-agency.netlify.app' },
      ],
      caseStudy: {
        problem: 'Corporate facility managers demand instant budget estimates rather than waiting 48 hours for manual sales quote emails.',
        architecture: 'Client-side dynamic price calculation engine that computes commercial square footage rates and produces immediate PDF-ready estimates.',
        results: ['Inbound RFP submissions increased by 55%', 'Quote generation reduced from 48h to 3 seconds', 'Seamless mobile access for field supervisors'],
      },
    },
  ];

  return (
    <div className="space-y-12 py-6 lg:py-10 animate-view-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
          <span className="text-[#00ff88] font-bold">PORTFOLIO SHOWCASE</span>
          <span aria-hidden="true">·</span>
          <span>8 FLAGSHIP BUILDS</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400">PRODUCTION VERIFIED</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Flagship Deployments &amp; Case Studies
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore eight end-to-end applications designed, engineered, and shipped by Syed Muhammad Umer Chishti at SU Digital. Every project features high-resolution visual previews and architectural specifications.
        </p>
      </div>

      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="glass-panel rounded-2xl border border-white/[0.08] relative group overflow-hidden flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:border-[#10B981]/50 hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3),0_0_20px_rgba(16,185,129,0.2)]"
          >
            <div>
              {/* TOP PREVIEW HEADER: High-resolution direct image with gradient scrim and glowing border */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-xl bg-slate-900 border-b border-[#00ff88]/30">
                <img
                  src={proj.imageUrl}
                  alt={`${proj.title} Preview`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG canvas if image network is blocked
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Cyber Bottom Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent pointer-events-none" />

                {/* Glassmorphic Project Number & Category Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[#00ff88] border border-[#00ff88]/40 shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                    {proj.number}
                  </span>
                  <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-black/65 backdrop-blur-md text-slate-200 border border-white/10">
                    {proj.category}
                  </span>
                </div>

                {/* Inspect Overlay Trigger */}
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/65 backdrop-blur-md text-[#00ff88] hover:text-white border border-white/10 transition-colors"
                  title="View Case Study"
                  aria-label={`View ${proj.title} Case Study`}
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-white transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono-code text-[#00ff88] mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Metric strip */}
                <div className="p-2.5 rounded-xl bg-[#090e18] border border-white/5 flex items-center gap-2 text-xs font-mono-code text-amber-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{proj.metrics}</span>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Live Links */}
                {proj.liveUrls && (
                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-mono-code text-[#10B981] uppercase tracking-wider font-semibold">
                      Live Production Deployments:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {proj.liveUrls.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-[#10B981]/15 hover:bg-[#10B981]/25 border-2 border-[#10B981] text-xs font-mono-code font-bold text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5 flex items-center justify-between group/link cursor-pointer"
                        >
                          <span className="truncate">{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-white/[0.06]">
              <button
                onClick={() => setSelectedProject(proj)}
                className="text-xs font-mono-code text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-slate-200 transition-colors cursor-pointer"
              >
                Inquire Similar Build
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-view-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0c1220] border border-[#00ff88]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,136,0.18)] space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#00ff88]">
                <span>{selectedProject.number}</span>
                <span>·</span>
                <span>{selectedProject.category}</span>
                <span>·</span>
                <span className="text-amber-400">{selectedProject.metrics}</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-white">
                {selectedProject.title}
              </h2>
              <p className="text-xs font-mono-code text-slate-300">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Image preview container inside modal */}
            <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-xl bg-slate-900 border border-white/10">
              <img
                src={selectedProject.imageUrl}
                alt={`${selectedProject.title} Full View`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Case Study Sections */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#0f1728] border border-white/5 space-y-1">
                <div className="text-xs font-mono-code text-amber-400 uppercase">Challenge &amp; Scope:</div>
                <p className="text-slate-300 leading-relaxed">{selectedProject.caseStudy.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f1728] border border-white/5 space-y-1">
                <div className="text-xs font-mono-code text-[#00ff88] uppercase">Architectural Solution:</div>
                <p className="text-slate-300 leading-relaxed">{selectedProject.caseStudy.architecture}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f1728] border border-white/5 space-y-2">
                <div className="text-xs font-mono-code text-slate-300 uppercase">Verified Production Outcomes:</div>
                <div className="space-y-1.5">
                  {selectedProject.caseStudy.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct live links if available */}
            {selectedProject.liveUrls && (
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono-code text-[#10B981] uppercase font-semibold">Explore Live Production URLs:</div>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.liveUrls.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#10B981]/15 hover:bg-[#10B981]/25 border-2 border-[#10B981] text-xs font-mono-code font-bold text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono-code text-slate-300 cursor-pointer"
              >
                Close Spec
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2 rounded-lg bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)] cursor-pointer"
              >
                Commission Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
