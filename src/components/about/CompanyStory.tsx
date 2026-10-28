import { useInView } from '@/hooks/useInView';
import { COMPANY_TIMELINE } from '@/lib/constants';

export default function CompanyStory() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="story-heading"
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Our Story</span>
          <h2 id="story-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            From a single frustration in Port Harcourt — to a{' '}
            <span className="text-aquiline-500">global standard.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Aquiline Ultra Pro was founded by operations and systems specialists who had spent
            decades inside Oil & Gas, Manufacturing, and Government — and had grown tired of
            watching enterprise technology promises collapse at the point of delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aquiline-500/60 via-white/10 to-transparent lg:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12 lg:space-y-20">
            {COMPANY_TIMELINE.map((milestone, i) => (
              <TimelineItem
                key={milestone.year}
                milestone={milestone}
                index={i}
                inView={inView}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

type TimelineItemProps = {
  milestone: typeof COMPANY_TIMELINE[number];
  index: number;
  inView: boolean;
};

function TimelineItem({ milestone, index, inView }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <li
      className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${200 + index * 120}ms` }}
    >
      {/* Node */}
      <span
        className="absolute left-4 lg:left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full
                   bg-slate-900 border-2 border-aquiline-500 shadow-glow-orange z-10"
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-full bg-aquiline-500/30 animate-ping" />
      </span>

      {/* Year label (mobile always left, desktop alternates) */}
      <div
        className={`pl-12 lg:pl-0 lg:pr-12 ${isEven ? 'lg:text-right lg:col-start-1' : 'lg:pl-12 lg:col-start-2'}`}
      >
        <span className="font-display text-5xl lg:text-6xl font-bold bg-gradient-to-br from-aquiline-400 to-aquiline-700 bg-clip-text text-transparent">
          {milestone.year}
        </span>
      </div>

      {/* Content */}
      <article
        className={`pl-12 lg:pl-0 ${isEven ? 'lg:pl-12 lg:col-start-2' : 'lg:pr-12 lg:col-start-1 lg:text-right'}`}
      >
        <div className={`glass-panel rounded-2xl p-6 lg:p-8 hover:border-aquiline-500/30 transition-all ${isEven ? '' : 'lg:text-left'}`}>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
            Chapter {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-xl lg:text-2xl font-display font-bold text-white">
            {milestone.title}
          </h3>
          <p className={`mt-4 text-sm text-slate-400 leading-relaxed ${isEven ? '' : 'lg:text-left'}`}>
            {milestone.description}
          </p>
        </div>
      </article>
    </li>
  );
}