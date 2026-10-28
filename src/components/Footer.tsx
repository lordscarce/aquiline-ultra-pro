import { MapPin, Mail, Phone, ArrowUpRight, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';
import { BRAND, OFFICES, FOOTER_LINKS } from '@/lib/constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/5 bg-slate-950/60" role="contentinfo">
      {/* Top glow accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-aquiline-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-aquiline-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Mission Statement Block */}
      <section aria-labelledby="footer-mission" className="relative border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-24">
          <div className="max-w-4xl">
            <span className="section-eyebrow">Our Mission</span>
            <h2
              id="footer-mission"
              className="mt-6 font-display text-display-md lg:text-display-lg text-white text-balance"
            >
              Engineering the autonomous enterprise — from the{' '}
              <span className="text-aquiline-500">Niger Delta</span> to the{' '}
              <span className="text-aquiline-500">North Sea</span>.
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
              {BRAND.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-xs">
              A tier-1 global technology consultancy and autonomous operations infrastructure provider.
            </p>

            {/* Contact */}
            <ul className="mt-8 space-y-3">
              <li>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-aquiline-500 transition-colors">
                  <Mail className="h-4 w-4 text-aquiline-500/70" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-aquiline-500 transition-colors">
                  <Phone className="h-4 w-4 text-aquiline-500/70" />
                  {BRAND.phone}
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:border-aquiline-500/50 hover:text-aquiline-500 hover:bg-white/5 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:border-aquiline-500/50 hover:text-aquiline-500 hover:bg-white/5 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Solutions" links={FOOTER_LINKS.solutions} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        {/* Global Offices */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-4 w-4 text-aquiline-500" />
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-300">
              Global Footprint
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-x-6 gap-y-5">
            {OFFICES.map((office) => (
              <a
                key={office.city}
                href={`#office-${office.city.toLowerCase().replace(/\s/g, '-')}`}
                className="group flex items-start gap-2"
              >
                <span className="text-base leading-none" aria-hidden="true">{office.flag}</span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white group-hover:text-aquiline-500 transition-colors">
                    {office.city}
                  </span>
                  <span className="text-[11px] text-slate-500">{office.type}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-slate-950/80">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} {BRAND.legalName}. All rights reserved. Registered in Nigeria & the United Kingdom.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              Engineered by
              <span className="font-semibold text-aquiline-500 tracking-wide">
                {BRAND.credit}
              </span>
            </span>
            <a href="#top" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-aquiline-500 transition-colors">
              Back to top
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -----------------------------------------------------------
   FooterColumn — Reusable link column
   ----------------------------------------------------------- */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300 mb-5">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith('http');
          const isHash = link.href.startsWith('#');
          const isRoute = !isExternal && !isHash;

          const content = (
            <>
              <span>{link.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </>
          );

          const className = "group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-aquiline-500 transition-colors";

          if (isExternal) {
            return (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              </li>
            );
          }

          if (isRoute) {
            return (
              <li key={link.href}>
                <Link to={link.href} className={className}>
                  {content}
                </Link>
              </li>
            );
          }

          // Hash link on current page
          return (
            <li key={link.href}>
              <a href={link.href} className={className}>
                {content}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
