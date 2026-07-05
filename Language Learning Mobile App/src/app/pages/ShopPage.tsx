import { motion } from "motion/react";
import { ChevronLeft, Gem, Shield, Zap, Heart } from "lucide-react";

interface ShopPageProps {
  onBack: () => void;
  userGems: number;
}

export function ShopPage({ onBack, userGems }: ShopPageProps) {
  const shopItems = [
    {
      id: "streak-freeze",
      icon: "🧊",
      title: "Streak Freeze",
      description: "Protect your streak for 1 day",
      price: 10,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "heart-refill",
      icon: "❤️",
      title: "Heart Refill",
      description: "Restore all hearts",
      price: 5,
      color: "from-red-400 to-pink-500",
    },
    {
      id: "double-xp",
      icon: "⚡",
      title: "Double XP",
      description: "2x XP for 15 minutes",
      price: 20,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "gems-pack-1",
      icon: "💎",
      title: "Gem Pack (50)",
      description: "Purchase 50 gems",
      price: 99,
      isPremium: true,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "no-ads",
      icon: "🚫",
      title: "Remove Ads",
      description: "Ad-free experience forever",
      price: 299,
      isPremium: true,
      color: "from-gray-700 to-gray-900",
    },
    {
      id: "premium",
      icon: "👑",
      title: "Premium Pass",
      description: "Unlimited hearts & more",
      price: 499,
      isPremium: true,
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h2 className="text-xl font-bold text-gray-900">Shop</h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <Gem className="w-5 h-5 text-white" />
            <span className="text-white font-bold">{userGems}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl text-white mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="text-4xl">🎁</div>
            <div>
              <h3 className="font-bold text-lg">Daily Bonus</h3>
              <p className="text-sm opacity-90">Come back tomorrow for +5 gems!</p>
            </div>
          </div>
        </motion.div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">Power-ups</h3>
        {shopItems.filter((item) => !item.isPremium).map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-4 rounded-2xl shadow-lg bg-gradient-to-br ${item.color} text-white text-left`}
          >
            <div className="flex items-center gap-3">
              <div className="text-4xl">{item.icon}</div>
              <div className="flex-1">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                  <Gem className="w-4 h-4" />
                  <span className="font-bold">{item.price}</span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}

        <h3 className="text-lg font-bold text-gray-900 mb-3 mt-6">Premium</h3>
        {shopItems.filter((item) => item.isPremium).map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: (index + 3) * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-4 rounded-2xl shadow-lg bg-gradient-to-br ${item.color} text-white text-left relative overflow-hidden`}
          >
            <div className="absolute top-2 right-2 px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
              PREMIUM
            </div>
            <div className="flex items-center gap-3">
              <div className="text-4xl">{item.icon}</div>
              <div className="flex-1">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-75">$</div>
                <div className="font-bold text-lg">{(item.price / 100).toFixed(2)}</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
