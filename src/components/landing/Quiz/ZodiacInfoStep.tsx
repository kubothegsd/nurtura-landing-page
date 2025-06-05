import React, { useState, useMemo } from "react";
import { getAgeGroup, getZodiacSign, getAgeSpecificQuestions } from "./logic";
import { zodiacSigns } from "./ageGroupData";

interface ChildInfo {
  gender: "boy" | "girl";
  birthDate: Date;
}

interface Answer {
  questionId: string;
  response: "yes" | "no" | "dont-know";
}

type QuizStep = "basic-info" | "zodiac-info" | "results";

interface ElementColors {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  glow: string;
}

interface ZodiacInfoStepProps {
  childInfo: ChildInfo;
  answers: Answer[];
  setAnswers: (answers: Answer[]) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  setCurrentStep: (step: QuizStep) => void;
  getElementColors: (element: string) => ElementColors;
}

export const ZodiacInfoStep: React.FC<ZodiacInfoStepProps> = ({
  childInfo,
  answers,
  setAnswers,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setCurrentStep,
  getElementColors,
}) => {
  const zodiacSign = getZodiacSign(childInfo.birthDate);
  const zodiacData = zodiacSigns[zodiacSign];
  const [showQuestions, setShowQuestions] = useState(false);

  // Create descriptive name combining element and zodiac
  const getDescriptiveName = () => {
    // Get the first primary personality as the main descriptor
    const primaryPersonality = zodiacData.primary[0];

    // Capitalize the personality name for display
    const personalityName =
      primaryPersonality.charAt(0).toUpperCase() + primaryPersonality.slice(1);

    return `${personalityName} ${zodiacData.element} ${zodiacSign}`;
  };

  const colors = getElementColors(zodiacData.element);

  // Memoize questions to prevent regeneration on each render
  const sortedQuestions = useMemo(() => {
    const ageGroup = getAgeGroup(childInfo.birthDate);
    const questions = getAgeSpecificQuestions(ageGroup);

    // Get primary and secondary personalities from zodiac data
    const primaryPersonalities = zodiacData.primary;
    const secondaryPersonalities = zodiacData.secondary;

    // Flatten questions while preserving personality mapping and prioritizing by zodiac
    const questionData: Array<{
      question: any;
      personality: string;
      personalityIndex: number;
      questionIndex: number;
      priority: number; // 1 = primary, 2 = secondary
    }> = [];

    if (questions) {
      // Get primary personality questions (4 questions total, distributed across primary personalities)
      const questionsPerPrimary = Math.ceil(4 / primaryPersonalities.length);
      primaryPersonalities.forEach((personality, personalityIndex) => {
        const personalityQuestions = questions[personality] || [];
        personalityQuestions
          .slice(0, questionsPerPrimary)
          .forEach((question, questionIndex) => {
            if (questionData.filter((q) => q.priority === 1).length < 4) {
              questionData.push({
                question,
                personality,
                personalityIndex,
                questionIndex,
                priority: 1,
              });
            }
          });
      });

      // Get secondary personality questions (2 questions total, distributed across secondary personalities)
      const questionsPerSecondary = Math.ceil(
        2 / secondaryPersonalities.length
      );
      secondaryPersonalities.forEach((personality, personalityIndex) => {
        const personalityQuestions = questions[personality] || [];
        personalityQuestions
          .slice(0, questionsPerSecondary)
          .forEach((question, questionIndex) => {
            if (questionData.filter((q) => q.priority === 2).length < 2) {
              questionData.push({
                question,
                personality,
                personalityIndex,
                questionIndex,
                priority: 2,
              });
            }
          });
      });
    }

    // Sort questions by priority (primary first, then secondary), use stable sort
    return questionData.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      // Use personality and question index for stable sorting instead of random
      return (
        a.personalityIndex - b.personalityIndex ||
        a.questionIndex - b.questionIndex
      );
    });
  }, [childInfo.birthDate, zodiacData.primary, zodiacData.secondary]);

  const currentQuestionData = sortedQuestions[currentQuestionIndex];

  const handleAnswer = (response: "yes" | "no" | "dont-know") => {
    if (!currentQuestionData) return;

    const newAnswer: Answer = {
      questionId: `${currentQuestionData.personality}-${currentQuestionData.questionIndex}`,
      response,
    };

    setAnswers([...answers, newAnswer]);

    if (currentQuestionIndex < sortedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentStep("results");
    }
  };

  const progressPercentage =
    showQuestions && sortedQuestions.length > 0
      ? ((currentQuestionIndex + 1) / sortedQuestions.length) * 100
      : 0;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${colors.bg} flex items-center justify-center p-4 relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-20 w-32 h-32 bg-gradient-to-r ${colors.primary} rounded-full opacity-10 animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r ${colors.secondary} rounded-full opacity-15 animate-bounce`}
        ></div>
        <div
          className={`absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r ${colors.primary} rounded-full opacity-20 animate-ping`}
        ></div>
        <div
          className={`absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r ${colors.secondary} rounded-full opacity-10 animate-pulse`}
        ></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Zodiac Image & Learning Gifts */}
          <div className="flex flex-col justify-center lg:justify-end space-y-8">
            {/* Zodiac Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${colors.primary} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Main image container */}
                <div
                  className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl ${colors.glow} transform group-hover:scale-105 transition-all duration-500`}
                >
                  <img
                    src={`/src/components/illustrations/${zodiacSign.toLowerCase()}.jpg`}
                    alt={`${zodiacSign} zodiac illustration`}
                    className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                  />

                  {/* Floating zodiac icon */}
                  <div className="absolute -top-6 -right-6 text-6xl animate-bounce">
                    {zodiacData.icon}
                  </div>

                  {/* Element badge */}
                  <div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colors.secondary} text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg`}
                  >
                    {zodiacData.element} Element
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Information or Questions */}
          <div className="space-y-8">
            {!showQuestions ? (
              // Zodiac Information
              <>
                {/* Main title */}
                <div className="text-center lg:text-left">
                  <div className="inline-block mb-4">
                    <span
                      className={`text-sm font-semibold ${colors.accent} uppercase tracking-widest`}
                    >
                      Cosmic Identity Revealed
                    </span>
                  </div>
                  <h1
                    className={`text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text mb-6 leading-tight`}
                  >
                    {getDescriptiveName()}
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                    Your child carries the mystical essence of {zodiacSign},
                    guided by the powerful {zodiacData.element.toLowerCase()}{" "}
                    element. Their cosmic blueprint reveals unique gifts waiting
                    to unfold.
                  </p>
                </div>

                {/* Continue button */}
                <div className="pt-6">
                  <button
                    onClick={() => setShowQuestions(true)}
                    className={`group relative w-full lg:w-auto bg-gradient-to-r ${colors.primary} hover:shadow-2xl text-white font-bold py-6 px-12 rounded-2xl text-xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Button glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${colors.primary} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                    ></div>

                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span>Discover {zodiacSign} Learning Magic</span>
                      <span className="text-2xl animate-pulse">✨</span>
                    </span>

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  </button>
                </div>
              </>
            ) : (
              // Questions Section
              <>
                {/* Header with zodiac context */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div>
                      <h2
                        className={`text-2xl font-bold text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text capitalize`}
                      >
                        {zodiacSign} Discovery
                      </h2>
                      <p className={`${colors.accent} text-sm font-medium`}>
                        Exploring{" "}
                        {currentQuestionData?.personality || "personality"}{" "}
                        traits
                      </p>
                    </div>
                    <span className="text-4xl animate-pulse">
                      {zodiacData.icon}
                    </span>
                  </div>
                </div>

                {/* Progress indicator */}
                {sortedQuestions.length > 0 && (
                  <div className="mb-8">
                    <div className="flex justify-between items-center text-white/80 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
                        ></div>
                        <span className="font-medium">
                          Question {currentQuestionIndex + 1} of{" "}
                          {sortedQuestions.length}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {Math.round(progressPercentage)}% Complete
                        </span>
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.secondary}`}
                        ></div>
                      </div>
                    </div>

                    {/* Progress bar with glow */}
                    <div className="relative">
                      <div className="w-full bg-white/10 rounded-full h-3 backdrop-blur-sm border border-white/20">
                        <div
                          className={`bg-gradient-to-r ${colors.primary} h-3 rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
                          style={{ width: `${progressPercentage}%` }}
                        >
                          {/* Shine effect on progress bar */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                      {/* Progress glow */}
                      <div
                        className={`absolute top-0 h-3 bg-gradient-to-r ${colors.primary} rounded-full blur-sm opacity-30 transition-all duration-700`}
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Question content */}
                {currentQuestionData && (
                  <div
                    className={`bg-white/10 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl ${colors.glow} relative overflow-hidden`}
                  >
                    {/* Card background effect */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.primary}`}
                    ></div>

                    {/* Question header */}
                    <div className="text-center mb-8">
                      <div className="inline-block mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${colors.primary} rounded-full flex items-center justify-center text-2xl shadow-lg ${colors.glow}`}
                        >
                          🔮
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                        {currentQuestionData.question.scenario}
                      </h3>

                      <div
                        className={`inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20 ${colors.glow}`}
                      >
                        <p
                          className={`${colors.accent} italic font-medium text-sm`}
                        >
                          {currentQuestionData.question.prediction.replace(
                            "{name}",
                            "your child"
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Question text */}
                    <div className="mb-8">
                      <p className="text-lg lg:text-xl text-white text-center leading-relaxed font-medium">
                        {currentQuestionData.question.question.replace(
                          "{name}",
                          "your child"
                        )}
                      </p>
                    </div>

                    {/* Answer options */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {[
                        {
                          value: "yes",
                          emoji: "✅",
                          label: "Yes",
                          gradient: "from-emerald-500 to-green-600",
                          hoverGradient: "from-emerald-400 to-green-500",
                          glow: "shadow-emerald-500/25",
                        },
                        {
                          value: "no",
                          emoji: "❌",
                          label: "No",
                          gradient: "from-red-500 to-rose-600",
                          hoverGradient: "from-red-400 to-rose-500",
                          glow: "shadow-red-500/25",
                        },
                        {
                          value: "dont-know",
                          emoji: "🤷‍♀️",
                          label: "I'm not sure",
                          gradient: colors.secondary.replace("to-", "to-"),
                          hoverGradient: colors.primary.replace("to-", "to-"),
                          glow: colors.glow,
                        },
                      ].map((option, index) => (
                        <button
                          key={option.value}
                          onClick={() =>
                            handleAnswer(
                              option.value as "yes" | "no" | "dont-know"
                            )
                          }
                          className={`group relative bg-gradient-to-r ${option.gradient} hover:bg-gradient-to-r hover:${option.hoverGradient} text-white font-bold py-3 px-4 rounded-2xl text-sm sm:text-base transform hover:scale-105 transition-all duration-300 shadow-xl ${option.glow} hover:shadow-2xl overflow-hidden flex-1`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {/* Button glow effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                          ></div>

                          <div className="relative z-10 flex items-center justify-center gap-2">
                            <div className="text-lg group-hover:scale-110 transition-transform duration-200">
                              {option.emoji}
                            </div>
                            <span className="font-semibold">
                              {option.label}
                            </span>
                          </div>

                          {/* Shine effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
              ></div>
              <span className="text-sm font-medium">Cosmic Alignment</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.secondary}`}
              ></div>
              <span className="text-sm font-medium">
                {showQuestions ? "AI Analysis" : "Personalized Journey"}
              </span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
              ></div>
              <span className="text-sm font-medium">
                {showQuestions ? "Smart Discovery" : "Magical Discovery"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
