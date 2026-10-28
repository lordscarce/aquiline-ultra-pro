import { useInView } from '@/hooks/useInView';
import { Server, Cloud, Users, Shield, ArrowRight, Wifi, Lock } from 'lucide-react';

export default function HybridModel() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="hybrid-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Hybrid Delivery Model</span>
          <h2 id="hybrid-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Physical deployment.{' '}
            <span className="text-aquiline-500">Autonomous delivery.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            We pair on-premise infrastructure with remote autonomous delivery management —
            giving clients the security of physical sovereignty with the scale of distributed intelligence.
          </p>
        </div>

        {/* Diagram */}
        <div
          className={`mt-16 relative transition-all duration-700 delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">
            {/* Left — Physical On-Premise */}
            <div className="glass-panel rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <Server className="h-5 w-5 text-emerald-400" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400">
                    Layer 01
                  </p>
                  <h3 className="text-lg font-semibold text-white">Physical On-Premise</h3>
                </div>
              </div>

              <ul className="space-y-3">
                <DiagramItem text="Edge nodes deployed inside client perimeter" />
                <DiagramItem text="On-premise compute, storage, and networking" />
                <DiagramItem text="Air-gapped deployment options available" />
                <DiagramItem text="Hardware owned and operated by the client" />
              </ul>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-emerald-400">Outcome:</span> Data never leaves your jurisdiction.
                </p>
              </div>
            </div>

            {/* Center — AquilineIntel™ Sovereign Platform */}
            <div className="glass-panel rounded-2xl p-8 relative border-aquiline-500/30 shadow-glow-orange">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aquiline-500/80 to-transparent" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-aquiline-500 text-[10px] font-bold tracking-widest uppercase text-white whitespace-nowrap">
                Sovereign Control Plane
              </div>

              <div className="flex items-center gap-3 mb-6 mt-2">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-aquiline-500/15 border border-aquiline-500/40 shadow-glow-orange">
                  <Lock className="h-5 w-5 text-aquiline-500" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                    Layer 02
                  </p>
                  <h3 className="text-lg font-semibold text-white">AquilineIntel™ Platform</h3>
                </div>
              </div>

              <ul className="space-y-3">
                <DiagramItem text="Reasoning, Predicting, Executing engines" accent />
                <DiagramItem text="Codified SOPs and operational memory" accent />
                <DiagramItem text="Zero-trust policy enforcement" accent />
                <DiagramItem text="Encrypted telemetry, sovereign by default" accent />
              </ul>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-aquiline-400">Outcome:</span> Autonomous operations, governed.
                </p>
              </div>
            </div>

            {/* Right — Remote Autonomous Delivery */}
            <div className="glass-panel rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30">
                  <Users className="h-5 w-5 text-sky-400" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-400">
                    Layer 03
                  </p>
                  <h3 className="text-lg font-semibold text-white">Remote Delivery Management</h3>
                </div>
              </div>

              <ul className="space-y-3">
                <DiagramItem text="Global delivery teams across 7 regions" tone="sky" />
                <DiagramItem text="24/7 autonomous monitoring & orchestration" tone="sky" />
                <DiagramItem text="Human-in-the-loop governance & exception handling" tone="sky" />
                <DiagramItem text="Continuous SOP evolution & platform updates" tone="sky" />
              </ul>

              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-sky-400">Outcome:</span> Scale without sacrificing sovereignty.
                </p>
              </div>
            </div>
          </div>

          {/* Connecting flow arrows (desktop only) */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none" aria-hidden="true">
            <div className="flex-1 flex items-center justify-end pr-2">
              <ArrowRight className="h-5 w-5 text-emerald-500/60" />
            </div>
            <div className="w-8" />
            <div className="flex-1 flex items-center justify-end pr-2">
              <ArrowRight className="h-5 w-5 text-aquiline-500/60" />
            </div>
          </div>
        </div>

        {/* Supporting points */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SupportPoint
            icon={<Shield className="h-5 w-5" />}
            title="Sovereignty preserved"
            text="Client data and operational memory never leave the on-premise perimeter — even as remote teams manage delivery."
          />
          <SupportPoint
            icon={<Wifi className="h-5 w-5" />}
            title="Resilience by design"
            text="Operations continue autonomously even during network partition. Remote management is additive, not a dependency."
          />
          <SupportPoint
            icon={<Cloud className="h-5 w-5" />}
            title="Scale without compromise"
            text="Global delivery capacity paired with local sovereignty — the best of both worlds, engineered as one."
          />
        </div>
      </div>
    </section>
  );
}

function DiagramItem({
  text,
  accent = false,
  tone = 'default',
}: {
  text: string;
  accent?: boolean;
  tone?: 'default' | 'sky';
}) {
  const dotColor = accent
    ? 'bg-aquiline-500'
    : tone === 'sky'
    ? 'bg-sky-400'
    : 'bg-emerald-400';

  return (
    <li className="flex items-start gap-3">
      <span className={`mt-2 h-1.5 w-1.5 rounded-full ${dotColor} flex-shrink-0`} />
      <span className="text-sm text-slate-300 leading-relaxed">{text}</span>
    </li>
  );
}

function SupportPoint({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="glass-panel rounded-xl p-6 hover:border-aquiline-500/30 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500">
          {icon}
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}