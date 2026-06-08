import { motion } from "motion/react";
import { ChevronLeft, Trophy, Medal, Award } from "lucide-react";

interface LeaderboardPageProps {
  onBack: () => void;
  currentUser: string;
}

export function LeaderboardPage({ onBack, currentUser }: LeaderboardPageProps) {
  const leaderboardData = [
    { rank: 1, name: "Sarah Chen", xp: 2450, avatar: "👩", isCurrentUser: false },
    { rank: 2, name: "Mike Johnson", xp: 2380, avatar: "👨", isCurrentUser: false },
    { rank: 3, name: "Emma Davis", xp: 2210, avatar: "👧", isCurrentUser: false },
    { rank: 4, name: "Alex Kim", xp: 2100, avatar: "🧑", isCurrentUser: false },
    { rank: 5, name: "Lisa Wang", xp: 1950, avatar: "👩", isCurrentUser: false },
    { rank: 6, name: "Tom Brown", xp: 1870, avatar: "👨", isCurrentUser: false },
    { rank: 7, name: "Maya Patel", xp: 1820, avatar: "👧", isCurrentUser: false },
    { rank: 8, name: "Chris Lee", xp: 1750, avatar: "🧑", isCurrentUser: false },
    { rank: 9, name: "Sofia Garcia", xp: 1680, avatar: "👩", isCurrentUser: false },
    { rank: 10, name: "James Wilson", xp: 1590, avatar: "👨", isCurrentUser: false },
    { rank: 11, name: "Nina Rodriguez", xp: 1520, avatar: "👧", isCurrentUser: false },
    { rank: 12, name: currentUser, xp: 1250, avatar: "👤", isCurrentUser: true },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    return "from-blue-400 to-blue-600";
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-white" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-white" />;
    if (rank === 3) return <Award className="w-5 h-5 text-white" />;
    return <span className="text-white font-bold">{rank}</span>;
  };

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Leaderboard</h2>
            <p className="text-sm text-gray-600">This Week</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white mb-4"
        >
          <div className="text-sm opacity-90 mb-1">League</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              <span className="text-xl font-bold">Silver League</span>
            </div>
            <div className="text-sm">
              Top 10 → Gold 🥇
            </div>
          </div>
        </motion.div>

        {leaderboardData.map((user, index) => (
          <motion.div
            key={user.rank}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`p-4 rounded-2xl shadow-sm ${
              user.isCurrentUser
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${getRankColor(
                  user.rank
                )} flex items-center justify-center shadow-md`}
              >
                {getRankIcon(user.rank)}
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-2xl shadow-md">
                {user.avatar}
              </div>
              <div className="flex-1">
                <div className={`font-bold ${user.isCurrentUser ? "text-white" : "text-gray-900"}`}>
                  {user.name}
                  {user.isCurrentUser && " (You)"}
                </div>
                <div className={`text-sm ${user.isCurrentUser ? "text-white/80" : "text-gray-600"}`}>
                  {user.xp.toLocaleString()} XP
                </div>
              </div>
              {user.rank <= 3 && (
                <div className="text-3xl">
                  {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉"}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
