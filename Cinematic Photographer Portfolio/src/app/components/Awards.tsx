import { motion } from 'motion/react';
import { Award, Camera, Users, Globe } from 'lucide-react';

const awards = [
  {
    year: '2025',
    title: 'International Photography Awards',
    category: 'Travel Photography',
    icon: Globe,
  },
  {
    year: '2024',
    title: 'Sony World Photography Awards',
    category: 'Professional Competition',
    icon: Camera,
  },
  {
    year: '2024',
    title: 'National Geographic Travel Photographer',
    category: "Editor's Choice",
    icon: Award,
  },
  {
    year: '2023',
    title: 'Portrait Masters Cup',
    category: 'Gold Medal',
    icon: Users,
  },
];

const stats = [
  { number: '50+', label: 'Countries Visited' },
  { number: '15K+', label: 'Images Captured' },
  { number: '100+', label: 'Publications' },
  { number: '12', label: 'International Awards' },
];

export default function Awards() {
  return (
    <div className="min-h-screen bg-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-4">
            Recognition
          </p>
          <h2 className="text-5xl md:text-7xl tracking-tight">Awards & Honors</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="flex gap-6 items-start group cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <award.icon size={24} className="opacity-70" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm opacity-50 mb-2">{award.year}</p>
                <h3 className="text-2xl tracking-tight mb-2 group-hover:opacity-80 transition-opacity">
                  {award.title}
                </h3>
                <p className="opacity-60">{award.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t border-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm opacity-50 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
