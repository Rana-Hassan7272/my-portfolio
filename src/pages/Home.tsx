import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Download, MapPin, Calendar, GraduationCap, Briefcase, Code } from "lucide-react";
import { skills } from "@/data/skills";
import { education } from "@/data/education";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="text-gradient">John Doe</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                Full Stack Developer & ML Engineer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Passionate about creating innovative web solutions and machine learning applications. 
                I build modern, scalable applications with clean code and cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2">
                  <Download size={20} />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Github size={20} />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-large">
                  <img
                    src="/profile.jpg"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-section-alt-bg">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid gap-8 md:gap-12">
            {skills.slice(0, 3).map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.items.slice(0, 5).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer"
                      >
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and certifications
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.slice(0, 2).map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-gradient shadow-medium hover:shadow-large transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin size={16} />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                        {edu.gpa && (
                          <p className="text-sm text-muted-foreground">
                            <strong>GPA:</strong> {edu.gpa}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Projects Teasers */}
      <section className="section-padding bg-section-alt-bg">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Experience Teaser */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-muted-foreground mb-4">
                Freelance developer on Fiverr & Upwork, plus internships at NextGenLearner (ML Engineer) 
                and Prodigy Info Tech (MERN Stack Developer)
              </p>
              <Button variant="outline">View Experience</Button>
            </motion.div>

            {/* Projects Teaser */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Projects</h3>
              <p className="text-muted-foreground mb-4">
                5+ completed projects including e-commerce platforms, task management apps, 
                weather dashboards, and AI-powered applications
              </p>
              <Button variant="outline">View Projects</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;