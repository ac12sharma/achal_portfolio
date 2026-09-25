import Section from "@/components/Section";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "ARM Assembly"],
  },
  {
    title: "Frameworks",
    skills: ["Flask", "React", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Raspberry Pi", "Arduino", "Linux", "PostgreSQL", "MySQL"],
  },
];

const SkillsSection = () => (
  <Section id="skills" title="Skills">
    <dl className="divide-y divide-border">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="grid gap-1 py-4 first:pt-1 lg:grid-cols-[9rem_1fr] lg:gap-8"
        >
          <dt className="pt-0.5 text-sm text-muted-foreground">{group.title}</dt>
          <dd className="text-foreground">{group.skills.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default SkillsSection;
