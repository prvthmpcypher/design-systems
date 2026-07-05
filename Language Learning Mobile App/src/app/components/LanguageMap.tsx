import { motion } from "motion/react";
import { useState } from "react";
import { Check, Lock } from "lucide-react";

interface MapNode {
  id: string;
  x: number;
  y: number;
  title: string;
  icon: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  color: string;
}

interface LanguageMapProps {
  nodes: MapNode[];
  onNodeClick: (node: MapNode) => void;
}

export function LanguageMap({ nodes, onNodeClick }: LanguageMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {nodes.map((node, index) => {
          if (index === 0) return null;
          const prevNode = nodes[index - 1];
          return (
            <motion.line
              key={`line-${node.id}`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              x1={`${prevNode.x}%`}
              y1={`${prevNode.y}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke={node.isUnlocked ? "#10b981" : "#d1d5db"}
              strokeWidth="3"
              strokeDasharray={node.isUnlocked ? "0" : "5,5"}
            />
          );
        })}
      </svg>

      {nodes.map((node, index) => {
        const isHovered = hoveredId === node.id;
        const isUnlocked = node.isUnlocked;
        const isCompleted = node.isCompleted;

        return (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredId(node.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.button
              whileHover={isUnlocked ? { scale: 1.15 } : {}}
              whileTap={isUnlocked ? { scale: 0.95 } : {}}
              onClick={() => isUnlocked && onNodeClick(node)}
              disabled={!isUnlocked}
              className={`relative w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl ${
                !isUnlocked
                  ? "bg-gray-300 cursor-not-allowed"
                  : isCompleted
                  ? `bg-gradient-to-br ${node.color}`
                  : `bg-gradient-to-br ${node.color}`
              }`}
            >
              {!isUnlocked ? (
                <Lock className="w-6 h-6 text-gray-600" />
              ) : (
                <span className="relative z-10">{node.icon}</span>
              )}
              {isCompleted && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.button>

            {isHovered && isUnlocked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white rounded-lg shadow-xl whitespace-nowrap text-sm z-20"
              >
                {node.title}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
