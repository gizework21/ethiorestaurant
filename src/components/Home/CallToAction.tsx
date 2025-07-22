
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Gift, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CallToAction = () => {
  return (
    <section 
      className="relative section-padding text-white overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/80" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready for an <span className="text-primary">Unforgettable</span> Experience?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              Join us for an evening of culinary artistry, where every moment is crafted 
              to create lasting memories
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Calendar, title: "Reserve Tonight", desc: "Book your table for this evening's service" },
              { icon: Gift, title: "Gift Experiences", desc: "Perfect for special occasions and celebrations" },
              { icon: MapPin, title: "Prime Location", desc: "Located in the heart of the culinary district" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                  <div className="text-center">
                    <div className="bg-primary/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          
          <AnimatedSection delay={0.8} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/reservations">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl font-semibold min-w-[250px]"
              >
                Make Reservation
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-foreground px-10 py-4 text-xl font-semibold min-w-[250px]"
              >
                Contact Us
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
