import { motion } from "framer-motion";
import { FeatureIllustration } from "../illustrations/FeatureIllustration";

const features = [
  {
    title: "AI-Powered Discovery",
    description:
      "Our intelligent AI identifies your child's interests, learning style, and developmental stage to unlock new ways to connect and play together",
  },
  {
    title: "Smart Play Recommendations",
    description:
      "Get AI-curated activities that perfectly match your child's personality, ensuring every play session is engaging and meaningful",
  },
  {
    title: "Adaptive Learning Insights",
    description:
      "AI continuously learns from your interactions to suggest better activities and help you discover new aspects of your child's development",
  },
];

export const Features = () => {
  return (
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
            How AI Helps You Connect
          </h2>
          <p className="text-lg text-brand-turquoise/80">
            Our AI transforms the way you discover your child's potential and
            creates meaningful play experiences together
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
            { icon: "🤖", label: "AI-Powered Insights" },
            { icon: "🎮", label: "Smart Play Ideas" },
            { icon: "📈", label: "Growth Tracking" },
            { icon: "💝", label: "Family Bonding" },
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
  );
};
