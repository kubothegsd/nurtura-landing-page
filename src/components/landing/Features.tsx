import clsx from 'clsx';

const mainFeatures = [
  {
    title: 'Personalized Activity Feed',
    description:
      "Your child's daily playbook, curated by AI to match their age, interests, and energy—click, play, and watch them thrive.",
    logoUrl: '/images/crown.svg',
  },
  {
    title: 'Developmental Milestone Tracker',
    description:
      "Instant bar charts and radar visuals show what's on track, what needs a nudge, and how to celebrate every win.",
    logoUrl: '/images/cask.svg',
  },
  {
    title: 'Adaptive Insights',
    description:
      "Smart nudges and trend—based tips that evolve with your child's progress—always the right next step.",
    logoUrl: '/images/pass.svg',
  },
];

const additionalFeatures = [
  {
    title: 'Mindful Parenting Corner',
    logoUrl: '/images/star.svg',
  },
  {
    title: 'Smart Reports',
    logoUrl: '/images/rubik.svg',
  },
  {
    title: 'Science-Backed Advice',
    logoUrl: '/images/sword.svg',
  },
];

export const Features = () => {
  return (
    <section
      className={clsx(
        'w-full bg-[#F8F8F8]',
        'min-h-screen',
        'flex items-center',
        'overflow-hidden relative'
      )}
    >
      <div className='absolute top-10 sm:top-20 left-4 sm:left-20'>
        <img
          src='/images/rocket.svg'
          alt='rocket decoration'
          className='w-12 h-12 sm:w-24 sm:h-24'
        />
      </div>
      <div className='absolute top-10 sm:top-20 right-4 sm:right-20'>
        <img
          src='/images/rainbow.svg'
          alt='rainbow decoration'
          className='w-12 h-12 sm:w-24 sm:h-24'
        />
      </div>
      <div className='absolute bottom-20 sm:bottom-40 left-4 sm:left-20'>
        <img
          src='/images/earth.svg'
          alt='earth decoration'
          className='w-20 h-20 sm:w-32 sm:h-32'
        />
      </div>
      <div className='absolute bottom-20 sm:bottom-40 right-2 sm:right-10'>
        <img
          src='/images/field.svg'
          alt='field decoration'
          className='w-32 h-32 sm:w-48 sm:h-48'
        />
      </div>

      <div className='max-w-screen-xl mx-auto relative py-8 sm:py-12 px-4'>
        <div className='flex justify-center mb-8 sm:mb-12'>
          <div
            className={clsx(
              'inline-block',
              'px-4 sm:px-6',
              'py-2',
              'rounded-full',
              'border',
              'border-[#FFD7C2]',
              'bg-[#FFF9F6]',
              'text-brand-neutral',
              'font-bold',
              'text-base sm:text-lg',
              'shadow-sm'
            )}
          >
            Our features
          </div>
        </div>

        <div className='text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-primary font-bold'>
          <span className='text-brand-green'>How</span>
          <span className='text-brand-yellow'> it</span>
          <span className='text-brand-pink'> works</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto relative'>
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                'bg-white/70',
                'backdrop-blur-sm',
                'hover:border-2 hover:border-[#FFF1D5] hover:-m-[2px]',
                'rounded-xl sm:rounded-2xl',
                'p-4 sm:p-6',
                'shadow-xl',
                'flex flex-col items-center',
                'text-center',
                'relative'
              )}
            >
              <img
                src={feature.logoUrl}
                alt={feature.title + ' icon'}
                className={clsx(
                  'w-10 h-10 sm:w-14 sm:h-14',
                  'my-4 sm:my-8',
                  'mx-auto'
                )}
              />
              <h4
                className={clsx(
                  'text-lg sm:text-xl',
                  'font-primary',
                  'font-bold',
                  'text-brand-orange',
                  'mb-2',
                  'mt-2'
                )}
              >
                {feature.title}
              </h4>
              <p
                className={clsx(
                  'text-brand-neutral',
                  'text-sm sm:text-base font-normal leading-relaxed',
                  'font-secondary'
                )}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simplified additional features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto relative mt-6 sm:mt-8'>
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                'bg-white/70',
                'backdrop-blur-sm',
                'hover:border-2 hover:border-[#FFF1D5] hover:-m-[2px]',
                'rounded-xl sm:rounded-2xl',
                'p-3 sm:p-4',
                'shadow-xl',
                'flex flex-col items-center',
                'text-center',
                'relative'
              )}
            >
              <div className='flex items-center justify-center gap-2 sm:gap-4'>
                <img
                  src={feature.logoUrl}
                  alt={feature.title + ' icon'}
                  className={clsx('w-8 h-8 sm:w-14 sm:h-14')}
                />

                <h4
                  className={clsx(
                    'text-sm sm:text-lg',
                    'font-primary',
                    'font-bold',
                    'text-brand-orange',
                    'mb-2',
                    'mt-2'
                  )}
                >
                  {feature.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
