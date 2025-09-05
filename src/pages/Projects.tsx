import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, Star } from "lucide-react";
import { projects } from "@/data/projects";
import { useState } from "react";

const Projects = () => {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});

  // Filter out the AI Chat Application and get top 6 projects
  const topProjects = projects.filter(project => project.title !== "AI Chat Application").slice(0, 6);
  
  // List of additional projects
  const otherProjectNames = [
    "Email Spam Collector",
    "Crypto Trading Bot", 
    "EMF Tracker",
    "Food Delivery App",
    "Resume Analyzer AI",
    "Airbnb Clone",
    "Road Sign Classifier",
    "Churn Prediction"
  ];

  const handleGitHubClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleVideoDemoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const toggleSkills = (projectId: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

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
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 group-hover:from-accent/5 group-hover:to-primary/5 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary/90 text-white flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                          <Star size={12} fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground transition-colors duration-300 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 4 && (
                          <Badge 
                            variant="outline" 
                            className="text-xs cursor-pointer hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300"
                            onClick={() => toggleSkills(project.id)}
                          >
                            {expandedSkills[project.id] ? 'Show Less' : `+${project.techStack.length - 4} more`}
                          </Badge>
                        )}
                      </div>
                      {expandedSkills[project.id] && project.techStack.length > 4 && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 flex flex-wrap gap-2"
                        >
                          {project.techStack.slice(4).map((tech, techIndex) => (
                            <Badge 
                              key={techIndex + 4} 
                              variant="outline" 
                              className="text-xs border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 group-hover:bg-accent group-hover:text-white group-hover:scale-105 transition-all duration-300"
                        onClick={() => handleGitHubClick(project.githubUrl)}
                      >
                        <Github size={14} className="mr-1 group-hover:rotate-12 transition-transform duration-300" />
                        Code
                      </Button>
                      {project.videoDemoUrl && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300"
                          onClick={() => handleVideoDemoClick(project.videoDemoUrl!)}
                        >
                          <Play size={14} className="group-hover:scale-110 transition-transform duration-300" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-primary/5">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-accent transition-colors duration-300">
                    Other <span className="text-gradient">Projects</span>
                  </h2>
                  <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Additional projects and experiments I've worked on
                  </p>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {otherProjectNames.map((projectName, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                    >
                      <div className="p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer bg-card hover:shadow-lg hover:bg-accent/5">
                        <h3 className="font-semibold text-center group-hover:text-accent transition-colors duration-300">
                          {projectName}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
            whileHover={{ y: -5 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors duration-300">
                  Project Statistics
                </h3>
                <div className="grid gap-6 md:grid-cols-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                      100+
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Total Projects
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-accent mb-2 group-hover:text-accent/80 transition-colors duration-300">
                      {topProjects.filter(p => p.featured).length}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Featured Projects
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-success mb-2 group-hover:text-success/80 transition-colors duration-300">
                      15+
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Technologies Used
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="text-3xl font-bold text-warning mb-2 group-hover:text-warning/80 transition-colors duration-300">
                      100%
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Completion Rate
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

export default Projects;
