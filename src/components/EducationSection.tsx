import Section from "@/components/Section";

const EducationSection = () => (
  <Section id="education" title="Education">
    <div className="grid gap-2 lg:grid-cols-[9rem_1fr] lg:gap-8">
      <p className="pt-1.5 font-mono text-sm text-muted-foreground">Expected 2026</p>
      <div>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          Trinity College Dublin
        </h3>
        <p className="mt-1 text-muted-foreground">
          Bachelor of Engineering in Computer Engineering
        </p>
      </div>
    </div>
  </Section>
);

export default EducationSection;
