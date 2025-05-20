import { motion } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "How does your child typically react to new situations?",
    options: [
      "Jumps right in",
      "Observes first",
      "Needs encouragement",
      "Varies by situation",
    ],
  },
  {
    id: 2,
    text: "What activities capture your child's attention the longest?",
    options: [
      "Physical activities",
      "Creative projects",
      "Learning new things",
      "Social interactions",
    ],
  },
];

export const QuizPreview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-brand-blue">
            {questions[currentQuestion].text}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <motion.button
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedOption(option)}
                className={`w-full p-4 rounded-xl text-left transition-colors ${
                  selectedOption === option
                    ? "bg-brand-mint text-white"
                    : "bg-brand-blush hover:bg-brand-sand"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between items-center pt-4">
          <button
            onClick={() => {
              setCurrentQuestion(Math.max(0, currentQuestion - 1));
              setSelectedOption(null);
            }}
            className="text-brand-turquoise hover:text-brand-blue transition-colors"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <div className="text-brand-turquoise">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <button
            onClick={() => {
              if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
              }
            }}
            className="text-brand-turquoise hover:text-brand-blue transition-colors"
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};
