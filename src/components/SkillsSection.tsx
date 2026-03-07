import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "ARM Assembly"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["Flask", "React", "REST APIs"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Raspberry Pi", "Arduino", "Linux", "PostgreSQL", "MySQL"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * gi, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono rounded-lg bg-secondary text-foreground border border-border hover:border-primary/40 transition-colors cursor-default"
                    >
                      {skill}
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

export default SkillsSection;
