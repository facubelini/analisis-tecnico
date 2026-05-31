import { createContext, useContext, useState, useCallback } from 'react'

const ProgressContext = createContext(null)
const STORAGE_KEY = 'at_progress_v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { completedModules: [], quizScores: {} }
  } catch {
    return { completedModules: [], quizScores: {} }
  }
}

function save(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch {}
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(load)

  const markModuleComplete = useCallback((moduleId) => {
    setState(prev => {
      if (prev.completedModules.includes(moduleId)) return prev
      const next = { ...prev, completedModules: [...prev.completedModules, moduleId] }
      save(next)
      return next
    })
  }, [])

  const saveQuizScore = useCallback((moduleId, score, total) => {
    setState(prev => {
      const next = { ...prev, quizScores: { ...prev.quizScores, [moduleId]: { score, total, date: new Date().toISOString() } } }
      save(next)
      return next
    })
  }, [])

  const resetProgress = useCallback(() => {
    const next = { completedModules: [], quizScores: {} }
    save(next)
    setState(next)
  }, [])

  return (
    <ProgressContext.Provider value={{ ...state, markModuleComplete, saveQuizScore, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
