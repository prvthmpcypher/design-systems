import { motion } from 'motion/react';
import { Award, Star } from 'lucide-react';

interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const awards: AwardItem[] = [
  {
    year: '2026',
    title: 'Designer of the Year',
    organization: 'CFDA Fashion Awards',
    description: 'Recognized for exceptional innovation in sustainable luxury fashion',
  },
  {
    year: '2025',
    title: 'Best Emerging Designer',
    organization: 'Vogue Fashion Fund',
    description: 'Celebrated for groundbreaking Spring/Summer collection',
  },
  {
    year: '2024',
    title: 'Innovation in Fashion',
    organization: 'British Fashion Council',
    description: 'Honored for pioneering new textile techniques and craftsmanship',
  },
  {
    year: '2024',
    title: 'Luxury Brand Excellence',
    organization: 'Paris Fashion Week',
    description: 'Outstanding debut collection at Paris Fashion Week',
  },
];

export function AwardShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {awards.map((award, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative p-8 border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 bg-black/20 backdrop-blur-sm">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{
                background: [
                  'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                  'linear-gradient(225deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                  'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 border border-amber-400 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light text-amber-400">{award.year}</div>
                </div>
              </div>

              <h3 className="text-2xl font-light text-white mb-2 tracking-wide group-hover:text-amber-400 transition-colors">
                {award.title}
              </h3>

              <p className="text-xs tracking-[0.3em] text-amber-400/80 mb-4">
                {award.organization}
              </p>

              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {award.description}
              </p>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>

            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
