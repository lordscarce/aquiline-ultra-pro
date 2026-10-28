import { useInView } from '@/hooks/useInView';
import { Brain, Workflow, FolderKanban, ArrowUpRight, Sparkles } from 'lucide-react';
import { AQUILINE_PRODUCTS } from '@/lib/constants';

const ICON_MAP = {
  'aquiline-intel': Brain,
  'aquiline-task': Workflow,
  'aquiline-projects': FolderKanban,
} as const;

export default function ProductSuite() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="products-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full bg-aquiline-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aquiline-500/30 bg-aquiline-500/5">
            <Sparkles className="h-3.5 w-3.5 text-aquiline-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-aquiline-400">
              Pillar 04 — Product Suite
            </span>
          </div>
          <h2 id="products-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            Three platforms.{' '}
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              One autonomous enterprise.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            AquilineIntel™, AquilineTask™, and AquilineProjects™ — the sovereign intelligence platforms
            that power autonomous operations across your enterprise.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {AQUILINE_PRODUCTS.map((product, i) => {
            const Icon = ICON_MAP[product.id as keyof typeof ICON_MAP];
            return (
              <article
                key={product.id}
                className={`group relative glass-panel rounded-2xl p-8 hover:border-aquiline-500/30 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: inView ? `${150 + i * 120}ms` : '0ms' }}
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange">
                    <Icon className="h-7 w-7 text-aquiline-500" />
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-aquiline-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-aquiline-400 font-medium italic">
                      "{product.tagline}"
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {product.description}
                </p>

                {/* Capabilities */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-3">
                    Core capabilities
                  </p>
                  <ul className="space-y-2">
                    {product.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-aquiline-500 flex-shrink-0" />
                        <span className="text-xs text-slate-400 leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use case */}
                <div className="mt-6 p-4 rounded-lg bg-slate-950/60 border border-white/5">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400 mb-2">
                    Use case
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {product.useCase}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <a
                    href={`/solutions/${product.id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-aquiline-500 hover:text-aquiline-400 transition-colors"
                  >
                    Explore {product.name}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Platform integration callout */}
        <div
          className={`mt-16 glass-panel rounded-2xl p-8 lg:p-10 border-aquiline-500/30 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
                Integrated platform
              </p>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">
                Three platforms. One sovereign control plane.
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl">
                AquilineIntel™, AquilineTask™, and AquilineProjects™ are not standalone products —
                they're integrated layers of a single sovereign intelligence platform, sharing data,
                governance, and operational memory across your entire enterprise.
              </p>
            </div>
            <a href="/contact" className="btn-primary whitespace-nowrap">
              Deploy the platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}