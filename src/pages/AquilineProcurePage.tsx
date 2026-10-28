import { useInView } from '@/hooks/useInView';
import { ArrowRight, ShoppingCart, TrendingUp, Shield, Clock, CheckCircle2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AquilineProcurePage() {
  const heroInView = useInView({ threshold: 0.1 });
  const overviewInView = useInView();
  const capabilitiesInView = useInView();
  const featuresInView = useInView();
  const outcomesInView = useInView();
  const ctaInView = useInView();

  return (
    <article className="relative">
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/solutions" className="hover:text-aquiline-500 transition-colors">Solutions</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300">AquilineProcure™</li>
            </ol>
          </nav>

          <div ref={heroInView.ref} className={`mt-8 max-w-4xl transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Intelligent Procurement & Supply Chain</span>
            <h1 className="mt-8 font-display text-display-lg lg:text-display-xl text-white text-balance">
              Eliminate procurement bottlenecks.{' '}
              <span className="text-slate-500">Powered by</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 via-aquiline-500 to-aquiline-600 bg-clip-text text-transparent">AI-driven supplier intelligence.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
              AquilineProcure™ analyzes vendor quotations, scores suppliers on price, delivery, and compliance, automates purchase order generation, and tracks delivery timelines — transforming procurement from a cost center into a strategic advantage.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href="#capabilities" className="btn-primary group"><span>Explore Capabilities</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="/contact" className="btn-ghost">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" ref={overviewInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={`transition-all duration-700 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="section-eyebrow">The Challenge</span>
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Manual procurement creates delays, cost overruns, and compliance risks.</h2>
            </div>
            <div className={`transition-all duration-700 delay-150 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-slate-400 leading-relaxed">Procurement teams drown in spreadsheets, email chains, and manual vendor comparisons. Approval workflows stall for days. Delivery tracking requires constant follow-ups. Compliance audits become nightmare scenarios.</p>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">AquilineProcure™ automates the entire procurement lifecycle — from supplier discovery and quotation analysis to PO generation, delivery tracking, and performance scoring — with full auditability and compliance governance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" ref={capabilitiesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Intelligent procurement infrastructure</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BarChart3 className="h-6 w-6" />, title: 'Vendor Quotation Analysis', description: 'AI-powered comparison of supplier bids across price, delivery timelines, compliance scores, and historical performance.' },
              { icon: <TrendingUp className="h-6 w-6" />, title: 'Supplier Scoring', description: 'Multi-dimensional vendor evaluation based on cost competitiveness, delivery reliability, quality metrics, and risk assessment.' },
              { icon: <ShoppingCart className="h-6 w-6" />, title: 'Automated PO Generation', description: 'Intelligent purchase order creation with automatic approval routing, budget validation, and compliance verification.' },
              { icon: <Clock className="h-6 w-6" />, title: 'Delivery Tracking', description: 'Real-time shipment monitoring with predictive ETA updates, delay alerts, and automated escalation protocols.' },
              { icon: <Shield className="h-6 w-6" />, title: 'Compliance Governance', description: 'Automated verification of regulatory requirements, contract terms, and procurement policies with full audit trails.' },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: 'Spend Analytics', description: 'Comprehensive procurement intelligence dashboards showing spend patterns, savings opportunities, and vendor performance trends.' },
            ].map((cap, i) => (
              <div key={cap.title} className={`glass-panel rounded-2xl p-8 transition-all duration-700 hover:border-aquiline-500/40 hover:shadow-glow-orange ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="h-12 w-12 rounded-xl bg-aquiline-500/10 border border-aquiline-500/20 flex items-center justify-center text-aquiline-500 mb-6">{cap.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" ref={featuresInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`transition-all duration-700 ${featuresInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">How It Works</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white mb-16">From request to delivery — fully automated</h2>
          </div>
          <div className="space-y-24">
            {[
              { step: '01', title: 'Intelligent Sourcing', description: 'Automated supplier discovery and RFQ distribution based on category, budget, and compliance requirements. AI analyzes historical performance to recommend optimal vendors.', metric: '60%', metricLabel: 'faster supplier identification' },
              { step: '02', title: 'Automated Evaluation', description: 'Machine learning algorithms score quotations across multiple dimensions — price, delivery time, quality ratings, and risk factors — eliminating bias and manual comparison.', metric: '85%', metricLabel: 'reduction in evaluation time' },
              { step: '03', title: 'Smart Approval', description: 'Intelligent workflow routing based on spend thresholds, department policies, and budget availability. Automatic escalation for exceptions.', metric: '73%', metricLabel: 'faster approval cycles' },
              { step: '04', title: 'End-to-End Tracking', description: 'Real-time delivery monitoring with predictive analytics for delay prevention. Automated notifications and exception handling.', metric: '28%', metricLabel: 'reduction in procurement cycle time' },
            ].map((item, i) => (
              <div key={item.step} className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-all duration-700 ${featuresInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="lg:col-span-5"><span className="font-display text-6xl lg:text-7xl font-bold bg-gradient-to-br from-aquiline-400 to-aquiline-700 bg-clip-text text-transparent">{item.step}</span></div>
                <div className="lg:col-span-7">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-6">{item.description}</p>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-aquiline-500/5 border border-aquiline-500/20">
                    <span className="text-2xl font-bold text-aquiline-500">{item.metric}</span>
                    <span className="text-sm text-slate-400">{item.metricLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" ref={outcomesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${outcomesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Measured Outcomes</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Procurement excellence, quantified</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '28%', label: 'Reduction in procurement cycle time', icon: <Clock className="h-5 w-5" /> },
              { metric: '15%', label: 'Average cost savings per category', icon: <TrendingUp className="h-5 w-5" /> },
              { metric: '94%', label: 'On-time delivery rate', icon: <CheckCircle2 className="h-5 w-5" /> },
              { metric: '100%', label: 'Audit compliance & traceability', icon: <Shield className="h-5 w-5" /> },
            ].map((stat, i) => (
              <div key={stat.label} className={`glass-panel rounded-2xl p-8 text-center transition-all duration-700 hover:border-aquiline-500/40 ${outcomesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaInView.ref} className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`glass-panel rounded-3xl p-12 lg:p-20 text-center transition-all duration-700 ${ctaInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">Transform your procurement operations</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">See how AquilineProcure™ can reduce cycle times, cut costs, and eliminate procurement bottlenecks in your organization.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary group"><span>Deploy AquilineProcure™</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#features" className="btn-ghost">See How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}