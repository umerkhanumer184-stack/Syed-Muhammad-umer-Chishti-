import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'High-Speed Web App',
    budget: '$3,000 - $7,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const officialEmail = 'syedumer.digital@gmail.com';
  // WhatsApp local access link (+92 Pakistan country code)
  const whatsappUrl = 'https://wa.me/923000000000?text=Hello%20Syed%20Muhammad%20Umer%20Chishti%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20SU%20Digital.';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate high-speed architectural dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-12 py-6 lg:py-10 animate-view-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
          <span className="text-[#00ff88] font-bold">COMMUNICATION DISPATCH</span>
          <span aria-hidden="true">·</span>
          <span>SYED MUHAMMAD UMER CHISHTI</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400">INSTANT RESPONSE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
          Initiate Architectural Engagement
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Whether you need a full enterprise Single Page Application, financial trading terminal UX, or high-velocity refactor, contact Syed Muhammad Umer Chishti directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Communication Channels & Status */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Direct Channel Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.08] relative group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88]">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-code text-slate-400 uppercase">
                Official Inquiries
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-400 font-mono-code uppercase tracking-wider">
              Direct Founder Email
            </h3>
            <p className="text-base sm:text-lg font-bold font-display text-white mt-1 break-all">
              {officialEmail}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`mailto:${officialEmail}?subject=SU%20Digital%20Project%20Inquiry`}
                className="px-4 py-2 rounded-lg bg-[#00ff88] hover:bg-[#10b981] text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_12px_rgba(0,255,136,0.25)] flex items-center gap-1.5"
              >
                <span>Compose Mail</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0a0d14]" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span className="text-[#00ff88]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct Access (+92 local access) */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-emerald-500/20 relative group bg-gradient-to-br from-[#0c1815] to-[#0a0d14]">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono-code text-emerald-400 uppercase">
                Instant Messaging
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-400 font-mono-code uppercase tracking-wider">
              WhatsApp Direct Channel
            </h3>
            <p className="text-base font-bold font-display text-white mt-1">
              +92 Local &amp; International Access
            </p>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Fast-track response for urgent architectural audits, consultation schedules, or live proposal requests.
            </p>
            <div className="mt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0a0d14] text-xs font-mono-code font-bold uppercase transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#0a0d14]" />
                <span>Chat on WhatsApp (+92)</span>
              </a>
            </div>
          </div>

          {/* SLA & Availability Guarantee */}
          <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400">
              <Clock className="w-4 h-4" />
              <span>COMMITMENT TO RAPID RESPONSE</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-lg bg-[#090e18] border border-white/5">
                <div className="text-slate-400 text-[10px] font-mono-code uppercase">Response Time</div>
                <div className="font-bold text-white mt-0.5">&lt; 6 Hours</div>
              </div>
              <div className="p-3 rounded-lg bg-[#090e18] border border-white/5">
                <div className="text-slate-400 text-[10px] font-mono-code uppercase">Project Kickoff</div>
                <div className="font-bold text-[#00ff88] mt-0.5">24 - 48 Hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl p-7 sm:p-9 border border-white/[0.08] relative">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-view-in">
                <div className="w-16 h-16 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/30 mx-auto flex items-center justify-center text-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.25)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been routed directly to Syed Muhammad Umer Chishti’s priority inbox. Expect a technical review within 6 hours.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0a0f1d] border border-white/10 max-w-sm mx-auto text-left text-xs font-mono-code space-y-1 text-slate-400">
                  <div>DISPATCH_REF: <span className="text-[#00ff88]">SU-{(Math.random()*100000 | 0)}</span></div>
                  <div>DESTINATION: <span className="text-white">{officialEmail}</span></div>
                  <div>STATUS: <span className="text-emerald-400">QUEUED_FOR_FOUNDER_REVIEW</span></div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'High-Speed Web App',
                      budget: '$3,000 - $7,500',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-slate-200 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-white">
                    Commission an Architectural Build
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-code">
                    DIRECT INTAKE FORM · ZERO BROKERAGE
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-slate-300">
                      Your Full Name <span className="text-[#00ff88]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090e18] border border-white/10 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-slate-300">
                      Work Email Address <span className="text-[#00ff88]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090e18] border border-white/10 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-slate-300">
                      Project Type / Discipline
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090e18] border border-white/10 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-sm text-white outline-none transition-colors"
                    >
                      <option value="High-Speed Web App">High-Speed Web App (React / SPA)</option>
                      <option value="Financial & Trading Tech">Financial &amp; Trading Tech Dashboard</option>
                      <option value="Glassmorphism UI/UX Design">Glassmorphism Cyber UI/UX</option>
                      <option value="E-Commerce Storefront">Nexus E-Commerce Store</option>
                      <option value="Hospitality / Restaurant App">Restaurant / Hospitality Portal</option>
                      <option value="Custom Software Architecture">Custom Full-Stack Architecture</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-slate-300">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090e18] border border-white/10 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-sm text-white outline-none transition-colors"
                    >
                      <option value="$1,500 - $3,000">$1,500 - $3,000 (Sprint Release)</option>
                      <option value="$3,000 - $7,500">$3,000 - $7,500 (Flagship Product)</option>
                      <option value="$7,500 - $15,000">$7,500 - $15,000 (Enterprise System)</option>
                      <option value="$15,000+">$15,000+ (Full Suite Retainer)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code text-slate-300">
                    Project Overview &amp; Requirements <span className="text-[#00ff88]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, timeline, key features, or link to existing blueprints..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090e18] border border-white/10 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#00ff88] hover:bg-[#10b981] disabled:opacity-60 text-[#0a0d14] font-mono-code text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Encrypting &amp; Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0a0d14]" />
                      <span>Transmit Inbound Proposal</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
