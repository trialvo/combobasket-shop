import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fatima Rahman",
    location: "New York, USA",
    rating: 5,
    text: "Sent a birthday cake to my mother in Dhaka. The delivery was on time and she was so happy! The quality exceeded my expectations.",
    avatar: "F",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    location: "London, UK",
    rating: 5,
    text: "Amazing service! The flower bouquet I ordered for my wife's anniversary was absolutely beautiful. Same-day delivery worked perfectly.",
    avatar: "A",
  },
  {
    id: 3,
    name: "Nadia Islam",
    location: "Toronto, Canada",
    rating: 5,
    text: "Best gift delivery service in Bangladesh! I've used them multiple times and they never disappoint. Highly recommended!",
    avatar: "N",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trust us to deliver joy to their loved ones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
