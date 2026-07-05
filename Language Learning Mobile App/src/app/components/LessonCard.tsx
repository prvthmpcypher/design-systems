import { motion } from "motion/react";
import { Lock, Check, Star } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  isLocked: boolean;
  isCompleted: boolean;
  starsEarned?: number;
  totalStars?: number;
  xpReward: number;
  icon: string;
  color: string;
  onClick: () => void;
}

export function LessonCard({
  title,
  description,
  isLocked,
  isCompleted,
  starsEarned = 0,
  totalStars = 3,
  xpReward,
  icon,
  color,
  onClick,
}: LessonCardProps) {
  return (
    <motion.button
      whileHover={{ scale: isLocked ? 1 : 1.02 }}
      whileTap={{ scale: isLocked ? 1 : 0.98 }}
      onClick={isLocked ? undefined : onClick}
      disabled={isLocked}
      className={`w-full p-4 rounded-2xl shadow-lg text-left transition-all ${
        isLocked
          ? "bg-gray-200 opacity-60 cursor-not-allowed"
          : `bg-gradient-to-br ${color}`
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`text-4xl ${isLocked ? "grayscale" : ""}`}>{icon}</div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className={`font-bold text-lg ${isLocked ? "text-gray-600" : "text-white"}`}>
              {title}
            </h3>
            {isLocked && <Lock className="w-5 h-5 text-gray-600" />}
            {isCompleted && <Check className="w-5 h-5 text-white" />}
          </div>
          <p className={`text-sm mb-3 ${isLocked ? "text-gray-500" : "text-white/90"}`}>
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {[...Array(totalStars)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < starsEarned
                      ? "text-yellow-300 fill-yellow-300"
                      : isLocked
                      ? "text-gray-400"
                      : "text-white/40"
                  }`}
                />
              ))}
            </div>
            <span className={`text-sm font-semibold ${isLocked ? "text-gray-600" : "text-white"}`}>
              +{xpReward} XP
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
