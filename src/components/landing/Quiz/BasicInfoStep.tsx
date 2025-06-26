import React from 'react';
import clsx from 'clsx';

interface ChildInfo {
  gender: 'boy' | 'girl';
  birthDate: Date;
}

type QuizStep = 'basic-info' | 'zodiac-info' | 'results';

interface BasicInfoStepProps {
  childInfo: ChildInfo;
  setChildInfo: (childInfo: ChildInfo) => void;
  setCurrentStep: (step: QuizStep) => void;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  childInfo,
  setChildInfo,
  setCurrentStep,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear - i); // 0-5 years old
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get days in selected month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const selectedMonth = childInfo.birthDate.getMonth();
  const selectedYear = childInfo.birthDate.getFullYear();
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  const updateBirthDate = (field: 'month' | 'day' | 'year', value: number) => {
    const newDate = new Date(childInfo.birthDate);

    if (field === 'month') {
      newDate.setMonth(value);
      // Adjust day if it's invalid for the new month
      const maxDays = getDaysInMonth(value, newDate.getFullYear());
      if (newDate.getDate() > maxDays) {
        newDate.setDate(maxDays);
      }
    } else if (field === 'day') {
      newDate.setDate(value);
    } else if (field === 'year') {
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
    <div
      className={clsx(
        'min-h-screen',
        'bg-[url("/images/quiz-bg-1.jpg")] bg-cover bg-center bg-no-repeat',
        'flex items-center justify-center p-6'
      )}
    >
      <div
        className={clsx(
          'max-w-screen-md w-full',
          'bg-[#0E1A4F]/80 backdrop-blur-sm',
          'rounded-2xl p-8',
          'shadow-xl',
          'space-y-8',
          'md:p-10'
        )}
      >
        {/* Header Section */}
        <div className={clsx('rounded-xl p-6 mb-2', 'bg-white/0')}>
          <div className='flex flex-col items-center mb-2'>
            <img
              src='/images/question.svg'
              className='h-16 w-16 mb-8'
              alt='Question mark'
            />
            <h2 className='text-3xl font-bold text-white mb-1'>
              <span className='text-pink-400'>Discover</span>
              <span className='text-white'> Your </span>
              <span className='text-yellow-300'>Little Star</span>
            </h2>
          </div>
          <p className='text-yellow-300 text-center text-lg font-secondary font-light'>
            Every child has a cosmic essence. Let's explore yours. Tell us who
            they are and when they arrived, and watch Nurtura reveal a
            personalized guide to their potential.
          </p>
        </div>

        {/* Form Section */}
        <div className={clsx('rounded-xl p-6', 'bg-white/0', 'space-y-6')}>
          <div>
            <label className='block text-[#FFB71A] font-semibold text-center mb-4 text-lg'>
              Is your little one a boy or girl?
            </label>
            <div className='grid grid-cols-2 gap-4'>
              {(['boy', 'girl'] as const).map(gender => (
                <button
                  key={gender}
                  onClick={() => setChildInfo({ ...childInfo, gender })}
                  className={clsx(
                    'py-4 px-4 rounded-xl font-semibold text-lg',
                    'transition-all duration-300',
                    childInfo.gender === gender
                      ? 'bg-blue-900/80 text-white border-[2px] border-yellow-300 shadow-lg'
                      : 'bg-blue-900/40 text-white border-[2px] border-blue-200/30 hover:bg-blue-900/60'
                  )}
                >
                  {gender === 'boy' ? 'Boy' : 'Girl'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className='block text-[#FFB71A] font-semibold text-center mb-4 text-lg'>
              Date of birth
            </label>
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <label className='block text-blue-100 text-xs mb-2 text-center tracking-wide uppercase'>
                  Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={e =>
                    updateBirthDate('month', parseInt(e.target.value))
                  }
                  className={clsx(
                    'w-full px-3 py-3 rounded-xl',
                    'bg-blue-900/40 border border-blue-200/30',
                    'text-white focus:outline-none',
                    'focus:ring-2 focus:ring-yellow-300 focus:border-transparent',
                    'appearance-none cursor-pointer text-base text-center'
                  )}
                >
                  {months.map((month, index) => (
                    <option
                      key={index}
                      value={index}
                      className='bg-blue-900 text-white'
                    >
                      {String(index + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-blue-100 text-xs mb-2 text-center tracking-wide uppercase'>
                  Day
                </label>
                <select
                  value={childInfo.birthDate.getDate()}
                  onChange={e =>
                    updateBirthDate('day', parseInt(e.target.value))
                  }
                  className={clsx(
                    'w-full px-3 py-3 rounded-xl',
                    'bg-blue-900/40 border border-blue-200/30',
                    'text-white focus:outline-none',
                    'focus:ring-2 focus:ring-yellow-300 focus:border-transparent',
                    'appearance-none cursor-pointer text-base text-center'
                  )}
                >
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                    day => (
                      <option
                        key={day}
                        value={day}
                        className='bg-blue-900 text-white'
                      >
                        {String(day).padStart(2, '0')}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <label className='block text-blue-100 text-xs mb-2 text-center tracking-wide uppercase'>
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={e =>
                    updateBirthDate('year', parseInt(e.target.value))
                  }
                  className={clsx(
                    'w-full px-3 py-3 rounded-xl',
                    'bg-blue-900/40 border border-blue-200/30',
                    'text-white focus:outline-none',
                    'focus:ring-2 focus:ring-yellow-300 focus:border-transparent',
                    'appearance-none cursor-pointer text-base text-center'
                  )}
                >
                  {years.map(year => (
                    <option
                      key={year}
                      value={year}
                      className='bg-blue-900 text-white'
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className='flex justify-center'>
          <button
            onClick={() => setCurrentStep('zodiac-info')}
            className={clsx(
              'bg-yellow-400 hover:bg-yellow-500',
              'text-blue-900 font-bold',
              'py-3 px-8 rounded-xl',
              'shadow-lg border-2 border-yellow-300',
              'transition-all duration-300',
              'text-lg',
              'w-full max-w-xs',
              'focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2'
            )}
          >
            Reveal My Star Guide
          </button>
        </div>
      </div>
    </div>
  );
};
