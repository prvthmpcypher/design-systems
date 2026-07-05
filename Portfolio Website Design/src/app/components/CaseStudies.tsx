import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Users, TrendingUp, Award } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "FinanceFlow",
    subtitle: "Banking Reimagined",
    description: "Redesigned mobile banking experience that increased user engagement by 340% and reduced support tickets by 60%.",
    metrics: [
      { icon: Users, label: "User Engagement", value: "+340%" },
      { icon: TrendingUp, label: "Transaction Speed", value: "2.3x faster" },
      { icon: Award, label: "User Satisfaction", value: "4.8/5" },
    ],
    gradient: "from-primary to-secondary",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "HealthHub",
    subtitle: "Patient-Centered Care",
    description: "Created an accessible health platform that simplified appointment booking and improved patient outcomes through data visualization.",
    metrics: [
      { icon: Users, label: "Active Users", value: "2.5M+" },
      { icon: TrendingUp, label: "Booking Success", value: "+85%" },
      { icon: Award, label: "Accessibility Score", value: "AAA" },
    ],
    gradient: "from-secondary to-accent",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "EduSpace",
    subtitle: "Learning Without Limits",
    description: "Designed an adaptive learning platform that personalized education for students and increased course completion rates.",
    metrics: [
      { icon: Users, label: "Students Helped", value: "500K+" },
      { icon: TrendingUp, label: "Completion Rate", value: "+92%" },
      { icon: Award, label: "Teacher NPS", value: "78" },
    ],
    gradient: "from-accent to-yellow-500",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    color: "#ec4899",
  },
];

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Real problems. Real solutions. Real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-muted border border-border hover:border-primary/50 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm text-primary">{study.subtitle}</span>
                      </motion.div>

                      <h3 className={`text-4xl md:text-5xl mb-4 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {study.title}
                      </h3>

                      <p className="text-lg text-muted-foreground mb-8">
                        {study.description}
                      </p>
                    </div>

                    {/* Metrics - Always visible for UX demonstration */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="text-center p-4 rounded-xl bg-background/50 border border-border"
                        >
                          <metric.icon className="w-6 h-6 mx-auto mb-2" style={{ color: study.color }} />
                          <div className="text-xl mb-1" style={{ color: study.color }}>{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="mt-8 inline-flex items-center gap-2 text-primary group-hover:gap-4 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      View Case Study
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Image */}
                  <motion.div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-20"
                      style={{ backgroundImage: `linear-gradient(135deg, ${study.color}, transparent)` }}
                    />
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `linear-gradient(135deg, ${study.color}20, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
