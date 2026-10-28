import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import {
  Workflow,
  ShoppingCart,
  Shield,
  Sprout,
  Landmark,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { SPECIALIZED_SOLUTIONS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Workflow,
  ShoppingCart,
  Shield,
  Sprout,
  Landmark,
  Rocket,
};

export default function SpecializedSolutions() {
  const [activeId, setActiveId] = useState<string>(SPECIALIZED_SOLUTIONS[0].id);
  const { ref, inView } = useInView();

  const active = SPECIALIZED_SOLUTIONS.find((s) => s.id === activeId) ?? SPECIALIZED_SOLUTIONS[0];
  const ActiveIcon = ICON_MAP[active.icon];

  return (
    <section
      id="specialized-solutions"
      ref={ref}
      aria-labelledby="solutions-catalog-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">The Six Specialized Solutions</span>
          <h2 id="solutions-catalog-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Six autonomous platforms.{' '}
            <span className="text-slate-500">Built on one sovereign core.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Each specialized solution is purpose-built for a specific operational domain — but all
            share the same sovereign AquilineIntel™ core, ensuring consistency, interoperability,
            and unified governance across your enterprise.
          </p>
        </div>

        {/* Interactive catalog — grid + detail panel */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left — Solution selector grid */}
          <nav
            aria-label="Specialized solutions"
            className={`lg:col-span-5 grid grid-cols-2 lg:grid-cols-2 gap-3 transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {SPECIALIZED_SOLUTIONS.map((solution, i) => {
              const Icon = ICON_MAP[solution.icon];
              const isActive = solution.id === activeId;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveId(solution.id)}
                  aria-pressed={isActive}
                  className={`group relative text-left rounded-xl p-5 border transition-all duration-500 ${
                    isActive
                      ? 'glass-panel border-aquiline-500/40 shadow-glow-orange'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                  } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: inView ? `${200 + i * 60}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-all flex-shrink-0 ${
                        isActive
                          ? 'bg-aquiline-500/10 border-aquiline-500/30 text-aquiline-500'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                        {solution.name}
                      </h3>
                      <p className={`mt-1 text-[11px] leading-tight ${isActive ? 'text-aquiline-400' : 'text-slate-500'} transition-colors`}>
                        {solution.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Right — Active solution detail panel */}
          <article
            key={active.id}
            className={`lg:col-span-7 relative glass-panel rounded-2xl p-8 lg:p-10 overflow-hidden animate-fade-in`}
          >
            {/* Ambient glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-aquiline-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="relative">
              {/* Solution header */}
              <header className="mb-8">
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange flex-shrink-0">
                    <ActiveIcon className="h-8 w-8 text-aquiline-500" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">
                      {active.name}
                    </h3>
                    <p className="mt-2 text-base text-aquiline-400 font-medium italic">
                      "{active.tagline}"
                    </p>
                    <p className="mt-4 text-sm lg:text-base text-slate-400 leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                </div>
              </header>

              {/* Capabilities */}
              <div className="mb-8">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-4">
                  Core capabilities
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {active.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-aquiline-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verticals served */}
              <div className="mb-8">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-4">
                  Industry verticals
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.verticals.map((vertical) => (
                    <span
                      key={vertical}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {vertical}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric callout */}
              <div className="p-5 rounded-xl bg-aquiline-500/5 border border-aquiline-500/20">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
                  Proven outcome
                </p>
                <p className="text-lg font-display font-bold text-white">
                  {active.metric}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors"
                >
                  Deploy {active.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}