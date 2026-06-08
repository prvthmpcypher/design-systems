import { useState, useEffect } from 'react';
import { CharacterProfile } from './components/CharacterProfile';
import { SkillTree } from './components/SkillTree';
import { GameProjects } from './components/GameProjects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { WorldMap } from './components/WorldMap';
import { QuestNotification } from './components/QuestNotification';
import { XPBar } from './components/XPBar';
import { GameMenu } from './components/GameMenu';
import confetti from 'canvas-confetti';

type Section = 'map' | 'character' | 'skills' | 'projects' | 'achievements' | 'contact';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('map');
  const [unlockedSections, setUnlockedSections] = useState<Set<Section>>(new Set(['map', 'character']));
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const xpForNextLevel = level * 1000;

  useEffect(() => {
    if (xp >= xpForNextLevel) {
      setLevel(prev => prev + 1);
      setXp(0);
      triggerLevelUp();
    }
  }, [xp, xpForNextLevel]);

  const triggerLevelUp = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    showQuest('LEVEL UP! You reached level ' + (level + 1));
  };

  const showQuest = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const unlockSection = (section: Section) => {
    if (!unlockedSections.has(section)) {
      setUnlockedSections(prev => new Set([...prev, section]));
      addXP(250);
      showQuest(`New Area Unlocked: ${section.toUpperCase()}`);
    }
  };

  const addXP = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const navigateTo = (section: Section) => {
    if (unlockedSections.has(section)) {
      setCurrentSection(section);
      addXP(50);
    }
  };

  return (
    <div className="size-full bg-gradient-to-b from-slate-950 via-slate-900 to-purple-950 text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      {/* HUD */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              LEVEL {level}
            </div>
            <XPBar current={xp} max={xpForNextLevel} />
          </div>
          <GameMenu
            currentSection={currentSection}
            unlockedSections={unlockedSections}
            onNavigate={navigateTo}
          />
        </div>
      </div>

      {/* Quest notification */}
      {showNotification && (
        <QuestNotification message={notificationMessage} />
      )}

      {/* Main content */}
      <div className="size-full pt-24 pb-8 px-4 overflow-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {currentSection === 'map' && (
            <WorldMap
              onSelectArea={navigateTo}
              unlockedSections={unlockedSections}
              onUnlock={unlockSection}
            />
          )}
          {currentSection === 'character' && (
            <CharacterProfile level={level} xp={xp} onAddXP={addXP} />
          )}
          {currentSection === 'skills' && (
            <SkillTree onUnlock={() => addXP(100)} />
          )}
          {currentSection === 'projects' && (
            <GameProjects onComplete={() => addXP(300)} />
          )}
          {currentSection === 'achievements' && (
            <Achievements level={level} xp={xp} />
          )}
          {currentSection === 'contact' && (
            <Contact onMessageSent={() => addXP(150)} />
          )}
        </div>
      </div>
    </div>
  );
}
