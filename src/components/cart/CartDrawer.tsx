import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2, Gift, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

interface CartDrawerProps {
  children?: React.ReactNode;
}

const FREE_DELIVERY_THRESHOLD = 2500;

const CartDrawer = ({ children }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();

  const remainingForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - getCartTotal());

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
        {/* Header */}
        <SheetHeader className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Gift className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <SheetTitle className="text-lg text-left">Your Cart</SheetTitle>
              <p className="text-sm text-muted-foreground">{getCartCount()} Products</p>
            </div>
          </div>
        </SheetHeader>

        {/* Free delivery banner */}
        <div className="mx-6 px-4 py-3 bg-[hsl(var(--primary-light))] rounded-lg flex items-center gap-2">
          <Truck className="h-5 w-5 text-primary" />
          {remainingForFreeDelivery > 0 ? (
            <p className="text-sm">
              Order <span className="font-semibold text-primary">৳{remainingForFreeDelivery.toLocaleString()}</span> more for free delivery!
            </p>
          ) : (
            <p className="text-sm text-primary font-medium">🎉 You've unlocked free delivery!</p>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12 px-6">
            <div className="w-24 h-24 bg-[hsl(var(--primary-light))] rounded-2xl flex items-center justify-center mb-6">
              <Gift className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cart is Empty</h3>
            <p className="text-muted-foreground mb-6">Start shopping for beautiful gifts</p>
            <SheetClose asChild>
              <Link to="/products">
                <Button className="rounded-full px-8">
                  View Gifts
                </Button>
              </Link>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.product.images[0] || "/placeholder.svg"}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <SheetClose asChild>
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium text-foreground hover:text-primary line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                    </SheetClose>
                    <p className="text-primary font-semibold mt-1">
                      ৳{item.product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-lg"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-lg"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive ml-auto"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">৳{getCartTotal().toLocaleString()}</span>
              </div>
              <SheetClose asChild>
                <Link to="/checkout">
                  <Button className="w-full rounded-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/products" className="block">
                  <Button variant="outline" className="w-full rounded-full">
                    Continue Shopping
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
