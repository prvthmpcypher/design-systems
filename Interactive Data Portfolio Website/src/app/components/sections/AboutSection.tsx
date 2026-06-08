import { motion } from 'motion/react';
import { Constellation } from '../Constellation';

export function AboutSection() {
  const aboutConstellation = [
    { x: 0.2, y: 0.3, label: 'Data Science', value: 95 },
    { x: 0.4, y: 0.2, label: 'ML/AI', value: 90 },
    { x: 0.6, y: 0.25, label: 'Analytics', value: 88 },
    { x: 0.7, y: 0.4, label: 'Visualization', value: 92 },
    { x: 0.5, y: 0.5, label: 'Research', value: 85 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Explorer
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Navigating the cosmos of data, one insight at a time
            </p>
          </motion.div>

          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to my data universe. I'm a data scientist and researcher passionate about
            transforming complex datasets into meaningful insights. Like stars forming constellations,
            I connect data points to reveal hidden patterns and tell compelling stories.
          </motion.p>

          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            With expertise in machine learning, statistical analysis, and data visualization,
            I explore the infinite possibilities within data to drive innovation and discovery.
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/50 rounded-lg transition-colors">
              View Projects
            </button>
            <button className="px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/50 rounded-lg transition-colors">
              Download CV
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="h-[400px] relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Constellation dataPoints={aboutConstellation} color="#60a5fa" />
        </motion.div>
      </div>
    </div>
  );
}
