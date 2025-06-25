import { ChildIllustration } from '../illustrations/ChildIllustration';
import clsx from 'clsx';

export const Hero = () => {
  return (
    <section
      className={clsx(
        'min-h-[calc(100vh-80px)]',
        'flex items-center',
        'overflow-hidden'
      )}
    >
      <div
        className='absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/2 w-[600px] h-[600px] rounded-full'
        style={{
          backgroundColor: '#FFD988',
          opacity: '0.2',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div>
            <h1
              className={clsx(
                'font-primary text-6xl',
                'font-bold text-brand-pink',
                'leading-tight'
              )}
            >
              Spark Curiosity
            </h1>

            <h1
              className={clsx(
                'font-primary text-6xl',
                'font-bold text-brand-darkGreen',
                'leading-tight'
              )}
            >
              Ignite Play
            </h1>

            <p className='text-xl font-primary text-brand-neutral my-8'>
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
                  'transition-all duration-300'
                )}
              >
                Start your journey
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className='relative w-full max-w-lg mx-auto md:mx-0'>
            <div className={clsx('absolute -left-20 -bottom-20 z-1')}>
              <img src='/images/flower.svg' alt='flower' />
            </div>

            <ChildIllustration />

            {/* Floating badges */}
            <div
              className={clsx(
                'absolute -left-20 top-12 z-3',
                'px-8 py-2',
                'rounded-xl',
                'bg-[#FFF4EFCC]/80',
                'border-2 border-[#FDC7AD52]',
                'drop-shadow-[0_10px_25px_#EB5A3540]'
              )}
            >
              <div className='text-xl font-bold text-brand-orange leading-normal'>
                Tailored for
                <br />
                Every Child
              </div>
            </div>

            <div
              className={clsx(
                'absolute -right-20 bottom-12 z-3',
                'px-8 py-2',
                'rounded-xl',
                'bg-[#FFF4EFCC]/80',
                'border-2 border-[#FDC7AD52]',
                'drop-shadow-[0_10px_25px_#EB5A3540]'
              )}
            >
              <div className='text-xl font-bold text-brand-orange leading-normal'>
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
