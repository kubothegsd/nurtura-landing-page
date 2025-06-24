import React from 'react';

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
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6'>
      <div className='max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl'>
        <div className='text-center mb-6'>
          <span className='text-4xl block mb-4'>🌙</span>
          <h2 className='text-2xl font-bold text-white mb-2'>
            Tell Us About Your Little Star
          </h2>
          <p className='text-purple-200'>
            Every AI analysis begins with understanding who they are...
          </p>
        </div>

        <div className='space-y-6'>
          <div>
            <label className='block text-purple-100 font-medium mb-2'>
              Their cosmic essence
            </label>
            <div className='grid grid-cols-2 gap-3'>
              {(['boy', 'girl'] as const).map(gender => (
                <button
                  key={gender}
                  onClick={() => setChildInfo({ ...childInfo, gender })}
                  className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    childInfo.gender === gender
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-purple-100 hover:bg-white/20'
                  }`}
                >
                  {gender === 'boy' ? '👦' : '👧'}{' '}
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className='block text-purple-100 font-medium mb-3'>
              When did this star enter our world?
            </label>
            <div className='grid grid-cols-3 gap-3'>
              <div>
                <label className='block text-purple-200 text-sm mb-2'>
                  Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={e =>
                    updateBirthDate('month', parseInt(e.target.value))
                  }
                  className='w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none cursor-pointer text-sm'
                >
                  {months.map((month, index) => (
                    <option
                      key={index}
                      value={index}
                      className='bg-purple-800 text-white'
                    >
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-purple-200 text-sm mb-2'>
                  Day
                </label>
                <select
                  value={childInfo.birthDate.getDate()}
                  onChange={e =>
                    updateBirthDate('day', parseInt(e.target.value))
                  }
                  className='w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none cursor-pointer text-sm'
                >
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                    day => (
                      <option
                        key={day}
                        value={day}
                        className='bg-purple-800 text-white'
                      >
                        {day}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className='block text-purple-200 text-sm mb-2'>
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={e =>
                    updateBirthDate('year', parseInt(e.target.value))
                  }
                  className='w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent appearance-none cursor-pointer text-sm'
                >
                  {years.map(year => (
                    <option
                      key={year}
                      value={year}
                      className='bg-purple-800 text-white'
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className='text-purple-300 text-xs mt-2 text-center'>
              {childInfo.birthDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <button
            onClick={() => setCurrentStep('zodiac-info')}
            className='w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg'
          >
            Start AI Analysis 🌟
          </button>
        </div>
      </div>
    </div>
  );
};
