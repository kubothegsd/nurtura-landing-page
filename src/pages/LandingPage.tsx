import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { Quiz } from '../components/landing/Quiz';
import { CTA } from '../components/landing/CTA';

const LandingPage = () => {
  return (
    <div className='w-full bg-[linear-gradient(90deg,#FFFFFF_0%,#EFFEF6_60%,#FECDDA_100%)]'>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Quiz Section - Simplified */}
      <Quiz />

      {/* Call to Action */}
      <CTA />
    </div>
  );
};

export default LandingPage;
