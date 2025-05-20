import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 229, 229, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgb(0, 100, 148)", "rgb(17, 138, 178)"]
  );
  const height = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);

  return (
    <motion.header
      style={{ backgroundColor, height }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="font-accent text-2xl">
          <motion.span style={{ color: textColor }}>ParentAI</motion.span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <motion.div
            style={{ color: textColor }}
            className="space-x-8 font-primary"
          >
            <Link to="/about" className="hover:opacity-80 transition-opacity">
              About
            </Link>
            <a href="#features" className="hover:opacity-80 transition-opacity">
              Features
            </a>
            <a href="#quiz" className="hover:opacity-80 transition-opacity">
              Quiz
            </a>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-mint text-white px-6 py-2 rounded-full hover:bg-brand-turquoise-light transition-colors"
          >
            Get Started
          </motion.button>
        </div>

        <button className="md:hidden text-brand-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};
