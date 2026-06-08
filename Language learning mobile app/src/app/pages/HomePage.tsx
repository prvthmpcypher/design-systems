import { motion } from "motion/react";
import { StreakCounter } from "../components/StreakCounter";
import { XPDisplay } from "../components/XPDisplay";
import { Target, TrendingUp, Award } from "lucide-react";

interface HomePageProps {
  userData: {
    name: string;
    streak: number;
    xp: number;
    level: number;
    xpToNextLevel: number;
    dailyGoal: number;
    dailyProgress: number;
  };
  onStartLesson: () => void;
}

export function HomePage({ userData, onStartLesson }: HomePageProps) {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Hello, {userData.name}! 👋
        </h1>
        <p className="text-gray-600">Ready to learn today?</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <StreakCounter streak={userData.streak} />
      </motion.div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <XPDisplay
          xp={userData.xp}
          level={userData.level}
          xpToNextLevel={userData.xpToNextLevel}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-lg"
      >
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-white" />
          <h3 className="text-white font-bold">Daily Goal</h3>
        </div>
        <div className="mb-2">
          <div className="h-3 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(userData.dailyProgress / userData.dailyGoal) * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
        <p className="text-white/90 text-sm">
          {userData.dailyProgress} / {userData.dailyGoal} XP earned today
        </p>
      </motion.div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStartLesson}
        className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg text-white font-bold text-lg"
      >
        Continue Learning
      </motion.button>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 bg-orange-100 rounded-2xl"
        >
          <TrendingUp className="w-6 h-6 text-orange-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-600">Lessons Completed</div>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 bg-purple-100 rounded-2xl"
        >
          <Award className="w-6 h-6 text-purple-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">8</div>
          <div className="text-sm text-gray-600">Achievements</div>
        </motion.div>
      </div>
    </div>
  );
}
