import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Target, ShieldCheck, Workflow, Cpu, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { CORE_VALUES } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  ShieldCheck,
  Workflow,
  Cpu,
};

export default function CoreValues() {
  const [activeId, setActiveId] = useState<string>(CORE_VALUES[0].id);
  const { ref, inView } = useInView();
  const active = CORE_VALUES.find((v) => v.id === activeId) ?? CORE_VALUES[0];
  const ActiveIcon = ICON_MAP[active.icon];

  return (
    <section
      ref={ref}
      aria-labelledby="values-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Core Values</span>
          <h2 id="values-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Four principles.{' '}
            <span className="text-slate-500">Non-negotiable.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            These aren't posters on a wall. They are the operational contract we sign with every
            client, every engagement, every deployment.
          </p>
        </div>

        {/* Values grid */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          {/* Active value — large showcase */}
          <article
            className={`lg:col-span-7 relative glass-panel rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-aquiline-500/10 blur-[120px] transition-all duration-500" />

            <div className="relative">
              <div className="flex items-start gap-5">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange">
                  <ActiveIcon className="h-8 w-8 text-aquiline-500" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                    Principle 0{CORE_VALUES.indexOf(active) + 1}
                  </p>
                  <h3 className="mt-2 text-3xl lg:text-4xl font-display font-bold text-white">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-lg text-aquiline-400 font-medium italic">
                    "{active.tagline}"
                  </p>
                </div>
              </div>

              <p className="mt-8 text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {active.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </span>
                  <p className="text-sm text-slate-300">
                    <span className="text-slate-500 text-xs uppercase tracking-wider block">Proof in practice</span>
                    <span className="font-medium">{active.proof}</span>
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Values selector stack */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {CORE_VALUES.map((value, i) => {
              const Icon = ICON_MAP[value.icon];
              const isActive = value.id === activeId;
              return (
                <button
                  key={value.id}
                  onClick={() => setActiveId(value.id)}
                  aria-pressed={isActive}
                  className={`group relative text-left rounded-xl p-5 border transition-all duration-500 ${
                    isActive
                      ? 'glass-panel border-aquiline-500/40 shadow-glow-orange'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                  } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: inView ? `${150 + i * 80}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-all ${
                        isActive
                          ? 'bg-aquiline-500/10 border-aquiline-500/30 text-aquiline-500'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                        {value.title}
                      </h4>
                      <p className={`mt-1 text-xs leading-relaxed ${isActive ? 'text-slate-400' : 'text-slate-500'} transition-colors`}>
                        {value.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className={`h-4 w-4 flex-shrink-0 transition-all ${isActive ? 'text-aquiline-500 rotate-0' : 'text-slate-600 -rotate-45 group-hover:rotate-0 group-hover:text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}