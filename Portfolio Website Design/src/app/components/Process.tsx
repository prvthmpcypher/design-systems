import { motion } from "motion/react";
import { Search, Lightbulb, Palette, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description: "Deep dive into user needs, behaviors, and pain points through ethnographic studies and data analysis.",
    color: "#6366f1",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Lightbulb,
    title: "Ideate",
    description: "Collaborative workshops and design thinking exercises to generate innovative solutions.",
    color: "#8b5cf6",
    gradient: "from-secondary to-secondary/50",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Crafting high-fidelity prototypes with meticulous attention to interaction details and accessibility.",
    color: "#ec4899",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Rocket,
    title: "Validate",
    description: "Rigorous testing with real users, iterating based on feedback and metrics.",
    color: "#f59e0b",
    gradient: "from-yellow-500 to-yellow-500/50",
  },
];

export function Process() {
  return (
    <section className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
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
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              My Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A human-centered approach to solving complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="w-8 h-8 text-white" />

                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2"
                    style={{ borderColor: step.color }}
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold opacity-5">
                  {index + 1}
                </div>

                <h3 className="text-2xl mb-3" style={{ color: step.color }}>
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Process Flow Visualization */}
        <motion.div
          className="mt-20 p-12 rounded-3xl bg-background/50 border border-border backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl mb-8 text-center">Continuous Improvement Loop</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className="px-6 py-3 rounded-full border-2"
                  style={{ borderColor: step.color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span style={{ color: step.color }}>{step.title}</span>
                </motion.div>
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="w-8 h-0.5 mx-2"
                    style={{ backgroundColor: step.color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
