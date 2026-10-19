import React, { useState } from 'react';
import { TabId } from '../Navbar.tsx';
import { 
  Globe, 
  Layers, 
  Code2, 
  Terminal, 
  Zap, 
  TrendingUp, 
  FileSpreadsheet, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Sparkles
} from 'lucide-react';

interface SkillsViewProps {
  onNavigate: (tab: TabId) => void;
}

interface SkillCard {
  id: number;
  title: string;
  subtitle?: string;
  tag: string;
  proficiency: number;
  description: string;
  productionUse: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'All' | 'Engineering' | 'Finance & Analytics' | 'Athletics'>('All');

  const skills: SkillCard[] = [
    {
      id: 1,
      title: 'HTML5',
      tag: 'Markup & Semantics',
      proficiency: 98,
      description: 'Semantic structural architecture, accessible DOM hierarchy, ARIA standards, modern canvas embeddings, and crawl-optimized markup for high-conversion web platforms.',
      productionUse: 'Zero-div bloat architectures, SEO-optimized markup structures, and responsive picture/source media pipelines.',
      highlights: ['Semantic HTML & Landmarks', 'WCAG AA Accessibility', 'Responsive Media Elements', 'Modern Web Storage'],
      icon: Globe,
    },
    {
      id: 2,
      title: 'CSS & Style.css',
      tag: 'Styling & Layout',
      proficiency: 97,
      description: 'Fluid typography math, modern CSS Grid & Flexbox mechanics, custom properties token systems, keyframe GPU accelerations, and custom standalone stylesheet engineering.',
      productionUse: 'Hardware-accelerated animations, glassmorphism surface shaders, and bespoke responsive stylesheets.',
      highlights: ['CSS Grid & Flexbox Systems', 'Fluid Math (clamp, calc, min)', 'Keyframe GPU Accelerations', 'Backdrop-filter Glassmorphism'],
      icon: Layers,
    },
    {
      id: 3,
      title: 'JavaScript',
      tag: 'Client-Side Reactivity',
      proficiency: 96,
      description: 'Core ECMAScript mastery, async event loop mechanics, reactive client-side view switching, DOM mutations, and high-performance interactive application logic.',
      productionUse: 'Zero-reload Single Page Application routing, client-side data pipelines, and responsive DOM state machines.',
      highlights: ['Async/Await & Promises', 'Event Loop Optimization', 'ES6+ Functional Paradigms', 'DOM Mutation & Observers'],
      icon: Code2,
    },
    {
      id: 4,
      title: 'Python Programming',
      tag: 'Algorithms & Automation',
      proficiency: 93,
      description: 'Backend scripting, algorithmic automation pipelines, financial data wrangling, API integrations, and robust computational logic.',
      productionUse: 'Automating build workflows, batch data transformation, algorithmic ticker scrapers, and background processing.',
      highlights: ['Data Parsing & Processing', 'Algorithmic Financial Logic', 'Automation & Web Scraping', 'API Integration Microservices'],
      icon: Terminal,
    },
    {
      id: 5,
      title: 'Web Development',
      tag: 'Full-Spectrum Architecture',
      proficiency: 99,
      description: 'End-to-end Single Page Application architecture, component state isolation, performance budgeting, cross-browser responsive engineering, and edge CDN deployments.',
      productionUse: 'Crafting ultra-modern SPAs for SU Digital with sub-second page loads and zero layout shifts.',
      highlights: ['SPA Dynamic Architecture', 'Lighthouse 99+ Auditing', 'Netlify Edge Deployment', 'Modular Component Scaling'],
      icon: Zap,
    },
    {
      id: 6,
      title: 'Financial Trading',
      tag: 'Market Tech & Analytics',
      proficiency: 94,
      description: 'Quantitative charting, market depth analytics, risk-management systems, order book telemetry, and high-frequency trading platform UX.',
      productionUse: 'Engineering ultra-fast financial interfaces, crypto/forex charting consoles, and live trading terminals.',
      highlights: ['Real-Time Telemetry & Feeds', 'Quantitative Charting UI', 'Risk-Management Modeling', 'High-Volatility Resiliency'],
      icon: TrendingUp,
    },
    {
      id: 7,
      title: 'MS Office Suite',
      tag: 'Business & Modeling',
      proficiency: 95,
      description: 'Advanced Excel financial modeling & macros, executive PowerPoint pitch deck synthesis, automated Word documentation, and enterprise collaboration workflows.',
      productionUse: 'Client feasibility reports, budget projections, pitch decks, and technical architecture documentation.',
      highlights: ['Advanced Excel Formulas & Pivot', 'Executive Slide Decks', 'Technical Documentation', 'Structured Data Modeling'],
      icon: FileSpreadsheet,
    },
    {
      id: 8,
      title: 'Sports Achievements',
      subtitle: 'BWF Air Badminton & Athletic Discipline',
      tag: 'Athletic Conditioning',
      proficiency: 98,
      description: 'Official BWF (Badminton World Federation) Air Badminton competitor and dedicated athlete. Channelling high cardiovascular endurance, rapid reflex response, and extreme focus into software sprints.',
      productionUse: 'Athlete-grade stamina applied to sustained deep-work development sessions and zero-hesitation problem solving.',
      highlights: ['BWF Air Badminton Competitor', 'High-Stamina Focus Cycles', 'Rapid Tactical Reflexes', 'Relentless Execution Ethos'],
      icon: Trophy,
    },
  ];

