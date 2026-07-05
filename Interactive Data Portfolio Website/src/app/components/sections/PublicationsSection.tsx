import { motion } from 'motion/react';
import { FileText, ExternalLink, Award } from 'lucide-react';

const publications = [
  {
    title: 'Neural Networks for Climate Prediction: A Comprehensive Study',
    authors: 'Smith, J., Johnson, A., Data Explorer',
    venue: 'Nature Machine Intelligence',
    year: 2025,
    citations: 142,
    impact: 9.3,
    link: '#',
    tags: ['Climate', 'Deep Learning', 'Time Series'],
  },
  {
    title: 'Transformer Models in Financial Forecasting',
    authors: 'Data Explorer, Chen, L.',
    venue: 'IEEE Transactions on Neural Networks and Learning Systems',
    year: 2024,
    citations: 89,
    impact: 8.1,
    link: '#',
    tags: ['Finance', 'Transformers', 'Prediction'],
  },
  {
    title: 'Explainable AI for Healthcare Diagnostics',
    authors: 'Data Explorer, Williams, M., Brown, K.',
    venue: 'Journal of Medical AI',
    year: 2024,
    citations: 156,
    impact: 7.8,
    link: '#',
    tags: ['Healthcare', 'XAI', 'Diagnostics'],
  },
  {
    title: 'Real-time Sentiment Analysis Using BERT',
    authors: 'Data Explorer',
    venue: 'ACL Conference Proceedings',
    year: 2023,
    citations: 203,
    impact: 8.5,
    link: '#',
    tags: ['NLP', 'BERT', 'Sentiment Analysis'],
  },
  {
    title: 'Federated Learning for Privacy-Preserving Analytics',
    authors: 'Garcia, R., Data Explorer, Lee, S.',
    venue: 'ICML Conference',
    year: 2023,
    citations: 178,
    impact: 9.1,
    link: '#',
    tags: ['Privacy', 'Federated Learning', 'Security'],
  },
];

const awards = [
  {
    title: 'Best Paper Award',
    organization: 'IEEE Neural Networks Conference',
    year: 2024,
  },
  {
    title: 'Young Researcher Award',
    organization: 'International Data Science Society',
    year: 2023,
  },
];

export function PublicationsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl mb-3 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Publications Archive
          </h2>
          <p className="text-gray-400">Contributions to the scientific universe</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {publications.map((pub, idx) => (
              <motion.article
                key={idx}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <FileText className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 group-hover:text-cyan-400 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{pub.authors}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="text-cyan-400">{pub.venue}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-blue-400">{pub.citations} citations</span>
                    <span className="text-green-400">IF: {pub.impact}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 bg-yellow-500/5 border border-yellow-400/20 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <h4 className="text-yellow-400 mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-400">{award.organization}</p>
                    <p className="text-xs text-gray-500 mt-1">{award.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6">
              <h3 className="text-xl mb-4">Impact Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Total Citations</span>
                    <span className="text-cyan-400">768</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">h-index</span>
                    <span className="text-cyan-400">18</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">i10-index</span>
                    <span className="text-cyan-400">12</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
