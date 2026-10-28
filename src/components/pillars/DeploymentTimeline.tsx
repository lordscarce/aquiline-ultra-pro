import { useInView } from '@/hooks/useInView';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { DEPLOYMENT_PHASES } from '@/lib/constants';

export default function DeploymentTimeline() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="timeline-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 bg-slate-950/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aquiline-500/30 bg-aquiline-500/5">
            <Calendar className="h-3.5 w-3.5 text-aquiline-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-aquiline-400">
              Pillar 03 — Deployment Timeline
            </span>
          </div>
          <h2 id="timeline-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            From discovery to go-live in{' '}
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              4–6 weeks.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Hardware, software, and operations — delivered as one integrated package.
            No fragmented procurement. No "we'll integrate it later." Everything ships together.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Horizontal line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-aquiline-500/60 via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-4 gap-6">
            {DEPLOYMENT_PHASES.map((phase, i) => (
              <div
                key={phase.week}
                className={`relative transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${150 + i * 120}ms` }}
              >
                {/* Node */}
                <div className="relative mb-6">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 border-2 border-aquiline-500 shadow-glow-orange">
                    <span className="font-display text-2xl font-bold text-aquiline-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                </div>

                {/* Content */}
                <div className="glass-panel rounded-xl p-6">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                    {phase.week}
                  </p>
                  <h3 className="mt-2 text-lg font-display font-bold text-white">
                    {phase.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-aquiline-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-400 leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome callout */}
        <div
          className={`mt-16 glass-panel rounded-2xl p-8 lg:p-10 border-aquiline-500/30 shadow-glow-orange transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
                Deployment guarantee
              </p>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">
                Fully operational in 4–6 weeks — or we continue at no cost.
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl">
                We stand behind our deployment timeline. If we don't deliver operational infrastructure
                within the agreed window, we continue deployment at no additional cost until we do.
              </p>
            </div>
            <a href="/contact" className="btn-primary whitespace-nowrap">
              Start your deployment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}