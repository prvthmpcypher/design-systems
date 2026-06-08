import { motion } from 'motion/react';

export function WaveformBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-32"
          style={{
            top: `${i * 20}%`,
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(139, 92, 246, 0.3) 25%,
              rgba(236, 72, 153, 0.3) 50%,
              rgba(59, 130, 246, 0.3) 75%,
              transparent 100%)`,
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
