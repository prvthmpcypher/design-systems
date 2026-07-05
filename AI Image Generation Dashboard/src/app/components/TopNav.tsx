import { Sparkles, Coins } from 'lucide-react';

interface TopNavProps {
  credits: number;
}

export function TopNav({ credits }: TopNavProps) {
  return (
    <div className="h-16 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl text-neutral-100">AI Image Studio</h1>
      </div>

      <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-lg">
        <Coins className="w-5 h-5 text-yellow-500" />
        <span className="text-neutral-100">{credits}</span>
        <span className="text-neutral-500 text-sm">credits</span>
      </div>
    </div>
  );
}
