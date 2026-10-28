const ANCHORS = [
  { href: '#comparison', label: 'The Comparison' },
  { href: '#differentiators', label: 'Six Differentiators' },
  { href: '#measurement', label: 'Measurement Guarantee' },
  { href: '#engage', label: 'Engage' },
];

export default function DifferentiatorsNav() {
  return (
    <nav
      aria-label="Page sections"
      className="sticky top-20 z-30 border-y border-white/5 bg-slate-900/85 backdrop-blur-2xl"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ul className="flex items-center gap-1 overflow-x-auto py-3">
          <li className="hidden sm:block pr-4 mr-2 border-r border-white/10">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500 whitespace-nowrap">
              On this page
            </span>
          </li>
          {ANCHORS.map((anchor, i) => (
            <li key={anchor.href}>
              <a
                href={anchor.href}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium
                            transition-all duration-300 whitespace-nowrap
                            ${i === 0 ? 'text-aquiline-400 bg-aquiline-500/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <span className="font-mono text-[10px] text-slate-600 group-hover:text-aquiline-500 transition-colors">
                  0{i + 1}
                </span>
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}