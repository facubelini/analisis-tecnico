import { HashRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import Navbar from './components/common/Navbar'
import Disclaimer from './components/common/Disclaimer'
import CoursePage from './pages/CoursePage'
import AnalysisPage from './pages/AnalysisPage'
import GlossaryPage from './pages/GlossaryPage'
import ProgressPage from './pages/ProgressPage'

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl w-full">
            <Routes>
              <Route path="/"                  element={<CoursePage />} />
              <Route path="/modulo/:moduleId"  element={<CoursePage />} />
              <Route path="/herramienta"       element={<AnalysisPage />} />
              <Route path="/glosario"          element={<GlossaryPage />} />
              <Route path="/progreso"          element={<ProgressPage />} />
            </Routes>
          </main>
          <Disclaimer />
        </div>
      </HashRouter>
    </ProgressProvider>
  )
}
