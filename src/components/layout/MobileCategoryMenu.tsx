import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Cake, Heart, PartyPopper, Baby, Trophy, Flower2, Briefcase, Coffee, LucideIcon } from "lucide-react";
import { categories, Category } from "@/data/products";
import { SheetClose } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const iconMap: Record<string, LucideIcon> = {
  Cake,
  Heart,
  PartyPopper,
  Baby,
  Trophy,
  Flower: Flower2,
  Briefcase,
  Coffee,
};

interface MobileCategoryMenuProps {
  onNavigate?: () => void;
}

const MobileCategoryMenu = ({ onNavigate }: MobileCategoryMenuProps) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground mb-3 px-2">CATEGORIES</p>
      
      {/* View All Categories Link */}
      <SheetClose asChild>
        <Link
          to="/products"
          onClick={onNavigate}
          className="flex items-center gap-4 p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
        >
          <span className="font-semibold text-primary">View All Categories</span>
          <ChevronRight className="h-4 w-4 text-primary ml-auto" />
        </Link>
      </SheetClose>

      {categories.map((category) => {
        const IconComponent = iconMap[category.icon] || Cake;
        const isOpen = openCategories.includes(category.id);

        return (
          <Collapsible 
            key={category.id} 
            open={isOpen}
            onOpenChange={() => toggleCategory(category.id)}
          >
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <CollapsibleTrigger className="flex items-center gap-3 w-full p-3 hover:bg-muted/50 transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${category.color}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <span className="font-medium flex-1 text-left">{category.name}</span>
                <span className="text-xs text-muted-foreground mr-2">({category.productCount})</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="px-3 pb-3 space-y-1">
                  {/* Explore All in Category */}
                  <SheetClose asChild>
                    <Link
                      to={`/products?category=${category.slug}`}
                      onClick={onNavigate}
                      className="block px-3 py-2 text-sm rounded-md bg-muted/50 hover:bg-muted transition-colors font-medium text-primary"
                    >
                      Explore All {category.name}
                    </Link>
                  </SheetClose>
                  
                  {/* Subcategories */}
                  {category.subcategories.map((sub) => (
                    <SheetClose asChild key={sub.id}>
                      <Link
                        to={`/products?subcategory=${sub.slug}`}
                        onClick={onNavigate}
                        className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                      >
                        <span>{sub.name}</span>
                        <span className="text-xs text-muted-foreground">({sub.productCount})</span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default MobileCategoryMenu;
