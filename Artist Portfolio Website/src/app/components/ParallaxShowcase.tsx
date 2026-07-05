import { ScrollReveal } from "./ScrollReveal";

const showcaseItems = [
  {
    id: 1,
    title: "SPECTRAL",
    image: "https://images.unsplash.com/photo-1773982594051-d8ac8e587fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "AURORA",
    image: "https://images.unsplash.com/photo-1776663772031-bc08915613d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 3,
    title: "PRISMA",
    image: "https://images.unsplash.com/photo-1775887065658-988ef1c262c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 4,
    title: "NEXUS",
    image: "https://images.unsplash.com/photo-1732020858816-93c130ab8f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function ParallaxShowcase() {
  return (
    <section className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <h2
          className="text-[10rem] md:text-[16rem] font-black opacity-10"
          style={{
            background: "linear-gradient(135deg, var(--neon-pink), var(--neon-cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SCROLL
        </h2>
      </div>

      <div className="relative">
        {showcaseItems.map((item, index) => (
          <ScrollReveal
            key={item.id}
            imageUrl={item.image}
            title={item.title}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
