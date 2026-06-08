import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileFrame } from "./components/MobileFrame";
import { RadialMenu } from "./components/RadialMenu";
import { HomePage } from "./pages/HomePage";
import { LearnPage } from "./pages/LearnPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ShopPage } from "./pages/ShopPage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import { LessonPage } from "./pages/LessonPage";
import { CompletionPage } from "./pages/CompletionPage";

export default function App() {
  const [radialMenuOpen, setRadialMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isInLesson, setIsInLesson] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [lessonResults, setLessonResults] = useState({ xp: 0, stars: 0 });
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const [userData, setUserData] = useState({
    name: "Alex",
    streak: 5,
    xp: 1250,
    level: 8,
    xpToNextLevel: 1500,
    dailyGoal: 50,
    dailyProgress: 35,
    gems: 120,
  });

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setRadialMenuOpen(false);
  };

  const handleStartLesson = () => {
    setActiveSection("learn");
  };

  const handleLessonSelect = (lessonId: string) => {
    setSelectedLesson(lessonId);
    setIsInLesson(true);
  };

  const handleLessonComplete = (xp: number, stars: number) => {
    setLessonResults({ xp, stars });
    setIsInLesson(false);
    setShowCompletion(true);

    setUserData((prev) => ({
      ...prev,
      xp: prev.xp + xp,
      dailyProgress: prev.dailyProgress + xp,
    }));
  };

  const handleCompletionContinue = () => {
    setShowCompletion(false);
    setActiveSection("home");
  };

  const renderContent = () => {
    if (showCompletion) {
      return (
        <CompletionPage
          xpEarned={lessonResults.xp}
          starsEarned={lessonResults.stars}
          onContinue={handleCompletionContinue}
        />
      );
    }

    if (isInLesson && selectedLesson) {
      return (
        <LessonPage
          lessonId={selectedLesson}
          onComplete={handleLessonComplete}
          onExit={() => {
            setIsInLesson(false);
            setActiveSection("learn");
          }}
        />
      );
    }

    switch (activeSection) {
      case "home":
        return <HomePage userData={userData} onStartLesson={handleStartLesson} />;
      case "learn":
        return (
          <LearnPage
            onBack={() => setActiveSection("home")}
            onLessonSelect={handleLessonSelect}
          />
        );
      case "profile":
        return (
          <ProfilePage
            onBack={() => setActiveSection("home")}
            userData={userData}
          />
        );
      case "shop":
        return (
          <ShopPage
            onBack={() => setActiveSection("home")}
            userGems={userData.gems}
          />
        );
      case "leaderboard":
        return (
          <LeaderboardPage
            onBack={() => setActiveSection("home")}
            currentUser={userData.name}
          />
        );
      default:
        return <HomePage userData={userData} onStartLesson={handleStartLesson} />;
    }
  };

  return (
    <MobileFrame>
      {renderContent()}

      {!isInLesson && !showCompletion && (
        <button
          onClick={() => setRadialMenuOpen(true)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center text-white z-50"
        >
          <Menu className="w-8 h-8" />
        </button>
      )}

      <RadialMenu
        isOpen={radialMenuOpen}
        onClose={() => setRadialMenuOpen(false)}
        onNavigate={handleNavigate}
      />
    </MobileFrame>
  );
}