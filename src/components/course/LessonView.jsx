import { useState } from 'react';
import Quiz from './Quiz';

function LessonView({ module, onQuizComplete, isCompleted, quizScore }) {
  const [retaking, setRetaking] = useState(false);

  function handleQuizComplete(score, total) {
    setRetaking(false);
    onQuizComplete(score, total);
  }

  const showQuiz = retaking || quizScore === null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0 mt-1" aria-hidden="true">
          {module.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-slate-100 leading-tight">{module.title}</h1>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-900/50 text-green-400 border border-green-700">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Completado
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed">{module.description}</p>
        </div>
      </div>

      {/* Lesson content */}
      <div
        className="lesson-content text-slate-300 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: module.content }}
      />

      {/* Separator */}
      <div className="flex items-center gap-3 py-2">
        <div className="flex-1 border-t border-slate-700" />
        <span className="text-slate-400 text-sm font-medium whitespace-nowrap">
          Pon a prueba tu conocimiento
        </span>
        <div className="flex-1 border-t border-slate-700" />
      </div>

      {/* Quiz area */}
      {quizScore !== null && !retaking ? (
        <div className="bg-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
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
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              )}
            </div>
            <button
              onClick={() => setRetaking(true)}
              className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors duration-200 border border-slate-600 hover:border-slate-500"
            >
              Repetir quiz
            </button>
          </div>
        </div>
      ) : null}

      {showQuiz && module.quiz && module.quiz.length > 0 && (
        <Quiz
          questions={module.quiz}
          onComplete={handleQuizComplete}
          moduleId={module.id}
        />
      )}
    </div>
  );
}

export default LessonView;
