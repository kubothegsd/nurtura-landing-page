import clsx from 'clsx';

export const Hero = () => {
  return (
    <section
      className={clsx(
        'min-h-screen',
        'flex items-center',
        'overflow-x-hidden',
        'px-4 py-8 md:py-0'
      )}
    >
      <div
        className='absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full'
        style={{
          backgroundColor: '#FFD988',
          opacity: '0.2',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <div className='max-w-screen-xl mx-auto w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Content */}
          <div className='order-2 md:order-1'>
            <h1
              className={clsx(
                'font-primary',
                'font-bold text-brand-pink',
                'leading-tight',
                'text-4xl sm:text-5xl md:text-6xl'
              )}
            >
              Spark Curiosity
            </h1>

            <h1
              className={clsx(
                'font-primary',
                'font-bold text-brand-darkGreen',
                'leading-tight',
                'text-4xl sm:text-5xl md:text-6xl'
              )}
            >
              Ignite Play
            </h1>

            <p className='text-base sm:text-lg md:text-xl font-primary text-brand-neutral my-6 md:my-8'>
              Meet Nurtura, your AI-powered companion that learns your child's
              unique spark and delivers daily activities designed for growth,
              connection, and joy.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                className={clsx(
                  'bg-brand-superDarkGreen',
                  'font-bold text-white font-secondary',
                  'px-8 py-4',
                  'rounded-full',
                  'shadow-lg hover:shadow-xl',
                  'transition-all duration-300',
                  'w-full sm:w-auto'
                )}
              >
                Start your journey
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0 order-1 md:order-2'>
            <div
              className={clsx(
                'absolute -left-4 sm:-left-10 md:-left-20 -bottom-8 sm:-bottom-12 md:-bottom-20 z-1 w-24 sm:w-32 md:w-auto'
              )}
            >
              <img
                src='/images/flower.svg'
                alt='flower'
                className='w-full h-auto'
              />
            </div>

            {/* <ChildIllustration /> */}
            <div className='relative z-2'>
              <div className='relative aspect-[4/3] w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto'>
                <div
                  className='absolute inset-0 w-full h-full overflow-hidden rounded-3xl'
                  style={{
                    backgroundImage: "url('/images/baby.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className={clsx(
                'absolute left-2 sm:-left-10 md:-left-20 top-2 sm:top-8 md:top-12 z-3',
                'px-4 sm:px-6 md:px-8 py-2',
                'rounded-xl',
                'bg-[#FFF4EFCC]/80',
                'border-2 border-[#FDC7AD52]',
                'drop-shadow-[0_10px_25px_#EB5A3540]'
              )}
            >
              <div className='text-base sm:text-lg md:text-xl font-bold text-brand-orange leading-normal'>
                Tailored for
                <br />
                Every Child
              </div>
            </div>

            <div
              className={clsx(
                'absolute right-2 sm:-right-10 md:-right-20 bottom-2 sm:bottom-8 md:bottom-12 z-3',
                'px-4 sm:px-6 md:px-8 py-2',
                'rounded-xl',
                'bg-[#FFF4EFCC]/80',
                'border-2 border-[#FDC7AD52]',
                'drop-shadow-[0_10px_25px_#EB5A3540]'
              )}
            >
              <div className='text-base sm:text-lg md:text-xl font-bold text-brand-orange leading-normal'>
                AI-Driven <br />
                Play Ideas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
