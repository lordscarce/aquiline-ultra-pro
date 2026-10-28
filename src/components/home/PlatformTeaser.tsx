import { useInView } from '@/hooks/useInView';
import { Brain, LineChart, Play, Lock, Server, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

type Capability = {
  icon: typeof Brain;
  title: string;
  description: string;
  metric: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Brain,
    title: 'Reasoning',
    description: 'Context-aware analysis across operational data, SOPs, and enterprise knowledge.',
    metric: 'Real-time',
  },
  {
    icon: LineChart,
    title: 'Predicting',
    description: 'Decision-grade forecasting for asset health, demand, and risk trajectories.',
    metric: '< 200ms',
  },
  {
    icon: Play,
    title: 'Executing',
    description: 'Autonomous workflow orchestration with human-in-the-loop governance.',
    metric: '24/7',
  },
];

export default function PlatformTeaser() {
  const { ref, inView } = useInView();

  return (
    <section
      id="platform"
      ref={ref}
      aria-labelledby="platform-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-aquiline-500/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aquiline-500/30 bg-aquiline-500/5">
            <Sparkles className="h-3.5 w-3.5 text-aquiline-500" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-aquiline-400">
              The Core Platform
            </span>
          </div>
          <h2 id="platform-heading" className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance">
            <span className="bg-gradient-to-r from-aquiline-400 to-aquiline-600 bg-clip-text text-transparent">
              AquilineIntel™
            </span>{' '}
            — private enterprise intelligence, sovereign by design.
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            A unified intelligence platform that sits inside your perimeter — on-premise or in your
            private cloud — and turns operational data into autonomous, governed action.
          </p>
        </div>

        {/* Platform mockup + capabilities */}
        <div className="mt-16 grid lg:grid-cols-5 gap-8 items-start">
          {/* Platform console mockup */}
          <div
            className={`lg:col-span-3 relative transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative glass-panel rounded-2xl overflow-hidden border-aquiline-500/20">
              {/* Console chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-slate-950/40">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                  <Lock className="h-3 w-3 text-emerald-400" />
                  <span className="text-[10px] font-mono tracking-wider text-slate-400">
                    aquilineintel.private · sovereign
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">v4.2.1</span>
              </div>

              {/* Console body */}
              <div className="p-6 lg:p-8 space-y-5">
                {/* Status row */}
                <div className="grid grid-cols-3 gap-3">
                  <ConsoleStat label="Reasoning" value="98.4%" trend="+2.1" />
                  <ConsoleStat label="Predicting" value="94.7%" trend="+3.8" />
                  <ConsoleStat label="Executing" value="99.9%" trend="+0.2" />
                </div>

                {/* Activity stream */}
                <div className="rounded-xl bg-slate-950/60 border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                      Autonomous Operations Stream
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>
                  <div className="space-y-2">
                    <StreamLine time="14:32:08" event="Predictive maintenance triggered on Asset #A-2291" tone="warn" />
                    <StreamLine time="14:32:04" event="SOP auto-executed — pressure normalization" tone="ok" />
                    <StreamLine time="14:31:57" event="Reasoning engine reconciled 3 data sources" tone="info" />
                    <StreamLine time="14:31:42" event="Zero-trust policy enforced on edge node EU-07" tone="ok" />
                  </div>
                </div>

                {/* Sovereignty bar */}
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-aquiline-500/5 border border-aquiline-500/20">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-aquiline-500" />
                    <span className="text-xs font-semibold text-slate-200">
                      Data residency: <span className="text-aquiline-400">On-premise · EU / NG / ID</span>
                    </span>
                  </div>
                  <Server className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 hidden md:flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-aquiline-500/30 shadow-glow-orange">
              <span className="h-2 w-2 rounded-full bg-aquiline-500 animate-pulse" />
              <span className="text-xs font-semibold text-white">Sovereign Intelligence</span>
            </div>
          </div>

          {/* Capabilities stack */}
          <div className="lg:col-span-2 space-y-4">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`group relative glass-panel rounded-xl p-6 transition-all duration-700 hover:border-aquiline-500/30 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: inView ? `${300 + i * 120}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-aquiline-500/10 border border-aquiline-500/20 text-aquiline-500 group-hover:shadow-glow-orange transition-all">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                        <span className="text-[10px] font-mono tracking-wider text-aquiline-400">
                          {cap.metric}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <a
              href="#solutions/aquiline-intel"
              className="group mt-2 flex items-center justify-between px-6 py-4 rounded-xl border border-aquiline-500/30 bg-aquiline-500/5 hover:bg-aquiline-500/10 transition-all"
            >
              <span className="text-sm font-semibold text-white">
                Explore the full AquilineIntel™ platform
              </span>
              <ArrowRight className="h-4 w-4 text-aquiline-500 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
   Sub-components
   ----------------------------------------------------------- */
function ConsoleStat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-lg bg-slate-950/60 border border-white/5 p-3">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-xl font-display font-bold text-white">{value}</span>
        <span className="text-[10px] font-mono text-emerald-400">▲ {trend}</span>
      </div>
    </div>
  );
}

function StreamLine({ time, event, tone }: { time: string; event: string; tone: 'ok' | 'warn' | 'info' }) {
  const toneMap = {
    ok: 'bg-emerald-500',
    warn: 'bg-amber-500',
    info: 'bg-aquiline-500',
  };
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="font-mono text-slate-600 tabular-nums">{time}</span>
      <span className={`h-1.5 w-1.5 rounded-full ${toneMap[tone]}`} />
      <span className="text-slate-300 truncate">{event}</span>
    </div>
  );
}