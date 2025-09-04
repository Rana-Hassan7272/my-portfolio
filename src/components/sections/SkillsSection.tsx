import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-section-alt-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML, Full Stack Development, DevOps, and Emerging Technologies. 
            Each skill represents years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
            >
              <Card className="card-gradient border-border/50 hover:shadow-large transition-spring h-full group hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-center group-hover:text-primary transition-colors">
                    {category.category}
                  </CardTitle>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-primary/15 text-primary border border-primary/20 font-semibold"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      <div className="relative h-2.5 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary & Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Additional <span className="text-gradient">Technologies</span> & Tools
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Beyond core skills, I'm also experienced with various supporting technologies and frameworks
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Jest", icon: "🧪" },
              { name: "Cypress", icon: "🔍" },
              { name: "Webpack", icon: "📦" },
              { name: "Vite", icon: "⚡" },
              { name: "ESLint", icon: "🔧" },
              { name: "Prettier", icon: "✨" },
              { name: "Storybook", icon: "📚" },
              { name: "Three.js", icon: "🎮" },
              { name: "Socket.io", icon: "🔌" },
              { name: "JWT", icon: "🔐" },
              { name: "OAuth", icon: "🔑" },
              { name: "Stripe", icon: "💳" },
              { name: "PayPal", icon: "💰" },
              { name: "Cloudinary", icon: "☁️" },
              { name: "Heroku", icon: "🚀" },
              { name: "DigitalOcean", icon: "🌊" },
              { name: "Redis", icon: "🔴" },
              { name: "Elasticsearch", icon: "🔍" },
              { name: "Kafka", icon: "📨" },
              { name: "RabbitMQ", icon: "🐰" },
              { name: "Celery", icon: "🥬" },
              { name: "Airflow", icon: "💨" },
              { name: "Selenium", icon: "🤖" },
              { name: "Playwright", icon: "🎭" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className="bg-card border border-border/50 rounded-lg p-4 hover:border-primary/30 hover:shadow-medium transition-all duration-300 cursor-default">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "4", label: "Skill Categories", icon: "📊" },
              { number: "48", label: "Technologies", icon: "🛠️" },
              { number: "95%", label: "Highest Proficiency", icon: "🏆" },
              { number: "5+", label: "Years Experience", icon: "⏰" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;