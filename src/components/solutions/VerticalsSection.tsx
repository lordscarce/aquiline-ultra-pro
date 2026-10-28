import { useInView } from '@/hooks/useInView';
import {
  Factory,
  Landmark,
  Sprout,
  Truck,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { INDUSTRY_VERTICALS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Factory,
  Landmark,
  Sprout,
  Truck,
  Rocket,
};

export default function VerticalsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="verticals-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Industry Verticals</span>
          <h2 id="verticals-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Purpose-built for{' '}
            <span className="text-aquiline-500">mission-critical industries.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Our solutions are deployed across five core industry verticals — each with specific
            operational requirements, regulatory constraints, and sovereignty needs.
          </p>
        </div>

        {/* Verticals grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_VERTICALS.map((vertical, i) => {
            const Icon = ICON_MAP[vertical.icon];
            return (
              <article
                key={vertical.id}
                className={`group relative glass-panel rounded-2xl p-6 lg:p-8 hover:border-aquiline-500/30 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: inView ? `${150 + i * 80}ms` : '0ms' }}
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/30 text-aquiline-500 group-hover:shadow-glow-orange transition-all">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-aquiline-400 transition-colors">
                    {vertical.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {vertical.description}
                </p>

                {/* Solutions deployed */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-3">
                    Solutions deployed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vertical.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-aquiline-500/10 border border-aquiline-500/20 text-[11px] font-medium text-aquiline-400"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="pt-5 border-t border-white/5">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400 mb-3">
                    Proven outcomes
                  </p>
                  <ul className="space-y-2">
                    {vertical.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-300 leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <a
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 text-xs font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors"
                  >
                    Discuss your vertical
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Final CTA */}
        <div
          className={`mt-16 glass-panel rounded-2xl p-8 lg:p-10 border-aquiline-500/20 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
                Ready to deploy?
              </p>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">
                Let's architect your sovereign operations infrastructure.
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl">
                Whether you need a single specialized solution or an end-to-end platform deployment
                across multiple verticals — we deliver with single-partner accountability.
              </p>
            </div>
            <a href="/contact" className="btn-primary whitespace-nowrap">
              Request an enterprise audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}