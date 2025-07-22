import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const NewsEvents = () => {
  const newsItems = [
    {
      id: 1,
      title: "Wine Pairing Dinner Series Launches",
      excerpt: "Join us for an exclusive evening of perfectly paired wines and seasonal dishes, curated by our sommelier.",
      date: "2024-01-15",
      time: "7:00 PM",
      category: "Event",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "New Spring Menu Available Now",
      excerpt: "Discover our chef's latest creations featuring fresh, locally-sourced spring ingredients and innovative techniques.",
      date: "2024-01-10",
      category: "Menu Update",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Cooking Masterclass with Chef Marco",
      excerpt: "Learn the secrets behind our signature dishes in an intimate cooking class led by Executive Chef Marco Antonelli.",
      date: "2024-01-20",
      time: "2:00 PM",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Latest <span className="text-primary">News & Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest culinary events, menu launches, 
            and special dining experiences
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.2}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center" delay={0.6}>
          <Link to="/blog">
            <Button 
              size="lg" 
              variant="outline"
              className="group px-8 py-4 text-lg font-semibold"
            >
              View All News & Events
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsEvents;
