import { motion } from 'motion/react';

interface XPBarProps {
  current: number;
  max: number;
}

export function XPBar({ current, max }: XPBarProps) {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className="flex items-center gap-2">
      <div className="w-64 h-6 bg-slate-900/80 rounded-full border-2 border-cyan-500/50 overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-lg">
          {current} / {max} XP
        </div>
      </div>
    </div>
  );
}
