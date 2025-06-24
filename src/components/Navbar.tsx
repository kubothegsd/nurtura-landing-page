import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      className='md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-brand-blue'
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='relative z-50 bg-transparent'>
      <nav className='container mx-auto px-4 h-20'>
        <div className='flex items-center justify-between h-full'>
          {/* Logo */}
          <Link to='/' className='font-accent text-2xl text-brand-blue'>
            ParentAI
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
              className='absolute left-0 right-0 top-full md:hidden bg-white shadow-lg rounded-b-2xl border-t border-gray-100'
            >
              <div className='container mx-auto p-6'>
                <div className='flex flex-col gap-6'>
                  <div className='space-y-4'>
                    <NavLinks mobile onClick={() => setIsOpen(false)} />
                  </div>
                  <div className='pt-4 border-t border-gray-100'>
                    <AuthButtons mobile />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const NavLinks = ({
  mobile = false,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) => {
  const links = [
    { to: '/about', label: 'About' },
    { href: '#features', label: 'Features' },
    { to: '/quiz', label: 'Quiz' },
  ];

  return (
    <>
      {links.map(link =>
        link.to ? (
          <Link
            key={link.label}
            to={link.to}
            onClick={onClick}
            className={`block font-medium text-brand-blue/90 hover:text-brand-blue transition-colors ${
              mobile ? 'text-lg py-2' : 'inline-block'
            }`}
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            href={link.href}
            onClick={onClick}
            className={`block font-medium text-brand-blue/90 hover:text-brand-blue transition-colors ${
              mobile ? 'text-lg py-2' : 'inline-block'
            }`}
          >
            {link.label}
          </a>
        )
      )}
    </>
  );
};

const AuthButtons = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-brand-mint text-white px-6 py-3 rounded-full hover:bg-brand-turquoise-light transition-colors shadow-sm hover:shadow ${
        mobile ? 'w-full text-center text-lg' : ''
      }`}
    >
      Get Started
    </motion.button>
  );
};
