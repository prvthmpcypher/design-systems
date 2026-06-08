import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface DataPoint {
  x: number;
  y: number;
  label: string;
  value: number;
}

interface ConstellationProps {
  dataPoints: DataPoint[];
  color?: string;
}

export function Constellation({ dataPoints, color = '#60a5fa' }: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    let animationFrame: number;
    let offset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      offset += 0.5;

      // Draw connecting lines with flowing energy
      ctx.strokeStyle = color + '40';
      ctx.lineWidth = 2;

      for (let i = 0; i < dataPoints.length - 1; i++) {
        const p1 = dataPoints[i];
        const p2 = dataPoints[i + 1];

        // Draw base line
        ctx.beginPath();
        ctx.moveTo(p1.x * width, p1.y * height);
        ctx.lineTo(p2.x * width, p2.y * height);
        ctx.stroke();

        // Draw flowing particles along the line
        const progress = (Math.sin(offset * 0.02 + i) + 1) / 2;
        const px = p1.x * width + (p2.x * width - p1.x * width) * progress;
        const py = p1.y * height + (p2.y * height - p1.y * height) * progress;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [dataPoints, color]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="w-full h-full"
      />
      {dataPoints.map((point, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{
            left: `${point.x * 100}%`,
            top: `${point.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: idx * 0.1 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ background: color, boxShadow: `0 0 20px ${color}` }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.2,
            }}
          />
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs text-white/80 whitespace-nowrap">
            {point.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
