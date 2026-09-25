import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { Github } from "lucide-react";
import Section from "@/components/Section";

const projects = [
  {
    title: "BLE Lab Occupancy Detection System",
    tech: ["Bluetooth Low Energy", "Python", "Signal Processing"],
    description:
      "Privacy-focused indoor occupancy detection system using BLE signal smoothing, anchor nodes, and backend monitoring.",
    github: "https://github.com/ac12sharma",
  },
  {
    title: "MRI Brain Tumor Detection System",
    tech: ["Python", "Machine Learning", "Scikit-learn", "NumPy"],
    description:
      "Machine learning model that analyzes MRI scans and detects brain tumors using KNN classification.",
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Full Stack e-Attendance System",
    tech: ["Python", "Flask", "MySQL", "REST API", "HTML", "CSS"],
    description:
      "Secure web system that automates attendance tracking using QR code validation and session management.",
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Distributed TCP Consensus Protocol Simulator",
    tech: ["Python", "Socket Programming"],
    description:
      "Simulation of distributed consensus communication between nodes, including retry mechanisms and timeout handling.",
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Embedded Morse Code Game",
    tech: ["C", "ARM Assembly", "Raspberry Pi Pico"],
    description:
      "Low-level embedded firmware game using interrupts, hardware button inputs, LEDs and buzzer outputs.",
    github: "https://github.com/ac12sharma",
  },
  {
    title: "Medical Imaging ML Pipeline",
    tech: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-learn"],
    description:
      "Complete ML pipeline for medical image classification including preprocessing, feature extraction, training and validation.",
    github: "https://github.com/ac12sharma",
  },
];

const TiltCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    setTilt({
      x: ((relY - rect.height / 2) / (rect.height / 2)) * -4,
      y: ((relX - rect.width / 2) / (rect.width / 2)) * 4,
    });
    setSpotlight({ x: (relX / rect.width) * 100, y: (relY / rect.height) * 100 });
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
        transition: hovering ? "transform 0.1s ease-out" : "transform 0.6s ease-out",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, hsl(var(--primary) / 0.1) 0%, transparent 60%)`,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
      {children}
    </div>
  );
};

const ProjectsSection = () => (
  <Section id="projects" title="Projects">
    <ul className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.title}>
          <TiltCard className="relative h-full rounded-lg border border-border bg-card/70 p-6 transition-colors duration-300 focus-within:border-primary/50 hover:border-primary/40">
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`${project.title} on GitHub (opens in a new tab)`}
                >
                  <Github size={18} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-5 font-mono text-xs text-muted-foreground">
                {project.tech.join(" · ")}
              </p>
            </div>
          </TiltCard>
        </li>
      ))}
    </ul>
  </Section>
);

export default ProjectsSection;
