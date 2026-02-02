import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";

import { useTranslation } from "react-i18next";

const FeaturedProducts = () => {
  const products = getFeaturedProducts();
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('home.featured_products.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.featured_products.subtitle')}
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="mt-4 md:mt-0 rounded-full">
              {t('nav.all_products')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
