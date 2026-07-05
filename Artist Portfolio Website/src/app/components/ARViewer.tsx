import { motion, useAnimation } from "motion/react";
import { useState } from "react";
import { RotateCw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface ARViewerProps {
  imageUrl: string;
  title: string;
}

export function ARViewer({ imageUrl, title }: ARViewerProps) {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const controls = useAnimation();

  const handleRotate = () => {
    const newRotation = rotation + 90;
    setRotation(newRotation);
    controls.start({
      rotateY: newRotation,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    });
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.2, 0.5));
  };

  const handleReset = () => {
    setRotation(0);
    setZoom(1);
    controls.start({
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <motion.div
          animate={controls}
          style={{
            scale: zoom,
            rotateY: rotation,
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 60px rgba(0, 255, 255, 0.6))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm border text-xs uppercase tracking-wider"
             style={{ borderColor: "var(--neon-pink)", color: "var(--neon-pink)" }}>
          AR View Mode
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-4 p-4 bg-black/50 backdrop-blur-sm border"
           style={{ borderColor: "var(--neon-cyan)" }}>
        <div className="flex-1">
          <h3 className="font-black uppercase tracking-wider" style={{ color: "var(--neon-cyan)" }}>
            {title}
          </h3>
        </div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 0, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRotate}
            className="p-2 border transition-colors"
            style={{ borderColor: "var(--neon-pink)" }}
          >
            <RotateCw size={20} style={{ color: "var(--neon-pink)" }} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleZoomIn}
            className="p-2 border transition-colors"
            style={{ borderColor: "var(--neon-cyan)" }}
          >
            <ZoomIn size={20} style={{ color: "var(--neon-cyan)" }} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleZoomOut}
            className="p-2 border transition-colors"
            style={{ borderColor: "var(--neon-cyan)" }}
          >
            <ZoomOut size={20} style={{ color: "var(--neon-cyan)" }} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="p-2 border transition-colors"
            style={{ borderColor: "var(--neon-yellow)" }}
          >
            <Maximize2 size={20} style={{ color: "var(--neon-yellow)" }} />
          </motion.button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-32 h-32 border-2 rounded-full"
          style={{ borderColor: "var(--neon-pink)" }}
        />
      </div>
    </div>
  );
}
