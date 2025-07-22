import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dawit Grima",
      content: "Ethiopian Restaurant delivers an extraordinary dining experience that transcends expectations. Every dish is a masterpiece of flavor and presentation.",
      rating: 5,
    },
    {
      id: 2,
      name: "Eyob Tenewu",
      content: "The attention to detail here is incredible. From the ambiance to the service, everything speaks of culinary excellence and passion.",
      rating: 5,
    },
    {
      id: 3,
      name: "Abebe Moges",
      content: "This place has become our go-to for special occasions. The seasonal menu keeps us coming back for new surprises every time.",
      rating: 5,
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who have experienced 
            the magic of our culinary artistry
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.2}>
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote size={48} />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
