import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { PILLAR_SEQUENCE } from '@/lib/constants';

export default function EngagementSequence() {
  const { ref, inView } = useInView();

  return (
    <section
      id="sequence"
      ref={ref}
      aria-labelledby="sequence-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">The Engagement Sequence</span>
          <h2 id="sequence-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Each pillar feeds the next.{' '}
            <span className="text-slate-500">One partner owns the entire journey.</span>
          </h2>
        </div>

        {/* Sequence flow */}
        <div
          className={`mt-16 relative transition-all duration-700 delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLAR_SEQUENCE.map((pillar, i) => (
              <div key={pillar.id} className="relative">
                <a
                  href={`#pillar-${pillar.id}`}
                  className="group glass-panel rounded-2xl p-6 hover:border-aquiline-500/30 transition-all block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-display text-5xl font-bold bg-gradient-to-br from-aquiline-400 to-aquiline-700 bg-clip-text text-transparent">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">
                      Pillar {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-aquiline-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-aquiline-400 font-medium italic">
                    "{pillar.tagline}"
                  </p>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-aquiline-500 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                      Explore pillar
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>

                {/* Connecting arrow (desktop only) */}
                {i < PILLAR_SEQUENCE.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10" aria-hidden="true">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-aquiline-500/30">
                      <ArrowRight className="h-3 w-3 text-aquiline-500" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}