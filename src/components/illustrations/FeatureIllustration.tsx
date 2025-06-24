import { motion } from 'framer-motion';

interface FeatureIllustrationProps {
  type: 'analysis' | 'activities' | 'progress';
  className?: string;
}

export const FeatureIllustration = ({
  type,
  className = '',
}: FeatureIllustrationProps) => {
  const illustrations = {
    analysis: (
      <>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='absolute w-16 h-16 bg-brand-pink rounded-full top-4 right-4 opacity-20'
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute w-20 h-20 bg-brand-turquoise rounded-lg bottom-4 left-4 opacity-30'
        />
      </>
    ),
    activities: (
      <>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute w-12 h-12 bg-brand-mint rounded-full top-6 left-6 opacity-25'
        />
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className='absolute w-16 h-16 bg-brand-sand rounded-lg bottom-6 right-6 opacity-20'
        />
      </>
    ),
    progress: (
      <>
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className='absolute w-14 h-14 bg-brand-turquoise-light rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25'
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className='absolute w-24 h-24 border-4 border-brand-blush rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'
        />
      </>
    ),
  };

  return (
    <div className={`relative h-full w-full ${className}`}>
      {illustrations[type]}
    </div>
  );
};
