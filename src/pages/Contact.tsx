import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, ExternalLink, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:john.doe@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/johndoe",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/johndoe",
      color: "hover:text-blue-500"
    },
    {
      name: "Fiverr",
      icon: ExternalLink,
      url: "https://fiverr.com/johndoe",
      color: "hover:text-green-500"
    },
    {
      name: "Upwork",
      icon: ExternalLink,
      url: "https://upwork.com/freelancers/johndoe",
      color: "hover:text-green-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:john.doe@example.com",
      color: "hover:text-red-500"
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
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-gradient shadow-medium">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Send a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello..."
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send size={18} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Info */}
              <Card className="card-gradient shadow-medium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I'm always open to discussing new opportunities, interesting projects, 
                      or just having a friendly chat about technology and development.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're looking for freelance work, have a full-time opportunity, 
                      or want to collaborate on an open-source project, I'd love to hear from you!
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="font-medium">Direct Email</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-gradient shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Find Me Online</h3>
                  <div className="grid gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth group"
                      >
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-smooth">
                          <link.icon className={`w-5 h-5 text-muted-foreground ${link.color} transition-smooth`} />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-primary transition-smooth">
                            {link.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {link.name === 'Email' ? 'john.doe@example.com' : `@johndoe`}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth ml-auto" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="card-gradient shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">24h</div>
                      <p className="text-xs text-muted-foreground">Response Time</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">100%</div>
                      <p className="text-xs text-muted-foreground">Project Success</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success mb-1">3+</div>
                      <p className="text-xs text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning mb-1">25+</div>
                      <p className="text-xs text-muted-foreground">Happy Clients</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;