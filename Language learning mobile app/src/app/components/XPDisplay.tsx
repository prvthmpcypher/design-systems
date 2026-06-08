import { motion } from "motion/react";
import { Star } from "lucide-react";

interface XPDisplayProps {
  xp: number;
  level: number;
  xpToNextLevel: number;
}

export function XPDisplay({ xp, level, xpToNextLevel }: XPDisplayProps) {
  const progress = (xp / xpToNextLevel) * 100;

  return (
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
      >
        <Star className="w-6 h-6 text-white" fill="white" />
      </motion.div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-700">Level {level}</span>
          <span className="text-xs text-gray-500">{xp} / {xpToNextLevel} XP</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
          />
        </div>
      </div>
    </div>
  );
}
