import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:achalsharma975@gmail.com", display: "achalsharma975@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/ac12sharma", display: "github.com/ac12sharma" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/achal-sharma-8032822a1", display: "linkedin.com/in/achal-sharma" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="text-muted-foreground mb-10">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map(({ icon: Icon, label, href, display }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.4 }}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 hover-lift w-full sm:w-auto transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_-6px_hsl(var(--glow)/0.15)]"
              >
                <Icon size={18} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
