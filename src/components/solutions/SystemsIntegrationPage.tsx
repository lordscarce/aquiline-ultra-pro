import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Layers, GitMerge, Shield, Workflow, ArrowRight } from 'lucide-react';

export default function SystemsIntegrationPage() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article className="relative">
      {/* HERO */}
      <section ref={ref} aria-labelledby="sys-heading" className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-aquiline-500/8 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/solutions" className="hover:text-aquiline-500 transition-colors">Solutions</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300">Systems Integration</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-4xl">
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Enterprise Architecture & Delivery
            </span>
            <h1 id="sys-heading" className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Systems Integration — Architecting sovereign{' '}
              <span className="text-slate-500">interoperability.</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                Across your stack.
              </span>
            </h1>
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Break down silos. Connect legacy systems with modern platforms. We design and deliver 
              enterprise-grade integration architectures that enable autonomous operations across 
              your entire technology stack.
            </p>
            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link to="/contact" className="btn-primary group"><span>Start your integration assessment</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/solutions" className="btn-ghost">Back to Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="section-eyebrow">Integration Methodology</span>
            <h2 className="mt-6 font-display text-display-md text-white">Enterprise architecture & delivery</h2>
          </div>
          <div className="space-y-6">
            <IntegrationPhase number="01" icon={<GitMerge className="h-5 w-5" />} title="Discovery & Assessment" description="Map your existing systems, data flows, and integration points. Identify bottlenecks, security gaps, and automation opportunities." />
            <IntegrationPhase number="02" icon={<Layers className="h-5 w-5" />} title="Architecture Design" description="Design sovereign integration patterns — API gateways, message brokers, event-driven architectures — all contained within your perimeter." />
            <IntegrationPhase number="03" icon={<Workflow className="h-5 w-5" />} title="Implementation & Testing" description="Deploy integration middleware, configure data pipelines, and validate end-to-end workflows with zero disruption to operations." />
            <IntegrationPhase number="04" icon={<Shield className="h-5 w-5" />} title="Governance & Optimization" description="Establish monitoring, security policies, and performance baselines. Continuously optimize for throughput and reliability." />
          </div>
        </div>
      </section>
    </article>
  );
}

function IntegrationPhase({ number, icon, title, description }: any) {
  return (
    <div className="glass-panel rounded-xl p-6 border-white/10 flex items-start gap-6">
      <span className="font-mono text-2xl font-bold text-aquiline-500/30">{number}</span>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500">{icon}</span>
          <h3 className="text-base font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}