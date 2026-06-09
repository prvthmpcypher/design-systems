import { useState, useRef, KeyboardEvent } from 'react';
import {
  Type,
  Heading1,
  Heading2,
  Heading3,
  List,
  CheckSquare,
  Image as ImageIcon,
  Code,
  Quote,
  Sparkles
} from 'lucide-react';

interface EditorProps {
  onShowAIPrompt: (position: { top: number; left: number }) => void;
}

interface Block {
  id: string;
  type: 'heading1' | 'heading2' | 'heading3' | 'paragraph' | 'list' | 'checklist' | 'code' | 'quote';
  content: string;
  checked?: boolean;
}

export function Editor({ onShowAIPrompt }: EditorProps) {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: '1', type: 'heading1', content: 'Introduction to AI-Powered Knowledge Base' },
    { id: '2', type: 'paragraph', content: 'This is a modern knowledge base tool that combines the power of block-based editing with AI assistance. Start typing and press "/" to see AI commands.' },
    { id: '3', type: 'heading2', content: 'Key Features' },
    { id: '4', type: 'list', content: 'Block-based content editing' },
    { id: '5', type: 'list', content: 'AI-powered content generation' },
    { id: '6', type: 'list', content: 'Real-time collaboration' },
    { id: '7', type: 'heading3', content: 'Getting Started' },
    { id: '8', type: 'paragraph', content: 'Press "/" anywhere to trigger AI suggestions, or use the block menu to add different content types.' },
  ]);

  const [focusedBlock, setFocusedBlock] = useState<string | null>(null);
  const blockRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, blockId: string) => {
    if (e.key === '/') {
      const block = blockRefs.current[blockId];
      if (block) {
        const rect = block.getBoundingClientRect();
        onShowAIPrompt({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX
        });
      }
    }
  };

  const renderBlock = (block: Block) => {
    const commonClasses = "outline-none focus:bg-accent/30 rounded px-3 py-2 transition-colors";

    switch (block.type) {
      case 'heading1':
        return (
          <h1
            ref={el => blockRefs.current[block.id] = el}
            contentEditable
            suppressContentEditableWarning
            className={`${commonClasses} text-4xl font-semibold mb-2`}
            onFocus={() => setFocusedBlock(block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
          >
            {block.content}
          </h1>
        );
      case 'heading2':
        return (
          <h2
            ref={el => blockRefs.current[block.id] = el}
            contentEditable
            suppressContentEditableWarning
            className={`${commonClasses} text-2xl font-semibold mb-2 mt-6`}
            onFocus={() => setFocusedBlock(block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
          >
            {block.content}
          </h2>
        );
      case 'heading3':
        return (
          <h3
            ref={el => blockRefs.current[block.id] = el}
            contentEditable
            suppressContentEditableWarning
            className={`${commonClasses} text-xl font-semibold mb-2 mt-4`}
            onFocus={() => setFocusedBlock(block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
          >
            {block.content}
          </h3>
        );
      case 'list':
        return (
          <div className="flex items-start gap-2 mb-1">
            <span className="text-muted-foreground mt-2">•</span>
            <div
              ref={el => blockRefs.current[block.id] = el}
              contentEditable
              suppressContentEditableWarning
              className={`${commonClasses} flex-1`}
              onFocus={() => setFocusedBlock(block.id)}
              onKeyDown={(e) => handleKeyDown(e, block.id)}
            >
              {block.content}
            </div>
          </div>
        );
      case 'checklist':
        return (
          <div className="flex items-start gap-2 mb-1">
            <input
              type="checkbox"
              checked={block.checked}
              className="mt-2.5 w-4 h-4 rounded border-border"
              onChange={() => {
                setBlocks(blocks.map(b =>
                  b.id === block.id ? { ...b, checked: !b.checked } : b
                ));
              }}
            />
            <div
              ref={el => blockRefs.current[block.id] = el}
              contentEditable
              suppressContentEditableWarning
              className={`${commonClasses} flex-1 ${block.checked ? 'line-through text-muted-foreground' : ''}`}
              onFocus={() => setFocusedBlock(block.id)}
              onKeyDown={(e) => handleKeyDown(e, block.id)}
            >
              {block.content}
            </div>
          </div>
        );
      case 'code':
        return (
          <pre
            ref={el => blockRefs.current[block.id] = el}
            contentEditable
            suppressContentEditableWarning
            className={`${commonClasses} bg-muted font-mono text-sm p-4 rounded-lg my-2 overflow-x-auto`}
            onFocus={() => setFocusedBlock(block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
          >
            {block.content}
          </pre>
        );
      case 'quote':
        return (
          <blockquote
            ref={el => blockRefs.current[block.id] = el}
            contentEditable
            suppressContentEditableWarning
            className={`${commonClasses} border-l-4 border-primary pl-4 italic text-muted-foreground my-2`}
            onFocus={() => setFocusedBlock(block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
          >
            {block.content}
          </blockquote>
        );
      default:
        return (
          <p
            ref={el => blockRefs.current[block.id] = el}
            contentEditable
            suppressContentEditableWarning
            className={`${commonClasses} mb-2`}
            onFocus={() => setFocusedBlock(block.id)}
            onKeyDown={(e) => handleKeyDown(e, block.id)}
          >
            {block.content}
          </p>
        );
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {blocks.map(block => (
          <div key={block.id} className="group relative">
            {renderBlock(block)}
            {focusedBlock === block.id && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:bg-accent rounded">
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            )}
          </div>
        ))}

        <div
          contentEditable
          className="outline-none focus:bg-accent/30 rounded px-3 py-2 text-muted-foreground"
          placeholder="Press '/' for commands..."
        >

        </div>
      </div>
    </div>
  );
}
