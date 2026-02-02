import { Search, ShoppingCart, User, Menu, Home, Package, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/context/CartContext";
import SearchAutocomplete from "@/components/search/SearchAutocomplete";
import CategoryMegaMenu from "@/components/layout/CategoryMegaMenu";
import MobileCategoryMenu from "@/components/layout/MobileCategoryMenu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const { t } = useTranslation();

  const menuItems = [
    {
      icon: Home,
      title: t('nav.home'),
      description: t('nav.home_desc'),
      link: "/"
    },
    {
      icon: Package,
      title: t('nav.all_products'),
      description: t('nav.all_products_desc'),
      link: "/products"
    },
    {
      icon: Mail,
      title: t('nav.contact'),
      description: t('nav.contact_desc'),
      link: "/contact"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Main header */}
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Package className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">ComboBasket</h1>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <div className="flex-1 max-w-xl hidden md:block">
            <SearchAutocomplete placeholder={t('nav.search_placeholder')} />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <div className="hidden sm:block mr-2">
              <LanguageSwitcher />
            </div>
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] max-w-sm p-0 flex flex-col">
                <SheetHeader className="p-6 pb-4 border-b flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Package className="h-6 w-6 text-primary-foreground" />
                    </div>
                      <div className="text-left">
                        <SheetTitle className="text-lg">ComboBasket</SheetTitle>
                        <p className="text-sm text-muted-foreground">{t('nav.menu')}</p>
                      </div>
                    </div>
                  </SheetHeader>
                  
                  <div className="p-4 pb-0 sm:hidden">
                    <LanguageSwitcher />
                  </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {menuItems.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        to={item.link}
                        className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border">
                          <item.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Link>
                    </SheetClose>
                  ))}
                  
                  {/* Categories in mobile menu */}
                  <div className="pt-4 border-t mt-4">
                    <MobileCategoryMenu />
                  </div>
                </div>

                {/* WhatsApp button at bottom - fixed at bottom of sheet */}
                <div className="flex-shrink-0 p-4 border-t bg-background mt-auto">
                  <a
                    href="https://wa.me/8801966805533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t('nav.whatsapp_chat')}
                  </a>
                  <p className="text-center text-sm text-muted-foreground mt-2">{t('nav.support_24_7')}</p>
                </div>
              </SheetContent>
            </Sheet>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <CartDrawer>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </CartDrawer>

            <Link to="/login">
              <Button variant="ghost" size="icon" className="border border-border rounded-lg">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile search bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-3 pb-1">
            <SearchAutocomplete 
              placeholder={t('nav.search_placeholder')}
              onClose={() => setIsSearchOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Category navigation - Desktop with Mega Menu */}
      <CategoryMegaMenu />
    </header>
  );
};

export default Header;
