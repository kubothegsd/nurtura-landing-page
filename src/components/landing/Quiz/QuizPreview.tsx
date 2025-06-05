import { useState } from "react";
import { BasicInfoStep } from "./BasicInfoStep";
import { ZodiacInfoStep } from "./ZodiacInfoStep";
import { ResultsStep } from "./ResultsStep";

type QuizStep = "basic-info" | "zodiac-info" | "results";

interface ChildInfo {
  gender: "boy" | "girl";
  birthDate: Date;
}

interface Answer {
  questionId: string;
  response: "yes" | "no" | "dont-know";
}

export const QuizPreview = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("basic-info");
  const [childInfo, setChildInfo] = useState<ChildInfo>({
    gender: "boy",
    birthDate: new Date(),
  });
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Extract shared element colors function
  const getElementColors = (element: string) => {
    switch (element.toLowerCase()) {
      case "fire":
        return {
          primary: "from-red-600 via-orange-500 to-yellow-500",
          secondary: "from-red-500 to-orange-600",
          accent: "text-orange-300",
          bg: "from-red-900 via-orange-900 to-yellow-900",
          glow: "shadow-red-500/25",
        };
      case "earth":
        return {
          primary: "from-green-700 via-emerald-600 to-green-500",
          secondary: "from-green-600 to-emerald-700",
          accent: "text-green-300",
          bg: "from-green-900 via-emerald-900 to-teal-900",
          glow: "shadow-green-500/25",
        };
      case "air":
        return {
          primary: "from-blue-600 via-sky-500 to-cyan-500",
          secondary: "from-blue-500 to-sky-600",
          accent: "text-blue-300",
          bg: "from-blue-900 via-sky-900 to-cyan-900",
          glow: "shadow-blue-500/25",
        };
      case "water":
        return {
          primary: "from-indigo-600 via-purple-500 to-blue-500",
          secondary: "from-indigo-500 to-purple-600",
          accent: "text-purple-300",
          bg: "from-indigo-900 via-purple-900 to-blue-900",
          glow: "shadow-purple-500/25",
        };
      default:
        return {
          primary: "from-purple-600 via-pink-500 to-purple-500",
          secondary: "from-purple-500 to-pink-600",
          accent: "text-purple-300",
          bg: "from-purple-900 via-pink-900 to-purple-900",
          glow: "shadow-purple-500/25",
        };
    }
  };

  // Render current step
  switch (currentStep) {
    case "basic-info":
      return (
        <BasicInfoStep
          childInfo={childInfo}
          setChildInfo={setChildInfo}
          setCurrentStep={setCurrentStep}
        />
      );
    case "zodiac-info":
      return (
        <ZodiacInfoStep
          childInfo={childInfo}
          answers={answers}
          setAnswers={setAnswers}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setCurrentStep={setCurrentStep}
          getElementColors={getElementColors}
        />
      );
    case "results":
      return (
        <ResultsStep
          childInfo={childInfo}
          answers={answers}
          setAnswers={setAnswers}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setChildInfo={setChildInfo}
          setCurrentStep={setCurrentStep}
          getElementColors={getElementColors}
        />
      );
    default:
      return (
        <BasicInfoStep
          childInfo={childInfo}
          setChildInfo={setChildInfo}
          setCurrentStep={setCurrentStep}
        />
      );
  }
};
