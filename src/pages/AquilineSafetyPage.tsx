import { useInView } from '@/hooks/useInView';
import { ArrowRight, Shield, Eye, AlertTriangle, HardHat, CheckCircle2, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AquilineSafetyPage() {
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
              <li className="text-slate-300">AquilineSafety™</li>
            </ol>
          </nav>

          <div ref={heroInView.ref} className={`mt-8 max-w-4xl transition-all duration-700 ${heroInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Industrial Safety & Field Intelligence</span>
            <h1 className="mt-8 font-display text-display-lg lg:text-display-xl text-white text-balance">
              Prevent incidents before they happen.{' '}
              <span className="text-slate-500">Powered by</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 via-aquiline-500 to-aquiline-600 bg-clip-text text-transparent">computer vision HSE.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
              AquilineSafety™ provides real-time HSE compliance monitoring, restricted zone intrusion detection, PPE verification, and predictive maintenance through equipment usage analysis — turning visual data into autonomous safety decisions.
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
              <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Reactive safety management leads to preventable incidents.</h2>
            </div>
            <div className={`transition-all duration-700 delay-150 ${overviewInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-slate-400 leading-relaxed">Safety officers rely on periodic inspections, incident reports, and manual observations. PPE compliance is sporadic. Restricted zone violations go undetected. Equipment failures happen without warning.</p>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">AquilineSafety™ uses computer vision and IoT sensors to monitor safety compliance 24/7, detect hazards in real-time, predict equipment failures, and automate incident response — preventing accidents before they occur.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" ref={capabilitiesInView.ref} className="relative py-24 lg:py-32 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${capabilitiesInView.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Autonomous safety intelligence</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="h-6 w-6" />, title: 'Real-Time Hazard Detection', description: 'Computer vision algorithms identify safety hazards — spills, fires, gas leaks, and unsafe conditions — instantly triggering alerts.' },
              { icon: <HardHat className="h-6 w-6" />, title: 'PPE Compliance Monitoring', description: 'Automated verification of hard hats, safety vests, gloves, and other required PPE with instant violation alerts.' },
              { icon: <Shield className="h-6 w-6" />, title: 'Restricted Zone Detection', description: 'AI-powered intrusion detection for hazardous areas, unauthorized zones, and exclusion perimeters with immediate response protocols.' },
              { icon: <AlertTriangle className="h-6 w-6" />, title: 'Incident Prediction', description: 'Predictive analytics identify patterns that precede safety incidents, enabling proactive intervention before accidents occur.' },
              { icon: <Camera className="h-6 w-6" />, title: 'Automated Safety Reporting', description: 'Generate compliance reports, incident logs, and audit trails automatically from continuous monitoring data.' },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: 'Predictive Maintenance', description: 'Equipment usage analysis and wear detection to schedule maintenance before failures create safety hazards.' },
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
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white mb-16">From reactive to predictive safety</h2>
          </div>
          <div className="space-y-24">
            {[
              { step: '01', title: 'Computer Vision Deployment', description: 'Strategically positioned cameras and sensors feed real-time visual data to the AquilineSafety™ engine for continuous analysis of workplace conditions and worker behavior.', metric: '24/7', metricLabel: 'continuous monitoring coverage' },
              { step: '02', title: 'AI-Powered Detection', description: 'Deep learning models trained on millions of safety scenarios instantly identify PPE violations, unauthorized access, hazardous conditions, and unsafe behaviors.', metric: '< 200ms', metricLabel: 'detection and alert latency' },
              { step: '03', title: 'Automated Response', description: 'Immediate alerts to supervisors, automated lockdown protocols for critical zones, and escalation workflows ensure rapid response to safety incidents.', metric: '67%', metricLabel: 'reduction in safety incidents' },
              { step: '04', title: 'Predictive Intelligence', description: 'Pattern recognition identifies precursors to accidents — equipment wear, fatigue indicators, recurring near-misses — enabling proactive prevention.', metric: '89%', metricLabel: 'incident prediction accuracy' },
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
            <h2 className="mt-6 font-display text-3xl lg:text-4xl text-white">Safety excellence, quantified</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '67%', label: 'Reduction in safety incidents', icon: <Shield className="h-5 w-5" /> },
              { metric: '94%', label: 'PPE compliance rate', icon: <HardHat className="h-5 w-5" /> },
              { metric: '< 1s', label: 'Hazard detection & alert', icon: <AlertTriangle className="h-5 w-5" /> },
              { metric: '100%', label: 'Audit trail & compliance', icon: <CheckCircle2 className="h-5 w-5" /> },
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
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">Prevent incidents before they happen</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">Deploy AquilineSafety™ to transform your HSE operations from reactive compliance to proactive, predictive safety intelligence.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary group"><span>Deploy AquilineSafety™</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#features" className="btn-ghost">See How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}