import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/Rana-Hassan7272", label: "GitHub", type: "icon" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hassan-shahbaz-61b524311/", label: "LinkedIn", type: "icon" },
    { icon: null, href: "https://www.fiverr.com/users/hassan1830", label: "Fiverr", type: "image", imageSrc: "/fiverr.png" },
    { icon: null, href: "https://www.upwork.com/freelancers/~01f343f7ce02f99150", label: "Upwork", type: "image", imageSrc: "/upwork.svg" },
    { icon: Mail, href: "mailto:john.doe@example.com", label: "Email", type: "icon" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to top button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="btn-outline group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </motion.div>

          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">Muhammad Hassan Shahbaz</h3>
            <p className="text-muted-foreground">
              Full Stack AI Engineer & GenAI Expert
            </p>
          </motion.div>

          {/* Quick navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Experience", href: "/experience" },
              { name: "Projects", href: "/projects" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-smooth relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                {link.type === "icon" && link.icon && (
                  <link.icon className="w-5 h-5" />
                )}
                {link.type === "image" && link.imageSrc && (
                  <img 
                    src={link.imageSrc} 
                    alt={link.label} 
                    className="w-7 h-7 object-contain" 
                  />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md h-px bg-border"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>
              © {currentYear} Muhammad Hassan Shahbaz. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;