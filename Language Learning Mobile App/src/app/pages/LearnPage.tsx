import { motion } from "motion/react";
import { useState } from "react";
import { LanguageMap } from "../components/LanguageMap";
import { ChevronLeft } from "lucide-react";

interface LearnPageProps {
  onBack: () => void;
  onLessonSelect: (lessonId: string) => void;
}

export function LearnPage({ onBack, onLessonSelect }: LearnPageProps) {
  const mapNodes = [
    { id: "1", x: 50, y: 10, title: "Greetings", icon: "👋", isUnlocked: true, isCompleted: true, color: "from-blue-400 to-blue-600" },
    { id: "2", x: 35, y: 25, title: "Numbers", icon: "🔢", isUnlocked: true, isCompleted: true, color: "from-green-400 to-green-600" },
    { id: "3", x: 65, y: 25, title: "Colors", icon: "🎨", isUnlocked: true, isCompleted: false, color: "from-purple-400 to-purple-600" },
    { id: "4", x: 50, y: 40, title: "Family", icon: "👨‍👩‍👧", isUnlocked: true, isCompleted: false, color: "from-pink-400 to-pink-600" },
    { id: "5", x: 30, y: 55, title: "Food", icon: "🍕", isUnlocked: false, isCompleted: false, color: "from-orange-400 to-orange-600" },
    { id: "6", x: 70, y: 55, title: "Animals", icon: "🦁", isUnlocked: false, isCompleted: false, color: "from-yellow-400 to-yellow-600" },
    { id: "7", x: 50, y: 70, title: "Travel", icon: "✈️", isUnlocked: false, isCompleted: false, color: "from-cyan-400 to-cyan-600" },
    { id: "8", x: 40, y: 85, title: "Shopping", icon: "🛍️", isUnlocked: false, isCompleted: false, color: "from-red-400 to-red-600" },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="p-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Learning Path</h2>
            <p className="text-sm text-gray-600">Spanish for Beginners</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-[600px] relative"
        >
          <LanguageMap nodes={mapNodes} onNodeClick={(node) => onLessonSelect(node.id)} />
        </motion.div>
      </div>
    </div>
  );
}
