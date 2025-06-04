import React, { useState } from "react";
import {
  getAgeGroup,
  getZodiacSign,
  getAgeSpecificQuestions,
  getLearningProfile,
} from "./logic";
import { zodiacSigns } from "./ageGroupData";
import type { AgeGroup, Personality } from "./ageGroupData";

type QuizStep =
  | "intro"
  | "basic-info"
  | "zodiac-info"
  | "questions"
  | "results";

interface ChildInfo {
  gender: "boy" | "girl";
  birthDate: Date;
}

interface Answer {
  questionId: string;
  response: "yes" | "no" | "dont-know";
}

export const QuizPreview = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("intro");
  const [childInfo, setChildInfo] = useState<ChildInfo>({
    gender: "boy",
    birthDate: new Date(),
  });
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Magical introduction step
  const IntroStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8 animate-bounce">
          <span className="text-8xl">🌟</span>
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
          ✨ Magical Discovery Quest ✨
        </h1>
        <p className="text-xl text-purple-100 mb-8 leading-relaxed">
          Welcome to an enchanted journey of discovery! We'll unveil the
          mystical secrets of your child's unique learning personality through
          cosmic wisdom and magical insights.
        </p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-2">🔮</div>
            <p className="text-purple-200">Cosmic Insights</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🌙</div>
            <p className="text-purple-200">Mystical Questions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⭐</div>
            <p className="text-purple-200">Magical Results</p>
          </div>
        </div>
        <button
          onClick={() => setCurrentStep("basic-info")}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Begin the Magic ✨
        </button>
      </div>
    </div>
  );

  // Basic information collection step
  const BasicInfoStep = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 6 }, (_, i) => currentYear - i); // 0-5 years old
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get days in selected month
    const getDaysInMonth = (month: number, year: number) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const selectedMonth = childInfo.birthDate.getMonth();
    const selectedYear = childInfo.birthDate.getFullYear();
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

    const updateBirthDate = (
      field: "month" | "day" | "year",
      value: number
    ) => {
      const newDate = new Date(childInfo.birthDate);

      if (field === "month") {
        newDate.setMonth(value);
        // Adjust day if it's invalid for the new month
        const maxDays = getDaysInMonth(value, newDate.getFullYear());
        if (newDate.getDate() > maxDays) {
          newDate.setDate(maxDays);
        }
      } else if (field === "day") {
        newDate.setDate(value);
      } else if (field === "year") {
        newDate.setFullYear(value);
        // Adjust day if it's invalid for the new year (leap year edge case)
        const maxDays = getDaysInMonth(newDate.getMonth(), value);
        if (newDate.getDate() > maxDays) {
          newDate.setDate(maxDays);
        }
      }

      setChildInfo({ ...childInfo, birthDate: newDate });
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-6xl block mb-4">🌙</span>
            <h2 className="text-3xl font-bold text-white mb-2">
              Tell Us About Your Little Star
            </h2>
            <p className="text-purple-200">
              Every magical journey begins with a name and the moment they
              entered our world...
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-purple-100 font-medium mb-2">
                Their cosmic essence
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["boy", "girl"] as const).map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setChildInfo({ ...childInfo, gender })}
                    className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      childInfo.gender === gender
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                        : "bg-white/10 text-purple-100 hover:bg-white/20"
                    }`}
                  >
                    {gender === "boy" ? "👦" : "👧"}{" "}
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-purple-100 font-medium mb-3">
                When did this star enter our world?
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-purple-200 text-sm mb-2">
                    Month
                  </label>
                  <select
                    value={selectedMonth}
                    onChange={(e) =>
                      updateBirthDate("month", parseInt(e.target.value))
                    }
                    className="w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none cursor-pointer text-sm"
                  >
                    {months.map((month, index) => (
                      <option
                        key={index}
                        value={index}
                        className="bg-purple-800 text-white"
                      >
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-purple-200 text-sm mb-2">
                    Day
                  </label>
                  <select
                    value={childInfo.birthDate.getDate()}
                    onChange={(e) =>
                      updateBirthDate("day", parseInt(e.target.value))
                    }
                    className="w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none cursor-pointer text-sm"
                  >
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                      (day) => (
                        <option
                          key={day}
                          value={day}
                          className="bg-purple-800 text-white"
                        >
                          {day}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-purple-200 text-sm mb-2">
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) =>
                      updateBirthDate("year", parseInt(e.target.value))
                    }
                    className="w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none cursor-pointer text-sm"
                  >
                    {years.map((year) => (
                      <option
                        key={year}
                        value={year}
                        className="bg-purple-800 text-white"
                      >
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-purple-300 text-xs mt-2 text-center">
                {childInfo.birthDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <button
              onClick={() => setCurrentStep("zodiac-info")}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Continue the Journey 🌟
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Zodiac information step
  const ZodiacInfoStep = () => {
    const zodiacSign = getZodiacSign(childInfo.birthDate);
    const zodiacData = zodiacSigns[zodiacSign];

    // Create descriptive name combining element and zodiac
    const getDescriptiveName = () => {
      // Get the first primary personality as the main descriptor
      const primaryPersonality = zodiacData.primary[0];

      // Capitalize the personality name for display
      const personalityName =
        primaryPersonality.charAt(0).toUpperCase() +
        primaryPersonality.slice(1);

      return `${personalityName} ${zodiacData.element} ${zodiacSign}`;
    };

    // Get element colors for theming
    const getElementColors = () => {
      switch (zodiacData.element.toLowerCase()) {
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

    const colors = getElementColors();

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
            {/* Left side - Zodiac Image */}
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

            {/* Right side - Information */}
            <div className="space-y-8">
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

              {/* Traits showcase */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cosmic Traits
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {zodiacData.traits.slice(0, 6).map((trait, index) => (
                    <div
                      key={index}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${colors.glow}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-white font-medium text-sm">
                        {trait}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary personalities preview */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Learning Gifts
                </h3>
                <div className="flex flex-wrap gap-3">
                  {zodiacData.primary.slice(0, 3).map((personality, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${colors.secondary} text-white px-4 py-2 rounded-full font-semibold text-sm capitalize shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      {personality}
                    </div>
                  ))}
                  {zodiacData.primary.length > 3 && (
                    <div
                      className={`bg-white/20 text-white px-4 py-2 rounded-full font-semibold text-sm ${colors.accent}`}
                    >
                      +{zodiacData.primary.length - 3} more
                    </div>
                  )}
                </div>
              </div>

              {/* Continue button */}
              <div className="pt-6">
                <button
                  onClick={() => setCurrentStep("questions")}
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
                  Personalized Journey
                </span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
                ></div>
                <span className="text-sm font-medium">Magical Discovery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Questions step
  const QuestionsStep = () => {
    const ageGroup = getAgeGroup(childInfo.birthDate);
    const questions = getAgeSpecificQuestions(ageGroup);
    const zodiacSign = getZodiacSign(childInfo.birthDate);
    const zodiacData = zodiacSigns[zodiacSign];

    // Get element colors for theming (same function as ZodiacInfoStep)
    const getElementColors = () => {
      switch (zodiacData.element.toLowerCase()) {
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

    const colors = getElementColors();

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

    // Sort questions by priority (primary first, then secondary), then shuffle within each priority group
    const sortedQuestions = questionData.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      // Within same priority, maintain some randomness
      return Math.random() - 0.5;
    });

    const currentQuestionData = sortedQuestions[currentQuestionIndex];

    if (!currentQuestionData) {
      setCurrentStep("results");
      return null;
    }

    const handleAnswer = (response: "yes" | "no" | "dont-know") => {
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
      ((currentQuestionIndex + 1) / sortedQuestions.length) * 100;

    return (
      <div
        className={`min-h-screen bg-gradient-to-br ${colors.bg} flex items-center justify-center p-4 relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 right-20 w-24 h-24 bg-gradient-to-r ${colors.primary} rounded-full opacity-10 animate-pulse`}
          ></div>
          <div
            className={`absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-r ${colors.secondary} rounded-full opacity-15 animate-bounce`}
          ></div>
          <div
            className={`absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-r ${colors.primary} rounded-full opacity-20 animate-ping`}
          ></div>
          <div
            className={`absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r ${colors.secondary} rounded-full opacity-10 animate-pulse`}
          ></div>
        </div>

        <div className="max-w-4xl w-full relative z-10">
          {/* Header with zodiac context */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 mb-6">
              <img
                src={`/src/components/illustrations/${zodiacSign.toLowerCase()}.jpg`}
                alt={`${zodiacSign} zodiac`}
                className="w-16 h-16 object-cover rounded-full border-2 border-white/30 shadow-lg"
              />
              <div>
                <h2
                  className={`text-2xl font-bold text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text capitalize`}
                >
                  {zodiacSign} Discovery
                </h2>
                <p className={`${colors.accent} text-sm font-medium`}>
                  Exploring {currentQuestionData.personality} personality
                </p>
              </div>
              <span className="text-4xl animate-pulse">{zodiacData.icon}</span>
            </div>
          </div>

          {/* Enhanced Progress indicator */}
          <div className="mb-12">
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

          {/* Question card */}
          <div
            className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl ${colors.glow} relative overflow-hidden`}
          >
            {/* Card background effect */}
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.primary}`}
            ></div>

            {/* Question header */}
            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${colors.primary} rounded-full flex items-center justify-center text-3xl shadow-lg ${colors.glow}`}
                >
                  🔮
                </div>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {currentQuestionData.question.scenario}
              </h3>

              <div
                className={`inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 ${colors.glow}`}
              >
                <p className={`${colors.accent} italic font-medium`}>
                  {currentQuestionData.question.prediction.replace(
                    "{name}",
                    "your child"
                  )}
                </p>
              </div>
            </div>

            {/* Question text */}
            <div className="mb-10">
              <p className="text-xl lg:text-2xl text-white text-center leading-relaxed max-w-3xl mx-auto font-medium">
                {currentQuestionData.question.question.replace(
                  "{name}",
                  "your child"
                )}
              </p>
            </div>

            {/* Answer options */}
            <div className="grid gap-4 max-w-2xl mx-auto">
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
                    handleAnswer(option.value as "yes" | "no" | "dont-know")
                  }
                  className={`group relative bg-gradient-to-r ${option.gradient} hover:bg-gradient-to-r hover:${option.hoverGradient} text-white font-bold py-6 px-8 rounded-2xl text-lg transform hover:scale-105 transition-all duration-300 shadow-xl ${option.glow} hover:shadow-2xl overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Button glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                        {option.emoji}
                      </div>
                      <span className="text-xl font-semibold">
                        {option.label}
                      </span>
                    </div>
                    <div className="text-white opacity-60 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1">
                      →
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </button>
              ))}
            </div>

            {/* Question context */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 text-white/60 text-sm">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.primary}`}
                ></div>
                <span>
                  {currentQuestionData.priority === 1 ? "Primary" : "Secondary"}{" "}
                  personality insight
                </span>
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.secondary}`}
                ></div>
                <span className="capitalize">
                  {currentQuestionData.personality} learning style
                </span>
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.primary}`}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 text-white/40 text-xs">
              <span>{zodiacData.element} Element</span>
              <div className="w-px h-3 bg-white/30"></div>
              <span>Cosmic Analysis</span>
              <div className="w-px h-3 bg-white/30"></div>
              <span>Personalized Insights</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Results step
  const ResultsStep = () => {
    const birthDate = childInfo.birthDate;
    const ageGroup = getAgeGroup(birthDate);
    const zodiacSign = getZodiacSign(birthDate);
    const zodiacData = zodiacSigns[zodiacSign];
    const learningProfile = getLearningProfile(birthDate);

    // Get element colors for theming (same function as other steps)
    const getElementColors = () => {
      switch (zodiacData.element.toLowerCase()) {
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

    const colors = getElementColors();

    // Calculate personality scores based on answers
    const calculatePersonalityScores = () => {
      const questions = getAgeSpecificQuestions(ageGroup);
      if (!questions) return {};

      const scores: Record<string, number> = {};

      // Initialize scores for all personalities
      Object.keys(questions).forEach((personality) => {
        scores[personality] = 0;
      });

      // Calculate scores based on answers
      answers.forEach((answer) => {
        const [personality, questionIndex] = answer.questionId.split("-");
        if (personality && personality in questions) {
          const questionList = questions[personality as Personality];
          if (questionList) {
            const question = questionList[parseInt(questionIndex)];
            if (question) {
              // Score: Yes = full weight, No = 0, I don't know = half weight
              let scoreMultiplier = 0;
              if (answer.response === "yes") scoreMultiplier = 1;
              else if (answer.response === "dont-know") scoreMultiplier = 0.5;

              scores[personality] += scoreMultiplier * question.weight;
            }
          }
        }
      });

      return scores;
    };

    const personalityScores = calculatePersonalityScores();
    const topPersonalities = Object.entries(personalityScores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    return (
      <div
        className={`min-h-screen bg-gradient-to-br ${colors.bg} flex items-center justify-center p-4 relative overflow-hidden`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 right-20 w-32 h-32 bg-gradient-to-r ${colors.primary} rounded-full opacity-10 animate-pulse`}
          ></div>
          <div
            className={`absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r ${colors.secondary} rounded-full opacity-15 animate-bounce`}
          ></div>
          <div
            className={`absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-r ${colors.primary} rounded-full opacity-20 animate-ping`}
          ></div>
          <div
            className={`absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r ${colors.secondary} rounded-full opacity-10 animate-pulse`}
          ></div>
        </div>

        <div className="max-w-6xl w-full relative z-10">
          {/* Combined AI Discovery & Registration Section */}
          <div
            className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl ${colors.glow} relative overflow-hidden mb-8`}
          >
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.primary}`}
            ></div>

            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${colors.primary} rounded-full flex items-center justify-center text-3xl shadow-lg ${colors.glow}`}
                >
                  ✨
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Your AI Assistant Recommends
              </h3>
              <p className={`${colors.accent} text-lg font-medium mb-6`}>
                Unlock the full power of AI-guided discovery for your{" "}
                {zodiacSign} child
              </p>

              <div
                className={`bg-white/5 rounded-2xl p-6 border border-white/10 mb-8 max-w-3xl mx-auto`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🤖</div>
                  <div className="text-left">
                    <p className="text-white text-lg font-medium mb-2">
                      "Based on this analysis, I've identified{" "}
                      {topPersonalities.length > 0
                        ? topPersonalities[0][0]
                        : "unique"}{" "}
                      traits in your child."
                    </p>
                    <p className="text-white/80 text-sm">
                      With full access, I can provide{" "}
                      {zodiacSign.toLowerCase() === "aries"
                        ? "energetic and bold"
                        : zodiacSign.toLowerCase() === "taurus"
                        ? "steady and creative"
                        : zodiacSign.toLowerCase() === "gemini"
                        ? "curious and communicative"
                        : zodiacSign.toLowerCase() === "cancer"
                        ? "nurturing and imaginative"
                        : zodiacSign.toLowerCase() === "leo"
                        ? "confident and expressive"
                        : zodiacSign.toLowerCase() === "virgo"
                        ? "detailed and analytical"
                        : zodiacSign.toLowerCase() === "libra"
                        ? "balanced and social"
                        : zodiacSign.toLowerCase() === "scorpio"
                        ? "intense and intuitive"
                        : zodiacSign.toLowerCase() === "sagittarius"
                        ? "adventurous and philosophical"
                        : zodiacSign.toLowerCase() === "capricorn"
                        ? "ambitious and structured"
                        : zodiacSign.toLowerCase() === "aquarius"
                        ? "innovative and independent"
                        : "empathetic and creative"}{" "}
                      activities that match their{" "}
                      {zodiacData.element.toLowerCase()} element perfectly, plus
                      track their growth over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Discovered Personality Traits */}
            {topPersonalities.length > 0 && (
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">
                  Key Personality Insights Discovered
                </h4>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {topPersonalities
                    .slice(0, 3)
                    .map(([personality, score], index) => {
                      const profile =
                        learningProfile[personality as Personality];
                      if (!profile) return null;

                      return (
                        <div
                          key={personality}
                          className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative text-center transform hover:scale-105 transition-all duration-300`}
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          {index === 0 && (
                            <div
                              className={`absolute -top-3 -right-3 bg-gradient-to-r ${colors.secondary} text-white text-sm font-bold px-3 py-2 rounded-full shadow-lg`}
                            >
                              Strongest Match
                            </div>
                          )}

                          <div className="text-4xl mb-3">{profile.icon}</div>
                          <h5
                            className={`text-lg font-bold text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text capitalize mb-3`}
                          >
                            {personality}
                          </h5>
                          <p className="text-white/80 text-sm mb-4 leading-relaxed">
                            {profile.description}
                          </p>

                          <div
                            className={`bg-white/5 rounded-lg p-3 border border-white/10`}
                          >
                            <p className="text-white text-sm font-medium">
                              AI Confidence:{" "}
                              {Math.round(
                                (score /
                                  Math.max(
                                    ...Object.values(personalityScores)
                                  )) *
                                  100
                              )}
                              %
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div
                className={`bg-white/5 rounded-2xl p-6 border border-white/10 text-center`}
              >
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-white font-bold mb-2">
                  Personalized Activities
                </h4>
                <p className="text-white/70 text-sm">
                  500+ activities specifically curated for {zodiacSign}{" "}
                  {topPersonalities.length > 0
                    ? topPersonalities[0][0]
                    : "children"}{" "}
                  by our AI
                </p>
              </div>
              <div
                className={`bg-white/5 rounded-2xl p-6 border border-white/10 text-center`}
              >
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-white font-bold mb-2">
                  Adaptive AI Learning
                </h4>
                <p className="text-white/70 text-sm">
                  AI continuously learns from your child's preferences and
                  suggests better activities
                </p>
              </div>
              <div
                className={`bg-white/5 rounded-2xl p-6 border border-white/10 text-center`}
              >
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h4 className="text-white font-bold mb-2">Expert Support</h4>
                <p className="text-white/70 text-sm">
                  Connect with child development experts and other {zodiacSign}{" "}
                  parents
                </p>
              </div>
            </div>

            {/* Single CTA */}
            <div className="text-center">
              <button
                className={`group relative bg-gradient-to-r ${colors.primary} hover:shadow-2xl text-white font-bold py-6 px-12 rounded-2xl text-xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${colors.glow} mb-4`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${colors.primary} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                ></div>
                <span className="relative z-10 flex items-center gap-3">
                  <span>Unlock AI-Powered Discovery</span>
                  <span className="text-2xl">🚀</span>
                </span>
              </button>
              <p className="text-white/60 text-sm mb-8">
                Start your 7-day free trial • No credit card required • Cancel
                anytime
              </p>

              {/* Secondary action link */}
              <button
                onClick={() => {
                  setCurrentStep("intro");
                  setAnswers([]);
                  setCurrentQuestionIndex(0);
                  setChildInfo({
                    gender: "boy",
                    birthDate: new Date(),
                  });
                }}
                className="text-white/60 hover:text-white text-sm underline transition-colors duration-200"
              >
                Try another analysis instead
              </button>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="text-center">
            <div className="inline-flex items-center gap-6 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
                ></div>
                <span>AI-Powered Analysis</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.secondary}`}
                ></div>
                <span>Personalized for {zodiacSign}</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
                ></div>
                <span>Register for Full Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render current step
  switch (currentStep) {
    case "intro":
      return <IntroStep />;
    case "basic-info":
      return <BasicInfoStep />;
    case "zodiac-info":
      return <ZodiacInfoStep />;
    case "questions":
      return <QuestionsStep />;
    case "results":
      return <ResultsStep />;
    default:
      return <IntroStep />;
  }
};
