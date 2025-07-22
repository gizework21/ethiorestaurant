
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Pasta: From Grain to Plate",
      excerpt: "Discover the journey of creating our handmade pasta, from selecting the finest semolina to the techniques that make each dish extraordinary.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Culinary Techniques",
      author: "Chef Isabella Martinez",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Seasonal Menu Launch: Winter's Finest Ingredients",
      excerpt: "Our winter menu celebrates the season's best produce with warming spices, rich flavors, and comforting presentations that capture winter's essence.",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Menu Updates",
      author: "Chef Isabella Martinez",
      date: "2024-01-10",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 3,
      title: "Wine Pairing Masterclass: Elevating Your Dining Experience",
      excerpt: "Learn from our sommelier about the art of wine pairing and how the right selection can transform your meal into an unforgettable experience.",
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wine & Beverages",
      author: "Marcus Thompson",
      date: "2024-01-08",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Take an exclusive look at the preparation, passion, and precision that goes into every dish served at Ethiopian Restaurant.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Behind the Scenes",
      author: "Restaurant Team",
      date: "2024-01-05",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Sweet Science: Crafting Our Signature Desserts",
      excerpt: "Explore the artistry and precision behind our dessert menu, where traditional techniques meet modern innovation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Pastry Arts",
      author: "Sarah Chen",
      date: "2024-01-03",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 6,
      title: "Sustainability in Fine Dining: Our Green Initiatives",
      excerpt: "Learn about our commitment to sustainable practices, from sourcing to waste reduction, and how luxury dining can be environmentally conscious.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
      author: "Restaurant Team",
      date: "2024-01-01",
      readTime: "5 min read",
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-bold">Our Blog</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Stories from our kitchen, insights from our chefs, and the latest culinary inspiration
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">Featured Story</h2>
              </div>
              
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <Badge className="mb-4">{featuredPost.category}</Badge>
                    <h3 className="text-3xl font-display font-bold mb-4 hover:text-primary transition-colors">
                      <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read Full Story
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Latest Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <h3 className="text-xl font-display font-semibold hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </span>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Stay Updated with Our Culinary Journey
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest recipes, chef insights, 
              menu updates, and exclusive dining experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
