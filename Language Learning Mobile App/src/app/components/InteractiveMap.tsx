import { motion } from "motion/react";
import { useState } from "react";
import { Mountain, Building, Trees, Waves, MapPin } from "lucide-react";

interface MapLocation {
  id: string;
  x: number;
  y: number;
  icon: any;
  name: string;
  description: string;
  color: string;
}

interface InteractiveMapProps {
  onLocationClick: (location: MapLocation) => void;
}

export function InteractiveMap({ onLocationClick }: InteractiveMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const locations: MapLocation[] = [
    {
      id: "mountains",
      x: 20,
      y: 15,
      icon: Mountain,
      name: "Mountain Peak",
      description: "Discover hidden trails and breathtaking views from the summit.",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "city",
      x: 60,
      y: 45,
      icon: Building,
      name: "City Center",
      description: "Explore urban adventures and cultural hotspots.",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: "forest",
      x: 35,
      y: 60,
      icon: Trees,
      name: "Ancient Forest",
      description: "Wander through mysterious woodland paths and wildlife.",
      color: "from-green-400 to-green-600",
    },
    {
      id: "coast",
      x: 75,
      y: 75,
      icon: Waves,
      name: "Coastal Paradise",
      description: "Relax by the shores and explore marine wonders.",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      id: "village",
      x: 50,
      y: 30,
      icon: MapPin,
      name: "Hidden Village",
      description: "Find local treasures and authentic experiences.",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100 rounded-2xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {locations.map((location) => {
        const Icon = location.icon;
        const isHovered = hoveredId === location.id;

        return (
          <motion.div
            key={location.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: Math.random() * 0.5, type: "spring" }}
            className="absolute"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onMouseEnter={() => setHoveredId(location.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onLocationClick(location)}
              className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${location.color} shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow`}
            >
              <Icon className="w-8 h-8" />
              <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                  opacity: isHovered ? [0.6, 0.3, 0.6] : 0.6,
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${location.color}`}
              />
            </motion.button>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white rounded-lg shadow-xl whitespace-nowrap text-sm z-10"
                >
                  <div className="font-semibold">{location.name}</div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
