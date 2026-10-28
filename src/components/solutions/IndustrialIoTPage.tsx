import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import {  Activity, Server, TrendingUp, ArrowRight, Zap } from 'lucide-react';

export default function IndustrialIoTPage() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article className="relative">
      {/* HERO */}
      <section ref={ref} aria-labelledby="iiot-heading" className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
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
              <li className="text-slate-300">Industrial IoT</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-4xl">
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Connected Asset Infrastructure
            </span>
            <h1 id="iiot-heading" className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Industrial IoT — From{' '}
              <span className="text-slate-500">offline assets to</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                autonomous infrastructure.
              </span>
            </h1>
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Transform your physical operations into intelligent, self-monitoring assets. 
              We deploy sensor networks, edge computing, and predictive analytics to eliminate 
              unplanned downtime and optimize asset performance across your enterprise.
            </p>
            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link to="/contact" className="btn-primary group"><span>Request an infrastructure audit</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/solutions" className="btn-ghost">Back to Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="section-eyebrow">Core Capabilities</span>
            <h2 className="mt-6 font-display text-display-md text-white">Connected asset infrastructure</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <CapabilityCard icon={<Activity className="h-6 w-6" />} title="Real-time Asset Monitoring" description="Deploy industrial-grade sensors across critical equipment — temperature, vibration, pressure, flow — with sub-second telemetry to AquilineIntel™." />
            <CapabilityCard icon={<Server className="h-6 w-6" />} title="Edge Computing Nodes" description="Process data at the source with ruggedized edge devices — reduce latency, minimize bandwidth, and maintain operations during network interruptions." />
            <CapabilityCard icon={<TrendingUp className="h-6 w-6" />} title="Predictive Maintenance" description="Machine learning models analyze sensor patterns to predict failures 2-4 weeks in advance — schedule maintenance before breakdowns occur." />
            <CapabilityCard icon={<Zap className="h-6 w-6" />} title="Automated Response" description="Autonomous workflows trigger corrective actions — adjust parameters, isolate faulty equipment, or dispatch technicians without human intervention." />
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="glass-panel rounded-2xl p-10 lg:p-16 border-aquiline-500/20">
            <h2 className="font-display text-display-md text-white text-center">Proven Outcomes</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <OutcomeStat value="34%" label="Reduction in unplanned downtime" />
              <OutcomeStat value="28%" label="Improvement in asset utilization" />
              <OutcomeStat value="45%" label="Decrease in maintenance costs" />
              <OutcomeStat value="24/7" label="Autonomous monitoring" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function CapabilityCard({ icon, title, description }: any) {
  return (
    <div className="glass-panel rounded-xl p-6 border-white/10 hover:border-aquiline-500/30 transition-all duration-300">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 mb-4">{icon}</div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function OutcomeStat({ value, label }: any) {
  return (
    <div className="text-center">
      <p className="font-display text-4xl lg:text-5xl font-bold text-aquiline-500">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}