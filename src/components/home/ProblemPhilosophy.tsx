import { useInView } from '@/hooks/useInView';
import { AlertTriangle, CheckCircle2, ArrowRight, X, Shield, Brain, Target } from 'lucide-react';

export default function ProblemPhilosophy() {
  const { ref, inView } = useInView();

  return (
    <section
      id="philosophy"
      ref={ref}
      aria-labelledby="philosophy-heading"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">The Problem & Our Philosophy</span>
          <h2 id="philosophy-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Most enterprises don't fail from lack of effort — they fail from{' '}
            <span className="text-aquiline-500">fragmented accountability.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Multi-vendor engagements produce activity without measurable outcomes.
            Aquiline replaces that model with sovereign, end-to-end ownership.
          </p>
        </div>

        {/* Contrast grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* The Fragmented Reality */}
          <div
            className={`relative glass-panel rounded-2xl p-8 lg:p-10 border-red-500/10 transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/40 via-red-500/20 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </span>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-red-400">
                  The Fragmented Reality
                </p>
                <h3 className="text-xl font-semibold text-white">Multi-vendor chaos</h3>
              </div>
            </div>

            <ul className="space-y-4">
              <ContrastItem icon={<X className="h-4 w-4 text-red-400" />} text="Activity without measurable outcomes" />
              <ContrastItem icon={<X className="h-4 w-4 text-red-400" />} text="Blame-shifting between vendors" />
              <ContrastItem icon={<X className="h-4 w-4 text-red-400" />} text="Data scattered across insecure silos" />
              <ContrastItem icon={<X className="h-4 w-4 text-red-400" />} text="Manual SOPs that decay within months" />
              <ContrastItem icon={<X className="h-4 w-4 text-red-400" />} text="Compliance as an afterthought" />
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-slate-500 italic">
                "We have 14 vendors, 9 dashboards, and no single source of truth."
              </p>
              <p className="mt-2 text-xs text-slate-600">— Typical enterprise CIO</p>
            </div>
          </div>

          {/* Autonomous Intelligence */}
          <div
            className={`relative glass-panel rounded-2xl p-8 lg:p-10 border-aquiline-500/20 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-aquiline-500/60 via-aquiline-500/30 to-transparent" />
            <div className="absolute -top-px -right-px px-3 py-1 rounded-bl-lg bg-aquiline-500 text-[10px] font-bold tracking-widest uppercase text-white">
              The Aquiline Way
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange">
                <CheckCircle2 className="h-5 w-5 text-aquiline-500" />
              </span>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-aquiline-500">
                  Autonomous Intelligence
                </p>
                <h3 className="text-xl font-semibold text-white">Sovereignty by design</h3>
              </div>
            </div>

            <ul className="space-y-4">
              <ContrastItem icon={<Brain className="h-4 w-4 text-aquiline-500" />} text="SOP over chaos — codified operational intelligence" />
              <ContrastItem icon={<Shield className="h-4 w-4 text-aquiline-500" />} text="On-premise & private cloud data sovereignty" />
              <ContrastItem icon={<Target className="h-4 w-4 text-aquiline-500" />} text="Single partner, single accountability, single SLA" />
              <ContrastItem icon={<CheckCircle2 className="h-4 w-4 text-aquiline-500" />} text="Measurable outcomes tied to enterprise KPIs" />
              <ContrastItem icon={<ArrowRight className="h-4 w-4 text-aquiline-500" />} text="Continuous evolution, not static delivery" />
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <p className="text-sm text-slate-300">
                Built on the <span className="font-semibold text-aquiline-500">AquilineIntel™</span> platform.
              </p>
              <a href="#platform" className="text-xs font-semibold text-aquiline-500 hover:text-aquiline-400 inline-flex items-center gap-1">
                Learn more <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContrastItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/5">
        {icon}
      </span>
      <span className="text-sm text-slate-300 leading-relaxed">{text}</span>
    </li>
  );
}