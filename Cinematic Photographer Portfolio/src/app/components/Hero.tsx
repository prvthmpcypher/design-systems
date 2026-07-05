import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1661124280301-ca0e33ceb438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMGRyYW1hdGljfGVufDF8fHx8MTc4MDkwMDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Foggy forest landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="space-y-6"
        >
          <h1 className="tracking-[0.3em] uppercase text-sm opacity-70">
            Cinematic Photography
          </h1>
          <div className="text-6xl md:text-8xl tracking-tight">
            <div>Stories</div>
            <div>Through Light</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="opacity-50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
