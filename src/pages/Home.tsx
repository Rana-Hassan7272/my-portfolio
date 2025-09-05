import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Download, MapPin, Calendar, GraduationCap, Briefcase, Code, ExternalLink, Users, MessageCircle, Target, TrendingUp, Heart, Trophy } from "lucide-react";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RESUME.pdf';
    link.download = 'RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewExperience = () => {
    navigate('/experience');
  };

  const handleViewProjects = () => {
    navigate('/projects');
  };

  // Soft Skills Data
  const softSkills = [
    {
      category: "Communication & Leadership",
      items: [
        { name: "Communication", icon: <MessageCircle size={16} /> },
        { name: "Team Leadership", icon: <Users size={16} /> },
        { name: "Project Management", icon: <Target size={16} /> },
        { name: "Client Relations", icon: <Heart size={16} /> }
      ]
    },
    {
      category: "Personal Development",
      items: [
        { name: "Basketball", icon: <Trophy size={16} /> },
        { name: "Volunteering", icon: <Heart size={16} /> },
        { name: "Forex Trading", icon: <TrendingUp size={16} /> },
        { name: "Problem Solving", icon: <Target size={16} /> }
      ]
    }
  ];

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
                <span className="text-gradient">Muhammad Hassan Shahbaz</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                Full Stack AI Engineer || GenAI Expert
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Passionate about creating AI agents, agentic AI, LLM-based applications, RAG chatbots, 
                NLP solutions, machine learning models, and full AI-powered websites. I build innovative, 
                scalable AI solutions with cutting-edge technologies and clean code architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="btn-primary gap-2" onClick={handleDownloadResume}>
                  <Download size={20} />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline gap-2"
                  onClick={() => window.open('https://github.com/Rana-Hassan7272', '_blank')}
                >
                  <Github size={20} />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline gap-2"
                  onClick={() => window.open('https://www.linkedin.com/in/muhammad-hassan-shahbaz-61b524311/', '_blank')}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline gap-2"
                  onClick={() => window.open('https://www.fiverr.com/users/hassan1830', '_blank')}
                >
                  <img src="/fiverr.jpg" alt="Fiverr" className="w-6 h-6" />
                  Fiverr
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline gap-2"
                  onClick={() => window.open('https://www.upwork.com/freelancers/~01f343f7ce02f99150', '_blank')}
                >
                  <img src="/upwork.svg" alt="Upwork" className="w-6 h-6" />
                  Upwork
                </Button>
              </div>
            </motion.div>
            
            {/* Clean Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Simple Avatar Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Hassan Shahbaz - Full Stack AI Engineer"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width="384"
                    height="384"
                  />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Education Section */}
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
                <Card className="card-modern">
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

      {/* Technical Skills Section */}
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid gap-8 md:gap-12">
            {skills.map((category, categoryIndex) => (
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
                  {category.items.map((skill, index) => (
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
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-smooth cursor-pointer"
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

      {/* Soft Skills Section */}
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
              Soft <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personal attributes and interpersonal skills that complement my technical expertise
            </p>
          </motion.div>

          <div className="grid gap-8 md:gap-12">
            {softSkills.map((category, categoryIndex) => (
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
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-smooth cursor-pointer border-primary/20"
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

      {/* Experience Section */}
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
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experience.slice(0, 3).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group-hover:from-primary/5 group-hover:to-accent/5">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {exp.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{exp.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      onClick={handleViewExperience}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button variant="outline" className="btn-outline" onClick={handleViewExperience}>
              View All Experience
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of my best AI and full-stack development projects
            </p>
            </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(project => project.featured).slice(0, 3).map((project, index) => (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group-hover:from-accent/5 group-hover:to-primary/5 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-white">
                        Featured
                      </Badge>
                    </div>
              </div>
                  
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs px-2 py-1 border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                        onClick={() => window.open(project.videoDemoUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button variant="outline" className="btn-outline" onClick={handleViewProjects}>
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;