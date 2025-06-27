import clsx from 'clsx';

export const Hero = () => {
  return (
    <section
      className={clsx(
        'min-h-screen',
        'flex items-center justify-center',
        'overflow-hidden',
        'px-4 py-6 md:py-8'
      )}
    >
      <div
        className='absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/2 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[600px] rounded-full'
        style={{
          backgroundColor: '#FFD988',
          opacity: '0.2',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <div className='max-w-screen-xl mx-auto w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center'>
          {/* Content */}
          <div className='order-2 md:order-1 text-center md:text-left'>
            <h1
              className={clsx(
                'font-primary',
                'font-bold text-brand-pink',
                'leading-tight',
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
              )}
            >
              Spark Curiosity
            </h1>

            <h1
              className={clsx(
                'font-primary',
                'font-bold text-brand-darkGreen',
                'leading-tight',
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
              )}
            >
              Ignite Play
            </h1>

            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-primary text-brand-neutral my-4 md:my-6 lg:my-8 max-w-lg mx-auto md:mx-0'>
              Meet Nurtura, your AI-powered companion that learns your child's
              unique spark and delivers daily activities designed for growth,
              connection, and joy.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start'>
              <a
                className={clsx(
                  'bg-brand-superDarkGreen',
                  'font-bold text-white font-secondary',
                  'px-6 md:px-8 py-3 md:py-4',
                  'rounded-full',
                  'shadow-lg hover:shadow-xl',
                  'transition-all duration-300',
                  'w-full sm:w-auto',
                  'cursor-pointer',
                  'z-10'
                )}
                href='#quiz'
              >
                Start your journey
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className='relative w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto md:mx-0 order-1 md:order-2'>
            <div
              className={clsx(
                'absolute -left-2 sm:-left-4 md:-left-10 lg:-left-20 -bottom-4 sm:-bottom-8 md:-bottom-12 lg:-bottom-20 z-1 w-16 sm:w-24 md:w-32 lg:w-auto'
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
              <div className='relative aspect-[4/3] w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto'>
                <div
                  className='absolute inset-0 w-full h-full overflow-hidden rounded-2xl md:rounded-3xl'
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
                'absolute left-1 sm:left-2 md:-left-10 lg:-left-20 top-1 sm:top-2 md:top-8 lg:top-12 z-3',
                'px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2',
                'rounded-lg md:rounded-xl',
                'bg-[#FFF4EFCC]/80',
                'border-2 border-[#FDC7AD52]',
                'drop-shadow-[0_10px_25px_#EB5A3540]'
              )}
            >
              <div className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-brand-orange leading-tight'>
                Tailored for
                <br />
                Every Child
              </div>
            </div>

            <div
              className={clsx(
                'absolute right-1 sm:right-2 md:-right-10 lg:-right-20 bottom-1 sm:bottom-2 md:bottom-8 lg:bottom-12 z-3',
                'px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2',
                'rounded-lg md:rounded-xl',
                'bg-[#FFF4EFCC]/80',
                'border-2 border-[#FDC7AD52]',
                'drop-shadow-[0_10px_25px_#EB5A3540]'
              )}
            >
              <div className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-brand-orange leading-tight'>
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
