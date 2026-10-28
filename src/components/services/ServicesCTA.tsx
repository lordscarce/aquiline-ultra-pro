import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

export default function ServicesCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="services-cta-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-aquiline-500/8 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          className={`glass-panel rounded-3xl p-10 lg:p-16 border-aquiline-500/20 overflow-hidden relative transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            {/* Left — Headline */}
            <div className="lg:col-span-7">
              <span className="section-eyebrow">Ready to engage?</span>
              <h2
                id="services-cta-heading"
                className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance"
              >
                Turn capability into{' '}
                <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                  operational reality.
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                Whether you need a single capability deployed, or an end-to-end transformation
                across all four practice areas — we deliver with single-partner accountability.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  <span>Request an enterprise audit</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/pillars" className="btn-ghost">
                  View the engagement model
                </Link>
              </div>
            </div>

            {/* Right — Proof points */}
            <aside className="lg:col-span-5 space-y-4">
              <ProofPoint
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Sovereign by default"
                text="Every capability deploys on-premise or in your private cloud — your data never leaves your perimeter."
              />
              <ProofPoint
                icon={<Zap className="h-5 w-5" />}
                title="4–6 week deployment"
                text="Hardware, software, and operations delivered as one integrated package — not a multi-year saga."
              />
              <ProofPoint
                icon={<Users className="h-5 w-5" />}
                title="Single accountable partner"
                text="One SLA, one delivery team, one outcome — from strategy through autonomous operations."
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofPoint({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-950/40 border border-white/5">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 flex-shrink-0">
        {icon}
      </span>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}