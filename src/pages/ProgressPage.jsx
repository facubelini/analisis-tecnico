import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { MODULES } from '../data/courseData'

function StatusBadge({ completed }) {
  return completed ? (
    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-green-900/50 text-green-400 border border-green-700/50 px-2.5 py-0.5 rounded-full">
      Completado
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-700/50 text-slate-400 border border-slate-600/50 px-2.5 py-0.5 rounded-full">
      Pendiente
    </span>
  )
}

export default function ProgressPage() {
  const navigate = useNavigate()
  const { completedModules, quizScores, resetProgress } = useProgress()

  const totalModules = MODULES.length
  const completedCount = completedModules.length
  const pendingCount = totalModules - completedCount
  const progressPercent = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0

  const scoresArray = Object.values(quizScores)
  const averageQuiz =
    scoresArray.length > 0
      ? Math.round(
          scoresArray.reduce((sum, s) => sum + (s.total > 0 ? (s.score / s.total) * 100 : 0), 0) /
            scoresArray.length
        )
      : null

  function handleReset() {
    if (window.confirm('¿Seguro que querés reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
      resetProgress()
    }
  }

  const noProgress = completedCount === 0 && Object.keys(quizScores).length === 0

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Mi Progreso</h1>
          <p className="text-slate-400">Seguí tu avance en el curso de análisis técnico.</p>
        </div>

        {/* Global progress bar */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
          <div className="flex items-end justify-between mb-3">
            <span className="text-slate-300 font-medium text-sm">Progreso general del curso</span>
            <span className="text-3xl font-bold text-blue-400">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-2">
            {completedCount} de {totalModules} módulos completados
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
            <p className="text-4xl font-bold text-green-400 mb-1">{completedCount}</p>
            <p className="text-slate-400 text-sm">Módulos completados</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
            <p className="text-4xl font-bold text-slate-300 mb-1">{pendingCount}</p>
            <p className="text-slate-400 text-sm">Módulos pendientes</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
            <p className="text-4xl font-bold text-indigo-400 mb-1">
              {averageQuiz !== null ? `${averageQuiz}%` : '—'}
            </p>
            <p className="text-slate-400 text-sm">Promedio de quizzes</p>
          </div>
        </div>

        {/* No progress message */}
        {noProgress && (
          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-xl p-6 mb-8 text-center">
            <p className="text-indigo-300 text-lg font-semibold mb-2">
              ¡Todavía no empezaste el curso!
            </p>
            <p className="text-slate-400 text-sm mb-4">
              ¡Empezá el curso desde el principio y aprendé análisis técnico paso a paso!
            </p>
            <button
              onClick={() => navigate('/modulo/1')}
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Ir al Módulo 1
            </button>
          </div>
        )}

        {/* Module cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {MODULES.map(mod => {
            const completed = completedModules.includes(mod.id)
            const score = quizScores[mod.id]

            return (
              <button
                key={mod.id}
                onClick={() => navigate(`/modulo/${mod.id}`)}
                className="bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-xl p-5 text-left transition-colors flex flex-col gap-3 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl leading-none">{mod.icon}</span>
                  <StatusBadge completed={completed} />
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-sm leading-snug group-hover:text-blue-400 transition-colors">
                    {mod.id}. {mod.title}
                  </p>
                </div>
                {score ? (
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Quiz</span>
                      <span className="text-xs font-semibold text-indigo-400">
                        {score.score}/{score.total} ({Math.round((score.score / score.total) * 100)}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-indigo-500"
                        style={{ width: `${Math.round((score.score / score.total) * 100)}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="mt-auto text-xs text-slate-600 italic">Quiz sin completar</p>
                )}
              </button>
            )
          })}
        </div>

        {/* Reset button */}
        <div className="border-t border-slate-800 pt-6 flex justify-end">
          <button
            onClick={handleReset}
            className="bg-red-900/40 hover:bg-red-800/60 text-red-400 hover:text-red-300 border border-red-800/50 hover:border-red-600/60 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Reiniciar progreso
          </button>
        </div>
      </div>
    </div>
  )
}
