import clsx from 'clsx';
import { useState } from 'react';

const benefits = [
  {
    text: 'First Look Access to our AI-driven play plans and milestone dashboard',
    border: 'border-t-4 border-[#3FE184]', // green
  },
  {
    text: "Founders' Launch Discount—lock in special pricing for life",
    border: 'border-t-4 border-[#FFD25F]', // yellow
  },
  {
    text: 'VIP Community Badge—show off your role in shaping Nurtura',
    border: 'border-t-4 border-[#FF5F8F]', // pink
  },
];

export const Community = () => {
  const [email, setEmail] = useState('');

  return (
    <section
      id='community'
      className={clsx(
        'w-full bg-[#FFF2D9]',
        'min-h-screen',
        'flex items-center',
        'overflow-hidden relative'
      )}
    >
      <div className='max-w-screen-xl mx-auto w-full py-16 px-4'>
        <div className='text-center mb-4 text-4xl font-primary font-bold'>
          <span className='text-brand-yellow'>Join </span>
          <span className='text-brand-neutral'>the </span>
          <span className='text-brand-green'>Nurtura </span>
          <span className='text-brand-pink'>Community</span>
        </div>
        <div className='text-center text-brand-neutral text-base font-secondary mb-10 max-w-xl mx-auto'>
          Become one of the first families to experience AI-powered,
          science-backed parenting support—before anyone else.
        </div>

        <div className='text-center font-primary font-bold text-xl mb-8'>
          Sign up now and you'll get:
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto'>
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={clsx(
                'bg-white',
                'rounded-xl',
                'shadow-md',
                'p-6',
                'text-center',
                benefit.border
              )}
            >
              <span className='text-brand-neutral text-base font-secondary'>
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        <div className='text-center font-primary font-bold text-xl mb-4'>
          Join the Waitlist
        </div>
        <form
          className='max-w-xl mx-auto w-full'
          onSubmit={e => {
            e.preventDefault();
            // handle submit
          }}
        >
          <div className='relative flex items-center'>
            <input
              type='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email'
              className={clsx(
                'w-full',
                'rounded-full',
                'border-2 border-[#3FE184]',
                'px-6 py-3',
                'pr-45', // space for button
                'outline-none',
                'text-base',
                'bg-white',
                'transition focus:border-[#FFD25F]'
              )}
            />
            <button
              type='submit'
              className={clsx(
                'absolute right-2 top-1/2 -translate-y-1/2',
                'rounded-full',
                'bg-brand-superDarkGreen',
                'text-white',
                'font-bold',
                'px-6 py-2',
                'shadow',
                'transition',
                'border-2 border-brand-superDarkGreen',
                'text-base',
                'whitespace-nowrap'
              )}
            >
              Explore us now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
