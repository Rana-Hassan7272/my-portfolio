import { motion } from "framer-motion";
import { Code, Palette, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Great Design",
      description: "Creating beautiful, intuitive user interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Bringing enthusiasm and dedication to every project, no matter the size or complexity."
    }
  ];

  return (
    <section id="about" className="section-padding bg-section-alt-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Developer with a Love for Innovation
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 2 years of experience creating 
                digital solutions that make a real impact. My journey began with a curiosity 
                about how websites work, and it has evolved into a deep love for crafting 
                exceptional user experiences.
              </p>
              
              <p>
                I specialize in modern web technologies including React, TypeScript, Node.js, 
                and cloud platforms. Whether it's building responsive frontends, scalable 
                backends, or optimizing performance, I approach every challenge with enthusiasm 
                and attention to detail.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying at the forefront of web development 
                trends.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Development
              </div>
              <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                UI/UX Design
              </div>
              <div className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                Cloud Architecture
              </div>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-gradient border-border/50 hover:shadow-medium transition-spring group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-spring"
                    >
                      <value.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;