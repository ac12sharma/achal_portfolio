import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Code, Brain, Cpu } from "lucide-react";

const highlights = [
  { icon: Code, label: "Full-Stack Development" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Cpu, label: "Embedded Systems" },
];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "15+", label: "Technologies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <User className="text-primary" size={28} />
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year Computer Engineering student at Trinity College
                Dublin with experience in full-stack development, machine
                learning, distributed systems, and embedded programming.
              </p>
              <p>
                I have worked on medical imaging AI systems, distributed network
                simulations, embedded hardware firmware, and scalable backend web
                applications.
              </p>

              <div className="flex gap-10 pt-4">
                {stats.map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    <p className="text-3xl font-bold text-gradient">{value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 bg-surface rounded-lg px-4 py-3 border border-border hover-lift"
                >
                  <Icon size={20} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
