import { useMemo } from 'react';

/**
 * Lightweight animated SVG node constellation.
 * Represents "private enterprise intelligence / node connectivity"
 * without heavy canvas/WebGL. Pure SVG + CSS — zero JS animation loop.
 */
export default function NodeNetwork() {
  const nodes = useMemo(() => generateNodes(42), []);
  const edges = useMemo(() => generateEdges(nodes, 60), [nodes]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Gradient orbs — ambient depth */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-aquiline-500/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-aquiline-700/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-slate-700/20 blur-[100px]" />

      {/* SVG constellation */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Edges */}
        <g stroke="url(#edgeGrad)" strokeWidth="0.8" fill="none">
          {edges.map((edge, i) => (
            <line
              key={i}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              className="animate-edge-draw"
              style={{ animationDelay: `${i * 40}ms` }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node, i) => (
            <g key={i} style={{ animationDelay: `${i * 60}ms` }} className="animate-node-appear">
              {/* Glow halo */}
              <circle cx={node.x} cy={node.y} r={node.r * 4} fill="url(#nodeGlow)" opacity={node.opacity * 0.3} />
              {/* Core */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={node.primary ? '#FF6B00' : '#8693B8'}
                opacity={node.opacity}
              />
              {/* Pulse ring on primary nodes */}
              {node.primary && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill="none"
                  stroke="#FF6B00"
                  strokeWidth="1"
                  className="animate-ping-slow"
                  opacity="0.6"
                />
              )}
            </g>
          ))}
        </g>
      </svg>

      {/* Fade mask toward bottom for content transition */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
}

/* -----------------------------------------------------------
   Deterministic node/edge generation (seeded for consistency)
   ----------------------------------------------------------- */
type Node = { x: number; y: number; r: number; opacity: number; primary: boolean };
type Edge = { x1: number; y1: number; x2: number; y2: number };

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateNodes(count: number): Node[] {
  const rand = seededRandom(42);
  return Array.from({ length: count }, () => ({
    x: rand() * 1200,
    y: rand() * 800,
    r: 1 + rand() * 2.5,
    opacity: 0.3 + rand() * 0.6,
    primary: rand() > 0.82,
  }));
}

function generateEdges(nodes: Node[], maxEdges: number): Edge[] {
  const edges: Edge[] = [];
  const rand = seededRandom(7);
  for (let i = 0; i < nodes.length && edges.length < maxEdges; i++) {
    const connections = 1 + Math.floor(rand() * 2);
    for (let c = 0; c < connections && edges.length < maxEdges; c++) {
      const j = Math.floor(rand() * nodes.length);
      if (j === i) continue;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 280) {
        edges.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
  }
  return edges;
}