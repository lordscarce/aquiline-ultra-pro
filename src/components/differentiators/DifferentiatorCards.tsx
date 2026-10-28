import { useInView } from '@/hooks/useInView';
import {
  Target, Brain, Zap, Gauge, PackageCheck, ShieldCheck,
  ArrowUpRight, Check, X, type LucideIcon,
} from 'lucide-react';
import { DIFFERENTIATORS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Target, Brain, Zap, Gauge, PackageCheck, ShieldCheck,
};

/** Asymmetric bento: 4+2 / 2+2+2 / 6 */
const SPANS = [
  'lg:col-span-4',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-6',
];

export default function DifferentiatorCards() {
  const { ref, inView } = useInView();

  return (
    <section
      id="differentiators"
      ref={ref}
      aria-labelledby="differentiator-cards-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">The Six Structural Differentiators</span>
          <h2 id="differentiator-cards-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Not advantages.{' '}
            <span className="text-aquiline-500">Architectural commitments.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            These are not differentiators we claim in a pitch deck. They are structural properties
            of how Aquiline is organized, how our platform is built, and how our engagements are contracted.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid lg:grid-cols-6 gap-5">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            const featured = i === 1;       // Proprietary core — orange panel
            const fullWidth = i === 5;      // Sovereignty — full-width band

            return (
              <article
                key={item.id}
                className={`group relative rounded-2xl p-7 lg:p-8 overflow-hidden transition-all duration-700 ${
                  SPANS[i]
                } ${
                  featured
                    ? 'bg-gradient-to-br from-aquiline-600/20 via-slate-900 to-slate-900 border border-aquiline-500/40 shadow-glow-orange hover:shadow-glow-orange-lg'
                    : 'glass-panel hover:border-aquiline-500/30'
                } ${fullWidth ? 'lg:flex lg:items-center lg:gap-12' : ''} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: inView ? `${150 + i * 90}ms` : '0ms' }}
              >
                {/* Ambient accent */}
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-aquiline-500/10 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />

                <div className={`relative ${fullWidth ? 'lg:flex-1' : ''}`}>
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-5">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-all ${
                      featured
                        ? 'bg-aquiline-500 border-aquiline-400/50 text-white shadow-glow-orange'
                        : 'bg-aquiline-500/10 border-aquiline-500/30 text-aquiline-500 group-hover:shadow-glow-orange'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-bold text-white/10 group-hover:text-aquiline-500/20 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-white ${fullWidth ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm font-medium italic ${featured ? 'text-white' : 'text-aquiline-400'}`}>
                    "{item.tagline}"
                  </p>

                  {/* Contrast: traditional vs Aquiline */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <X className="h-3.5 w-3.5 text-red-400/60 mt-1 flex-shrink-0" />
                      <p className="text-xs text-slate-500 leading-relaxed">{item.traditional}</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className={`h-3.5 w-3.5 mt-1 flex-shrink-0 ${featured ? 'text-white' : 'text-aquiline-500'}`} />
                      <p className={`text-sm leading-relaxed ${featured ? 'text-white/90' : 'text-slate-300'}`}>
                        {item.aquiline}
                      </p>
                    </div>
                  </div>

                  {/* Proof line — wide cards only */}
                  {(i === 0 || fullWidth) && (
                    <p className={`mt-5 text-xs leading-relaxed ${featured ? 'text-white/70' : 'text-slate-400'}`}>
                      {item.proof}
                    </p>
                  )}

                  <a
                    href={item.link}
                    className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                      featured ? 'text-white hover:text-white/80' : 'text-aquiline-500 hover:text-aquiline-400'
                    }`}
                  >
                    {i === 3 ? 'View the measurement framework' : 'Explore this commitment'}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Metric block — right rail on wide/featured cards */}
                {(i === 0 || featured || fullWidth) && (
                  <div className={`relative mt-6 lg:mt-0 ${fullWidth ? 'lg:w-72 lg:flex-shrink-0' : 'lg:mt-6'}`}>
                    <div className={`rounded-xl p-5 border ${
                      featured
                        ? 'bg-slate-950/50 border-white/10'
                        : 'bg-slate-950/40 border-white/5'
                    }`}>
                      <p className={`font-display text-4xl lg:text-5xl font-bold ${featured ? 'text-white' : 'text-aquiline-500'}`}>
                        {item.metric}
                      </p>
                      <p className="mt-2 text-[11px] text-slate-400 leading-relaxed">
                        {item.metricLabel}
                      </p>
                    </div>
                  </div>
                )}

                {/* Sovereignty deployment zones */}
                {fullWidth && (
                  <div className="relative lg:w-64 lg:flex-shrink-0 mt-6 lg:mt-0">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-4">
                      Residency zones
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {['NG', 'EU', 'US', 'ID'].map((zone) => (
                        <span
                          key={zone}
                          className="inline-flex flex-col items-center gap-1.5 py-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono font-semibold text-emerald-300">{zone}</span>
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                      Air-gapped options available. Keys remain with the client.
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}