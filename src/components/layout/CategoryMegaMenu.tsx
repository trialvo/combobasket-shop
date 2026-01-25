import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Layers, LucideIcon } from "lucide-react";
import { categories, Category } from "@/data/products";
import { cn } from "@/lib/utils";

// Dynamic icon imports
import { 
  Shirt, Footprints, HandMetal, Sun, Sparkles, 
  Heart, Package, Users, Cake, Baby, Trophy, Flower2, Briefcase, Coffee 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shirt,
  Footprints,
  HandMetal,
  Sun,
  Sparkles,
  Heart,
  Package,
  Users,
  Cake,
  Baby,
  Trophy,
  Flower: Flower2,
  Briefcase,
  Coffee,
};

const CategoryMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [allCategoriesHovered, setAllCategoriesHovered] = useState<string | null>(null);

  // Show maximum 6 categories in the navbar
  const MAX_VISIBLE_CATEGORIES = 6;
  const visibleCategories = categories.slice(0, MAX_VISIBLE_CATEGORIES);
  const hasMoreCategories = categories.length > MAX_VISIBLE_CATEGORIES;

  return (
    <nav className="border-t bg-muted/30 hidden lg:block relative">
      <div className="container mx-auto px-4">
        <ul className="flex items-center relative">
          {/* All Products Link */}
          <li className="flex-shrink-0">
            <Link 
              to="/products"
              className="inline-flex h-11 items-center justify-center px-3 xl:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
            >
              All Products
            </Link>
          </li>

          {/* Individual Category Items with Dropdowns - Limited to MAX_VISIBLE */}
          {visibleCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Package;
            
            return (
              <li 
                key={category.id}
                className="relative flex-shrink-0"
                onMouseEnter={() => {
                  setActiveCategory(category.id);
                  setShowAllCategories(false);
                }}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to={`/products?category=${category.slug}`}
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-1 px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
                    activeCategory === category.id && "bg-accent text-accent-foreground"
                  )}
                >
                  <span className="hidden xl:inline">{category.name}</span>
                  <span className="xl:hidden">{category.name.length > 10 ? category.name.slice(0, 10) + '...' : category.name}</span>
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </Link>

                {/* Dropdown for this category */}
                {activeCategory === category.id && (
                  <div className="absolute top-full left-0 z-50 bg-popover border rounded-lg shadow-xl min-w-[280px] max-w-[320px] animate-in fade-in-0 zoom-in-95 duration-100">
                    <div className="p-3">
                      {/* Category Header */}
                      <Link 
                        to={`/products?category=${category.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors mb-2"
                      >
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", category.color)}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">All {category.name}</h3>
                          <p className="text-xs text-muted-foreground">{category.productCount} products</p>
                        </div>
                      </Link>
                      
                      {/* Subcategories */}
                      {category.subcategories.length > 0 && (
                        <div className="border-t pt-3 mt-2">
                          <p className="text-xs text-muted-foreground font-medium px-3 mb-2 uppercase tracking-wide">Subcategories</p>
                          <div className="grid gap-1">
                            {category.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                to={`/products?subcategory=${sub.slug}`}
                                className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted/50 transition-colors text-foreground hover:text-primary"
                              >
                                <span>{sub.name}</span>
                                <span className="text-xs text-muted-foreground">({sub.productCount})</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}

          {/* All Categories - at the end */}
          <li 
            className="relative flex-shrink-0 ml-auto"
            onMouseEnter={() => {
              setShowAllCategories(true);
              setActiveCategory(null);
              setAllCategoriesHovered(categories[0]?.id || null);
            }}
            onMouseLeave={() => {
              setShowAllCategories(false);
              setAllCategoriesHovered(null);
            }}
          >
            <button
              className={cn(
                "inline-flex h-11 items-center justify-center gap-1 px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
                showAllCategories && "bg-accent text-accent-foreground"
              )}
            >
              <Layers className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">All Categories</span>
              <span className="lg:hidden">More</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>

            {/* All Categories Mega Menu */}
            {showAllCategories && (
              <div className="absolute top-full right-0 z-50 bg-popover border rounded-lg shadow-xl w-[520px] max-w-[90vw] animate-in fade-in-0 zoom-in-95 duration-100">
                <div className="flex min-h-[350px]">
                  {/* Left side - Categories List */}
                  <div className="w-1/2 border-r bg-muted/30 p-4">
                    <p className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wide">Categories</p>
                    <div className="space-y-1">
                      {categories.map((category) => {
                        const IconComponent = iconMap[category.icon] || Package;
                        return (
                          <div
                            key={category.id}
                            onMouseEnter={() => setAllCategoriesHovered(category.id)}
                            className={cn(
                              "flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors",
                              allCategoriesHovered === category.id 
                                ? "bg-primary/10 text-primary" 
                                : "hover:bg-muted/50"
                            )}
                          >
                            <Link 
                              to={`/products?category=${category.slug}`}
                              className="flex items-center gap-3 flex-1"
                            >
                              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-xs", category.color)}>
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div>
                                <span className="font-medium text-sm">{category.name}</span>
                                <p className="text-xs text-muted-foreground">{category.productCount} items</p>
                              </div>
                            </Link>
                            <ChevronRight className="h-4 w-4 opacity-50" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right side - Subcategories for hovered category */}
                  <div className="w-1/2 p-4">
                    {allCategoriesHovered && (() => {
                      const hoveredCat = categories.find(c => c.id === allCategoriesHovered);
                      if (!hoveredCat) return null;
                      const IconComponent = iconMap[hoveredCat.icon] || Package;
                      
                      return (
                        <>
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", hoveredCat.color)}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm">{hoveredCat.name}</h3>
                              <p className="text-xs text-muted-foreground">{hoveredCat.subcategories.length} subcategories</p>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <Link
                              to={`/products?category=${hoveredCat.slug}`}
                              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors text-primary font-medium text-sm"
                            >
                              View All {hoveredCat.name}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Link>
                            
                            {hoveredCat.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                to={`/products?subcategory=${sub.slug}`}
                                className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-muted/50 transition-colors text-foreground hover:text-primary"
                              >
                                <span>{sub.name}</span>
                                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{sub.productCount}</span>
                              </Link>
                            ))}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Bottom action */}
                <div className="border-t p-3 bg-muted/30">
                  <Link 
                    to="/products"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Explore All Products
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoryMegaMenu;
