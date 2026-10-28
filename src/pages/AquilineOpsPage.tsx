import { useInView } from '@/hooks/useInView';
import { ArrowRight, Workflow, BarChart3, Shield, Cpu, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AquilineOpsPage() {
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
              <li className="text-slate-300">AquilineOps™</li>
            </ol>
          </nav>

          <div ref={heroInView.ref} className={`mt-8 max-w-4xl transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Autonomous Operations System</span>
            <h1 className="mt-8 font-display text-display-lg lg:text-display-xl text-white text-balance">
              Replace manual coordination.{' '}
              <span className="text-slate-500">Engineered for</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 via-aquiline-500 to-aquiline-600 bg-clip-text text-transparent">autonomous decision-making.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
              AquilineOps™ automates SOP execution, generates real-time operational reports from field data, monitors compliance, and triggers workflows — transforming reactive operations into proactive, self-governing systems.
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
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Manual operations create bottlenecks, delays, and compliance gaps.</h2>
            </div>
            <div className={`transition-all duration-700 delay-150 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-slate-400 leading-relaxed">Field teams rely on paper checklists, WhatsApp groups, and manual data entry. Supervisors spend hours compiling reports instead of making decisions. Compliance audits become reactive fire-fighting exercises rather than proactive governance.</p>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">AquilineOps™ eliminates this chaos by codifying your SOPs into self-executing workflows that run autonomously, generate real-time intelligence, and escalate only exceptions to human operators.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" ref={capabilitiesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Autonomous operations infrastructure</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Workflow className="h-6 w-6" />, title: 'SOP Automation', description: 'Codify operational procedures into self-executing workflows with automated decision trees and escalation protocols.' },
              { icon: <BarChart3 className="h-6 w-6" />, title: 'Real-Time Reporting', description: 'Generate operational intelligence dashboards automatically from field data — no manual compilation required.' },
              { icon: <Shield className="h-6 w-6" />, title: 'Compliance Monitoring', description: 'Continuous verification of regulatory adherence with automated audit trails and exception flagging.' },
              { icon: <Cpu className="h-6 w-6" />, title: 'Workflow Orchestration', description: 'Intelligent task routing based on availability, skill level, and priority — optimizing resource allocation.' },
              { icon: <TrendingUp className="h-6 w-6" />, title: 'Predictive Maintenance', description: 'Equipment usage analysis and wear prediction to schedule maintenance before failures occur.' },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: 'Quality Assurance', description: 'Automated verification of operational standards with instant feedback loops for continuous improvement.' },
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
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white mb-16">From manual chaos to autonomous precision</h2>
          </div>
          <div className="space-y-24">
            {[
              { step: '01', title: 'SOP Codification', description: 'We audit your existing operational procedures and codify them into executable digital workflows with decision logic, approval chains, and escalation protocols.', metric: '100%', metricLabel: 'of SOPs digitized and executable' },
              { step: '02', title: 'Field Data Integration', description: 'Connect IoT sensors, mobile devices, and legacy systems to feed real-time operational data into the AquilineOps™ engine for continuous analysis.', metric: '< 50ms', metricLabel: 'data ingestion latency' },
              { step: '03', title: 'Autonomous Execution', description: 'Workflows trigger automatically based on conditions — equipment readings, time schedules, or external events — without manual intervention.', metric: '78%', metricLabel: 'reduction in manual coordination' },
              { step: '04', title: 'Intelligence Generation', description: 'The system generates real-time operational reports, compliance dashboards, and predictive insights for continuous optimization.', metric: '24/7', metricLabel: 'autonomous monitoring' },
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
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Operational excellence, quantified</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '34%', label: 'Reduction in unplanned downtime', icon: <TrendingUp className="h-5 w-5" /> },
              { metric: '78%', label: 'Decrease in manual coordination', icon: <Workflow className="h-5 w-5" /> },
              { metric: '24/7', label: 'Autonomous compliance monitoring', icon: <Shield className="h-5 w-5" /> },
              { metric: '4-6', label: 'Weeks to full deployment', icon: <CheckCircle2 className="h-5 w-5" /> },
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
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">Ready to automate your operations?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">Schedule a consultation to see how AquilineOps™ can transform your field operations from manual coordination to autonomous execution.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary group"><span>Deploy AquilineOps™</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#features" className="btn-ghost">See How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}