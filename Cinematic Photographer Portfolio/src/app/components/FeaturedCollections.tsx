import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

const collections = [
  {
    title: 'Ethereal Landscapes',
    subtitle: 'Mountain & Forest',
    image:
      'https://images.unsplash.com/photo-1659990589738-c653e1c96239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMGRyYW1hdGljfGVufDF8fHx8MTc4MDkwMDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '24 images',
  },
  {
    title: 'Urban Nights',
    subtitle: 'City After Dark',
    image:
      'https://images.unsplash.com/photo-1695114584354-13e1910d491b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMGRyYW1hdGljfGVufDF8fHx8MTc4MDkwMDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    count: '18 images',
  },
  {
    title: 'Monochrome Dreams',
    subtitle: 'Black & White Series',
    image:
      'https://images.unsplash.com/photo-1738245003191-8e56ed8a4bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Y2luZW1hdGljJTIwbGFuZHNjYXBlJTIwcGhvdG9ncmFwaHklMjBkcmFtYXRpY3xlbnwxfHx8fDE3ODA5MDA1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    count: '31 images',
  },
];

export default function FeaturedCollections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <div ref={ref} className="relative min-h-screen py-32 px-6 md:px-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-20 text-center">
          <motion.p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-4">
            Featured
          </motion.p>
          <h2 className="text-5xl md:text-7xl tracking-tight">Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function CollectionCard({ collection, index }: { collection: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6">
        <motion.div
          className="absolute inset-0 bg-black z-10"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: isHovered ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{ originY: 1 }}
        />

        <motion.img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-2">
            {collection.subtitle}
          </p>
          <h3 className="text-2xl tracking-tight mb-2">{collection.title}</h3>
          <p className="text-sm opacity-50">{collection.count}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
