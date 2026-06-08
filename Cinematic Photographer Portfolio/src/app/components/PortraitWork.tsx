import { motion } from 'motion/react';
import { useState } from 'react';

const portraits = [
  {
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDkwMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Natural Light',
    size: 'large',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDkwMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Timeless',
    size: 'medium',
  },
  {
    image:
      'https://images.unsplash.com/photo-1568038479111-87bf80659645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDkwMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Essence',
    size: 'medium',
  },
  {
    image:
      'https://images.unsplash.com/photo-1536766768598-e09213fdcf22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDkwMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Depth',
    size: 'small',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDkwMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Character',
    size: 'large',
  },
  {
    image:
      'https://images.unsplash.com/photo-1532170579297-281918c8ae72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc4MDkwMDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Grace',
    size: 'small',
  },
];

export default function PortraitWork() {
  return (
    <div className="min-h-screen bg-black py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mb-20 text-center"
      >
        <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-4">
          Capturing Souls
        </p>
        <h2 className="text-5xl md:text-7xl tracking-tight">Portrait Work</h2>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
          {portraits.map((portrait, index) => (
            <PortraitCard
              key={index}
              portrait={portrait}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PortraitCard({ portrait, index }: { portrait: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const getGridClasses = () => {
    switch (portrait.size) {
      case 'large':
        return 'col-span-12 md:col-span-8 md:row-span-2';
      case 'medium':
        return 'col-span-12 md:col-span-6';
      case 'small':
        return 'col-span-12 md:col-span-4';
      default:
        return 'col-span-12 md:col-span-6';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${getGridClasses()} relative overflow-hidden group cursor-pointer`}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={portrait.image}
          alt={portrait.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl tracking-tight">{portrait.title}</h3>
      </motion.div>
    </motion.div>
  );
}
