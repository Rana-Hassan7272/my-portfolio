import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certificates } from "@/data/certificates";
import { useState } from "react";

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Certifications & <span className="text-gradient">Achievements</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in AI, web development, and freelancing.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card 
                className="card-gradient border-border/50 hover:shadow-large transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="300"
                    height="192"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={cert.type === 'Professional Certification' ? 'default' : 
                              cert.type === 'Technical Certification' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {cert.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Click to view details</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{selectedCertificate.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedCertificate.date}</span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={selectedCertificate.type === 'Professional Certification' ? 'default' : 
                            selectedCertificate.type === 'Technical Certification' ? 'secondary' : 'outline'}
                  >
                    {selectedCertificate.type}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedCertificate.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="card-gradient border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Professional</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">2</div>
                  <p className="text-sm text-muted-foreground">Freelance Achievements</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
