export type NavLink = {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
};

export const BRAND = {
  name: 'Aquiline Ultra Pro',
  legalName: 'Aquiline Ultra Pro Ltd',
  tagline: 'Engineering the autonomous enterprise.',
  mission:
    'We architect mission-critical technology infrastructure and autonomous operations platforms for the world\'s most demanding enterprises — from the Niger Delta to the North Sea, from Jakarta to Jersey City.',
  vision:
    'To standardize Autonomous Operations Infrastructure as the global baseline for enterprise resilience — making sovereign, self-governing operational intelligence the default, not the exception.',
  credit: 'Aquiline ICT',
  email: 'contact@aquilineultrapro.com',
  phone: '+234 (0) 800 AQUILINE',
  founded: 2018,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about',
    children: [
      { label: 'Why Aquiline', href: '/differentiators', description: 'Our competitive advantage' }
    ]
  },
  { label: 'Pillars', href: '/pillars' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Industry Verticals', href: '/verticals', description: 'Specialized delivery for critical domains' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
      children: [
    { label: 'AquilineOps™', href: '/solutions/aquiline-ops', description: 'Autonomous Operations System' },
    { label: 'AquilineProcure™', href: '/solutions/aquiline-procure', description: 'Intelligent Procurement & Supply Chain' },
    { label: 'AquilineSafety™', href: '/solutions/aquiline-safety', description: 'Industrial Safety & Field Intelligence' },
    { label: 'AquilineAgro™', href: '/solutions/aquiline-agro', description: 'Agri Value Chain Intelligence' },
    { label: 'AquilineGov™', href: '/solutions/aquiline-gov', description: 'Government Digital Transformation' },
    { label: 'AquilineScale™', href: '/solutions/aquiline-scale', description: 'SME Autonomous Business OS' },
  ],
},
    { label: 'Contact', href: '/contact' },
];

export const OFFICES = [
  { city: 'Port Harcourt', country: 'Nigeria', flag: '🇳🇬', type: 'Headquarters' },
  { city: 'Lagos', country: 'Nigeria', flag: '🇳🇬', type: 'Regional Office' },
  { city: 'Abuja', country: 'Nigeria', flag: '🇳🇬', type: 'Regional Office' },
  { city: 'London', country: 'United Kingdom', flag: '🇬🇧', type: 'EMEA Office' },
  { city: 'New York', country: 'United States', flag: '🇺🇸', type: 'Americas Office' },
  { city: 'Jakarta', country: 'Indonesia', flag: '🇮🇩', type: 'APAC Office' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', type: 'MENA Office' },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Newsroom', href: '/newsroom' },
    { label: 'Why Aquiline', href: '/differentiators' },
    { label: 'Contact Us', href: '/contact' },
  ],
    solutions: [
    { label: 'AquilineOps™', href: '/solutions/aquiline-ops' },
    { label: 'AquilineProcure™', href: '/solutions/aquiline-procure' },
    { label: 'AquilineSafety™', href: '/solutions/aquiline-safety' },
    { label: 'AquilineAgro™', href: '/solutions/aquiline-agro' },
    { label: 'AquilineGov™', href: '/solutions/aquiline-gov' },
    { label: 'AquilineScale™', href: '/solutions/aquiline-scale' },
  ],
  resources: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Whitepapers', href: '/whitepapers' },
    { label: 'Documentation', href: '/docs' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Compliance', href: '/compliance' },
  ],
} as const;

/* -----------------------------------------------------------
   ABOUT PAGE — Content
   ----------------------------------------------------------- */
export const COMPANY_TIMELINE = [
  {
    year: '2018',
    title: 'Founded in Port Harcourt',
    description:
      'Established by a coalition of operations engineers and systems architects from the Oil & Gas, Manufacturing, and Government sectors — united by a single frustration: the gap between technology promise and operational reality.',
  },
  {
    year: '2020',
    title: 'First sovereign deployments',
    description:
      'Delivered the first on-premise autonomous operations platforms for Nigerian energy majors — proving that intelligence infrastructure could live inside the client perimeter, not in a foreign cloud.',
  },
  {
    year: '2022',
    title: 'Expansion across Africa & EMEA',
    description:
      'Opened Lagos, Abuja, and London offices. Launched AquilineIntel™ v1 — the first platform unifying Reasoning, Predicting, and Executing under a single sovereign control plane.',
  },
  {
    year: '2024',
    title: 'Global footprint established',
    description:
      'Extended operations to the United States, Indonesia, and the MENA region. Formalized the Hybrid Delivery Model — pairing physical on-premise deployment with remote autonomous delivery management.',
  },
  {
    year: '2026',
    title: 'Standardizing the category',
    description:
      'Today, Aquiline Ultra Pro is defining the global baseline for Autonomous Operations Infrastructure — with 140+ enterprise engagements across 7 regions and a mission to make sovereignty the default.',
  },
] as const;

