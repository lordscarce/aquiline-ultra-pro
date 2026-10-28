import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Brain, Shield, Zap } from 'lucide-react';
import { SPECIALIZED_SOLUTIONS } from '@/lib/constants';

export default function SolutionsHero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-labelledby="solutions-heading"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full bg-aquiline-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-slate-700/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300">Solutions</li>
          </ol>
        </nav>

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-end">
          {/* Headline */}
          <div className="lg:col-span-8">
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Aquiline Platform Suite
            </span>
            <h1
              id="solutions-heading"
              className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              One sovereign core.{' '}
              <span className="text-slate-500">Six specialized</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                autonomous solutions.
              </span>
            </h1>
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Built on AquilineIntel™ — the private enterprise intelligence core — our six specialized
              autonomous solutions deliver sovereign, self-governing operations across every critical
              enterprise domain.
            </p>

            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <a href="#intel-deep-dive" className="btn-primary group">
                <span>Explore AquilineIntel™</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#specialized-solutions" className="btn-ghost">
                View all solutions
              </a>
            </div>
          </div>

          {/* Meta strip */}
          <aside
            className={`lg:col-span-4 glass-panel rounded-2xl p-6 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-5">
              Platform architecture
            </p>
            <dl className="space-y-4">
              <MetaItem icon={<Brain className="h-4 w-4" />} label="Core Platform" value="AquilineIntel™" />
              <MetaItem icon={<Zap className="h-4 w-4" />} label="Specialized Solutions" value={`${SPECIALIZED_SOLUTIONS.length} autonomous platforms`} />
              <MetaItem icon={<Shield className="h-4 w-4" />} label="Deployment" value="On-premise / Private cloud" />
            </dl>
          </aside>
        </div>

        {/* Quick stat strip */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden glass-panel transition-all duration-700 delay-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <QuickStat value="1" label="Sovereign Core" />
          <QuickStat value="6" label="Specialized Solutions" />
          <QuickStat value="5" label="Industry Verticals" />
          <QuickStat value="24/7" label="Autonomous Operations" />
        </div>
      </div>
    </section>
  );
}

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500">
        {icon}
      </span>
      <div>
        <dt className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">{label}</dt>
        <dd className="mt-0.5 text-sm font-semibold text-white">{value}</dd>
      </div>
    </div>
  );
}

function QuickStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-slate-900/40 p-6">
      <p className="font-display text-3xl lg:text-4xl font-bold text-white">{value}</p>
      <p className="mt-2 text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
        {label}
      </p>
    </div>
  );
}