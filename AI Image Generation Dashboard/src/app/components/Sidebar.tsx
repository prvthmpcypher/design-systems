import { Clock } from 'lucide-react';

interface PromptHistoryItem {
  id: string;
  prompt: string;
  timestamp: Date;
}

interface SidebarProps {
  promptHistory: PromptHistoryItem[];
  onSelectPrompt: (prompt: string) => void;
  selectedPromptId: string | null;
}

export function Sidebar({ promptHistory, onSelectPrompt, selectedPromptId }: SidebarProps) {
  return (
    <div className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col h-full">
      <div className="p-4 border-b border-neutral-800">
        <h2 className="text-neutral-100 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Prompt History
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {promptHistory.length === 0 ? (
          <div className="text-neutral-500 text-sm p-4 text-center">
            No prompts yet
          </div>
        ) : (
          <div className="space-y-1">
            {promptHistory.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectPrompt(item.prompt)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedPromptId === item.id
                    ? 'bg-neutral-800 text-neutral-100'
                    : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
                }`}
              >
                <div className="text-sm line-clamp-2 mb-1">{item.prompt}</div>
                <div className="text-xs text-neutral-600">
                  {item.timestamp.toLocaleTimeString()}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