export const CORE_VALUES = [
  {
    id: 'ownership',
    icon: 'Target',
    title: 'Delivery Ownership',
    tagline: 'One partner. One SLA. One accountable outcome.',
    description:
      'We do not fragment accountability across vendors. Every engagement is owned end-to-end by a single delivery unit — from strategy through sustained operations. If it ships, we own it.',
    proof: 'Single-point accountability across 140+ engagements.',
  },
  {
    id: 'sovereignty',
    icon: 'ShieldCheck',
    title: 'Sovereignty by Design',
    tagline: 'Your data never leaves your perimeter.',
    description:
      'Intelligence infrastructure must live where the operation lives — on-premise or in your private cloud. We architect for data residency, regulatory compliance, and operational independence by default.',
    proof: 'Deployed across EU, NG, ID, and US data residency zones.',
  },
  {
    id: 'sop',
    icon: 'Workflow',
    title: 'SOP over Chaos',
    tagline: 'Codified operational intelligence, not tribal knowledge.',
    description:
      'Every operational process is captured, codified, and governed as a living SOP — executable by both humans and machines. We replace tribal knowledge with institutional memory.',
    proof: 'SOPs that evolve continuously, not decay.',
  },
  {
    id: 'autonomy',
    icon: 'Cpu',
    title: 'Autonomy over Manual',
    tagline: 'Machines execute. Humans govern.',
    description:
      'Routine operational decisions should not require human intervention. We build platforms that reason, predict, and execute autonomously — with humans retained for governance, exception handling, and strategic direction.',
    proof: '24/7 autonomous operations with human-in-the-loop oversight.',
  },
] as const;

export const LEADERSHIP = [
  {
    name: 'Founder & CEO',
    role: 'Chief Executive Officer',
    background: '20+ years in operations engineering across Oil & Gas and critical infrastructure.',
    initials: 'FO',
  },
  {
    name: 'Chief Technology Officer',
    role: 'Technology & Platform',
    background: 'Former principal architect at tier-1 systems integrator. Specialist in sovereign cloud and edge computing.',
    initials: 'CT',
  },
  {
    name: 'Chief Operating Officer',
    role: 'Global Delivery',
    background: 'Led multi-region delivery for government and energy sector clients across Africa and EMEA.',
    initials: 'CO',
  },
  {
    name: 'Chief Intelligence Officer',
    role: 'AquilineIntel™ Platform',
    background: 'Pioneer in applied industrial AI and autonomous operations research.',
    initials: 'CI',
  },
] as const; // <-- THIS WAS MISSING!

/* -----------------------------------------------------------
   PILLARS PAGE — Deep-Dive Content
   ----------------------------------------------------------- */
export const PILLAR_SEQUENCE = [
  {
    id: 'consultancy',
    number: '01',
    title: 'Technology Consultancy',
    tagline: 'Executable systems, not static PDFs.',
    description:
      'We audit your SOPs, ERP landscapes, and operational workflows — then deliver executable blueprints that your teams can deploy immediately. No 200-page reports that gather dust. No recommendations without implementation paths.',
    capabilities: [
      'SOP auditing & codification',
      'ERP landscape assessment',
      'Operational workflow mapping',
      'Technology due diligence',
      'Digital strategy roadmaps',
      'Transformation governance',
    ],
    proof: 'Every deliverable is an executable system — not a static document.',
    outcome: 'A codified operational blueprint your teams can deploy in weeks, not quarters.',
  },
  {
    id: 'integration',
    number: '02',
    title: 'Systems Integration',
    tagline: 'One accountable layer, not fourteen vendors.',
    description:
      'We unify your fragmented point solutions, overlapping vendors, and disconnected systems into a single accountable integration layer. No more blame-shifting. No more "that\'s not our scope." One partner owns the entire operational stack.',
    capabilities: [
      'Enterprise architecture design',
      'API & middleware orchestration',
      'Legacy system modernization',
      'Multi-cloud integration',
      'Data unification & governance',
      'Vendor consolidation',
    ],
    proof: 'Single SLA across the entire integrated stack.',
    outcome: 'A unified operational layer with one accountable partner — not fourteen vendors pointing fingers.',
  },
  {
    id: 'deployment',
    number: '03',
    title: 'Enterprise Software Deployment',
    tagline: 'Hardware, software, and operations — delivered as one.',
    description:
      'We deliver hardware, software, and operational infrastructure as a single integrated package — deployed in 4–6 weeks, not 4–6 quarters. No fragmented procurement. No "we\'ll integrate it later." Everything ships together, operational from day one.',
    capabilities: [
      'On-premise hardware deployment',
      'Enterprise software configuration',
      'Operational infrastructure setup',
      'Migration & cutover execution',
      'Change management & training',
      'Go-live support & stabilization',
    ],
    proof: '4–6 week deployment timeline — hardware to operational.',
    outcome: 'Fully operational infrastructure in 4–6 weeks — not a multi-year deployment saga.',
  },
  {
    id: 'autonomous',
    number: '04',
    title: 'Autonomous Operations Infrastructure',
    tagline: 'Self-executing workflows, governed by humans.',
    description:
      'We codify your operations into self-executing workflows powered by AquilineIntel™, AquilineTask™, and AquilineProjects™ — platforms that reason, predict, and execute autonomously, with humans retained for governance and strategic direction.',
    capabilities: [
      'Autonomous workflow orchestration',
      'Decision-grade AI deployment',
      'Zero-touch operations',
      'Predictive maintenance',
      'SOP automation & evolution',
      'Human-in-the-loop governance',
    ],
    proof: '24/7 autonomous operations with human governance.',
    outcome: 'Operations that run autonomously — with humans governing, not executing.',
  },
] as const;

