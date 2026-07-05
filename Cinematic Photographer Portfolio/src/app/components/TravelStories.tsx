import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const stories = [
  {
    location: 'Cappadocia, Turkey',
    title: 'Balloons Over Ancient Lands',
    description: 'Dawn breaks over fairy chimneys and stone valleys',
    image:
      'https://images.unsplash.com/photo-1779095410334-768288182d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBwaG90b2dyYXBoeSUyMGV4b3RpYyUyMGRlc3RpbmF0aW9uc3xlbnwxfHx8fDE3ODA5MDA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    location: 'Wadi Rum, Jordan',
    title: 'Desert Solitude',
    description: 'Where endless dunes meet ancient rock formations',
    image:
      'https://images.unsplash.com/photo-1779232959380-4dab2342173d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0cmF2ZWwlMjBwaG90b2dyYXBoeSUyMGV4b3RpYyUyMGRlc3RpbmF0aW9uc3xlbnwxfHx8fDE3ODA5MDA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    location: 'Sahara Desert',
    title: 'Nomadic Journey',
    description: 'Following the path of ancient caravans',
    image:
      'https://images.unsplash.com/photo-1760681554251-6b25080e7f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0cmF2ZWwlMjBwaG90b2dyYXBoeSUyMGV4b3RpYyUyMGRlc3RpbmF0aW9uc3xlbnwxfHx8fDE3ODA5MDA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function TravelStories() {
  return (
    <div className="min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-4">
            Around The World
          </p>
          <h2 className="text-5xl md:text-7xl tracking-tight">Travel Stories</h2>
        </motion.div>
      </div>

      {stories.map((story, index) => (
        <StoryCard key={story.location} story={story} index={index} />
      ))}
    </div>
  );
}

function StoryCard({ story, index }: { story: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative h-screen flex items-center mb-32">
      <motion.div
        style={{ opacity, scale }}
        className="w-full max-w-7xl mx-auto px-6 md:px-12"
      >
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            isEven ? '' : 'md:grid-flow-dense'
          }`}
        >
          <motion.div
            style={{ y }}
            className={`relative aspect-[4/5] overflow-hidden ${
              isEven ? '' : 'md:col-start-2'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={isEven ? '' : 'md:col-start-1'}
          >
            <p className="tracking-[0.2em] uppercase text-xs opacity-50 mb-6">
              {story.location}
            </p>
            <h3 className="text-4xl md:text-6xl tracking-tight mb-6">
              {story.title}
            </h3>
            <p className="text-lg opacity-70 leading-relaxed max-w-md">
              {story.description}
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              className="mt-8 tracking-[0.2em] uppercase text-sm border-b border-white/30 hover:border-white transition-colors pb-1"
            >
              View Story →
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
