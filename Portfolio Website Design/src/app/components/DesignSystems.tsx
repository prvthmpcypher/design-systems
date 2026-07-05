import { motion } from "motion/react";
import { Palette, Type, Layout, Smartphone } from "lucide-react";

const systemComponents = [
  {
    title: "Color Systems",
    icon: Palette,
    description: "Accessible, consistent color palettes with AAA contrast ratios",
    colors: ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"],
  },
  {
    title: "Typography",
    icon: Type,
    description: "Hierarchical type scales optimized for readability",
    example: ["Display", "Heading", "Body", "Caption"],
  },
  {
    title: "Layouts",
    icon: Layout,
    description: "Responsive grid systems and spacing tokens",
    grid: [4, 8, 12, 16, 24],
  },
  {
    title: "Components",
    icon: Smartphone,
    description: "Reusable, accessible UI components",
    count: "50+",
  },
];

export function DesignSystems() {
  return (
    <section className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Design Systems
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Building scalable, maintainable design foundations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {systemComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all h-full">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <component.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl mb-2">{component.title}</h3>
                    <p className="text-muted-foreground">{component.description}</p>
                  </div>
                </div>

                {/* Color System Demo */}
                {component.colors && (
                  <div className="flex gap-2">
                    {component.colors.map((color, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 h-20 rounded-lg"
                        style={{ backgroundColor: color }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    ))}
                  </div>
                )}

                {/* Typography Demo */}
                {component.example && (
                  <div className="space-y-3">
                    {component.example.map((text, i) => (
                      <motion.div
                        key={i}
                        className="text-muted-foreground"
                        style={{
                          fontSize: `${1.5 - i * 0.25}rem`,
                          fontWeight: i === 0 ? 700 : i === 1 ? 600 : 400,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {text}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Grid Demo */}
                {component.grid && (
                  <div className="grid grid-cols-5 gap-2">
                    {component.grid.map((size, i) => (
                      <motion.div
                        key={i}
                        className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring" }}
                      >
                        <span className="text-xs text-primary">{size}px</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Component Count */}
                {component.count && (
                  <motion.div
                    className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {component.count}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Component Library Preview */}
        <motion.div
          className="mt-20 p-12 rounded-3xl bg-background border border-border"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl mb-8 text-center">Component Library</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Button", "Input", "Card", "Modal", "Dropdown", "Toggle", "Slider", "Tabs"].map((comp, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-muted border border-border text-center"
                whileHover={{ y: -5, borderColor: "#6366f1" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="text-sm">{comp}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
