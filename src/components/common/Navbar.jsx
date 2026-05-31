import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

const TOTAL_MODULES = 12;

const NAV_LINKS = [
  { to: '/', label: 'Curso', end: true },
  { to: '/herramienta', label: 'Herramienta', end: false },
  { to: '/glosario', label: 'Glosario', end: false },
  { to: '/progreso', label: 'Progreso', end: false },
];

function navLinkClass({ isActive }) {
  const base =
    'text-sm font-medium transition-colors duration-150 pb-0.5';
  return isActive
    ? `${base} text-blue-400 border-b-2 border-blue-400`
    : `${base} text-slate-300 hover:text-slate-100`;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { completedModules } = useProgress();
  const completed = completedModules.length;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#/"
            className="flex items-center gap-1.5 text-slate-100 font-bold text-lg tracking-tight hover:text-blue-400 transition-colors"
          >
            <span>AT Educativo</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Progress badge + hamburger */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs bg-slate-800 border border-slate-700 text-slate-300 rounded-full px-3 py-1">
              <span className="text-blue-400 font-semibold">{completed}</span>
              <span>/{TOTAL_MODULES} módulos</span>
            </span>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                /* X icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-700/50 bg-slate-900">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-slate-800'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-slate-700/50 text-xs text-slate-400 px-3 py-1">
              Progreso: <span className="text-blue-400 font-semibold">{completed}</span>/{TOTAL_MODULES} módulos
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
