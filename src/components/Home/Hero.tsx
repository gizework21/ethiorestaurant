import { ChefHat, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/111.jpg", "/E1.jpg", "/E5.jpg"];
const SLIDE_INTERVAL = 3000;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Optional Overlay */}
      <div className="absolute inset-0 hero-gradient z-10" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4">
              <ChefHat size={48} className="text-primary" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
          >
            Ethiopian <span className="text-primary">Restaurant</span>
            <br />
            lancaster
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Experience an extraordinary dining journey where innovation meets
            tradition, and every dish tells a story of passion and precision.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Star className="text-primary" size={24} />
              <span className="text-lg">Michelin Recommended</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <ChefHat className="text-primary" size={24} />
              <span className="text-lg">Award-Winning Chef</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Clock className="text-primary" size={24} />
              <span className="text-lg">Fresh Daily Selections</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
