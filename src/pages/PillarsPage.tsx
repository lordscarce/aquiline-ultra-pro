import PillarsHero from '@/components/pillars/PillarsHero';
import EngagementSequence from '@/components/pillars/EngagementSequence';
import PillarSection from '@/components/pillars/PillarSection';
import DeploymentTimeline from '@/components/pillars/DeploymentTimeline';
import ProductSuite from '@/components/pillars/ProductSuite';
import { PILLAR_SEQUENCE } from '@/lib/constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * Services & Pillars Page
 * Stage 4 composition root.
 */
export default function PillarsPage() {
  return (
    <>
      <PillarsHero />
      <EngagementSequence />

{/* Cross-link to Services */}
<section className="relative py-12 border-t border-white/5">
  <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
    <div className="glass-panel rounded-xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <div>
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
          Looking for specific technical capabilities?
        </p>
        <p className="text-base text-slate-300">
          Explore our full catalog across software development, consulting, IoT, and AI — or engage any capability as part of the sequenced pillar model above.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
  <Link to="/services" className="btn-ghost">Browse all services</Link>
  <Link to="/differentiators" className="btn-ghost group">
    <span>Why Aquiline, not another integrator?</span>
    <ArrowUpRight className="h-4 w-4" />
  </Link>
</div>
    </div>
  </div>
</section>

      {/* Pillar 1 — Consultancy */}
      <PillarSection pillar={PILLAR_SEQUENCE[0]} />

      {/* Pillar 2 — Systems Integration */}
      <PillarSection pillar={PILLAR_SEQUENCE[1]} />

      {/* Pillar 3 — Enterprise Software Deployment */}
      <PillarSection pillar={PILLAR_SEQUENCE[2]} />
      <DeploymentTimeline />

      {/* Pillar 4 — Autonomous Operations Infrastructure */}
      <PillarSection pillar={PILLAR_SEQUENCE[3]} />
      <ProductSuite />
    </>
  );
}