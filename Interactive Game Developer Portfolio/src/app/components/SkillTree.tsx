import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Palette, Zap, Gamepad2, Database, Cloud, Shield, Cpu, Lock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Skill {
  id: string;
  name: string;
  description: string;
  icon: any;
  unlocked: boolean;
  level: number;
  maxLevel: number;
  requires?: string[];
  category: string;
  color: string;
}

interface SkillTreeProps {
  onUnlock: () => void;
}

export function SkillTree({ onUnlock }: SkillTreeProps) {
  const [skills, setSkills] = useState<Skill[]>([
    // Programming Skills
    { id: 'js', name: 'JavaScript', description: 'Master of modern JavaScript', icon: Code, unlocked: true, level: 5, maxLevel: 5, category: 'programming', color: 'from-yellow-500 to-amber-500' },
    { id: 'ts', name: 'TypeScript', description: 'Type-safe development', icon: Code, unlocked: true, level: 5, maxLevel: 5, requires: ['js'], category: 'programming', color: 'from-blue-500 to-cyan-500' },
    { id: 'react', name: 'React', description: 'UI component mastery', icon: Code, unlocked: true, level: 5, maxLevel: 5, requires: ['js'], category: 'programming', color: 'from-cyan-500 to-blue-500' },
    { id: 'node', name: 'Node.js', description: 'Backend development', icon: Cpu, unlocked: true, level: 4, maxLevel: 5, requires: ['js'], category: 'programming', color: 'from-green-500 to-emerald-500' },

    // Design Skills
    { id: 'ui', name: 'UI Design', description: 'Beautiful interfaces', icon: Palette, unlocked: true, level: 5, maxLevel: 5, category: 'design', color: 'from-purple-500 to-pink-500' },
    { id: 'ux', name: 'UX Design', description: 'User experience expert', icon: Palette, unlocked: true, level: 4, maxLevel: 5, requires: ['ui'], category: 'design', color: 'from-pink-500 to-rose-500' },
    { id: 'animation', name: 'Animation', description: 'Motion design', icon: Zap, unlocked: false, level: 0, maxLevel: 5, requires: ['ui'], category: 'design', color: 'from-violet-500 to-purple-500' },

    // Game Development
    { id: 'unity', name: 'Unity', description: 'Game engine mastery', icon: Gamepad2, unlocked: true, level: 4, maxLevel: 5, category: 'gamedev', color: 'from-slate-600 to-slate-800' },
    { id: 'unreal', name: 'Unreal Engine', description: 'AAA development', icon: Gamepad2, unlocked: false, level: 0, maxLevel: 5, requires: ['unity'], category: 'gamedev', color: 'from-blue-600 to-blue-800' },
    { id: 'gameplay', name: 'Gameplay Design', description: 'Mechanics & systems', icon: Gamepad2, unlocked: true, level: 5, maxLevel: 5, category: 'gamedev', color: 'from-orange-500 to-red-500' },

    // Backend & Infrastructure
    { id: 'db', name: 'Databases', description: 'SQL & NoSQL', icon: Database, unlocked: true, level: 4, maxLevel: 5, requires: ['node'], category: 'backend', color: 'from-teal-500 to-cyan-500' },
    { id: 'cloud', name: 'Cloud Services', description: 'AWS, Azure, GCP', icon: Cloud, unlocked: false, level: 0, maxLevel: 5, requires: ['db'], category: 'backend', color: 'from-sky-500 to-blue-500' },
    { id: 'security', name: 'Security', description: 'Secure coding practices', icon: Shield, unlocked: true, level: 3, maxLevel: 5, category: 'backend', color: 'from-red-500 to-rose-500' },
  ]);

  const categories = [
    { id: 'programming', name: 'Programming', color: 'cyan' },
    { id: 'design', name: 'Design', color: 'purple' },
    { id: 'gamedev', name: 'Game Dev', color: 'orange' },
    { id: 'backend', name: 'Backend', color: 'teal' },
  ];

  const handleUnlock = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    if (!skill) return;

    if (!skill.unlocked && canUnlock(skill)) {
      setSkills(prev => prev.map(s =>
        s.id === skillId ? { ...s, unlocked: true, level: 1 } : s
      ));
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      onUnlock();
    } else if (skill.unlocked && skill.level < skill.maxLevel) {
      setSkills(prev => prev.map(s =>
        s.id === skillId ? { ...s, level: s.level + 1 } : s
      ));
      onUnlock();
    }
  };

  const canUnlock = (skill: Skill) => {
    if (!skill.requires) return true;
    return skill.requires.every(reqId => {
      const reqSkill = skills.find(s => s.id === reqId);
      return reqSkill?.unlocked;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full">
          <Zap className="w-6 h-6" />
          <h1 className="text-3xl font-bold">SKILL TREE</h1>
        </div>
        <p className="text-slate-400 mt-2">Unlock and upgrade your abilities</p>
      </motion.div>

      {/* Categories */}
      {categories.map((category, catIndex) => {
        const categorySkills = skills.filter(s => s.category === category.id);

        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 p-6 rounded-2xl border-2 border-purple-500/30"
          >
            <h3 className={`text-xl font-bold mb-6 text-${category.color}-400`}>
              {category.name.toUpperCase()}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categorySkills.map((skill, index) => {
                const Icon = skill.icon;
                const isLocked = !skill.unlocked && !canUnlock(skill);
                const canLevelUp = skill.unlocked && skill.level < skill.maxLevel;

                return (
                  <motion.button
                    key={skill.id}
                    onClick={() => handleUnlock(skill.id)}
                    disabled={isLocked}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: isLocked ? 1 : 1.05 }}
                    whileTap={{ scale: isLocked ? 1 : 0.95 }}
                    className={`
                      relative p-4 rounded-xl border-2 transition-all text-left
                      ${skill.unlocked
                        ? `bg-gradient-to-br ${skill.color} border-white/30 shadow-lg`
                        : canUnlock(skill)
                          ? 'bg-slate-800 border-cyan-500/50 hover:border-cyan-500 cursor-pointer'
                          : 'bg-slate-900/50 border-slate-700 cursor-not-allowed opacity-50'
                      }
                    `}
                  >
                    {/* Unlock status */}
                    <div className="absolute top-2 right-2">
                      {skill.unlocked ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <Lock className="w-5 h-5 text-slate-500" />
                      )}
                    </div>

                    {/* Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`
                        w-12 h-12 rounded-lg flex items-center justify-center
                        ${skill.unlocked ? 'bg-white/20' : 'bg-slate-800'}
                      `}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold">{skill.name}</h4>
                        <p className="text-xs text-slate-300">{skill.description}</p>
                      </div>
                    </div>

                    {/* Level indicator */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Level {skill.level}/{skill.maxLevel}</span>
                        {canLevelUp && <span className="text-cyan-400">Click to upgrade</span>}
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: skill.maxLevel }).map((_, i) => (
                          <div
                            key={i}
                            className={`
                              h-1.5 flex-1 rounded-full
                              ${i < skill.level
                                ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                                : 'bg-slate-700'
                              }
                            `}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    {!skill.unlocked && skill.requires && (
                      <div className="mt-2 text-xs text-slate-400">
                        Requires: {skill.requires.map(reqId => {
                          const req = skills.find(s => s.id === reqId);
                          return req?.name;
                        }).join(', ')}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
