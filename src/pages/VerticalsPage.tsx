import VerticalsHero from '@/components/verticals/VerticalsHero';
import VerticalsGrid from '@/components/verticals/VerticalsGrid';
import VerticalsCTA from '@/components/verticals/VerticalsCTA';

/**
 * Verticals Page
 * Industry Verticals composition root.
 */
export default function VerticalsPage() {
  return (
    <>
      <VerticalsHero />
      <VerticalsGrid />
      <VerticalsCTA />
    </>
  );
}