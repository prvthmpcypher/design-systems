import { motion } from "motion/react";
import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  gradient: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Neon Dreams", category: "Digital Art", gradient: "linear-gradient(135deg, #ff00ff, #ff0080)" },
  { id: 2, title: "Cyber Waves", category: "3D Design", gradient: "linear-gradient(135deg, #00ffff, #0080ff)" },
  { id: 3, title: "Electric Soul", category: "Mixed Media", gradient: "linear-gradient(135deg, #ffff00, #ff6600)" },
  { id: 4, title: "Void Walker", category: "Digital Art", gradient: "linear-gradient(135deg, #9d00ff, #ff00ff)" },
  { id: 5, title: "Plasma Storm", category: "Abstract", gradient: "linear-gradient(135deg, #00ff00, #00ffff)" },
  { id: 6, title: "Neon Pulse", category: "Motion", gradient: "linear-gradient(135deg, #ff0055, #ff00ff)" },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-24 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[8rem] md:text-[12rem] font-black mb-16 leading-none"
        style={{
          background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-pink))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        WORK
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative aspect-square cursor-pointer group overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: item.gradient }}
              animate={{
                scale: hoveredId === item.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              style={{
                background: hoveredId === item.id ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-wider"
                animate={{
                  y: hoveredId === item.id ? -10 : 0,
                }}
                style={{
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-sm md:text-base uppercase tracking-widest"
                style={{ color: "var(--neon-cyan)" }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0.7,
                }}
              >
                {item.category}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0,
                  scale: hoveredId === item.id ? 1 : 0,
                }}
                className="mt-4 px-6 py-2 border-2 uppercase text-sm tracking-wider"
                style={{
                  borderColor: "var(--neon-pink)",
                  color: "var(--neon-pink)",
                }}
              >
                View Project
              </motion.div>
            </motion.div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: hoveredId === item.id ? "inset 0 0 60px rgba(255, 0, 255, 0.6)" : "none",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
