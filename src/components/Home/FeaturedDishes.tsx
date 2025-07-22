
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const FeaturedDishes = () => {
  const dishes = [
    {
    id: 13,
    category: "vegetarianEntrees",
    name: "Atkilt Wot",
    description: "Cabbage, carrots, and potatoes in turmeric sauce",
    price: 14,
    image: "/88.jpg",
  },
  {
    id: 14,
    category: "vegetarianEntrees",
    name: "Gomen",
    description: "Collard greens sautéed with garlic and onions",
    price: 14,
    image: "https://healthiersteps.com/wp-content/uploads/2021/10/close-up-gomen-ethiopian-collard-greens.jpg",
  },
  {
    id: 15,
    category: "vegetarianEntrees",
    name: "Fosolia",
    description: "Green beans and carrots sautéed with onions",
    price: 14,
    image: "https://spicebreeze.com/wp-content/uploads/2023/12/Ethiopian-Fasolia.png",
  },
   {
    id: 1,
    category: "lambEntrees",
    name: "Lamb Alicha",
    description: "Mild lamb stew with turmeric, garlic, and onion",
    price: 18,
    image: "https://tarasmulticulturaltable.com/wp-content/uploads/2023/02/Ye-Beg-Alicha-Wot-Mild-Lamb-Stew-4-of-4-1024x683.jpg",
  },
  {
    id: 2,
    category: "lambEntrees",
    name: "Lamb Key Wot",
    description: "Spicy lamb stew with berbere sauce",
    price: 18,
    image: "https://iliveinafryingpan.com/wp-content/uploads/2013/03/MG_7687.jpg",
  },
  {
    id: 3,
    category: "lambEntrees",
    name: "Lamb Tibs",
    description: "Sautéed lamb cubes with onions, tomatoes, and jalapeños",
    price: 18,
    image: "https://preview.redd.it/does-anyone-know-a-recipe-for-this-v0-bbt9900luwu91.jpg?width=1080&crop=smart&auto=webp&s=caa913dae47cd6a4bb207a815058535df73e550f",
  },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Signature <span className="text-primary">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's masterpieces, crafted with the finest ingredients 
            and presented with artistic flair
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <AnimatedSection key={dish.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {dish.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-foreground/90 text-background px-3 py-1 rounded-full text-lg font-bold">
                       $ {dish.price}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-display font-semibold mb-3">{dish.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center" delay={0.6}>
          <Link to="/menu">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
            >
              View Full Menu
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedDishes;
