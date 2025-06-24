import { ChildIllustration } from '../illustrations/ChildIllustration';
import clsx from 'clsx';

export const Hero = () => {
  return (
    <section
      className={clsx(
        'min-h-screen',
        'flex items-center',
        'overflow-hidden',
        'bg-gradient-to-br from-brand-blush via-white to-brand-mint/10'
      )}
    >
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div>
            <h1
              className={clsx(
                'text-5xl font-primary md:text-6xl',
                'font-bold text-brand-pink',
                'leading-tight'
              )}
            >
              Spark Curiosity
            </h1>

            <h1
              className={clsx(
                'text-5xl font-primary md:text-6xl',
                'font-bold text-brand-darkGreen',
                'leading-tight'
              )}
            >
              Ignite Play
            </h1>

            <p className='text-xl font-primary text-brand-neutral'>
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
            <ChildIllustration />

            {/* Floating badges */}
            <div
              className={clsx(
                'absolute -right-4 top-1/4',
                'bg-white p-3',
                'rounded-xl shadow-xl'
              )}
            >
              <div className='text-sm font-bold text-brand-blue'>
                AI-Powered Discovery
              </div>
              <div className='text-xs text-brand-turquoise'>
                Smart Play Suggestions
              </div>
            </div>

            <div
              className={clsx(
                'absolute -left-4 bottom-1/4',
                'bg-white p-3',
                'rounded-xl shadow-xl'
              )}
            >
              <div className='text-sm font-bold text-brand-blue'>
                Tailored Activities
              </div>
              <div className='text-xs text-brand-turquoise'>
                For Your Child's Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
