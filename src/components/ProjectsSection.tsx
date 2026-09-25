import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "@/components/Section";

interface Project {
  title: string;
  label?: string;
  description: ReactNode;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "JobRadar Dublin",
    description: "Scrapes job listings in the background; Claude scores each one.",
    tech: ["Flask", "PostgreSQL", "React", "Docker", "Claude API"],
  },
  {
    title: "Autonomous Coding Agent",
    description: (
      <>
        Resolves GitHub issues end to end:{" "}
        <span className="whitespace-nowrap">Qwen2.5-Coder 3B</span>, RAG, best-of-N.
      </>
    ),
    tech: ["Python", "Flask", "React", "Redis", "Ollama"],
    github: "https://github.com/ac12sharma/coding-agent",
  },
  {
    title: "Privacy-Preserving Lab Occupancy System",
    label: "Final year project",
    description: (
      <>
        Tracks lab and room occupancy using{" "}
        <span className="whitespace-nowrap">Bluetooth Low Energy</span>.
      </>
    ),
    tech: ["Swift", "CoreBluetooth", "Flask"],
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
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  {project.label && (
                    <p className="mt-1 font-mono text-xs text-primary">{project.label}</p>
                  )}
                </div>
                {(project.github || project.live) && (
                  <div className="flex shrink-0 items-center gap-4 pt-0.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        aria-label={`${project.title} on GitHub (opens in a new tab)`}
                        className="-m-1.5 rounded p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github size={18} aria-hidden="true" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live demo"
                        aria-label={`${project.title} live demo (opens in a new tab)`}
                        className="-m-1.5 rounded p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="whitespace-nowrap rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </li>
      ))}
    </ul>
  </Section>
);

export default ProjectsSection;
