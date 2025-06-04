import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-brand-blush">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-8">
            How AI Transforms Family Discovery
          </h1>

          <div className="space-y-8 text-brand-turquoise text-lg leading-relaxed">
            <p>
              At ParentAI, we believe every child is unique, and discovering
              their potential should be both exciting and meaningful. That's why
              we've developed AI technology that goes beyond simple assessments
              to truly understand your child's individual interests, learning
              style, and developmental needs.
            </p>

            <p>
              Our intelligent AI doesn't just analyze data—it learns from your
              child's responses and interactions to suggest activities that will
              genuinely engage them. Whether your child is naturally curious,
              artistic, analytical, or active, our AI identifies these traits
              and recommends play experiences that nurture their specific
              strengths.
            </p>

            <p>
              The "magic" isn't really magic at all—it's sophisticated
              artificial intelligence working behind the scenes to create
              personalized connections between you and your child. Every
              recommendation is designed to help you discover new sides of your
              child while building stronger bonds through meaningful play.
            </p>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">
                Our AI-Powered Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-brand-mint mb-2">
                    🤖 Smart Analysis
                  </h3>
                  <p className="text-sm">
                    AI continuously learns from your child's preferences and
                    developmental patterns
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-mint mb-2">
                    🎯 Personalized Activities
                  </h3>
                  <p className="text-sm">
                    Every suggestion is tailored to your child's unique
                    personality and interests
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-mint mb-2">
                    📈 Adaptive Learning
                  </h3>
                  <p className="text-sm">
                    Our AI gets smarter over time, improving recommendations as
                    your child grows
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-mint mb-2">
                    💝 Family Connection
                  </h3>
                  <p className="text-sm">
                    Focus on building stronger relationships through AI-guided
                    discovery and play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
