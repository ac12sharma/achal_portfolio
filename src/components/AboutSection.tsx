import Section from "@/components/Section";

const stats = [
  { value: "6+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "15+", label: "Technologies" },
];

const AboutSection = () => (
  <Section id="about" title="About">
    <div className="max-w-[65ch] space-y-5 text-lead text-muted-foreground">
      <p>
        I'm a final-year Computer Engineering student at Trinity College Dublin
        with experience in full-stack development, machine learning, distributed
        systems, and embedded programming.
      </p>
      <p>
        I have worked on medical imaging AI systems, distributed network
        simulations, embedded hardware firmware, and scalable backend web
        applications.
      </p>
    </div>

    <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
      {stats.map(({ value, label }) => (
        <div key={label} className="flex flex-col-reverse">
          <dt className="mt-1 text-sm text-muted-foreground">{label}</dt>
          <dd className="font-heading text-4xl font-semibold text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default AboutSection;
