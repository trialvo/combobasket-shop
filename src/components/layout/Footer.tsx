import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-foreground text-background">
      {/* SEO Booster Section */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-foreground/80">
            {t('footer.about_desc_long')}
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
                <p className="text-xs opacity-70">{t('footer.about_slogan')}</p>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-4">
              {t('footer.about_desc_short')}
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
            <h4 className="font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:text-primary transition-colors">{t('footer.links.home')}</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">{t('footer.links.all_products')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t('footer.links.contact')}</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">{t('footer.links.my_account')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">{t('footer.links.terms')}</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">{t('footer.links.privacy')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.popular_categories')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/products?category=${category.slug}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {t(`categories.${category.slug}`, category.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
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
            
            <h4 className="font-semibold mb-2">{t('footer.newsletter')}</h4>
            <div className="flex gap-2">
              <Input 
                placeholder={t('footer.newsletter_placeholder')} 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="shrink-0">{t('footer.subscribe')}</Button>
            </div>
          </div>
        </div>

        {/* Why Buy From Us */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <h4 className="font-semibold mb-4 text-center">{t('footer.why_us')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm opacity-80">
            <div>✓ {t('footer.why_us_items.1')}</div>
            <div>✓ {t('footer.why_us_items.2')}</div>
            <div>✓ {t('footer.why_us_items.3')}</div>
            <div>✓ {t('footer.why_us_items.4')}</div>
            <div>✓ {t('footer.why_us_items.5')}</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">{t('footer.links.privacy')}</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">{t('footer.links.terms')}</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">{t('footer.links.contact')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
