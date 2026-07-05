import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router';
import {
  Settings,
  Search,
  Home,
  Library,
  Compass,
  Play,
  Pause,
  SkipForward,
  Heart
} from 'lucide-react';
import { mockData } from './mockData';

export function Root() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-[420px] h-[100dvh] md:h-[860px] bg-slate-50/80 md:rounded-[40px] shadow-2xl relative overflow-hidden md:border-[8px] border-white z-0 flex flex-col">
        
        {/* Background Ambient Orbs for Glassmorphism Effect */}
        <div className="absolute top-[-5%] left-[-10%] w-[320px] h-[320px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[90px] opacity-70 z-[-1] pointer-events-none" />
        <div className="absolute top-[25%] right-[-20%] w-[300px] h-[300px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[90px] opacity-60 z-[-1] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-15%] w-[350px] h-[350px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[90px] opacity-60 z-[-1] pointer-events-none" />

        {/* Top Header */}
        <header className="pt-14 px-6 pb-4 flex gap-3 items-center z-10 relative flex-shrink-0">
          <button
            aria-label="Settings"
            onClick={() => navigate('/settings')}
            className="p-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-700 hover:bg-white/60 transition-colors flex-shrink-0"
          >
            <Settings size={20} />
          </button>

          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Blinding Lights"
              className="w-full h-12 pl-11 pr-4 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-gray-900 placeholder:text-gray-500 hover:bg-white/60 focus:bg-white/60 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors"
            />
          </div>

          <button aria-label="Profile" className="relative flex-shrink-0">
            <img src={mockData.user.avatarUrl} alt="User Profile" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" />
          </button>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-[160px] relative z-10">
          <Outlet />
        </main>

        {/* Fixed Bottom UI (Player + Navigation) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 md:pb-8 flex flex-col gap-3 z-50 pointer-events-none">
          
          {/* Now Playing Card */}
          <div
            onClick={() => navigate('/player')}
            className="pointer-events-auto mx-1 relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[20px] p-2 flex items-center justify-between group overflow-hidden cursor-pointer hover:bg-white/70 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0 z-10 pl-1">
              <div className="relative w-12 h-12 rounded-[12px] overflow-hidden shadow-sm flex-shrink-0">
                <img src={mockData.nowPlaying.image} alt="Playing cover" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 pr-2 flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-900 text-[15px] truncate tracking-tight">{mockData.nowPlaying.title}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-gray-600 truncate mt-0.5">
                  <span>{mockData.nowPlaying.artist}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <span className="flex items-center gap-1">
                    {mockData.nowPlaying.listeners} listeners
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2 z-10">
              <button aria-label="Favorite" className="p-2 text-gray-500 hover:text-pink-500 transition-colors">
                <Heart size={20} className="hover:fill-pink-500" />
              </button>
              <button 
                aria-label={isPlaying ? "Pause" : "Play"}
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
              </button>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/40 z-10">
              <div className="h-full bg-gray-900 w-[45%] rounded-r-full"></div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <nav className="pointer-events-auto bg-white/70 backdrop-blur-3xl border border-white/80 shadow-[0_16px_40px_rgba(31,38,135,0.12)] rounded-[28px] px-8 py-4 flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 pointer-events-none"></div>
            
            <NavLink to="/" end className={({ isActive }) => `flex flex-col items-center gap-1.5 p-1 relative z-10 group`}>
              {({ isActive }) => (
                <>
                  <div className={`absolute -top-3 w-1 h-1 rounded-full bg-gray-900 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <Home size={24} className={isActive ? 'fill-gray-900 stroke-gray-900' : 'stroke-gray-500 group-hover:stroke-gray-700'} />
                  <span className={`text-[11px] font-semibold transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>Home</span>
                </>
              )}
            </NavLink>

            <NavLink to="/explore" className={({ isActive }) => `flex flex-col items-center gap-1.5 p-1 relative z-10 group`}>
              {({ isActive }) => (
                <>
                  <div className={`absolute -top-3 w-1 h-1 rounded-full bg-gray-900 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <Compass size={24} className={isActive ? 'fill-gray-900 stroke-gray-900' : 'stroke-gray-500 group-hover:stroke-gray-700'} />
                  <span className={`text-[11px] font-semibold transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>Explore</span>
                </>
              )}
            </NavLink>

            <NavLink to="/library" className={({ isActive }) => `flex flex-col items-center gap-1.5 p-1 relative z-10 group`}>
              {({ isActive }) => (
                <>
                  <div className={`absolute -top-3 w-1 h-1 rounded-full bg-gray-900 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <Library size={24} className={isActive ? 'fill-gray-900 stroke-gray-900' : 'stroke-gray-500 group-hover:stroke-gray-700'} />
                  <span className={`text-[11px] font-semibold transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>Library</span>
                </>
              )}
            </NavLink>

          </nav>
        </div>
      </div>
    </div>
  );
}