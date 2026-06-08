import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FashionShowSlide {
  image: string;
  title: string;
  season: string;
  description: string;
}

interface FashionShowCarouselProps {
  slides: FashionShowSlide[];
}

export function FashionShowCarousel({ slides }: FashionShowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="relative h-full">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)',
              }}
              animate={{
                y: ['0%', '50%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="absolute left-0 top-1/2 -translate-y-1/2 p-12 max-w-2xl">
              <motion.p
                className="text-xs tracking-[0.4em] text-amber-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentIndex].season}
              </motion.p>

              <motion.h2
                className="text-6xl font-light text-white mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentIndex].title}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white/30 hover:border-amber-400 hover:bg-amber-400/10 transition-all flex items-center justify-center group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-400" />
      </button>

      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white/30 hover:border-amber-400 hover:bg-amber-400/10 transition-all flex items-center justify-center group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-400" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-0.5 transition-all ${
              index === currentIndex ? 'bg-amber-400' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
