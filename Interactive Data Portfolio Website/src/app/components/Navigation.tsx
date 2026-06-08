import { motion } from 'motion/react';
import { Telescope, Rocket, Book, FileText, Code, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: 'about', label: 'About', icon: Telescope },
  { id: 'projects', label: 'Data Projects', icon: Rocket },
  { id: 'research', label: 'Research', icon: Book },
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-3">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="relative px-4 py-2 text-sm transition-colors"
          >
            <div className="flex items-center gap-2 relative z-10">
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </div>
            {activeSection === id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-blue-500/30 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
