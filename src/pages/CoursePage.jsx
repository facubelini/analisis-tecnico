import { useParams, useNavigate } from 'react-router-dom'
import { MODULES } from '../data/courseData'
import { useProgress } from '../context/ProgressContext'
import CourseView from '../components/course/CourseView'

export default function CoursePage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { completedModules } = useProgress()

  function resolveActiveId() {
    if (moduleId !== undefined) {
      const parsed = parseInt(moduleId, 10)
      if (!isNaN(parsed) && MODULES.find(m => m.id === parsed)) {
        return parsed
      }
    }
    const firstIncomplete = MODULES.find(m => !completedModules.includes(m.id))
    return firstIncomplete ? firstIncomplete.id : MODULES[0].id
  }

  const activeId = resolveActiveId()

  function handleSelectModule(id) {
    navigate(`/modulo/${id}`)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <CourseView
        activeModuleId={activeId}
        onSelectModule={handleSelectModule}
      />
    </div>
  )
}
