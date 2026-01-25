import { Button } from "@/components/ui/button";
import { Gift, Truck, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
              🎁 #1 Gift Delivery Service in Bangladesh
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Send Love & Joy
              <span className="text-primary block">Across Bangladesh</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Surprise your loved ones with beautifully curated gifts. 
              Same-day delivery in Dhaka. Nationwide shipping available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 rounded-full">
                <Gift className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 rounded-full">
                Explore Categories
              </Button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center p-8">
                <Gift className="h-24 w-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Beautiful Gift Display</p>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-background shadow-lg rounded-2xl p-4 border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">On orders ৳2000+</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background shadow-lg rounded-2xl p-4 border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Same Day</p>
                  <p className="text-xs text-muted-foreground">Delivery in Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Free Delivery", desc: "On orders over ৳2000" },
            { icon: Clock, title: "Same Day Delivery", desc: "Order before 2 PM" },
            { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
            { icon: Gift, title: "Gift Wrapping", desc: "Beautifully wrapped" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-background/50 backdrop-blur rounded-xl border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
