import Section from "@/components/Section";

const GitHubActivitySection = () => (
  <Section id="github" title="GitHub">
    <figure>
      <div className="overflow-x-auto">
        <img
          src="https://ghchart.rshah.org/3b82f6/ac12sharma"
          alt="ac12sharma's GitHub contribution graph for the past year"
          className="w-full min-w-[640px] max-w-4xl"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        Contributions over the past year ·{" "}
        <a
          href="https://github.com/ac12sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
        >
          @ac12sharma
        </a>
      </figcaption>
    </figure>
  </Section>
);

export default GitHubActivitySection;
