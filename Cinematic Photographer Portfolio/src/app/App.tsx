import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import TravelStories from './components/TravelStories';
import PortraitWork from './components/PortraitWork';
import Awards from './components/Awards';
import BehindTheLens from './components/BehindTheLens';
import Contact from './components/Contact';
import FilmGrain from './components/FilmGrain';
import Navigation from './components/Navigation';
import CursorEffect from './components/CursorEffect';
import Vignette from './components/Vignette';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll('.portfolio-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden cursor-none md:cursor-none">
      <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      <FilmGrain />
      <Vignette />
      <CursorEffect />
      <ScrollProgress />
      <Navigation activeSection={activeSection} />

      <div className="portfolio-section">
        <Hero />
      </div>

      <div className="portfolio-section">
        <FeaturedCollections />
      </div>

      <div className="portfolio-section">
        <TravelStories />
      </div>

      <div className="portfolio-section">
        <PortraitWork />
      </div>

      <div className="portfolio-section">
        <Awards />
      </div>

      <div className="portfolio-section">
        <BehindTheLens />
      </div>

      <div className="portfolio-section">
        <Contact />
      </div>
    </div>
  );
}