export const AQUILINE_PRODUCTS = [
  {
    id: 'aquiline-intel',
    name: 'AquilineIntel™',
    tagline: 'Private enterprise intelligence.',
    description:
      'The sovereign intelligence platform that sits inside your perimeter — on-premise or in your private cloud — and turns operational data into autonomous, governed action. Reasoning, predicting, and executing in real-time.',
    capabilities: [
      'Context-aware reasoning engine',
      'Decision-grade predictive analytics',
      'Autonomous workflow orchestration',
      'Zero-trust policy enforcement',
      'Encrypted telemetry & sovereign data residency',
    ],
    useCase: 'Energy major deployed AquilineIntel™ across 12 offshore platforms — reducing unplanned downtime by 34% in 6 months.',
  },
  {
    id: 'aquiline-task',
    name: 'AquilineTask™',
    tagline: 'Autonomous task execution.',
    description:
      'The operational execution layer that codifies SOPs into self-executing workflows — handling routine decisions autonomously while escalating exceptions to human operators. No more tribal knowledge. No more manual handoffs.',
    capabilities: [
      'SOP codification & automation',
      'Task orchestration & routing',
      'Exception handling & escalation',
      'Continuous SOP evolution',
      'Operational memory & learning',
    ],
    useCase: 'Manufacturing client automated 78% of routine operational tasks — freeing 2,400 hours/month for strategic work.',
  },
  {
    id: 'aquiline-projects',
    name: 'AquilineProjects™',
    tagline: 'Autonomous project delivery.',
    description:
      'The project intelligence platform that autonomously manages complex enterprise projects — tracking dependencies, predicting delays, and orchestrating resources without manual PMO overhead. One platform, not 14 spreadsheets.',
    capabilities: [
      'Autonomous project tracking',
      'Dependency & risk prediction',
      'Resource orchestration',
      'Stakeholder communication automation',
      'Delivery governance & reporting',
    ],
    useCase: 'Government agency reduced PMO overhead by 62% while improving on-time delivery from 47% to 89%.',
  },
] as const;

export const DEPLOYMENT_PHASES = [
  {
    week: 'Week 1',
    title: 'Discovery & Architecture',
    activities: [
      'Operational workflow audit',
      'Infrastructure requirements mapping',
      'Architecture design & validation',
      'Stakeholder alignment',
    ],
  },
  {
    week: 'Week 2–3',
    title: 'Hardware & Software Procurement',
    activities: [
      'Hardware specification & ordering',
      'Software licensing & configuration',
      'Vendor coordination',
      'Logistics & staging',
    ],
  },
  {
    week: 'Week 4–5',
    title: 'Deployment & Integration',
    activities: [
      'On-premise hardware installation',
      'Software deployment & configuration',
      'System integration & testing',
      'Data migration & validation',
    ],
  },
  {
    week: 'Week 6',
    title: 'Go-Live & Stabilization',
    activities: [
      'Operational cutover',
      'User training & change management',
      'Performance monitoring',
      'Stabilization support',
    ],
  },
] as const;

/* -----------------------------------------------------------
   SERVICES PAGE — Capability Catalog
   ----------------------------------------------------------- */
