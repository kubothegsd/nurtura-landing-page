import { motion } from "framer-motion";
import { QuizPreview } from "./QuizPreview";

export const Quiz = () => {
  return (
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
                <span className="text-sm text-purple-700/70">{item.label}</span>
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
  );
};
