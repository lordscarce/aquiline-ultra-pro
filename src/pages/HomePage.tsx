import Hero from '@/components/home/Hero';
import ProblemPhilosophy from '@/components/home/ProblemPhilosophy';
import Pillars from '@/components/home/Pillars';
import PlatformTeaser from '@/components/home/PlatformTeaser';
import GlobalFootprint from '@/components/home/GlobalFootprint';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemPhilosophy />
      <Pillars />
      <PlatformTeaser />
      <GlobalFootprint />
    </>
  );
}