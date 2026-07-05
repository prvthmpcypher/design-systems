import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'motion/react';
import { Sparkles, Hash } from 'lucide-react';
import { mockData } from './mockData';

export function Explore() {
  return (
    <div className="px-6 py-4 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="text-purple-500" size={24} />
        <h2 className="text-[24px] font-bold text-gray-900 tracking-tight">Discover Vibes</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2">
        {['#chill', '#focus', '#workout', '#party', '#sleep'].map((tag) => (
          <button key={tag} className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm font-medium text-gray-700 shadow-sm hover:bg-white/70 transition-colors whitespace-nowrap">
            <Hash size={14} className="text-gray-400" />
            {tag.replace('#', '')}
          </button>
        ))}
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{300: 2, 400: 2}}>
        <Masonry gutter="12px">
          {mockData.exploreGenres.map((genre, i) => (
            <motion.div
              key={genre.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm ${i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
            >
              <img 
                src={genre.image} 
                alt={genre.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-white font-bold text-[15px] leading-tight drop-shadow-md">
                  {genre.name}
                </span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}