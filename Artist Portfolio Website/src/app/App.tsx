import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Interactive3D } from "./components/Interactive3D";
import { ParallaxShowcase } from "./components/ParallaxShowcase";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Portfolio />
      <Interactive3D />
      <ParallaxShowcase />
      <About />
      <Contact />
    </div>
  );
}