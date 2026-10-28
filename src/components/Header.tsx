import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { NAV_LINKS, type NavLink } from '@/lib/constants';

export default function Header() {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-[#0a0f1df7] border-b border-white/10"
      role="banner"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-aquiline-500/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-8">
          <Logo />

          <nav aria-label="Primary" className="hidden xl:flex items-center">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden md:inline-flex group">
              <span>Deploy AquilineIntel™</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg
                         border border-white/10 text-slate-200 hover:border-aquiline-500/50
                         hover:text-white hover:bg-white/5 transition-all"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

type NavItemProps = {
  link: NavLink;
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
};

function NavItem({ link, activeDropdown, setActiveDropdown }: NavItemProps) {
  const isOpen = activeDropdown === link.label;
  const hasChildren = !!link.children?.length;

  return (
    <li
      className="relative"
      onMouseEnter={() => hasChildren && setActiveDropdown(link.label)}
      onMouseLeave={() => hasChildren && setActiveDropdown(null)}
    >
      <Link
        to={link.href}
        aria-haspopup={hasChildren ? 'true' : undefined}
        aria-expanded={hasChildren ? isOpen : undefined}
        className="relative inline-flex items-center gap-1.5 px-4 py-2
                   text-[13px] font-medium tracking-wide text-slate-300
                   hover:text-white transition-colors duration-200"
      >
        <span>{link.label}</span>
        {hasChildren && (
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-aquiline-500' : ''
            }`}
          />
        )}
      </Link>

      {hasChildren && (
        <div
          className={`absolute top-full left-0 pt-4
                      transition-all duration-300 ease-premium
                      ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="w-[520px] glass-panel rounded-xl p-2">
            <div className="grid grid-cols-1 gap-0.5">
              {link.children!.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="group/item flex items-start gap-3 rounded-lg px-4 py-3
                             hover:bg-white/5 transition-colors"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aquiline-500 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-white group-hover/item:text-aquiline-400 transition-colors">
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="mt-0.5 block text-xs text-slate-400">
                        {child.description}
                      </span>
                    )}
                  </span>
                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-slate-500 opacity-0 group-hover/item:opacity-100 group-hover/item:text-aquiline-500 transition-all" />
                </Link>
              ))}
            </div>
            <div className="mt-2 px-4 py-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] tracking-wider uppercase text-slate-500">
                Explore the full suite
              </span>
              <Link to="/solutions" className="text-xs font-semibold text-aquiline-500 hover:text-aquiline-400">
                View all →
              </Link>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}