import { useInView } from '@/hooks/useInView';
import { Brain, Lock, Server, ShieldCheck, Cpu, Database, ArrowRight } from 'lucide-react';

export default function IntelDeepDive() {
  const { ref, inView } = useInView();

  return (
    <section
      id="intel-deep-dive"
      ref={ref}
      aria-labelledby="intel-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full bg-aquiline-500/5 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aquiline-500/30 bg-aquiline-500/5">
            <Brain className="h-3.5 w-3.5 text-aquiline-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-aquiline-400">
              The Sovereign Core
            </span>
          </div>
          <h2 id="intel-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              AquilineIntel™
            </span>{' '}
            — private enterprise intelligence, not a public wrapper.
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Unlike public AI platforms that wrap third-party models, AquilineIntel™ is a sovereign
            intelligence core — deployed on-premise or in your private cloud, with full data residency,
            operational memory, and autonomous execution capabilities.
          </p>
        </div>

        {/* Technical breakdown grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Left — Core architecture */}
          <div
            className={`glass-panel rounded-2xl p-8 lg:p-10 transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange">
                <Cpu className="h-6 w-6 text-aquiline-500" />
              </span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                  Core Architecture
                </p>
                <h3 className="text-xl font-semibold text-white">Sovereign intelligence stack</h3>
              </div>
            </div>

            <ul className="space-y-4">
              <TechItem
                icon={<Brain className="h-4 w-4" />}
                title="Reasoning Engine"
                description="Context-aware analysis across operational data, SOPs, and enterprise knowledge — not generic LLM prompts."
              />
              <TechItem
                icon={<Database className="h-4 w-4" />}
                title="Operational Memory"
                description="Persistent institutional memory that learns from every operational decision — evolving continuously, not resetting."
              />
              <TechItem
                icon={<Zap className="h-4 w-4" />}
                title="Autonomous Execution"
                description="Self-executing workflows with human-in-the-loop governance — machines execute, humans govern."
              />
              <TechItem
                icon={<Lock className="h-4 w-4" />}
                title="Zero-Trust Security"
                description="End-to-end encryption, policy enforcement, and audit trails — every action governed, every decision traceable."
              />
            </ul>
          </div>

          {/* Right — Deployment model */}
          <div
            className={`glass-panel rounded-2xl p-8 lg:p-10 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <Server className="h-6 w-6 text-emerald-400" />
              </span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400">
                  Deployment Model
                </p>
                <h3 className="text-xl font-semibold text-white">Your perimeter, your sovereignty</h3>
              </div>
            </div>

            <div className="space-y-5">
              <DeploymentOption
                title="On-Premise Deployment"
                description="Full hardware and software stack deployed inside your data center — air-gapped options available for classified environments."
                badge="Maximum Sovereignty"
              />
              <DeploymentOption
                title="Private Cloud Deployment"
                description="Deployed in your dedicated private cloud instance — isolated, encrypted, and governed by your policies."
                badge="Balanced Sovereignty"
              />
              <DeploymentOption
                title="Hybrid Edge-Cloud"
                description="Edge nodes for low-latency operations, synchronized with private cloud for centralized governance and analytics."
                badge="Distributed Sovereignty"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-emerald-400">Data residency guaranteed:</span>{' '}
                  Your data never leaves your jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison callout */}
        <div
          className={`mt-12 glass-panel rounded-2xl p-8 lg:p-10 border-aquiline-500/20 transition-all duration-700 delay-450 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-400 mb-3">
                Public AI Wrappers
              </p>
              <ul className="space-y-2">
                <ComparisonItem text="Data sent to third-party clouds" negative />
                <ComparisonItem text="Generic models, not operational context" negative />
                <ComparisonItem text="No persistent operational memory" negative />
                <ComparisonItem text="Compliance as an afterthought" negative />
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-3">
                AquilineIntel™ Sovereign Core
              </p>
              <ul className="space-y-2">
                <ComparisonItem text="Data stays in your perimeter" />
                <ComparisonItem text="Operational context-aware reasoning" />
                <ComparisonItem text="Persistent institutional memory" />
                <ComparisonItem text="Sovereignty by design" />
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#specialized-solutions" className="btn-primary group inline-flex">
            <span>Explore the 6 specialized solutions</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TechItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 flex-shrink-0">
        {icon}
      </span>
      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
    </li>
  );
}

function DeploymentOption({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-slate-950/40 border border-white/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">{description}</p>
        </div>
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold tracking-wider uppercase text-emerald-400 whitespace-nowrap">
          {badge}
        </span>
      </div>
    </div>
  );
}

function ComparisonItem({ text, negative = false }: { text: string; negative?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${negative ? 'bg-red-400' : 'bg-aquiline-500'}`} />
      <span className={`text-sm ${negative ? 'text-slate-500' : 'text-slate-300'}`}>{text}</span>
    </li>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}