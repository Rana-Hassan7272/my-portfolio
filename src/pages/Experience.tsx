import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building, Star } from "lucide-react";
import { experience } from "@/data/experience";
import CertificatesSection from "@/components/sections/CertificatesSection";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey through freelance work and internships
            </p>
          </motion.div>

          <div className="grid gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 group-hover:from-primary/5 group-hover:to-accent/5 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid gap-6 lg:grid-cols-4">
                      {/* Header Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <Building className="w-5 h-5 text-primary group-hover:text-primary/80" />
                          </div>
                          <Badge 
                            variant={exp.type === 'Freelance' ? 'default' : 'secondary'}
                            className="text-xs group-hover:scale-105 transition-transform duration-300"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                          {exp.company}
                        </p>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                            <Calendar size={14} className="group-hover:text-primary transition-colors duration-300" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                            <MapPin size={14} className="group-hover:text-primary transition-colors duration-300" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description & Responsibilities */}
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                          {exp.description}
                        </p>
                        
                        <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, 4).map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:bg-accent group-hover:scale-125 transition-all duration-300"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies & Achievements */}
                      <div className="lg:col-span-1">
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs px-2 py-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                            <Star className="w-4 h-4 text-accent group-hover:text-accent/80 group-hover:rotate-12 transition-all duration-300" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                • {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certificates Section */}
          <CertificatesSection />

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
            whileHover={{ y: -5 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">
                  Experience Summary
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                      2+
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Years of Experience
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300">
                      100+
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Projects Completed
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-success mb-2 group-hover:text-success/80 transition-colors duration-300">
                      4
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Different Platforms
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;