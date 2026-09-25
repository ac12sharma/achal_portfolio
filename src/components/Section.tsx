import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="section-padding">
    <div className="container mx-auto">
      <div className="grid gap-6 border-t border-border pt-10 md:grid-cols-[13rem_1fr] md:gap-12 md:pt-12">
        <h2
          id={`${id}-title`}
          className="font-heading text-title font-semibold text-foreground md:sticky md:top-24 md:self-start"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  </section>
);

export default Section;
