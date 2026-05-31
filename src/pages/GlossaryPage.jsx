import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { GLOSSARY } from '../data/glossaryData'

const ALL_MODULES = Array.from({ length: 12 }, (_, i) => i + 1)

export default function GlossaryPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterModule, setFilterModule] = useState(null)

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return GLOSSARY
      .filter(entry => {
        const matchSearch =
          !term ||
          entry.term.toLowerCase().includes(term) ||
          entry.definition.toLowerCase().includes(term)
        const matchModule = filterModule === null || entry.module === filterModule
        return matchSearch && matchModule
      })
      .sort((a, b) => a.term.localeCompare(b.term, 'es'))
  }, [searchTerm, filterModule])

  function handleModuleChipClick(mod) {
    setFilterModule(prev => (prev === mod ? null : mod))
  }

  function handleCardModuleClick(mod) {
    navigate(`/modulo/${mod}`)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Glosario de Términos</h1>
          <p className="text-slate-400">Todos los conceptos clave del análisis técnico explicados en español.</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar término o definición..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          />
        </div>

        {/* Module filter chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilterModule(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              filterModule === null
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            Todos
          </button>
          {ALL_MODULES.map(mod => (
            <button
              key={mod}
              onClick={() => handleModuleChipClick(mod)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filterModule === mod
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              Módulo {mod}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-slate-500 text-sm mb-5">
          {filtered.length} {filtered.length === 1 ? 'término encontrado' : 'términos encontrados'}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg">No se encontraron términos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => { setSearchTerm(''); setFilterModule(null) }}
              className="mt-4 text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(entry => (
              <div
                key={entry.term}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-3 hover:border-slate-600 transition-colors"
              >
                <h3 className="text-blue-400 font-semibold text-lg leading-snug">
                  {entry.term}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  {entry.definition}
                </p>
                <div>
                  <button
                    onClick={() => handleCardModuleClick(entry.module)}
                    className="inline-block bg-slate-700 hover:bg-indigo-600 text-slate-300 hover:text-white text-xs font-medium px-3 py-1 rounded-full transition-colors"
                  >
                    Módulo {entry.module}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
