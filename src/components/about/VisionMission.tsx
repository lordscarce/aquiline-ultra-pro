import { useInView } from '@/hooks/useInView';
import { Eye, Compass } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function VisionMission() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      aria-labelledby="vm-heading"
      className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-aquiline-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-eyebrow justify-center">Vision & Mission</span>
          <h2 id="vm-heading" className="sr-only">Our Vision and Mission</h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision */}
          <article
            className={`group relative glass-panel rounded-2xl p-10 lg:p-12 overflow-hidden transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aquiline-500/60 to-transparent" />

            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aquiline-500/10 border border-aquiline-500/30 shadow-glow-orange">
                <Eye className="h-6 w-6 text-aquiline-500" />
              </span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-aquiline-500">
                  Our Vision
                </p>
                <p className="text-xs text-slate-500">The future we're building toward</p>
              </div>
            </div>

            <blockquote className="font-display text-2xl lg:text-3xl text-white leading-snug text-balance">
              "To standardize{' '}
              <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
                Autonomous Operations Infrastructure
              </span>{' '}
              as the global baseline for enterprise resilience — making sovereign, self-governing
              operational intelligence the default, not the exception."
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-slate-400 leading-relaxed">
                We envision a world where every critical enterprise operation — from an offshore
                platform in the Niger Delta to a smart factory in Jakarta — runs on intelligence
                infrastructure that is sovereign, self-governing, and accountable to a single partner.
              </p>
            </div>
          </article>

          {/* Mission */}
          <article
            className={`group relative glass-panel rounded-2xl p-10 lg:p-12 overflow-hidden transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Compass className="h-6 w-6 text-slate-200" />
              </span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300">
                  Our Mission
                </p>
                <p className="text-xs text-slate-500">How we get there, every day</p>
              </div>
            </div>

            <blockquote className="font-display text-2xl lg:text-3xl text-white leading-snug text-balance">
              "We architect mission-critical technology infrastructure and autonomous operations
              platforms for the world's most demanding enterprises — from the{' '}
              <span className="text-aquiline-500">Niger Delta</span> to the{' '}
              <span className="text-aquiline-500">North Sea</span>."
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-slate-400 leading-relaxed">
                {BRAND.mission}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}