export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ServiceCategory = {
  id: string;
  letter: 'A' | 'B' | 'C' | 'D';
  title: string;
  tagline: string;
  description: string;
  icon: string;
  services: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'software-integration',
    letter: 'A',
    title: 'Software Development & Integration',
    tagline: 'Bespoke systems engineered for your operational reality.',
    description:
      'Custom-built software and seamless system integration — from bespoke applications aligned to your workflows, to the middleware that unifies your entire enterprise stack.',
    icon: 'Code2',
    services: [
      {
        id: 'custom-app-dev',
        title: 'Custom Application Development',
        description:
          'Bespoke software solutions architected around your specific operational workflows — not off-the-shelf products forced into square holes.',
        icon: 'Braces',
      },
      {
        id: 'web-mobile',
        title: 'Web & Mobile Solutions',
        description:
          'High-performance, responsive interfaces for desktop and mobile ecosystems — engineered for speed, accessibility, and operational usability.',
        icon: 'Layout',
      },
      {
        id: 'api-middleware',
        title: 'API Integration & Middleware',
        description:
          'Seamless connectivity between disparate systems, ensuring data flows securely and efficiently across the enterprise stack — eliminating silos at the integration layer.',
        icon: 'Plug',
      },
    ],
  },
  {
    id: 'consulting-strategy',
    letter: 'B',
    title: 'Consulting & Strategy',
    tagline: 'Executable roadmaps, not shelf-ware reports.',
    description:
      'Strategic advisory that translates enterprise ambition into executable, measurable programs — from digital transformation roadmaps to governance frameworks and team upskilling.',
    icon: 'Compass',
    services: [
      {
        id: 'digital-transformation',
        title: 'Digital Transformation Strategy',
        description:
          'Comprehensive roadmap development for modernizing legacy operations — grounded in operational reality, tied to measurable enterprise outcomes.',
        icon: 'TrendingUp',
      },
      {
        id: 'it-audits',
        title: 'IT Audits & Governance',
        description:
          'Rigorous assessments of security posture, regulatory compliance, and technical debt — with actionable remediation plans, not observation decks.',
        icon: 'ClipboardCheck',
      },
      {
        id: 'corporate-training',
        title: 'Corporate Training & Upskilling',
        description:
          'Empowering internal teams with the skills to manage, maintain, and evolve new digital systems — building institutional capability, not dependency.',
        icon: 'GraduationCap',
      },
    ],
  },
  {
    id: 'iot-edge',
    letter: 'C',
    title: 'IoT & Edge Computing',
    tagline: 'Intelligence at the source. Sovereignty by design.',
    description:
      'Low-latency edge infrastructure and industrial IoT platforms that bring intelligence to the point of operation — from smart factories to remote asset monitoring.',
    icon: 'Cpu',
    services: [
      {
        id: 'edge-computing',
        title: 'Edge Computing Solutions',
        description:
          'Low-latency data processing at the source for critical industrial applications — reducing round-trip dependency and preserving operational sovereignty.',
        icon: 'Server',
      },
      {
        id: 'device-management',
        title: 'Device Management',
        description:
          'Secure provisioning, monitoring, and lifecycle management for thousands of connected devices — with zero-touch onboarding and remote firmware orchestration.',
        icon: 'Radio',
      },
      {
        id: 'industrial-iot',
        title: 'Industrial IoT (IIoT)',
        description:
          'Smart manufacturing and asset tracking solutions for heavy industry and logistics — turning physical operations into decision-grade telemetry.',
        icon: 'Factory',
      },
    ],
  },
  {
    id: 'ai-data-science',
    letter: 'D',
    title: 'AI & Data Science',
    tagline: 'Decision-grade intelligence, production-ready.',
    description:
      'End-to-end machine learning engineering, generative AI integration, and computer vision systems — deployed as governed, observable production assets, not research prototypes.',
    icon: 'Brain',
    services: [
      {
        id: 'ml-mlops',
        title: 'ML Engineering & MLOps',
        description:
          'End-to-end model development, deployment, and monitoring for continuous improvement — with full observability, drift detection, and governed retraining pipelines.',
        icon: 'Sparkles',
      },
      {
        id: 'genai-llms',
        title: 'GenAI & LLMs',
        description:
          'Custom large language model integration for automation, content generation, and knowledge retrieval — deployed on-premise or in your private cloud for full sovereignty.',
        icon: 'MessageSquare',
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision',
        description:
          'Image and video analysis for quality control, security, and predictive maintenance — turning visual data into autonomous operational decisions.',
        icon: 'Scan',
      },
    ],
  },
] as const;
/* -----------------------------------------------------------
   SOLUTIONS PAGE — Core Platform + Specialized Solutions
   ----------------------------------------------------------- */
export type SpecializedSolution = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  verticals: string[];
  metric: string;
};

