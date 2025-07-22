
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Home/Hero";
import FeaturedDishes from "@/components/Home/FeaturedDishes";
import RestaurantHighlights from "@/components/Home/RestaurantHighlights";
import Testimonials from "@/components/Home/Testimonials";
import Awards from "@/components/Home/Awards";
import CallToAction from "@/components/Home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDishes />
      {/* <ChefSpotlight /> */}
      <Awards />
      <RestaurantHighlights />
      <CallToAction />
      <Testimonials />
      {/* <NewsEvents /> */}
    </Layout>
  );
};

export default Index;
