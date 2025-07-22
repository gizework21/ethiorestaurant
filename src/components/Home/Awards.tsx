import { Award, Trophy, Star, Medal } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Michelin Guide",
      description: "5 Michelin Stars",
      year: "2023"
    },
    {
      icon: Award,
      title: "James Beard Award",
      description: "Outstanding Restaurant",
      year: "2022"
    },
    {
      icon: Star,
      title: "Zagat Survey",
      description: "Top 10 Fine Dining",
      year: "2023"
    },
    {
      icon: Medal,
      title: "Wine Spectator",
      description: "Grand Award",
      year: "2023"
    }
  ];

  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Award-Winning <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Recognized by the world's most prestigious culinary institutions 
            for our commitment to exceptional dining experiences
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="bg-primary/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                    <IconComponent size={40} className="text-primary" />
                  </div>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-background">
                    {award.title}
                  </h3>
                  <p className="text-background/70">
                    {award.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
