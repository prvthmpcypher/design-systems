import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopToolbar } from './components/TopToolbar';
import { Editor } from './components/Editor';
import { AIPromptBar } from './components/AIPromptBar';

export default function App() {
  const [showAIPrompt, setShowAIPrompt] = useState(false);
  const [aiPromptPosition, setAIPromptPosition] = useState({ top: 0, left: 0 });

  return (
    <div className="dark flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopToolbar />

        <Editor
          onShowAIPrompt={(position) => {
            setShowAIPrompt(true);
            setAIPromptPosition(position);
          }}
        />

        {showAIPrompt && (
          <AIPromptBar
            position={aiPromptPosition}
            onClose={() => setShowAIPrompt(false)}
          />
        )}
      </div>
    </div>
  );
}