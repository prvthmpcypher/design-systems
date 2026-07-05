import { motion } from 'motion/react';
import { Code, Database, Brain, TrendingUp, Cpu, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    color: '#3b82f6',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'R', level: 88 },
      { name: 'SQL', level: 90 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    color: '#8b5cf6',
    skills: [
      { name: 'TensorFlow', level: 92 },
      { name: 'PyTorch', level: 90 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'XGBoost', level: 88 },
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    color: '#10b981',
    skills: [
      { name: 'Apache Spark', level: 85 },
      { name: 'Airflow', level: 80 },
      { name: 'Kafka', level: 78 },
      { name: 'Docker', level: 87 },
    ],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    color: '#f59e0b',
    skills: [
      { name: 'Plotly', level: 92 },
      { name: 'D3.js', level: 85 },
      { name: 'Tableau', level: 88 },
      { name: 'Matplotlib', level: 95 },
    ],
  },
  {
    title: 'Deep Learning',
    icon: Cpu,
    color: '#ec4899',
    skills: [
      { name: 'CNNs', level: 90 },
      { name: 'RNNs/LSTMs', level: 88 },
      { name: 'Transformers', level: 92 },
      { name: 'GANs', level: 82 },
    ],
  },
  {
    title: 'Analytics',
    icon: TrendingUp,
    color: '#06b6d4',
    skills: [
      { name: 'Statistics', level: 94 },
      { name: 'A/B Testing', level: 90 },
      { name: 'Forecasting', level: 88 },
      { name: 'Optimization', level: 85 },
    ],
  },
];

export function SkillsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skill Galaxy
          </h2>
          <p className="text-gray-400">Tools and technologies in my universe</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: `${category.color}20`,
                      border: `1px solid ${category.color}40`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: category.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
