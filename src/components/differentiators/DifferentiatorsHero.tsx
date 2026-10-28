import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { ArrowRight, Handshake, Gauge, ShieldCheck } from 'lucide-react';

export default function DifferentiatorsHero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-labelledby="differentiators-heading"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Ambient depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-aquiline-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-slate-700/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300">Why Aquiline</li>
          </ol>
        </nav>

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className={`section-eyebrow transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Why Aquiline
            </span>

            <h1
              id="differentiators-heading"
              className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-150 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Six differentiators.{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                Zero ambiguity.
              </span>
            </h1>

            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              The difference between a technology engagement and an operational transformation
              is accountability. Here is precisely where Aquiline Ultra Pro diverges from the
              traditional integration model — measured, contractual, and non-negotiable.
            </p>

            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-450 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <a href="#comparison" className="btn-primary group">
                <span>See the comparison</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/contact" className="btn-ghost">
                Request an enterprise audit
              </Link>
            </div>
          </div>

          {/* The accountability contract */}
          <aside
            className={`lg:col-span-4 glass-panel rounded-2xl p-6 border-aquiline-500/20 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-5">
              The accountability contract
            </p>
            <ul className="space-y-5">
              <ContractPoint icon={<Handshake className="h-4 w-4" />} title="One accountable partner" text="Strategy through sustained operations." />
              <ContractPoint icon={<Gauge className="h-4 w-4" />} title="Outcome-linked delivery" text="KPIs agreed before deployment." />
              <ContractPoint icon={<ShieldCheck className="h-4 w-4" />} title="Sovereign by default" text="Your perimeter. Your data. Your control." />
            </ul>
          </aside>
        </div>

        {/* Animated proof strip */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden glass-panel transition-all duration-700 delay-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ProofStat value={6} suffix="" label="Structural Differentiators" animate={inView} delay={0} />
          <ProofStat value={1} suffix="" label="Accountable Partner" animate={inView} delay={100} />
          <ProofStat value={100} suffix="%" label="KPI Charter Coverage" animate={inView} delay={200} />
          <ProofStat value={24} suffix="/7" label="Autonomous Operations" animate={inView} delay={300} />
        </div>
      </div>
    </section>
  );
}

function ContractPoint({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 flex-shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-slate-400 leading-relaxed">{text}</p>
      </div>
    </li>
  );
}

function ProofStat({
  value, suffix, label, animate, delay,
}: {
  value: number; suffix: string; label: string; animate: boolean; delay: number;
}) {
  const count = useCountUp(value, animate, 1800);

  return (
    <div className="bg-slate-900/40 p-6 lg:p-8" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-4xl lg:text-5xl font-bold text-white tabular-nums">{count}</span>
        <span className="text-2xl font-display font-bold text-aquiline-500">{suffix}</span>
      </div>
      <p className="mt-2 text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">{label}</p>
    </div>
  );
}