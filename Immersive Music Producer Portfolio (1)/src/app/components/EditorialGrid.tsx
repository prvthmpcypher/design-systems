import { motion } from 'motion/react';

interface EditorialItem {
  image: string;
  title: string;
  category: string;
  span?: 'large' | 'tall' | 'wide';
}

interface EditorialGridProps {
  items: EditorialItem[];
}

export function EditorialGrid({ items }: EditorialGridProps) {
  const getGridClass = (span?: string) => {
    switch (span) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`relative group overflow-hidden bg-black cursor-pointer ${getGridClass(item.span)}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 0.98 }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <motion.div
            className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/100 transition-all duration-500"
            style={{
              borderWidth: '0px',
            }}
            whileHover={{
              borderWidth: '2px',
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-xs tracking-[0.3em] text-amber-400 mb-2">{item.category}</p>
            <h3 className="text-2xl text-white font-light tracking-wide text-center">{item.title}</h3>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
