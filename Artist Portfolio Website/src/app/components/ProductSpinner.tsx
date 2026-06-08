import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useRef } from "react";

interface ProductSpinnerProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function ProductSpinner({ imageUrl, title, description }: ProductSpinnerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-45, 45]);

  return (
    <div className="relative w-full aspect-square" ref={constraintsRef} style={{ position: 'relative' }}>
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{
          x,
          rotateY,
          cursor: isDragging ? "grabbing" : "grab"
        }}
        className="relative w-full h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            style={{
              filter: "drop-shadow(0 0 40px rgba(255, 0, 255, 0.5))",
            }}
          />

          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(255,0,255,0.2) 0%, transparent 50%, rgba(0,255,255,0.2) 100%)",
            }}
            animate={{
              opacity: isDragging ? 0.8 : 0.3,
            }}
          />
        </div>

        <div
          className="absolute inset-0 border-2 pointer-events-none"
          style={{
            borderColor: "var(--neon-pink)",
            boxShadow: isDragging
              ? "0 0 60px rgba(255, 0, 255, 0.8), inset 0 0 40px rgba(255, 0, 255, 0.3)"
              : "0 0 30px rgba(255, 0, 255, 0.5)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-16 left-0 right-0 text-center"
      >
        <h3 className="text-2xl font-black uppercase tracking-wider mb-1" style={{ color: "var(--neon-cyan)" }}>
          {title}
        </h3>
        <p className="text-sm opacity-70 uppercase tracking-widest">{description}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border"
        style={{ borderColor: "var(--neon-cyan)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isDragging ? 1 : 0.6 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 10L10 6L14 10M6 14L10 10L14 14" stroke="currentColor" strokeWidth="2" style={{ color: "var(--neon-cyan)" }} />
        </svg>
        <span className="text-xs uppercase tracking-wider" style={{ color: "var(--neon-cyan)" }}>
          Drag to Rotate
        </span>
      </motion.div>
    </div>
  );
}
