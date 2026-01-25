import { Package, Sparkles, Heart, Sun, Users, Shirt, Footprints, HandMetal, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const iconMap: Record<string, LucideIcon> = {
  HandMetal,
  Sparkles,
  Package,
  Sun,
  Users,
  Shirt,
  Heart,
  Footprints,
};

const CategorySection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Combo Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Shop smart combo products that save you money and time. 
            Get everything together in one affordable combo pack.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Package;
            return (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group flex flex-col items-center p-6 bg-background rounded-2xl border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                  {category.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {category.productCount} items
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
