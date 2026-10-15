import React, { useState } from 'react';
import { TabId } from '../Navbar.tsx';
import { 
  User, 
  Terminal, 
  Target, 
  Cpu, 
  Layers, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Award,
  Compass
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: TabId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'methodology' | 'discipline' | 'background'>('background');

  const methodologyPillars = [
    {
      index: '01',
      title: 'Zero-Defect Architectural Synthesis',
      category: 'System Architecture',
      description: 'Engineering resilient, scalable codebases structured on strict TypeScript contracts, isolated component states, and deterministic state flows that eliminate runtime crashes.',
      deliverables: ['Strong Typing Invariants', 'Clean Modular Components', 'Zero Redundant Dependencies'],
      accentColor: 'text-[#00ff88]',
      borderColor: 'border-[#00ff88]/30',
    },
    {
      index: '02',
      title: 'Sub-Millisecond Rendering & Edge Performance',
      category: 'Performance Engineering',
      description: 'Obsessive optimization targeting 100/100 Google Lighthouse benchmarks, compositor-only hardware accelerations, sub-second first contentful paint, and zero Cumulative Layout Shift (CLS).',
      deliverables: ['Compositor-Only Animations', 'Tree-Shaken Bundles', 'Instantaneous View Swapping'],
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-400/30',
    },
    {
      index: '03',
      title: 'Design System Mathematical Rigor',
      category: 'UI/UX Aesthetics',
      description: 'Bridging high-fashion cyber aesthetics with mathematical spatial harmony: fluid clamp typography, harmonious 60-30-10 color budgeting, and physically accurate glassmorphism.',
      deliverables: ['Fluid Typographic Curves', 'Cyber Dark Glass Geometry', 'Tactile Micro-Interactions'],
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-400/30',
    },
    {
      index: '04',
      title: 'Continuous Edge Deployment & CI/CD',
      category: 'DevOps & Reliability',
      description: 'Streamlined continuous integration through Netlify and GitHub, atomic rollbacks, edge rewrite rules, and instant global CDN distribution for peak availability.',
      deliverables: ['Atomic Git Deployments', 'Global Edge Caching', 'Automated Health Checks'],
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-400/30',
    },
  ];

  const disciplinePillars = [
    {
      title: 'Unrelenting Cognitive Stamina',
      description: 'Treating software engineering as an elite competitive discipline. Sustained multi-hour deep work cycles dedicated to untangling complex algorithmic bottlenecks.',
      stat: '4+ Hours',
      statLabel: 'Deep Focus Blocks',
    },
    {
      title: 'Precision Micro-Interactions',
      description: 'Every button response, modal entry, and hover feedback curve is calibrated within strict 100–200ms latency windows for sensory satisfaction.',
      stat: '<120ms',
      statLabel: 'Feedback Latency',
    },
    {
      title: 'Zero-Tolerance for Technical Debt',
      description: 'Refactoring iteratively during development rather than delaying cleanup. Clean syntax, semantic markup, and zero unresolved lint warnings.',
      stat: '0%',
      statLabel: 'Compromised Code',
    },
  ];

  return (
    <div className="space-y-14 py-6 lg:py-10 animate-view-in">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
          <span className="text-[#00ff88] font-bold">BIOGRAPHY &amp; METHODOLOGY</span>
          <span aria-hidden="true">·</span>
          <span>SYED MUHAMMAD UMER CHISHTI</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400">LEAD ARCHITECT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Engineering Digital Mastery with Athlete Precision
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          The story behind SU Digital, our uncompromising software architectural standards, and why we treat modern web engineering as a high-performance craft.
        </p>
      </div>

      {/* Interactive Profile View Switcher */}
      <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0e1524] border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab('background')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code font-medium transition-all ${
            activeTab === 'background'
              ? 'bg-[#1b253b] text-white border border-[#00ff88]/30 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Founder Story
        </button>
        <button
          onClick={() => setActiveTab('methodology')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code font-medium transition-all ${
            activeTab === 'methodology'
              ? 'bg-[#1b253b] text-white border border-[#00ff88]/30 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Engineering Methodology
        </button>
        <button
          onClick={() => setActiveTab('discipline')}
          className={`px-4 py-2 rounded-lg text-xs font-mono-code font-medium transition-all ${
            activeTab === 'discipline'
              ? 'bg-[#1b253b] text-white border border-[#00ff88]/30 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Athlete Discipline
        </button>
      </div>

      {/* Tab 1: Founder Background */}
      {activeTab === 'background' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-view-in">
          {/* Main narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Syed Muhammad Umer Chishti
              </h2>
              <div className="text-xs font-mono-code text-[#00ff88] -mt-3">
                FOUNDER &amp; LEAD ARCHITECT AT SU DIGITAL
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  As the Founder and Lead Architect of <strong className="text-white">SU Digital</strong>, Syed Muhammad Umer Chishti has established a reputation for building digital applications that refuse to settle for the industry average. With an engineering background rooted in clean code, algorithmic precision, and visual haute-couture, Umer envisioned an agency where modern web technologies meet uncompromising aesthetic refinement.
                </p>
                <p>
                  Specializing in advanced Single Page Application architecture, high-frequency financial dashboards, and immersive glassmorphic user experiences, Umer directs every project from conceptual schema to edge production deployment. Over 4+ years of hands-on technical leadership, he has steered more than 8 flagship systems to successful global launch.
                </p>
                <p>
                  Umer firmly believes that great web architecture is invisible: users should never be aware of network latencies, heavy script execution, or reflow calculations. When you engage with an SU Digital application, every button tap, slide animation, and real-time data update feels instantaneous, tactile, and natural.
                </p>
              </div>

              {/* Core Credentials */}
              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-mono-code uppercase">Leadership Role</div>
                  <div className="text-sm font-bold text-white mt-0.5">Agency Founder</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono-code uppercase">Primary Domain</div>
                  <div className="text-sm font-bold text-white mt-0.5">Web Architecture &amp; UI</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono-code uppercase">Code Ethos</div>
                  <div className="text-sm font-bold text-[#00ff88] mt-0.5">100% Precision Standard</div>
                </div>
              </div>
            </div>

            {/* Architecture Manifesto Quote */}
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-[#00ff88] border-white/[0.08] relative overflow-hidden bg-gradient-to-r from-[#00ff88]/5 to-transparent">
              <p className="text-base sm:text-lg font-display italic text-slate-100 font-medium">
                "Code is not merely instructions for machines; it is the physical architecture of human perception in the digital age. If an interface hesitates for even 100 milliseconds, it breaks the connection."
              </p>
              <div className="mt-3 text-xs font-mono-code text-[#00ff88]">
                — Syed Muhammad Umer Chishti
              </div>
            </div>
          </div>

          {/* Sidebar Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span>Executive Focus Areas</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-1.5 shrink-0" />
                  <span>Single-Page Application state hydration and zero-delay route switching.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-1.5 shrink-0" />
                  <span>High-performance financial visualization &amp; cryptographic telemetry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-1.5 shrink-0" />
                  <span>Cyber-dark design systems featuring frosted glassmorphism &amp; neon vectors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-1.5 shrink-0" />
                  <span>Automated CI/CD pipelines deploying to Netlify and high-availability edge nodes.</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                Founder Contact Readiness
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Directly consulting on enterprise architectural designs, high-velocity rebuilds, and boutique digital experiences.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-xl bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_15px_rgba(0,255,136,0.2)] flex items-center justify-center gap-2"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Software Engineering Methodology */}
      {activeTab === 'methodology' && (
        <div className="space-y-6 animate-view-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologyPillars.map((pillar) => (
              <div
                key={pillar.index}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/[0.08] relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono-code ${pillar.accentColor}`}>
                    {pillar.index}
                  </span>
                  <span className="text-[11px] font-mono-code text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {pillar.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {pillar.description}
                </p>
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[11px] font-mono-code text-slate-400 uppercase">
                    Deliverable Standards:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                        <span>{item}</span>
                        {idx < pillar.deliverables.length - 1 && <span className="text-slate-600">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Athlete-Grade Execution Discipline */}
      {activeTab === 'discipline' && (
        <div className="space-y-8 animate-view-in">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400">
              <Activity className="w-4 h-4 text-amber-400" />
              <span>THE ATHLETE STANDARD APPLIED TO CODE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Why Physical &amp; Mental Conditioning Shapes Our Software
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              At SU Digital, software engineering is not a passive desk job—it is treated with the exact discipline, recovery protocols, and relentless precision of competitive athletics. Just as elite athletes train for sub-second reaction times and flawless technique under pressure, Syed Muhammad Umer Chishti applies the same rigorous standards to computational structure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {disciplinePillars.map((item, i) => (
              <div
                key={i}
                className="glass-panel rounded-2xl p-6 border border-white/[0.08] relative group"
              >
                <div className="text-3xl font-black font-display text-white tracking-tight tabular-nums mb-1">
                  {item.stat}
                </div>
                <div className="text-xs font-mono-code text-[#00ff88] mb-3">
                  {item.statLabel}
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono-code text-[#00ff88]">ZERO COMPROMISE GUARANTEE</div>
              <p className="text-sm text-slate-200 font-medium">
                Every line written is reviewed for performance bottlenecks, style uniformity, and runtime safety.
              </p>
            </div>
            <button
              onClick={() => onNavigate('skills')}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono-code text-white transition-all whitespace-nowrap shrink-0"
            >
              Inspect Skills &amp; Stack
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
