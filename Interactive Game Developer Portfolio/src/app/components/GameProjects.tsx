import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Star, Clock, Users, Target, Sword, Shield, Trophy, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Mission {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  status: 'available' | 'in-progress' | 'completed';
  rewards: {
    xp: number;
    gold: number;
  };
  tags: string[];
  image?: string;
  link?: string;
}

interface GameProjectsProps {
  onComplete: () => void;
}

export function GameProjects({ onComplete }: GameProjectsProps) {
  const [missions, setMissions] = useState<Mission[]>([
    {
      id: '1',
      title: 'Epic RPG Adventure',
      description: 'Developed a full-featured RPG with combat system, inventory management, and quest tracking. Features include real-time battles, character progression, and an immersive storyline.',
      difficulty: 'Legendary',
      status: 'completed',
      rewards: { xp: 1000, gold: 500 },
      tags: ['Unity', 'C#', 'Game Design'],
    },
    {
      id: '2',
      title: 'Multiplayer Battle Arena',
      description: 'Created a competitive multiplayer game with real-time networking, matchmaking system, and leaderboards. Supports up to 100 concurrent players.',
      difficulty: 'Hard',
      status: 'completed',
      rewards: { xp: 800, gold: 400 },
      tags: ['Unreal', 'Networking', 'UI/UX'],
    },
    {
      id: '3',
      title: 'Mobile Puzzle Game',
      description: 'Designed and developed an addictive puzzle game with 200+ levels, power-ups, and social features. Monetization through ads and IAP.',
      difficulty: 'Medium',
      status: 'completed',
      rewards: { xp: 600, gold: 300 },
      tags: ['React Native', 'Mobile', 'Monetization'],
    },
    {
      id: '4',
      title: 'VR Experience Platform',
      description: 'Built an immersive VR platform for educational experiences. Features spatial audio, hand tracking, and multi-user interactions.',
      difficulty: 'Legendary',
      status: 'in-progress',
      rewards: { xp: 1200, gold: 600 },
      tags: ['VR', 'Unity', 'XR'],
    },
    {
      id: '5',
      title: 'Indie Platformer',
      description: 'A retro-inspired 2D platformer with pixel art graphics, tight controls, and challenging level design. Winner of multiple indie game awards.',
      difficulty: 'Medium',
      status: 'completed',
      rewards: { xp: 700, gold: 350 },
      tags: ['2D', 'Pixel Art', 'Level Design'],
    },
    {
      id: '6',
      title: 'AI-Powered Strategy Game',
      description: 'Developed advanced AI opponents using machine learning. Features procedural generation and emergent gameplay.',
      difficulty: 'Hard',
      status: 'available',
      rewards: { xp: 900, gold: 450 },
      tags: ['AI', 'Strategy', 'Procedural'],
    },
  ]);

  const difficultyConfig = {
    Easy: { color: 'from-green-500 to-emerald-500', icon: Target, stars: 1 },
    Medium: { color: 'from-yellow-500 to-amber-500', icon: Sword, stars: 2 },
    Hard: { color: 'from-orange-500 to-red-500', icon: Shield, stars: 3 },
    Legendary: { color: 'from-purple-500 to-pink-500', icon: Trophy, stars: 5 },
  };

  const handleMissionAction = (missionId: string) => {
    setMissions(prev => prev.map(m => {
      if (m.id === missionId) {
        if (m.status === 'available') {
          return { ...m, status: 'in-progress' };
        } else if (m.status === 'in-progress') {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
          onComplete();
          return { ...m, status: 'completed' };
        }
      }
      return m;
    }));
  };

  const getStatusColor = (status: Mission['status']) => {
    switch (status) {
      case 'available': return 'border-cyan-500 bg-cyan-500/10';
      case 'in-progress': return 'border-yellow-500 bg-yellow-500/10';
      case 'completed': return 'border-green-500 bg-green-500/10';
    }
  };

  const getButtonText = (status: Mission['status']) => {
    switch (status) {
      case 'available': return 'Start Mission';
      case 'in-progress': return 'Complete Mission';
      case 'completed': return 'Completed';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full">
          <Briefcase className="w-6 h-6" />
          <h1 className="text-3xl font-bold">MISSION BOARD</h1>
        </div>
        <p className="text-slate-400 mt-2">Epic quests and legendary projects</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Completed', value: missions.filter(m => m.status === 'completed').length, color: 'green' },
          { label: 'In Progress', value: missions.filter(m => m.status === 'in-progress').length, color: 'yellow' },
          { label: 'Available', value: missions.filter(m => m.status === 'available').length, color: 'cyan' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-gradient-to-br from-slate-900/90 to-${stat.color}-900/30 p-4 rounded-xl border-2 border-${stat.color}-500/30 text-center`}
          >
            <div className={`text-3xl font-bold text-${stat.color}-400`}>{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Missions Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {missions.map((mission, index) => {
          const config = difficultyConfig[mission.difficulty];
          const DifficultyIcon = config.icon;

          return (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                bg-gradient-to-br from-slate-900/90 to-purple-900/30 rounded-2xl border-2
                ${getStatusColor(mission.status)} overflow-hidden
              `}
            >
              {/* Mission Header */}
              <div className="p-6 space-y-4">
                {/* Title and Difficulty */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{mission.title}</h3>
                    <div className="flex items-center gap-2">
                      <DifficultyIcon className="w-4 h-4" />
                      <span className={`text-sm bg-gradient-to-r ${config.color} bg-clip-text text-transparent font-semibold`}>
                        {mission.difficulty}
                      </span>
                      <div className="flex gap-1">
                        {Array.from({ length: config.stars }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {mission.status === 'completed' && (
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300">{mission.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {mission.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-800/50 rounded-md text-xs text-cyan-400 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rewards */}
                <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">
                      <span className="text-cyan-400 font-bold">{mission.rewards.xp}</span> XP
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">
                      <span className="text-yellow-400 font-bold">{mission.rewards.gold}</span> Gold
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleMissionAction(mission.id)}
                  disabled={mission.status === 'completed'}
                  className={`
                    w-full py-3 rounded-lg font-bold transition-all
                    ${mission.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 cursor-default'
                      : mission.status === 'in-progress'
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:scale-105'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105'
                    }
                  `}
                >
                  {getButtonText(mission.status)}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
