import { motion } from "framer-motion";

interface IllustrationProps {
  bgColor?: string;
  accentColor?: string;
}

export const ChildIllustration = ({
  bgColor = "bg-brand-mint",
  accentColor = "bg-brand-turquoise",
}: IllustrationProps) => {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-pink/20 via-brand-mint/10 to-brand-turquoise/20 rounded-full blur-2xl" />
      </motion.div>

      <div
        className={`relative ${bgColor} rounded-3xl p-6 aspect-[4/3] max-h-[400px] overflow-hidden backdrop-blur-sm bg-opacity-90 shadow-lg`}
      >
        {/* Animated patterns */}
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
            className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#ffffff_20%,_#ffffff_80%,_transparent_80%,_transparent)_0px_0px/20px_20px]"
          />
        </div>

        {/* Floating elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 right-0 w-3/4"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`${accentColor} h-24 w-24 rounded-full absolute -top-12 -right-12 opacity-20 blur-sm`}
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className={`${accentColor} h-20 w-20 rounded-full absolute top-8 -left-8 opacity-15 blur-sm`}
          />

          {/* Additional decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/5 rounded-full"
          />
        </motion.div>

        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
