import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  MapPin, 
  Truck, 
  CreditCard, 
  ShoppingBag,
  ArrowLeft,
  Lock,
  CheckCircle2
} from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });
  
  const [deliveryZone, setDeliveryZone] = useState<"inside-dhaka" | "outside-dhaka">("inside-dhaka");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryCharges = {
    "inside-dhaka": 60,
    "outside-dhaka": 120,
  };

  const subtotal = getCartTotal();
  const deliveryCharge = deliveryCharges[deliveryZone];
  const total = subtotal + deliveryCharge;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
    
    clearCart();
    
    navigate("/order-confirmation", { 
      state: { 
        orderId,
        customerName: formData.fullName,
        total,
        deliveryZone,
      } 
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">Add some products to continue checkout</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout - UpoharShop | Secure Payment & Fast Delivery</title>
        <meta name="description" content="Complete your gift order at UpoharShop. Secure checkout with cash on delivery. Fast delivery inside and outside Dhaka." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Customer Information
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Order as a guest - no account needed!
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01XXXXXXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House no, Road, Area"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="1000"
                      />
                    </div>
                  </div>

                  {/* Delivery Zone */}
                  <div className="space-y-3 pt-2">
                    <Label>Delivery Zone *</Label>
                    <RadioGroup 
                      value={deliveryZone} 
                      onValueChange={(value) => setDeliveryZone(value as "inside-dhaka" | "outside-dhaka")}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${deliveryZone === "inside-dhaka" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                        <RadioGroupItem value="inside-dhaka" id="inside-dhaka" />
                        <Label htmlFor="inside-dhaka" className="flex-grow cursor-pointer">
                          <span className="font-medium">Inside Dhaka</span>
                          <span className="block text-sm text-muted-foreground">
                            Delivery within 1-2 days
                          </span>
                          <Badge variant="secondary" className="mt-1">৳{deliveryCharges["inside-dhaka"]}</Badge>
                        </Label>
                      </div>
                      <div className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${deliveryZone === "outside-dhaka" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                        <RadioGroupItem value="outside-dhaka" id="outside-dhaka" />
                        <Label htmlFor="outside-dhaka" className="flex-grow cursor-pointer">
                          <span className="font-medium">Outside Dhaka</span>
                          <span className="block text-sm text-muted-foreground">
                            Delivery within 3-5 days
                          </span>
                          <Badge variant="secondary" className="mt-1">৳{deliveryCharges["outside-dhaka"]}</Badge>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions for delivery..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={(value) => setPaymentMethod(value as "cod" | "online")}
                    className="space-y-4"
                  >
                    <div className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-grow cursor-pointer">
                        <span className="font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Cash on Delivery
                        </span>
                        <span className="block text-sm text-muted-foreground">
                          Pay when you receive your order
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border rounded-lg p-4 opacity-50 cursor-not-allowed bg-muted/30">
                      <RadioGroupItem value="online" id="online" disabled />
                      <Label htmlFor="online" className="flex-grow cursor-not-allowed">
                        <span className="font-medium flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Online Payment
                          <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                        </span>
                        <span className="block text-sm text-muted-foreground">
                          bKash, Nagad, Card payment
                        </span>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <img
                          src={item.product.images[0] || "/placeholder.svg"}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-grow">
                          <h4 className="text-sm font-medium line-clamp-1">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-medium">
                            ৳{(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>৳{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Delivery ({deliveryZone === "inside-dhaka" ? "Inside Dhaka" : "Outside Dhaka"})
                      </span>
                      <span>৳{deliveryCharge}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">৳{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By placing an order, you agree to our Terms & Conditions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default Checkout;
