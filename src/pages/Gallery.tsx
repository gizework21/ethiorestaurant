
import Layout from "@/components/Layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/E1.jpg",
      alt: "Restaurant Interior",
      category: "Interior",
      title: "Main Dining Room"
    },
    {
      src: "/E2.jpg",
      alt: "Wagyu Steak",
      category: "Food",
      title: "Wagyu Beef Tenderloin"
    },
    {
      src: "/E3.jpg",
      alt: "Chef preparing food",
      category: "Kitchen",
      title: "Chef at Work"
    },
    {
      src: "/E4.jpg",
      alt: "Pan-seared scallops",
      category: "Food",
      title: "Pan-Seared Scallops"
    },
    {
      src: "/E5.jpg",
      alt: "Restaurant ambiance",
      category: "Interior",
      title: "Evening Ambiance"
    },
  ];

  const categories = ["All", "Food", "Interior", "Kitchen"];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold">Gallery</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            A visual journey through our culinary artistry and elegant atmosphere
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Visual <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the artistry behind our dishes and the elegance of our dining spaces
            </p>
          </div>

          {/* Category Filters */}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Experience It Yourself
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to create your own memorable dining experience? Book your table today 
                and discover why Ethiopian Restaurant is the destination for culinary excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/reservations"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Make a Reservation
                </a>
                <a 
                  href="/menu"
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  View Our Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
