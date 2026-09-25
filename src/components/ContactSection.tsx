import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";

const EMAIL = "achalsharma975@gmail.com";

const profiles = [
  { label: "GitHub", href: "https://github.com/ac12sharma" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/achal-sharma-8032822a1" },
];

const ContactSection = () => (
  <Section id="contact" title="Contact">
    <p className="max-w-[65ch] text-lead text-muted-foreground">
      I'm always open to discussing new opportunities, projects, or
      collaborations.
    </p>

    <a
      href={`mailto:${EMAIL}`}
      className="mt-6 inline-block break-all font-heading text-[clamp(1.375rem,3.2vw,2.25rem)] font-semibold text-foreground underline decoration-primary/40 decoration-2 underline-offset-8 transition-colors hover:decoration-primary"
    >
      {EMAIL}
    </a>

    <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
      {profiles.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            {label}
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default ContactSection;
