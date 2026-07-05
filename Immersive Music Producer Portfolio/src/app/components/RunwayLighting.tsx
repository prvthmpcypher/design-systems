import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function RunwayLighting() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-40"
        style={{
          background: `radial-gradient(ellipse at 50% ${30 + (scrollY / 10) % 40}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
            style={{
              top: `${33 * (i + 1)}%`,
            }}
            animate={{
              scaleX: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </>
  );
}
