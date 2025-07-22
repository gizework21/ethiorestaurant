
import { Award, Clock, Users, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ChefSpotlight = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Executive Chef Marco Antonelli"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <ChefHat size={32} />
                  <div>
                    <p className="text-sm opacity-90">Executive Chef</p>
                    <p className="text-xl font-bold">Since 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Meet Chef <span className="text-primary">Marco Antonelli</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                With over 20 years of culinary excellence spanning from Milan to New York, 
                Chef Marco brings a perfect fusion of traditional Italian techniques and 
                contemporary innovation to every dish.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His philosophy centers on sourcing the finest ingredients and transforming 
                them into extraordinary experiences that tell stories of passion, tradition, 
                and artistic vision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, number: "15+", label: "Culinary Awards" },
                { icon: Clock, number: "20+", label: "Years Experience" },
                { icon: Users, number: "50K+", label: "Happy Guests" },
                { icon: ChefHat, number: "5", label: "Michelin Stars" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                    <Card className="text-center p-6">
                      <CardContent className="p-0">
                        <IconComponent className="text-primary mx-auto mb-4" size={40} />
                        <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ChefSpotlight;
