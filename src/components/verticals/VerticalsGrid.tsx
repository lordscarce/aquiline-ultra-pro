import { useInView } from '@/hooks/useInView';
import { 
  Factory, 
  Landmark, 
  Wheat, 
  Truck, 
  Building2,
  ArrowUpRight 
} from 'lucide-react';
import { } from 'react-router-dom';

const VERTICALS = [
  {
    id: 'oil-gas',
    icon: Factory,
    title: 'Oil & Gas and Industrial Manufacturing',
    focus: ['HSE compliance', 'Field operations', 'Predictive maintenance'],
    description:
      'Autonomous operations for critical infrastructure — from offshore platforms to refineries and heavy manufacturing. We enforce compliance, predict failures, and secure operational continuity in the most demanding environments.',
    solutions: ['AquilineOps™', 'AquilineSafety™', 'AquilineProcure™'],
  },
  {
    id: 'government',
    icon: Landmark,
    title: 'Government and Public Sector',
    focus: ['Digital transformation', 'Citizen services', 'Transparent procurement'],
    description:
      'Sovereign digital transformation for public institutions — e-procurement, citizen services, inter-agency coordination, and compliance automation. Built for data residency and regulatory sovereignty.',
    solutions: ['AquilineGov™', 'AquilineProcure™', 'AquilineOps™'],
  },
  {
    id: 'agrobusiness',
    icon: Wheat,
    title: 'Agrobusiness Value Chain',
    focus: ['Processing', 'Inventory integrity', 'Market timing'],
    description:
      'End-to-end agricultural intelligence — from farm-level yield prediction to supply chain orchestration, market linkage, and traceability. Sovereign food system intelligence for national food security.',
    solutions: ['AquilineAgro™', 'AquilineProcure™', 'AquilineOps™'],
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics, Procurement & Supply Chain',
    focus: ['Vendor accountability', 'Delivery assurance', 'Cost control'],
    description:
      'Autonomous supply chain orchestration — from demand forecasting to last-mile delivery, with real-time visibility, predictive analytics, and autonomous decision-making across the entire logistics network.',
    solutions: ['AquilineProcure™', 'AquilineOps™', 'AquilineAgro™'],
  },
  {
    id: 'sme',
    icon: Building2,
    title: 'Enterprise SMEs',
    focus: ['Autonomous scaling', 'Operational leverage', 'Margin expansion'],
    description:
      'Enterprise-grade autonomous operations for growing businesses — integrating finance, operations, sales, and compliance into a single self-managing platform. Scale without the enterprise overhead.',
    solutions: ['AquilineScale™'],
  },
];

export default function VerticalsGrid() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      id="verticals-grid"
      ref={ref}
      className="relative py-24 lg:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow">Five core verticals</span>
          <h2 className="mt-6 font-display text-display-md text-white">
            Specialized delivery for every critical domain.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Each vertical is served by a dedicated delivery pod — combining domain expertise, 
            sovereign tooling, and outcome-linked KPIs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {VERTICALS.map((vertical, i) => (
            <VerticalCard
              key={vertical.id}
              vertical={vertical}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VerticalCard({ vertical, index, inView }: { vertical: any; index: number; inView: boolean }) {
  const Icon = vertical.icon;

  return (
    <article
      className={`group glass-panel rounded-2xl p-8 border-white/10 hover:border-aquiline-500/30 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 group-hover:bg-aquiline-500/20 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-600 group-hover:text-aquiline-500 transition-colors" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-semibold text-white mb-4">
        {vertical.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        {vertical.description}
      </p>

      {/* Focus areas */}
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">
          Focus areas
        </p>
        <ul className="flex flex-wrap gap-2">
          {vertical.focus.map((item: string) => (
            <li
              key={item}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions deployed */}
      <div>
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">
          Solutions deployed
        </p>
        <div className="flex flex-wrap gap-2">
          {vertical.solutions.map((sol: string) => (
            <span
              key={sol}
              className="px-3 py-1 rounded-full bg-aquiline-500/10 border border-aquiline-500/20 text-xs font-medium text-aquiline-400"
            >
              {sol}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}