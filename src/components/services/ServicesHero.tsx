import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/constants';

export default function ServicesHero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-labelledby="services-heading"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-aquiline-500/8 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-slate-700/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300">Services</li>
          </ol>
        </nav>

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-end">
          {/* Headline */}
          <div className="lg:col-span-8">
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Services & Capabilities
            </span>
            <h1
              id="services-heading"
              className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              One holistic suite.{' '}
              <span className="text-slate-500">From legacy modernization to</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                future-proof infrastructure.
              </span>
            </h1>
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              A comprehensive capability catalog engineered to modernize legacy systems,
              unify fragmented stacks, and build the sovereign digital infrastructure your
              enterprise needs to operate autonomously — across four integrated practice areas.
            </p>

            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <a href="#capability-hub" className="btn-primary group">
                <span>Explore capabilities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/pillars" className="btn-ghost">
                View engagement model
              </Link>
            </div>
          </div>

          {/* Meta strip — 4 categories preview */}
          <aside
            className={`lg:col-span-4 glass-panel rounded-2xl p-6 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-5">
              Practice areas
            </p>
            <dl className="space-y-4">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 font-display font-bold text-sm">
                    {cat.letter}
                  </span>
                  <div className="flex-1 min-w-0">
                    <dt className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
                      Category {cat.letter}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-white truncate">
                      {cat.title}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* Quick stat strip */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden glass-panel transition-all duration-700 delay-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <QuickStat icon={<Layers className="h-4 w-4" />} value="4" label="Practice Areas" />
          <QuickStat icon={<Sparkles className="h-4 w-4" />} value="12" label="Core Capabilities" />
          <QuickStat icon={<ArrowRight className="h-4 w-4" />} value="360°" label="Coverage Stack" />
          <QuickStat icon={<Layers className="h-4 w-4" />} value="1" label="Accountable Partner" />
        </div>
      </div>
    </section>
  );
}

function QuickStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-slate-900/40 p-6">
      <div className="flex items-center gap-2 text-aquiline-500 mb-3">
        {icon}
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
          {label}
        </span>
      </div>
      <p className="font-display text-3xl lg:text-4xl font-bold text-white">{value}</p>
    </div>
  );
}