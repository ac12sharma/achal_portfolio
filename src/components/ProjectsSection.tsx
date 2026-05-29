import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Bluetooth, Brain, QrCode, Network, Cpu, Activity, Github } from "lucide-react";

const projects = [
  {
    title: "BLE Lab Occupancy Detection System",
    tech: ["Bluetooth Low Energy", "Python", "Signal Processing"],
    description:
      "Privacy-focused indoor occupancy detection system using BLE signal smoothing, anchor nodes, and backend monitoring.",
    icon: Bluetooth,
    github: "https://github.com/ac12sharma",
  },
  {
    title: "MRI Brain Tumor Detection System",
    tech: ["Python", "Machine Learning", "Scikit-learn", "NumPy"],
    description:
      "Machine learning model that analyzes MRI scans and detects brain tumors using KNN classification.",
    icon: Brain,
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Full Stack e-Attendance System",
    tech: ["Python", "Flask", "MySQL", "REST API", "HTML", "CSS"],
    description:
      "Secure web system that automates attendance tracking using QR code validation and session management.",
    icon: QrCode,
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Distributed TCP Consensus Protocol Simulator",
    tech: ["Python", "Socket Programming"],
    description:
      "Simulation of distributed consensus communication between nodes, including retry mechanisms and timeout handling.",
    icon: Network,
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Embedded Morse Code Game",
    tech: ["C", "ARM Assembly", "Raspberry Pi Pico"],
    description:
      "Low-level embedded firmware game using interrupts, hardware button inputs, LEDs and buzzer outputs.",
    icon: Cpu,
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Medical Imaging ML Pipeline",
    tech: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-learn"],
    description:
      "Complete ML pipeline for medical image classification including preprocessing, feature extraction, training and validation.",
    icon: Activity,
    github: "https://github.com/ac12sharma",
  },
];

const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    setTilt({
      x: ((relY - rect.height / 2) / (rect.height / 2)) * -6,
      y: ((relX - rect.width / 2) / (rect.width / 2)) * 6,
    });
    setSpotlight({
      x: (relX / rect.width) * 100,
      y: (relY / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setTilt({ x: 0, y: 0 });
      }}
      className={className}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovering ? "transform 0.1s ease" : "transform 0.6s ease",
      }}
    >
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(96,165,250,0.11) 0%, transparent 65%)`,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
      {children}
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <TiltCard className="relative group bg-card border border-border rounded-xl p-6 cursor-default transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_hsl(var(--glow)/0.18)] h-full">
                  {/* Content sits above spotlight overlay */}
                  <div className="relative z-[2]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon size={20} />
                        </div>
                        <h3 className="font-semibold text-foreground text-sm leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-2"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
