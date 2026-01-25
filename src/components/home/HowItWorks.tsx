import { Search, CreditCard, Package, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Select",
    description: "Explore our curated collection of gifts and choose the perfect one for your loved ones.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Easy Checkout",
    description: "Secure payment with multiple options including bKash, Nagad, and card payments.",
  },
  {
    icon: Package,
    step: "03",
    title: "We Deliver",
    description: "Our team carefully packages and delivers your gift with same-day delivery available.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Spread Joy",
    description: "Watch your loved ones smile as they receive your thoughtful surprise gift.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sending gifts to Bangladesh has never been easier. Follow these simple steps 
            to surprise your loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
              )}
              
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-background rounded-3xl shadow-lg border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:shadow-xl transition-all">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
