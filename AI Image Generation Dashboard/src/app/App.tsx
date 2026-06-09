import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { ImageCanvas } from './components/ImageCanvas';
import { SettingsPanel } from './components/SettingsPanel';

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  liked: boolean;
}

interface PromptHistoryItem {
  id: string;
  prompt: string;
  timestamp: Date;
}

export default function App() {
  const [credits] = useState(1250);
  const [model, setModel] = useState('DALL-E 3');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [quality, setQuality] = useState('High');
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);

  const [promptHistory] = useState<PromptHistoryItem[]>([
    {
      id: '1',
      prompt: 'A futuristic cyberpunk cityscape with neon lights and flying cars',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: '2',
      prompt: 'Serene mountain landscape at sunset with a crystal clear lake',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
    },
    {
      id: '3',
      prompt: 'Abstract geometric patterns in vibrant colors',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: '4',
      prompt: 'Portrait of a wise old wizard with magical aura',
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
    },
  ]);

  const [images, setImages] = useState<GeneratedImage[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc4MDkxNjczNnww&ixlib=rb-4.1.0&q=80&w=1080',
      prompt: 'A futuristic cyberpunk cityscape with neon lights and flying cars',
      liked: false,
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1535391879778-3bae11d29a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc4MDkxNjczNnww&ixlib=rb-4.1.0&q=80&w=1080',
      prompt: 'A futuristic cyberpunk cityscape with neon lights and flying cars',
      liked: true,
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1672872476232-da16b45c9001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc4MDkxNjczNnww&ixlib=rb-4.1.0&q=80&w=1080',
      prompt: 'A futuristic cyberpunk cityscape with neon lights and flying cars',
      liked: false,
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1573456170607-b885fdc78985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc4MDkxNjczNnww&ixlib=rb-4.1.0&q=80&w=1080',
      prompt: 'A futuristic cyberpunk cityscape with neon lights and flying cars',
      liked: false,
    },
  ]);

  const handleToggleLike = (id: string) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, liked: !img.liked } : img
      )
    );
  };

  const handleSelectPrompt = (prompt: string) => {
    const item = promptHistory.find((p) => p.prompt === prompt);
    if (item) {
      setSelectedPromptId(item.id);
    }
  };

  return (
    <div className="size-full flex flex-col bg-neutral-950">
      <TopNav credits={credits} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          promptHistory={promptHistory}
          onSelectPrompt={handleSelectPrompt}
          selectedPromptId={selectedPromptId}
        />

        <ImageCanvas images={images} onToggleLike={handleToggleLike} />

        <SettingsPanel
          model={model}
          aspectRatio={aspectRatio}
          quality={quality}
          onModelChange={setModel}
          onAspectRatioChange={setAspectRatio}
          onQualityChange={setQuality}
        />
      </div>
    </div>
  );
}