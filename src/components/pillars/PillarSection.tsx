import { useInView } from '@/hooks/useInView';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { PILLAR_SEQUENCE } from '@/lib/constants';

type PillarSectionProps = {
  pillar: typeof PILLAR_SEQUENCE[number];
};

export default function PillarSection({ pillar }: PillarSectionProps) {
  const { ref, inView } = useInView();

  return (
    <section
      id={`pillar-${pillar.id}`}
      ref={ref}
      aria-labelledby={`pillar-${pillar.id}-heading`}
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — Headline & description */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-7xl lg:text-8xl font-bold bg-gradient-to-br from-aquiline-400 to-aquiline-700 bg-clip-text text-transparent">
                  {pillar.number}
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                    Pillar {pillar.number}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Sequenced engagement</p>
                </div>
              </div>

              <h2
                id={`pillar-${pillar.id}-heading`}
                className="font-display text-display-md lg:text-display-lg text-white text-balance"
              >
                {pillar.title}
              </h2>

              <p className="mt-4 text-lg text-aquiline-400 font-medium italic">
                "{pillar.tagline}"
              </p>

              <p className="mt-6 text-base lg:text-lg text-slate-400 leading-relaxed">
                {pillar.description}
              </p>

              {/* Outcome callout */}
              <div className="mt-8 p-5 rounded-xl bg-aquiline-500/5 border border-aquiline-500/20">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
                  Outcome
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {pillar.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* Right column — Capabilities & proof */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-panel rounded-2xl p-8 lg:p-10">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">
                  Core capabilities
                </p>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {pillar.capabilities.map((cap, i) => (
                    <li
                      key={cap}
                      className="flex items-start gap-3"
                      style={{ transitionDelay: `${200 + i * 60}ms` }}
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-aquiline-500/10 border border-aquiline-500/20 flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-aquiline-500" />
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* Proof statement */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400 mb-1">
                        Proof in practice
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {pillar.proof}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href={`/solutions/${pillar.id}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors"
                  >
                    Deep dive into {pillar.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}