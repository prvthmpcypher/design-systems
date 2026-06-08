import { motion } from "motion/react";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "var(--neon-pink)" },
    { icon: Twitter, label: "Twitter", href: "#", color: "var(--neon-cyan)" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "var(--neon-yellow)" },
    { icon: Mail, label: "Email", href: "#", color: "var(--neon-green)" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-24">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-center leading-none mb-16"
          style={{
            background: "linear-gradient(135deg, var(--neon-green), var(--neon-cyan), var(--neon-pink))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          LET'S
          <br />
          TALK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl md:text-2xl mb-12 opacity-90"
        >
          Ready to collaborate on your next project?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-3 p-6 border-2 transition-all"
              style={{
                borderColor: link.color,
              }}
            >
              <link.icon
                size={32}
                style={{ color: link.color }}
              />
              <span className="text-sm uppercase tracking-wider" style={{ color: link.color }}>
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 0, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 text-xl uppercase tracking-widest"
            style={{
              background: "linear-gradient(135deg, var(--neon-pink), var(--neon-purple))",
              color: "#ffffff",
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-24 text-center text-sm opacity-50 uppercase tracking-widest"
        >
          © 2026 Artist Portfolio. All rights reserved.
        </motion.div>
      </div>
    </section>
  );
}
