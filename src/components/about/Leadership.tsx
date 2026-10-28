import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin } from 'lucide-react';

const LEADERSHIP = [
  {
    tagline: 'Chief Paul Christian',
    name: 'Founder & President',
    image: '/images/founder.jpg',
    background: '30+ experience as Public & Business Administrator, Economist.',
  },
  {
    tagline: 'Engr Joe Nkoro',
    name: 'Co-Founder & CEO',
    image: '/images/ceo.jpg',
    background: '15+ years in operations engineering across oil & gas and critical infrastructure.',
  },
  {
    tagline: 'Ms Agatha Christie',
    name: 'Company Secretary',
    image: '/images/sec.jpg',
    background: '9+ years experience in governance, statutory compliance and regulatory liaison across multiple corporate entities.',
  },
  {
    tagline: 'Dr Emmanuel Okoro',
    name: 'Chief Operating Officer',
    image: '/images/coo.jpg',
    background: 'Led multi-regional delivery for government and energy sector clients across Africa and EMEA.',
  },
];

export default function Leadership() {
  const { ref, inView } = useInView();

  return (
    <section
      id="leadership"
      ref={ref}
      aria-labelledby="leadership-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <span className="section-eyebrow">Leadership</span>
            <h2 id="leadership-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
              Operator-led.{' '}
              <span className="text-slate-500">Accountable at every level.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 leading-relaxed">
            Our executive team is composed of operators, systems architects, and intelligence
            engineers — not consultants who've never run a production environment.
          </p>
        </div>

        {/* Leadership grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEADERSHIP.map((leader, i) => (
            <article
              key={leader.name}
              className={`group relative glass-panel rounded-2xl p-6 hover:border-aquiline-500/30 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${150 + i * 100}ms` : '0ms' }}
            >
              {/* Avatar / Image */}
              <div className="relative mb-5">
                <div className="aspect-square rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 group-hover:ring-aquiline-500/30 transition-all" />
              </div>

              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                {leader.tagline}
              </p>
              <h3 className="mt-2 text-lg font-display font-bold text-white">
                {leader.name}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {leader.background}
              </p>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#"
                  aria-label={`LinkedIn profile of ${leader.name}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:border-aquiline-500/50 hover:text-aquiline-500 transition-all"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <span className="text-[10px] tracking-widest uppercase text-slate-600 group-hover:text-aquiline-500 transition-colors">
                  Executive
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-slate-400 mb-5">
            Interested in joining the team that's defining the next era of enterprise operations?
          </p>
          <Link to="/careers" className="btn-ghost group">
            <span>View open roles</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}