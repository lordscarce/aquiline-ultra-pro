import SolutionsHero from '@/components/solutions/SolutionsHero';
import IntelDeepDive from '@/components/solutions/IntelDeepDive';
import SpecializedSolutions from '@/components/solutions/SpecializedSolutions';
import VerticalsSection from '@/components/solutions/VerticalsSection';
import { Link } from 'react-router-dom';

/**
 * Solutions Hub & Verticals Page
 * Stage 6 composition root.
 */
export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <IntelDeepDive />
      <SpecializedSolutions />
      <VerticalsSection />
<section className="relative py-16 border-t border-white/5">
  <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
    <div className="glass-panel rounded-2xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      <div>
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500 mb-2">
          Comparing platform bids?
        </p>
        <h2 className="text-2xl font-display font-bold text-white">
          Six structural reasons Aquiline is not another integration wrapper.
        </h2>
      </div>
      <Link to="/differentiators" className="btn-primary whitespace-nowrap">
        See the comparison
      </Link>
    </div>
  </div>
</section>
    </>
  );
}