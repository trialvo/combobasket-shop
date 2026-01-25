import { useState } from "react";
import { products, Product } from "@/data/products";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const WishlistSection = () => {
  // Using first 5 products as dummy wishlist
  const [wishlistItems, setWishlistItems] = useState<Product[]>(products.slice(0, 5));
  const { addToCart } = useCart();

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    toast.success("উইশলিস্ট থেকে সরানো হয়েছে!");
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success("কার্টে যোগ হয়েছে!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">আমার উইশলিস্ট</h1>
        <p className="text-muted-foreground">{wishlistItems.length} টি আইটেম</p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl border border-border overflow-hidden group"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% ছাড়
                  </span>
                )}
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-primary">৳{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ৳{product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    কার্টে যোগ
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card rounded-xl border border-border">
          <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">আপনার উইশলিস্ট খালি</p>
          <Button asChild>
            <Link to="/products">কেনাকাটা শুরু করুন</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistSection;
