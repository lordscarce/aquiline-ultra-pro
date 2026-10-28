import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Target, Zap, ShieldCheck } from 'lucide-react';

export default function DifferentiatorsCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      id="engage"
      ref={ref}
      aria-labelledby="differentiators-cta-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className={`relative glass-panel rounded-3xl p-10 lg:p-16 border-aquiline-500/20 overflow-hidden transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-aquiline-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="section-eyebrow">The Decision</span>
              <h2 id="differentiators-cta-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
                Stop buying activity.{' '}
                <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                  Start buying outcomes.
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                Your current integrator can tell you what they delivered. Aquiline can tell you
                what changed — and accept accountability for it. Start with an enterprise audit
                and a measurable baseline.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  <span>Request an enterprise audit</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/pillars" className="btn-ghost">
                  See how we deliver
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-4">
              <ProofPoint
                icon={<Target className="h-5 w-5" />}
                title="Accountability, not handoffs"
                text="One delivery unit from baseline audit through sustained autonomous operations."
              />
              <ProofPoint
                icon={<Zap className="h-5 w-5" />}
                title="Value in 4–6 weeks"
                text="A single infrastructure package, pre-architected and pre-validated for rapid deployment."
              />
              <ProofPoint
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Measured and sovereign"
                text="Every committed outcome instrumented. Every record contained within your perimeter."
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofPoint({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-950/40 border border-white/5 hover:border-aquiline-500/30 transition-all">
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