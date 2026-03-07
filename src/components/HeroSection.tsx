import { motion } from "framer-motion";
import { ArrowDown, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
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

          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
            Computer Engineering Student at Trinity College Dublin
          </h2>

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
            <Button asChild variant="outline" size="lg" className="gap-2 font-medium border-border hover:bg-secondary">
              <a href="#contact">
                <ArrowDown size={18} />
                Contact
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
