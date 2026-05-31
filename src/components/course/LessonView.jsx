import { useState } from 'react'

// Props:
//   module       — Module object { id, title, description, icon, content, quiz }
//   isCompleted  — bool
//   onStartQuiz  — () => void  (called when user clicks "Iniciar quiz")
//   quizScore    — { score, total, date } | null | undefined
export default function LessonView({ module, isCompleted, onStartQuiz, quizScore }) {
  // quizScore can be null (never done) or an object (done before)
  const hasPriorScore = quizScore != null  // handles both null and undefined safely

  return (
    <div className="space-y-8 animate-fade-in">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0 mt-1" aria-hidden="true">
          {module.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-slate-100 leading-tight">
              {module.title}
            </h1>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-900/50 text-green-400 border border-green-700">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Completado
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed">{module.description}</p>
        </div>
      </div>

      {/* ── Lesson content (HTML string from courseData) ──────────── */}
      <div
        className="text-slate-300 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: module.content }}
      />

      {/* ── Quiz section separator ────────────────────────────────── */}
      <div className="flex items-center gap-3 pt-2">
        <div className="flex-1 border-t border-slate-700" />
        <span className="text-slate-400 text-sm font-medium whitespace-nowrap">
          📝 Pon a prueba tu conocimiento
        </span>
        <div className="flex-1 border-t border-slate-700" />
      </div>

      {/* ── Prior score display (if module was already completed) ──── */}
      {hasPriorScore && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
              Resultado anterior
            </p>
            <p className="text-slate-100 font-semibold text-lg">
              <span className="text-blue-400 font-bold text-2xl">{quizScore.score}</span>
              <span className="text-slate-400">/{quizScore.total}</span>
              <span className="text-slate-400 text-sm ml-2">correctas</span>
            </p>
            {quizScore.date && (
              <p className="text-slate-500 text-xs mt-0.5">
                {new Date(quizScore.date).toLocaleDateString('es-AR', {
                  day: '2-digit', month: 'short', year: 'numeric',
                })}
              </p>
            )}
          </div>
          <button
            onClick={onStartQuiz}
            className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors border border-slate-600 hover:border-slate-500"
          >
            Repetir quiz
          </button>
        </div>
      )}

      {/* ── Start quiz button (first time) ───────────────────────── */}
      {!hasPriorScore && module.quiz && module.quiz.length > 0 && (
        <button
          onClick={onStartQuiz}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors duration-200"
        >
          Iniciar quiz del módulo →
        </button>
      )}
    </div>
  )
}
