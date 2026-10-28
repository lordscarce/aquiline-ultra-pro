import DifferentiatorsHero from '@/components/differentiators/DifferentiatorsHero';
import DifferentiatorsNav from '@/components/differentiators/DifferentiatorsNav';
import ComparisonMatrix from '@/components/differentiators/ComparisonMatrix';
import DifferentiatorCards from '@/components/differentiators/DifferentiatorCards';
import MeasurementGuarantee from '@/components/differentiators/MeasurementGuarantee';
import DifferentiatorsCTA from '@/components/differentiators/DifferentiatorsCTA';

/**
 * Why Aquiline & Differentiators
 * Stage 7 composition root — the competitive evidence layer.
 */
export default function DifferentiatorsPage() {
  return (
    <>
      <DifferentiatorsHero />
      <DifferentiatorsNav />
      <ComparisonMatrix />
      <DifferentiatorCards />
      <MeasurementGuarantee />
      <DifferentiatorsCTA />
    </>
  );
}