export const SPECIALIZED_SOLUTIONS: SpecializedSolution[] = [
  {
    id: 'aquiline-ops',
    name: 'AquilineOps™',
    tagline: 'Autonomous Operations System.',
    description:
      'The sovereign operations platform that codifies SOPs into self-executing workflows — handling routine decisions autonomously while escalating exceptions to human operators. From predictive maintenance to zero-touch orchestration.',
    icon: 'Workflow',
    capabilities: [
      'Autonomous workflow orchestration',
      'Predictive maintenance & asset health',
      'Zero-touch operations',
      'SOP codification & evolution',
      'Real-time operational telemetry',
    ],
    verticals: ['Oil & Gas', 'Manufacturing', 'Logistics'],
    metric: '34% reduction in unplanned downtime',
  },
  {
    id: 'aquiline-procure',
    name: 'AquilineProcure™',
    tagline: 'Intelligent Procurement & Supply Chain.',
    description:
      'The autonomous procurement platform that optimizes sourcing, vendor management, and supply chain orchestration — from demand forecasting to contract execution, with full auditability and compliance governance.',
    icon: 'ShoppingCart',
    capabilities: [
      'Autonomous demand forecasting',
      'Vendor risk assessment & scoring',
      'Contract lifecycle management',
      'Supply chain visibility & orchestration',
      'Compliance & audit automation',
    ],
    verticals: ['Manufacturing', 'Government', 'Logistics'],
    metric: '28% reduction in procurement cycle time',
  },
  {
    id: 'aquiline-safety',
    name: 'AquilineSafety™',
    tagline: 'Industrial Safety & Field Intelligence.',
    description:
      'The computer vision and field intelligence platform that monitors safety compliance, detects hazards in real-time, and automates incident response — turning visual data into autonomous safety decisions.',
    icon: 'Shield',
    capabilities: [
      'Real-time hazard detection (computer vision)',
      'PPE compliance monitoring',
      'Incident prediction & prevention',
      'Automated safety reporting',
      'Field worker safety orchestration',
    ],
    verticals: ['Oil & Gas', 'Manufacturing', 'Construction'],
    metric: '67% reduction in safety incidents',
  },
  {
    id: 'aquiline-agro',
    name: 'AquilineAgro™',
    tagline: 'Agri Value Chain Intelligence.',
    description:
      'The agricultural intelligence platform that optimizes the entire agri value chain — from farm-level yield prediction to supply chain orchestration, market linkage, and traceability. Sovereign food system intelligence.',
    icon: 'Sprout',
    capabilities: [
      'Crop yield prediction & optimization',
      'Supply chain traceability',
      'Market linkage & price intelligence',
      'Weather & climate risk modeling',
      'Farmer engagement & extension services',
    ],
    verticals: ['Agrobusiness', 'Government', 'Logistics'],
    metric: '41% improvement in yield predictability',
  },
  {
    id: 'aquiline-gov',
    name: 'AquilineGov™',
    tagline: 'Government Digital Transformation & E-Procurement.',
    description:
      'The sovereign government platform that digitizes public sector operations — from e-procurement and citizen services to inter-agency coordination and compliance reporting. Built for data residency and regulatory sovereignty.',
    icon: 'Landmark',
    capabilities: [
      'E-procurement & tender management',
      'Citizen service digitization',
      'Inter-agency data orchestration',
      'Compliance & audit automation',
      'Public financial management',
    ],
    verticals: ['Government', 'Public Sector'],
    metric: '89% reduction in procurement processing time',
  },
  {
    id: 'aquiline-scale',
    name: 'AquilineScale™',
    tagline: 'SME Autonomous Business OS.',
    description:
      'The autonomous business operating system for SMEs — integrating finance, operations, sales, and compliance into a single self-managing platform. Enterprise-grade intelligence, accessible to growing businesses.',
    icon: 'Rocket',
    capabilities: [
      'Autonomous financial management',
      'Operations orchestration',
      'Sales & customer intelligence',
      'Compliance & regulatory automation',
      'Business performance analytics',
    ],
    verticals: ['Enterprise SMEs'],
    metric: '52% reduction in operational overhead',
  },
] as const;

