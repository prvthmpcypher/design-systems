import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@dataexplorer.space', color: '#3b82f6' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0077b5' },
    { icon: Github, label: 'GitHub', href: '#', color: '#ffffff' },
    { icon: Twitter, label: 'Twitter', href: '#', color: '#1da1f2' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Make Contact
          </h2>
          <p className="text-gray-400">Send a message across the data universe</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you're interested in collaboration, have a question about my research,
                or just want to discuss the latest in data science, I'd love to hear from you.
              </p>

              <div className="flex items-center gap-3 text-gray-300 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>hello@dataexplorer.space</span>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Follow My Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="p-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/30 transition-all"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        boxShadow: `0 0 20px ${link.color}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: link.color }} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="mb-2 text-blue-400">Open to Opportunities</h4>
              <p className="text-sm text-gray-400">
                Currently exploring new frontiers in AI research and data-driven innovation.
                Available for consulting and collaboration.
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="block mb-2 text-sm text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
                rows={6}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
