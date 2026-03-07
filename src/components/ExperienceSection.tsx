import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "TechMarbles Web Solutions Pvt. Ltd.",
    duration: "June 2025 – August 2025",
    metrics: ["4+ Web Applications Built", "15% Page Load Time Improvement"],
    description: [
      "Developed and maintained multiple responsive web applications using modern JavaScript, HTML5, and CSS3.",
      "Optimized front-end performance, improving page load times by approximately 15%.",
      "Built and integrated RESTful APIs to enhance application functionality and data flow.",
      "Collaborated in an Agile development environment using Git and participated in multiple code reviews.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
  },
  {
    role: "Machine Learning Research Intern",
    company: "National Institute of Technology (NIT) Manipur",
    duration: "October 2023 – December 2023",
    metrics: ["500+ MRI Scans Processed", "91.5% Classification Accuracy"],
    description: [
      "Conducted research on medical image analysis using MRI datasets.",
      "Built a machine learning pipeline including preprocessing, feature extraction, and model training.",
      "Implemented a K-Nearest Neighbours classifier to detect brain tumors.",
      "Reduced false positives through cross-validation optimization and model tuning.",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Medical Imaging"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Briefcase className="text-primary" size={28} />
            Engineering Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-[18px] md:left-[22px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_12px_hsl(var(--glow)/0.4)]" />

                <div className="group bg-card border border-border rounded-xl p-6 md:p-8 hover-lift transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-8px_hsl(var(--glow)/0.15)]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 size={14} className="text-primary/70" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground shrink-0">
                      <Calendar size={14} className="text-primary/70" />
                      <span className="text-sm font-mono">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Impact metrics */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {exp.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/25"
                      >
                        <TrendingUp size={12} />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((point, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-primary/60 mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
