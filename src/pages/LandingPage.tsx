import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { Quiz } from '../components/landing/Quiz';
import { Community } from '../components/landing/Community';
import { StayConnected } from '../components/landing/StayConnected';
import { useEffect, useRef } from 'react';

const LandingPage = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const isScrollingRef = useRef(false);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    // Add CSS for smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      body {
        overflow-x: hidden;
      }
    `;
    document.head.appendChild(style);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollingRef.current) return;

      const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

      // Find current section
      const currentSectionIndex = sectionsRef.current.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSectionIndex === -1) return;

      let targetSectionIndex: number;

      if (
        scrollDirection === 'down' &&
        currentSectionIndex < sectionsRef.current.length - 1
      ) {
        targetSectionIndex = currentSectionIndex + 1;
      } else if (scrollDirection === 'up' && currentSectionIndex > 0) {
        targetSectionIndex = currentSectionIndex - 1;
      } else {
        return;
      }

      const targetSection = sectionsRef.current[targetSectionIndex];
      if (!targetSection) return;

      isScrollingRef.current = true;

      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return;

      const currentSectionIndex = sectionsRef.current.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSectionIndex === -1) return;

      let targetSectionIndex: number;

      if (
        e.key === 'ArrowDown' &&
        currentSectionIndex < sectionsRef.current.length - 1
      ) {
        targetSectionIndex = currentSectionIndex + 1;
      } else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
        targetSectionIndex = currentSectionIndex - 1;
      } else {
        return;
      }

      const targetSection = sectionsRef.current[targetSectionIndex];
      if (!targetSection) return;

      e.preventDefault();
      isScrollingRef.current = true;

      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Initialize sections ref after a short delay to ensure DOM is ready
    setTimeout(() => {
      sectionsRef.current = [
        document.getElementById('hero')!,
        document.getElementById('features')!,
        document.getElementById('quiz')!,
        document.getElementById('community')!,
        document.getElementById('stay-connected')!,
      ].filter(Boolean);
    }, 100);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='w-full bg-[linear-gradient(90deg,#FFFFFF_0%,#EFFEF6_60%,#FECDDA_100%)]'>
      {/* Hero Section */}
      <section
        id='hero'
        ref={el => {
          if (el) sectionsRef.current[0] = el;
        }}
      >
        <Hero />
      </section>

      {/* Features Section */}
      <section
        id='features'
        ref={el => {
          if (el) sectionsRef.current[1] = el;
        }}
      >
        <Features />
      </section>

      {/* Quiz Section - Simplified */}
      <section
        id='quiz'
        ref={el => {
          if (el) sectionsRef.current[2] = el;
        }}
      >
        <Quiz />
      </section>

      <section
        id='community'
        ref={el => {
          if (el) sectionsRef.current[3] = el;
        }}
      >
        <Community />
      </section>

      <section
        id='stay-connected'
        ref={el => {
          if (el) sectionsRef.current[4] = el;
        }}
      >
        <StayConnected />
      </section>
    </div>
  );
};

export default LandingPage;
