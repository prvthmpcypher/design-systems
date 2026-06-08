import { motion } from "motion/react";
import { Star, Award, TrendingUp } from "lucide-react";

interface CompletionPageProps {
  xpEarned: number;
  starsEarned: number;
  onContinue: () => void;
}

export function CompletionPage({ xpEarned, starsEarned, onContinue }: CompletionPageProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="text-8xl mb-6"
      >
        🎉
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold text-white mb-3 text-center"
      >
        Lesson Complete!
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/90 text-lg mb-8 text-center"
      >
        Great job! Keep up the amazing work!
      </motion.p>

      <div className="w-full max-w-sm space-y-4 mb-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold">XP Earned</span>
          </div>
          <span className="text-2xl font-bold text-white">+{xpEarned}</span>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-white font-semibold">Stars</span>
          </div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              >
                <Star
                  className={`w-8 h-8 ${
                    i < starsEarned ? "text-yellow-300 fill-yellow-300" : "text-white/30"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {starsEarned === 3 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-2 p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
          >
            <Award className="w-6 h-6 text-white" />
            <span className="text-white font-bold">Perfect Score!</span>
          </motion.div>
        )}
      </div>

      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
        className="w-full max-w-sm py-5 bg-white rounded-2xl font-bold text-orange-600 text-lg shadow-2xl"
      >
        Continue
      </motion.button>
    </div>
  );
}
