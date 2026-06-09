import { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Wand2,
  FileEdit,
  Languages,
  ListChecks,
  BookOpen,
  Lightbulb,
  Repeat
} from 'lucide-react';

interface AIPromptBarProps {
  position: { top: number; left: number };
  onClose: () => void;
}

interface AICommand {
  icon: React.ReactNode;
  label: string;
  description: string;
}

export function AIPromptBar({ position, onClose }: AIPromptBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const commands: AICommand[] = [
    {
      icon: <Sparkles className="w-4 h-4" />,
      label: 'Continue writing',
      description: 'Let AI continue from where you left off'
    },
    {
      icon: <Wand2 className="w-4 h-4" />,
      label: 'Improve writing',
      description: 'Make the text clearer and more engaging'
    },
    {
      icon: <FileEdit className="w-4 h-4" />,
      label: 'Fix spelling & grammar',
      description: 'Correct mistakes in your text'
    },
    {
      icon: <Languages className="w-4 h-4" />,
      label: 'Translate',
      description: 'Translate text to another language'
    },
    {
      icon: <ListChecks className="w-4 h-4" />,
      label: 'Create action items',
      description: 'Extract tasks from text'
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      label: 'Summarize',
      description: 'Create a concise summary'
    },
    {
      icon: <Lightbulb className="w-4 h-4" />,
      label: 'Brainstorm ideas',
      description: 'Generate creative suggestions'
    },
    {
      icon: <Repeat className="w-4 h-4" />,
      label: 'Make longer',
      description: 'Expand and elaborate on content'
    },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed bg-popover border border-border rounded-lg shadow-2xl w-96 overflow-hidden z-50"
      style={{
        top: `${position.top + 8}px`,
        left: `${position.left}px`
      }}
    >
      <div className="p-3 border-b border-border bg-accent/50">
        <div className="relative">
          <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask AI anything or search commands..."
            className="w-full pl-10 pr-3 py-2 bg-background rounded-md text-sm border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="max-h-80 overflow-y-auto">
        {searchQuery && (
          <div className="px-3 py-2 border-b border-border">
            <button className="w-full flex items-start gap-3 p-2 hover:bg-accent rounded-md transition-colors text-left">
              <div className="mt-0.5 p-1.5 bg-primary/10 rounded">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground">Ask AI: "{searchQuery}"</div>
                <div className="text-xs text-muted-foreground mt-0.5">Press Enter to generate</div>
              </div>
            </button>
          </div>
        )}

        <div className="p-2">
          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            AI Commands
          </div>
          {filteredCommands.map((cmd, index) => (
            <button
              key={index}
              className="w-full flex items-start gap-3 p-2 hover:bg-accent rounded-md transition-colors text-left"
              onClick={onClose}
            >
              <div className="mt-0.5 p-1.5 bg-primary/10 rounded text-primary">
                {cmd.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground">{cmd.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{cmd.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-2 border-t border-border bg-accent/30">
        <div className="text-xs text-muted-foreground text-center">
          Press <kbd className="px-1.5 py-0.5 bg-background border border-border rounded text-xs">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
}
