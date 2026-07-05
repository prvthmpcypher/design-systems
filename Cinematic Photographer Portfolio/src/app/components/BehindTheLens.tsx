import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BehindTheLens() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <div ref={ref} className="relative min-h-screen bg-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-4">
            The Artist
          </p>
          <h2 className="text-5xl md:text-7xl tracking-tight">
            Behind The Lens
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y, opacity }} className="relative aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-sm" />
            <img
              src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjB0aGUlMjBzY2VuZXMlMjBwaG90b2dyYXBoeSUyMGNhbWVyYXxlbnwxfHx8fDE3ODA5MDA1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Behind the scenes"
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg leading-relaxed opacity-80">
              <p>
                For over a decade, I've traveled the world with one mission: to
                capture moments that transcend time and culture.
              </p>
              <p>
                My work is driven by an obsession with light, shadow, and the
                stories that unfold in between. Each photograph is a window into
                a fleeting moment—preserved forever through the lens.
              </p>
              <p>
                Based between New York and Paris, I collaborate with brands,
                publications, and individuals who share my passion for authentic
                visual storytelling.
              </p>
            </div>

            <div className="pt-8">
              <p className="tracking-[0.2em] uppercase text-sm opacity-50 mb-4">
                Available For
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Editorial',
                  'Commercial',
                  'Travel',
                  'Portraits',
                  'Events',
                  'Workshops',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white/5 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
