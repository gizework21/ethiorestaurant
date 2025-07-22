
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-primary">Ethiopian</span> Restaurant
            </h3>
            <p className="text-background/80 mb-6">
              Experience culinary excellence in an atmosphere of refined elegance. 
              Our passion for exceptional cuisine meets impeccable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-background/80 hover:text-primary transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-background/80 hover:text-primary transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-background/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-background/80">1027 Dillerville Rd, <br />Lancaster, PA 17603</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span className="text-background/80">(717) 291-1542</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span className="text-background/80">info@ethiopianrestaurant.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={18} className="text-primary" />
                <span className="text-background/80">Opening Hours</span>
              </div>
              <div className="text-background/80 space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>5:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
           @{new Date().getFullYear()} Ethiopian Restaurant. All rights reserved. | Designed with passion for culinary excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
