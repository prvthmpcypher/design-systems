import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { PublicationsSection } from './components/sections/PublicationsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = {
    about: <AboutSection />,
    projects: <ProjectsSection />,
    research: <ResearchSection />,
    publications: <PublicationsSection />,
    skills: <SkillsSection />,
    contact: <ContactSection />,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Cosmic background */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#030712] via-[#0a0e27] to-[#030712]"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Animated nebula effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          }}
        />
      </div>

      {/* Star field */}
      <StarField />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Main content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {sections[activeSection as keyof typeof sections]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating data particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Cursor glow effect */}
      <motion.div
        className="fixed w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x * 50 + window.innerWidth / 2,
          top: mousePosition.y * 50 + window.innerHeight / 2,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
