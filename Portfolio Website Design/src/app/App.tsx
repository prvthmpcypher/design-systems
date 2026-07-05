import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { Process } from "./components/Process";
import { Research } from "./components/Research";
import { DesignSystems } from "./components/DesignSystems";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <CaseStudies />
      <Process />
      <Research />
      <DesignSystems />
      <Testimonials />
      <Contact />
    </div>
  );
}