import { motion } from 'motion/react';
import { DataChart } from '../DataChart';

const researchAreas = [
  { subject: 'ML', value: 95 },
  { subject: 'NLP', value: 88 },
  { subject: 'Computer Vision', value: 82 },
  { subject: 'Statistics', value: 90 },
  { subject: 'Deep Learning', value: 85 },
  { subject: 'Data Mining', value: 87 },
];

const publications = [
  {
    title: 'Neural Networks for Climate Prediction',
    venue: 'Nature Machine Intelligence',
    year: 2025,
    citations: 142,
    impact: 'High',
  },
  {
    title: 'Transformer Models in Financial Forecasting',
    venue: 'IEEE Transactions on Neural Networks',
    year: 2024,
    citations: 89,
    impact: 'Medium',
  },
  {
    title: 'Explainable AI for Healthcare Diagnostics',
    venue: 'Journal of Medical AI',
    year: 2024,
    citations: 156,
    impact: 'High',
  },
];

export function ResearchSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Research Constellation
          </h2>
          <p className="text-gray-400">Exploring the frontiers of data science</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-purple-400">Research Focus</h3>
            <div className="h-[400px] bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <DataChart
                type="radar"
                data={researchAreas}
                dataKey="value"
                xKey="subject"
                color="#a855f7"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl mb-6 text-pink-400">Recent Publications</h3>
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pink-400/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="mb-2">{pub.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{pub.venue} • {pub.year}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-blue-400">{pub.citations} citations</span>
                  <span className={pub.impact === 'High' ? 'text-green-400' : 'text-yellow-400'}>
                    {pub.impact} Impact
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
