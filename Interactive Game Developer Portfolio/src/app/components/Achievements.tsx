import { motion } from 'motion/react';
import { Trophy, Star, Zap, Target, Award, Crown, Gem, Sparkles, Lock } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  points: number;
}

interface AchievementsProps {
  level: number;
  xp: number;
}

export function Achievements({ level, xp }: AchievementsProps) {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first project',
      icon: Star,
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      rarity: 'Common',
      points: 10,
    },
    {
      id: '2',
      title: 'Level Master',
      description: 'Reach level 10',
      icon: Crown,
      unlocked: level >= 10,
      progress: Math.min(level, 10),
      maxProgress: 10,
      rarity: 'Rare',
      points: 25,
    },
    {
      id: '3',
      title: 'XP Collector',
      description: 'Earn 10,000 total XP',
      icon: Zap,
      unlocked: xp >= 10000,
      progress: Math.min(xp, 10000),
      maxProgress: 10000,
      rarity: 'Epic',
      points: 50,
    },
    {
      id: '4',
      title: 'Code Warrior',
      description: 'Master 5 programming languages',
      icon: Target,
      unlocked: true,
      progress: 5,
      maxProgress: 5,
      rarity: 'Rare',
      points: 30,
    },
    {
      id: '5',
      title: 'Game Designer',
      description: 'Complete 10 game projects',
      icon: Award,
      unlocked: false,
      progress: 6,
      maxProgress: 10,
      rarity: 'Epic',
      points: 75,
    },
    {
      id: '6',
      title: 'Legendary Developer',
      description: 'Complete a legendary difficulty project',
      icon: Trophy,
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      rarity: 'Legendary',
      points: 100,
    },
    {
      id: '7',
      title: 'Skill Tree Master',
      description: 'Unlock all skills',
      icon: Gem,
      unlocked: false,
      progress: 9,
      maxProgress: 13,
      rarity: 'Legendary',
      points: 150,
    },
    {
      id: '8',
      title: 'Explorer',
      description: 'Visit all areas on the world map',
      icon: Sparkles,
      unlocked: false,
      progress: 2,
      maxProgress: 6,
      rarity: 'Common',
      points: 15,
    },
  ];

  const rarityConfig = {
    Common: { color: 'from-slate-500 to-slate-600', glow: 'slate' },
    Rare: { color: 'from-blue-500 to-cyan-500', glow: 'blue' },
    Epic: { color: 'from-purple-500 to-pink-500', glow: 'purple' },
    Legendary: { color: 'from-yellow-500 to-amber-500', glow: 'yellow' },
  };

  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  const maxPoints = achievements.reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-3 rounded-full">
          <Trophy className="w-6 h-6" />
          <h1 className="text-3xl font-bold">ACHIEVEMENTS</h1>
        </div>
        <p className="text-slate-400 mt-2">Unlock legendary accomplishments</p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-slate-900/90 to-yellow-900/30 p-6 rounded-xl border-2 border-yellow-500/30 text-center"
        >
          <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-yellow-400">{unlockedCount}/{achievements.length}</div>
          <div className="text-sm text-slate-400">Unlocked</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 p-6 rounded-xl border-2 border-purple-500/30 text-center"
        >
          <Star className="w-12 h-12 text-purple-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-purple-400">{totalPoints}</div>
          <div className="text-sm text-slate-400">Achievement Points</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-slate-900/90 to-cyan-900/30 p-6 rounded-xl border-2 border-cyan-500/30 text-center"
        >
          <Gem className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-cyan-400">
            {Math.round((unlockedCount / achievements.length) * 100)}%
          </div>
          <div className="text-sm text-slate-400">Completion</div>
        </motion.div>
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const config = rarityConfig[achievement.rarity];
          const progressPercent = (achievement.progress / achievement.maxProgress) * 100;

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`
                relative bg-gradient-to-br from-slate-900/90 to-purple-900/30 p-5 rounded-xl border-2
                ${achievement.unlocked
                  ? `border-${config.glow}-500/50 shadow-lg shadow-${config.glow}-500/20`
                  : 'border-slate-700 opacity-60'
                }
                overflow-hidden
              `}
            >
              {/* Rarity glow effect */}
              {achievement.unlocked && (
                <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-10`} />
              )}

              <div className="relative z-10 flex gap-4">
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0
                  ${achievement.unlocked
                    ? `bg-gradient-to-br ${config.color}`
                    : 'bg-slate-800'
                  }
                `}>
                  {achievement.unlocked ? (
                    <Icon className="w-8 h-8 text-white" />
                  ) : (
                    <Lock className="w-8 h-8 text-slate-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  {/* Title and Points */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold">{achievement.title}</h3>
                      <p className="text-xs text-slate-400">{achievement.description}</p>
                    </div>
                    <div className={`
                      px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap
                      bg-gradient-to-r ${config.color} bg-clip-text text-transparent
                    `}>
                      {achievement.points} pts
                    </div>
                  </div>

                  {/* Rarity Badge */}
                  <div className={`
                    inline-block px-2 py-0.5 rounded text-xs font-semibold
                    bg-gradient-to-r ${config.color}
                  `}>
                    {achievement.rarity}
                  </div>

                  {/* Progress Bar */}
                  {!achievement.unlocked && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Progress</span>
                        <span>{achievement.progress}/{achievement.maxProgress}</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-slate-900/90 to-yellow-900/30 p-6 rounded-2xl border-2 border-yellow-500/30"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-yellow-400">Overall Progress</h3>
          <span className="text-2xl font-bold text-yellow-400">{totalPoints}/{maxPoints}</span>
        </div>
        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600"
            initial={{ width: 0 }}
            animate={{ width: `${(totalPoints / maxPoints) * 100}%` }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <div className="w-full h-full bg-white/20 animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
