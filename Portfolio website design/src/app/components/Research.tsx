import { motion } from "motion/react";
import { BarChart3, Users2, Brain, Target } from "lucide-react";

const researchMethods = [
  {
    icon: Users2,
    title: "User Interviews",
    count: "500+",
    description: "In-depth conversations",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    count: "2M+",
    description: "Data points analyzed",
  },
  {
    icon: Brain,
    title: "Usability Tests",
    count: "150+",
    description: "Testing sessions",
  },
  {
    icon: Target,
    title: "A/B Tests",
    count: "80+",
    description: "Experiments run",
  },
];

const insights = [
  {
    title: "Behavioral Patterns",
    description: "Users prefer progressive disclosure over information-dense interfaces by a factor of 3:1.",
    impact: "High",
    color: "#6366f1",
  },
  {
    title: "Accessibility First",
    description: "Designing for edge cases and disabilities improves usability for everyone by 40%.",
    impact: "Critical",
    color: "#8b5cf6",
  },
  {
    title: "Micro-interactions",
    description: "Well-crafted feedback loops increase user confidence and reduce errors by 65%.",
    impact: "High",
    color: "#ec4899",
  },
];

export function Research() {
  return (
    <section className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Research-Driven
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Every decision backed by evidence, every solution validated by users
          </p>
        </motion.div>

        {/* Research Methods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {researchMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-muted border border-border hover:border-primary/50 transition-all"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <method.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {method.count}
              </div>
              <div className="text-sm mb-1">{method.title}</div>
              <div className="text-xs text-muted-foreground">{method.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="space-y-6">
          <h3 className="text-3xl mb-8">Key Insights</h3>
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-6 p-8 rounded-2xl bg-muted border border-border hover:border-primary/50 transition-all">
                <motion.div
                  className="flex-shrink-0 w-1 rounded-full"
                  style={{ backgroundColor: insight.color }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl">{insight.title}</h4>
                    <motion.span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: `${insight.color}20`,
                        color: insight.color,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {insight.impact} Impact
                    </motion.span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, ${insight.color}10, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Research Methodology Visualization */}
        <motion.div
          className="mt-20 p-12 rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl mb-8 text-center">Research-to-Design Pipeline</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {["Discover", "Define", "Ideate", "Prototype", "Test"].map((phase, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>
                <div className="text-sm">{phase}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
