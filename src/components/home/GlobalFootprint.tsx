import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { MapPin, ArrowUpRight } from 'lucide-react';

type Region = {
  name: string;
  flag: string;
  hq: string;
  focus: string;
  status: 'Active' | 'Expanding';
};

const REGIONS: Region[] = [
  { name: 'Africa', flag: '🌍', hq: 'Port Harcourt · Lagos · Abuja', focus: 'Energy, Public Sector, Financial Services', status: 'Active' },
  { name: 'United Kingdom', flag: '🇬🇧', hq: 'London', focus: 'Industrial IoT, Cyber Resilience', status: 'Active' },
  { name: 'United States', flag: '🇺🇸', hq: 'New York', focus: 'Enterprise Software, Autonomous Ops', status: 'Active' },
  { name: 'APAC', flag: '🌏', hq: 'Jakarta', focus: 'Systems Integration, Digital Infrastructure', status: 'Expanding' },
  { name: 'MENA', flag: '🌍', hq: 'Dubai', focus: 'Smart Infrastructure, Energy Transition', status: 'Expanding' },
];

const STATS = [
  { value: 7, suffix: '', label: 'Active Regions' },
  { value: 24, suffix: '/7', label: 'Operational Coverage' },
  { value: 99, suffix: '.9%', label: 'Platform Uptime SLA' },
  { value: 140, suffix: '+', label: 'Enterprise Engagements' },
];

export default function GlobalFootprint() {
  const { ref, inView } = useInView();

  return (
    <section
      id="global"
      ref={ref}
      aria-labelledby="global-heading"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Global Footprint</span>
          <h2 id="global-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            One accountable partner —{' '}
            <span className="text-aquiline-500">across every mission-critical region.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Headquartered in Nigeria with operational hubs across Europe, the Americas, APAC, and MENA —
            delivering sovereign intelligence where it matters most.
          </p>
        </div>

        {/* Proof strip — animated stats */}
        <div
          className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden glass-panel transition-all duration-700 delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} animate={inView} delay={i * 100} />
          ))}
        </div>

        {/* Regions grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REGIONS.map((region, i) => (
            <article
              key={region.name}
              className={`group relative glass-panel rounded-2xl p-6 hover:border-aquiline-500/30 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${300 + i * 80}ms` : '0ms' }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl leading-none" aria-hidden="true">{region.flag}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{region.name}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      <span>{region.hq}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                    region.status === 'Active'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-aquiline-500/10 border border-aquiline-500/30 text-aquiline-400'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${region.status === 'Active' ? 'bg-emerald-400' : 'bg-aquiline-500'} animate-pulse`} />
                  {region.status}
                </span>
              </div>

              <p className="mt-5 text-sm text-slate-400 leading-relaxed">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase block mb-1.5">Focus</span>
                {region.focus}
              </p>

              <a
                href={`#region-${region.name.toLowerCase().replace(/\s/g, '-')}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors group/link"
              >
                Regional operations
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </article>
          ))}

          {/* CTA card */}
          <a
            href="#contact"
            className="group relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-aquiline-500 to-aquiline-700 transition-all duration-700 hover:shadow-glow-orange-lg"
            style={{ transitionDelay: inView ? '700ms' : '0ms' }}
          >
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
            <div className="relative">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
                New Engagement
              </p>
              <h3 className="mt-2 text-2xl font-display font-bold text-white">
                Bring Aquiline to your region.
              </h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                Partner with us to deploy sovereign intelligence infrastructure in your market.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Start the conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   Animated stat card
   ----------------------------------------------------------- */
function StatCard({
  stat,
  animate,
  delay,
}: {
  stat: { value: number; suffix: string; label: string };
  animate: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, animate, 1800);

  return (
    <div
      className="bg-slate-900/40 p-6 lg:p-8 transition-opacity duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
        {stat.label}
      </p>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-4xl lg:text-5xl font-bold text-white tabular-nums">
          {count}
        </span>
        <span className="text-2xl font-display font-bold text-aquiline-500">
          {stat.suffix}
        </span>
      </div>
    </div>
  );
}