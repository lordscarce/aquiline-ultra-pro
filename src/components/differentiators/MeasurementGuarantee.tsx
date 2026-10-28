import { useInView } from '@/hooks/useInView';
import { Gauge, ArrowUpRight, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { KPI_CHARTER_STEPS, MEASUREMENT_METRICS } from '@/lib/constants';

export default function MeasurementGuarantee() {
  const { ref, inView } = useInView();

  return (
    <section
      id="measurement"
      ref={ref}
      aria-labelledby="measurement-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full bg-aquiline-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aquiline-500/30 bg-aquiline-500/5">
            <Gauge className="h-3.5 w-3.5 text-aquiline-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-aquiline-400">
              The Measurement Guarantee
            </span>
          </div>
          <h2 id="measurement-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Nothing left{' '}
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              unmeasured.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Activity is an input. Operational improvement is the deliverable. Every Aquiline
            engagement is bound to a KPI charter — agreed before deployment, instrumented during
            delivery, and attested after go-live.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* Left — Charter process */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-150 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <ClipboardCheck className="h-5 w-5 text-aquiline-500" />
              <h3 className="text-lg font-display font-semibold text-white">The KPI charter process</h3>
            </div>

            <ol className="relative space-y-6">
              {/* Connector */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-aquiline-500/60 via-white/10 to-transparent" aria-hidden="true" />

              {KPI_CHARTER_STEPS.map((step, i) => (
                <li
                  key={step.step}
                  className="relative flex items-start gap-4 transition-all duration-700"
                  style={{ transitionDelay: inView ? `${250 + i * 100}ms` : '0ms' }}
                >
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-aquiline-500/40 text-aquiline-500 font-mono text-xs font-semibold flex-shrink-0">
                    {step.step}
                  </span>
                  <div className="glass-panel rounded-xl p-5 flex-1">
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{step.description}</p>
                    <p className="mt-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aquiline-500/80">
                      → {step.deliverable}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right — Measurement table */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="glass-panel rounded-2xl overflow-hidden">
              {/* Table chrome */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950/40">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
                  Representative KPI Charter
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Outcome-linked
                </span>
              </div>

              {/* Header row */}
              <div className="hidden sm:grid sm:grid-cols-[1.4fr_1fr_0.9fr] gap-4 px-6 py-4 border-b border-white/5">
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-slate-500">Operational metric</p>
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-slate-500">Baseline</p>
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-aquiline-500">Target</p>
              </div>

              {/* Metric rows */}
              <ul>
                {MEASUREMENT_METRICS.map((row) => (
                  <li
                    key={row.metric}
                    className="group grid sm:grid-cols-[1.4fr_1fr_0.9fr] gap-3 sm:gap-4 px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Metric + verification */}
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-aquiline-400 transition-colors">
                        {row.metric}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">{row.verification}</p>
                    </div>

                    {/* Baseline */}
                    <div>
                      <span className="block sm:hidden text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">
                        Baseline
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed">{row.baseline}</p>
                    </div>

                    {/* Target + delta */}
                    <div>
                      <span className="block sm:hidden text-[9px] font-bold tracking-[0.2em] uppercase text-aquiline-500 mb-1">
                        Committed target
                      </span>
                      <p className="text-sm font-semibold text-aquiline-400">{row.target}</p>
                      <p className="mt-1 text-[10px] font-mono text-emerald-400/80">{row.delta}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="px-6 py-4 bg-slate-950/40 border-t border-white/5">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Representative benchmarks for positioning. Baselines are established with your
                  operations and finance teams during the enterprise audit; targets are agreed
                  contractually per engagement.
                </p>
              </div>
            </div>

            {/* Guarantee statement */}
            <div className="mt-6 p-6 rounded-2xl border border-aquiline-500/30 bg-aquiline-500/5">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-aquiline-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-display font-bold text-white">
                    No KPI charter. No engagement.
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    If we cannot agree how success will be measured before we begin, we are not
                    the right partner for the work. Outcome-linked delivery terms are defined per
                    engagement and reflected in the commercial agreement.
                  </p>
                  <a
                    href="/contact"
                    className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors"
                  >
                    Establish your baseline
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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