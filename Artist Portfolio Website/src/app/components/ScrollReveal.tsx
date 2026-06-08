import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ScrollRevealProps {
  imageUrl: string;
  title: string;
  index: number;
}

export function ScrollReveal({ imageUrl, title, index }: ScrollRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center">
      <motion.div
        style={{
          y,
          opacity,
          scale,
          rotateX,
        }}
        className={`w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 ${isEven ? "" : "md:grid-flow-dense"}`}
      >
        <motion.div
          className={`flex flex-col justify-center ${isEven ? "" : "md:col-start-2"}`}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3
            className="text-6xl md:text-8xl font-black mb-6 leading-none"
            style={{
              background: `linear-gradient(135deg, var(--neon-${isEven ? 'pink' : 'cyan'}), var(--neon-${isEven ? 'yellow' : 'purple'}))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h3>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            A groundbreaking exploration of digital space, blending cutting-edge 3D techniques
            with vibrant neon aesthetics to create an immersive visual experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px rgba(255, 0, 255, 0.8)` }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-8 py-4 border-2 uppercase tracking-wider"
            style={{
              borderColor: `var(--neon-${isEven ? 'pink' : 'cyan'})`,
              color: `var(--neon-${isEven ? 'pink' : 'cyan'})`,
            }}
          >
            View Details
          </motion.button>
        </motion.div>

        <motion.div
          className={`relative aspect-square ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
        >
          <div className="absolute inset-0 overflow-hidden border-2"
               style={{
                 borderColor: `var(--neon-${isEven ? 'pink' : 'cyan'})`,
                 boxShadow: `0 0 60px rgba(${isEven ? '255, 0, 255' : '0, 255, 255'}, 0.5)`,
               }}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />

            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(45deg, rgba(${isEven ? '255, 0, 255' : '0, 255, 255'}, 0.3), transparent)`,
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
          </div>

          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 border-2"
            style={{ borderColor: `var(--neon-${isEven ? 'yellow' : 'purple'})` }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
