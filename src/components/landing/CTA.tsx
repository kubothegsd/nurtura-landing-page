import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className='w-full bg-gradient-to-br from-brand-mint via-brand-turquoise to-brand-blue py-24 md:py-32 relative overflow-hidden'>
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className='absolute inset-0 opacity-30'
      >
        <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-brand-turquoise rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-pink rounded-full blur-3xl' />
      </motion.div>

      {/* Floating shapes */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{
              y: [0, -100, 0],
              x: [0, i % 2 === 0 ? 100 : -100, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute'
            style={{
              left: `${20 + i * 30}%`,
              top: `${40 + (i % 2) * 20}%`,
            }}
          >
            <div className='w-32 h-32 border-4 border-white/10 rounded-full' />
          </motion.div>
        ))}
      </div>

      {/* Animated dots grid */}
      <div className='absolute inset-0 w-full h-full opacity-10'>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_2px,transparent_2px)] bg-[size:40px_40px]'
        />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto text-center'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl'
          >
            <span className='inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8'>
              Start Your AI-Powered Journey
            </span>

            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
              Ready to Unlock Your Child's Potential with AI?
            </h2>
            <p className='font-accent text-2xl text-white/90 mb-12'>
              Join thousands of families discovering new ways to connect and
              play together using AI insights
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-brand-turquoise font-primary font-bold px-8 py-4 rounded-full hover:bg-brand-blush hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto'
              >
                Start AI Discovery
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-transparent border-2 border-white text-white font-primary font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto'
              >
                See AI in Action
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className='mt-12 pt-8 border-t border-white/20'>
              <p className='text-white/80 text-sm mb-8'>
                Trusted by families worldwide for AI-powered discovery and play
              </p>

              {/* Stats */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-10'>
                {[
                  { number: '10k+', label: 'Families Using AI' },
                  { number: '95%', label: 'Better Connections' },
                  { number: '500+', label: 'AI-Curated Activities' },
                  { number: '24/7', label: 'AI Learning' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className='text-center'
                  >
                    <div className='text-white font-bold text-2xl mb-1'>
                      {stat.number}
                    </div>
                    <div className='text-white/60 text-sm'>{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Reviews */}
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {[
                  { rating: '4.9', source: 'App Store' },
                  { rating: '4.8', source: 'Play Store' },
                  { rating: '4.9', source: 'Trustpilot' },
                ].map((review, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className='flex items-center gap-2 bg-white/5 rounded-full px-4 py-2'
                  >
                    <div className='flex gap-1'>
                      {[...Array(5)].map((_, j) => (
                        <motion.svg
                          key={j}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.2 + j * 0.1 }}
                          className='w-4 h-4 text-yellow-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </motion.svg>
                      ))}
                    </div>
                    <span className='text-white font-bold'>
                      {review.rating}
                    </span>
                    <span className='text-white/60 text-sm'>
                      on {review.source}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Partner logos */}
              <div className='flex justify-center items-center gap-8 opacity-50 grayscale'>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className='w-8 h-8 bg-white/40 rounded-full'
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
          className='absolute w-1 h-1 bg-white rounded-full'
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 5) * 15}%`,
          }}
        />
      ))}
    </section>
  );
};
