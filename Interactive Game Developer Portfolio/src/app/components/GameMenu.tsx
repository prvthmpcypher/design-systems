import { Map, User, Zap, Briefcase, Trophy, Mail, Lock } from 'lucide-react';

interface GameMenuProps {
  currentSection: string;
  unlockedSections: Set<string>;
  onNavigate: (section: any) => void;
}

export function GameMenu({ currentSection, unlockedSections, onNavigate }: GameMenuProps) {
  const menuItems = [
    { id: 'map', icon: Map, label: 'World Map' },
    { id: 'character', icon: User, label: 'Character' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Missions' },
    { id: 'achievements', icon: Trophy, label: 'Achievements' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="flex gap-2">
      {menuItems.map(item => {
        const Icon = item.icon;
        const isUnlocked = unlockedSections.has(item.id);
        const isActive = currentSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => isUnlocked && onNavigate(item.id)}
            disabled={!isUnlocked}
            className={`
              px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2
              ${isActive
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                : isUnlocked
                  ? 'bg-slate-800/80 text-white hover:bg-slate-700 border border-cyan-500/30'
                  : 'bg-slate-900/50 text-slate-600 cursor-not-allowed border border-slate-700'
              }
            `}
          >
            {isUnlocked ? <Icon className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            <span className="hidden md:inline">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
