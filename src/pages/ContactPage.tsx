import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import OfficeLocations from '@/components/contact/OfficeLocations';

/**
 * Contact Page & Form Integration
 * Stage 8 composition root.
 */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Office Locations & Direct Contact */}
          <div className="lg:col-span-5 space-y-12">
            <OfficeLocations />
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}