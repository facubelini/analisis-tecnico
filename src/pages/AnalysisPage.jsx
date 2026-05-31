import AnalysisTool from '../components/analysis/AnalysisTool'

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Herramienta de Análisis Técnico
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Analizá una acción con indicadores reales. La app carga datos de ejemplo para que puedas explorar de inmediato.
          </p>
        </div>
        <AnalysisTool />
      </div>
    </div>
  )
}
