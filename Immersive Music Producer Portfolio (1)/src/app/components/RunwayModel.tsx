import { motion } from 'motion/react';
import { useState } from 'react';

interface RunwayModelProps {
  image: string;
  title: string;
  collection: string;
  index: number;
}

export function RunwayModel({ image, title, collection, index }: RunwayModelProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[600px] overflow-hidden bg-black">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
          animate={{
            opacity: isHovered ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)',
          }}
          animate={{
            x: isHovered ? ['0%', '100%'] : '0%',
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        <p className="text-xs tracking-[0.3em] text-amber-400 mb-2">{collection}</p>
        <h3 className="text-2xl tracking-wide font-light">{title}</h3>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
