import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

interface PlanetProps {
  name: string;
  description: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  onClick: () => void;
  data?: { label: string; value: number }[];
}

export function Planet({
  name,
  description,
  color,
  size,
  orbitRadius,
  orbitSpeed,
  onClick,
  data,
}: PlanetProps) {
  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: '50%',
        top: '50%',
        width: size,
        height: size,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: orbitSpeed,
        repeat: Infinity,
        ease: 'linear',
      }}
      onClick={onClick}
    >
      <motion.div
        className="absolute"
        style={{
          left: orbitRadius,
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className="rounded-full shadow-lg relative"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle at 30% 30%, ${color}dd, ${color}44)`,
            boxShadow: `0 0 40px ${color}88, inset 0 0 20px ${color}44`,
          }}
        >
          {/* Planet glow */}
          <div
            className="absolute inset-0 rounded-full opacity-50 blur-xl"
            style={{ background: color }}
          />

          {/* Planet ring for some planets */}
          {data && (
            <div
              className="absolute -inset-4 rounded-full opacity-30"
              style={{
                border: `2px solid ${color}`,
                transform: 'rotateX(75deg)',
              }}
            />
          )}
        </div>

        {/* Info card on hover */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-4 h-4 text-blue-400" />
              <h3 className="text-white">{name}</h3>
            </div>
            <p className="text-gray-300 text-sm mb-2">{description}</p>
            {data && (
              <div className="space-y-1">
                {data.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="text-xs text-gray-400">
                    {item.label}: {item.value}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
