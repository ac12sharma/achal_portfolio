import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bluetooth, Brain, QrCode, Network, Cpu, Activity } from "lucide-react";

const projects = [
  {
    title: "BLE Lab Occupancy Detection System",
    tech: ["Bluetooth Low Energy", "Python", "Signal Processing"],
    description: "Privacy-focused indoor occupancy detection system using BLE signal smoothing, anchor nodes, and backend monitoring.",
    icon: Bluetooth,
  },
  {
    title: "MRI Brain Tumor Detection System",
    tech: ["Python", "Scikit-learn", "NumPy"],
    description: "Machine learning model that analyzes MRI scans and detects brain tumors using KNN classification.",
    icon: Brain,
  },
  {
    title: "Full Stack e-Attendance System",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    description: "Secure web system that automates attendance tracking using QR code validation and session management.",
    icon: QrCode,
  },
  {
    title: "Distributed TCP Consensus Protocol Simulator",
    tech: ["Python", "Socket Programming"],
    description: "Simulation of distributed consensus communication between nodes, including retry mechanisms and timeout handling.",
    icon: Network,
  },
  {
    title: "Embedded Morse Code Game",
    tech: ["C", "ARM Assembly", "Raspberry Pi Pico"],
    description: "Low-level embedded firmware game using interrupts, hardware button inputs, LEDs and buzzer outputs.",
    icon: Cpu,
  },
  {
    title: "Medical Imaging ML Pipeline",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    description: "Complete ML pipeline for medical image classification including preprocessing, feature extraction, training and validation.",
    icon: Activity,
  },
];

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
                className="group bg-card border border-border rounded-xl p-6 hover-lift cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
