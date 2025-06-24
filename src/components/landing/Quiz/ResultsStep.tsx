import React from 'react';
import {
  getAgeGroup,
  getZodiacSign,
  getAgeSpecificQuestions,
  getLearningProfile,
} from './logic';
import { zodiacSigns } from './ageGroupData';
import type { Personality } from './ageGroupData';

interface ChildInfo {
  gender: 'boy' | 'girl';
  birthDate: Date;
}

interface Answer {
  questionId: string;
  response: 'yes' | 'no' | 'dont-know';
}

type QuizStep = 'basic-info' | 'zodiac-info' | 'results';

interface ElementColors {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  glow: string;
}

interface ResultsStepProps {
  childInfo: ChildInfo;
  answers: Answer[];
  setAnswers: (answers: Answer[]) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setChildInfo: (childInfo: ChildInfo) => void;
  setCurrentStep: (step: QuizStep) => void;
  getElementColors: (element: string) => ElementColors;
}

export const ResultsStep: React.FC<ResultsStepProps> = ({
  childInfo,
  answers,
  setAnswers,
  setCurrentQuestionIndex,
  setChildInfo,
  setCurrentStep,
  getElementColors,
}) => {
  const birthDate = childInfo.birthDate;
  const ageGroup = getAgeGroup(birthDate);
  const zodiacSign = getZodiacSign(birthDate);
  const zodiacData = zodiacSigns[zodiacSign];
  const learningProfile = getLearningProfile(birthDate);
  const colors = getElementColors(zodiacData.element);

  // Calculate personality scores based on answers
  const calculatePersonalityScores = () => {
    const questions = getAgeSpecificQuestions(ageGroup);
    if (!questions) return {};

    const scores: Record<string, number> = {};

    // Initialize scores for all personalities
    Object.keys(questions).forEach(personality => {
      scores[personality] = 0;
    });

    // Calculate scores based on answers
    answers.forEach(answer => {
      const [personality, questionIndex] = answer.questionId.split('-');
      if (personality && personality in questions) {
        const questionList = questions[personality as Personality];
        if (questionList) {
          const question = questionList[parseInt(questionIndex)];
          if (question) {
            // Score: Yes = full weight, No = 0, I don't know = half weight
            let scoreMultiplier = 0;
            if (answer.response === 'yes') scoreMultiplier = 1;
            else if (answer.response === 'dont-know') scoreMultiplier = 0.5;

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
      <div className='absolute inset-0'>
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

      <div className='max-w-6xl w-full relative z-10'>
        {/* Combined AI Discovery & Registration Section */}
        <div
          className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl ${colors.glow} relative overflow-hidden mb-8`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.primary}`}
          ></div>

          <div className='text-center mb-10'>
            <div className='inline-block mb-6'>
              <div
                className={`w-20 h-20 bg-gradient-to-r ${colors.primary} rounded-full flex items-center justify-center text-3xl shadow-lg ${colors.glow}`}
              >
                ✨
              </div>
            </div>
            <h3 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
              Your AI Assistant Recommends
            </h3>
            <p className={`${colors.accent} text-lg font-medium mb-6`}>
              Unlock the full power of AI-guided discovery for your {zodiacSign}{' '}
              child
            </p>

            <div
              className={`bg-white/5 rounded-2xl p-6 border border-white/10 mb-8 max-w-3xl mx-auto`}
            >
              <div className='flex items-start gap-4'>
                <div className='text-4xl'>🤖</div>
                <div className='text-left'>
                  <p className='text-white text-lg font-medium mb-2'>
                    "Based on this analysis, I've identified{' '}
                    {topPersonalities.length > 0
                      ? topPersonalities[0][0]
                      : 'unique'}{' '}
                    traits in your child."
                  </p>
                  <p className='text-white/80 text-sm'>
                    With full access, I can provide{' '}
                    {zodiacSign.toLowerCase() === 'aries'
                      ? 'energetic and bold'
                      : zodiacSign.toLowerCase() === 'taurus'
                        ? 'steady and creative'
                        : zodiacSign.toLowerCase() === 'gemini'
                          ? 'curious and communicative'
                          : zodiacSign.toLowerCase() === 'cancer'
                            ? 'nurturing and imaginative'
                            : zodiacSign.toLowerCase() === 'leo'
                              ? 'confident and expressive'
                              : zodiacSign.toLowerCase() === 'virgo'
                                ? 'detailed and analytical'
                                : zodiacSign.toLowerCase() === 'libra'
                                  ? 'balanced and social'
                                  : zodiacSign.toLowerCase() === 'scorpio'
                                    ? 'intense and intuitive'
                                    : zodiacSign.toLowerCase() === 'sagittarius'
                                      ? 'adventurous and philosophical'
                                      : zodiacSign.toLowerCase() === 'capricorn'
                                        ? 'ambitious and structured'
                                        : zodiacSign.toLowerCase() ===
                                            'aquarius'
                                          ? 'innovative and independent'
                                          : 'empathetic and creative'}{' '}
                    activities that match their{' '}
                    {zodiacData.element.toLowerCase()} element perfectly, plus
                    track their growth over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Discovered Personality Traits */}
          {topPersonalities.length > 0 && (
            <div className='mb-10'>
              <h4 className='text-2xl font-bold text-white mb-6 text-center'>
                Key Personality Insights Discovered
              </h4>

              <div className='grid md:grid-cols-3 gap-6 mb-8'>
                {topPersonalities
                  .slice(0, 3)
                  .map(([personality, score], index) => {
                    const profile = learningProfile[personality as Personality];
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

                        <div className='text-4xl mb-3'>{profile.icon}</div>
                        <h5
                          className={`text-lg font-bold text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text capitalize mb-3`}
                        >
                          {personality}
                        </h5>
                        <p className='text-white/80 text-sm mb-4 leading-relaxed'>
                          {profile.description}
                        </p>

                        <div
                          className={`bg-white/5 rounded-lg p-3 border border-white/10`}
                        >
                          <p className='text-white text-sm font-medium'>
                            AI Confidence:{' '}
                            {Math.round(
                              (score /
                                Math.max(...Object.values(personalityScores))) *
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
          <div className='grid md:grid-cols-3 gap-6 mb-10'>
            <div
              className={`bg-white/5 rounded-2xl p-6 border border-white/10 text-center`}
            >
              <div className='text-4xl mb-4'>🎯</div>
              <h4 className='text-white font-bold mb-2'>
                Personalized Activities
              </h4>
              <p className='text-white/70 text-sm'>
                500+ activities specifically curated for {zodiacSign}{' '}
                {topPersonalities.length > 0
                  ? topPersonalities[0][0]
                  : 'children'}{' '}
                by our AI
              </p>
            </div>
            <div
              className={`bg-white/5 rounded-2xl p-6 border border-white/10 text-center`}
            >
              <div className='text-4xl mb-4'>📈</div>
              <h4 className='text-white font-bold mb-2'>
                Adaptive AI Learning
              </h4>
              <p className='text-white/70 text-sm'>
                AI continuously learns from your child's preferences and
                suggests better activities
              </p>
            </div>
            <div
              className={`bg-white/5 rounded-2xl p-6 border border-white/10 text-center`}
            >
              <div className='text-4xl mb-4'>👨‍👩‍👧‍👦</div>
              <h4 className='text-white font-bold mb-2'>Expert Support</h4>
              <p className='text-white/70 text-sm'>
                Connect with child development experts and other {zodiacSign}{' '}
                parents
              </p>
            </div>
          </div>

          {/* Single CTA */}
          <div className='text-center'>
            <button
              className={`group relative bg-gradient-to-r ${colors.primary} hover:shadow-2xl text-white font-bold py-6 px-12 rounded-2xl text-xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${colors.glow} mb-4`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${colors.primary} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              ></div>
              <span className='relative z-10 flex items-center gap-3'>
                <span>Unlock AI-Powered Discovery</span>
                <span className='text-2xl'>🚀</span>
              </span>
            </button>
            <p className='text-white/60 text-sm mb-8'>
              Start your 7-day free trial • No credit card required • Cancel
              anytime
            </p>

            {/* Secondary action link */}
            <button
              onClick={() => {
                setCurrentStep('basic-info');
                setAnswers([]);
                setCurrentQuestionIndex(0);
                setChildInfo({
                  gender: 'boy',
                  birthDate: new Date(),
                });
              }}
              className='text-white/60 hover:text-white text-sm underline transition-colors duration-200'
            >
              Try another analysis instead
            </button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className='text-center'>
          <div className='inline-flex items-center gap-6 text-white/40 text-sm'>
            <div className='flex items-center gap-2'>
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.primary}`}
              ></div>
              <span>AI-Powered Analysis</span>
            </div>
            <div className='w-px h-4 bg-white/30'></div>
            <div className='flex items-center gap-2'>
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.secondary}`}
              ></div>
              <span>Personalized for {zodiacSign}</span>
            </div>
            <div className='w-px h-4 bg-white/30'></div>
            <div className='flex items-center gap-2'>
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
