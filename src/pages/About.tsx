import Layout from "@/components/Layout/Layout";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Chef Isabella Martinez",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "With 20 years of culinary excellence, Chef Martinez brings innovative techniques from her Michelin-starred background.",
    },
    {
      name: "Marcus Thompson",
      role: "Sommelier",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Award-winning sommelier with expertise in rare wines and perfect food pairings from around the world.",
    },
    {
      name: "Sarah Chen",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Creative pastry artist known for innovative desserts that blend traditional techniques with modern presentation.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('/111.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary">
            Our Story
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            A journey of passion, tradition, and culinary innovation
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Where Tradition Meets{" "}
                <span className="text-primary">Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to Ethiopian Restaurant, your destination for authentic
                Ethiopian cuisine and culture. Rooted in tradition and crafted
                with care, we bring you a true taste of Ethiopia through every
                dish we serve. Our kitchen uses time-honored recipes passed down
                through generations, blending bold spices and fresh ingredients
                to create unforgettable meals. From the rich flavors of spicy
                wot stews to the soft, sour delight of injera, every plate
                reflects the heart and soul of Ethiopian cooking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our warm and
                inviting atmosphere is designed to make you feel at home,
                whether you're sharing a communal platter with friends or
                experiencing Ethiopian food for the first time. More than just a
                meal, dining with us is a cultural journey — a celebration of
                heritage, hospitality, and flavor. Join us, and let your senses
                explore the vibrant traditions of Ethiopia, right here at
                Ethiopian Restaurant.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/E1.jpg"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/E2.jpg"
                alt="Chef preparing food"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="/E3.jpg"
                alt="Fine dining setup"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="/E5.jpg"
                alt="Kitchen details"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for perfection in every dish, every service, every moment.",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "Our love for culinary arts drives us to create memorable experiences.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "We believe in supporting local producers and bringing people together.",
              },
              {
                icon: Clock,
                title: "Tradition",
                description:
                  "We honor time-tested techniques while embracing innovation.",
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
