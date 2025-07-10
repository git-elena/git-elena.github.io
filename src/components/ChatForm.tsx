import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import questions from '../data/questions.json'; // Importing the questionnaire structure
import './css/ChatForm.css'; // Importing the CSS file

export default function StepByStepQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(0);

  const visibleQuestions = questions.filter((q) => {
    if (!q.showIf) return true;
    return Object.entries(q.showIf).every(([key, values]) => values.includes(answers[key]));
  });

  const current = visibleQuestions[step] as typeof questions[number] & { placeholder?: string };

  const handleNext = () => {
    if (step < visibleQuestions.length - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      setStep(visibleQuestions.length);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleSelect = (value) => {
    setAnswers({ ...answers, [current.id]: value });
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [current.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Відповіді користувача:', answers);
    alert('Дякуємо! Ваш запит отримано.');
  };

  if (step >= visibleQuestions.length) {
    console.log('All questions answered. Displaying completion form.');
    return (
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Анкету завершено ✅</h2>
        <ul className="text-sm space-y-2 mb-4">
          {visibleQuestions.map((q) => (
            <li key={q.id}><strong>{q.question}</strong><br />{answers[q.id]}</li>
          ))}
        </ul>
        <button onClick={handleSubmit} className="bg-ascent text-white py-2 px-4 rounded">Надіслати</button>
      </div>
    );
  }

  if (step === visibleQuestions.length - 1) {
    console.log('Last question reached. Preparing to display completion form.');
  }

  return (
    <div className="question-card relative overflow-hidden p-4 max-w-md mx-auto border rounded shadow ">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current.id}
          custom={direction}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-27 w-full flex flex-col"
        >
          <div>
            <h2 className="font-semibold mb-2">Крок {step + 1} / {visibleQuestions.length}</h2>
            <p className="mb-4">{current.question}</p>

            {current.type === 'single-select' && current.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={`block w-full text-left px-4 py-2 mb-2 rounded ${answers[current.id] === opt ? 'bg-ascent text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {opt}
              </button>
            ))}

            {(current.type === 'multi-line-text' || current.type === 'single-line-text') && (
              <div>
                {current.type === 'multi-line-text' ? (
                  <textarea
                    rows={4}
                    className="w-full border p-2 rounded mb-2"
                    placeholder={current.placeholder || ''}
                    value={answers[current.id] || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    className="w-full border p-2 rounded mb-2"
                    placeholder={current.placeholder || ''}
                    value={answers[current.id] || ''}
                    onChange={handleChange}
                  />
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between mt-4 absolute bottom-4 left-4 right-4">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="bg-gray-400 py-2 px-4 rounded disabled:opacity-50"
            >Назад</button>
            <button
              onClick={handleNext}
              disabled={!answers[current.id]}
              className="bg-ascent text-white py-2 px-4 rounded disabled:opacity-50"
            >Далі</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
