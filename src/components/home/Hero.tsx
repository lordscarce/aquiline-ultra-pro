import { ArrowRight, PlayCircle, Shield, Globe2, Zap } from 'lucide-react';
import NodeNetwork from './NodeNetwork';

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      // Changed bg-center to bg-right to anchor image to the right side
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-20 bg-[url('/images/index-hero.jpg')] bg-cover bg-right bg-no-repeat"
    >
      {/* 
        Gradient Overlay: 
        - Starts solid slate-900 on the left (matching your dark theme) to hide the image behind text.
        - Fades to transparent on the right to reveal the skyscraper image.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-0" />

      <NodeNetwork />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-aquiline-500/30 bg-aquiline-500/5 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-aquiline-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aquiline-500" />
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-aquiline-400">
              Empowering Autonomous Enterprise through Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-8 font-display text-display-lg lg:text-display-xl text-white text-balance animate-slide-up"
          >
            End-to-End Delivery Ownership —{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-aquiline-400 via-aquiline-500 to-aquiline-600 bg-clip-text text-transparent">
                One Accountable Partner.
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 h-3 bg-aquiline-500/20 blur-xl -z-0"
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '150ms' }}>
            Aquiline Ultra Pro is a tier-1 global technology consultancy, systems integrator,
            and autonomous operations infrastructure provider — engineering sovereign intelligence
            platforms for enterprises across Africa, Europe, the Americas, APAC, and MENA.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <a href="#solutions" className="btn-primary group">
              <span>Explore Our Solutions</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost group">
              <PlayCircle className="h-4 w-4 text-aquiline-500" />
              <span>Request an Enterprise Audit</span>
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 pt-8 border-t border-white/5 animate-slide-up" style={{ animationDelay: '450ms' }}>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500 mb-5">
              Trusted across mission-critical environments
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <TrustItem icon={<Globe2 className="h-4 w-4" />} label="7 Regions Active" />
              <TrustItem icon={<Shield className="h-4 w-4" />} label="Sovereign by Design" />
              <TrustItem icon={<Zap className="h-4 w-4" />} label="24/7 Autonomous Ops" />
              <TrustItem icon={<ArrowRight className="h-4 w-4" />} label="Single Accountability" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in z-10" style={{ animationDelay: '800ms' }}>
        <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-aquiline-500/60 to-transparent" />
      </div>
    </section>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-aquiline-500">
        {icon}
      </span>
      <span className="text-sm font-medium text-slate-300">{label}</span>
    </div>
  );
}