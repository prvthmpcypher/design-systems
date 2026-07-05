import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: number;
}

const sections = [
  'Home',
  'Collections',
  'Travel',
  'Portraits',
  'Awards',
  'Behind The Lens',
  'Contact',
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.portfolio-section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex items-center justify-between mix-blend-difference"
      >
        <motion.div
          className="text-white tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Lens
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:opacity-70 transition-opacity"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(index)}
                className={`block w-full text-center tracking-[0.2em] uppercase transition-all ${
                  activeSection === index
                    ? 'text-white opacity-100'
                    : 'text-gray-500 opacity-60 hover:text-white hover:opacity-100'
                }`}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
