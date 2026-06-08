import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Volume2, Check } from "lucide-react";
import { ProgressBar } from "../components/ProgressBar";

interface LessonPageProps {
  lessonId: string;
  onComplete: (xp: number, stars: number) => void;
  onExit: () => void;
}

export function LessonPage({ lessonId, onComplete, onExit }: LessonPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [hearts, setHearts] = useState(5);

  const questions = [
    {
      type: "translate",
      question: "How do you say 'Hello' in Spanish?",
      options: ["Hola", "Adiós", "Gracias", "Por favor"],
      correct: 0,
      audio: "hola",
    },
    {
      type: "multiple-choice",
      question: "What does 'Gracias' mean?",
      options: ["Please", "Thank you", "Goodbye", "Hello"],
      correct: 1,
    },
    {
      type: "fill-blank",
      question: "Complete: '_____ días' (Good morning)",
      options: ["Buenos", "Buenas", "Buen", "Buena"],
      correct: 0,
    },
    {
      type: "match",
      question: "Which greeting is used in the evening?",
      options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"],
      correct: 2,
    },
    {
      type: "translate",
      question: "Select the correct translation: 'See you later'",
      options: ["Hasta luego", "Buenas noches", "Adiós", "Hola"],
      correct: 0,
    },
  ];

  const totalQuestions = questions.length;
  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = index === question.correct;
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setHearts(Math.max(0, hearts - 1));
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const stars = Math.floor((correctAnswers / totalQuestions) * 3);
      const xp = correctAnswers * 10;
      onComplete(xp, stars);
    }
  };

  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onExit}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i < hearts ? "bg-red-500" : "bg-gray-200"
                }`}
              >
                <span className="text-white text-sm">❤️</span>
              </div>
            ))}
          </div>
        </div>
        <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
      </div>

      <div className="flex-1 flex flex-col p-6">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex flex-col"
        >
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
              {question.type === "translate" && "Translation"}
              {question.type === "multiple-choice" && "Multiple Choice"}
              {question.type === "fill-blank" && "Fill in the Blank"}
              {question.type === "match" && "Match"}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{question.question}</h2>
            {question.audio && (
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-white">
                <Volume2 className="w-5 h-5" />
                <span>Play Audio</span>
              </button>
            )}
          </div>

          <div className="space-y-3 flex-1">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-2xl border-2 text-left font-semibold transition-all ${
                  selectedAnswer === null
                    ? "border-gray-200 bg-white hover:border-gray-300"
                    : selectedAnswer === index
                    ? isCorrect
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : index === question.correct && showResult
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-white opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">{option}</span>
                  {showResult && index === question.correct && (
                    <Check className="w-6 h-6 text-green-600" />
                  )}
                  {showResult && selectedAnswer === index && !isCorrect && (
                    <X className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className={`p-6 rounded-t-3xl ${
                isCorrect ? "bg-green-500" : "bg-red-500"
              } -mx-6 -mb-6`}
            >
              <div className="text-white mb-4">
                <h3 className="text-2xl font-bold mb-2">
                  {isCorrect ? "Excellent! 🎉" : "Not quite 😔"}
                </h3>
                <p className="text-white/90">
                  {isCorrect
                    ? "You got it right! Keep going!"
                    : `The correct answer is: ${question.options[question.correct]}`}
                </p>
              </div>
              <button
                onClick={handleNext}
                className="w-full py-4 bg-white rounded-2xl font-bold text-gray-900 shadow-lg"
              >
                {currentQuestion < totalQuestions - 1 ? "Continue" : "Finish Lesson"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
