import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import {
  Compass,
  Workflow,
  Laptop2,
  Cpu,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

type Pillar = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  accent: string;
};

const PILLARS: Pillar[] = [
  {
    id: 'consultancy',
    icon: Compass,
    eyebrow: 'Pillar 01',
    title: 'Technology Consultancy',
    description:
      'Strategic advisory that translates enterprise ambition into executable, measurable roadmaps — grounded in operational reality.',
    capabilities: ['Operating model design', 'Digital strategy', 'Technology due diligence', 'Transformation governance'],
    accent: 'from-aquiline-500/20 to-transparent',
  },
  {
    id: 'integration',
    icon: Workflow,
    eyebrow: 'Pillar 02',
    title: 'Systems Integration',
    description:
      'Architecting and delivering mission-critical integrations across heterogeneous enterprise landscapes — on time, on SLA.',
    capabilities: ['Enterprise architecture', 'API & middleware', 'Legacy modernization', 'Multi-cloud orchestration'],
    accent: 'from-aquiline-600/20 to-transparent',
  },
  {
    id: 'software',
    icon: Laptop2,
    eyebrow: 'Pillar 03',
    title: 'Enterprise Software Deployment',
    description:
      'End-to-end deployment of tier-1 enterprise platforms — from discovery through go-live and sustained operational excellence.',
    capabilities: ['ERP & HCM deployment', 'Custom platform engineering', 'Migration & cutover', 'Change management'],
    accent: 'from-aquiline-700/20 to-transparent',
  },
  {
    id: 'autonomous',
    icon: Cpu,
    eyebrow: 'Pillar 04',
    title: 'Autonomous Operations Infrastructure',
    description:
      'Sovereign intelligence platforms that reason, predict, and execute — keeping critical operations running without human bottleneck.',
    capabilities: ['Industrial IoT', 'Decision-grade AI', 'Zero-touch operations', 'Resilience engineering'],
    accent: 'from-aquiline-500/30 to-transparent',
  },
];

export default function Pillars() {
  const [activeId, setActiveId] = useState<string>(PILLARS[0].id);
  const { ref, inView } = useInView();
  const active = PILLARS.find((p) => p.id === activeId) ?? PILLARS[0];
  const ActiveIcon = active.icon;

  return (
    <section
      id="pillars"
      ref={ref}
      aria-labelledby="pillars-heading"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <span className="section-eyebrow">The Four Pillars</span>
            <h2 id="pillars-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
              One integrated capability stack.{' '}
              <span className="text-slate-500">Zero handoff risk.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 leading-relaxed">
            Every pillar is delivered by the same accountable team — eliminating the
            fragmentation that cripples most enterprise transformations.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Active pillar — large showcase */}
          <article
            className={`lg:col-span-7 relative glass-panel rounded-2xl p-8 lg:p-10 overflow-hidden transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br ${active.accent} blur-3xl transition-all duration-500`} />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange">
                    <ActiveIcon className="h-7 w-7 text-aquiline-500" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                      {active.eyebrow}
                    </p>
                    <h3 className="mt-1 text-2xl lg:text-3xl font-display font-bold text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold tracking-widest uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              <p className="mt-6 text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
                {active.description}
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {active.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1 w-1 rounded-full bg-aquiline-500" />
                    {cap}
                  </li>
                ))}
              </ul>

              <a
                href={`#solutions/${active.id}`}
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors group"
              >
                Deep dive into {active.title.split(' ').slice(-1)[0]}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>

          {/* Pillar selector stack */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const isActive = pillar.id === activeId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveId(pillar.id)}
                  aria-pressed={isActive}
                  className={`group relative text-left rounded-2xl p-5 lg:p-6 border transition-all duration-500 ${
                    isActive
                      ? 'glass-panel border-aquiline-500/40 shadow-glow-orange'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                  } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: inView ? `${150 + i * 80}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-all ${
                        isActive
                          ? 'bg-aquiline-500/10 border-aquiline-500/30 text-aquiline-500'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-[10px] font-bold tracking-[0.25em] uppercase ${isActive ? 'text-aquiline-500' : 'text-slate-500'}`}>
                        {pillar.eyebrow}
                      </p>
                      <h4 className={`mt-1 text-base font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'} transition-colors`}>
                        {pillar.title}
                      </h4>
                    </div>
                    <ArrowUpRight className={`h-4 w-4 transition-all ${isActive ? 'text-aquiline-500 rotate-0' : 'text-slate-600 -rotate-45 group-hover:rotate-0 group-hover:text-slate-400'}`} />
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