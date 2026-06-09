import { Download, Maximize2, Heart } from 'lucide-react';
import { useState } from 'react';

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  liked: boolean;
}

interface ImageCanvasProps {
  images: GeneratedImage[];
  onToggleLike: (id: string) => void;
}

export function ImageCanvas({ images, onToggleLike }: ImageCanvasProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="flex-1 bg-neutral-950 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl text-neutral-100 mb-2">Generated Images</h2>
          <p className="text-neutral-500">
            Your AI-generated results will appear here
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square bg-neutral-900 rounded-xl overflow-hidden group"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.url}
                alt={image.prompt}
                className="w-full h-full object-cover"
              />

              {hoveredId === image.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <button
                      onClick={() => onToggleLike(image.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        image.liked
                          ? 'bg-pink-600 text-white'
                          : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700/80'
                      }`}
                    >
                      <Heart className="w-5 h-5" fill={image.liked ? 'currentColor' : 'none'} />
                    </button>

                    <button className="p-2 bg-neutral-800/80 text-neutral-300 rounded-lg hover:bg-neutral-700/80 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>

                    <button className="p-2 bg-neutral-800/80 text-neutral-300 rounded-lg hover:bg-neutral-700/80 transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-neutral-300 line-clamp-2">
                    {image.prompt}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-neutral-900 rounded-xl flex items-center justify-center border-2 border-dashed border-neutral-800"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl text-neutral-600">{i}</span>
                  </div>
                  <p className="text-neutral-600 text-sm">Awaiting generation</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
