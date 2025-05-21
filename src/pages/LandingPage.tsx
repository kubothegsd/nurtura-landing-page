import { motion } from "framer-motion";
import { ChildIllustration } from "../components/illustrations/ChildIllustration";
import { FeatureIllustration } from "../components/illustrations/FeatureIllustration";
import { QuizPreview } from "../components/QuizPreview";

const LandingPage = () => {
  return (
    <div className="w-full bg-brand-blush">
      {/* Hero Section */}
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
                  Understand Your Child Better with{" "}
                  <span className="relative inline-block">
                    AI
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
                Discover your child's unique personality and get personalized
                activity recommendations tailored to their development
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
                  Start Your Journey
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
                  <span className="font-bold">1000+</span> happy parents
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
                  AI-Powered
                </div>
                <div className="text-xs text-brand-turquoise">
                  Smart Analysis
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-4 bottom-1/4 bg-white p-3 rounded-xl shadow-xl"
              >
                <div className="text-sm font-bold text-brand-blue">
                  Personalized
                </div>
                <div className="text-xs text-brand-turquoise">
                  For Your Child
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="w-full bg-white py-28 md:py-36 relative overflow-hidden"
      >
        {/* Simplified background pattern */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%"],
            }}
            transition={{
              duration: 90, // Much slower animation
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_48%,#000_49%,#000_51%,transparent_52%)] bg-[length:100px_100px]"
          />
        </div>

        {/* Single subtle gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-mint/5 via-brand-turquoise/5 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-4 relative">
          {/* Simplified header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="inline-block bg-brand-mint/10 text-brand-mint px-4 py-2 rounded-full text-sm font-medium mb-6">
              Simple & Effective
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              How It Works
            </h2>
            <p className="text-lg text-brand-turquoise/80">
              Our AI-powered platform makes understanding and nurturing your
              child's development simple and enjoyable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
            {/* Simplified connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 hidden md:block bg-gradient-to-r from-brand-mint/20 via-brand-turquoise/20 to-brand-pink/20" />

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Only animate once
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }} // Reduced hover movement
                className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-brand-turquoise/10 hover:shadow-xl"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-brand-mint to-brand-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Feature illustration */}
                <div className="relative h-32 mb-8 rounded-xl p-4 transition-colors duration-300 group-hover:bg-gradient-to-br from-brand-blush/30 to-transparent">
                  <FeatureIllustration
                    type={
                      index === 0
                        ? "analysis"
                        : index === 1
                        ? "activities"
                        : "progress"
                    }
                  />
                </div>

                <h3 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-brand-mint transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-secondary text-brand-turquoise/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Simplified additional features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { icon: "🎯", label: "Personalized Path" },
              { icon: "🔄", label: "Regular Updates" },
              { icon: "📊", label: "Progress Tracking" },
              { icon: "🤝", label: "Expert Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm text-brand-turquoise">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section - Simplified */}
      <section
        id="quiz"
        className="w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-32 md:py-40 relative overflow-hidden"
      >
        {/* Simplified background */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-indigo-300/20 to-transparent blur-3xl"
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Interactive Assessment
            </span>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Try a Quick Assessment
            </h2>
            <p className="text-xl text-purple-700/70 max-w-2xl mx-auto">
              Get a glimpse of how our AI understands your child
            </p>

            {/* Simplified feature points */}
            <div className="flex justify-center gap-12 mt-12">
              {[
                { icon: "⚡️", label: "Takes 5 Minutes" },
                { icon: "🎯", label: "Personalized Insights" },
                { icon: "🔒", label: "Private & Secure" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-purple-700/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quiz preview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-100">
              <QuizPreview />
            </div>
          </motion.div>

          {/* Start button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.02 }} // Reduced scale effect
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Start Free Assessment
            </motion.button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gradient-to-br from-brand-mint via-brand-turquoise to-brand-blue py-24 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-turquoise rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-pink rounded-full blur-3xl" />
        </motion.div>

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden">
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
                ease: "linear",
              }}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${40 + (i % 2) * 20}%`,
              }}
            >
              <div className="w-32 h-32 border-4 border-white/10 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Animated dots grid */}
        <div className="absolute inset-0 w-full h-full opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_2px,transparent_2px)] bg-[size:40px_40px]"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                Start Your Journey Today
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Better Understand Your Child?
              </h2>
              <p className="font-accent text-2xl text-white/90 mb-12">
                Join thousands of happy parents on this journey
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-turquoise font-primary font-bold px-8 py-4 rounded-full hover:bg-brand-blush hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  Get Started Free
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-primary font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Watch Demo
                </motion.button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm mb-8">
                  Trusted by parents worldwide
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { number: "10k+", label: "Active Parents" },
                    { number: "95%", label: "Satisfaction Rate" },
                    { number: "50+", label: "Activities" },
                    { number: "24/7", label: "AI Support" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-white font-bold text-2xl mb-1">
                        {stat.number}
                      </div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Reviews */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {[
                    { rating: "4.9", source: "App Store" },
                    { rating: "4.8", source: "Play Store" },
                    { rating: "4.9", source: "Trustpilot" },
                  ].map((review, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"
                    >
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <motion.svg
                            key={j}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.2 + j * 0.1 }}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                      <span className="text-white font-bold">
                        {review.rating}
                      </span>
                      <span className="text-white/60 text-sm">
                        on {review.source}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Partner logos */}
                <div className="flex justify-center items-center gap-8 opacity-50 grayscale">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="w-8 h-8 bg-white/40 rounded-full"
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
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 5) * 15}%`,
            }}
          />
        ))}
      </section>
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Our advanced AI helps identify your child's personality traits and learning style",
  },
  {
    title: "Personalized Activities",
    description:
      "Get custom-tailored activities that match your child's interests and development stage",
  },
  {
    title: "Track Progress",
    description:
      "Monitor your child's development and adjust activities for optimal growth",
  },
];

export default LandingPage;
