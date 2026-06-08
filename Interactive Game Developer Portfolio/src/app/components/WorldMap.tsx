import { motion } from 'motion/react';
import { Map, User, Zap, Briefcase, Trophy, Mail, Lock, MapPin } from 'lucide-react';

interface WorldMapProps {
  onSelectArea: (section: any) => void;
  unlockedSections: Set<string>;
  onUnlock: (section: any) => void;
}

export function WorldMap({ onSelectArea, unlockedSections, onUnlock }: WorldMapProps) {
  const areas = [
    {
      id: 'character',
      name: 'Character Hall',
      icon: User,
      x: '20%',
      y: '30%',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'skills',
      name: 'Skill Temple',
      icon: Zap,
      x: '50%',
      y: '20%',
      color: 'from-purple-500 to-pink-500',
      requirement: 'Complete Character Hall',
    },
    {
      id: 'projects',
      name: 'Mission District',
      icon: Briefcase,
      x: '75%',
      y: '35%',
      color: 'from-green-500 to-emerald-500',
      requirement: 'Unlock Skill Temple',
    },
    {
      id: 'achievements',
      name: 'Trophy Realm',
      icon: Trophy,
      x: '65%',
      y: '65%',
      color: 'from-yellow-500 to-amber-500',
      requirement: 'Complete first mission',
    },
    {
      id: 'contact',
      name: 'Communication Tower',
      icon: Mail,
      x: '30%',
      y: '70%',
      color: 'from-red-500 to-rose-500',
      requirement: 'Explore all areas',
    },
  ];

  const handleAreaClick = (areaId: string) => {
    if (unlockedSections.has(areaId)) {
      onSelectArea(areaId);
    } else {
      const canUnlock = Math.random() > 0.3;
      if (canUnlock) {
        onUnlock(areaId);
      }
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-12rem)] bg-gradient-to-br from-slate-900/50 to-purple-900/50 rounded-3xl border-2 border-cyan-500/30 overflow-hidden">
      {/* Map title */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-3 bg-black/80 px-6 py-3 rounded-full border-2 border-cyan-500/50">
          <Map className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            WORLD MAP
          </h2>
        </div>
      </div>

      {/* Map content */}
      <div className="relative w-full h-full">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.5)" />
            </linearGradient>
          </defs>
          <line x1="20%" y1="30%" x2="50%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="50%" y1="20%" x2="75%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="75%" y1="35%" x2="65%" y2="65%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="20%" y1="30%" x2="30%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
        </svg>

        {/* Areas */}
        {areas.map((area, index) => {
          const Icon = area.icon;
          const isUnlocked = unlockedSections.has(area.id);

          return (
            <motion.div
              key={area.id}
              className="absolute"
              style={{ left: area.x, top: area.y, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.button
                onClick={() => handleAreaClick(area.id)}
                className={`
                  group relative w-32 h-32 rounded-full flex items-center justify-center
                  ${isUnlocked
                    ? `bg-gradient-to-br ${area.color} shadow-2xl cursor-pointer`
                    : 'bg-slate-800 shadow-xl cursor-pointer'
                  }
                  border-4 ${isUnlocked ? 'border-white/50' : 'border-slate-600'}
                  transition-all hover:scale-110
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Pulsing ring for unlocked areas */}
                {isUnlocked && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${area.color} opacity-50`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Icon */}
                <div className="relative z-10">
                  {isUnlocked ? (
                    <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                  ) : (
                    <Lock className="w-12 h-12 text-slate-500" />
                  )}
                </div>

                {/* Area name */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-bold
                    ${isUnlocked
                      ? 'bg-black/80 text-white border border-cyan-500/50'
                      : 'bg-slate-900/80 text-slate-500 border border-slate-700'
                    }
                  `}>
                    {area.name}
                  </div>
                  {!isUnlocked && area.requirement && (
                    <div className="text-xs text-slate-400 text-center mt-1">
                      {area.requirement}
                    </div>
                  )}
                </div>

                {/* Map pin indicator */}
                {isUnlocked && (
                  <motion.div
                    className="absolute -top-6"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MapPin className="w-6 h-6 text-cyan-400 drop-shadow-lg" />
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <div className="bg-black/80 px-6 py-3 rounded-full border border-cyan-500/30">
          <p className="text-sm text-cyan-400">
            Click on areas to explore • Complete quests to unlock new regions
          </p>
        </div>
      </div>
    </div>
  );
}
