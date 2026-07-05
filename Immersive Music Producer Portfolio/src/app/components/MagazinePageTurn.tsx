import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MagazinePageTurnProps {
  children: ReactNode;
  delay?: number;
}

export function MagazinePageTurn({ children, delay = 0 }: MagazinePageTurnProps) {
  return (
    <motion.div
      initial={{ rotateY: -90, opacity: 0, transformOrigin: 'left' }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      viewport={{ once: true }}
      style={{ perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}
