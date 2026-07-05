import { motion } from 'motion/react';
import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-32 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-4">
            Let's Create
          </p>
          <h2 className="text-5xl md:text-8xl tracking-tight mb-8">
            Get In Touch
          </h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            Available for commissions, collaborations, and creative projects
            worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'hello@lens.studio',
              href: 'mailto:hello@lens.studio',
            },
            {
              icon: Instagram,
              label: 'Instagram',
              value: '@lens.studio',
              href: 'https://instagram.com',
            },
            {
              icon: MapPin,
              label: 'Based In',
              value: 'New York / Paris',
              href: null,
            },
          ].map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors">
                <contact.icon size={24} className="opacity-70" />
              </div>
              <p className="text-sm tracking-[0.2em] uppercase opacity-50 mb-3">
                {contact.label}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-lg">{contact.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:opacity-40"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:opacity-40"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:opacity-40"
            />
            <textarea
              placeholder="Tell me about your project"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:opacity-40 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-white text-black py-4 rounded-sm tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-32 pb-12"
        >
          <p className="text-sm opacity-40">
            © 2026 Lens Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
