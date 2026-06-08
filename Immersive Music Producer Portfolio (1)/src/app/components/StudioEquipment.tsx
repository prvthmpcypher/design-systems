import { motion } from 'motion/react';

interface Equipment {
  name: string;
  category: string;
  image: string;
}

const equipment: Equipment[] = [
  {
    name: 'Elektron Digitakt',
    category: 'Drum Machine',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400',
  },
  {
    name: 'Moog Subsequent 37',
    category: 'Analog Synthesizer',
    image: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?w=400',
  },
  {
    name: 'SSL Fusion',
    category: 'Stereo Bus Processor',
    image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=400',
  },
  {
    name: 'Universal Audio Apollo',
    category: 'Audio Interface',
    image: 'https://images.unsplash.com/photo-1535406208535-1429839cfd13?w=400',
  },
  {
    name: 'Arturia KeyLab',
    category: 'MIDI Controller',
    image: 'https://images.unsplash.com/photo-1567787609897-efa3625dd22d?w=400',
  },
  {
    name: 'Allen & Heath Mixer',
    category: 'Analog Mixer',
    image: 'https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?w=400',
  },
];

export function StudioEquipment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipment.map((item, index) => (
        <motion.div
          key={item.name}
          className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs text-purple-400 mb-1">{item.category}</p>
              <h3 className="font-semibold text-white">{item.name}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
