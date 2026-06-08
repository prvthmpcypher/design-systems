import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  onMessageSent: () => void;
}

export function Contact({ onMessageSent }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onMessageSent();
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', color: 'from-slate-500 to-slate-700' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'from-blue-500 to-blue-700' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', color: 'from-cyan-500 to-blue-500' },
    { icon: MessageSquare, label: 'Discord', url: 'https://discord.com', color: 'from-purple-500 to-indigo-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-rose-500 px-6 py-3 rounded-full">
          <Mail className="w-6 h-6" />
          <h1 className="text-3xl font-bold">CONTACT QUEST</h1>
        </div>
        <p className="text-slate-400 mt-2">Send a message to start a new adventure</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-slate-900/90 to-red-900/30 p-6 rounded-2xl border-2 border-red-500/30"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-red-400" />
            Send Message
          </h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border-2 border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-shadow"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-green-400 mb-2">Quest Complete!</h4>
              <p className="text-slate-300">Your message has been sent successfully.</p>
              <p className="text-sm text-slate-400 mt-2">+150 XP Earned</p>
            </motion.div>
          )}
        </motion.div>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Social Links */}
          <div className="bg-gradient-to-br from-slate-900/90 to-purple-900/30 p-6 rounded-2xl border-2 border-purple-500/30">
            <h3 className="text-xl font-bold mb-6">Social Channels</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      p-4 rounded-xl bg-gradient-to-br ${social.color}
                      flex flex-col items-center gap-2 text-center
                      hover:shadow-lg transition-all
                    `}
                  >
                    <Icon className="w-8 h-8" />
                    <span className="text-sm font-semibold">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-slate-900/90 to-cyan-900/30 p-6 rounded-2xl border-2 border-cyan-500/30">
            <h3 className="text-xl font-bold mb-4">Quick Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">gamedev@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Available for freelance</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-slate-900/90 to-yellow-900/30 p-6 rounded-2xl border-2 border-yellow-500/30">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Let's Collaborate!</h3>
            <p className="text-slate-300 text-sm">
              Looking for a skilled game developer to bring your vision to life? Let's team up
              and create something legendary together!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
