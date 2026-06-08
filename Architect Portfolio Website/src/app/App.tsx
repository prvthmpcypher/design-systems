import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Building2,
  Ruler,
  Award,
  Users,
  Mail,
  Layers,
  ChevronDown,
  Grid3x3,
  Compass
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0a1628]">
      <Navigation />
      <Hero />
      <VisionStatement />
      <SignatureProjects />
      <DesignProcess />
      <Awards />
      <Studio />
      <Contact />
      <BlueprintGrid />
    </div>
  );
}

function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#d1d8e0]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="w-6 h-6 text-[#1e3a8a]" />
          <span className="tracking-[0.2em] uppercase">Atelier</span>
        </div>
        <div className="flex gap-8 tracking-wide">
          {["Vision", "Projects", "Process", "Awards", "Studio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#1e3a8a] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <BlueprintLines />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <Building2 className="w-16 h-16 mx-auto text-[#1e3a8a] mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 tracking-tight"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "0.02em"
          }}
        >
          Architecture
          <br />
          <span style={{ fontWeight: 500 }}>Reimagined</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-2xl mx-auto text-[#5a6a82] tracking-wide"
          style={{ fontSize: "1.125rem", lineHeight: "2" }}
        >
          Crafting spaces that elevate the human experience through precision,
          innovation, and timeless design principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-[#1e3a8a]" />
        </motion.div>
      </motion.div>

      <IsometricBuilding />
    </section>
  );
}

function BlueprintLines() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 50}
            x2="100%"
            y2={i * 50}
            stroke="#1e3a8a"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.05 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="100%"
            stroke="#1e3a8a"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.05 }}
          />
        ))}
      </svg>
    </div>
  );
}

function IsometricBuilding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.08, y: 0 }}
      transition={{ duration: 1.5, delay: 0.8 }}
      className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <g transform="translate(200, 300)">
          <motion.polygon
            points="0,-150 100,-100 100,0 0,50"
            fill="#1e3a8a"
            opacity="0.3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.polygon
            points="0,-150 -100,-100 -100,0 0,50"
            fill="#1e3a8a"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.polygon
            points="0,-150 100,-100 -100,-100"
            fill="#1e3a8a"
            opacity="0.4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

function VisionStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" ref={ref} className="py-32 px-6 bg-[#f8f9fb]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-16 tracking-[0.3em] uppercase text-[#1e3a8a]" style={{ fontSize: "0.875rem" }}>
            Vision
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0a1628] mb-8"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              lineHeight: "1.6",
              fontWeight: 300
            }}
          >
            We believe that architecture is not about form following function,
            but about creating <span style={{ fontWeight: 500 }}>experiences that transform</span> how people
            interact with their environment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#5a6a82] max-w-3xl"
            style={{ fontSize: "1.125rem", lineHeight: "2" }}
          >
            Every structure we design begins as a blueprint—a technical drawing that
            marries precision with imagination. Our approach combines modernist principles
            with sustainable innovation, creating buildings that stand as monuments to both
            human ingenuity and environmental responsibility.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function SignatureProjects() {
  const projects = [
    {
      name: "Zenith Tower",
      location: "Tokyo, Japan",
      year: "2025",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1614595737476-42487331b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Horizon Residence",
      location: "Miami, USA",
      year: "2024",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1549791084-5f78368b208b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Nexus Cultural Center",
      location: "Copenhagen, Denmark",
      year: "2024",
      type: "Cultural",
      image: "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Vertex Office Complex",
      location: "Singapore",
      year: "2023",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Lumina Museum",
      location: "Berlin, Germany",
      year: "2023",
      type: "Cultural",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      name: "Aurora Pavilion",
      location: "Oslo, Norway",
      year: "2022",
      type: "Institutional",
      image: "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 tracking-[0.3em] uppercase text-[#1e3a8a]" style={{ fontSize: "0.875rem" }}>
          Signature Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-[#f8f9fb] border border-[#d1d8e0] aspect-[3/4]">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-[#0a1628]/90 flex items-center justify-center"
        >
          <BlueprintOverlay />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a1628]/90 to-transparent text-white">
          <div className="flex items-center gap-2 mb-2 tracking-[0.2em] uppercase" style={{ fontSize: "0.75rem" }}>
            <Ruler className="w-3 h-3" />
            <span>{project.type}</span>
          </div>
          <h3 className="mb-2" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
            {project.name}
          </h3>
          <p className="text-white/70" style={{ fontSize: "0.875rem" }}>
            {project.location} • {project.year}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function BlueprintOverlay() {
  return (
    <div className="relative w-full h-full p-8">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#grid)" />

        <motion.rect
          x="40" y="60" width="120" height="80"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.line
          x1="40" y1="100" x2="160" y2="100"
          stroke="#60a5fa"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.line
          x1="100" y1="60" x2="100" y2="140"
          stroke="#60a5fa"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </svg>
    </div>
  );
}

function DesignProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "Deep analysis of site, context, and user needs to inform every design decision.",
      icon: Compass
    },
    {
      number: "02",
      title: "Conceptual Design",
      description: "Translating vision into blueprint sketches that balance form, function, and innovation.",
      icon: Grid3x3
    },
    {
      number: "03",
      title: "Technical Development",
      description: "Precision engineering and material selection to ensure structural integrity and sustainability.",
      icon: Layers
    },
    {
      number: "04",
      title: "Realization",
      description: "Meticulous construction oversight to bring the architectural vision to life.",
      icon: Building2
    }
  ];

  return (
    <section id="process" ref={ref} className="py-32 px-6 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 tracking-[0.3em] uppercase text-[#1e3a8a]" style={{ fontSize: "0.875rem" }}>
          Design Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="border border-[#d1d8e0] p-8 bg-white">
                <div className="mb-6 text-[#1e3a8a] opacity-30" style={{ fontSize: "3rem", fontWeight: 300 }}>
                  {step.number}
                </div>

                <step.icon className="w-8 h-8 text-[#1e3a8a] mb-4" />

                <h3 className="mb-4" style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                  {step.title}
                </h3>

                <p className="text-[#5a6a82]" style={{ fontSize: "0.9375rem", lineHeight: "1.8" }}>
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#d1d8e0]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    { year: "2025", title: "Pritzker Architecture Prize", category: "Lifetime Achievement" },
    { year: "2024", title: "AIA Gold Medal", category: "Excellence in Design" },
    { year: "2024", title: "World Architecture Festival", category: "Best Commercial Building" },
    { year: "2023", title: "RIBA International Prize", category: "Innovative Design" },
    { year: "2023", title: "Architizer A+ Awards", category: "Cultural Architecture" },
    { year: "2022", title: "Mies van der Rohe Award", category: "Contemporary Architecture" }
  ];

  return (
    <section id="awards" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-16 tracking-[0.3em] uppercase text-[#1e3a8a]" style={{ fontSize: "0.875rem" }}>
          Recognition
        </h2>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-8 border-b border-[#d1d8e0] pb-6"
            >
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#1e3a8a]" />
                <span className="text-[#5a6a82] tracking-wide" style={{ fontSize: "1.125rem" }}>
                  {award.year}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="mb-1" style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                  {award.title}
                </h3>
                <p className="text-[#5a6a82]" style={{ fontSize: "0.9375rem" }}>
                  {award.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Studio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="studio" ref={ref} className="py-32 px-6 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 tracking-[0.3em] uppercase text-[#1e3a8a]" style={{ fontSize: "0.875rem" }}>
              The Studio
            </h2>

            <h3 className="mb-6" style={{ fontSize: "2.5rem", fontWeight: 300, lineHeight: "1.3" }}>
              Where <span style={{ fontWeight: 500 }}>Vision Meets Precision</span>
            </h3>

            <p className="text-[#5a6a82] mb-6" style={{ fontSize: "1.125rem", lineHeight: "2" }}>
              Founded in 2015, our studio brings together architects, engineers, and
              designers who share a passion for pushing the boundaries of what's possible
              in contemporary architecture.
            </p>

            <p className="text-[#5a6a82] mb-8" style={{ fontSize: "1.125rem", lineHeight: "2" }}>
              With offices in New York, Tokyo, and Copenhagen, we collaborate with clients
              worldwide to create buildings that inspire, endure, and elevate the human experience.
            </p>

            <div className="flex items-center gap-3 text-[#1e3a8a]">
              <Users className="w-6 h-6" />
              <span style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                45+ Talented Professionals
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] border border-[#d1d8e0] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1525367922492-f15fe7b709cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Studio workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Mail className="w-12 h-12 mx-auto mb-8 text-[#1e3a8a]" />

          <h2 className="mb-6" style={{ fontSize: "3rem", fontWeight: 300 }}>
            Let's Build <span style={{ fontWeight: 500 }}>Something Extraordinary</span>
          </h2>

          <p className="text-[#5a6a82] mb-12 max-w-2xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: "2" }}>
            Whether you have a vision for a new project or simply want to explore
            possibilities, we'd love to hear from you.
          </p>

          <motion.a
            href="mailto:studio@atelier.design"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-[#1e3a8a] text-white tracking-[0.2em] uppercase border border-[#1e3a8a] hover:bg-transparent hover:text-[#1e3a8a] transition-all duration-300"
          >
            Get in Touch
          </motion.a>

          <div className="mt-16 pt-16 border-t border-[#d1d8e0] flex flex-wrap justify-center gap-12 text-[#5a6a82]" style={{ fontSize: "0.9375rem" }}>
            <div>
              <div className="mb-1" style={{ fontWeight: 500, color: "#0a1628" }}>New York</div>
              <div>425 Park Avenue, NY 10022</div>
            </div>
            <div>
              <div className="mb-1" style={{ fontWeight: 500, color: "#0a1628" }}>Tokyo</div>
              <div>2-8-1 Marunouchi, Chiyoda-ku</div>
            </div>
            <div>
              <div className="mb-1" style={{ fontWeight: 500, color: "#0a1628" }}>Copenhagen</div>
              <div>Vesterbrogade 6, 1620</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlueprintGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
      <svg className="w-full h-full">
        <defs>
          <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      </svg>
    </div>
  );
}
