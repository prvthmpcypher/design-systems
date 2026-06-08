import { motion } from 'motion/react';

interface VinylRecordProps {
  title: string;
  artist: string;
  coverUrl: string;
  isPlaying: boolean;
  onClick: () => void;
}

export function VinylRecord({ title, artist, coverUrl, isPlaying, onClick }: VinylRecordProps) {
  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl"
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            duration: 3,
            repeat: isPlaying ? Infinity : 0,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-8 rounded-full overflow-hidden">
            <img src={coverUrl} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-600"></div>

          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gray-700/30"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 12}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{artist}</p>
      </div>

      {isPlaying && (
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
