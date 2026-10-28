import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-slate-900/95 backdrop-blur-2xl
                    border-l border-white/5 shadow-premium
                    transition-transform duration-500 ease-premium
                    xl:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400">
            Navigation
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                       text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-6 py-8">
          <ul className="space-y-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${i * 50}ms` }}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-lg px-4 py-3
                             text-base font-medium text-slate-200
                             hover:bg-white/5 hover:text-white transition-all"
                >
                  <span>{link.label}</span>
                  {link.children && (
                    <span className="text-[10px] tracking-widest uppercase text-aquiline-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.children.length} items
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-white/5">
            <Link
              to="/contact"
              onClick={onClose}
              className="btn-primary w-full justify-center"
            >
              Deploy AquilineIntel™
            </Link>
            <p className="mt-6 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Aquiline Ultra Pro Ltd
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}