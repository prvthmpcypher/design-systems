import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titles = ["ARTIST", "CREATOR", "VISIONARY"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--neon-pink), var(--neon-cyan), transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/20 via-transparent to-[#00ffff]/20" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          key={currentTitle}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 1.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none"
          style={{
            background: "linear-gradient(135deg, var(--neon-pink), var(--neon-cyan), var(--neon-yellow))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 80px rgba(255, 0, 255, 0.5), 0 0 120px rgba(0, 255, 255, 0.3)",
          }}
        >
          {titles[currentTitle]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-2xl md:text-3xl tracking-widest uppercase"
          style={{
            color: "var(--neon-cyan)",
            textShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
          }}
        >
          Digital Art Portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 uppercase tracking-wider transition-all"
            style={{
              borderColor: "var(--neon-pink)",
              color: "var(--neon-pink)",
              background: "transparent",
            }}
          >
            View Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 uppercase tracking-wider transition-all"
            style={{
              background: "var(--neon-cyan)",
              color: "#0a0a0f",
            }}
          >
            Contact
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
             style={{ borderColor: "var(--neon-pink)" }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--neon-pink)" }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
