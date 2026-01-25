import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* SEO Booster Section */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-foreground/80">
            ComboBasket.com is one of the fastest-growing combo product online shops in Bangladesh. 
            Buy socks, gloves, caps, makeup items, and daily essentials in combo packs at the best price with cash on delivery.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ComboBasket</h3>
                <p className="text-xs opacity-70">Smart Combo Shopping</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Bangladesh's No.1 Combo Product E-commerce Platform. Buy smart combo products 
              online at the best price with cash on delivery all over Bangladesh.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">My Account</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/products?category=${category.slug}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80 mb-6">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +880 1966 805533
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                support@combobasket.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                Dhaka, Bangladesh
              </li>
            </ul>
            
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="shrink-0">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Why Buy From Us */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <h4 className="font-semibold mb-4 text-center">Why Buy Combo Products from ComboBasket?</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm opacity-80">
            <div>✓ Best combo product price in Bangladesh</div>
            <div>✓ Trusted Bangladeshi online shopping site</div>
            <div>✓ 100% quality checked products</div>
            <div>✓ Cash on delivery all over Bangladesh</div>
            <div>✓ Fast and reliable delivery service</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© 2026 ComboBasket.com. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
