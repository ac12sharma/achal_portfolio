import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "Embedded Systems Developer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const target = roles[roleIndex];
    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pause"), 2200);
        return () => clearTimeout(t);
      }
    } else if (phase === "pause") {
      const t = setTimeout(() => setPhase("deleting"), 300);
      return () => clearTimeout(t);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed((prev) => prev.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            Open to Opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-tight mb-4">
            <span className="text-foreground">Achal</span>{" "}
            <span className="text-gradient glow-text">Sharma</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            Computer Engineering Student at Trinity College Dublin
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-8 mb-6"
          >
            <span className="font-mono text-primary text-base">
              {displayed}
              <span className="animate-blink ml-px">|</span>
            </span>
          </motion.div>

          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
            Building intelligent systems, scalable backend architectures, and
            machine learning applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 font-medium">
              <a href="#projects">
                <FolderOpen size={18} />
                View Projects
              </a>
            </Button>
            <Button asChild size="lg" className="gap-2 font-medium">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 font-medium border-border hover:bg-secondary"
            >
              <a href="#contact">
                <ArrowDown size={18} />
                Contact
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
