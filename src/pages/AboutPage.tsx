import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import VisionMission from '@/components/about/VisionMission';
import CoreValues from '@/components/about/CoreValues';
import HybridModel from '@/components/about/HybridModel';
import Leadership from '@/components/about/Leadership';

/**
 * About Us & Leadership Page
 * Stage 3 composition root.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <HybridModel />
      <Leadership />
    </>
  );
}