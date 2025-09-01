import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, Star } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  const topProjects = projects.slice(0, 5);
  const otherProjects = projects.slice(5);

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Top Projects */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {topProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="card-gradient shadow-medium hover:shadow-large transition-smooth overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                          <Star size={12} fill="currentColor" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink size={14} className="mr-1" />
                        Live
                      </Button>
                      {project.videoDemoUrl && (
                        <Button size="sm" variant="outline">
                          <Play size={14} />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="card-gradient shadow-medium">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      Other <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Additional projects and experiments I've worked on
                    </p>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {otherProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                        className="group"
                      >
                        <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth cursor-pointer">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold group-hover:text-primary transition-smooth">
                              {project.title}
                            </h3>
                            <div className="flex gap-2">
                              <Github size={16} className="text-muted-foreground hover:text-foreground transition-smooth" />
                              <ExternalLink size={16} className="text-muted-foreground hover:text-foreground transition-smooth" />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="card-gradient shadow-medium">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Project Statistics</h3>
                <div className="grid gap-6 md:grid-cols-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                    <p className="text-muted-foreground">Total Projects</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">{projects.filter(p => p.featured).length}</div>
                    <p className="text-muted-foreground">Featured Projects</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">15+</div>
                    <p className="text-muted-foreground">Technologies Used</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-warning mb-2">100%</div>
                    <p className="text-muted-foreground">Completion Rate</p>
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

export default Projects;