export type IndustryVertical = {
  id: string;
  name: string;
  description: string;
  icon: string;
  solutions: string[];
  outcomes: string[];
};

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas / Industrial Manufacturing',
    description:
      'Autonomous operations for critical infrastructure — from offshore platforms to refineries and heavy manufacturing. Predictive maintenance, safety intelligence, and zero-touch operations for the most demanding environments.',
    icon: 'Factory',
    solutions: ['AquilineOps™', 'AquilineSafety™', 'AquilineProcure™'],
    outcomes: [
      '34% reduction in unplanned downtime',
      '67% reduction in safety incidents',
      '24/7 autonomous operations with human governance',
    ],
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    description:
      'Sovereign digital transformation for public institutions — e-procurement, citizen services, inter-agency coordination, and compliance automation. Built for data residency and regulatory sovereignty.',
    icon: 'Landmark',
    solutions: ['AquilineGov™', 'AquilineProcure™', 'AquilineAgro™'],
    outcomes: [
      '89% reduction in procurement processing time',
      'Full auditability and compliance automation',
      'Sovereign data residency across all operations',
    ],
  },
  {
    id: 'agrobusiness',
    name: 'Agrobusiness Value Chain',
    description:
      'End-to-end agricultural intelligence — from farm-level yield prediction to supply chain orchestration, market linkage, and traceability. Sovereign food system intelligence for national food security.',
    icon: 'Sprout',
    solutions: ['AquilineAgro™', 'AquilineProcure™', 'AquilineOps™'],
    outcomes: [
      '41% improvement in yield predictability',
      'Full value chain traceability',
      'Market linkage and price intelligence',
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    description:
      'Autonomous supply chain orchestration — from demand forecasting to last-mile delivery, with real-time visibility, predictive analytics, and autonomous decision-making across the entire logistics network.',
    icon: 'Truck',
    solutions: ['AquilineProcure™', 'AquilineOps™', 'AquilineAgro™'],
    outcomes: [
      '28% reduction in procurement cycle time',
      'Real-time supply chain visibility',
      'Autonomous demand forecasting',
    ],
  },
  {
    id: 'sme',
    name: 'Enterprise SMEs',
    description:
      'Enterprise-grade autonomous operations for growing businesses — integrating finance, operations, sales, and compliance into a single self-managing platform. Scale without the enterprise overhead.',
    icon: 'Rocket',
    solutions: ['AquilineScale™'],
    outcomes: [
      '52% reduction in operational overhead',
      'Autonomous financial management',
      'Integrated business intelligence',
    ],
  },
] as const;

/* -----------------------------------------------------------
   DIFFERENTIATORS PAGE — Competitive Evidence
   ----------------------------------------------------------- */
export type Differentiator = {
  id: string;
  number: string;
  icon: string;
  title: string;
  tagline: string;
  traditional: string;
  aquiline: string;
  proof: string;
  metric: string;
  metricLabel: string;
  link: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'delivery-ownership',
    number: '01',
    icon: 'Target',
    title: 'End-to-End Delivery Ownership',
    tagline: 'One partner. One SLA. One accountable outcome.',
    traditional: 'Strategy from one firm, integration from another, operations from a third. Accountability dissolves at every handoff.',
    aquiline: 'The same delivery unit that audits your SOPs deploys your infrastructure and remains accountable for its performance after go-live.',
    proof: 'No advisory-to-engineering handoff. No post-go-live support cliff. The team that builds it owns the outcome.',
    metric: '1',
    metricLabel: 'Accountable partner across the full lifecycle',
    link: '/pillars',
  },
  {
    id: 'proprietary-core',
    number: '02',
    icon: 'Brain',
    title: 'Proprietary Core — AquilineIntel™',
    tagline: 'Built, not borrowed.',
    traditional: 'A branded interface wrapped around third-party models. No operational memory. No context. No ownership of the intelligence layer.',
    aquiline: 'A sovereign reasoning, predicting, and executing core with persistent operational memory — deployed inside your perimeter, governed by your policies.',
    proof: 'AquilineIntel™ is our platform, not a reseller license. Our six specialized solutions share one core, one data model, one governance plane.',
    metric: '100%',
    metricLabel: 'Proprietary intelligence layer',
    link: '/solutions#intel-deep-dive',
  },
  {
    id: 'speed',
    number: '03',
    icon: 'Zap',
    title: 'Speed to Deployment',
    tagline: 'Weeks, not quarters.',
    traditional: 'Six to eighteen months of procurement, integration planning, and phased rollouts before the first measurable outcome.',
    aquiline: 'Hardware, software, and operations delivered as one package — from discovery to operational go-live in 4–6 weeks.',
    proof: 'Pre-architected deployment patterns, pre-validated hardware profiles, and a single delivery team eliminate the coordination debt that slows traditional integrators.',
    metric: '4–6',
    metricLabel: 'Weeks from discovery to operational go-live',
    link: '/pillars',
  },
  {
    id: 'measurement',
    number: '04',
    icon: 'Gauge',
    title: 'Measurement Guarantee',
    tagline: 'Nothing left unmeasured.',
    traditional: 'Activity reports: tickets closed, meetings held, dashboards deployed. Effort is documented; outcomes are not.',
    aquiline: 'Every engagement begins with an agreed KPI charter and ends with verified measurement. If it cannot be measured, it is not shipped.',
    proof: 'Baseline audit → KPI charter → instrumentation → live attestation. Your board sees operational outcomes, not delivery activity.',
    metric: '0',
    metricLabel: 'Unmeasured critical operational workflows',
    link: '#measurement',
  },
  {
    id: 'single-package',
    number: '05',
    icon: 'PackageCheck',
    title: 'Single Infrastructure Package',
    tagline: 'One package. One invoice. One SLA.',
    traditional: 'Separate contracts for hardware, software licenses, integration services, deployment labor, and ongoing support. Each with its own commercial terms.',
    aquiline: 'Compute, storage, software, integration, deployment, and operations packaged as one infrastructure commitment with one service level agreement.',
    proof: 'No integration gap between the vendor who sold the hardware and the vendor who configured the software. It is the same vendor — us.',
    metric: '1',
    metricLabel: 'Infrastructure commitment, end to end',
    link: '/services',
  },
  {
    id: 'sovereignty',
    number: '06',
    icon: 'ShieldCheck',
    title: 'Data Sovereignty First',
    tagline: 'Sovereignty is the default, not the upgrade.',
    traditional: 'Data routed through third-party clouds. Residency treated as a compliance constraint to be negotiated after architecture is locked.',
    aquiline: 'On-premise or private cloud by design. Your data, your operational memory, and your intelligence layer never leave your jurisdiction.',
    proof: 'Air-gapped deployment options, zero-trust policy enforcement, encrypted telemetry, and sovereign data residency across NG, EU, US, and ID zones.',
    metric: '0',
    metricLabel: 'Records leaving your sovereign perimeter',
    link: '/solutions#intel-deep-dive',
  },
];

