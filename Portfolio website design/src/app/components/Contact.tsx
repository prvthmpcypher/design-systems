import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077b5" },
  { icon: Github, href: "#", label: "GitHub", color: "#333" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1da1f2" },
  { icon: Mail, href: "#", label: "Email", color: "#ea4335" },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'linear-gradient(135deg, #ec4899, #f59e0b)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can create exceptional experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <motion.input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                  animate={{
                    borderColor: focused === "name" ? "#6366f1" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email</label>
                <motion.input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                  animate={{
                    borderColor: focused === "email" ? "#6366f1" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Message</label>
                <motion.textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  rows={6}
                  animate={{
                    borderColor: focused === "message" ? "#6366f1" : "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-2xl mb-6">Connect With Me</h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted border border-border hover:border-primary/50 transition-all group"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${social.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </motion.div>
                    <span className="group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h4 className="text-lg mb-2">Available for Projects</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently accepting new projects and collaborations. Let's build something amazing together.
                </p>
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-green-500">Available Now</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-12 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            Designed & Built with attention to detail • 2026
          </p>
          <motion.p
            className="text-xs text-muted-foreground mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            This portfolio is itself a UX case study
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
