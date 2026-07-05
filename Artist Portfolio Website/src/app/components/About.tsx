import { motion } from "motion/react";

export function About() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-[8rem] md:text-[10rem] font-black leading-none mb-8"
            style={{
              background: "linear-gradient(135deg, var(--neon-yellow), var(--neon-orange))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ABOUT
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="opacity-90">
              Pushing the boundaries of digital expression through bold colors,
              experimental techniques, and immersive experiences.
            </p>
            <p className="opacity-90">
              Specializing in neon-infused digital art, 3D design, and mixed media
              installations that challenge perception and ignite imagination.
            </p>
            <p className="opacity-90">
              Based in the digital realm, creating for galleries worldwide.
            </p>
          </div>

          <motion.div
            className="mt-12 flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border-2 uppercase tracking-wider text-sm"
              style={{
                borderColor: "var(--neon-yellow)",
                color: "var(--neon-yellow)",
              }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, var(--neon-pink), var(--neon-purple), var(--neon-cyan))",
            }}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-8 border-4"
            style={{ borderColor: "var(--neon-yellow)" }}
            animate={{
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              boxShadow: "0 0 100px rgba(255, 0, 255, 0.5), 0 0 150px rgba(0, 255, 255, 0.3)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
