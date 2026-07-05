import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface DynamicEqualizerProps {
  isPlaying: boolean;
}

export function DynamicEqualizer({ isPlaying }: DynamicEqualizerProps) {
  const [bars] = useState(Array.from({ length: 32 }, (_, i) => i));

  return (
    <div className="flex items-end justify-center gap-1 h-24">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-2 bg-gradient-to-t from-purple-600 via-pink-500 to-cyan-400 rounded-t"
          animate={{
            height: isPlaying
              ? [
                  Math.random() * 80 + 20,
                  Math.random() * 80 + 20,
                  Math.random() * 80 + 20,
                ]
              : 20,
          }}
          transition={{
            duration: 0.3,
            repeat: isPlaying ? Infinity : 0,
            repeatType: 'reverse',
            delay: bar * 0.03,
          }}
        />
      ))}
    </div>
  );
}
