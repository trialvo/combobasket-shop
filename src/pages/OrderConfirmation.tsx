import { useLocation, Link, Navigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Package, Phone, ArrowRight } from "lucide-react";

interface OrderState {
  orderId: string;
  customerName: string;
  total: number;
  deliveryZone: "inside-dhaka" | "outside-dhaka";
}

const OrderConfirmation = () => {
  const location = useLocation();
  const state = location.state as OrderState | null;

  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { orderId, customerName, total, deliveryZone } = state;

  const deliveryTime = deliveryZone === "inside-dhaka" ? "1-2 days" : "3-5 days";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            {/* Success Header */}
            <div className="bg-green-500 text-white p-8 text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Order Placed Successfully!
              </h1>
              <p className="text-green-100">
                Thank you for your order, {customerName}
              </p>
            </div>

            <CardContent className="p-6 md:p-8 space-y-6">
              {/* Order ID */}
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                <p className="text-xl font-bold font-mono">{orderId}</p>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <Package className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium">{deliveryTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">৳</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Amount</p>
                    <p className="font-medium">৳{total.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium mb-1">Payment: Cash on Delivery</p>
                <p className="text-sm text-amber-700">
                  Please keep ৳{total.toLocaleString()} ready at the time of delivery.
                </p>
              </div>

              {/* What's Next */}
              <div className="space-y-3">
                <h3 className="font-semibold">What's Next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">1</span>
                    You will receive a confirmation call shortly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">2</span>
                    Your order will be prepared and dispatched
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">3</span>
                    Delivery within {deliveryTime} to your address
                  </li>
                </ul>
              </div>

              {/* Contact Support */}
              <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Need help? Call us at</span>
                <a href="tel:+8801700000000" className="font-medium text-primary hover:underline">
                  +880 1700-000000
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link to="/products">
                    Continue Shopping
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
