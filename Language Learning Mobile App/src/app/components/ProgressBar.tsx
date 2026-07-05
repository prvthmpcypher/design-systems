import { motion } from "motion/react";

interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
  showLabel?: boolean;
}

export function ProgressBar({ current, total, color = "from-green-400 to-green-600", showLabel = false }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-gray-600 mt-1 text-right">
          {current} / {total}
        </div>
      )}
    </div>
  );
}
