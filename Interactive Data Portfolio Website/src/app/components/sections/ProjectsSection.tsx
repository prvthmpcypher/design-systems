import { motion } from 'motion/react';
import { useState } from 'react';
import { Planet } from '../Planet';
import { X } from 'lucide-react';
import { DataChart } from '../DataChart';

const projects = [
  {
    id: 1,
    name: 'Climate Analytics',
    description: 'Global temperature trends analysis',
    color: '#ef4444',
    size: 80,
    orbitRadius: 180,
    orbitSpeed: 25,
    data: [
      { label: 'Accuracy', value: 94 },
      { label: 'Data Points', value: 1000000 },
      { label: 'Models', value: 12 },
    ],
    details: {
      overview: 'Comprehensive analysis of global climate patterns using machine learning models to predict temperature changes and extreme weather events.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Plotly'],
      chartData: [
        { month: 'Jan', temp: 12 },
        { month: 'Feb', temp: 14 },
        { month: 'Mar', temp: 18 },
        { month: 'Apr', temp: 22 },
        { month: 'May', temp: 26 },
        { month: 'Jun', temp: 30 },
      ],
    },
  },
  {
    id: 2,
    name: 'Market Forecasting',
    description: 'Stock market prediction models',
    color: '#3b82f6',
    size: 100,
    orbitRadius: 280,
    orbitSpeed: 35,
    data: [
      { label: 'ROI', value: 87 },
      { label: 'Predictions', value: 50000 },
      { label: 'Markets', value: 8 },
    ],
    details: {
      overview: 'Advanced machine learning system for predicting market trends using neural networks and time series analysis.',
      technologies: ['Python', 'PyTorch', 'LSTM', 'Prophet'],
      chartData: [
        { month: 'Jan', value: 4500 },
        { month: 'Feb', value: 4800 },
        { month: 'Mar', value: 5200 },
        { month: 'Apr', value: 4900 },
        { month: 'May', value: 5400 },
        { month: 'Jun', value: 5800 },
      ],
    },
  },
  {
    id: 3,
    name: 'Healthcare AI',
    description: 'Disease prediction system',
    color: '#8b5cf6',
    size: 90,
    orbitRadius: 380,
    orbitSpeed: 45,
    data: [
      { label: 'Accuracy', value: 96 },
      { label: 'Patients', value: 25000 },
      { label: 'Conditions', value: 15 },
    ],
    details: {
      overview: 'AI-powered diagnostic system that analyzes patient data to predict disease risks and recommend preventive measures.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
      chartData: [
        { month: 'Jan', accuracy: 92 },
        { month: 'Feb', accuracy: 93 },
        { month: 'Mar', accuracy: 94 },
        { month: 'Apr', accuracy: 95 },
        { month: 'May', accuracy: 96 },
        { month: 'Jun', accuracy: 96 },
      ],
    },
  },
  {
    id: 4,
    name: 'NLP Sentiment',
    description: 'Social media analysis',
    color: '#10b981',
    size: 70,
    orbitRadius: 120,
    orbitSpeed: 20,
    data: [
      { label: 'Accuracy', value: 91 },
      { label: 'Posts', value: 5000000 },
      { label: 'Languages', value: 12 },
    ],
    details: {
      overview: 'Natural language processing system that analyzes social media sentiment across multiple languages and platforms.',
      technologies: ['Python', 'BERT', 'Transformers', 'SpaCy'],
      chartData: [
        { month: 'Jan', sentiment: 65 },
        { month: 'Feb', sentiment: 70 },
        { month: 'Mar', sentiment: 68 },
        { month: 'Apr', sentiment: 75 },
        { month: 'May', sentiment: 72 },
        { month: 'Jun', sentiment: 78 },
      ],
    },
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <motion.div
        className="text-center mb-8 absolute top-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Data Universe
        </h2>
        <p className="text-gray-400">Click on a planet to explore the project</p>
      </motion.div>

      <div className="relative w-[800px] h-[800px]">
        {projects.map((project) => (
          <Planet
            key={project.id}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${selectedProject.color}dd, ${selectedProject.color}44)`,
                  boxShadow: `0 0 30px ${selectedProject.color}88`,
                }}
              />
              <div>
                <h3 className="text-3xl mb-1">{selectedProject.name}</h3>
                <p className="text-gray-400">{selectedProject.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg mb-2 text-blue-400">Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg mb-2 text-purple-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg mb-2 text-green-400">Key Metrics</h4>
                  <div className="space-y-2">
                    {selectedProject.data.map((metric) => (
                      <div key={metric.label} className="flex justify-between items-center">
                        <span className="text-gray-400">{metric.label}</span>
                        <span className="text-white">{metric.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[300px]">
                <h4 className="text-lg mb-4 text-pink-400">Performance Data</h4>
                <DataChart
                  type="area"
                  data={selectedProject.details.chartData}
                  dataKey={Object.keys(selectedProject.details.chartData[0])[1]}
                  color={selectedProject.color}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
