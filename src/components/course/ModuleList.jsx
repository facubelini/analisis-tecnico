import { useState } from 'react'

export default function ModuleList({ modules, completedModules, activeModuleId, onSelect }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <button
        onClick={() => setCollapsed(prev => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 transition-colors md:cursor-default md:pointer-events-none"
        aria-expanded={!collapsed}
      >
        <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
          Módulos del curso
        </span>
        <span className="text-slate-400 text-xs md:hidden">
          {collapsed ? '▼ Mostrar' : '▲ Ocultar'}
        </span>
      </button>

      <div className={`${collapsed ? 'hidden' : 'block'} md:block`}>
        <ul className="divide-y divide-slate-700/50">
          {modules.map(module => {
            const isActive = module.id === activeModuleId
            const isDone = completedModules.includes(module.id)

            return (
              <li key={module.id}>
                <button
                  onClick={() => onSelect(module.id)}
                  className={`w-full text-left px-4 py-4 flex items-start gap-3 rounded-none transition-colors
                    hover:bg-slate-700
                    ${isActive
                      ? 'bg-slate-700/60 border-l-2 border-blue-500'
                      : 'border-l-2 border-transparent'
                    }`}
                >
                  <span className="text-2xl leading-none shrink-0 mt-0.5" aria-hidden="true">
                    {module.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`font-medium text-sm leading-snug ${
                          isActive ? 'text-blue-300' : 'text-slate-100'
                        }`}
                      >
                        {module.title}
                      </span>
                      {isDone && (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full shrink-0"
                          title="Módulo completado"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3 h-3"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Completado
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug line-clamp-2">
                      {module.description}
                    </p>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
