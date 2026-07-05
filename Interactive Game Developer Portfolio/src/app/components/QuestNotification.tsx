import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface QuestNotificationProps {
  message: string;
}

export function QuestNotification({ message }: QuestNotificationProps) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-gradient-to-r from-yellow-600 to-amber-500 px-6 py-3 rounded-lg border-2 border-yellow-300 shadow-2xl">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-yellow-200 animate-pulse" />
          <div className="text-lg font-bold text-white drop-shadow-lg">
            {message}
          </div>
          <Sparkles className="w-6 h-6 text-yellow-200 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
