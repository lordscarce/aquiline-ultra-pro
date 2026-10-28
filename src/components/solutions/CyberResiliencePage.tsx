import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Shield, Lock, Eye, AlertTriangle, ArrowRight} from 'lucide-react';

export default function CyberResiliencePage() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <article className="relative">
      {/* HERO */}
      <section ref={ref} aria-labelledby="cyber-heading" className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
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
              <li className="text-slate-300">Cyber & Resilience</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-4xl">
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Zero-Trust Security Operations
            </span>
            <h1 id="cyber-heading" className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Cyber & Resilience — Defending the{' '}
              <span className="text-slate-500">autonomous</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                enterprise.
              </span>
            </h1>
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Security isn't a layer — it's the foundation. We implement zero-trust architectures, 
              continuous threat detection, and autonomous incident response to protect your critical 
              infrastructure from evolving cyber threats.
            </p>
            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link to="/contact" className="btn-primary group"><span>Request security assessment</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/solutions" className="btn-ghost">Back to Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="section-eyebrow">Security Pillars</span>
            <h2 className="mt-6 font-display text-display-md text-white">Zero-trust security operations</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <SecurityPillar icon={<Lock className="h-6 w-6" />} title="Identity & Access Management" description="Multi-factor authentication, privileged access management, and just-in-time credentials — verify explicitly, grant least privilege." />
            <SecurityPillar icon={<Eye className="h-6 w-6" />} title="Continuous Threat Detection" description="24/7 security monitoring with AI-powered anomaly detection, behavioral analytics, and automated threat hunting." />
            <SecurityPillar icon={<Shield className="h-6 w-6" />} title="Network Segmentation" description="Micro-segmentation, software-defined perimeters, and encrypted traffic inspection — contain breaches before they spread." />
            <SecurityPillar icon={<AlertTriangle className="h-6 w-6" />} title="Autonomous Incident Response" description="Pre-programmed playbooks execute containment actions automatically — isolate compromised systems, revoke credentials, trigger forensics." />
          </div>
        </div>
      </section>
    </article>
  );
}

function SecurityPillar({ icon, title, description }: any) {
  return (
    <div className="glass-panel rounded-xl p-6 border-white/10 hover:border-aquiline-500/30 transition-all duration-300">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 mb-4">{icon}</div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}