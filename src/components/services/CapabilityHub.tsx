import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import {
  ArrowUpRight,
  Code2,
  Compass,
  Cpu,
  Brain,
  Braces,
  Layout,
  Plug,
  TrendingUp,
  ClipboardCheck,
  GraduationCap,
  Server,
  Radio,
  Factory,
  Sparkles,
  MessageSquare,
  Scan,
  type LucideIcon,
} from 'lucide-react';
import { SERVICE_CATEGORIES, type ServiceItem } from '@/lib/constants';

/**
 * Master icon map — all icons used across service categories.
 * Single source of truth prevents duplicate imports and keeps bundle lean.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  // Category icons
  Code2, Compass, Cpu, Brain,
  // Service icons
  Braces, Layout, Plug,
  TrendingUp, ClipboardCheck, GraduationCap,
  Server, Radio, Factory,
  Sparkles, MessageSquare, Scan,
};

export default function CapabilityHub() {
  const [activeId, setActiveId] = useState<string>(SERVICE_CATEGORIES[0].id);
  const { ref, inView } = useInView();

  const active = SERVICE_CATEGORIES.find((c) => c.id === activeId) ?? SERVICE_CATEGORIES[0];
  const ActiveCategoryIcon = ICON_MAP[active.icon];

  return (
    <section
      id="capability-hub"
      ref={ref}
      aria-labelledby="capability-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Capability Catalog</span>
          <h2 id="capability-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Four practice areas.{' '}
            <span className="text-slate-500">Twelve core capabilities.</span>{' '}
            <span className="text-aquiline-500">One integrated stack.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Select a practice area to explore the capabilities within — each engineered to
            deploy as a standalone service or as part of an integrated engagement through our{' '}
            <a href="/pillars" className="text-aquiline-500 hover:text-aquiline-400 underline decoration-aquiline-500/30 underline-offset-4">
              four-pillar delivery model
            </a>.
          </p>
        </div>

        {/* Interactive catalog — rail + panel */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left rail — category selector */}
          <nav
            aria-label="Service categories"
            className={`lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {SERVICE_CATEGORIES.map((cat, i) => {
              const Icon = ICON_MAP[cat.icon];
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  aria-pressed={isActive}
                  className={`group relative flex items-center gap-4 text-left rounded-xl p-4 lg:p-5 border transition-all duration-500 min-w-[240px] lg:min-w-0 ${
                    isActive
                      ? 'glass-panel border-aquiline-500/40 shadow-glow-orange'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                  } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: inView ? `${200 + i * 80}ms` : '0ms' }}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border transition-all flex-shrink-0 ${
                      isActive
                        ? 'bg-aquiline-500/10 border-aquiline-500/30 text-aquiline-500'
                        : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isActive ? 'text-aquiline-500' : 'text-slate-500'}`}>
                        Category {cat.letter}
                      </span>
                    </div>
                    <h3 className={`mt-1 text-sm font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                      {cat.title}
                    </h3>
                  </div>
                  <ArrowUpRight className={`h-4 w-4 flex-shrink-0 transition-all ${isActive ? 'text-aquiline-500 rotate-0' : 'text-slate-600 -rotate-45 group-hover:rotate-0 group-hover:text-slate-400'}`} />
                </button>
              );
            })}
          </nav>

          {/* Right panel — active category showcase */}
          <article
            key={active.id} // force re-mount for animation
            className={`lg:col-span-8 relative glass-panel rounded-2xl p-8 lg:p-10 overflow-hidden animate-fade-in`}
          >
            {/* Ambient glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-aquiline-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="relative">
              {/* Category header */}
              <header className="mb-8 pb-8 border-b border-white/5">
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange flex-shrink-0">
                    <ActiveCategoryIcon className="h-8 w-8 text-aquiline-500" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-aquiline-500 text-white font-display text-xs font-bold">
                        {active.letter}
                      </span>
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                        Category {active.letter} · {active.services.length} capabilities
                      </p>
                    </div>
                    <h3 className="mt-3 text-2xl lg:text-3xl font-display font-bold text-white">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-base text-aquiline-400 font-medium italic">
                      "{active.tagline}"
                    </p>
                    <p className="mt-4 text-sm lg:text-base text-slate-400 leading-relaxed max-w-2xl">
                      {active.description}
                    </p>
                  </div>
                </div>
              </header>

              {/* Service cards grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {active.services.map((service, i) => (
                  <ServiceCard key={service.id} service={service} delay={i * 80} />
                ))}
              </div>

              {/* Category footer CTA */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-slate-400">
                  Need a capability not listed here? We build bespoke solutions too.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors whitespace-nowrap"
                >
                  Discuss your requirements
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

/* -----------------------------------------------------------
   ServiceCard — Individual capability tile
   ----------------------------------------------------------- */
function ServiceCard({ service, delay }: { service: ServiceItem; delay: number }) {
  const Icon = ICON_MAP[service.icon];

  return (
    <div
      className="group relative rounded-xl p-5 bg-slate-950/40 border border-white/5 hover:border-aquiline-500/30 transition-all duration-500 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 group-hover:shadow-glow-orange transition-all flex-shrink-0">
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>
      <h4 className="text-sm font-semibold text-white group-hover:text-aquiline-400 transition-colors leading-tight">
        {service.title}
      </h4>
      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}