/* -----------------------------------------------------------
   COMPARISON MATRIX — Side-by-side accountability contract
   ----------------------------------------------------------- */
export type ComparisonRow = {
  id: string;
  capability: string;
  traditional: string;
  aquiline: string;
  impact: string;
  detail: string;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: 'delivery-ownership',
    capability: 'End-to-End Delivery Ownership',
    traditional: 'Accountability distributed across advisory, integration, and operations vendors.',
    aquiline: 'One delivery unit owns strategy, deployment, and sustained operations under a single SLA.',
    impact: 'Single-point accountability',
    detail: 'The unit that audits your operational workflows is the unit that engineers the solution and remains accountable post-go-live. There is no advisory-to-engineering handoff where ownership evaporates, and no support cliff after the deployment invoice is paid.',
  },
  {
    id: 'proprietary-core',
    capability: 'Proprietary Core Platform',
    traditional: 'Third-party AI models wrapped in a client-facing interface; intelligence layer owned by someone else.',
    aquiline: 'AquilineIntel™ — proprietary sovereign core with reasoning, predicting, executing, and persistent operational memory.',
    impact: 'Platform ownership, not reselling',
    detail: 'A wrapper can be replaced by a better wrapper. A sovereign core accumulates institutional memory with every operational decision. AquilineIntel™ learns your SOPs, your asset behavior, and your risk profile — creating compounding operational value that a stateless API integration cannot replicate.',
  },
  {
    id: 'speed',
    capability: 'Speed to Deployment',
    traditional: '6–18 month cycles across procurement, integration planning, and staged rollouts.',
    aquiline: '4–6 weeks from discovery to fully operational infrastructure — hardware through go-live.',
    impact: 'Time-to-value measured in weeks',
    detail: 'Speed is not achieved by compressing diligence. It is achieved by removing coordination: pre-architected deployment patterns, pre-validated hardware profiles, pre-configured software stacks, and one team with authority to make decisions instead of escalating them between vendors.',
  },
  {
    id: 'measurement',
    capability: 'Measurement Guarantee',
    traditional: 'Activity-based reporting — tasks completed, systems installed, dashboards delivered.',
    aquiline: 'Outcome-based measurement — an agreed KPI charter, live instrumentation, and verified attestation.',
    impact: 'Nothing left unmeasured',
    detail: 'Before deployment, we agree the baseline and the target with your operations and finance teams. During deployment, we instrument the measurement. After go-live, we attest against the charter. Activity is an input; measurable operational improvement is the deliverable.',
  },
  {
    id: 'single-package',
    capability: 'Single Infrastructure Package',
    traditional: 'Fragmented contracts for hardware, licenses, integration, deployment, and support.',
    aquiline: 'One integrated package — hardware, software, integration, deployment, and operations under one SLA.',
    impact: 'One commitment, one throat to choke',
    detail: 'Fragmented procurement creates integration gaps by design: the hardware vendor blames the software, the software vendor blames the network, the integrator blames both. A single infrastructure package makes those failure modes commercially impossible.',
  },
  {
    id: 'sovereignty',
    capability: 'Data Sovereignty First',
    traditional: 'Data residency negotiated after architecture; third-party cloud dependency by default.',
    aquiline: 'On-premise and private cloud by default; zero-trust governance and residency designed into the architecture.',
    impact: 'Sovereignty by design',
    detail: 'Sovereignty is not a checkbox added during procurement. It is an architectural constraint that shapes everything: where inference runs, where operational memory persists, how telemetry is encrypted, and who holds the keys. We design to that constraint first and optimize within it.',
  },
];

