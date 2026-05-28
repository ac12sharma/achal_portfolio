import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:achalsharma975@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/ac12sharma", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/achal-sharma-8032822a1",
    label: "LinkedIn",
  },
];

const Footer = () => (
  <footer className="border-t border-border py-10 relative z-10">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold font-mono text-gradient">
            AS
          </a>
          <p className="text-xs text-muted-foreground mt-1">
            Computer Engineering · Trinity College Dublin
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/50 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Achal Sharma · Built with React &amp; Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
