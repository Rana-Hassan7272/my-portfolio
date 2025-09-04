import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Github,
      title: "GitHub",
      url: "https://github.com/Rana-Hassan7272",
      description: "Check out my projects and contributions"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-hassan-shahbaz-61b524311/",
      description: "Connect with me professionally"
    },
    {
      icon: Mail,
      title: "Email",
      url: "mailto:ssc.shahbaz.2004@gmail.com",
      description: "Send me a direct message"
    },
    {
      icon: MapPin,
      title: "Fiverr",
      url: "https://www.fiverr.com/users/hassan1830",
      description: "Hire me for freelance projects"
    },
    {
      icon: Phone,
      title: "Upwork",
      url: "https://www.upwork.com/freelancers/~01f343f7ce02f99150",
      description: "View my professional profile"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss your next project or opportunity.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="card-modern">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Let's Connect</h2>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-center">
                  I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and development. Feel free to reach out through any of the platforms below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">ssc.shahbaz.2004@gmail.com</p>
                    </div>
                    <a 
                      href="mailto:ssc.shahbaz.2004@gmail.com"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      Send Email →
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">GitHub</p>
                      <p className="text-muted-foreground">github.com/Rana-Hassan7272</p>
                    </div>
                    <a 
                      href="https://github.com/Rana-Hassan7272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      View Profile →
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-muted-foreground">linkedin.com/in/muhammad-hassan-shahbaz-61b524311</p>
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-hassan-shahbaz-61b524311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      Connect →
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Fiverr</p>
                      <p className="text-muted-foreground">fiverr.com/users/hassan1830</p>
                    </div>
                    <a 
                      href="https://www.fiverr.com/users/hassan1830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      View Profile →
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Upwork</p>
                      <p className="text-muted-foreground">upwork.com/freelancers/~01f343f7ce02f99150</p>
                    </div>
                    <a 
                      href="https://www.upwork.com/freelancers/~01f343f7ce02f99150"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-smooth"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-6 text-center">Follow Me on Freelance Platforms</h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://www.fiverr.com/users/hassan1830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-smooth hover:bg-primary/10 hover:text-primary"
                    >
                      <img 
                        src="/fiverr.png" 
                        alt="Fiverr" 
                        className="w-6 h-6 object-contain" 
                      />
                    </a>
                    <a
                      href="https://www.upwork.com/freelancers/~01f343f7ce02f99150"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-smooth hover:bg-primary/10 hover:text-primary"
                    >
                      <img 
                        src="/upwork.svg" 
                        alt="Upwork" 
                        className="w-6 h-6 object-contain" 
                      />
                    </a>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Available for freelance projects and collaborations
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;