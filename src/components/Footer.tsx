import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer
      className={clsx(
        'w-full',
        'flex items-center justify-between',
        'py-8',
        'px-4',
        'bg-transparent',
        'text-brand-neutral',
        'text-sm',
        'font-secondary',
        'relative',
        'max-w-screen-xl mx-auto'
      )}
      style={{ minHeight: '60px' }}
    >
      {/* Left: Contact */}
      <div className='flex flex-col md:flex-row items-center gap-1 md:gap-2'>
        <span className='text-brand-green'>Contact us:</span>
        <a
          href='mailto:hi@getnurtura.com'
          className='font-bold underline text-brand-neutral hover:text-brand-pink transition'
        >
          hi@getnurtura.com
        </a>
      </div>
      {/* Center: Logo */}
      <div className='flex flex-col items-center'>
        <img
          src='/images/logoText.svg'
          alt='nurtura logo'
          className='w-24 h-auto mb-1 select-none pointer-events-none'
        />
      </div>
      {/* Right: Copyright */}
      <div className='text-right text-xs md:text-sm text-brand-neutral'>
        © 2019 Lift Media. All rights reserved.
      </div>
    </footer>
  );
};
