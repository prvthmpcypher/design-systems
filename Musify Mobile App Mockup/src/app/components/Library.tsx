import React from 'react';
import { Plus, ListMusic, History, Download } from 'lucide-react';
import { mockData } from './mockData';

export function Library() {
  return (
    <div className="px-6 py-4 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[24px] font-bold text-gray-900 tracking-tight">Your Library</h2>
        <button aria-label="Add New" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">
          <Plus size={20} />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[20px] p-4 flex flex-col items-center gap-2 justify-center shadow-sm hover:bg-white/60 transition-colors cursor-pointer">
          <History size={24} className="text-blue-500" />
          <span className="text-[12px] font-semibold text-gray-700">Recent</span>
        </div>
        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[20px] p-4 flex flex-col items-center gap-2 justify-center shadow-sm hover:bg-white/60 transition-colors cursor-pointer">
          <ListMusic size={24} className="text-purple-500" />
          <span className="text-[12px] font-semibold text-gray-700">Playlists</span>
        </div>
        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[20px] p-4 flex flex-col items-center gap-2 justify-center shadow-sm hover:bg-white/60 transition-colors cursor-pointer">
          <Download size={24} className="text-green-500" />
          <span className="text-[12px] font-semibold text-gray-700">Downloads</span>
        </div>
      </div>

      {/* Collections */}
      <div className="flex flex-col gap-3 mt-2">
        {mockData.library.map((item, i) => (
          <div 
            key={item.id} 
            className="flex items-center gap-4 bg-white/30 backdrop-blur-lg border border-white/50 rounded-2xl p-3 shadow-sm hover:bg-white/50 transition-all cursor-pointer group"
          >
            <div className={`w-[56px] h-[56px] rounded-xl flex items-center justify-center shadow-inner ${
              i % 3 === 0 ? 'bg-gradient-to-br from-pink-400 to-purple-500' :
              i % 3 === 1 ? 'bg-gradient-to-br from-blue-400 to-emerald-400' :
              'bg-gradient-to-br from-amber-300 to-orange-500'
            }`}>
              <ListMusic size={24} className="text-white opacity-80" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-[15px] truncate">{item.title}</h3>
              <p className="text-[12px] text-gray-500 font-medium mt-0.5">{item.type} • {item.songs} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}