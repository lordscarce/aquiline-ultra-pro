import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Brain, Shield, Database, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AquilineIntelPage() {
  // Threshold 0.1 ensures it triggers immediately when the page loads
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article className="relative">
      {/* HERO SECTION - Matches AboutHero Structure */}
      <section
        ref={ref}
        aria-labelledby="intel-heading"
        className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
      >
        {/* Ambient background blurs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-aquiline-500/8 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-slate-700/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Breadcrumb - Exact Match */}
          <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/solutions" className="hover:text-aquiline-500 transition-colors">Solutions</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300">AquilineIntel™</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-4xl">
            {/* Eyebrow */}
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Sovereign Intelligence Core
            </span>

            {/* Headline - Split Pattern: White -> Slate -> Gradient */}
            <h1
              id="intel-heading"
              className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              AquilineIntel™ — Private enterprise intelligence,{' '}
              <span className="text-slate-500">not a</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                public wrapper.
              </span>
            </h1>

            {/* Subtext */}
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Unlike public AI platforms that wrap third-party models, AquilineIntel™ is a sovereign 
              intelligence core — deployed on-premise or in your private cloud, with full data residency, 
              operational memory, and autonomous execution capabilities.
            </p>

            {/* CTAs */}
            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <Link to="/contact" className="btn-primary group">
                <span>Request an Enterprise Audit</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/solutions" className="btn-ghost">
                Back to Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ARCHITECTURE SECTION */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <span className="section-eyebrow">Core Architecture</span>
              <h2 className="mt-6 font-display text-display-md text-white">Sovereign intelligence stack</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Built from the ground up for mission-critical operations, AquilineIntel™ combines 
                advanced reasoning engines with persistent institutional memory and autonomous execution.
              </p>
              
              <div className="mt-10 space-y-6">
                <FeatureItem icon={<Brain className="h-5 w-5" />} title="Reasoning Engine" text="Context-aware analysis across operational data, SOPs, and enterprise knowledge — not generic LLM prompts." />
                <FeatureItem icon={<Database className="h-5 w-5" />} title="Operational Memory" text="Persistent institutional memory that learns from every operational decision — evolving continuously, not resetting." />
                <FeatureItem icon={<Cpu className="h-5 w-5" />} title="Autonomous Execution" text="Self-executing workflows with human-in-the-loop governance — machines execute, humans govern." />
                <FeatureItem icon={<Shield className="h-5 w-5" />} title="Zero-Trust Security" text="End-to-end encryption, policy enforcement, and audit trails — every action governed, every decision traceable." />
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8 border-aquiline-500/20 h-fit">
              <h3 className="text-lg font-display font-semibold text-white mb-6">Deployment Models</h3>
              <div className="space-y-6">
                <DeploymentOption title="On-Premise Deployment" badge="Maximum Sovereignty" description="Full hardware and software stack deployed inside your data center — air-gapped options available for classified environments." />
                <DeploymentOption title="Private Cloud Deployment" badge="Balanced Sovereignty" description="Deployed in your dedicated private cloud instance — isolated, encrypted, and governed by your policies." />
                <DeploymentOption title="Hybrid Edge-Cloud" badge="Distributed Sovereignty" description="Edge nodes for low-latency operations, synchronized with private cloud for centralized governance and analytics." />
              </div>
              <p className="mt-6 text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Data residency guaranteed. Your data never leaves your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="glass-panel rounded-2xl p-8 border-white/10">
              <h3 className="text-sm font-semibold text-slate-300 mb-6">Public AI Wrappers</h3>
              <ul className="space-y-4">
                <ComparisonItem isNegative text="Data sent to third-party clouds" />
                <ComparisonItem isNegative text="Generic models, not operational context" />
                <ComparisonItem isNegative text="No persistent operational memory" />
                <ComparisonItem isNegative text="Compliance as an afterthought" />
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 border-aquiline-500/30 bg-aquiline-500/5">
              <h3 className="text-sm font-semibold text-white mb-6">AquilineIntel™ Sovereign Core</h3>
              <ul className="space-y-4">
                <ComparisonItem text="Data stays in your perimeter" />
                <ComparisonItem text="Operational context-aware reasoning" />
                <ComparisonItem text="Persistent institutional memory" />
                <ComparisonItem text="Sovereignty by design" />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

// --- Helper Components ---
function FeatureItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 flex-shrink-0">
        {icon}
      </span>
      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function DeploymentOption({ title, badge, description }: { title: string; badge: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-slate-950/40 border border-white/5">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
          {badge}
        </span>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function ComparisonItem({ isNegative, text }: { isNegative?: boolean; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className={`h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
        isNegative ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
      }`}>
        {isNegative ? '×' : '✓'}
      </span>
      <span className={`text-sm ${isNegative ? 'text-slate-500' : 'text-white'}`}>{text}</span>
    </li>
  );
}