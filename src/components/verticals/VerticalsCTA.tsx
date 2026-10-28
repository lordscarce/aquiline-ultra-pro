import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

export default function VerticalsCTA() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          className={`glass-panel rounded-2xl p-10 lg:p-16 border-aquiline-500/20 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-eyebrow">Ready to deploy?</span>
              <h2 className="mt-6 font-display text-display-md text-white">
                Let's architect your sovereign operations infrastructure.
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Whether you need a single specialized solution or an end-to-end platform deployment 
                across multiple verticals — we deliver with single-partner accountability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link to="/contact" className="btn-primary group">
                <span>Request an enterprise audit</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/solutions" className="btn-ghost">
                See the full platform
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}