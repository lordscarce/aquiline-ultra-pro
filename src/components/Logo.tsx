import { Link } from 'react-router-dom';

type LogoProps = {
  variant?: 'full' | 'mark';
  className?: string;
};

/**
 * Aquiline Ultra Pro — Eagle Logo Component
 * Desktop: 46×46px tile, 32×32px eagle
 * Mobile: 40×40px tile, 28×28px eagle
 */
export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Aquiline Ultra Pro Ltd — Home"
      className={`group inline-flex items-center gap-3 select-none ${className}`}
    >
      {/* Eagle Mark */}
      <span
        className="relative inline-flex items-center justify-center rounded-xl border border-white/20
                   bg-gradient-to-br from-slate-900 to-black
                   shadow-glow-orange transition-transform duration-500 ease-premium
                   group-hover:scale-105 group-hover:shadow-glow-orange-lg
                   w-[46px] h-[46px] sm:w-[40px] sm:h-[40px]"
        aria-hidden="true"
      >
        {/* Eagle Image */}
        <img
          src="/assets/eagle-logo.webp"
          alt="Aquiline Eagle"
          className="w-[32px] h-[32px] sm:w-[28px] sm:h-[28px] object-contain"
          width="32"
          height="32"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        
        {/* Subtle ring overlay */}
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
      </span>

      {/* Wordmark */}
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15.5px] font-bold tracking-wider text-white uppercase">
            Aquiline
          </span>
          <span className="mt-0.5 text-[10px] font-semibold tracking-[0.15em] text-slate-300 uppercase">
            Ultra Pro Ltd
          </span>
        </span>
      )}
    </Link>
  );
}