import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const MenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={clsx(
        'md:hidden w-10 h-10',
        'flex items-center justify-center',
        'rounded-lg hover:bg-white/10',
        'transition-colors text-brand-blue'
      )}
      aria-label='Toggle menu'
    >
      <div className='w-6 h-4 relative'>
        <motion.span
          animate={{
            top: isOpen ? '50%' : '0',
            rotate: isOpen ? 45 : 0,
            translateY: isOpen ? '-50%' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute left-0 w-full h-0.5 bg-current transform-gpu'
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='absolute left-0 top-1/2 w-full h-0.5 bg-current -translate-y-1/2 transform-gpu'
        />
        <motion.span
          animate={{
            bottom: isOpen ? '50%' : '0',
            rotate: isOpen ? -45 : 0,
            translateY: isOpen ? '50%' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute left-0 w-full h-0.5 bg-current transform-gpu'
        />
      </div>
    </motion.button>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnFirstSection, setIsOnFirstSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Check if hero section is more than 50% visible
        const isVisible =
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5;
        setIsOnFirstSection(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100',
        isOnFirstSection ? 'visible' : 'invisible'
      )}
      initial={{ y: 0 }}
      animate={{ y: isOnFirstSection ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className='max-w-screen-xl mx-auto px-4 h-20'>
        <div className='flex items-center justify-between h-full'>
          {/* Logo */}
          <Link to='/' className='font-accent text-2xl text-brand-blue'>
            <img src='/images/logo.png' alt='Nurtura' className='h-10' />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <div className='space-x-8 font-primary text-brand-blue'>
              <NavLinks />
            </div>
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={clsx(
                'absolute left-0 right-0 top-full',
                'md:hidden bg-white shadow-lg',
                'rounded-b-2xl border-t border-gray-100'
              )}
            >
              <div className='container mx-auto p-6'>
                <div className='flex flex-col gap-6'>
                  <div className='space-y-4'>
                    <NavLinks mobile onClick={() => setIsOpen(false)} />
                  </div>
                  <div className='pt-4 border-t border-gray-100'>
                    <AuthButtons />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

type LinkType = {
  href: string;
  label: string;
  to?: string;
};

const NavLinks = ({
  mobile = false,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) => {
  const links: LinkType[] = [{ href: '#features', label: 'Features' }];

  return (
    <>
      {links.map(link =>
        link.to ? (
          <Link
            key={link.label}
            to={link.to}
            onClick={onClick}
            className={clsx(
              'block font-medium',
              'text-brand-neutral/90 hover:text-brand-neutral',
              'transition-colors',
              mobile ? 'text-lg py-2' : 'inline-block'
            )}
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            href={link.href}
            onClick={onClick}
            className={clsx(
              'block font-medium',
              'text-brand-neutral/90 hover:text-brand-neutral',
              'transition-colors',
              mobile ? 'text-lg py-2' : 'inline-block'
            )}
          >
            {link.label}
          </a>
        )
      )}
    </>
  );
};

const AuthButtons = () => {
  return (
    <a
      className={clsx(
        'bg-brand-superDarkGreen',
        'text-white font-secondary font-semibold',
        'px-6 py-2',
        'rounded-full',
        'hover:shadow-xl',
        'transition-all duration-300',
        'cursor-pointer'
      )}
      href='#quiz'
    >
      GET THE QUIZZ
    </a>
  );
};
