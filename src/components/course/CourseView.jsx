import { useState } from 'react'
import { MODULES, TOTAL_MODULES } from '../../data/courseData'
import { useProgress } from '../../context/ProgressContext'
import ProgressBar from './ProgressBar'
import ModuleList from './ModuleList'
import LessonView from './LessonView'
import Quiz from './Quiz'

export default function CourseView({ activeModuleId: initialId }) {
  const { completedModules, markModuleComplete, saveQuizScore } = useProgress()
  const [activeModuleId, setActiveModuleId] = useState(initialId ?? MODULES[0].id)
  const [showQuiz, setShowQuiz] = useState(false)

  const activeModule = MODULES.find(m => m.id === activeModuleId) ?? MODULES[0]
  const isDone = completedModules.includes(activeModule.id)

  function handleSelectModule(id) {
    setActiveModuleId(id)
    setShowQuiz(false)
  }

  function handleStartQuiz() {
    setShowQuiz(true)
  }

  function handleQuizComplete(score, total) {
    saveQuizScore(activeModule.id, score, total)
    markModuleComplete(activeModule.id)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        <ProgressBar completed={completedModules.length} total={TOTAL_MODULES} />

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <aside className="w-full md:w-72 shrink-0">
            <ModuleList
              modules={MODULES}
              completedModules={completedModules}
              activeModuleId={activeModule.id}
              onSelect={handleSelectModule}
            />
          </aside>

          <main className="flex-1 min-w-0 space-y-4">
            {showQuiz ? (
              <Quiz
                key={activeModule.id}
                questions={activeModule.quiz}
                moduleId={activeModule.id}
                onComplete={handleQuizComplete}
                onBack={() => setShowQuiz(false)}
              />
            ) : (
              <LessonView
                module={activeModule}
                isCompleted={isDone}
                onStartQuiz={handleStartQuiz}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
