import { Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SettingsPanelProps {
  model: string;
  aspectRatio: string;
  quality: string;
  onModelChange: (model: string) => void;
  onAspectRatioChange: (ratio: string) => void;
  onQualityChange: (quality: string) => void;
}

export function SettingsPanel({
  model,
  aspectRatio,
  quality,
  onModelChange,
  onAspectRatioChange,
  onQualityChange,
}: SettingsPanelProps) {
  const models = ['DALL-E 3', 'Stable Diffusion XL', 'Midjourney v6', 'Flux Pro'];
  const aspectRatios = ['1:1', '16:9', '9:16', '4:3', '3:4'];
  const qualities = ['Standard', 'High', 'Ultra'];

  return (
    <div className="w-80 bg-neutral-900 border-l border-neutral-800 flex flex-col h-full">
      <div className="p-4 border-b border-neutral-800">
        <h2 className="text-neutral-100 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Generation Settings
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <SettingSection
          label="Model"
          value={model}
          options={models}
          onChange={onModelChange}
        />

        <SettingSection
          label="Aspect Ratio"
          value={aspectRatio}
          options={aspectRatios}
          onChange={onAspectRatioChange}
        />

        <SettingSection
          label="Quality"
          value={quality}
          options={qualities}
          onChange={onQualityChange}
        />

        <div>
          <label className="text-sm text-neutral-400 block mb-2">
            Number of Images
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 4, 8].map((num) => (
              <button
                key={num}
                className={`py-2 rounded-lg transition-colors ${
                  num === 4
                    ? 'bg-purple-600 text-white'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-neutral-400 block mb-2">
            Steps
          </label>
          <input
            type="range"
            min="10"
            max="50"
            defaultValue="30"
            className="w-full accent-purple-600"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>10</span>
            <span>30</span>
            <span>50</span>
          </div>
        </div>

        <div>
          <label className="text-sm text-neutral-400 block mb-2">
            CFG Scale
          </label>
          <input
            type="range"
            min="1"
            max="20"
            defaultValue="7"
            className="w-full accent-purple-600"
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>1</span>
            <span>7</span>
            <span>20</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-neutral-800">
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
          Generate Images
        </button>
      </div>
    </div>
  );
}

function SettingSection({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <label className="text-sm text-neutral-400 block mb-2">{label}</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-neutral-800 text-neutral-100 px-4 py-2 rounded-lg flex items-center justify-between hover:bg-neutral-700 transition-colors"
        >
          <span>{value}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden z-10 shadow-xl">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 transition-colors ${
                  option === value
                    ? 'bg-purple-600 text-white'
                    : 'text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
