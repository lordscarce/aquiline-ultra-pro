import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Check, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { COMPARISON_ROWS } from '@/lib/constants';

export default function ComparisonMatrix() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { ref, inView } = useInView();

  const toggle = (id: string) => setExpanded((current) => (current === id ? null : id));

  return (
    <section
      id="comparison"
      ref={ref}
      aria-labelledby="comparison-heading"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-2xl">
            <span className="section-eyebrow">The Comparative Breakdown</span>
            <h2 id="comparison-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
              Traditional integration{' '}
              <span className="text-slate-500">versus</span>{' '}
              <span className="text-aquiline-500">accountable delivery.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Select any capability to expand the operational detail. This is not a feature
            checklist — it is a comparison of delivery accountability models.
          </p>
        </div>

        {/* Column legend */}
        <div className={`mt-12 hidden md:grid grid-cols-[1.1fr_1fr_1fr] gap-px rounded-t-xl overflow-hidden border border-white/5 transition-all duration-700 delay-150 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-slate-950/60 p-5">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">Capability</p>
          </div>
          <div className="bg-slate-950/60 p-5">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400/80">Traditional integrator</p>
          </div>
          <div className="bg-aquiline-500/10 p-5 border-l border-aquiline-500/20">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-aquiline-400">Aquiline Ultra Pro</p>
          </div>
        </div>

        {/* Desktop table */}
        <div className={`hidden md:block border border-t-0 border-white/5 rounded-b-xl overflow-hidden transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Comparison of traditional systems integrators against Aquiline Ultra Pro across six
              delivery differentiators. Select a capability row to expand detailed reasoning.
            </caption>
            <tbody>
              {COMPARISON_ROWS.map((row) => {
                const isOpen = expanded === row.id;
                return (
                  <RowGroup key={row.id}>
                    <tr className={`group border-t border-white/5 transition-colors duration-300 ${
                      isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
                    }`}>
                      {/* Capability / toggle */}
                      <th scope="row" className="p-5 lg:p-6 align-top font-normal">
                        <button
                          onClick={() => toggle(row.id)}
                          aria-expanded={isOpen}
                          aria-controls={`detail-${row.id}`}
                          className="group/btn flex items-start gap-3 text-left w-full"
                        >
                          <ChevronDown className={`h-4 w-4 mt-1 flex-shrink-0 transition-all duration-300 ${
                            isOpen ? 'rotate-180 text-aquiline-500' : 'text-slate-600 group-hover/btn:text-aquiline-500'
                          }`} />
                          <div>
                            <span className="block text-sm font-semibold text-white group-hover/btn:text-aquiline-400 transition-colors">
                              {row.capability}
                            </span>
                            <span className="mt-1.5 block text-[10px] font-bold tracking-[0.2em] uppercase text-aquiline-500/70">
                              {row.impact}
                            </span>
                          </div>
                        </button>
                      </th>

                      {/* Traditional */}
                      <td className="p-5 lg:p-6 align-top border-l border-white/5">
                        <div className="flex items-start gap-3">
                          <X className="h-4 w-4 text-red-400/70 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-500 leading-relaxed">{row.traditional}</p>
                        </div>
                      </td>

                      {/* Aquiline */}
                      <td className="p-5 lg:p-6 align-top border-l border-aquiline-500/20 bg-aquiline-500/[0.03]">
                        <div className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-aquiline-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-200 leading-relaxed">{row.aquiline}</p>
                        </div>
                      </td>
                    </tr>

                    {/* Expandable detail */}
                    <tr id={`detail-${row.id}`} hidden={!isOpen}>
                      <td colSpan={3} className="border-t border-aquiline-500/10 bg-slate-950/60 p-6 lg:px-8">
                        <div className="max-w-4xl animate-fade-in">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-3">
                            Operational detail
                          </p>
                          <p className="text-sm text-slate-300 leading-relaxed">{row.detail}</p>
                        </div>
                      </td>
                    </tr>
                  </RowGroup>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked comparison cards */}
        <div className={`md:hidden space-y-4 transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {COMPARISON_ROWS.map((row) => {
            const isOpen = expanded === row.id;
            return (
              <article key={row.id} className="glass-panel rounded-xl overflow-hidden">
                <button
                  onClick={() => toggle(row.id)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-detail-${row.id}`}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div>
                    <span className="block text-sm font-semibold text-white">{row.capability}</span>
                    <span className="mt-1 block text-[10px] font-bold tracking-[0.2em] uppercase text-aquiline-500/70">
                      {row.impact}
                    </span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-aquiline-500' : ''
                  }`} />
                </button>

                <div className="px-5 pb-5 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                    <X className="h-4 w-4 text-red-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-red-400/70 mb-1">Traditional</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{row.traditional}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-aquiline-500/5 border border-aquiline-500/20">
                    <Check className="h-4 w-4 text-aquiline-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-aquiline-500 mb-1">Aquiline</p>
                      <p className="text-xs text-slate-200 leading-relaxed">{row.aquiline}</p>
                    </div>
                  </div>
                </div>

                <div id={`mobile-detail-${row.id}`} hidden={!isOpen} className="px-5 pb-5 animate-fade-in">
                  <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-4">{row.detail}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Synthesis line */}
        <div className={`mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-700 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm text-slate-400">
            The difference isn't technology.{' '}
            <span className="text-white font-semibold">It's accountability.</span>
          </p>
          <a href="#measurement" className="group inline-flex items-center gap-2 text-xs font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors">
            See how we measure it
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="mt-6 text-[11px] text-slate-600 leading-relaxed max-w-3xl">
          Comparative model descriptions reflect common market delivery patterns. Your enterprise
          audit establishes your actual baseline — not an industry average.
        </p>
      </div>
    </section>
  );
}

/** Keeps <tbody> wrapping valid when a detail row follows its header row. */
function RowGroup({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}