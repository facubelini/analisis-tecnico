import { useState } from 'react';

function Quiz({ questions, onComplete, moduleId }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizDone, setQuizDone] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  function handleSelectAnswer(index) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnswers((prev) => [...prev, { selected: index, correct: question.correctIndex }]);
  }

  function handleNext() {
    if (isLastQuestion) {
      setQuizDone(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setFadeKey((prev) => prev + 1);
    }
  }

  function getScore() {
    return answers.filter((a) => a.selected === a.correct).length;
  }

  function getMotivationalMessage(score, total) {
    const pct = score / total;
    if (pct === 1) return '¡Perfecto! Dominaste este módulo por completo.';
    if (pct >= 0.8) return '¡Muy bien! Tienes un gran manejo del tema.';
    if (pct >= 0.6) return 'Buen trabajo. Repasa los conceptos que fallaste.';
    if (pct >= 0.4) return 'Vas por buen camino. Te recomendamos releer el módulo.';
    return 'No te rindas. Vuelve a leer el contenido y vuelve a intentarlo.';
  }

  function getOptionClasses(index) {
    const base =
      'w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm font-medium focus:outline-none';

    if (selectedAnswer === null) {
      return `${base} border-slate-600 bg-slate-700 text-slate-200 hover:bg-slate-600 hover:border-blue-500 cursor-pointer`;
    }

    const isCorrect = index === question.correctIndex;
    const isSelected = index === selectedAnswer;
    const isWrongSelected = isSelected && !isCorrect;

    if (isCorrect) {
      return `${base} border-green-500 bg-green-900/40 text-green-300 cursor-default`;
    }
    if (isWrongSelected) {
      return `${base} border-red-500 bg-red-900/40 text-red-300 cursor-default`;
    }
    return `${base} border-slate-600 bg-slate-700/50 text-slate-400 cursor-default`;
  }

  if (quizDone) {
    const score = getScore();
    const total = questions.length;

    return (
      <div className="bg-slate-800 rounded-xl p-6 space-y-6 animate-fadeIn">
        <div className="text-center space-y-2">
          <p className="text-slate-400 text-sm uppercase tracking-wider">Resultado final</p>
          <p className="text-5xl font-bold text-blue-400">
            {score}
            <span className="text-2xl text-slate-400">/{total}</span>
          </p>
          <p className="text-slate-300 text-base">{getMotivationalMessage(score, total)}</p>
        </div>

        <div className="space-y-2">
          {answers.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-700/50 text-sm"
            >
              <span
                className={
                  a.selected === a.correct ? 'text-green-400 font-bold' : 'text-red-400 font-bold'
                }
              >
                {a.selected === a.correct ? '✓' : '✗'}
              </span>
              <span className="text-slate-300 truncate">{questions[i].question}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onComplete(score, total)}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors duration-200"
        >
          Completar módulo
        </button>
      </div>
    );
  }

  return (
    <div key={fadeKey} className="bg-slate-800 rounded-xl p-6 space-y-5 animate-fadeIn">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>
          Pregunta {currentQuestion + 1} de {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < currentQuestion
                  ? 'bg-blue-500'
                  : i === currentQuestion
                  ? 'bg-indigo-400'
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-slate-100 text-base font-semibold leading-snug">{question.question}</p>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClasses(index)}
            onClick={() => handleSelectAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            <span className="mr-2 text-slate-400 font-mono text-xs">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="border border-slate-600 bg-slate-700/60 rounded-lg px-4 py-3 text-sm text-slate-300 leading-relaxed">
          <span className="font-semibold text-indigo-400">Explicación: </span>
          {question.explanation}
        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors duration-200"
        >
          {isLastQuestion ? 'Ver resultado' : 'Siguiente pregunta'}
        </button>
      )}
    </div>
  );
}

export default Quiz;
