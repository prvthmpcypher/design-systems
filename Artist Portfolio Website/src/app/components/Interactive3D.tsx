import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProductSpinner } from "./ProductSpinner";
import { ARViewer } from "./ARViewer";

const products = [
  {
    id: 1,
    title: "Neon Flux",
    description: "Metallic Sculpture",
    image: "https://images.unsplash.com/photo-1773984179020-0af107627279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "Cyber Crystal",
    description: "Digital Artifact",
    image: "https://images.unsplash.com/photo-1763021225760-1f9101fd3b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 3,
    title: "Liquid Chrome",
    description: "Abstract Form",
    image: "https://images.unsplash.com/photo-1764264136111-2ff91eeace99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const arShowcase = [
  {
    id: 1,
    title: "Holographic Dreams",
    image: "https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "Quantum Sphere",
    image: "https://images.unsplash.com/photo-1712295214766-a604cc48c1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function Interactive3D() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 px-4 md:px-8">
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[8rem] md:text-[12rem] font-black mb-4 leading-none"
          style={{
            background: "linear-gradient(135deg, var(--neon-purple), var(--neon-cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          3D
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-16 uppercase tracking-widest opacity-70"
        >
          Interactive Product Showcase
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <ProductSpinner
                imageUrl={product.image}
                title={product.title}
                description={product.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--neon-pink), transparent)" }} />
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wider" style={{ color: "var(--neon-pink)" }}>
              AR Preview Mode
            </h3>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--neon-pink), transparent)" }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {arShowcase.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="aspect-square border-2 p-4"
              style={{
                borderColor: "var(--neon-cyan)",
                boxShadow: "0 0 40px rgba(0, 255, 255, 0.3)",
              }}
            >
              <ARViewer imageUrl={item.image} title={item.title} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-12 py-6 border-2 uppercase tracking-widest cursor-pointer"
            style={{
              borderColor: "var(--neon-purple)",
              background: "linear-gradient(135deg, rgba(157, 0, 255, 0.2), rgba(255, 0, 255, 0.2))",
            }}
          >
            <span className="text-xl" style={{ color: "var(--neon-purple)" }}>
              Explore Full Collection
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
