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

    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <span className="text-8xl block mb-4 animate-pulse">
              {zodiacData.icon}
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Main Zodiac Identity */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text mb-4 capitalize">
                {getDescriptiveName()}
              </h3>
              <div className="flex justify-center items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium">
                  {zodiacData.element} Element
                </span>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium capitalize">
                  {zodiacSign} Sign
                </span>
              </div>
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <button
                onClick={() => setCurrentStep("questions")}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Uncover {zodiacData.element.toLowerCase()} {zodiacSign} Learning
                Magic ✨
              </button>
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

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between text-purple-200 text-sm mb-2">
              <span>
                Question {currentQuestionIndex + 1} of {sortedQuestions.length}
              </span>
              <span>
                {Math.round(
                  ((currentQuestionIndex + 1) / sortedQuestions.length) * 100
                )}
                % Complete
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / sortedQuestions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-5xl block mb-4">🔮</span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentQuestionData.question.scenario}
              </h3>
              <p className="text-pink-200 italic mb-4">
                {currentQuestionData.question.prediction.replace(
                  "{name}",
                  "your child"
                )}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-white text-center leading-relaxed">
                {currentQuestionData.question.question.replace(
                  "{name}",
                  "your child"
                )}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  value: "yes",
                  emoji: "✅",
                  label: "Yes",
                  bgColor: "bg-green-500 hover:bg-green-600",
                  borderColor: "border-green-400",
                },
                {
                  value: "no",
                  emoji: "❌",
                  label: "No",
                  bgColor: "bg-red-500 hover:bg-red-600",
                  borderColor: "border-red-400",
                },
                {
                  value: "dont-know",
                  emoji: "🤷‍♀️",
                  label: "I'm not sure",
                  bgColor: "bg-purple-500 hover:bg-purple-600",
                  borderColor: "border-purple-400",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    handleAnswer(option.value as "yes" | "no" | "dont-know")
                  }
                  className={`group flex items-center justify-between p-4 rounded-2xl ${option.bgColor} border-2 ${option.borderColor} transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {option.emoji}
                    </div>
                    <span className="text-white text-lg font-semibold">
                      {option.label}
                    </span>
                  </div>
                  <div className="text-white opacity-60 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </button>
              ))}
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-8xl block mb-4">✨</span>
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Child's Magical Learning Profile
            </h1>
            <p className="text-xl text-purple-200">
              The cosmic forces have revealed their unique gifts!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Zodiac Sign */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Cosmic Sign
              </h3>
              <div className="text-center">
                <div className="text-6xl mb-4">{zodiacData.icon}</div>
                <h4 className="text-xl font-bold text-pink-300 capitalize">
                  {zodiacSign}
                </h4>
                <p className="text-purple-200 mt-2">
                  Element: {zodiacData.element}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {zodiacData.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/30 text-purple-100 text-xs px-2 py-1 rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Age Group */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Developmental Stage
              </h3>
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-pink-300 capitalize">
                  {ageGroup.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <p className="text-purple-200 mt-2">Current magical phase</p>
              </div>
            </div>
          </div>

          {/* Top Personality Traits from Quiz */}
          {topPersonalities.length > 0 && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Discovered Personality Traits
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {topPersonalities.map(([personality, score], index) => {
                  const profile = learningProfile[personality as Personality];
                  if (!profile) return null;

                  return (
                    <div
                      key={personality}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10 relative"
                    >
                      {index === 0 && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Strongest
                        </div>
                      )}
                      <div className="text-4xl mb-3 text-center">
                        {profile.icon}
                      </div>
                      <h4 className="font-bold text-pink-300 mb-2 capitalize text-center">
                        {personality}
                      </h4>
                      <p className="text-purple-200 text-sm mb-3 text-center">
                        {profile.description}
                      </p>
                      <div className="space-y-1">
                        {profile.traits
                          ?.slice(0, 2)
                          .map((trait: string, traitIndex: number) => (
                            <span
                              key={traitIndex}
                              className="inline-block bg-purple-500/30 text-purple-100 text-xs px-2 py-1 rounded-full mr-1"
                            >
                              {trait}
                            </span>
                          ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Learning Profiles */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              All Magical Learning Gifts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(learningProfile).map(
                ([personality, profile]: [string, any]) => (
                  <div
                    key={personality}
                    className="bg-white/5 rounded-2xl p-4 border border-white/10"
                  >
                    <div className="text-2xl mb-2 text-center">
                      {profile.icon}
                    </div>
                    <h4 className="font-bold text-pink-300 mb-1 capitalize text-center text-sm">
                      {personality}
                    </h4>
                    <p className="text-purple-200 text-xs mb-2 text-center">
                      {profile.description}
                    </p>
                    <div className="space-y-1">
                      {profile.activities
                        ?.slice(0, 1)
                        .map((activity: string, index: number) => (
                          <span
                            key={index}
                            className="inline-block bg-purple-500/20 text-purple-100 text-xs px-1 py-0.5 rounded mr-1"
                          >
                            {activity}
                          </span>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="text-center">
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
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg mr-4"
            >
              Start Another Journey ✨
            </button>
            <button
              onClick={() => window.print()}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Save Results 📄
            </button>
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
