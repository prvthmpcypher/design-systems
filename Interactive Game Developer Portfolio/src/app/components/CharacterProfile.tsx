import { motion } from 'motion/react';
import { User, Code, Gamepad2, Palette, Brain, Cpu } from 'lucide-react';

interface CharacterProfileProps {
  level: number;
  xp: number;
  onAddXP: (amount: number) => void;
}

export function CharacterProfile({ level, xp, onAddXP }: CharacterProfileProps) {
  const stats = [
    { name: 'Coding Power', value: 95, color: 'from-cyan-500 to-blue-500', icon: Code },
    { name: 'Game Design', value: 88, color: 'from-purple-500 to-pink-500', icon: Gamepad2 },
    { name: 'Creativity', value: 92, color: 'from-green-500 to-emerald-500', icon: Palette },
    { name: 'Problem Solving', value: 90, color: 'from-yellow-500 to-amber-500', icon: Brain },
    { name: 'Technical Skills', value: 93, color: 'from-red-500 to-rose-500', icon: Cpu },
  ];

  const attributes = [
    { label: 'Class', value: 'Game Developer' },
    { label: 'Specialization', value: 'Full-Stack Wizard' },
    { label: 'Experience', value: '5+ Years' },
    { label: 'Title', value: 'Code Architect' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-full">
          <User className="w-6 h-6" />
          <h1 className="text-3xl font-bold">CHARACTER PROFILE</h1>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Character Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-slate-900/90 to-purple-900/50 p-6 rounded-2xl border-2 border-cyan-500/30"
        >
          <div className="text-center space-y-4">
            {/* Avatar */}
            <div className="relative inline-block">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <User className="w-20 h-20 text-cyan-400" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-500 px-4 py-1 rounded-full border-2 border-white">
                <span className="text-sm font-bold">LVL {level}</span>
              </div>
            </div>

            {/* Name */}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                GAME DEVELOPER
              </h2>
              <p className="text-slate-400">Master of Code & Creativity</p>
            </div>

            {/* Attributes */}
            <div className="space-y-2 text-left bg-black/30 p-4 rounded-xl">
              {attributes.map(attr => (
                <div key={attr.label} className="flex justify-between items-center">
                  <span className="text-slate-400">{attr.label}:</span>
                  <span className="text-cyan-400 font-semibold">{attr.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-slate-900/90 to-blue-900/50 p-6 rounded-2xl border-2 border-purple-500/30 space-y-4"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-purple-300">CHARACTER STATS</h3>

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold">{stat.name}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">{stat.value}</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                  >
                    <div className="w-full h-full bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-slate-900/90 to-cyan-900/50 p-6 rounded-2xl border-2 border-cyan-500/30"
      >
        <h3 className="text-xl font-bold mb-4 text-cyan-300">BACKSTORY</h3>
        <p className="text-slate-300 leading-relaxed">
          A seasoned warrior in the realm of game development, wielding the power of code to bring
          immersive worlds to life. With expertise spanning from pixel-perfect UI design to complex
          gameplay mechanics, this developer has conquered countless technical challenges and delivered
          AAA-quality experiences. Their journey through the digital frontier continues, always seeking
          the next epic quest.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center gap-4"
      >
        <button
          onClick={() => onAddXP(100)}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg"
        >
          Complete Daily Quest (+100 XP)
        </button>
      </motion.div>
    </div>
  );
}
