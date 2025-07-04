import clsx from 'clsx';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

export const StayConnected = () => {
  return (
    <section
      className={clsx(
        'w-full',
        'flex items-center justify-center',
        'relative',
        'py-8 sm:py-12 md:py-16',
        'overflow-hidden',
        'bg-[linear-gradient(90deg,#EFFEF6_0%,#EFFEF6_60%,#FECDDA_100%)]'
      )}
    >
      {/* Left Flower */}
      <img
        src='/images/logoBig.svg'
        alt='flower left'
        className='hidden md:block absolute left-0 bottom-0 w-32 h-auto sm:w-48 pointer-events-none select-none'
      />
      {/* Right Flower (flipped) */}
      <img
        src='/images/logoBig.svg'
        alt='flower right'
        className='hidden md:block absolute right-0 top-0 w-32 h-auto sm:w-48 pointer-events-none select-none rotate-180'
      />
      <div className='max-w-screen-lg mx-auto relative px-4'>
        <div className='mx-auto w-full text-center z-10 px-4'>
          <div className='font-primary font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-brand-neutral'>
            Stay Connected
          </div>
          <div className='text-brand-neutral text-sm sm:text-base font-secondary mb-4 sm:mb-6'>
            Follow <span className='font-bold'>@NurturaApp</span> on social
            media for your first glimpse at new features, playful activity
            ideas, and insider tips—plus sneak peeks at the magic we're building
            next.
          </div>
          <div className='flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='text-brand-green hover:text-brand-pink text-xl sm:text-2xl transition'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='text-brand-green hover:text-brand-pink text-xl sm:text-2xl transition'
            >
              <FaInstagram />
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='YouTube'
              className='text-brand-green hover:text-brand-pink text-xl sm:text-2xl transition'
            >
              <FaYoutube />
            </a>
            <a
              href='https://www.threads.net'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Threads'
              className='text-brand-green hover:text-brand-pink text-xl sm:text-2xl transition'
            >
              <SiThreads />
            </a>
            <a
              href='https://tiktok.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='TikTok'
              className='text-brand-green hover:text-brand-pink text-xl sm:text-2xl transition'
            >
              <FaTiktok />
            </a>
          </div>
          <div className='text-brand-neutral text-sm sm:text-base font-secondary'>
            Stay tuned for the most exciting parenting hacks and announcements!
          </div>
        </div>
      </div>
    </section>
  );
};
