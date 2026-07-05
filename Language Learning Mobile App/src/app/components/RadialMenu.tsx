import { motion, AnimatePresence } from "motion/react";
import { Home, Map, Users, ShoppingBag, User, Trophy } from "lucide-react";

interface RadialMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

export function RadialMenu({ isOpen, onClose, onNavigate }: RadialMenuProps) {
  const menuItems = [
    { icon: Home, label: "Home", color: "from-blue-500 to-blue-600", section: "home" },
    { icon: Map, label: "Learn", color: "from-green-500 to-green-600", section: "learn" },
    { icon: Trophy, label: "Leaderboard", color: "from-purple-500 to-purple-600", section: "leaderboard" },
    { icon: ShoppingBag, label: "Shop", color: "from-pink-500 to-pink-600", section: "shop" },
    { icon: User, label: "Profile", color: "from-orange-500 to-orange-600", section: "profile" },
    { icon: Users, label: "Friends", color: "from-teal-500 to-teal-600", section: "friends" },
  ];

  const radius = 120;
  const angleStep = (Math.PI * 2) / menuItems.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            {menuItems.map((item, index) => {
              const angle = angleStep * index - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.button
                  key={item.label}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  animate={{ scale: 1, x, y, opacity: 1 }}
                  exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    onNavigate(item.section);
                    onClose();
                  }}
                  className={`absolute pointer-events-auto w-16 h-16 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center text-white hover:shadow-xl`}
                  style={{ transform: `translate(-50%, -50%)` }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.button>
              );
            })}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute w-12 h-12 rounded-full bg-gray-800 shadow-inner"
            />
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
