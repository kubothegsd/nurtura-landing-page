import { motion } from "framer-motion";
import { ChildIllustration } from "../illustrations/ChildIllustration";

export const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-20 pb-16 md:pt-24 md:pb-20 flex items-center relative overflow-hidden bg-gradient-to-br from-brand-blush via-white to-brand-mint/10">
      {/* Enhanced background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-pink/20 via-brand-mint/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-brand-turquoise/20 via-brand-mint/10 to-transparent rounded-full blur-3xl"
      />

      {/* Animated patterns */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,_#000_1px,transparent_1px)] bg-[size:32px_32px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(255,255,255,0.1),transparent)]"
        />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              rotate: [0, i % 2 === 0 ? 45 : -45, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              right: `${20 + i * 25}%`,
              top: `${20 + (i % 3) * 15}%`,
            }}
          >
            <div
              className={`opacity-20 ${
                i === 0
                  ? "w-32 h-32 border-2 border-brand-mint rounded-full"
                  : i === 1
                  ? "w-24 h-24 bg-brand-turquoise/10 rounded-lg rotate-45"
                  : "w-28 h-28 border-2 border-brand-pink rounded-xl"
              }`}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-brand-mint to-brand-turquoise text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                AI-Powered Parenting Assistant
              </motion.span>
            </motion.div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold text-brand-blue leading-tight"
              >
                Discover & Play with Your Child Using{" "}
                <span className="relative inline-block">
                  AI Intelligence
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-0 left-0 h-3 bg-brand-mint/20 -z-10"
                  />
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-secondary text-brand-turquoise/80 max-w-lg"
            >
              Our AI analyzes your child's unique personality and interests to
              suggest perfect activities for meaningful discovery and play time
              together
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-mint to-brand-turquoise text-white font-primary font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start AI Discovery
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-brand-turquoise font-primary font-bold px-8 py-4"
              >
                Watch Demo
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-8"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="w-8 h-8 rounded-full border-2 border-white bg-brand-mint/20"
                  />
                ))}
              </div>
              <div className="text-sm text-brand-turquoise">
                <span className="font-bold">1000+</span> families discovering
                together with AI
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto md:mx-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChildIllustration />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 top-1/4 bg-white p-3 rounded-xl shadow-xl"
            >
              <div className="text-sm font-bold text-brand-blue">
                AI-Powered Discovery
              </div>
              <div className="text-xs text-brand-turquoise">
                Smart Play Suggestions
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-4 bottom-1/4 bg-white p-3 rounded-xl shadow-xl"
            >
              <div className="text-sm font-bold text-brand-blue">
                Tailored Activities
              </div>
              <div className="text-xs text-brand-turquoise">
                For Your Child's Growth
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
