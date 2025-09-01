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
              <Card className="card-gradient shadow-medium">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-full aspect-square rounded-lg overflow-hidden">
                      <img
                        src={aboutData.image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/10 to-accent/10"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                  <div className="space-y-3">
                    {aboutData.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                >
                  <Card className="card-gradient shadow-medium">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Personal Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="card-gradient shadow-medium">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">What I'm passionate about</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Clean Code",
                        "Web Performance",
                        "User Experience",
                        "Machine Learning",
                        "Open Source",
                        "Tech Innovation",
                        "Continuous Learning",
                        "Problem Solving"
                      ].map((interest, index) => (
                        <motion.div
                          key={interest}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer"
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