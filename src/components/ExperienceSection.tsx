import Section from "@/components/Section";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "TechMarbles Web Solutions Pvt. Ltd.",
    duration: "Jun – Aug 2025",
    metrics: ["4+ web applications built", "15% faster page loads"],
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
    duration: "Oct – Dec 2023",
    metrics: ["500+ MRI scans processed", "91.5% classification accuracy"],
    description: [
      "Conducted research on medical image analysis using MRI datasets.",
      "Built a machine learning pipeline including preprocessing, feature extraction, and model training.",
      "Implemented a K-Nearest Neighbours classifier to detect brain tumors.",
      "Reduced false positives through cross-validation optimization and model tuning.",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Medical Imaging"],
  },
];

const ExperienceSection = () => (
  <Section id="experience" title="Experience">
    <ol className="space-y-14">
      {experiences.map((exp) => (
        <li key={exp.role} className="grid gap-2 lg:grid-cols-[9rem_1fr] lg:gap-8">
          <p className="pt-1.5 font-mono text-sm text-muted-foreground">{exp.duration}</p>
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground">{exp.role}</h3>
            <p className="mt-1 text-muted-foreground">{exp.company}</p>
            <p className="mt-3 text-sm font-medium text-primary">{exp.metrics.join("  ·  ")}</p>
            <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-border">
              {exp.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{exp.tech.join(" · ")}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default ExperienceSection;
