import { useState } from 'react';
import { GLOSSARY } from '../../data/glossaryData';

/**
 * Tooltip generico.
 * Props:
 *   text     {string}    — Texto que aparece en el tooltip.
 *   children {ReactNode} — Elemento sobre el que se hace hover.
 */
export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && text && (
        <span
          role="tooltip"
          className={[
            'absolute bottom-full left-1/2 -translate-x-1/2 mb-2',
            'w-max max-w-xs',
            'bg-slate-700 text-slate-100 text-xs rounded px-2 py-1 shadow-lg',
            'z-50 pointer-events-none',
            'animate-fade-in',
          ].join(' ')}
        >
          {text}
          {/* small caret */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-700" />
        </span>
      )}
    </span>
  );
}

/**
 * GlossaryTooltip — busca 'term' en GLOSSARY (case-insensitive) y muestra su definición.
 * Props:
 *   term     {string}    — Término a buscar en el glosario.
 *   children {ReactNode} — Elemento sobre el que se hace hover.
 */
export function GlossaryTooltip({ term, children }) {
  const entry = GLOSSARY.find(
    (g) => g.term.toLowerCase() === (term || '').toLowerCase()
  );
  const text = entry ? entry.definition : null;

  // Si no se encuentra el término, renderizamos children sin tooltip.
  if (!text) return <>{children}</>;

  return <Tooltip text={text}>{children}</Tooltip>;
}
