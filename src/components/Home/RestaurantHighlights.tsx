
import { Award, Users, Clock, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const RestaurantHighlights = () => {
  const highlights = [
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Recognized by culinary institutions worldwide for our innovative cuisine and exceptional service.",
      stats: "15+ Awards"
    },
    {
      icon: Users,
      title: "Expert Culinary Team",
      description: "Our master chefs bring decades of experience from world-renowned kitchens.",
      stats: "20+ Years Experience"
    },
    {
      icon: Clock,
      title: "Farm-to-Table Freshness",
      description: "Sourced daily from local farms and markets to ensure the highest quality ingredients.",
      stats: "Daily Fresh Selections"
    },
    {
      icon: Star,
      title: "Exceptional Guest Experience",
      description: "Consistently rated 5 stars for ambiance, service, and culinary excellence.",
      stats: "5-Star Rating"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Choose <span className="text-primary">Ethiopian Restaurant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that passion, quality, and attention to detail make 
            in every aspect of your dining journey
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent size={36} className="text-primary" />
                  </div>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {highlight.stats}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantHighlights;
