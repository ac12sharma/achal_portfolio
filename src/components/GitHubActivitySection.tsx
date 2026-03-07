import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const GitHubActivitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Github className="text-primary" size={28} />
            GitHub Activity
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 overflow-x-auto"
        >
          <img
            src="https://ghchart.rshah.org/3b82f6/ac12sharma"
            alt="ac12sharma's GitHub contribution graph"
            className="w-full max-w-4xl mx-auto"
            loading="lazy"
          />
          <div className="text-center mt-4">
            <a
              href="https://github.com/ac12sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              @ac12sharma
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivitySection;
