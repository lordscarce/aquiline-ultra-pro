import { useInView } from '@/hooks/useInView';
import { ArrowRight, Landmark, Users, FileText, Shield, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AquilineGovPage() {
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
              <li className="text-slate-300">AquilineGov™</li>
            </ol>
          </nav>

          <div ref={heroInView.ref} className={`mt-8 max-w-4xl transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Government Digital Transformation</span>
            <h1 className="mt-8 font-display text-display-lg lg:text-display-xl text-white text-balance">
              Digitize public services.{' '}
              <span className="text-slate-500">Engineered for</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 via-aquiline-500 to-aquiline-600 bg-clip-text text-transparent">sovereign e-governance.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
              AquilineGov™ automates citizen service delivery, provides AI-powered engagement for public inquiries, streamlines ministry workflow approvals, and ensures transparent e-procurement — built for data residency and regulatory sovereignty.
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
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Manual government processes create delays, opacity, and citizen frustration.</h2>
            </div>
            <div className={`transition-all duration-700 delay-150 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-slate-400 leading-relaxed">Citizens wait weeks for simple services. Paper-based processes are slow and error-prone. Inter-agency coordination is fragmented. Procurement lacks transparency. Data sovereignty is compromised by foreign cloud dependencies.</p>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">AquilineGov™ digitizes public sector operations with sovereign infrastructure — automating service delivery, enabling AI-powered citizen engagement, streamlining workflows, and ensuring full auditability while maintaining complete data residency.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" ref={capabilitiesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Sovereign e-governance infrastructure</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users className="h-6 w-6" />, title: 'Citizen Service Digitization', description: 'End-to-end digital service delivery for licenses, permits, certificates, and public inquiries — reducing processing time from weeks to hours.' },
              { icon: <FileText className="h-6 w-6" />, title: 'E-Procurement & Tender Management', description: 'Transparent, automated procurement workflows with vendor scoring, bid evaluation, contract management, and full audit trails.' },
              { icon: <Landmark className="h-6 w-6" />, title: 'Inter-Agency Coordination', description: 'Secure data orchestration between ministries and departments with role-based access, workflow automation, and compliance enforcement.' },
              { icon: <Shield className="h-6 w-6" />, title: 'Compliance & Audit Automation', description: 'Automated verification of regulatory requirements, policy adherence, and financial controls with immutable audit logs.' },
              { icon: <TrendingUp className="h-6 w-6" />, title: 'Public Financial Management', description: 'Intelligent budget tracking, expenditure monitoring, and financial reporting with real-time visibility and fraud detection.' },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: 'AI-Powered Citizen Engagement', description: 'Intelligent chatbots and virtual assistants handle routine inquiries 24/7, escalating complex cases to human officers.' },
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
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white mb-16">From bureaucracy to digital efficiency</h2>
          </div>
          <div className="space-y-24">
            {[
              { step: '01', title: 'Service Digitization', description: 'Map existing manual processes and convert them into automated digital workflows with online applications, document uploads, payment integration, and status tracking.', metric: '89%', metricLabel: 'reduction in processing time' },
              { step: '02', title: 'AI-Powered Engagement', description: 'Deploy intelligent virtual assistants trained on government policies and procedures to handle citizen inquiries, application guidance, and status updates 24/7.', metric: '76%', metricLabel: 'inquiries resolved without human intervention' },
              { step: '03', title: 'Workflow Automation', description: 'Automate approval chains, inter-departmental routing, and compliance checks with intelligent escalation and deadline management.', metric: '94%', metricLabel: 'workflow automation rate' },
              { step: '04', title: 'Transparent Governance', description: 'Real-time dashboards for service delivery metrics, procurement transparency, budget utilization, and citizen satisfaction with public access portals.', metric: '100%', metricLabel: 'audit trail & transparency' },
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
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Public sector excellence, quantified</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '89%', label: 'Reduction in processing time', icon: <TrendingUp className="h-5 w-5" /> },
              { metric: '76%', label: 'Automated inquiry resolution', icon: <Users className="h-5 w-5" /> },
              { metric: '100%', label: 'Data sovereignty & residency', icon: <Shield className="h-5 w-5" /> },
              { metric: '94%', label: 'Workflow automation rate', icon: <CheckCircle2 className="h-5 w-5" /> },
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
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">Transform public service delivery</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">Deploy AquilineGov™ to digitize government operations with sovereign infrastructure — improving citizen satisfaction while ensuring data residency and regulatory compliance.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary group"><span>Deploy AquilineGov™</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#features" className="btn-ghost">See How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}