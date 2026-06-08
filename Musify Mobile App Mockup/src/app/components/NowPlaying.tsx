import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  ChevronDown,
  Heart,
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
  MoreHorizontal,
  ListMusic
} from 'lucide-react';
import { mockData } from './mockData';

export function NowPlaying() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(45);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = Math.floor((progress / 100) * 248);
  const totalTime = 248;

  return (
    <div className="flex flex-col h-full px-6 pb-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between pt-2 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-gray-700 hover:bg-white/60 transition-colors"
          aria-label="Go back"
        >
          <ChevronDown size={22} />
        </button>
        <div className="text-center flex-1">
          <p className="text-[13px] font-semibold text-gray-700">NOW PLAYING</p>
        </div>
        <button
          className="p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-gray-700 hover:bg-white/60 transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal size={22} />
        </button>
      </div>

      {/* Circular Album Art */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="relative">
          {/* Rotating vinyl effect */}
          <div className={`relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${isPlaying ? 'animate-spin-slow' : ''}`}
               style={{ animationDuration: '20s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
            <img
              src={mockData.nowPlaying.image}
              alt={mockData.nowPlaying.title}
              className="w-full h-full object-cover"
            />
            {/* Center hole effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-900/80 backdrop-blur-sm border-4 border-white/60 shadow-inner"></div>
          </div>

          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-xl -z-10"></div>
        </div>
      </div>

      {/* Song Info */}
      <div className="text-center pb-6">
        <h1 className="text-[26px] font-bold text-gray-900 tracking-tight mb-1">
          {mockData.nowPlaying.title}
        </h1>
        <p className="text-[16px] text-gray-600">{mockData.nowPlaying.artist}</p>
        <div className="flex items-center justify-center gap-2 mt-2 text-[13px] text-gray-500">
          <span>{mockData.nowPlaying.listeners} listeners</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="pb-4">
        <div className="relative h-1.5 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="absolute h-full bg-gray-900 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-[12px] text-gray-600 mt-2 px-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(totalTime)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pb-4">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`p-3 rounded-full transition-all ${isLiked ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
          aria-label="Like"
        >
          <Heart size={24} className={isLiked ? 'fill-pink-500' : ''} />
        </button>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors" aria-label="Shuffle">
            <Shuffle size={22} />
          </button>

          <button className="p-3 text-gray-700 hover:text-gray-900 transition-colors" aria-label="Previous">
            <SkipBack size={28} fill="currentColor" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={28} fill="currentColor" />
            ) : (
              <Play size={28} fill="currentColor" className="ml-1" />
            )}
          </button>

          <button className="p-3 text-gray-700 hover:text-gray-900 transition-colors" aria-label="Next">
            <SkipForward size={28} fill="currentColor" />
          </button>

          <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors" aria-label="Repeat">
            <Repeat size={22} />
          </button>
        </div>

        <button className="p-3 text-gray-600 hover:text-gray-900 transition-colors" aria-label="Queue">
          <ListMusic size={24} />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3 bg-white/40 backdrop-blur-lg border border-white/60 rounded-[20px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <Volume2 size={20} className="text-gray-600 flex-shrink-0" />
        <div className="flex-1 relative h-1.5 bg-white/60 rounded-full overflow-hidden">
          <div className="absolute h-full bg-gray-900 rounded-full w-[70%]"></div>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="70"
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