/* -----------------------------------------------------------
   MEASUREMENT GUARANTEE — KPI Charter Process
   ----------------------------------------------------------- */
export const KPI_CHARTER_STEPS = [
  {
    step: '01',
    title: 'Baseline Audit',
    description: 'We measure your current operational state — downtime, cycle times, incident rates, and unmeasured workflows — before proposing a single solution.',
    deliverable: 'Signed operational baseline report',
  },
  {
    step: '02',
    title: 'KPI Charter Agreement',
    description: 'Together with your operations and finance teams, we agree the metrics, targets, measurement methodology, and accountable owners.',
    deliverable: 'Contractual KPI charter',
  },
  {
    step: '03',
    title: 'Instrumentation & Deployment',
    description: 'Every committed metric is instrumented at deployment. Measurement is not retrofitted after go-live — it is part of the infrastructure package.',
    deliverable: 'Live KPI instrumentation & dashboards',
  },
  {
    step: '04',
    title: 'Autonomous Attestation',
    description: 'AquilineIntel™ continuously verifies performance against the charter and surfaces deviations before they become operational incidents.',
    deliverable: 'Continuous attestation stream',
  },
  {
    step: '05',
    title: 'Outcome Review & Evolution',
    description: 'Quarterly governance reviews tie delivered outcomes to commercial terms, and evolve the SOPs that drive the next performance plateau.',
    deliverable: 'Board-ready outcome attestation',
  },
] as const;

export const MEASUREMENT_METRICS = [
  {
    metric: 'Unplanned downtime',
    verification: 'Asset telemetry · AquilineOps™',
    baseline: '4.2% of operating hours',
    target: '≤ 2.8%',
    delta: '−34%',
  },
  {
    metric: 'Procurement cycle time',
    verification: 'Event logs · AquilineProcure™',
    baseline: '18 calendar days',
    target: '≤ 13 days',
    delta: '−28%',
  },
  {
    metric: 'Reportable safety incidents',
    verification: 'Incident register · AquilineSafety™',
    baseline: 'Index 100 (baseline)',
    target: '≤ 33',
    delta: '−67%',
  },
  {
    metric: 'Deployment to go-live',
    verification: 'Milestone attestation',
    baseline: '6–18 months (market norm)',
    target: '4–6 weeks',
    delta: 'Weeks',
  },
  {
    metric: 'Unmeasured critical workflows',
    verification: 'KPI charter coverage audit',
    baseline: '40–60% of SOPs',
    target: '0%',
    delta: '100% coverage',
  },
] as const;

/* -----------------------------------------------------------
   CONTACT PAGE — Locations & Form Options
   ----------------------------------------------------------- */
export const CONTACT_INFO = {
  email: 'contact@aquilineultrapro.com',
  phone: '+234 (0) 812 074 2515',
  phoneHref: 'tel:+2348120742515',
  emailHref: 'mailto:contact@aquilineultrapro.com',
} as const;

export const OFFICE_LOCATIONS = [
  {
    id: 'ph',
    city: 'Port Harcourt',
    label: 'Head Office',
    address: 'Chinda Road / Ada George, Port Harcourt, Rivers State, Nigeria',
    region: 'Nigeria',
    flag: '🇳🇬',
  },
  {
    id: 'lagos',
    city: 'Lagos',
    label: 'Regional Office',
    address: '185B Moshood Olugbani Street, off Ligali Ayorinde Rd, Victoria Island, Lagos, Nigeria',
    region: 'Nigeria',
    flag: '🇳🇬',
  },
  {
    id: 'abuja',
    city: 'Abuja',
    label: 'Regional Office',
    address: 'House 11, Rich Royal Estate, T Pumpy Phase 5, FHA, Lugbe, Abuja, Nigeria',
    region: 'Nigeria',
    flag: '🇳🇬',
  },
] as const;

export const SERVICE_OPTIONS = [
  'Technology Consultancy',
  'Systems Integration',
  'Enterprise Software Deployment',
  'Autonomous Operations Infrastructure',
  'AquilineIntel™ Platform',
  'Other / General Inquiry',
] as const;

export const REGION_OPTIONS = [
  'Nigeria',
  'United Kingdom',
  'United States',
  'Indonesia / APAC',
  'MENA',
  'Other',
] as const;