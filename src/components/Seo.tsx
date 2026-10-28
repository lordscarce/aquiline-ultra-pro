import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Aquiline Ultra Pro Ltd — Global Technology Consultancy & Autonomous Operations',
    description: 'End-to-end delivery ownership. One accountable partner for sovereign enterprise infrastructure.',
  },
  '/about': {
    title: 'About Us & Leadership — Aquiline Ultra Pro Ltd',
    description: 'Founded in 2018 by operations and systems specialists. Sovereign Autonomous Operations Infrastructure, standardized.',
  },
  '/pillars': {
    title: 'Our Four Delivery Pillars — Aquiline Ultra Pro Ltd',
    description: 'Consultancy, Systems Integration, Enterprise Software Deployment, and Autonomous Operations Infrastructure.',
  },
  '/services': {
    title: 'Services & Capabilities — Aquiline Ultra Pro Ltd',
    description: 'Software development, consulting, IoT & edge computing, and AI & data science — one accountable partner.',
  },
  '/solutions': {
    title: 'Solutions & Industry Verticals — Aquiline Ultra Pro Ltd',
    description: 'AquilineIntel™ and six specialized autonomous solutions for energy, government, agribusiness, logistics, and SMEs.',
  },
  '/differentiators': {
    title: 'Why Aquiline — Six Structural Differentiators | Aquiline Ultra Pro Ltd',
    description: 'End-to-end ownership, a proprietary sovereign AI core, 4–6 week deployment, and a measurement guarantee. Compare the delivery models.',
  },
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? ROUTE_META['/'];
    document.title = meta.title;

    const setMeta = (selector: string, attribute: string, key: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://aquilineultrapro.com${pathname === '/' ? '' : pathname}`;
  }, [pathname]);

  return null;
}