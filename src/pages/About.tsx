import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { aboutData } from "@/data/about";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">{aboutData.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get to know me better
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="bg-card shadow-medium border border-border/50 overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full aspect-square rounded-lg overflow-hidden">
                        <img
                          src={aboutData.image}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                    <div className="space-y-3">
                      {aboutData.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {aboutData.paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="bg-card shadow-medium border border-border/50 overflow-hidden">
                    <CardContent className="p-6">
                      <motion.p 
                        className="text-muted-foreground leading-relaxed text-lg"
                        whileHover={{ color: "hsl(var(--foreground))" }}
                        transition={{ duration: 0.3 }}
                      >
                        {paragraph}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Personal Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="bg-card shadow-medium border border-border/50 overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">What I'm passionate about</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Artificial Intelligence",
                        "Machine Learning",
                        "AI Agents & RAG Systems",
                        "LLM Fine-tuning",
                        "Prompt Engineering",
                        "Clean Code Architecture",
                        "Open Source AI",
                        "AI Ethics & Responsible AI",
                        "Continuous Learning",
                        "Problem Solving",
                        "AI Research",
                        "Innovation"
                      ].map((interest, index) => (
                        <motion.div
                          key={interest}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                          >
                            {interest}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;