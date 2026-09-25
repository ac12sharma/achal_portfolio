import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "Embedded Systems Developer",
];

const ease = [0.22, 1, 0.36, 1] as const;

const useTypewriter = (enabled: boolean) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const target = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (displayed.length > 0) {
      t = setTimeout(() => setDisplayed((prev) => prev.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [enabled, displayed, deleting, roleIndex]);

  return displayed;
};

const NameLine = ({ children, delay, className = "" }: { children: string; delay: number; className?: string }) => (
  <span className="block overflow-hidden pb-[0.08em] pt-[0.04em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(!reduceMotion);

  return (
    <section className="relative flex min-h-[100svh] items-end pb-16 pt-32 md:pb-24">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          Open to opportunities
        </motion.p>

        <h1 className="font-heading text-display font-bold text-foreground">
          <NameLine delay={0.1}>Achal</NameLine>
          <NameLine delay={0.22} className="text-primary">Sharma</NameLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
        >
          <div className="max-w-[60ch]">
            <p className="text-lead text-foreground">
              Computer Engineering student at Trinity College Dublin.
            </p>
            <p className="mt-1 text-lead text-muted-foreground">
              Building intelligent systems, scalable backend architectures,
              and machine learning applications.
            </p>
            <p className="mt-6 h-6 font-mono text-sm text-primary">
              {reduceMotion ? (
                roles.join(" · ")
              ) : (
                <>
                  <span className="sr-only">{roles.join(", ")}</span>
                  <span aria-hidden="true">
                    {typed}
                    <span className="ml-px animate-blink">▍</span>
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">View projects</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="link" className="px-0 text-muted-foreground hover:text-foreground sm:ml-3">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
