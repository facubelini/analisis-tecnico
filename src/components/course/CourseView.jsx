import { useState } from 'react'
import { MODULES, TOTAL_MODULES } from '../../data/courseData'
import { useProgress } from '../../context/ProgressContext'
import ProgressBar from './ProgressBar'
import ModuleList from './ModuleList'
import LessonView from './LessonView'
import Quiz from './Quiz'

export default function CourseView({ activeModuleId: initialId }) {
  const { completedModules, quizScores, markModuleComplete, saveQuizScore } = useProgress()
  const [activeModuleId, setActiveModuleId] = useState(initialId ?? MODULES[0].id)
  const [showQuiz, setShowQuiz] = useState(false)

  const activeModule = MODULES.find(m => m.id === activeModuleId) ?? MODULES[0]
  const isDone       = completedModules.includes(activeModule.id)
  // quizScores may be undefined if context is loading; guard with ?? {}
  const priorScore   = (quizScores ?? {})[activeModule.id] ?? null

  function handleSelectModule(id) {
    setActiveModuleId(id)
    setShowQuiz(false)
    // Scroll to top of content on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleStartQuiz() {
    setShowQuiz(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleQuizComplete(score, total) {
    saveQuizScore(activeModule.id, score, total)
    markModuleComplete(activeModule.id)
    setShowQuiz(false)
  }

  return (
    <div className="text-slate-100">
      <div className="space-y-4">
        {/* Global progress bar */}
        <ProgressBar completed={completedModules.length} total={TOTAL_MODULES} />

        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* ── Sidebar: module list ──────────────────────────────── */}
          <aside className="w-full lg:w-72 shrink-0">
            <ModuleList
              modules={MODULES}
              completedModules={completedModules}
              activeModuleId={activeModule.id}
              onSelect={handleSelectModule}
            />
          </aside>

          {/* ── Main content area ─────────────────────────────────── */}
          <main className="flex-1 min-w-0">
            {showQuiz ? (
              <div className="space-y-4">
                {/* Back button */}
                <button
                  onClick={() => setShowQuiz(false)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver a la lección
                </button>
                <Quiz
                  key={activeModule.id}
                  questions={activeModule.quiz}
                  moduleId={activeModule.id}
                  onComplete={handleQuizComplete}
                />
              </div>
            ) : (
              <LessonView
                module={activeModule}
                isCompleted={isDone}
                onStartQuiz={handleStartQuiz}
                quizScore={priorScore}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