  const filteredSkills = filter === 'All'
    ? skills
    : filter === 'Engineering'
    ? skills.filter(s => [1, 2, 3, 5].includes(s.id))
    : filter === 'Finance & Analytics'
    ? skills.filter(s => [4, 6, 7].includes(s.id))
    : skills.filter(s => s.id === 8);

  return (
    <div className="space-y-12 py-6 lg:py-10 animate-view-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
          <span className="text-[#00ff88] font-bold">SU DIGITAL ARSENAL</span>
          <span aria-hidden="true">·</span>
          <span>SYED MUHAMMAD UMER CHISHTI</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400">8 CORE PILLARS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Mastered Technical &amp; Operational Stack
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          The exact multi-disciplinary foundation powering SU Digital: from frontend engineering and Python automation to financial market analytics and athlete-grade execution discipline.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#0e1524] border border-white/10 w-fit">
        {(['All', 'Engineering', 'Finance & Analytics', 'Athletics'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono-code font-medium transition-all ${
              filter === cat
                ? 'bg-[#1b253b] text-white border border-[#00ff88]/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Exact 8 Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.id}
              className="glass-panel rounded-2xl p-6 border border-white/[0.08] relative group flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:border-[#10B981]/50 hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3),0_0_20px_rgba(16,185,129,0.2)]"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.18)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    #{String(skill.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Tag */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-white transition-colors">
                  {skill.title}
                </h3>
                {skill.subtitle && (
                  <p className="text-[11px] font-mono-code text-amber-400 mt-0.5">
                    {skill.subtitle}
                  </p>
                )}
                <p className="text-[11px] font-mono-code text-[#00ff88] mt-1 mb-3">
                  {skill.tag}
                </p>

                {/* Proficiency Gauge */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-[11px] font-mono-code">
                    <span className="text-slate-400">Mastery Index</span>
                    <span className="text-[#00ff88] font-bold tabular-nums">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00ff88] to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider">
                  Key Competencies:
                </div>
                <div className="space-y-1">
                  {skill.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Athlete Discipline Callout */}
      <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden bg-gradient-to-r from-[#091122] via-[#09151e] to-[#091122]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono-code text-amber-400">
              <Activity className="w-4 h-4 text-amber-400" />
              <span>THE BWF ATHLETE PRINCIPLE</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Physical Conditioning Meets High-Frequency Software Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Syed Muhammad Umer Chishti brings the strict daily training regimen, high mental stamina, and lightning reflexes of competitive badminton directly into production code sprints and rapid architecture deliveries.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="px-5 py-2.5 rounded-xl bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)] shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>View Flagship Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0a0d14]" />
          </button>
        </div>
      </section>
    </div>
  );
};
