import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 max-w-2xl hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Trinity College Dublin
                </h3>
                <p className="text-primary font-medium mb-1">
                  Bachelor of Engineering in Computer Engineering
                </p>
                <p className="text-muted-foreground text-sm">
                  Expected Graduation: 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
