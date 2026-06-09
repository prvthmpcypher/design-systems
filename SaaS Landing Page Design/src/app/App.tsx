import { motion } from "motion/react";
import { Zap, Target, Puzzle, Check } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

export default function App() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate high-quality content in seconds with our advanced AI engine. No more waiting for inspiration."
    },
    {
      icon: Target,
      title: "Pinpoint Accuracy",
      description: "Context-aware AI that understands your brand voice and maintains consistency across all content."
    },
    {
      icon: Puzzle,
      title: "Seamless Integrations",
      description: "Connect with your favorite tools like Notion, Google Docs, Slack, and 50+ more platforms."
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out our AI writing assistant",
      features: [
        "5,000 words per month",
        "Basic templates",
        "Email support",
        "Web app access"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professionals and content creators",
      features: [
        "100,000 words per month",
        "Advanced templates",
        "Priority support",
        "Browser extensions",
        "Tone & style controls",
        "Plagiarism checker"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Unlimited words",
        "Custom templates",
        "Dedicated account manager",
        "API access",
        "Team collaboration",
        "Advanced security",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-purple-600/20 text-purple-300 border-purple-500/30">
              Powered by Advanced AI
            </Badge>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl md:text-7xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Write Better, Faster
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              With AI That Understands
            </motion.span>
          </motion.h1>

          <motion.p
            className="mb-10 text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your ideas into compelling content with our AI writing assistant.
            Save hours of work while maintaining your unique voice.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 h-auto">
              Start Writing Free
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-600/10 px-8 py-6 h-auto">
              Watch Demo
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            No credit card required • 5,000 words free
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Why Choose Our AI Writer
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features designed to supercharge your content creation workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-card border-purple-500/20 hover:border-purple-500/40 transition-all h-full hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="mb-4 p-3 bg-purple-600/20 rounded-lg inline-block">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white border-purple-500">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`p-8 h-full flex flex-col ${
                    tier.popular
                      ? 'bg-gradient-to-b from-purple-600/10 to-card border-purple-500/50 shadow-xl shadow-purple-500/20'
                      : 'bg-card border-purple-500/20'
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-gray-400">/month</span>}
                    </div>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      tier.popular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30'
                    }`}
                    size="lg"
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Writing?
            </span>
          </h2>
          <p className="mb-10 text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of writers, marketers, and content creators who are already
            using AI to create amazing content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 h-auto">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-600/10 px-10 py-6 h-auto">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 AI Writer. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
