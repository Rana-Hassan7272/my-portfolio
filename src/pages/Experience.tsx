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
              >
                <Card className="card-gradient shadow-medium hover:shadow-large transition-smooth">
                  <CardContent className="p-8">
                    <div className="grid gap-6 lg:grid-cols-4">
                      {/* Header Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Building className="w-5 h-5 text-primary" />
                          </div>
                          <Badge 
                            variant={exp.type === 'Freelance' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <h3 className="font-bold text-xl mb-2">{exp.title}</h3>
                        <p className="text-lg font-medium text-primary mb-3">{exp.company}</p>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description & Responsibilities */}
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.slice(0, 4).map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies & Achievements */}
                      <div className="lg:col-span-1">
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs px-2 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-accent" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">
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
          >
            <Card className="card-gradient shadow-medium">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Experience Summary</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">4</div>
                    <p className="text-muted-foreground">Different Platforms</p>
                  </div>
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