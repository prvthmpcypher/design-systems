import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { mockData } from './mockData';

export function Home() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Horizontal Cards */}
      <section className="mt-2">
        <div className="px-6 pb-4">
          <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">Trending Now</h2>
        </div>
        <div className="pl-6 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-6 pr-6">
          {mockData.trending.map((item) => {
            const isPlaying = playingId === `trending-${item.id}`;
            return (
              <div
                key={item.id}
                className="group min-w-[160px] w-[160px] p-3.5 bg-white/40 backdrop-blur-lg border border-white/60 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className={`absolute inset-0 bg-black/10 transition-opacity flex items-center justify-center ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <button
                      onClick={() => togglePlay(`trending-${item.id}`)}
                      className={`w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ease-out ${isPlaying ? 'translate-y-0' : 'translate-y-2 group-hover:translate-y-0'}`}
                    >
                      {isPlaying ? (
                        <Pause size={18} className="fill-gray-900 text-gray-900" />
                      ) : (
                        <Play size={18} className="fill-gray-900 text-gray-900 ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-[15px] truncate">{item.title}</h3>
                <p className="text-[13px] text-gray-600 truncate mt-0.5">{item.artist}</p>
                <div className="mt-2 flex items-center text-[11px] font-medium text-gray-500 bg-white/50 px-2 py-1 rounded-md w-fit">
                  {item.listeners} listeners
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vertical Cards */}
      <section className="px-6 pb-6">
        <div className="pb-4">
          <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">Recommended</h2>
        </div>
        <div className="flex flex-col gap-3">
          {[...mockData.trending].reverse().map((item) => {
            const isPlaying = playingId === `recommended-${item.id}`;
            return (
              <div
                key={`rec-${item.id}`}
                className="group flex items-center gap-4 bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-white/60 transition-all cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="w-[64px] h-[64px] rounded-xl overflow-hidden relative flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-black/20 transition-opacity flex items-center justify-center ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(`recommended-${item.id}`);
                      }}
                      className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    >
                      {isPlaying ? (
                        <Pause size={16} className="fill-gray-900 text-gray-900" />
                      ) : (
                        <Play size={16} className="fill-gray-900 text-gray-900 ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="font-bold text-gray-900 text-[15px] truncate">{item.title}</h3>
                  <p className="text-[13px] text-gray-600 truncate mt-0.5">{item.artist}</p>
                </div>
                <div className="flex-shrink-0 text-right pr-2">
                  <div className="text-[11px] font-semibold text-gray-400 bg-white/50 px-2 py-1 rounded-md">
                    {item.listeners}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}