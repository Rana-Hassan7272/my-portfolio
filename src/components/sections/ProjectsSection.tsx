import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { trackEvent } from "@/components/GoogleAnalytics";

const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-section-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-gradient border-border/50 hover:shadow-large transition-spring group overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} - AI and web development project by Muhammad Hassan Shahbaz`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-spring"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        trackEvent('click', 'project', `${project.title}_github`);
                        window.open(project.githubUrl, "_blank");
                      }}
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-spring group/btn"
                    >
                      <Github className="w-4 h-4 mr-1 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    
                    <Button
                      size="sm"
                      onClick={() => {
                        trackEvent('click', 'project', `${project.title}_demo`);
                        window.open(project.liveDemoUrl, "_blank");
                      }}
                      className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-spring group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Live Demo
                    </Button>
                    
                    {project.videoDemoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          trackEvent('click', 'project', `${project.title}_video`);
                          window.open(project.videoDemoUrl, "_blank");
                        }}
                        className="border-accent/20 hover:border-accent/40 hover:bg-accent/5 transition-spring group/btn"
                      >
                        <Play className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Video
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">More Projects</h3>
          <p className="text-muted-foreground">
            Additional projects that demonstrate my versatility and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-gradient border-border/50 hover:shadow-medium transition-spring group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - AI and web development project by Muhammad Hassan Shahbaz`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-spring"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <h4 className="font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h4>
                </CardHeader>
                
                <CardContent className="space-y-3 flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/50">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-1 text-xs"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveDemoUrl, "_blank")}
                      className="flex-1 text-xs"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
