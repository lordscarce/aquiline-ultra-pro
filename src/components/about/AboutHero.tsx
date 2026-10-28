import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function AboutHero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-labelledby="about-heading"
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
            <li className="text-slate-300">About Us</li>
          </ol>
        </nav>

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-end">
          {/* Headline */}
          <div className="lg:col-span-8">
            <span className={`section-eyebrow transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              About Aquiline Ultra Pro
            </span>
            <h1
              id="about-heading"
              className={`mt-6 font-display text-display-lg lg:text-display-xl text-white text-balance transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Built by operators.{' '}
              <span className="text-slate-500">Engineered for</span>{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                sovereign enterprises.
              </span>
            </h1>
            <p className={`mt-8 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              Since {BRAND.founded}, we've partnered with the world's most demanding
              enterprises to replace fragmented technology engagements with accountable,
              sovereign, autonomous operations infrastructure.
            </p>

            <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <Link to="/contact" className="btn-primary group">
                <span>Partner with us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/solutions" className="btn-ghost">
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Meta strip */}
          <aside
            className={`lg:col-span-4 glass-panel rounded-2xl p-6 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-5">
              At a glance
            </p>
            <dl className="space-y-4">
              <MetaItem icon={<Calendar className="h-4 w-4" />} label="Founded" value={String(BRAND.founded)} />
              <MetaItem icon={<MapPin className="h-4 w-4" />} label="Headquarters" value="Port Harcourt, Nigeria" />
              <MetaItem icon={<Users className="h-4 w-4" />} label="Regions" value="7 active markets" />
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500">
        {icon}
      </span>
      <div>
        <dt className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">{label}</dt>
        <dd className="mt-0.5 text-sm font-semibold text-white">{value}</dd>
      </div>
    </div>
  );
}