import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-section-alt-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-medium z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <Card className="card-gradient border-border/50 hover:shadow-large transition-spring group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:shadow-glow transition-spring">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                            {job.title}
                          </h3>
                          <p className="text-accent font-medium">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {job.period}
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                job.type === 'Full-time' ? 'bg-success/10 text-success' :
                                job.type === 'Freelance' ? 'bg-primary/10 text-primary' :
                                'bg-accent/10 text-accent'
                              }`}
                            >
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <MapPin className="w-3 h-3 mr-1" />
                              {job.location}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-accent/10 text-accent"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-success" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-success rounded-full mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-success mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;