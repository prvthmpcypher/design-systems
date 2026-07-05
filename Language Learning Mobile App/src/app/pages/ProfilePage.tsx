import { motion } from "motion/react";
import { ChevronLeft, Star, Award, Zap, Target, Trophy } from "lucide-react";

interface ProfilePageProps {
  onBack: () => void;
  userData: any;
}

export function ProfilePage({ onBack, userData }: ProfilePageProps) {
  const achievements = [
    { icon: "🔥", title: "First Streak", description: "Complete 3 days in a row", unlocked: true },
    { icon: "⭐", title: "Star Collector", description: "Earn 50 stars", unlocked: true },
    { icon: "🎯", title: "Perfect Score", description: "Get 100% on any lesson", unlocked: true },
    { icon: "🏆", title: "Week Warrior", description: "Complete 7 day streak", unlocked: false },
    { icon: "💎", title: "Diamond League", description: "Reach top 3 in leaderboard", unlocked: false },
    { icon: "🚀", title: "Speed Learner", description: "Complete 5 lessons in one day", unlocked: false },
  ];

  const stats = [
    { icon: Star, label: "Total Stars", value: "42", color: "text-yellow-600 bg-yellow-100" },
    { icon: Zap, label: "Total XP", value: "1,250", color: "text-blue-600 bg-blue-100" },
    { icon: Target, label: "Accuracy", value: "87%", color: "text-green-600 bg-green-100" },
    { icon: Trophy, label: "Rank", value: "#12", color: "text-purple-600 bg-purple-100" },
  ];

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h2 className="text-xl font-bold text-gray-900">Profile</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl mb-3 shadow-lg">
            👤
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{userData.name}</h3>
          <p className="text-gray-600">Level {userData.level} Learner</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white rounded-2xl shadow-sm"
            >
              <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mb-2`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievements
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-3 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg"
                    : "bg-gray-200"
                }`}
              >
                <div className={`text-3xl mb-1 ${!achievement.unlocked && "grayscale opacity-50"}`}>
                  {achievement.icon}
                </div>
                <div className={`text-xs font-semibold text-center ${
                  achievement.unlocked ? "text-white" : "text-gray-500"
                }`}>
                  {achievement.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
          <h4 className="font-bold mb-2">Learning Streak</h4>
          <div className="flex gap-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-12 rounded-lg flex flex-col items-center justify-center ${
                  i < userData.streak ? "bg-white/30" : "bg-white/10"
                }`}
              >
                <div className="text-xs">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </div>
                {i < userData.streak && <div className="text-lg">🔥</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
