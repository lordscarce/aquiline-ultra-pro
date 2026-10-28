import ServicesHero from '@/components/services/ServicesHero';
import CapabilityHub from '@/components/services/CapabilityHub';
import ServicesCTA from '@/components/services/ServicesCTA';

/**
 * Services & Capabilities Hub
 * Stage 5 composition root.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <CapabilityHub />
      <ServicesCTA />
    </>
  );
}