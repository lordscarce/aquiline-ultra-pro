import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

export default function VerticalsHero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-labelledby="verticals-heading"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-aquiline-500/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-slate-700/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link to="/" className="hover:text-aquiline-500 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300">Industry Verticals</li>
          </ol>
        </nav>

        <div className="mt-8 max-w-4xl">
          {/* Eyebrow */}
          <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Industry Verticals
          </span>

          {/* Headline */}
          <h1
            id="verticals-heading"
            className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Purpose-built for{' '}
            <span className="text-slate-500">mission-critical</span>{' '}
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              industries.
            </span>
          </h1>

          <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Our consulting and core deployment specialization is concentrated where{' '}
            <span className="text-white font-medium">Standard Operating Procedures exist but execution is not measured</span>.
            We bring autonomous accountability to the industries that power the global economy.
          </p>

          <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <a href="#verticals-grid" className="btn-primary group">
              <span>Explore verticals</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Discuss your industry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}